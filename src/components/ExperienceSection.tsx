"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-6 sm:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/30 px-3.5 py-1 text-xs font-mono font-medium text-sky-400">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Career Trajectory</span>
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
          Work Experience & Milestones
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-slate-400 text-sm sm:text-base">
          Proven track record of taking initiatives from zero-to-one and scaling platforms to millions of users.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              <div className="h-2 w-2 rounded-full bg-cyan-300" />
            </div>

            {/* Content Card */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/70">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-cyan-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-slate-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mt-2 mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-800/70 px-2 py-0.5 text-[11px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

