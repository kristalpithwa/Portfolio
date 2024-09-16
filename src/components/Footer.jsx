import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 mt-16 flex justify-center items-center">
      <motion.div
        className="text-center lg:text-right"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Kristal Pithwa. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
