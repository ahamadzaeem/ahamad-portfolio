"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export default function SkillsSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Flattened all tags for quick filtering
  const allTags = Array.from(
    new Set(
      SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => s.tag))
    )
  );

  return (
    <section id="skills" className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Background flare */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3.5 py-1 text-xs font-mono font-medium text-indigo-300">
          <Cpu className="h-3.5 w-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
          Skills & Technical Expertise
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          A granular view of my engineering toolbelt across frontend development, systems architecture, and distributed infrastructure.
        </p>

        {/* Interactive Filter Matrix */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTag === null
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200"
            }`}
          >
            Show All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTag === tag
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <div
            key={catIdx}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md transition-all hover:border-slate-700/80"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Individual Skill Items */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => {
                  const isHighlighted = activeTag === null || activeTag === skill.tag;
                  return (
                    <div
                      key={sIdx}
                      className={`transition-opacity duration-300 ${
                        isHighlighted ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full rounded-full bg-slate-800/80 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: sIdx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

