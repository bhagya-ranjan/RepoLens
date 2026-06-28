from typing import List
import os
from app.models.document import Document


CHUNK_SIZE = 700
CHUNK_OVERLAP = 150


def chunk_document(document: Document):

    chunks = []

    content = document.content

    start = 0

    while start < len(content):

        end = min(start + CHUNK_SIZE, len(content))

        chunk = {
            "content": content[start:end],
            "metadata": {
                "repository": "",
                "file_name": document.file_name,
                "relative_path": document.relative_path,
                "language": document.language,
                "start_char": start,
                "end_char": end
            }
        }

        chunks.append(chunk)

        start += CHUNK_SIZE - CHUNK_OVERLAP

    return chunks


def chunk_documents(documents: List[Document]):

    all_chunks = []

    for document in documents:

        all_chunks.extend(chunk_document(document))

    return all_chunks