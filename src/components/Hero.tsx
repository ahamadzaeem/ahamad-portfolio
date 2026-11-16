"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Mail, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#818cf8", "#c084fc", "#34d399"],
    });
  };

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Radial Gradient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[350px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-medium text-emerald-300">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="block text-slate-100">Engineering Fluid</span>
          <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Digital Experiences & Systems
          </span>
        </motion.h1>

        {/* Subtitle / Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed"
        >
          Hi, I&apos;m <span className="font-semibold text-white">{PERSONAL_INFO.name}</span> — {PERSONAL_INFO.bio}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#terminal"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal className="h-4 w-4 text-cyan-400 transition-transform group-hover:rotate-6" />
            <span>Launch CLI Terminal</span>
          </a>

          <button
            onClick={triggerConfetti}
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all hover:border-amber-400/40 hover:text-amber-300 active:scale-95"
            title="Celebrate!"
          >
            <Sparkles className="h-4 w-4 text-amber-400 transition-transform group-hover:scale-125" />
            <span>Say Cheers</span>
          </button>
        </motion.div>

        {/* Social / External Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-cyan-400"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-cyan-400"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-slate-400 transition-colors hover:text-cyan-400"
            aria-label="Direct Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md sm:grid-cols-4 sm:gap-6"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
