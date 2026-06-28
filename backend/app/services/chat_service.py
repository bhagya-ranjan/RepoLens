from app.services.retrieval_service import retrieve
from app.services.prompt_service import build_prompt
from app.services.gemini_service import ask_gemini


def chat(question: str):

    retrieval = retrieve(question, n_results=8)

    prompt = build_prompt(question, retrieval)

    answer = ask_gemini(prompt)

    return {
        "answer": answer,
        "sources": retrieval["metadatas"][0]
    }