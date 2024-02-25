from datetime import datetime

from sqlalchemy import ForeignKey, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from src.schemas.pets import PetType, TransactionType, DonationTransactionStatus, PetSex
from src.database.db import Base


class Pet(Base):
    __tablename__ = 'pets'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'))
    owner: Mapped['User'] = relationship(back_populates='pets', uselist=False)

    name: Mapped[str]
    photo: Mapped[str]
    age: Mapped[int]
    weight: Mapped[float]
    pet_type: Mapped[PetType]
    blood_type: Mapped[str]
    has_graft: Mapped[bool]
    breed: Mapped[str]
    sex: Mapped[PetSex]


class BloodDonationTransaction(Base):
    __tablename__ = 'blood_donation_transactions'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    subject: Mapped[Pet] = relationship(uselist=False, lazy='immediate')
    subject_id: Mapped[int] = mapped_column(ForeignKey('pets.id', ondelete='CASCADE'))
    related_transaction_id: Mapped[int] = mapped_column(ForeignKey('blood_donation_transactions.id'), nullable=True, default=None)
    related_transaction: Mapped['BloodDonationTransaction'] = relationship(uselist=False)
    reason: Mapped[str | None]
    volume: Mapped[float | None]
    type: Mapped[TransactionType]
    status: Mapped[DonationTransactionStatus]
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
    relevant_until: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), default=datetime.utcnow)
    document: Mapped[str | None] = mapped_column(default=None)
    location: Mapped[str]
