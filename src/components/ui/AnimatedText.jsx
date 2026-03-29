"use client";

import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className = "",
  type = "character",
  delay = 0,
}) => {
  const isCharacter = type === "character";
  const elements = isCharacter ? text.split("") : text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.span
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {elements.map((element, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block relative"
        >
          {element === " " ? "\u00A0" : element}
          {!isCharacter && index !== elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
