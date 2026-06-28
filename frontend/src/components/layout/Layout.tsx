import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {children}
      </main>

    </div>
  );
}