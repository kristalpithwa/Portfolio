import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profilePic from "../assets/avatar.png";

const backgroundAnimation = {
  initial: { borderRadius: "0%" },
  animate: {
    borderRadius: ["0%", "50%", "0%"],
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const LandingSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      id="landing"
      initial="initial"
      animate="animate"
      variants={backgroundAnimation}
      className="relative min-h-screen text-white bg-gray-800 flex items-center justify-center"
      style={{
        background: "linear-gradient(45deg, #374151, #1f2937, #111827)",
        backgroundSize: "300% 300%",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-6">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white"
          loading="lazy"
        />
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="text-4xl lg:text-5xl font-bold"
        >
          Hey, My Self Kristal Pithwa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg lg:text-xl max-w-md"
        >
          React / React Native Developer
        </motion.p>
        <div className="flex space-x-4 justify-center">
          <motion.a
            href="https://github.com/httpsprayag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prayag-p-2b56001b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:prayagbhimani79@gmail.com"
            className="text-3xl text-gray-300 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FiMail />
          </motion.a>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-6">
          <motion.button
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white hover:bg-gray-200 text-[#0F1724] text-lg lg:text-xl rounded-lg transition-all duration-300"
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white hover:bg-gray-200 text-[#0F1724] text-lg lg:text-xl rounded-lg transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingSection;
