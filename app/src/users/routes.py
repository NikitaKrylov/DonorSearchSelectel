from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from .services import auth_user, register_user, login_user, get_current_user
from .schemas import CreateUserDTO, UpdateUserDTO, GetUserDTO, Token
from ..dependencies import get_async_session

router = APIRouter(
    tags=['Users'],
    prefix='/users'
)


@router.get('', response_model=list[GetUserDTO])
async def get_users(limit: int = 100, offset: int = 0):
    pass


@router.get('/me')
async def test_me(user=Depends(get_current_user)):
    return user


@router.post('', response_model=GetUserDTO)
async def create_user(data: CreateUserDTO, session=Depends(get_async_session)):
    return await register_user(session, data)


@router.get('/{user_id}', response_model=GetUserDTO)
async def get_user(user_id: int):
    return


@router.delete('/{user_id}')
async def delete_user(user_id: int):
    pass


@router.patch('/{user_id}')
async def change_user(user_id: int, data: UpdateUserDTO):
    pass


@router.post('/login', response_model=Token)
async def login(login_form: OAuth2PasswordRequestForm = Depends(), session=Depends(get_async_session)):
    token = await login_user(session, login_form.username, login_form.password)
    return token

