import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profilePic from "../assets/kristal.jpg";

const LandingSection = () => {
  return (
    <div
      id="Home"
      className="relative h-[800px] flex justify-center items-center"
    >
      <div className="w-full max-w-[1350px] flex justify-between items-center bg-pink  rounded-lg">
        <div>
          <h1 className="text-7xl font-bold text-black">Front-End Developer</h1>
          <p className="text-3xl font-semibold text-black">
            React & React Native
          </p>
          <p className="mt-6 text-[22px] text-black">
            Hey stranger! My self Kristal Pithwa and I enjoy creating things
            that live on the internet.
            <br />
            I'm passionate about digital products that help people experience
            everyday life, not endure it. <br />I specialize in building
            responsive and scalable web and mobile apps using React/React
            Native.
          </p>

          <div className="flex space-x-7 mt-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kristalpithwa"
              className="text-4xl text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kristal-pithwa-a62861a4/"
              className="text-4xl text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:crystalpithwa@gmail.com"
              className="text-4xl text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <img
          alt="Profile"
          loading="lazy"
          src={profilePic}
          className="w-[400px] h-[400px] rounded-full object-cover border-4"
        />
      </div>
    </div>
  );
};

export default LandingSection;
