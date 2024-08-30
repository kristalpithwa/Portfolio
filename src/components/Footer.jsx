import React from "react";
import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Connect with Me Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl lg:text-2xl font-semibold mb-4">
              Connect with Me
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              <motion.a
                href="https://twitter.com/yourtwitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration:300"
                whileHover={{ scale: 1.2 }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prayag-p-2b56001b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration:300"
                whileHover={{ scale: 1.2 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/httpsprayag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400 hover:text-blue-500 transition-colors duration:300"
                whileHover={{ scale: 1.2 }}
              >
                <FiGithub />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl lg:text-2xl font-semibold mb-4">
              Contact Information
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:prayagbhimani79@gmail.com"
                  className="underline"
                >
                  crystalpithwa@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+91 8000830484" className="underline">
                  +91 8000830484
                </a>
              </li>
              <li>Rajkot, Gujarat, India.</li>
            </ul>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Kristal Pithwa. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
