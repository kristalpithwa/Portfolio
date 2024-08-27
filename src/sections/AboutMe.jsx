import React, { useState, useEffect } from "react";

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
import profilePic from "../assets/kristal.jpg";

const AboutMe = () => {
  return (
    <div
      className="min-h-screen h-[800px] flex flex-col items-center justify-center"
      id="aboutMe"
    >
      <div className="w-full max-w-[1500px] flex justify-between items-center ">
        <img
          alt="Profile"
          loading="lazy"
          src={profilePic}
          className="w-[400px] h-[400px] rounded-full object-cover border-4"
        />
        <div className="w-[1000px]">
          <h1 className="text-7xl font-bold text-black">About Me</h1>

          <p className="mt-6 text-[22px] text-black">
            I am a React/React Native Developer with 3+ years of dedicated
            experience, professionally well-versed in crafting robust and
            user-centric web and mobile applications for both iOS and Android
            platforms. My extensive expertise includes proficiently leveraging
            React and React Native's capabilities, optimizing performance,
            ensuring seamless UI/UX, and collaborating seamlessly within
            cross-functional teams to deliver high-quality, scalable web and
            mobile solutions.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-24 space-x-8">
        <h1 className="text-4xl font-bold text-black">Tech Stack |</h1>
        <img
          alt="JavaScript"
          loading="lazy"
          src={JavaScriptImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Typescript"
          loading="lazy"
          src={TypescriptImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="React"
          loading="lazy"
          src={ReactImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Android"
          loading="lazy"
          src={Android}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Xcode"
          loading="lazy"
          src={Xcode}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Tailwind"
          loading="lazy"
          src={tailwindImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Redux"
          loading="lazy"
          src={reduxImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Git"
          loading="lazy"
          src={gitImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Html"
          loading="lazy"
          src={htmlImage}
          className="w-[100px] h-[100px] object-cover"
        />
        <img
          alt="Css"
          loading="lazy"
          src={cssImage}
          className="w-[100px] h-[100px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMe;
