"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiSmartphone,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { SiApple, SiAndroid } from "react-icons/si";
import { PROJECTS } from "@/data/projects";

const colorThemes = {
  blue: {
    glow: "bg-blue-500",
    glowFrom: "from-blue-500",
    glowTo: "to-cyan-400",
    text: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    btn: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400",
  },
  emerald: {
    glow: "bg-emerald-500",
    glowFrom: "from-emerald-500",
    glowTo: "to-teal-400",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    btn: "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400",
  },
  purple: {
    glow: "bg-purple-500",
    glowFrom: "from-purple-500",
    glowTo: "to-pink-400",
    text: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    btn: "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400",
  },
  yellow: {
    glow: "bg-yellow-500",
    glowFrom: "from-yellow-500",
    glowTo: "to-orange-400",
    text: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/10",
    btn: "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400",
  },
  red: {
    glow: "bg-red-500",
    glowFrom: "from-red-500",
    glowTo: "to-rose-400",
    text: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    btn: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400",
  },
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

/* ─── Phone Mockup ─── */
const PhoneFrame = ({ src, alt, isActive, onClick, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{
      opacity: isActive ? 1 : 0.5,
      y: 0,
      scale: isActive ? 1 : 0.88,
    }}
    whileHover={{ scale: isActive ? 1.02 : 0.92, opacity: isActive ? 1 : 0.7 }}
    transition={{ type: "spring", stiffness: 300, damping: 30, delay: index * 0.08 }}
    onClick={onClick}
    className={`relative shrink-0 cursor-pointer transition-all duration-300 ${
      isActive ? "z-10" : "z-0"
    }`}
  >
    <div
      className={`w-[180px] sm:w-[200px] h-[380px] sm:h-[420px] rounded-[32px] p-[3px] relative transition-shadow duration-500 ${
        isActive
          ? "shadow-[0_20px_80px_-10px_rgba(59,130,246,0.3),0_0_40px_rgba(139,92,246,0.15)]"
          : "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]"
      }`}
      style={{
        background: isActive
          ? "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(139,92,246,0.4), rgba(20,184,166,0.4))"
          : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      }}
    >
      {/* Notch */}
      <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-full z-30" />

      {/* Screen */}
      <div className="w-full h-full bg-[#0a0e1a] rounded-[29px] overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
    </div>

    {/* Reflection */}
    {isActive && (
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-gradient-to-b from-white/[0.03] to-transparent blur-xl rounded-full" />
    )}
  </motion.div>
);

/* ─── Main Component ─── */
const ProjectDetailsContent = ({ project }) => {
  const router = useRouter();
  const theme = getTheme(project.color);
  const [activeImage, setActiveImage] = useState(0);
  const scrollRef = useRef(null);
  const hasImages = project.images && project.images.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = project.tags.filter((t) => platformIcons[t]);
  const techTags = project.tags.filter((t) => !platformIcons[t]);

  const scrollTo = (dir) => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -240 : 240;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    const next =
      dir === "left"
        ? Math.max(0, activeImage - 1)
        : Math.min(project.images.length - 1, activeImage + 1);
    setActiveImage(next);
  };

  return (
    <div className="min-h-screen bg-[#060b18] text-white">
      <div className="noise-overlay" />

      {/* ─── Floating Nav ─── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#060b18]/70 border-b border-white/[0.04]"
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-all group font-geist"
          >
            <FiArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back
          </button>

          <div className="flex items-center gap-3">
            {platforms.length > 0 && (
              <div className="hidden sm:flex items-center gap-1.5">
                {platforms.map((tag) => {
                  const Icon = platformIcons[tag];
                  return (
                    <div
                      key={tag}
                      className="flex items-center gap-1 bg-white/[0.04] rounded-full px-2.5 py-1 border border-white/[0.06]"
                    >
                      <Icon size={10} className="text-gray-400" />
                      <span className="text-[9px] text-gray-400 font-geist">
                        {tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-medium transition-all ${theme.btn} shadow-lg`}
            >
              Open
              <FiExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ─── Hero Section ─── */}
      <div className="relative pt-24 pb-4 overflow-hidden">
        {/* Background glows */}
        <div
          className={`absolute top-[-100px] right-[20%] w-[600px] h-[600px] ${theme.glow} opacity-[0.04] rounded-full blur-[150px] pointer-events-none`}
        />
        <div
          className={`absolute top-[-50px] left-[10%] w-[400px] h-[400px] ${theme.glow} opacity-[0.03] rounded-full blur-[120px] pointer-events-none`}
        />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Platform pills */}
            <div className="flex gap-2 justify-center mb-5">
              {platforms.map((tag) => {
                const Icon = platformIcons[tag];
                return (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1.5"
                  >
                    <Icon size={12} className={theme.text} />
                    <span className="text-[11px] text-gray-300 font-geist">
                      {tag}
                    </span>
                  </div>
                );
              })}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-geist mb-5 text-white leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
              {project.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3 justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all ${theme.btn} shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
              >
                <FiExternalLink size={14} />
                View Live Project
              </a>
              <button
                onClick={() => router.push("/#work")}
                className="inline-flex items-center gap-2 px-6 py-2.5 glass-card rounded-full text-white text-sm font-medium hover:bg-white/[0.06] transition-all"
              >
                All Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Phone Gallery ─── */}
      {hasImages && (
        <div className="relative py-12 overflow-hidden">
          {/* Gallery navigation */}
          {project.images.length > 2 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
              <div className="max-w-6xl mx-auto px-2 flex justify-between">
                <button
                  onClick={() => scrollTo("left")}
                  className="pointer-events-auto p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-white transition-all backdrop-blur-sm hover:scale-110"
                  aria-label="Previous screenshot"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scrollTo("right")}
                  className="pointer-events-auto p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-white transition-all backdrop-blur-sm hover:scale-110"
                  aria-label="Next screenshot"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Phone carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-8 justify-center items-center px-6 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {project.images.map((src, idx) => (
              <PhoneFrame
                key={idx}
                src={src}
                alt={`${project.title} - Screen ${idx + 1}`}
                isActive={idx === activeImage}
                onClick={() => setActiveImage(idx)}
                index={idx}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeImage
                    ? `${theme.glow} w-7 h-2`
                    : "bg-white/15 w-2 h-2 hover:bg-white/30"
                }`}
                aria-label={`View screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ─── Content Grid ─── */}
      <div className="max-w-6xl mx-auto px-6 pb-20 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* About section */}
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div
                  className={`w-1 h-5 rounded-full bg-gradient-to-b ${theme.glowFrom} ${theme.glowTo}`}
                />
                <h2 className="text-lg font-semibold text-white font-geist">
                  About This Project
                </h2>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed space-y-4 [&_h3]:text-base [&_h3]:text-white [&_h3]:font-geist [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:space-y-1.5 [&_ul]:text-gray-400 [&_li]:leading-relaxed [&_code]:text-xs [&_code]:text-blue-300 [&_code]:bg-white/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_strong]:text-gray-200 [&_strong]:font-medium [&_pre]:text-xs [&_pre]:text-gray-300 [&_pre]:overflow-x-auto">
                {project.fullDescription}
              </div>
            </div>

            {/* Tech stack visual */}
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div
                  className={`w-1 h-5 rounded-full bg-gradient-to-b ${theme.glowFrom} ${theme.glowTo}`}
                />
                <h2 className="text-lg font-semibold text-white font-geist">
                  Tech Stack
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techTags.map((tag, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className={`flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all group`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${theme.bg} flex items-center justify-center shrink-0`}
                    >
                      <span className={`text-xs font-bold ${theme.text}`}>
                        {tag.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-300 font-geist font-medium group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-5"
          >
            {/* Quick Info */}
            <div className="glass-card rounded-2xl p-5 sticky top-20 space-y-5">
              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full p-3.5 rounded-xl ${theme.btn} text-white text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
              >
                <FiExternalLink size={14} />
                View Live Project
              </a>

              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

              {/* Platforms */}
              {platforms.length > 0 && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-3">
                    Platforms
                  </div>
                  <div className="flex gap-2">
                    {platforms.map((tag) => {
                      const Icon = platformIcons[tag];
                      return (
                        <div
                          key={tag}
                          className={`flex items-center gap-2 ${theme.bg} ${theme.border} border rounded-xl px-3.5 py-2.5 flex-1 justify-center`}
                        >
                          <Icon size={14} className={theme.text} />
                          <span className="text-xs text-gray-300 font-geist font-medium">
                            {tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 text-center">
                  <div className="text-lg font-bold font-geist text-white">
                    {techTags.length}
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">
                    Technologies
                  </div>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 text-center">
                  <div className="text-lg font-bold font-geist text-white">
                    {platforms.length}
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">
                    Platforms
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div className="glass-card rounded-2xl p-5">
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-4">
                More Projects
              </div>
              <div className="space-y-2">
                {PROJECTS.filter((p) => p.id !== project.id)
                  .slice(0, 4)
                  .map((p) => {
                    const pTheme = getTheme(p.color);
                    return (
                      <Link
                        key={p.id}
                        href={`/project/${p.id}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${pTheme.bg} flex items-center justify-center shrink-0`}
                        >
                          <FiSmartphone size={12} className={pTheme.text} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-gray-300 group-hover:text-white transition-colors font-geist font-medium block truncate">
                            {p.title}
                          </span>
                          <span className="text-[10px] text-gray-600 font-geist">
                            {p.tags.slice(0, 2).join(" · ")}
                          </span>
                        </div>
                        <FiArrowUpRight
                          size={12}
                          className="text-gray-600 group-hover:text-gray-300 shrink-0 transition-colors"
                        />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
