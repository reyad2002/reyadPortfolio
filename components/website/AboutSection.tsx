import React from 'react'
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

const AboutSection = () => {
  return (
    <div>
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
                  <a
                    href="https://www.linkedin.com/in/reyad-mohamed-46a46424b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://github.com/reyad2002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
    </div>
  )
}

export default AboutSection