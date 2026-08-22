"use client";

import { motion } from "framer-motion";
import { FiSmartphone, FiLayout, FiServer, FiLayers } from "react-icons/fi";
import { SiApple, SiAndroid, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiRedux, SiTailwindcss, SiGit, SiFirebase } from "react-icons/si";

const techCategories = [
  {
    title: "Core Mobile Development",
    icon: FiSmartphone,
    description: "Architecting native & cross-platform applications with 60fps animations.",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "border-cyan-500/30",
    skills: [
      { name: "React Native", level: "Expert", src: "/images/tech/react.svg" },
      { name: "iOS / Xcode", level: "Advanced", src: "/images/tech/xcode.svg" },
      { name: "Android", level: "Advanced", src: "/images/tech/android.svg" },
      { name: "TypeScript", level: "Expert", src: "/images/tech/typescript.svg" },
    ],
  },
  {
    title: "Web & Frontend Ecosystem",
    icon: FiLayout,
    description: "Building responsive, accessible web portals and accompanying web apps.",
    accent: "from-purple-500/20 via-indigo-500/10 to-transparent",
    border: "border-purple-500/30",
    skills: [
      { name: "React", level: "Expert", src: "/images/tech/react.svg" },
      { name: "Next.js", level: "Advanced", src: "/images/tech/nextjs.svg" },
      { name: "JavaScript", level: "Expert", src: "/images/tech/javascript.svg" },
      { name: "Tailwind CSS", level: "Advanced", src: "/images/tech/tailwind.svg" },
    ],
  },
  {
    title: "State, Architecture & Cloud",
    icon: FiServer,
    description: "Scalable state management, offline sync, API integrations, and backend services.",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/30",
    skills: [
      { name: "Redux Toolkit", level: "Expert", src: "/images/tech/redux.svg" },
      { name: "Git & CI/CD", level: "Advanced", src: "/images/tech/git.svg" },
      { name: "HTML5 / CSS3", level: "Expert", src: "/images/tech/html5.svg" },
      { name: "Mobile CI/CD", level: "Advanced", src: "/images/tech/css3.svg" },
    ],
  },
];

const TechStack = () => {
  return (
    <>
      <div className="section-divider">
        <span>Technical Arsenal</span>
      </div>

      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Skills & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technologies I Master
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Specialized in high-performance mobile architectures, native bridging, and modern full-stack web standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => {
            const { title, icon: Icon, description, accent, border, skills } = category;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative glass-card rounded-3xl p-6 sm:p-7 border ${border} bg-gradient-to-b ${accent} flex flex-col justify-between hover:shadow-xl transition-all duration-300 group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-white/[0.08] text-cyan-300 border border-white/[0.1] shadow-inner">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                        {title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                {/* Tech Pills Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                  {skills.map(({ name, level, src }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 bg-black/40 border border-white/[0.06] rounded-xl p-2.5 hover:border-white/[0.2] transition-colors"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={name}
                        loading="lazy"
                        className="w-6 h-6 object-contain shrink-0 drop-shadow"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white truncate leading-tight">
                          {name}
                        </div>
                        <div className="text-[10px] text-cyan-400 font-medium leading-none mt-0.5">
                          {level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
