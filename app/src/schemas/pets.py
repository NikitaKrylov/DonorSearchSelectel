from datetime import datetime

from fastapi import UploadFile
from fastapi.params import Form, File
from pydantic import BaseModel
from enum import Enum
from .base import BaseFilterData


class PetType(str, Enum):
    DOG = 'Собака'
    CAT = 'Кошка'
    PARROT = 'Попугай'
    BIRD = 'Птица'
    HAMSTER = 'Хомяк'
    GUINEA_PIG = 'Морская свинка'
    RABBIT = 'Кролик'
    CHINCHILLA = 'Шиншила'
    HORSE = 'Лошадь'


class DonationTransactionStatus(str, Enum):
    ACTIVE = 'Активна'
    COMPLETED = 'Завершена'
    IN_PROGRESS = 'В процессе/обработке'


class TransactionType(str, Enum):
    REQUEST = 'request'
    SUGGESTION = 'suggestion'


class CreatePetDTO(BaseModel):
    name: str
    age: int
    pet_type: PetType
    blood_type: str
    breed: str
    has_graft: bool


class GetPetDTO(CreatePetDTO):
    id: int
    photo: str


class GetPetWithOwnerDTO(GetPetDTO):
    owner: 'User'


class UpdatePetDTO(CreatePetDTO):
    pass


class PetFilterData(BaseFilterData):
    owner_id: int | None = None
    pet_type: PetType | None = None
    blood_type: str | None = None
    breed: str | None = None


class GetDonationTransactionDTO(BaseModel):
    id: int

    subject: GetPetDTO
    volume: float
    type: TransactionType
    status: DonationTransactionStatus
    reason: str
    created_at: datetime


class CreateDonationTransactionDTO(BaseModel):
    subject_id: int
    volume: float
    status: DonationTransactionStatus
    reason: str


class UpdateDonationTransactionDTO(BaseModel):
    volume: float
    type: TransactionType
    status: DonationTransactionStatus
    reason: str


class TransactionFilterData(BaseFilterData):
    type: TransactionType | None = None
    status: DonationTransactionStatus | None = None
    subject_id: int | None = None
    volume: int | None = None
