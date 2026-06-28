from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os

router = APIRouter()


class FileRequest(BaseModel):
    relative_path: str


REPOSITORY_ROOT = "storage/repositories"


@router.post("/file")
def get_file(request: FileRequest):

    for root, _, files in os.walk(REPOSITORY_ROOT):

        for file in files:

            full_path = os.path.join(root, file)

            if full_path.replace("\\", "/").endswith(
                request.relative_path.replace("\\", "/")
            ):

                with open(full_path, "r", encoding="utf-8") as f:

                    return {
                        "file_name": file,
                        "content": f.read(),
                    }

    raise HTTPException(404, "File not found")