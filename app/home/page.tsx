"use client";
import Header from "@/components/header/Header";
import HeroSection from "@/components/website/HeroSection";
import AboutSection from "@/components/website/AboutSection";
import MyJourney from "@/components/website/MyJourney";
import SkillsSection from "@/components/website/SkillsSection";
import ProjectsSection from "@/components/website/ProjectsSection";
import ContactSection from "@/components/website/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Journey Timeline Section */}
      <MyJourney />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-slate-400">
          © 2025 Reyad Mohamed Fathy. Built with Next.js and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
