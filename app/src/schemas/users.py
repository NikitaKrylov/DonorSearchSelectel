from pydantic import BaseModel
from .base import BaseFilterData


class GetUserDTO(BaseModel):
    id: int
    email: str
    address: str | None = None
    age: int | None = None
    password: str
    photo: str | None = None
    telegram: str | None = None
    phone: str | None = None
    share_contacts: bool = True


class CreateUserDTO(BaseModel):
    email: str
    password: str


class UpdateUserDTO(BaseModel):
    pass


class TokenData(BaseModel):
    user_id: int | None


class Token(BaseModel):
    access_token: str
    token_type: str


class UserFilterData(BaseFilterData):
    email: str | None = None


