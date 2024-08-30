import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Social Music App - Dedicated Developer",
    description:
      "The Social Music App is the ultimate social platform for music enthusiasts worldwide, The Social Music App has stunning user interface and designed to connect with friends based on the music, and GPS feature allows users to stay on top of music trends wherever user from school to workplace and beyond.",
    technologies: "React-Native, JavaScript, Node.js, iOS",
    highlights: [
      {
        id: 1,
        link: "https://apps.apple.com/in/app/record-social/id6446630104",
        mobile: "iOS",
      },
    ],
  },
  {
    company: "Learning App for students",
    description:
      "Adaptive learning applications help students of all ages and abilities improve their writing skills. With the help of artificial intelligence, the program provides instant feedback on student responses to writing prompts. It also adapts to the student's writing style, providing progressively more challenging prompts and feedback as the student's writing skills improve.",
    technologies: "React-Native, JavaScript, Node.js, Android, iOS",
    highlights: [
      {
        link: "https://play.google.com/store/apps/details?id=com.aiachat",
        mobile: "Android",
      },

      {
        link: "https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2",
        mobile: "iOS",
      },
    ],
  },
  {
    company: "Clinic System App - Dedicated Developer",
    description:
      "Clinic Management System App Designed and developed for registered staff, providing seamless access to client profiles and enabling the creation of detailed journal entries. Profiles include vital information such as medical history, prescribed treatments, allergies, and emergency contacts.",
    technologies: "React-Native, JavaScript, Node.js, Android, iOS",
    highlights: [
      {
        link: "https://play.google.com/store/apps/details?id=com.validi.validiapp",
        mobile: "Android",
      },

      {
        link: "https://apps.apple.com/us/app/validi-clinic-system/id1049757545",
        mobile: "iOS",
      },
    ],
  },
  {
    company: "Battle Rap Live App - Dedicated Developer",
    description:
      "Discover your rap potential with BattleRapLive, the ultimate freestyle and battle rap app on the iPhone! Designed to awaken the MC within, BattleRapLive brings a mobile recording studio right to your pocket. Whether you're a seasoned rapper or a newcomer looking to step into the cypher, our app is perfect for every skill level.",
    technologies: "React-Native, JavaScript, Node.js, iOS",
    highlights: [
      {
        link: "https://apps.apple.com/us/app/battleraplive/id346512771",
        mobile: "iOS",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <div className="text-white py-5" id="Projects">
      <div className="mx-auto px-40">
        <h2 className="text-5xl font-bold mb-32 text-center">
          {`Some Things I’ve Built`}
        </h2>

        <div className="relative flex justify-center items-center">
          {/* Center line */}
          <div className="absolute left-1/2 bg-gray-700 w-1 h-full top-0 transform -translate-x-1/2" />

          {/* Circle at center */}
          {/* <div className="absolute bg-gradient-to-r from-pink-500 to-blue-500 w-6 h-6 rounded-full ring-4" /> */}

          <div className="flex flex-col flex-grow">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex mb-14 ${
                  index % 2 === 1 ? "md:ml-auto pt-5" : "md:mr-auto"
                }`}
              >
                {/* Experience Box */}
                <div
                  className={`p-5 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-[750px]  ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-3xl font-semibold text-white">
                        {experience.company}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}

                  <p className="text-gray-300 text-xl mb-4 ">
                    {experience.description}
                  </p>
                  <p className="text-gray-300  text-xl mb-4">
                    Technologies: {experience.technologies}
                  </p>

                  {/* Highlights */}

                  <ul className="text-gray-400">
                    {experience.highlights.map((item, i) => (
                      <li key={i} className="flex mb-2">
                        <svg
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6 mr-2   text-blue-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12" y2="16"></line>
                        </svg>

                        <p className="text-gray-300 text-[16px]">
                          {item.mobile} : {item.link}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
