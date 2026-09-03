"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStackSection } from "@/data/portfolioData";

const TechStack: React.FC = () => {
  const {
    sectionTag,
    subtitleTag,
    title: sectionTitle,
    description: sectionDesc,
    categories,
  } = techStackSection;

  return (
    <>
      <div className="section-divider">
        <span>{sectionTag}</span>
      </div>

      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            {subtitleTag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {sectionTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {sectionDesc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
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
