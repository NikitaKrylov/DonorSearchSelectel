from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from src.schemas.pets import PetType, TransactionType, DonationTransactionStatus
from src.database.db import Base


class Pet(Base):
    __tablename__ = 'pets'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'))
    owner: Mapped['User'] = relationship(back_populates='pets', uselist=False)

    name: Mapped[str]
    age: Mapped[int]
    pet_type: Mapped[PetType]
    blood_type: Mapped[str]
    has_graft: Mapped[bool]
    breed: Mapped[str]


class BloodDonationTransaction(Base):
    __tablename__ = 'blood_donation_transactions'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    subject: Mapped[Pet] = relationship(uselist=False)
    subject_id: Mapped[int] = mapped_column(ForeignKey('pets.id', ondelete='CASCADE'))
    reason: Mapped[str]
    volume: Mapped[float]
    type: Mapped[TransactionType]
    status: Mapped[DonationTransactionStatus]

