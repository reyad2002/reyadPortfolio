import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projects = [
  {
    title: "Regenx Medical Platform",
    description:
      "A unified medical platform for scheduling, patient records, and secure telemedicine. Built to streamline clinic workflows and improve patient experience.",
    tech: ["Next JS", "ShadCn", "Framer", "TailWildCss", "Node JS"],
    image: "/regenx.png",
    github: "#",
    live: "https://regenx-frontend.vercel.app/",
  },
  {
    title: "UpStays - Real Estate Platform",
    description:
      "Modern real-estate platform to discover and book properties with fast search, advanced filters (price, location, beds), map-ready layout, wishlists, and a responsive, SEO-friendly UI.",
    tech: ["Next.js", "Material UI", "Framer Motion", "Tailwind CSS"],
    image: "upstays.png",
    github: "#",
    live: "https://upstays-frontend.vercel.app/home",
  },
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
    tech: ["React", "Next.js", "Redux ToolKit", "Tailwind CSS", "Framer"],
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

const ProjectsSection = () => {
  return (
    <div>
      <section
        id="projects"
        className="py-20 px-4 bg-slate-900 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-white mb-3">
              {" "}
              Clean UI • Smooth interactions • Production-minded structure{" "}
            </p>
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
                      <a
                        href={`${project.live}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
    </div>
  );
};

export default ProjectsSection;
