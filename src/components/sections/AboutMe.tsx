"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { keyHighlights, stats } from "@/data/constants";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="section-divider">
        <span>About Kristal</span>
      </div>

      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Profile Card & Avatar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group mb-6">
              {/* Animated glowing border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-60 blur-lg group-hover:opacity-90 transition duration-500 animate-pulse-glow" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20 p-1.5 shadow-2xl">
                <Image
                  alt="Kristal Pithwa - Mobile Developer"
                  src="https://lh3.googleusercontent.com/d/1ZTxWFS8pLTLI_k1n2bn_MU_1MQPFfMfY"
                  width={280}
                  height={280}
                  priority
                  className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Status pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#060b18]/90 backdrop-blur-md border border-cyan-500/30 px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-semibold text-slate-200">
                  Senior Mobile Engineer
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight mt-2 mb-1">
              Kristal Pithwa
            </h3>
            <p className="text-sm text-cyan-400 font-medium">
              React Native • iOS • Android
            </p>
          </div>

          {/* Biography & Core Competencies (8 cols) */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-7 sm:p-9 border border-white/[0.08] relative overflow-hidden">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              Engineering Philosophy
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Crafting fluid, high-performance mobile experiences.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              With over{" "}
              <strong>5+ years of specialized mobile development</strong>, I
              bridge the gap between design vision and technical execution. I
              build production-grade applications using React Native,
              TypeScript, and native bridges, focusing on silky 60fps
              animations, intuitive UX, and clean architecture.
            </p>

            {/* Core Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {keyHighlights.map(({ label, icon: Icon, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl p-2.5"
                >
                  <Icon size={16} className={`${color} shrink-0`} />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]">
              {stats.map(({ value, label, desc }) => (
                <div
                  key={label}
                  className="text-center p-2 rounded-xl bg-black/30 border border-white/[0.04]"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                    {value}
                  </div>
                  <div className="text-xs font-bold text-white mt-1 leading-tight">
                    {label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
