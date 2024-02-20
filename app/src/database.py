from typing import Type
from pydantic import BaseModel
from sqlalchemy import select, ColumnElement, update
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.sql._typing import _HasClauseElement
from sqlalchemy.sql.elements import SQLCoreOperations
from .config import config


engine = create_async_engine(
    config.db_url,
    future=True,
    echo=False,
    pool_pre_ping=True
)


class Base(DeclarativeBase):
    pass


async_session = async_sessionmaker(
    engine,
    expire_on_commit=False,
    class_=AsyncSession
)


async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)


async def create_object(
        session: AsyncSession,
        model: Type[Base],
        data: BaseModel,
        model_schema: Type[BaseModel]
) -> BaseModel:
    new_obj = model(**data.model_dump())
    session.add(new_obj)
    await session.commit()
    await session.refresh(new_obj)
    return model_schema.model_validate(new_obj, from_attributes=True)


async def get_object(
        session: AsyncSession,
        model: Type[Base],
        expression:  ColumnElement[bool] | _HasClauseElement[bool] | SQLCoreOperations[bool],
        model_schema: Type[BaseModel]
) -> BaseModel | None:
    query = select(model).where(expression)
    result = await session.execute(query)
    _obj = result.scalar_one_or_none()

    if _obj is None:
        return _obj

    return model_schema.model_validate(_obj, from_attributes=True)


async def update_object(
        session: AsyncSession,
        model: Type[Base],
        data: BaseModel,
        expression:  ColumnElement[bool] | _HasClauseElement[bool] | SQLCoreOperations[bool],
):
    stmp = update(model).where(expression).values(**data.model_dump())
    await session.execute(stmp)
    await session.commit()
