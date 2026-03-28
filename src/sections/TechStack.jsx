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

const techStack = [
  { src: ReactImage, name: "React Native", accent: "from-cyan-400/20" },
  { src: Xcode, name: "iOS / Xcode", accent: "from-blue-300/20" },
  { src: Android, name: "Android", accent: "from-green-400/20" },
  { src: TypescriptImage, name: "TypeScript", accent: "from-blue-400/20" },
  { src: JavaScriptImage, name: "JavaScript", accent: "from-yellow-400/20" },
  { src: ReactImage, name: "React", accent: "from-cyan-300/20" },
  { src: reduxImage, name: "Redux", accent: "from-purple-400/20" },
  { src: tailwindImage, name: "Tailwind CSS", accent: "from-teal-400/20" },
  { src: gitImage, name: "Git", accent: "from-orange-400/20" },
  { src: htmlImage, name: "HTML5", accent: "from-orange-500/20" },
  { src: cssImage, name: "CSS3", accent: "from-blue-500/20" },
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
