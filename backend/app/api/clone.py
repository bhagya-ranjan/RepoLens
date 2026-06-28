from fastapi import APIRouter, HTTPException

from app.models.repository import RepositoryRequest
from app.services.git_service import clone_repository
from app.services.indexer_service import index_repository

router = APIRouter(tags=["Repository"])


@router.post("/clone")
def clone_repo(request: RepositoryRequest):
    """
    Clone a GitHub repository or index a local repository.
    """

    try:
        # Local repository
        if request.local_path:
            repository_path = request.local_path
            repository_name = repository_path.rstrip("\\/").split("\\")[-1].split("/")[-1]

        # GitHub repository
        elif request.github_url:
            repo = clone_repository(request.github_url)
            repository_path = repo["repository_path"]
            repository_name = repo["repository_name"]

        else:
            raise HTTPException(
                status_code=400,
                detail="Either github_url or local_path must be provided."
            )

        # Index the repository
        stats = index_repository(repository_path)

        return {
            "success": True,
            "repository": repository_name,
            "documents_indexed": stats["documents"],
            "chunks_indexed": stats["chunks"]
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )