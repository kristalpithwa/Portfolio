"use client";

import { motion } from "framer-motion";

const techStack = [
  { src: "/images/tech/react.svg", name: "React Native", accent: "from-cyan-400/20" },
  { src: "/images/tech/xcode.svg", name: "iOS / Xcode", accent: "from-blue-300/20" },
  { src: "/images/tech/android.svg", name: "Android", accent: "from-green-400/20" },
  { src: "/images/tech/typescript.svg", name: "TypeScript", accent: "from-blue-400/20" },
  { src: "/images/tech/javascript.svg", name: "JavaScript", accent: "from-yellow-400/20" },
  { src: "/images/tech/react.svg", name: "React", accent: "from-cyan-300/20" },
  { src: "/images/tech/redux.svg", name: "Redux", accent: "from-purple-400/20" },
  { src: "/images/tech/tailwind.svg", name: "Tailwind CSS", accent: "from-teal-400/20" },
  { src: "/images/tech/git.svg", name: "Git", accent: "from-orange-400/20" },
  { src: "/images/tech/html5.svg", name: "HTML5", accent: "from-orange-500/20" },
  { src: "/images/tech/css3.svg", name: "CSS3", accent: "from-blue-500/20" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const TechStack = () => {
  return (
    <>
      <div className="section-divider">
        <span>Tech Stack</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="glass-card glass-card-glow refraction-effect rounded-3xl p-6 sm:p-8 md:p-10 mb-16"
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          {techStack.map(({ src, name, accent }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2.5 cursor-default group bg-gradient-to-b ${accent} to-transparent`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-lg transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium text-center leading-tight font-geist group-hover:text-gray-200 transition-colors duration-200">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TechStack;
