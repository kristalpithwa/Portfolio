"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiSmartphone,
  FiPackage,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";
import { SiApple, SiAndroid, SiReact } from "react-icons/si";
import { IconType } from "react-icons";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";

interface PlatformInfo {
  icon: IconType;
  color: string;
  bg: string;
}

const platformMap: Record<string, PlatformInfo> = {
  iOS: { icon: SiApple, color: "text-slate-200", bg: "bg-slate-800/80" },
  Android: { icon: SiAndroid, color: "text-emerald-400", bg: "bg-emerald-950/60" },
  "React-Native": { icon: SiReact, color: "text-cyan-400", bg: "bg-cyan-950/60" },
  "NPM Package": { icon: FiPackage, color: "text-rose-400", bg: "bg-rose-950/60" },
};

interface FilterTab {
  id: string;
  label: string;
}

const filterTabs: FilterTab[] = [
  { id: "all", label: "All Projects" },
  { id: "apps", label: "Production Apps" },
  { id: "packages", label: "NPM Libraries" },
  { id: "ios", label: "iOS & Android" },
];

const FeaturedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "apps") return project.images && project.images.length > 0;
    if (activeFilter === "packages") return project.tags.includes("NPM Package");
    if (activeFilter === "ios") return project.tags.includes("iOS") || project.tags.includes("Android");
    return true;
  });

  return (
    <>
      <div className="section-divider">
        <span>Featured Portfolio</span>
      </div>

      <div className="mb-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Production Apps & Libraries
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A showcase of live mobile applications deployed to the App Store & Google Play, alongside open-source React Native NPM packages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold"
                    : "glass-card text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasImages = project.images && project.images.length > 0;
  const isNpm = project.tags.includes("NPM Package");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="group relative flex flex-col justify-between glass-card rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_15px_40px_-15px_rgba(56,189,248,0.2)] transition-all duration-300"
    >
      <div>
        {/* Visual Preview Section */}
        {hasImages ? (
          <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d1428] to-slate-900 border border-white/[0.06] mb-6 overflow-hidden flex items-center justify-center p-4">
            {/* Ambient backlight */}
            <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Multiple device preview cards */}
            <div className="relative flex items-center justify-center gap-3 w-full h-full">
              {project.images.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  className={`relative transition-transform duration-300 ${
                    idx === 0
                      ? "w-28 sm:w-32 h-48 sm:h-56 z-20 shadow-2xl shadow-black/80 rounded-2xl border-2 border-white/20 overflow-hidden group-hover:scale-105"
                      : idx === 1
                      ? "w-24 sm:w-28 h-40 sm:h-48 z-10 opacity-70 rounded-xl border border-white/10 overflow-hidden -rotate-6 group-hover:-rotate-8 group-hover:opacity-90 transition-all hidden sm:block"
                      : "w-24 sm:w-28 h-40 sm:h-48 z-10 opacity-70 rounded-xl border border-white/10 overflow-hidden rotate-6 group-hover:rotate-8 group-hover:opacity-90 transition-all hidden sm:block"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Quick tag badge on image */}
            <div className="absolute bottom-3 left-3 bg-[#060b18]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 z-30">
              <FiSmartphone size={12} className="text-cyan-400" />
              <span className="text-[11px] font-semibold text-slate-200">
                Mobile Production App
              </span>
            </div>
          </div>
        ) : isNpm ? (
          <div className="relative w-full h-44 rounded-2xl bg-[#090e1c] border border-white/[0.08] p-4 mb-6 font-mono text-xs overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-slate-400">
                npm package • TypeScript
              </span>
            </div>
            <div className="py-2 text-slate-300">
              <span className="text-cyan-400">$</span> npm install{" "}
              {project.title.toLowerCase().includes("linkedin")
                ? "@kristalpithwa/react-native-linkedin-login"
                : "react-native-open-street-map-view"}
            </div>
            <div className="text-[11px] text-emerald-400/90 flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-white/[0.04]">
              <FiCode size={13} className="text-cyan-400" />
              <span>Ready-to-use drop-in React Native component</span>
            </div>
          </div>
        ) : null}

        {/* Platforms */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags
            .filter((t) => platformMap[t])
            .map((tag) => {
              const { icon: Icon, color, bg } = platformMap[tag];
              return (
                <div
                  key={tag}
                  className={`flex items-center gap-1.5 ${bg} border border-white/[0.08] rounded-full px-2.5 py-1 text-xs font-medium`}
                >
                  <Icon size={12} className={color} />
                  <span className="text-slate-200">{tag}</span>
                </div>
              );
            })}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      {/* Footer Area: Tags and Links */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags
            .filter((t) => !platformMap[t])
            .slice(0, 4)
            .map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-all"
              aria-label={`Open ${project.title} external link`}
              title="Open App Store / NPM"
            >
              <FiExternalLink size={16} />
            </a>
          )}
          <Link
            href={`/project/${project.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-300 transition-colors shadow-md"
          >
            <span>Details</span>
            <FiArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedWork;
