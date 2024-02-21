from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

from src.services import users as service
from src.repositories.users import UserRepository
from src.schemas.users import GetUserDTO, CreateUserDTO, UpdateUserDTO, Token
from src.dependencies.users import get_current_user

router = APIRouter(
    tags=['Users'],
    prefix='/users'
)

repository = UserRepository()


@router.get('', response_model=list[GetUserDTO])
async def get_users(limit: int = 100, offset: int = 0):
    return await repository.get_all(limit, offset)


@router.get('/me')
async def test_me(user=Depends(get_current_user)):
    return user


@router.post('', response_model=GetUserDTO)
async def create_user(data: CreateUserDTO):
    return await service.register_user(data)


@router.get('/{user_id}', response_model=GetUserDTO | None)
async def get_user(user_id: int):
    return await repository.get(user_id)


@router.delete('/{user_id}')
async def delete_user(user_id: int):
    return await repository.delete(user_id)


@router.patch('/{user_id}')
async def change_user(user_id: int, data: UpdateUserDTO):
    return await repository.update(user_id, data)


@router.post('/login', response_model=Token)
async def login(login_form: OAuth2PasswordRequestForm = Depends()):
    token = await service.login_user(login_form.username, login_form.password)
    return token

