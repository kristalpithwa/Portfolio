import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import profilePic from "../assets/kristal.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="section-divider">
        <span className="border-white/10 border rounded-full">About Me</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-card flex flex-col md:flex-row items-center md:items-start refraction-effect rounded-3xl p-6 md:p-8 mb-24"
      >
        <img
          alt="Profile"
          loading="lazy"
          src={profilePic}
          className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] xl:w-[280px] xl:h-[280px] object-cover  shadow-lg mb-6 md:mb-0 rounded-2xl"
        />

        <div className="md:ml-10 text-center md:text-left">
          <h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">
            <AnimatedText text="About Me" type="word" />
          </h3>

          <div className="divider-gradient mb-4"></div>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            I am a React/React Native Developer with 5+ years of dedicated
            experience, professionally well-versed in crafting robust and
            user-centric web and mobile applications for both iOS and Android
            platforms. My extensive expertise includes proficiently leveraging
            React and React Native's capabilities, optimizing performance,
            ensuring seamless UI/UX, and collaborating seamlessly within
            cross-functional teams to deliver high-quality, scalable web and
            mobile solutions.
          </p>

          <div className="space-y-3 mb-6">
            {[
              "Leadership",
              "Problem Solving Attitude",
              "Excellent Communication & Remote Collaboration",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center text-xs text-gray-400 justify-center md:justify-start"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-xs text-gray-400">Expertise Level</div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
