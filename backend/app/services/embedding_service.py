from app.core.embedding_model import embedding_model


def generate_embedding(text: str) -> list[float]:
    """
    Generate vector embedding.
    """

    return embedding_model.encode(
        text,
        convert_to_numpy=True
    ).tolist()