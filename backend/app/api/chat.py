from fastapi import APIRouter

from app.models.chat import ChatRequest
from app.services.chat_service import chat

router = APIRouter(tags=["Chat"])


@router.post("/chat")
def ask(request: ChatRequest):

    return chat(request.question)