from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import curriculum, characters

app = FastAPI(title="Fun-Gus API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(curriculum.router, prefix="/api/curriculum", tags=["curriculum"])
app.include_router(characters.router, prefix="/api/characters", tags=["characters"])


@app.get("/")
def root():
    return {"status": "ok", "project": "fun-gus"}
