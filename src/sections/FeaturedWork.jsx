import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/projects";

const FeaturedWork = () => {
  // Split projects into two columns
  const leftColumnProjects = PROJECTS.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = PROJECTS.filter((_, i) => i % 2 !== 0);

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
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="space-y-8">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ProjectCard = ({ project }) => {
  const getTagColor = (tag) => {
    const colors = {
      "React-Native": "bg-blue-500/20 text-blue-300",
      JavaScript: "bg-purple-500/20 text-purple-300",
      "Spotify SDK": "bg-blue-500/20 text-blue-300",
      RestAPI: "bg-emerald-500/20 text-emerald-300",
      Firebase: "bg-yellow-500/20 text-yellow-300",
      iOS: "bg-emerald-500/20 text-emerald-300",
      Android: "bg-yellow-500/20 text-yellow-300",
      TypeScript: "bg-blue-600/20 text-blue-400",
      "NPM Package": "bg-red-500/20 text-red-300",
      Auth: "bg-purple-500/20 text-purple-300",
      ChatGPT: "bg-yellow-500/20 text-yellow-300",
      OpenStreetMap: "bg-emerald-500/20 text-emerald-300",
      Maps: "bg-emerald-500/20 text-emerald-300",
    };
    return colors[tag] || "bg-gray-500/20 text-gray-300";
  };

  return (
    <Link to={`/project/${project.id}`} className="block group">
      <motion.div
        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`border-l-4 ${project.color} pl-8 p-4 rounded-r-xl cursor-pointer`}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-normal text-white font-geist tracking-tight group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="divider-gradient mb-4"></div>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="space-y-2 mb-4">
          <div className="text-xs text-gray-200">
            Link :{"   "}
            <span className="text-gray-500 text-[12px] hover:text-blue-400 transition-colors">
              {project.link}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedWork;
