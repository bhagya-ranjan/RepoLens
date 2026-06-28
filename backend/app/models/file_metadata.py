from pydantic import BaseModel


class FileMetadata(BaseModel):
    file_name: str
    file_path: str
    relative_path: str
    extension: str
    language: str
    size: int