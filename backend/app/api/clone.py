from fastapi import APIRouter

from app.models.repository import RepositoryRequest
from app.services.git_service import clone_repository

router = APIRouter()


@router.post("/clone")
def clone_repo(request: RepositoryRequest):

    result = clone_repository(request.github_url)

    return {
        "success": True,
        "message": "Repository cloned successfully",
        "data": result
    }