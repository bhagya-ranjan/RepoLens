import chromadb

client = chromadb.PersistentClient(
    path="storage/chroma_db"
)

collection = client.get_or_create_collection(
    name="repository_chunks"
)