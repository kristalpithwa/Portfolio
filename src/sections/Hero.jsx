import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-[#0F1724] h-screen flex items-center justify-center">
      <div className="text-center space-y-4 text-white">
        <motion.h1
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold leading-[70px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello, I'm Kristal Pithwa
        </motion.h1>

        <motion.h2
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-semibold"
          style={{ color: "#C3E0E5" }}
        >
          Web Developer
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg"
          style={{ color: "#C3E0E5" }}
        >
          {/* Roles and responsibilities */}
          MERN Stack Developer
          <br />
          - Frontend development using React
          <br />
          - Backend development with Node.js and Express
          <br />- Database management with MongoDB
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r px-6 py-2 rounded-full mt-4 border-none outline-none ring-2 ring-blue-400 from-[#009FFF] to-[#ec2F4B] transition duration-300"
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
