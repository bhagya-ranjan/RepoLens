import api from "./api";

export async function askQuestion(question: string) {
  const response = await api.post("/chat", {
    question,
  });

  return response.data;
}