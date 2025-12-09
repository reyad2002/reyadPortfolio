import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const projects = projectsData as Project[];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full bg-slate-950 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Showcasing my best work in web development, featuring clean code,
            responsive design, and smooth user interactions.
          </p>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="h-full"
            >
              <div className="h-full bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden hover:border-cyan-400/50 transition-colors duration-300 flex flex-col group">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-slate-800 h-40 sm:h-48 md:h-56">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover="hover"
                    variants={imageVariants}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4 sm:p-6">
                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs sm:text-sm bg-slate-800/60 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="text-xs sm:text-sm bg-slate-800/60 text-gray-400 border border-slate-600"
                        >
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-3 w-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs sm:text-sm border-cyan-400/50 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent transition-all"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Code</span>
                      </Button>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full text-xs sm:text-sm bg-cyan-600 hover:bg-cyan-700 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Live</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
            Interested in collaborating? Let's work together!
          </p>
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 transition-colors">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
