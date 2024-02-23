import aiofiles
from fastapi import UploadFile, HTTPException
from sqlalchemy import and_, select
from sqlalchemy.orm import joinedload
from starlette import status

from src.repositories.base import SQLAlchemyRepository, BaseRepository
from src.database.models.pets import Pet, BloodDonationTransaction
from src.database.db import async_session
from src.schemas.base import BaseFilterData
from src.schemas.pets import GetPetDTO, CreatePetDTO, UpdatePetDTO, TransactionType, CreateDonationTransactionDTO, \
    GetDonationTransactionDTO, UpdateDonationTransactionDTO, PetFilterData, TransactionFilterData, GetDonationTransactionWithRelatedDTO
from src.services.files import download_image


class PetsRepository(BaseRepository, SQLAlchemyRepository):
    model = Pet
    
    async def get(self, pet_id: int):
        async with async_session() as session:
            return await self.get_object(
                session,
                self.model.id == pet_id,
                GetPetDTO
            )

    async def get_all(self, limit: int = 1000, offset: int = 0, filter_data: PetFilterData | None = None):
        async with async_session() as session:
            return await self.get_objects(
                session,
                GetPetDTO,
                limit,
                offset,
                filter_data=filter_data
            )

    async def create(self, owner_id: int, data: CreatePetDTO, image_file: UploadFile):
        file_path = await download_image(image_file)

        async with async_session() as session:
            return await self.create_object(
                session,
                data,
                GetPetDTO,
                owner_id=owner_id,
                photo=file_path
            )

    async def update(self, pet_id: int, data: UpdatePetDTO, file_image: UploadFile):
        file_path = await download_image(file_image)
        async with async_session() as session:
            return await self.update_values(
                session,
                self.model.id == pet_id,
                **data.model_dump(),
                photo=file_path
            )

    async def delete(self, pet_id: int):
        async with async_session() as session:
            await self.delete_object(
                session,
                self.model.id == pet_id
            )


class BloodDonationTransactionRepository(BaseRepository, SQLAlchemyRepository):
    model = BloodDonationTransaction

    async def get(self, transaction_type: TransactionType, transaction_id: int) -> GetDonationTransactionDTO | None:
        async with async_session() as session:
            return await self.get_object(
                session,
                and_(self.model.type == transaction_type, self.model.id == transaction_id),
                GetDonationTransactionWithRelatedDTO,
                (joinedload(self.model.related_transaction), joinedload(self.model.subject))
            )

    async def get_all(self, transaction_type: TransactionType, limit: int = 100, offset: int = 0, filter_data: TransactionFilterData | None = None) -> list[GetDonationTransactionDTO]:
        async with async_session() as session:
            return await self.get_objects(
                session,
                GetDonationTransactionWithRelatedDTO,
                limit,
                offset,
                (joinedload(self.model.subject), joinedload(self.model.related_transaction)),
                filter_data=filter_data
            )

    async def create(self, transaction_type: TransactionType, data: CreateDonationTransactionDTO) -> GetDonationTransactionDTO | None:
        async with async_session() as session:
            new_obj = self.model(**data.model_dump(), type=transaction_type)
            session.add(new_obj)
            await session.commit()
            await session.refresh(new_obj)

            query = select(self.model).where(self.model.id == new_obj.id).options(joinedload(self.model.subject))
            result = await session.execute(query)
            db_obj = result.scalar_one_or_none()

            if db_obj is None:
                return db_obj

            return GetDonationTransactionDTO.model_validate(db_obj, from_attributes=True)

    async def update(self, transaction_type: TransactionType, transaction_id: int, data: UpdateDonationTransactionDTO) -> None:
        async with async_session() as session:
            await self.update_object(
                session,
                data,
                and_(BloodDonationTransaction.id == transaction_id, BloodDonationTransaction.type == transaction_type)
            )

    async def delete(self, transaction_type: TransactionType, transaction_id: int) -> None:
        async with async_session() as session:
            await self.delete_object(
                session,
                and_(BloodDonationTransaction.id == transaction_id, BloodDonationTransaction.type == transaction_type)
            )

    async def bind_transactions(self, transaction_type: TransactionType, transaction_id: int, related_transaction_id: int):
        transaction = await self.get(transaction_type, transaction_id)

        if transaction is None:
            raise HTTPException(status.HTTP_400_BAD_REQUEST, 'Данных по запросу не найдено.')

        if transaction.related_transaction_id is not None:
            raise HTTPException(status.HTTP_400_BAD_REQUEST, 'Этот питомец уже иммеет отклик')

        async with async_session() as session:
            related_transaction = await self.get_object(
                session,
                self.model.id == related_transaction_id,
                GetDonationTransactionDTO,
                joinedload(self.model.subject)
            )

            if related_transaction is None:
                raise HTTPException(status.HTTP_400_BAD_REQUEST, 'Данных по запросу не найдено.')

            if transaction.type == related_transaction.type:
                raise HTTPException(status.HTTP_400_BAD_REQUEST, 'Для связывания посты должны иметь разные типы')

            if related_transaction.related_transaction_id is not None:
                raise HTTPException(status.HTTP_400_BAD_REQUEST, 'Этот питомец уже иммеет отклик')

            await self.update_values(
                session,
                self.model.id == transaction_id,
                related_transaction_id=related_transaction_id,

            )
            await self.update_values(
                session,
                self.model.id == related_transaction_id,
                related_transaction_id=transaction_id,

            )

