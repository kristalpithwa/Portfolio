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
      className="min-h-screen h-screen  flex flex-col items-center justify-center"
    >
      <div className="w-full  max-w-[1300px] flex flex-col lg:flex-row justify-between items-center p-5">
        <img
          alt="Profile"
          loading="lazy"
          src={profilePic}
          className=" mt-5 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] rounded-full object-cover shadow-lg"
        />

        <div className="lg:ml-36">
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-black">
            About Me
          </h1>
          <p className="sm:mt-5 text-sm sm:text-base md:text-lg lg:text-[14px] xl:text-base text-black leading-relaxed">
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

      <div className="flex flex-wrap justify-center items-center sm:mt-10 space-x-5 sm:space-x-16 md:space-x-5 lg:space-x-7 lg:flex-nowrap">
        <h1 className="w-full lg:w-auto text-center  font-bold text-black mb-6 lg:mb-0 lg:mr-4 text-3xl">
          Tech Stack |
        </h1>
        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:space-x-5">
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="JavaScript"
              loading="lazy"
              src={JavaScriptImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Typescript"
              loading="lazy"
              src={TypescriptImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="React"
              loading="lazy"
              src={ReactImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Android"
              loading="lazy"
              src={Android}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Xcode"
              loading="lazy"
              src={Xcode}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Tailwind"
              loading="lazy"
              src={tailwindImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Redux"
              loading="lazy"
              src={reduxImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Git"
              loading="lazy"
              src={gitImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Html"
              loading="lazy"
              src={htmlImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
          <div className="w-1/4 md:w-1/6 lg:w-auto p-2">
            <img
              alt="Css"
              loading="lazy"
              src={cssImage}
              className="w-[75px] h-[75px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
