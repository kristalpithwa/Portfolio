"use client";

import React, { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import HeroBackground from "@/components/common/HeroBackground";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiPlay,
  FiActivity,
  FiAward,
} from "react-icons/fi";
import { SiApple, SiAndroid, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolioData";

const PhoneMockup: React.FC = () => {
  const { mockup } = personalInfo.hero;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div style={{ perspective: "1200px" }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: "rotateY(-6deg) rotateX(3deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Phone Frame */}
          <div className="w-[230px] h-[460px] bg-gradient-to-b from-[#1c2237] via-[#11172a] to-[#0d1222] rounded-[44px] p-[6px] shadow-[0_25px_70px_-15px_rgba(56,189,248,0.25),0_0_50px_rgba(139,92,246,0.12)] border border-white/[0.12] relative">
            {/* Dynamic Island */}
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[20px] bg-black rounded-full z-30 flex items-center justify-between px-2.5 shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-[#101426] border border-blue-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
            </div>

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0a0f1d] rounded-[38px] overflow-hidden relative flex flex-col justify-between pt-9 pb-3 px-3.5">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-1 mb-2">
                <span className="text-[9px] text-slate-400 font-mono font-medium">
                  9:41
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-[1.5px] items-end">
                    <div className="w-[2px] h-[3px] bg-slate-300 rounded-full" />
                    <div className="w-[2px] h-[5px] bg-slate-300 rounded-full" />
                    <div className="w-[2px] h-[7px] bg-slate-300 rounded-full" />
                    <div className="w-[2px] h-[9px] bg-slate-300 rounded-full" />
                  </div>
                  <span className="text-[8px] text-cyan-400 font-mono font-bold">
                    5G
                  </span>
                  <div className="w-4 h-[9px] border border-slate-400/60 rounded-[2px] p-[1px] flex items-center">
                    <div className="h-full w-4/5 bg-emerald-400 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* App Header */}
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-2.5 mb-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-cyan-500/20">
                    {personalInfo.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-white tracking-tight truncate">
                      {mockup.ownerName}
                    </div>
                    <div className="text-[9px] text-cyan-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      {mockup.ownerRole}
                    </div>
                  </div>
                </div>

                {/* Live Metric Pills */}
                <div className="grid grid-cols-2 gap-1.5 mt-2">
                  <div className="bg-black/40 rounded-lg p-1.5 border border-white/[0.04]">
                    <div className="text-[8px] text-slate-400">{mockup.statLeft.label}</div>
                    <div className="text-xs font-bold text-white">
                      {mockup.statLeft.value}
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-1.5 border border-white/[0.04]">
                    <div className="text-[8px] text-slate-400">{mockup.statRight.label}</div>
                    <div className="text-xs font-bold text-emerald-400">
                      {mockup.statRight.value}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Interactive Feature Card */}
              <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-2.5 mb-2.5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-500/30 text-cyan-300">
                      <SiReact size={11} />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-200">
                      {mockup.featuredAppTitle}
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {mockup.featuredAppBadge}
                  </span>
                </div>

                {/* Music waveform visualizer */}
                <div className="flex items-center justify-between gap-1 h-6 px-1 my-1.5 bg-black/30 rounded-lg">
                  {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 85].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.08,
                          ease: "easeInOut",
                        }}
                        className="w-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full"
                      />
                    ),
                  )}
                </div>

                <div className="flex items-center justify-between text-[9px] text-slate-300 mt-1">
                  <span className="truncate">{mockup.featuredAppSubtitle}</span>
                  <FiPlay size={10} className="text-cyan-400 shrink-0" />
                </div>
              </div>

              {/* Performance Bar */}
              <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-2 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <FiActivity className="text-cyan-400" size={12} />
                  <span className="text-[9px] text-slate-300 font-medium">
                    {mockup.performanceLabel}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-cyan-300 font-semibold">
                  {mockup.performanceValue}
                </span>
              </div>

              {/* Bottom Nav Mockup */}
              <div className="bg-[#0e1424] border border-white/[0.08] rounded-2xl h-10 flex items-center justify-around px-3 shadow-lg">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 text-[10px]">
                  <SiApple size={11} />
                </div>
                <div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 text-[10px]">
                  <SiAndroid size={11} />
                </div>
                <div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 text-[10px]">
                  <SiReact size={11} />
                </div>
              </div>

              {/* Home indicator */}
              <div className="w-16 h-[3px] bg-slate-500/50 rounded-full mx-auto mt-1" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -top-3 -left-10 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 border border-cyan-500/30 shadow-xl backdrop-blur-md"
      >
        <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
          <FiAward size={13} />
        </div>
        <div>
          <div className="text-[11px] font-bold text-white tracking-tight">
            {mockup.badgeTop.value}
          </div>
          <div className="text-[9px] text-cyan-300 font-medium">
            {mockup.badgeTop.label}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -bottom-2 -right-6 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 border border-purple-500/30 shadow-xl backdrop-blur-md"
      >
        <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
          <SiApple size={13} />
        </div>
        <div>
          <div className="text-[11px] font-bold text-white tracking-tight">
            {mockup.badgeBottom.value}
          </div>
          <div className="text-[9px] text-purple-300 font-medium">
            {mockup.badgeBottom.label}
          </div>
        </div>
      </motion.div>

      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 blur-[70px] opacity-25 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-full scale-125 pointer-events-none" />
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { hero } = personalInfo;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative py-12 md:py-20">
      <HeroBackground />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.08) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2.5 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4 py-1.5 shadow-sm shadow-cyan-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-cyan-300 tracking-wide">
                  {personalInfo.statusBadge}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-sans tracking-tight leading-[1.05] mb-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
              >
                {hero.headlinePrefix}
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {hero.headlineSuffix}
              </motion.span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-cyan-400 hidden sm:block" />
              <div className="text-lg sm:text-xl text-slate-200 font-semibold tracking-tight">
                <AnimatedText
                  text={hero.subheadline}
                  delay={0.4}
                />
              </div>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-cyan-400 hidden sm:block" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal"
            >
              <span className="inline-flex items-center gap-1 font-semibold text-white">
                Hi there!
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Waving hand"
                  src="/images/waving.png"
                  className="w-4 h-4 animate-wave inline-block"
                />
              </span>{" "}
              {hero.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex flex-wrap gap-3.5 justify-center lg:justify-start mb-8 items-center"
            >
              <a
                href={hero.primaryCtaLink}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all group focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>{hero.primaryCtaText}</span>
                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={15}
                />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 glass-card rounded-full text-slate-200 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all border border-white/[0.1] focus-visible:ring-2 focus-visible:ring-cyan-400 relative"
                aria-label={`Copy ${personalInfo.name}'s email address`}
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-400" size={15} />
                    <span className="text-emerald-300 font-semibold">
                      Email Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <FiCopy className="text-slate-400" size={15} />
                    <span>{hero.secondaryCtaText}</span>
                  </>
                )}
              </button>

              <a
                href={hero.contactCtaLink}
                className="inline-flex items-center gap-2 px-5 py-3 text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                {hero.contactCtaText}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs text-slate-400 font-medium mr-1">
                Find me on:
              </span>
              {socialLinks.map(({ href, icon: Icon, label, hover, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all hover:scale-105 ${hover}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Phone Mockup */}
          <div className="shrink-0 hidden md:block">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
