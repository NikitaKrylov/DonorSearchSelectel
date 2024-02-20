import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import asyncio
from src.users.routes import router as user_router
from src.database import Base, init_models


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


@app.on_event('startup')
async def startup():
    pass
    # await init_models()


if __name__ == '__main__':

    uvicorn.run(app, host='0.0.0.0', port=8000)
