import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-violet-600 p-2">
            <BrainCircuit size={22} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              RepoLens AI
            </h1>

            <p className="text-xs text-gray-400">
              Understand any codebase instantly
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}