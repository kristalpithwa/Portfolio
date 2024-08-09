import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import JavaScriptImage from "../assets/javascript.svg";
import ReactImage from "../assets/react.svg";
import htmlImage from "../assets/html5.svg";
import cssImage from "../assets/css3.svg";
import nodeImage from "../assets/node.svg";
import expressImage from "../assets/express.svg";
import mongodbImage from "../assets/mongodb.png";
import gitImage from "../assets/git.svg";
import reduxImage from "../assets/redux.svg";
import tailwindImage from "../assets/tailwind.svg";
import nextjsImage from "../assets/next2.svg";
import bootstrapImage from "../assets/bootstrap.svg";

const skillImages = {
  HTML: htmlImage,
  CSS: cssImage,
  JavaScript: JavaScriptImage,
  Bootstrap: bootstrapImage,
  "Tailwind CSS": tailwindImage,
  React: ReactImage,
  "Next.js": nextjsImage,
  "Redux Toolkit": reduxImage,
  "Node.js": nodeImage,
  Express: expressImage,
  MongoDB: mongodbImage,
  Git: gitImage,
};

const skills = Object.keys(skillImages);

const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1 },
    });
  }, [controls, index]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="w-36 h-36 bg-gray-800 rounded-lg shadow-lg overflow-hidden m-2 cursor-pointer relative"
      whileHover={{ scale: 1.05, zIndex: 1 }}
      onClick={handleFlip}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
      {/* Front of the card */}
      <motion.div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={skillImages[skill]}
          alt={skill}
          className="w-20 h-20 object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Back of the card */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-gray-700 rounded-lg"
        style={{ perspective: "1000px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isFlipped ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center text-white"
          style={{ transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)" }}
        >
          {skill}
        </motion.div>
      </motion.div>

      {/* Clickable area */}
      <motion.button
        className="absolute inset-0 w-full h-full bg-transparent"
        whileHover={{ zIndex: 2 }}
        onClick={handleFlip}
      ></motion.button>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Explore My Skills
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Here are some technologies and tools I work with. Click on each card
            to flip and learn more!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
