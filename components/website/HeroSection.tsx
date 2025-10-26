import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10" />
        <motion.div
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Hi, I Am </span>
              <span className="text-cyan-400">Reyad</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-4">
              I'm A Full Stack Developer
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300">Available For Work</span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Hello, my name is Reyad Mohamed Fathy. I’m a Full-Stack Developer
              focused on clean architecture, performance, and great DX/UX. I’m
              constantly learning to ship high-quality, scalable features—from
              robust back-end APIs to polished front-end interfaces.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/reyad-mohamed-46a46424b/">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/10 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </div>
            </a>
            <a href="https://github.com/reyad2002">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/10 transition-colors cursor-pointer">
                <Github className="w-5 h-5 text-cyan-400" />
              </div>
            </a>
            <a
              href="mailto:your.reyadmohamed631@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/10 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="/ReyadMohamed Resume.pdf" download>
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
            <a
              href="mailto:your.reyadmohamed631@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
              <div className="text-slate-400">Years Of Experience</div>
            </div>
            <div className="text-center bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">7+</div>
              <div className="text-slate-400">Satisfied Clients</div>
            </div>
          </motion.div>

          <motion.div
            className="animate-bounce mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ArrowDown className="mx-auto h-6 w-6 text-slate-400" />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="absolute bottom-0 right-10 hidden lg:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400/50">
            <img
              src="reyad2.jpg"
              alt="Reyad Mohamed Fathy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
