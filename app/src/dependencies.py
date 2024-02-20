from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession
from .database import async_session


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session


async def get_current_user():
    pass
