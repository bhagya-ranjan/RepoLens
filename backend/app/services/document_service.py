from app.models.document import Document
from app.models.file_metadata import FileMetadata


def build_document(file_info: FileMetadata):
    """
    Build a Document object from FileMetadata.
    """

    try:
        with open(file_info.file_path, "r", encoding="utf-8") as file:
            content = file.read()

    except Exception:
        return None

    return Document(
        file_name=file_info.file_name,
        file_path=file_info.file_path,
        relative_path=file_info.relative_path,
        extension=file_info.extension,
        language=file_info.language,
        size=file_info.size,
        content=content
    )