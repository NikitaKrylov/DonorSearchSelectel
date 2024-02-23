from fastapi import HTTPException
from starlette import status

from src.database.db import async_session
from src.database.models.users import User
from src.repositories.base import SQLAlchemyRepository, BaseRepository
from src.schemas.users import GetUserDTO, CreateUserDTO, UpdateUserDTO, UserFilterData


class UserRepository(BaseRepository, SQLAlchemyRepository):
    model = User

    async def get(self, user_id: int) -> GetUserDTO:
        async with async_session() as session:
            return await self.get_object(
                session,
                self.model.id == user_id,
                GetUserDTO
            )

    async def create(self, data: CreateUserDTO) -> GetUserDTO:
        existed_user = await self.get_one_by(self.model.email == data.email, True)

        if existed_user is not None:
            raise HTTPException(status.HTTP_400_BAD_REQUEST, "Пользователь с такой почтой уже существует.")

        async with async_session() as session:
            return await self.create_object(
                session,
                data,
                GetUserDTO
            )

    async def update(self, user_id: int, data: UpdateUserDTO) -> None:
        async with async_session() as session:
            return await self.update_object(
                session,
                data,
                self.model.id == user_id
            )

    async def delete(self, user_id: int) -> None:
        async with async_session() as session:
            return await self.delete_object(
                session,
                self.model.id == user_id
            )

    async def get_all(self, limit: int = 1000, offset: int = 0, filter_data: UserFilterData | None = None):
        async with async_session() as session:
            return await self.get_objects(
                session,
                GetUserDTO,
                limit,
                offset,
                filter_data=filter_data
            )

    async def get_one_by(self, expression, allow_none: bool = True) -> GetUserDTO:
        async with async_session() as session:
            return await self.get_one_object_by(
                session,
                expression,
                GetUserDTO,
                allow_none
            )

