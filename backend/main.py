from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.clone import router as clone_router

app = FastAPI(
    title="RepoLens AI API",
    description="Backend API for RepoLens AI",
    version="1.0.0"
)

# Allow frontend (React) to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # We'll restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to RepoLens AI 🚀",
        "status": "running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# Register Clone API
app.include_router(clone_router)