from pydantic import BaseModel
from typing import Optional


class RepositoryRequest(BaseModel):
    github_url: Optional[str] = None
    local_path: Optional[str] = None