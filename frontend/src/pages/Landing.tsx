import { FolderGit2, FolderOpen, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexGithubRepository } from "../services/repository";

export default function Landing() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleIndex = async () => {
    if (!repoUrl.trim()) return;

    try {
      setLoading(true);

      navigate("/loading");

      await indexGithubRepository(repoUrl);

      navigate("/chat");
    } catch (error) {
      console.error(error);
      alert("Failed to index repository.");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 h-96 w-96 rounded-full bg-violet-700/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 w-full max-w-3xl">

        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            AI Powered Code Understanding
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
            Understand
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Any Repository
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Clone, index and chat with any GitHub repository using semantic search,
            local embeddings and Gemini AI.
          </p>

        </div>

        {/* Card */}

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <label className="mb-3 block text-sm font-medium text-gray-300">
            GitHub Repository
          </label>

          <div className="flex gap-3">

            <div className="flex flex-1 items-center rounded-2xl border border-white/10 bg-black/40 px-4">

              <FolderGit2 className="mr-3 text-gray-500" size={20} />

              <input
                placeholder="https://github.com/user/repository"
                className="h-14 w-full bg-transparent outline-none placeholder:text-gray-500"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
              />

            </div>

            <button onClick={handleIndex} disabled={loading} className="flex items-center gap-2 rounded-2xl bg-violet-600 px-7 font-semibold transition hover:bg-violet-500">

              Index

              <ArrowRight size={18} />

            </button>

          </div>

          <div className="my-7 flex items-center">

            <div className="h-px flex-1 bg-white/10" />

            <span className="mx-4 text-sm text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <button disabled className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/30 transition hover:bg-black/50">

            <FolderOpen size={20} />

            Choose Local Repository (Desktop App)

          </button>

        </div>

      </div>

    </section>
  );
}