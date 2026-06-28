import ReactMarkdown from "react-markdown";
import SourceCard from "./SourceCard";

interface Source {
  file_name: string;
  relative_path: string;
  language: string;
}

interface MessageProps {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  onSourceClick?: (source: Source) => void;
}

export default function MessageBubble({
  role,
  content,
  sources = [],
  onSourceClick,
}: MessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-4xl rounded-2xl p-5 ${
          isUser
            ? "bg-violet-600 text-white"
            : "border border-white/10 bg-white/5"
        }`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>

        {!isUser && sources.length > 0 && (
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="mb-3 text-sm font-semibold text-gray-300">
              Referenced Files
            </p>

            <div className="space-y-3">
              {sources.map((source, index) => (
                <SourceCard
                  key={index}
                  {...source}
                  onClick={() => onSourceClick?.(source)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}