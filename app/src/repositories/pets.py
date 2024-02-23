from sqlalchemy import and_, select
from sqlalchemy.orm import joinedload

from src.repositories.base import SQLAlchemyRepository, BaseRepository
from src.database.models.pets import Pet, BloodDonationTransaction
from src.database.db import async_session
from src.schemas.base import BaseFilterData
from src.schemas.pets import GetPetDTO, CreatePetDTO, UpdatePetDTO, TransactionType, CreateDonationTransactionDTO, \
    GetDonationTransactionDTO, UpdateDonationTransactionDTO, PetFilterData, TransactionFilterData


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

    async def create(self, owner_id: int, data: CreatePetDTO):
        async with async_session() as session:
            return await self.create_object(
                session,
                data,
                GetPetDTO,
                owner_id=owner_id
            )

    async def update(self, pet_id: int, data: UpdatePetDTO):
        async with async_session() as session:
            return await self.update_object(
                session,
                data,
                self.model.id == pet_id
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
                GetDonationTransactionDTO,
                joinedload(self.model.subject)
            )

    async def get_all(self, transaction_type: TransactionType, limit: int = 100, offset: int = 0, filter_data: TransactionFilterData | None = None) -> list[GetDonationTransactionDTO]:
        async with async_session() as session:
            return await self.get_objects(
                session,
                GetDonationTransactionDTO,
                limit,
                offset,
                joinedload(self.model.subject),
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

