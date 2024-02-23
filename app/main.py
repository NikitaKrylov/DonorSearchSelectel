import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from src.routes.users import router as user_router
from src.routes.donations import router as donation_router
from src.routes.pets import router as pets_router
from src.configs.base import config
from src.database.db import init_models

app: FastAPI = FastAPI()

origins = [
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:3000',
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(user_router)
app.include_router(pets_router)
app.include_router(donation_router)


@app.on_event('startup')
async def startup():
    if config.reset_db:
        await init_models()
        print('database reseted')


if __name__ == '__main__':

    uvicorn.run(app, host='0.0.0.0', port=8000)
