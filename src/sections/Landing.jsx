import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profilePic from "../assets/kristal.jpg";
import logo from "../assets/logo.svg";
import waving from "../assets/waving.png";

const LandingSection = () => {
  return (
    <div
      id="Home"
      className="relative h-[calc(100vh-80px)]  flex justify-center items-center md:px-14 lg:px-1 xl:px-2 py-12 lg:py-20 xl:py-28"
    >
      <div className="w-full max-w-[1350px] flex flex-col lg:flex-row justify-between items-center lg:space-y-0  sm:p-10 xl:p-16">
        <div className="text-center lg:text-left">
          <div className="flex">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black">
              Front-End Developer
            </h1>
            <img
              src={waving}
              alt="logo"
              className="w-[40px] h-[40px] animate-wave ml-3"
            />
          </div>

          <div className="flex items-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-lg font-semibold text-black">
              React & React Native
            </p>
            <img
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] animate-rotate"
            />
          </div>
          <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-[14px] xl:text-base text-black leading-relaxed">
            Hey stranger! My name is Kristal Pithwa, and I enjoy creating things
            that live on the internet.
            <br />
            I'm passionate about digital products that help people experience
            everyday life, not endure it. <br />I specialize in building
            responsive and scalable web and mobile apps using React/React
            Native.
          </p>

          <div className="flex justify-center lg:justify-start space-x-5 sm:space-x-6 mt-5 lg:mt-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kristalpithwa"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kristal-pithwa-a62861a4/"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:crystalpithwa@gmail.com"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <img
          alt="Profile"
          loading="lazy"
          src={profilePic}
          className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default LandingSection;
