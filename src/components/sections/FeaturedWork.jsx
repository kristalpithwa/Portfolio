"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiSmartphone } from "react-icons/fi";
import { SiApple, SiAndroid } from "react-icons/si";
import { PROJECTS } from "@/data/projects";

const platformMap = {
  iOS: { icon: SiApple, color: "text-gray-300" },
  Android: { icon: SiAndroid, color: "text-green-400" },
  "React-Native": { icon: FiSmartphone, color: "text-cyan-400" },
};

const FeaturedWork = () => {
  const leftColumnProjects = PROJECTS.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = PROJECTS.filter((_, i) => i % 2 !== 0);

  return (
    <>
      <div className="section-divider">
        <span>Featured Work</span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card glass-card-glow refraction-effect rounded-3xl mb-16 p-5 sm:p-7 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-geist text-center mb-8 md:mb-10 gradient-heading">
          Apps I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-5 md:space-y-6">
            {leftColumnProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
          <div className="space-y-5 md:space-y-6">
            {rightColumnProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const getTagColor = (tag) => {
  const colors = {
    "React-Native": "bg-cyan-500/12 text-cyan-300 border-cyan-500/10",
    JavaScript: "bg-yellow-500/12 text-yellow-300 border-yellow-500/10",
    "Spotify SDK": "bg-green-500/12 text-green-300 border-green-500/10",
    RestAPI: "bg-emerald-500/12 text-emerald-300 border-emerald-500/10",
    Firebase: "bg-amber-500/12 text-amber-300 border-amber-500/10",
    iOS: "bg-gray-500/12 text-gray-300 border-gray-500/10",
    Android: "bg-green-500/12 text-green-300 border-green-500/10",
    TypeScript: "bg-blue-500/12 text-blue-300 border-blue-500/10",
    "NPM Package": "bg-red-500/12 text-red-300 border-red-500/10",
    Auth: "bg-purple-500/12 text-purple-300 border-purple-500/10",
    ChatGPT: "bg-emerald-500/12 text-emerald-300 border-emerald-500/10",
    OpenStreetMap: "bg-teal-500/12 text-teal-300 border-teal-500/10",
    Maps: "bg-teal-500/12 text-teal-300 border-teal-500/10",
  };
  return colors[tag] || "bg-gray-500/12 text-gray-300 border-gray-500/10";
};

const ProjectCard = ({ project }) => {
  const projectPlatforms = project.tags.filter((t) => platformMap[t]);

  return (
    <Link href={`/project/${project.id}`} className="block group">
      <motion.div
        whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.02)" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="glass-card rounded-2xl p-4 sm:p-5 cursor-pointer border-l-2 border-l-transparent group-hover:border-l-blue-400 transition-colors"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white font-geist tracking-tight group-hover:text-blue-400 transition-colors leading-snug">
              {project.title}
            </h3>
          </div>
          <FiArrowUpRight className="text-gray-600 group-hover:text-blue-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1" size={16} />
        </div>

        {projectPlatforms.length > 0 && (
          <div className="flex gap-1.5 mb-3">
            {projectPlatforms.map((tag) => {
              const { icon: Icon, color } = platformMap[tag];
              return (
                <div key={tag} className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.04] rounded-full px-2 py-0.5">
                  <Icon size={9} className={color} />
                  <span className="text-[9px] text-gray-400 font-geist">{tag}</span>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {project.link && (
          <div className="text-[10px] text-gray-500 group-hover:text-blue-400/70 transition-colors truncate mb-3">
            {project.link}
          </div>
        )}

        <div className="flex flex-wrap gap-1">
          {project.tags.filter((t) => !platformMap[t]).map((tag, i) => (
            <span key={i} className={`px-2 py-0.5 rounded-full text-[10px] border ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedWork;
