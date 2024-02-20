from sqlalchemy.orm import Mapped, mapped_column

from src.database import Base


class User(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(index=True)
    password: Mapped[str]
    address: Mapped[str | None] = mapped_column(default=None)
    age: Mapped[int | None] = mapped_column(default=None)


class DonationRequest(Base):
    __tablename__ = 'donation_requests'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    pet_type: Mapped[str]
    age: Mapped[int]
    is_first: Mapped[bool] = mapped_column(default=True)





