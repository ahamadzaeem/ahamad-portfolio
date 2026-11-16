"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolio";
import confetti from "canvas-confetti";

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-semibold">
            Interactive Dev Terminal v2.4 initialized.
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-mono">help</span> to view available commands, or click any suggestion below.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div><span className="text-cyan-300 font-mono">bio</span> — Quick professional background</div>
            <div><span className="text-cyan-300 font-mono">skills</span> — Top technical proficiencies</div>
            <div><span className="text-cyan-300 font-mono">projects</span> — Featured project names</div>
            <div><span className="text-cyan-300 font-mono">contact</span> — Get direct email & socials</div>
            <div><span className="text-cyan-300 font-mono">clear</span> — Clear terminal output</div>
            <div><span className="text-cyan-300 font-mono">party</span> — Trigger celebration confetti!</div>
          </div>
        );
        break;

      case "bio":
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p className="font-semibold text-white">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-cyan-400">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i}>
                <span className="text-cyan-300 font-semibold">{cat.title}: </span>
                <span className="text-slate-300">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-xs">
            {PROJECTS.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-cyan-300 font-medium">{p.title}</span>
                <span className="text-slate-400 font-mono">{p.metrics}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case "party":
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#818cf8", "#f43f5e", "#10b981"],
        });
        output = <span className="text-emerald-400 font-mono">Confetti detonated successfully!</span>;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <span className="text-rose-400 font-mono">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand("help")}>help</span> to see valid commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="relative py-20 px-6 sm:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-medium text-cyan-400">
          <TerminalIcon className="h-3.5 w-3.5" />
          <span>Interactive Shell</span>
        </div>
        <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Developer CLI Sandbox
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Prefer command-line navigation? Query my background, stacks, and triggers right here.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden font-mono text-sm">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-400">alex@portfolio:~ (zsh)</span>
          </div>

          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
            title="Copy email command"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span className="text-[11px]">{copied ? "Copied" : "Copy email"}</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 bg-slate-900/40 px-4 py-2 text-xs">
          <span className="text-slate-500 text-[11px]">Quick run:</span>
          {["bio", "skills", "projects", "contact", "party", "clear"].map((c) => (
            <button
              key={c}
              onClick={() => handleCommand(c)}
              className="rounded bg-slate-800 px-2 py-0.5 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Console Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[320px] overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-300">~</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4 text-xs sm:text-sm text-slate-300">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Console Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 border-t border-slate-800 bg-slate-900/60 px-4 py-3"
        >
          <span className="text-emerald-400 text-sm">➜</span>
          <span className="text-cyan-400 text-xs">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (try 'help' or 'party')..."
            className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded p-1 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Execute command"
          >
            <CornerDownLeft className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

