import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[85vh] items-center justify-center">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-violet-400" />
        </div>

        <h1 className="mt-8 text-center text-3xl font-bold">
          Indexing Repository
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Please wait while RepoLens understands your codebase.
        </p>

        <div className="mt-10 space-y-4">

          <Step text="Cloning Repository" />
          <Step text="Scanning Files" />
          <Step text="Generating Embeddings" />
          <Step text="Building Vector Database" />

        </div>

      </div>
    </div>
  );
}

function Step({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Loader2 className="h-4 w-4 animate-spin text-violet-400" />
      <span>{text}</span>
    </div>
  );
}