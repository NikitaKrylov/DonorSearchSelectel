from fastapi import APIRouter, Depends, UploadFile, File
from src.dependencies.users import get_current_user
from src.schemas.pets import GetPetDTO, UpdatePetDTO, CreatePetDTO, PetFilterData
from src.repositories.pets import PetsRepository

router = APIRouter(
    tags=['Pets'],
    prefix='/pets'
)

repository = PetsRepository()


@router.get('', response_model=list[GetPetDTO])
async def get_pets(limit: int = 1000, offset: int = 0, filter_data: PetFilterData = Depends(PetFilterData)):
    return await repository.get_all(limit, offset, filter_data=filter_data)


@router.get('/{pet_id}', response_model=GetPetDTO | None)
async def get_pet(pet_id: int):
    return await repository.get(pet_id)


@router.post('')
async def create_pet(data: CreatePetDTO = Depends(), file_image: UploadFile = File(), current_user=Depends(get_current_user)):
    return await repository.create(current_user.id, data, file_image)


@router.delete('/{pet_id}')
async def delete_pet(pet_id: int):
    return await repository.delete(pet_id)


@router.patch('/{pet_id}')
async def change_pet_info(pet_id: int, data: UpdatePetDTO):
    return await repository.update(pet_id, data)





