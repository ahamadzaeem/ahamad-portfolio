"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Filter, X, ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/SocialIcons";

const CATEGORIES = ["All", "AI / Systems", "Full Stack", "Frontend / UI", "Mobile"] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-medium text-cyan-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Curated Works</span>
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
          Featured Projects & Architecture
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400 text-sm sm:text-base">
          Click any card to inspect architectural highlights, metrics, and core technology decisions.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedCategory === cat
                  ? "text-cyan-300 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/40"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveModalProject(project)}
              className="group relative cursor-pointer flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
            >
              {/* Card Header & Category Tag */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block rounded-md bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 text-[11px] font-mono font-medium text-cyan-400">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                    <span>{project.metrics}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {project.tagline}
                </p>

                <p className="mt-3 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800/70 px-2 py-0.5 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-md bg-slate-800/40 px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                    Inspect Architecture &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700/80 bg-slate-900 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-1 text-xs font-mono text-cyan-300">
                  {activeModalProject.category}
                </span>
                <span className="rounded bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-xs font-mono text-emerald-300">
                  {activeModalProject.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {activeModalProject.tagline}
              </p>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed sm:text-base">
                {activeModalProject.description}
              </p>

              {/* Highlights */}
              <div className="mt-6">
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 mb-3">
                  Key Technical Achievements
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 mb-3">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-1 text-xs font-mono text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 justify-end">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-white hover:border-slate-500 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
