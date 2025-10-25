import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Mail } from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const ContactSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default ContactSection;
