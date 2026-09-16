"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiCheck,
  FiShield,
  FiLock,
  FiGlobe,
  FiZap,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { availablePlatformsSection } from "@/data/portfolioData";

const defaultTrustIcons = [FiShield, FiLock, FiGlobe, FiZap];

const AvailableOn: React.FC = () => {
  const {
    sectionTag,
    subtitleTag,
    title,
    highlight,
    description,
    liveStatusText,
    responseTime,
    platforms,
    trustSignals,
  } = availablePlatformsSection;

  return (
    <>
      <div className="section-divider">
        <span>{sectionTag}</span>
      </div>

      <section className="mb-20" aria-label="Hiring Platforms and Availability">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            {subtitleTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {description}
          </p>

          {/* Live Availability Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-white/[0.08] shadow-inner backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {liveStatusText}
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
              <FiClock size={13} />
              <span>{responseTime}</span>
            </div>
          </motion.div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`group glass-card rounded-3xl p-6 sm:p-7 border border-white/[0.08] ${platform.borderColor} flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}
              >
                {/* Ambient dynamic background gradient glow */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${platform.glowColor} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Card Header: Logo, Name, Tier Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 border border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300"
                        style={{
                          background: `radial-gradient(circle, ${platform.accentColor}25 0%, rgba(15,23,42,0.8) 100%)`,
                          borderColor: `${platform.accentColor}40`,
                        }}
                      >
                        <Icon
                          size={26}
                          style={{ color: platform.accentColor }}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-lg font-bold text-white tracking-tight">
                            {platform.name}
                          </h3>
                          {platform.verified && (
                            <span
                              title="Verified Talent Profile"
                              className="text-cyan-400"
                            >
                              <FiCheckCircle size={15} />
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium">
                          {platform.tagline}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${platform.badgeBg} ${platform.badgeBorder} ${platform.badgeText} whitespace-nowrap shadow-sm`}
                    >
                      {platform.ratingOrStatus}
                    </div>
                  </div>

                  {/* Rating Subtitle / Role Badge */}
                  <div className="mb-4 pb-4 border-b border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">
                      {platform.roleBadge}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {platform.ratingSubtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {platform.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 mb-6">
                    {platform.highlights.map((highlightItem) => (
                      <div
                        key={highlightItem}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <div
                          className="mt-0.5 p-0.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: `${platform.accentColor}20`,
                            color: platform.accentColor,
                          }}
                        >
                          <FiCheck size={11} />
                        </div>
                        <span className="leading-tight">{highlightItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contract Types Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {platform.contractTypes.map((type) => (
                      <span
                        key={type}
                        className="text-[10px] font-medium text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-md px-2 py-0.5"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r ${platform.buttonGradient} shadow-md ${platform.buttonShadow} transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400`}
                    aria-label={`Hire Kristal Pithwa or view profile on ${platform.name}`}
                  >
                    <span>Hire on {platform.name}</span>
                    <FiExternalLink
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Trust & Assurance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.06] bg-slate-950/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustSignals.map((signal, idx) => {
              const SignalIcon =
                signal.icon || defaultTrustIcons[idx % defaultTrustIcons.length];
              return (
                <div key={signal.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <SignalIcon size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight mb-0.5">
                      {signal.label}
                    </h4>
                    {signal.description && (
                      <p className="text-[11px] text-slate-400 leading-snug font-normal">
                        {signal.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AvailableOn;
