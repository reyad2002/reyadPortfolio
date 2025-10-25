import React from 'react'
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardHover = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3 },
  },
};
const experiences = [
  {
    year: "2024",
    title: "Started Web Development Journey",
    description:
      "Began learning HTML, CSS, and JavaScript fundamentals. Built first static websites and discovered passion for frontend development.",
    type: "education",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    year: "2025",
    title: "Advanced Frontend Skills",
    description:
      "Mastered React and modern JavaScript frameworks. Started building dynamic web applications and learned responsive design principles.",
    type: "learning",
    technologies: ["React", "Bootstrap", "Responsive Design"],
  },
  {
    year: "2025",
    title: "Professional Development",
    description:
      "Expanded expertise to Next.js, Tailwind CSS, and Material-UI. Completed several freelance projects and internship opportunities.",
    type: "experience",
    technologies: ["Next.js", "Tailwind CSS", "Material-UI"],
  },
];
const MyJourney = () => {
  return (
    <div>
 <section
        id="experience"
        className="py-20 px-4 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />

            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.year}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={`flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center relative gap-4`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`p-6 rounded-xl border-2 ${
                        experience.type === "current"
                          ? "border-cyan-400 bg-slate-800/80 shadow-lg shadow-cyan-400/25"
                          : "border-slate-600 bg-slate-800/60"
                      } backdrop-blur-sm`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {experience.title}
                        </h3>
                        <motion.span
                          className="text-2xl font-bold text-cyan-400"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 }}
                        >
                          {experience.year}
                        </motion.span>
                      </div>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            variants={scaleIn}
                            transition={{ delay: techIndex * 0.1 }}
                          >
                            <Badge
                              className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/20"
                              variant="outline"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Spacer for layout consistency on desktop */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MyJourney