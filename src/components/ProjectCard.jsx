/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  description,
  image,
  technologies = [],
  liveLink,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white rounded-lg shadow-lg  m-4 flex flex-col"
    >
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover transition duration-300 transform hover:scale-[1.02]"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex flex-wrap mt-4">
          {technologies?.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-700 shadow-lg shadow-slate-950 px-2 py-1 text-sm rounded-full mr-2 mb-2"
            >
              {tech}
            </div>
          ))}
        </div>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 inline-block"
        >
          Live Preview
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
