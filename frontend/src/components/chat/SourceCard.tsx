import { FileCode2, ChevronRight } from "lucide-react";

interface SourceCardProps {
  file_name: string;
  relative_path: string;
  language: string;
  onClick: () => void;
}

export default function SourceCard({
  file_name,
  relative_path,
  language,
  onClick,
}: SourceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/10"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-violet-600/20 p-3">
          <FileCode2 className="text-violet-400" size={20} />
        </div>

        <div className="text-left">
          <p className="font-medium">{file_name}</p>

          <p className="text-xs text-gray-400">
            {relative_path}
          </p>

          <span className="mt-1 inline-block rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">
            {language}
          </span>
        </div>
      </div>

      <ChevronRight
        className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-white"
        size={18}
      />
    </button>
  );
}