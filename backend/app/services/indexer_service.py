import os

from app.services.scanner_service import scan_repository
from app.services.document_service import build_document
from app.services.chunk_service import chunk_documents
from app.services.vector_store_service import add_chunks
from app.core.chroma import collection

def index_repository(repository_path: str):
    """
    Complete indexing pipeline.
    """

    # Clear previous repository
    ids = collection.get()["ids"]

    if ids:
        collection.delete(ids=ids)

    repository_name = os.path.basename(repository_path)

    scanned_files = scan_repository(repository_path)

    documents = []

    for file_info in scanned_files:

        document = build_document(file_info)

        if document:
            documents.append(document)

    chunks = chunk_documents(documents)

    # Add repository name to every chunk
    for chunk in chunks:
        chunk["metadata"]["repository"] = repository_name

    add_chunks(chunks)

    return {
        "documents": len(documents),
        "chunks": len(chunks)
    }