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
import profilePic from "../assets/emoji.svg";

const AboutMe = () => {
  return (
    <div
      id="About"
      className="min-h-screen h-[610px] flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        <img
          alt="Profile"
          loading="lazy"
          src={profilePic}
          className="w-[235px] h-[235px] object-contain"
        />

        <div className="w-[915px]">
          <h1 className="text-6xl font-bold text-black">About Me</h1>
          <p className="mt-6 text-[16px] text-black">
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

      <div className="flex justify-center items-center mt-20 space-x-7">
        <h1 className="text-2xl font-bold text-black">Tech Stack |</h1>
        <img
          alt="JavaScript"
          loading="lazy"
          src={JavaScriptImage}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Typescript"
          loading="lazy"
          src={TypescriptImage}
          className="w-[65px] h-[65px] object-contain"
        />
        <img
          alt="React"
          loading="lazy"
          src={ReactImage}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Android"
          loading="lazy"
          src={Android}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Xcode"
          loading="lazy"
          src={Xcode}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Tailwind"
          loading="lazy"
          src={tailwindImage}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Redux"
          loading="lazy"
          src={reduxImage}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Git"
          loading="lazy"
          src={gitImage}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Html"
          loading="lazy"
          src={htmlImage}
          className="w-[75px] h-[75px] object-contain"
        />
        <img
          alt="Css"
          loading="lazy"
          src={cssImage}
          className="w-[75px] h-[75px] object-contain"
        />
      </div>
    </div>
  );
};

export default AboutMe;
