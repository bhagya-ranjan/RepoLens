import {
  BrainCircuit,
  MessageSquare,
  FolderGit2,
  Plus,
} from "lucide-react";

export default function ChatSidebar() {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-white/10 bg-black/30 backdrop-blur-xl">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-white/10 p-6">

        <div className="rounded-xl bg-violet-600 p-2">
          <BrainCircuit size={22} />
        </div>

        <div>
          <h1 className="font-bold">RepoLens AI</h1>
          <p className="text-xs text-gray-400">
            AI Code Assistant
          </p>
        </div>

      </div>

      {/* New Chat */}

      <div className="p-4">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-medium transition hover:bg-violet-500">

          <Plus size={18} />

          New Chat

        </button>

      </div>

      {/* Repository */}

      <div className="px-4">

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <div className="mb-3 flex items-center gap-2">

            <FolderGit2 size={18} />

            <span className="font-medium">
              Repository
            </span>

          </div>

          <p className="text-sm text-gray-400">
            Spotify Clone
          </p>

        </div>

      </div>

      {/* Chat History */}

      <div className="mt-6 flex-1 px-4">

        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Chats
        </p>

        <button className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-white/5">

          <MessageSquare size={18} />

          <span className="text-sm">
            Repository Chat
          </span>

        </button>

      </div>

    </aside>
  );
}