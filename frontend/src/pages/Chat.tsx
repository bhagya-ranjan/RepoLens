import { useState, useRef, useEffect } from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import { askQuestion } from "../services/chat";
import MessageBubble from "../components/chat/MessageBubble";
import CodeViewer from "../components/chat/CodeViewer";
import { getFile } from "../services/file";

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: any[];
};

export default function Chat() {
    
    const [messages, setMessages] = useState<Message[]>([]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [viewerOpen, setViewerOpen] = useState(false);
    const openSource = async (source:any) => {

    try{

        const file = await getFile(source.relative_path);

        setSelectedFile({
            fileName:file.file_name,
            language:source.language,
            code:file.content
        });

        setViewerOpen(true);

    }catch(err){
        console.log(err);
    }

}

    const [selectedFile, setSelectedFile] = useState({
        fileName:"",
        language:"",
        code:"",
    });
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, [messages, loading]);
    const sendMessage = async () => {
  if (!question.trim() || loading) return;

  const currentQuestion = question;

  setMessages((m) => [
    ...m,
    {
      role: "user",
      content: currentQuestion,
    },
  ]);

  setQuestion("");
  setLoading(true);

  try {
    const res = await askQuestion(currentQuestion);

    setMessages((m) => [
      ...m,
      {
        role: "assistant",
        content: res.answer,
        sources: res.sources,
      },
    ]);
  } catch (err) {
    setMessages((m) => [
      ...m,
      {
        role: "assistant",
        content: "❌ Failed to contact the server.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="flex h-[calc(100vh-64px)]">

      <ChatSidebar />

      <main className="flex flex-1 flex-col">

        <div className="flex-1 overflow-y-auto p-8">

          <h1 className="mb-6 text-3xl font-bold">
            RepoLens AI
          </h1>

          <div className="flex flex-col gap-6">

            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                role={message.role}
                content={message.content}
                sources={message.sources}
                onSourceClick={openSource}
              />
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-2 w-2 animate-bounce rounded-full bg-violet-400" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:300ms]" />
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

        </div>

        <div className="border-t border-white/10 p-6">

  <div className ="flex gap-3">

    <input
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !loading) {
          sendMessage();
        }
      }}
      placeholder="Ask about this repository..."
      className="flex-1 rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none"
    />

    <button
      onClick={sendMessage}
      disabled={loading}
      className="rounded-xl bg-violet-600 px-8 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "..." : "Send"}
    </button>

  </div>

</div>

      </main>
      <CodeViewer
    open={viewerOpen}
    onClose={() => setViewerOpen(false)}
    fileName={selectedFile.fileName}
    language={selectedFile.language}
    code={selectedFile.code}
/>

    </div>
  );
}