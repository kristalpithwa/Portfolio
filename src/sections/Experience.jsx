import React from "react";
import { motion } from "framer-motion";

// Updated experiences data with logo paths
const experiences = [
  {
    company: "Bonzark Technologies",
    timeframe: "July 2022 - May 2024",
    description: "Worked as a frontend developer on various projects.",
    icon: "./src/assets/bonzark.png", // Updated path for Bonzark Technologies logo
    highlights: [
      "Developed responsive web applications using React.",
      "Implemented state management with Redux.",
      "Collaborated with designers to ensure UI/UX consistency.",
    ],
  },
  {
    company: "Qtonz Infosoft",
    timeframe: "May 2024 - Present",
    description: "Currently working as a MERN stack developer.",
    icon: "./src/assets/qtonz.png", // Updated path for Qtonz Infosoft logo
    highlights: [
      "Building scalable backend APIs using Node.js and Express.",
      "Designing and maintaining MongoDB databases.",
      "Integrating frontend with backend using RESTful APIs.",
    ],
  },
];

const ExperienceSectionLarge = () => {
  return (
    <div className="bg-gray-900 text-white py-16" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative flex justify-center items-center">
          {/* Vertical timeline */}
          <div className="absolute left-1/2 bg-gray-700 w-1 h-full top-0 transform -translate-x-1/2"></div>
          {/* Circle at center */}
          <div className="absolute left-1/2 bg-gradient-to-r from-pink-500 to-blue-500 w-3 h-3 rounded-full ring-8 ring-gray-900 dark:ring-gray-900"></div>
          <div className="flex flex-col flex-grow">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative flex mb-8 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {/* Experience Box */}
                <div
                  className={`p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-full max-w-md ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {/* Timeline connector */}
                  {index > 0 && (
                    <div
                      className={`absolute top-0 ${
                        index % 2 === 0 ? "left-1/2" : "-left-1/2"
                      } transform -translate-x-1/2 h-full w-1 bg-gray-700`}
                    ></div>
                  )}
                  <div className="flex items-center mb-4">
                    <img
                      src={experience.icon}
                      alt={`${experience.company} logo`}
                      className="w-16 h-16 lg:w-24 lg:h-24 rounded-full mr-4 object-contain object-center bg-white p-2 box-content"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.company}
                      </h3>
                      <p className="text-gray-300">{experience.timeframe}</p>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  {/* Highlights */}
                  <ul className="text-gray-400">
                    {experience.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12" y2="16"></line>
                        </svg>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSectionLarge;
