import { Suspense } from "react";
import LoadingComponent from "./components/Loader.jsx";
import FallingLettersCanvas from "./FallingLettersCanvas.jsx";
import profilePic from "../src/assets/kristal.jpg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import JavaScriptImage from "../src/assets/javascript.svg";
import TypescriptImage from "../src/assets/typescript.svg";
import ReactImage from "../src/assets/react.svg";
import Android from "../src/assets/android.svg";
import Xcode from "../src/assets/xcode.svg";
import htmlImage from "../src/assets/html5.svg";
import cssImage from "../src/assets/css3.svg";
import gitImage from "../src/assets/git.svg";
import reduxImage from "../src/assets/redux.svg";
import tailwindImage from "../src/assets/tailwind.svg";
import logo from "../src/assets/logo.svg";
import waving from "../src/assets/waving.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-x-hidden">
      <FallingLettersCanvas />

      <Suspense fallback={<LoadingComponent />}>
        <div className="content-wrapper">
          <div className="container max-w-7xl mx-auto px-6 py-20">
            {/* Header Section */}
            <div className="animate-blur-in animate text-center mb-24">
              <div className="mb-8 flex mt-5 items-center justify-center gap-6 lg:flex-row lg:gap-12">
                <h1
                  className="text-5xl lg:text-7xl font-normal text-white tracking-tighter font-geist text-center lg:text-left animate-slide-fade animate"
                  style={{ transitionDelay: "0.4s" }}
                >
                  Kristal{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    Pithwa
                  </span>
                </h1>
              </div>

              <div className="flex justify-center mb-4">
                <p
                  style={{ transitionDelay: "0.6s" }}
                  className="text-3xl font-medium text-gray-300  animate-slide-fade animate"
                >
                  Front-End Developer
                </p>

                <img
                  src={logo}
                  alt="logo"
                  className="w-[40px] h-[40px] animate-rotate"
                />
              </div>

              <p
                className="max-w-3xl text-base text-gray-400 mx-auto leading-relaxed mb-8 animate-slide-fade animate"
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
                My name is Kristal Pithwa, and I enjoy creating things that live
                on the internet. I'm passionate about digital products that help
                people experience everyday life, not endure it. I specialize in
                building responsive and scalable web and mobile apps.
              </p>

              <div
                className="flex flex-wrap justify-center gap-3 animate-scale-in animate"
                style={{ transitionDelay: "1s" }}
              >
                <div className="glass-card rounded-full px-6 py-2 flex items-center">
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

                <div className="glass-card rounded-full px-6 py-2 flex items-center">
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

                <div className="glass-card rounded-full px-6 py-2 flex items-center">
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
              </div>

              {/* Quick Stats */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                <div
                  className="text-center animate-slide-fade animate"
                  style={{ transitionDelay: "1.2s" }}
                >
                  <div className="text-5xl font-normal text-white font-geist tracking-tighter mb-2">
                    +5
                  </div>
                  <div className="text-lg text-gray-400">
                    YEARS OF EXPERIENCE
                  </div>
                </div>
                <div
                  className="text-center animate-slide-fade animate"
                  style={{ transitionDelay: "1.4s" }}
                >
                  <div className="text-5xl font-normal text-white font-geist tracking-tighter mb-2">
                    +20
                  </div>
                  <div className="text-lg text-gray-400">
                    PROJECTS COMPLETED
                  </div>
                </div>
                <div
                  className="text-center animate-slide-fade animate"
                  style={{ transitionDelay: "1.6s" }}
                >
                  <div className="text-5xl font-normal text-white font-geist tracking-tighter mb-2">
                    +20
                  </div>
                  <div className="text-lg text-gray-400">WORLDWIDE CLIENTS</div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                About Me
              </span>
            </div>

            {/* <!-- About Me --> */}
            <div
              className="glass-card flex flex-col md:flex-row items-center md:items-start refraction-effect animate-float rounded-3xl p-6 md:p-8 animate-slide-left animate mb-24"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                alt="Profile"
                loading="lazy"
                src={profilePic}
                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] xl:w-[280px] xl:h-[280px] object-cover  shadow-lg mb-6 md:mb-0"
              />

              <div className="md:ml-10 text-center md:text-left">
                <h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">
                  About Me
                </h3>

                <div className="divider-gradient mb-4"></div>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  I am a React/React Native Developer with 5+ years of dedicated
                  experience, professionally well-versed in crafting robust and
                  user-centric web and mobile applications for both iOS and
                  Android platforms. My extensive expertise includes
                  proficiently leveraging React and React Native's capabilities,
                  optimizing performance, ensuring seamless UI/UX, and
                  collaborating seamlessly within cross-functional teams to
                  deliver high-quality, scalable web and mobile solutions.
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
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Tech Stack
              </span>
            </div>

            {/* <!-- Tech Stack --> */}
            <div
              className="glass-card flex refraction-effect animate-float rounded-3xl p-4 sm:p-6 md:p-8 animate-slide-left animate mb-16 sm:mb-20 md:mb-24"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
                {[
                  JavaScriptImage,
                  TypescriptImage,
                  ReactImage,
                  Android,
                  Xcode,
                  tailwindImage,
                  reduxImage,
                  gitImage,
                  htmlImage,
                  cssImage,
                ].map((src, index) => (
                  <div
                    key={index}
                    className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px]"
                  >
                    <img
                      alt={`Tech-${index}`}
                      loading="lazy"
                      src={src}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Featured Work
              </span>
            </div>

            {/* <!-- Featured Projects --> */}
            <div className="glass-card refraction-effect animate-blur-in rounded-3xl mb-20 p-12 animate">
              <h2 className="text-4xl font-normal text-white tracking-tighter font-geist text-center mb-12">
                Some Things I’ve Built.
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  {/* Project 1 */}
                  <div className="border-l-4 border-blue-500 pl-8 animate-slide-left animate">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Social Music App - Dedicated Developer
                      </h3>
                    </div>

                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      The Social Music App is the ultimate social platform for
                      music enthusiasts worldwide, The Social Music App has
                      stunning user interface and designed to connect with
                      friends based on the music, and GPS feature allows users
                      to stay on top of music trends wherever user from school
                      to workplace and beyond.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">Link:</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>
                          •
                          https://apps.apple.com/in/app/record-social/id6446630104
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "React-Native",
                        "JavaScript",
                        "RestAPI",
                        "Firebase",
                        "Spotify SDK",
                        "iOS",
                        "Android",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "React-Native": "bg-blue-500/20 text-blue-300",
                              JavaScript: "bg-purple-500/20 text-purple-300",
                              "Spotify SDK": "bg-blue-500/20 text-blue-300",
                              RestAPI: "bg-emerald-500/20 text-emerald-300",
                              Firebase: "bg-yellow-500/20 text-yellow-300",
                              iOS: "bg-emerald-500/20 text-emerald-300",
                              Android: "bg-yellow-500/20 text-yellow-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div
                    className="border-l-4 border-purple-500 pl-8 animate-slide-left animate"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Clinic System App - Dedicated Developer
                      </h3>
                    </div>

                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Clinic Management System App Designed and developed for
                      registered staff, providing seamless access to client
                      profiles and enabling the creation of detailed journal
                      entries. Profiles include vital information such as
                      medical history, prescribed treatments, allergies, and
                      emergency contacts.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">Link:</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>
                          •
                          https://apps.apple.com/us/app/validi-clinic-system/id1049757545
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "React-Native",
                        "JavaScript",
                        "RestAPI",
                        "Firebase",
                        "Spotify SDK",
                        "iOS",
                        "Android",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "React-Native": "bg-blue-500/20 text-blue-300",
                              JavaScript: "bg-purple-500/20 text-purple-300",
                              "Spotify SDK": "bg-blue-500/20 text-blue-300",
                              RestAPI: "bg-emerald-500/20 text-emerald-300",
                              Firebase: "bg-yellow-500/20 text-yellow-300",
                              iOS: "bg-emerald-500/20 text-emerald-300",
                              Android: "bg-yellow-500/20 text-yellow-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Project 3 */}

                  <div
                    className="border-l-4 border-purple-500 pl-8 animate-slide-left animate"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Learning App for students
                      </h3>
                    </div>

                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Adaptive learning applications help students of all ages
                      and abilities improve their writing skills. With the help
                      of artificial intelligence, the program provides instant
                      feedback on student responses to writing prompts. It also
                      adapts to the student's writing style, providing
                      progressively more challenging prompts and feedback as the
                      student's writing skills improve.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">Link:</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>
                          •
                          https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "React-Native",
                        "JavaScript",
                        "RestAPI",
                        "ChatGPT",
                        "iOS",
                        "Android",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "React-Native": "bg-blue-500/20 text-blue-300",
                              JavaScript: "bg-purple-500/20 text-purple-300",
                              "Spotify SDK": "bg-blue-500/20 text-blue-300",
                              RestAPI: "bg-emerald-500/20 text-emerald-300",
                              ChatGPT: "bg-yellow-500/20 text-yellow-300",
                              iOS: "bg-emerald-500/20 text-emerald-300",
                              Android: "bg-yellow-500/20 text-yellow-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div
                    className="border-l-4 border-yellow-500 pl-8 animate-slide-right animate"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Battle Rap Live App - Dedicated Developer
                      </h3>
                    </div>
                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Discover your rap potential with BattleRapLive, the
                      ultimate freestyle and battle rap app on the iPhone!
                      Designed to awaken the MC within, BattleRapLive brings a
                      mobileType recording studio right to your pocket. Whether
                      you're a seasoned rapper or a newcomer looking to step
                      into the cypher, our app is perfect for every skill level.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">Link:</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>
                          •
                          https://apps.apple.com/us/app/battleraplive/id346512771
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "React-Native",
                        "JavaScript",
                        "RestAPI",
                        "Firebase",
                        "iOS",
                        "Android",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "React-Native": "bg-blue-500/20 text-blue-300",
                              JavaScript: "bg-purple-500/20 text-purple-300",
                              "Spotify SDK": "bg-blue-500/20 text-blue-300",
                              RestAPI: "bg-emerald-500/20 text-emerald-300",
                              Firebase: "bg-yellow-500/20 text-yellow-300",
                              iOS: "bg-emerald-500/20 text-emerald-300",
                              Android: "bg-yellow-500/20 text-yellow-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Get In Touch
              </span>
            </div>

            {/* Contact Section */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-normal text-white tracking-tighter font-geist mb-8 animate-blur-in animate">
                Let's Build Something Amazing
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-fade animate">
                Ready to transform your business with intelligent AI solutions?
                Let's discuss how we can optimize your workflows and unlock new
                possibilities.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in animate">
                {/* Email */}
                <a
                  href="mailto:crystalpithwa@gmail.com"
                  className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="font-medium">crystalpithwa@gmail.com</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kristal-pithwa-a62861a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/kristalpithwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
              </div>

              {/* Availability Status */}

              <div className="glass-card rounded-2xl p-6 max-w-md mx-auto animate-slide-fade animate">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-medium">
                    Currently Available
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Open for new projects and consulting opportunities. Response
                  time: within 24 hours.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center pt-12 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Kristal Pithwa. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
