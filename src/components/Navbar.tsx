"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Terminal as TerminalIcon } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Interactive CLI", href: "#terminal" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-transform active:scale-95"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <span className="font-mono text-sm font-extrabold text-white">AM</span>
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-400 opacity-0 blur group-hover:opacity-60 transition duration-300" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-800/90 bg-slate-900/60 p-1.5 backdrop-blur-md md:flex shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 rounded-full ${
                  isActive ? "text-cyan-400 font-semibold" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.name === "Interactive CLI" && <TerminalIcon className="h-3 w-3" />}
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-400 hover:shadow-cyan-500/25 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 transition-transform group-hover:rotate-12" />
            <span>Let&apos;s Connect</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-800 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

