import React from "react";
import { motion } from "framer-motion";
import JavaScriptImage from "../assets/javascript.svg";
import TypescriptImage from "../assets/typescript.svg";
import ReactImage from "../assets/react.svg";
import Android from "../assets/android.svg";
import Xcode from "../assets/xcode.svg";
import htmlImage from "../assets/html5.svg";
import cssImage from "../assets/css3.svg";
import gitImage from "../assets/git.svg";
import reduxImage from "../assets/redux.svg";
import tailwindImage from "../assets/tailwind.svg";

const TechStack = () => {
  return (
    <>
      <div className="section-divider">
        <span className="border-white/10 border rounded-full">Tech Stack</span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card flex refraction-effect rounded-3xl p-4 sm:p-6 md:p-8 mb-16 sm:mb-20 md:mb-24"
      >
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
          {[
            JavaScriptImage,
            TypescriptImage,
            ReactImage,
            Android,
            Xcode,
            tailwindImage,
            reduxImage,
            gitImage,
            htmlImage,
            cssImage,
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px]"
            >
              <img
                alt={`Tech-${index}`}
                loading="lazy"
                src={src}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TechStack;
