from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_pagination import add_pagination # Importe aqui
from workout_api.routers import api_router

app = FastAPI(title='WorkoutAPI')

# Liberando o acesso para o seu Frontend Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"], # Porta padrão do Angular
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

# Adicione esta linha no final do arquivo
add_pagination(app)