from sentence_transformers import SentenceTransformer

# Load the embedding model only once when the backend starts
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")