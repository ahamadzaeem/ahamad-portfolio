import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import InteractiveCursor from "@/components/InteractiveCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Background Interactive Nodes Canvas */}
      <ParticleBackground />

      {/* Interactive Cursor Spotlight */}
      <InteractiveCursor />

      {/* Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About / Skills Section */}
      <section id="about">
        <SkillsSection />
      </section>

      {/* Featured Projects with Architecture Inspector */}
      <ProjectsSection />

      {/* Career Trajectory & Work Experience */}
      <ExperienceSection />

      {/* Interactive Terminal Sandbox */}
      <InteractiveTerminal />

      {/* Contact & Transmission Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
