from pydantic import BaseModel


class GetUserDTO(BaseModel):
    id: int
    email: str
    address: str | None
    age: int | None
    password: str


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

