import AnimatedText from "../components/AnimatedText";
import HeroBackground from "../components/HeroBackground";
import logo from "../assets/logo.svg";
import waving from "../assets/waving.png";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-center mb-24 relative">
      <HeroBackground />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-3 h-3 bg-teal-400 rounded-full blur-[2px] pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[20%] left-[5%] w-4 h-4 bg-purple-400 rounded-full blur-[2px] pointer-events-none hidden lg:block"
      />

      <div className="mb-8 flex mt-5 items-center justify-center gap-6 lg:flex-row lg:gap-12 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-normal text-white tracking-tighter font-geist text-center lg:text-left flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3">
          <span className="inline-block">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block text-white"
            >
              Kristal
            </motion.span>
          </span>

          <span className="inline-block">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer"
            >
              Pithwa
            </motion.span>
          </span>
        </h1>
      </div>

      <div className="flex justify-center mb-4 relative z-10">
        <div className="text-3xl font-medium text-gray-300">
          <AnimatedText text="Front-End Developer" delay={0.6} />
        </div>

        <img
          src={logo}
          alt="logo"
          className="w-[40px] h-[40px] animate-rotate"
        />
      </div>

      <p
        className="max-w-3xl text-base text-gray-400 mx-auto leading-relaxed mb-8 animate-slide-fade animate relative z-10"
        style={{ transitionDelay: "0.8s" }}
      >
        <span className="inline-flex items-center">
          Hey stranger!
          <img
            alt="waving hand"
            src={waving}
            className="w-[24px] h-[24px] mx-2 animate-wave"
          />
        </span>{" "}
        My name is Kristal Pithwa, and I enjoy creating things that live on the
        internet. I'm passionate about digital products that help people
        experience everyday life, not endure it. I specialize in building
        responsive and scalable web and mobile apps.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-wrap justify-center gap-3 relative z-10"
      >
        <div className="glass-card rounded-full px-6 py-2 flex items-center hover:bg-white/10 transition-colors cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kristalpithwa"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FiGithub />
          </a>
          <span className="text-emerald-400 text-sm font-medium ml-3">
            GitHub
          </span>
        </div>

        <div className="glass-card rounded-full px-6 py-2 flex items-center hover:bg-white/10 transition-colors cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kristal-pithwa-a62861a4/"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FiLinkedin />
          </a>
          <span className="text-blue-400 text-sm font-medium ml-3 mt-1">
            Linkedin
          </span>
        </div>

        <div className="glass-card rounded-full px-6 py-2 flex items-center hover:bg-white/10 transition-colors cursor-pointer">
          <a
            href="mailto:crystalpithwa@gmail.com"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FiMail />
          </a>

          <span className="text-purple-400 text-sm font-medium ml-3 mt-1">
            Mail
          </span>
        </div>
      </motion.div>

      {/* Quick Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center animate-slide-fade animate"
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-geist tracking-tighter mb-2 drop-shadow-lg">
            +5
          </div>
          <div className="text-lg text-gray-400">YEARS OF EXPERIENCE</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center animate-slide-fade animate"
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-geist tracking-tighter mb-2 drop-shadow-lg">
            +20
          </div>
          <div className="text-lg text-gray-400">PROJECTS COMPLETED</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center animate-slide-fade animate"
          style={{ transitionDelay: "1.6s" }}
        >
          <div className="text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-geist tracking-tighter mb-2 drop-shadow-lg">
            +20
          </div>
          <div className="text-lg text-gray-400">WORLDWIDE CLIENTS</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
