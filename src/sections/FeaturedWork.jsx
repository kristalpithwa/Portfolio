import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const FeaturedWork = () => {
  return (
    <>
      <div className="section-divider">
        <span className="border-white/10 border rounded-full">
          Featured Work
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card refraction-effect rounded-3xl mb-20 p-12"
      >
        <h2 className="text-4xl font-normal text-white tracking-tighter font-geist text-center mb-12">
          Some Things I’ve Built.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Project 1 */}
            <motion.div
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-l-4 border-blue-500 pl-8 p-4 rounded-r-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                  Social Music App - Dedicated Developer
                </h3>
              </div>

              <div className="divider-gradient mb-4"></div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                The Social Music App is the ultimate social platform for music
                enthusiasts worldwide, The Social Music App has stunning user
                interface and designed to connect with friends based on the
                music, and GPS feature allows users to stay on top of music
                trends wherever user from school to workplace and beyond.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-200">
                  Link :{"   "}
                  <a
                    href={
                      "https://apps.apple.com/in/app/record-social/id6446630104"
                    }
                    className="text-gray-500 text-[12px]"
                  >
                    {
                      " https://apps.apple.com/in/app/record-social/id6446630104"
                    }
                  </a>
                </div>
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
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-l-4 border-purple-500 pl-8 p-4 rounded-r-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                  Clinic System App - Dedicated Developer
                </h3>
              </div>
              <div className="divider-gradient mb-4"></div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Clinic Management System App Designed and developed for
                registered staff, providing seamless access to client profiles
                and enabling the creation of detailed journal entries. Profiles
                include vital information such as medical history, prescribed
                treatments, allergies, and emergency contacts.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-200">
                  Link :{"   "}
                  <a
                    href={
                      "https://apps.apple.com/us/app/validi-clinic-system/id1049757545"
                    }
                    className="text-gray-500 text-[12px]"
                  >
                    {
                      " https://apps.apple.com/us/app/validi-clinic-system/id1049757545"
                    }
                  </a>
                </div>
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
            </motion.div>
          </div>

          <div className="space-y-8">
            {/* Project 3 */}

            <motion.div
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-l-4 border-purple-500 pl-8 p-4 rounded-r-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                  Learning App for students
                </h3>
              </div>

              <div className="divider-gradient mb-4"></div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Adaptive learning applications help students of all ages and
                abilities improve their writing skills. With the help of
                artificial intelligence, the program provides instant feedback
                on student responses to writing prompts. It also adapts to the
                student's writing style, providing progressively more
                challenging prompts and feedback as the student's writing skills
                improve.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-200">
                  Link :{"   "}
                  <a
                    href={
                      "https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2"
                    }
                    className="text-gray-500 text-[12px]"
                  >
                    {
                      " https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2"
                    }
                  </a>
                </div>
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
            </motion.div>

            {/* Project 4 */}
            <motion.div
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-l-4 border-yellow-500 pl-8 p-4 rounded-r-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                  Battle Rap Live App - Dedicated Developer
                </h3>
              </div>
              <div className="divider-gradient mb-4"></div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Discover your rap potential with BattleRapLive, the ultimate
                freestyle and battle rap app on the iPhone! Designed to awaken
                the MC within, BattleRapLive brings a mobileType recording
                studio right to your pocket. Whether you're a seasoned rapper or
                a newcomer looking to step into the cypher, our app is perfect
                for every skill level.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-200">
                  Link :{"   "}
                  <a
                    href={
                      "https://apps.apple.com/us/app/battleraplive/id346512771"
                    }
                    className="text-gray-500 text-[12px]"
                  >
                    {" https://apps.apple.com/us/app/battleraplive/id346512771"}
                  </a>
                </div>
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedWork;
