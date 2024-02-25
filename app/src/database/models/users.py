from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from src.database.db import Base


class User(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str]
    email: Mapped[str] = mapped_column(index=True, unique=True)
    photo: Mapped[str | None]
    password: Mapped[str]
    address: Mapped[str | None] = mapped_column(default=None)
    age: Mapped[int | None] = mapped_column(default=None)
    pets: Mapped[list['Pet']] = relationship(back_populates='owner', uselist=True)
    phone: Mapped[str | None]
    telegram: Mapped[str | None]
    share_contacts: Mapped[bool] = True








