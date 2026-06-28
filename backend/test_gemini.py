from app.services.gemini_service import ask_gemini

response = ask_gemini(
    "Explain what Retrieval Augmented Generation is in two sentences."
)

print(response)