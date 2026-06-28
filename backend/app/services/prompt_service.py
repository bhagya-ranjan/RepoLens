def build_prompt(question: str, retrieval_result: dict) -> str:

    documents = retrieval_result["documents"][0]
    metadatas = retrieval_result["metadatas"][0]

    context = ""

    for i, (doc, meta) in enumerate(zip(documents, metadatas), start=1):

        context += f"""
========== CONTEXT {i} ==========
File: {meta['relative_path']}
Language: {meta['language']}

{doc}

=================================

"""

    prompt = f"""
You are RepoLens AI, an expert software engineering assistant.

Your task is to answer questions ONLY using the repository context provided below.

Rules:
1. Do NOT invent information.
2. If the answer is not found in the context, say:
   "I couldn't find this information in the indexed repository."
3. Prefer backend implementation over frontend UI when both exist.
4. Mention function names whenever possible.
5. Cite the file paths you used.

Repository Context:

{context}

User Question:

{question}

Return your answer in this format:

Answer:
<technical explanation>

Referenced Files:
- file1
- file2
"""
    return prompt