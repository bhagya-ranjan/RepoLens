import uuid

from app.core.chroma import collection
from app.services.embedding_service import generate_embedding


def add_chunks(chunks: list):
    """
    Store all chunks in ChromaDB using batch insertion.
    """

    # Clear previous collection (MVP: one repository at a time)
    existing = collection.get()

    if existing["ids"]:
        collection.delete(ids=existing["ids"])

    ids = []
    embeddings = []
    documents = []
    metadatas = []

    for chunk in chunks:
        ids.append(str(uuid.uuid4()))
        embeddings.append(generate_embedding(chunk["content"]))
        documents.append(chunk["content"])
        metadatas.append(chunk["metadata"])

    collection.add(
        ids=ids,
        embeddings=embeddings,
        documents=documents,
        metadatas=metadatas,
    )