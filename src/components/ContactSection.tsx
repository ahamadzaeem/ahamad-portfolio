"use client";

import { useState } from "react";
import { Mail, Send, MessageSquare, CheckCircle, Copy } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#818cf8", "#34d399"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-10 -translate-x-1/2 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-medium text-cyan-400">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
          Let&apos;s Build Something Extraordinary
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-slate-400 text-sm sm:text-base">
          Have an idea, project, or full-time opportunity in mind? Drop a message or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Info Column (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              I usually reply within 24 hours. Feel free to copy my direct email or connect across my networks.
            </p>

            <div className="space-y-4">
              <div
                onClick={copyEmail}
                className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 transition-all hover:border-cyan-500/40 hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-cyan-400">
                  {copiedEmail ? <CheckCircle className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-3">
                {[
                  { name: "GitHub", href: PERSONAL_INFO.github, icon: GithubIcon },
                  { name: "LinkedIn", href: PERSONAL_INFO.linkedin, icon: LinkedinIcon },
                  { name: "Twitter", href: PERSONAL_INFO.twitter, icon: TwitterIcon },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/60 text-slate-400 transition-all hover:border-cyan-500/40 hover:text-cyan-300 hover:scale-105 active:scale-95"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (3 cols) */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-md space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                Your Name / Organization
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Jane Doe or Acme Corp"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                Project Scope / Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about what you'd like to build together..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Transmit Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
