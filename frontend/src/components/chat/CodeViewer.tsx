import { X } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeViewerProps {
  open: boolean;
  onClose: () => void;
  fileName: string;
  language: string;
  code: string;
}

export default function CodeViewer({
  open,
  onClose,
  fileName,
  language,
  code,
}: CodeViewerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">

      <div className="absolute right-0 top-0 h-full w-[55%] border-l border-white/10 bg-[#0d1117]">

        <div className="flex items-center justify-between border-b border-white/10 p-5">

          <div>
            <h2 className="text-xl font-bold text-white">
              {fileName}
            </h2>

            <p className="text-sm text-gray-400">
              {language}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <X />
          </button>

        </div>

        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={oneDark}
          customStyle={{
            margin: 0,
            height: "calc(100vh - 90px)",
            background: "#0d1117",
          }}
        >
          {code}
        </SyntaxHighlighter>

      </div>

    </div>
  );
}