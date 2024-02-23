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


class DonationRequestStatus(str, Enum):
    pass


class TransactionType(str, Enum):
    REQUEST = 'request'
    SUGGESTION = 'suggestion'


class CreatePetDTO(BaseModel):
    name: str
    age: int
    pet_type: PetType
    blood_type: str


class GetPetDTO(CreatePetDTO):
    id: int


class GetPetWithOwnerDTO(GetPetDTO):
    owner: 'User'


class UpdatePetDTO(CreatePetDTO):
    pass


class PetFilterData(BaseFilterData):
    owner_id: int | None = None
    pet_type: PetType | None = None
    blood_type: str | None = None


class GetDonationTransactionDTO(BaseModel):
    id: int

    subject: GetPetDTO
    volume: float
    type: TransactionType
    status: str


class CreateDonationTransactionDTO(BaseModel):
    subject_id: int
    volume: float
    status: str


class UpdateDonationTransactionDTO(BaseModel):
    volume: float
    type: TransactionType
    status: str


class TransactionFilterData(BaseFilterData):
    type: TransactionType | None = None
    status: str | None = None
    subject_id: int | None = None
    volume: int | None = None
