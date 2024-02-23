from datetime import datetime

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
    photo: Mapped[str]
    age: Mapped[int]
    pet_type: Mapped[PetType]
    blood_type: Mapped[str]
    has_graft: Mapped[bool]
    breed: Mapped[str]


class BloodDonationTransaction(Base):
    __tablename__ = 'blood_donation_transactions'

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    subject: Mapped[Pet] = relationship(uselist=False, lazy='immediate')
    subject_id: Mapped[int] = mapped_column(ForeignKey('pets.id', ondelete='CASCADE'))
    related_transaction_id: Mapped[int] = mapped_column(ForeignKey('blood_donation_transactions.id'), nullable=True, default=None)
    related_transaction: Mapped['BloodDonationTransaction'] = relationship(uselist=False)
    reason: Mapped[str]
    volume: Mapped[float]
    type: Mapped[TransactionType]
    status: Mapped[DonationTransactionStatus]
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

