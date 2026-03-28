import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiSmartphone } from "react-icons/fi";
import { SiApple, SiAndroid } from "react-icons/si";
import { PROJECTS } from "../constants/projects";
import { useEffect } from "react";

/* Static color map — Tailwind purges dynamic classes like bg-${color}-500 */
const colorThemes = {
  blue:    { glow: "bg-blue-500",    btn: "bg-blue-600 hover:bg-blue-500" },
  emerald: { glow: "bg-emerald-500", btn: "bg-emerald-600 hover:bg-emerald-500" },
  purple:  { glow: "bg-purple-500",  btn: "bg-purple-600 hover:bg-purple-500" },
  yellow:  { glow: "bg-yellow-500",  btn: "bg-yellow-600 hover:bg-yellow-500" },
  red:     { glow: "bg-red-500",     btn: "bg-red-600 hover:bg-red-500" },
};

const getTheme = (colorClass) => {
  if (!colorClass) return colorThemes.blue;
  for (const key of Object.keys(colorThemes)) {
    if (colorClass.includes(key)) return colorThemes[key];
  }
  return colorThemes.blue;
};

const platformIcons = {
  iOS: SiApple,
  Android: SiAndroid,
  "React-Native": FiSmartphone,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === parseInt(id));
  const theme = getTheme(project?.color);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#060b18] text-white gap-4">
        <h2 className="text-xl font-geist font-bold">Project not found</h2>
        <Link to="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  const platforms = project.tags.filter((t) => platformIcons[t]);
  const techTags = project.tags.filter((t) => !platformIcons[t]);

  return (
    <div className="min-h-screen bg-[#060b18] text-white">
      <div className="noise-overlay" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#060b18]/80 border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group font-geist"
          >
            <FiArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors font-geist"
          >
            Open Project
            <FiExternalLink size={14} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-28 pb-8 overflow-hidden">
        <div className={`absolute top-0 right-1/4 w-[400px] h-[400px] ${theme.glow} opacity-[0.05] rounded-full blur-[120px] pointer-events-none`} />
        <div className={`absolute -top-20 left-1/3 w-[300px] h-[300px] ${theme.glow} opacity-[0.03] rounded-full blur-[100px] pointer-events-none`} />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {platforms.length > 0 && (
              <div className="flex gap-2 mb-4">
                {platforms.map((tag) => {
                  const Icon = platformIcons[tag];
                  return (
                    <div key={tag} className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1">
                      <Icon size={11} className="text-gray-400" />
                      <span className="text-[10px] text-gray-400 font-geist">{tag}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-geist mb-4 text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="text-gray-300 text-sm leading-relaxed space-y-4 [&_h3]:text-base [&_h3]:text-white [&_h3]:font-geist [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:space-y-1.5 [&_ul]:text-gray-400 [&_li]:leading-relaxed [&_code]:text-xs [&_code]:text-blue-300 [&_code]:bg-white/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_strong]:text-gray-200 [&_strong]:font-medium [&_pre]:text-xs [&_pre]:text-gray-300 [&_pre]:overflow-x-auto">
                {project.fullDescription}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Actions */}
            <div className="glass-card rounded-2xl p-5 sticky top-20">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full p-3 rounded-xl ${theme.btn} text-white text-sm font-medium transition-colors mb-5`}
              >
                <FiExternalLink size={14} />
                View Live Project
              </a>

              <div className="divider-gradient mb-5" />

              <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-3">
                Technologies
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {techTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/[0.04] text-gray-300 border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {platforms.length > 0 && (
                <>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-3">
                    Platforms
                  </div>
                  <div className="flex gap-2">
                    {platforms.map((tag) => {
                      const Icon = platformIcons[tag];
                      return (
                        <div key={tag} className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] rounded-xl px-3 py-2">
                          <Icon size={14} className="text-gray-400" />
                          <span className="text-xs text-gray-400 font-geist">{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Other projects */}
            <div className="glass-card rounded-2xl p-5">
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-3">
                Other Projects
              </div>
              <div className="space-y-1">
                {PROJECTS.filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/project/${p.id}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors group"
                    >
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-geist truncate pr-2">
                        {p.title}
                      </span>
                      <FiArrowLeft size={12} className="text-gray-600 group-hover:text-gray-400 rotate-180 shrink-0 transition-colors" />
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
