import React from "react";

const experiences = [
  {
    name: "Social Music App - Dedicated Developer",
    description:
      "The Social Music App is the ultimate social platform for music enthusiasts worldwide, The Social Music App has stunning user interface and designed to connect with friends based on the music, and GPS feature allows users to stay on top of music trends wherever user from school to workplace and beyond.",
    technologies: "React-Native, JavaScript, Node.js, iOS",
    highlights: [
      {
        id: 1,
        link: "https://apps.apple.com/in/app/record-social/id6446630104",
        mobileType: "iOS",
      },
    ],
  },
  {
    name: "Learning App for students",
    description:
      "Adaptive learning applications help students of all ages and abilities improve their writing skills. With the help of artificial intelligence, the program provides instant feedback on student responses to writing prompts. It also adapts to the student's writing style, providing progressively more challenging prompts and feedback as the student's writing skills improve.",
    technologies: "React-Native, JavaScript, Node.js, Android, iOS",
    highlights: [
      {
        link: "https://play.google.com/store/apps/details?id=com.aiachat",
        mobileType: "Android",
      },

      {
        link: "https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2",
        mobileType: "iOS",
      },
    ],
  },
  {
    name: "Clinic System App - Dedicated Developer",
    description:
      "Clinic Management System App Designed and developed for registered staff, providing seamless access to client profiles and enabling the creation of detailed journal entries. Profiles include vital information such as medical history, prescribed treatments, allergies, and emergency contacts.",
    technologies: "React-Native, JavaScript, Node.js, Android, iOS",
    highlights: [
      {
        link: "https://play.google.com/store/apps/details?id=com.validi.validiapp",
        mobileType: "Android",
      },

      {
        link: "https://apps.apple.com/us/app/validi-clinic-system/id1049757545",
        mobileType: "iOS",
      },
    ],
  },
  {
    name: "Battle Rap Live App - Dedicated Developer",
    description:
      "Discover your rap potential with BattleRapLive, the ultimate freestyle and battle rap app on the iPhone! Designed to awaken the MC within, BattleRapLive brings a mobileType recording studio right to your pocket. Whether you're a seasoned rapper or a newcomer looking to step into the cypher, our app is perfect for every skill level.",
    technologies: "React-Native, JavaScript, Node.js, iOS",
    highlights: [
      {
        link: "https://apps.apple.com/us/app/battleraplive/id346512771",
        mobileType: "iOS",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <div
      id="Projects"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl mt-7 sm:mt-15 md:mt-10 lg:mt-5 font-bold mb-10 text-center">
        {`Some Things I’ve Built.`}
      </h2>

      <div className="relative w-full max-w-[1300px] flex justify-center items-center">
        <div className="flex flex-col flex-grow w-full">
          {experiences.map((experience, index) => (
            <div
              key={index.toString()}
              className={`relative mb-5 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg md:${
                index % 2 === 1 ? "ml-auto" : "mr-auto"
              }  max-w-full md:max-w-[80%] lg:max-w-[55%]`}
            >
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white">
                {experience.name}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-3">
                {experience.description}
              </p>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-3">
                Technologies: {experience.technologies}
              </p>

              <ul className="text-gray-400 mt-3">
                {experience.highlights.map((item, i) => (
                  <li key={i} className="flex mb-2">
                    <svg
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 mr-2 text-blue-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12" y2="16"></line>
                    </svg>

                    <a href={item.link} className="text-gray-300 text-[12px]">
                      {item.mobileType} : {item.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
