from app.core.chroma import collection
from app.services.embedding_service import generate_embedding


SIMILARITY_THRESHOLD = 1.2


def retrieve(query: str, n_results: int = 10):
    """
    Retrieve the most relevant chunks for a query.
    """

    query_embedding = generate_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )

    print("=" * 60)
    print(results["documents"][0])
    print("=" * 60)

    return results

    filtered_documents = []
    filtered_metadatas = []
    filtered_distances = []

    documents = results["documents"][0]
    metadatas = results["metadatas"][0]
    distances = results["distances"][0]

    for doc, meta, distance in zip(documents, metadatas, distances):

        if distance <= SIMILARITY_THRESHOLD:
            filtered_documents.append(doc)
            filtered_metadatas.append(meta)
            filtered_distances.append(distance)

    return {
        "documents": [filtered_documents],
        "metadatas": [filtered_metadatas],
        "distances": [filtered_distances],
    }