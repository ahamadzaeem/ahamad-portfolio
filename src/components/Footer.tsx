"use client";

import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Terminal } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/80 py-10 px-6 sm:px-8 text-center text-xs text-slate-500">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="font-mono text-slate-400">
            © {year} {PERSONAL_INFO.name}. Built with Next.js, Tailwind & Motion.
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#terminal" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Terminal className="h-3 w-3" /> CLI
          </a>
        </div>
      </div>
    </footer>
  );
}
