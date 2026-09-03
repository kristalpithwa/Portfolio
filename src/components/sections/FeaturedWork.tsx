"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/portfolioData";
import ProjectCard from "@/components/common/ProjectCard";


interface FilterTab {
  id: string;
  label: string;
}

const filterTabs: FilterTab[] = [
  { id: "all", label: "All Projects" },
  { id: "apps", label: "Mobile Apps" },
  { id: "packages", label: "NPM Packages" },
];

const FeaturedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "apps")
      return project.images && project.images.length > 0;
    if (activeFilter === "packages")
      return project.tags.includes("NPM Package");
    if (activeFilter === "ios")
      return project.tags.includes("iOS") || project.tags.includes("Android");
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
            A showcase of live mobile applications deployed to the App Store &
            Google Play, alongside open-source React Native NPM packages.
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

export default FeaturedWork;
