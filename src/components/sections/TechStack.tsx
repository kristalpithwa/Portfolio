"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiLayout, FiServer } from "react-icons/fi";
import {
  SiReact,
  SiExpo,
  SiXcode,
  SiAndroid,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  level: string;
  icon: IconType;
  color?: string;
}

interface TechCategory {
  title: string;
  icon: IconType;
  description: string;
  accent: string;
  border: string;
  skills: SkillItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Core Mobile Development",
    icon: FiSmartphone,
    description:
      "Engineering production-grade iOS & Android applications with React Native, Expo, and fluid 60fps native interactions.",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "border-cyan-500/30",
    skills: [
      { name: "React Native", level: "Expert", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", level: "Expert", icon: SiExpo, color: "#FFFFFF" },
      { name: "iOS / Xcode", level: "Advanced", icon: SiXcode, color: "#1575F9" },
      { name: "Android", level: "Advanced", icon: SiAndroid, color: "#3DDC84" },
    ],
  },
  {
    title: "Frontend & Backend Ecosystem",
    icon: FiLayout,
    description:
      "Building full-stack web architectures with high-performance React/Next.js interfaces and robust Node.js/Express services.",
    accent: "from-purple-500/20 via-indigo-500/10 to-transparent",
    border: "border-purple-500/30",
    skills: [
      { name: "React", level: "Expert", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", level: "Expert", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", level: "Expert", icon: SiExpress, color: "#FFFFFF" },
      { name: "Next.js", level: "Advanced", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "Languages, State & Design Systems",
    icon: FiServer,
    description:
      "Type-safe software design with TypeScript/JavaScript, centralized state with Redux, and modern styling via Tailwind CSS.",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/30",
    skills: [
      {
        name: "TypeScript",
        level: "Expert",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        level: "Expert",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Redux Toolkit",
        level: "Expert",
        icon: SiRedux,
        color: "#764ABC",
      },
    ],
  },
];

const TechStack: React.FC = () => {
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
            Specialized in high-performance mobile architectures, native
            bridging, and modern full-stack web standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => {
            const {
              title,
              icon: Icon,
              description,
              accent,
              border,
              skills,
            } = category;
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
                  {skills.map(({ name, level, icon: SkillIcon, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 bg-black/40 border border-white/[0.06] rounded-xl p-2.5 hover:border-white/[0.2] transition-colors"
                    >
                      <div
                        className="w-6 h-6 flex items-center justify-center shrink-0"
                        style={{ color: color || "#38bdf8" }}
                      >
                        <SkillIcon size={22} className="drop-shadow" />
                      </div>
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
