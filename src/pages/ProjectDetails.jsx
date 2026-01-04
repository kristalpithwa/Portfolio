import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoArrowBack, IoOpenOutline } from "react-icons/io5";
import { PROJECTS } from "../constants/projects";
import { useEffect, useRef } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  // Use a fallback color if project doesn't have one defined,
  // extracting the color name from the class string if possible, or defaulting to blue
  const getColor = (colorClass) => {
    if (!colorClass) return "blue";
    if (colorClass.includes("blue")) return "blue";
    if (colorClass.includes("emerald")) return "emerald";
    if (colorClass.includes("purple")) return "purple";
    if (colorClass.includes("yellow")) return "yellow";
    if (colorClass.includes("red")) return "red";
    return "blue";
  };

  const themeColor = getColor(project?.color);

  // Hero Parallax Effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        <div className="text-center">
          <h2 className="text-2xl mb-4 font-geist">Project not found</h2>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-white/20">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </nav>

      {/* Hero Section */}
      <div
        ref={ref}
        className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-20"
      >
        {/* Dynamic Background Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-${themeColor}-600/20 via-slate-950/50 to-slate-950 z-0`}
        />
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${themeColor}-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2`}
        />

        <motion.div
          style={{ y, opacity }}
          className="container max-w-6xl mx-auto px-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-geist bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
              {project.shortDescription}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-6 pb-24 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed">
                {project.fullDescription}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sidebar / Metadata */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Actions Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl sticky top-24">
              <h3 className="text-lg font-medium text-white mb-6 font-geist">
                Project Links
              </h3>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between w-full p-4 mb-4 rounded-xl bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-700 hover:from-${themeColor}-500 hover:to-${themeColor}-600 text-white transition-all group`}
              >
                <span className="font-medium">Open Project</span>
                <IoOpenOutline className="text-xl group-hover:scale-110 transition-transform" />
              </a>

              <div className="w-full h-[1px] bg-white/10 my-6" />

              <h3 className="text-lg font-medium text-white mb-4 font-geist">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
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
