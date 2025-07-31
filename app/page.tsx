"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const skills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Next.js", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Material-UI", level: 80, category: "Frontend" },
  // { name: "Java", level: 60, category: "Backend" },
  // { name: "OOP", level: 65, category: "Backend" },
];

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
  }
];

const projects = [

  {
    title: "Clinica Medical Platform",
    description:
      "A comprehensive medical platform for booking appointments, managing patient records, and providing telemedicine services.",
    tech: ["React", "Material-UI", "Framer", "TailWildCss"],
    image: "/Clinica.png",
    github: "#",
    live: "https://clinica-web-cyan.vercel.app/",
  },
  {
    title: "E-Commerce WebSite",
    description:
      "A modern e-commerce platform built for seamless shopping experiences, featuring product listings, filtering, a shopping cart, secure checkout, and responsive design.",
    tech: ["React", "Next.js","Redux ToolKit", "Tailwind CSS" , "Framer"],
    image: "/ecomm.png",
    github: "#",
    live: "https://e-commerce-chi-ten-82.vercel.app/",
  },
  {
    title: "Code Wars ",
    description:
      "A full-featured e-commerce platform built with React and Next.js, featuring user authentication, product catalog, and payment integration.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/CodeWars.png",
    github: "#",
    live: "https://luminous-beijinho-8a9708.netlify.app/",
  },
  {
    title: "Shopping Cart",
    description:
      "A responsive shopping cart application that allows users to add, remove, and manage products in their cart.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/Shop.png",
    github: "#",
    live: "https://reyad2002.github.io/shop/",
  },
  {
    title: "Food Blog",
    description:
      "A modern, responsive blog website showcasing articles and tutorials with smooth animations and interactive elements.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/Food.png",
    github: "#",
    live: "https://reyad2002.github.io/food-blog1/",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">Reyad </span>
              <span className="text-cyan-400">Mohamed</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              I'm A Frontend Developer
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300">Available For Work</span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Hello, My Name Is Reyad Mohamed Fathy. I Am A Front-End Developer,
              And Within A Year I Will Be A Back-End Developer, And Then I Will
              Become A Full-Stack Developer. I Love Learning And Developing
              Myself To Provide The Highest Quality In My Work.
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
              src="/placeholder.svg?height=128&width=128"
              alt="Reyad Mohamed Fathy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                    <img
                      src="Reyad.jpg"
                      alt="Reyad Mohamed Fathy"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Passionate Frontend Developer
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm a dedicated frontend developer with a passion for creating
                beautiful, functional, and user-friendly web applications. With
                expertise in modern JavaScript frameworks and a keen eye for
                design, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                My journey in web development has equipped me with strong skills
                in React, Next.js, and various CSS frameworks. I also have
                foundational knowledge in Java and Object-Oriented Programming,
                which helps me understand the bigger picture of software
                development.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp}>
                  <a href="https://www.linkedin.com/in/reyad-mohamed-46a46424b/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <a href="https://github.com/reyad2002" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
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


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={slideInFromBottom}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full border-slate-600 bg-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge
                          variant={
                            skill.category === "Frontend"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            skill.category === "Frontend"
                              ? "bg-cyan-500"
                              : "bg-slate-600"
                          }
                        >
                          {skill.category}
                        </Badge>
                      </motion.div>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <motion.p
                      className="text-sm text-slate-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}% Proficiency
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-slate-600 bg-slate-800/50 shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          variants={scaleIn}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-cyan-400 text-cyan-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <a href={`${project.live}`} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-cyan-500 hover:bg-cyan-600"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      </a>  
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life!
            </p>
            <a href="mailto:reyadmohamed631@gmail.com" className="">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-cyan-600 hover:bg-slate-100 shadow-lg shadow-white/25"
            >
                <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
              </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-slate-400">
          © 2024 Reyad Mohamed Fathy. Built with Next.js and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
