"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiStar,
  FiCalendar,
  FiUser,
  FiExternalLink,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { clientFeedbackSection } from "@/data/portfolioData";

const ClientFeedback: React.FC = () => {
  const {
    sectionTag,
    subtitleTag,
    title,
    highlight,
    description,
    totalScore,
    totalReviews,
    jobSuccessScore,
    upworkProfileUrl,
    feedbacks,
  } = clientFeedbackSection;

  return (
    <>
      <div className="section-divider">
        <span>{sectionTag}</span>
      </div>

      <section className="mb-20" aria-label="Client Feedback and Reviews">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            {subtitleTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {title}{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {description}
          </p>

          {/* Social Proof & Rating Overview Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/80 border border-emerald-500/20 shadow-inner backdrop-blur-md"
          >
            {/* 5.0 Star Rating */}
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white ml-0.5">{totalScore}</span>
              <span className="text-slate-400 font-normal">({totalReviews})</span>
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* Upwork Job Success */}
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <SiUpwork size={14} className="text-emerald-400" />
              <span>{jobSuccessScore}</span>
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* Top Rated Badge */}
            <div className="flex items-center gap-1 text-xs text-cyan-300 font-medium">
              <FiAward size={13} />
              <span>Top Rated Mobile Specialist</span>
            </div>
          </motion.div>
        </div>

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {feedbacks.map((item, index) => {
            const fullStars = Math.floor(item.rating);
            const isPartial = item.rating % 1 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-emerald-500/30 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                {/* Subtle Ambient Brand Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Card Header: Project Title + Upwork Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {item.projectTitle}
                    </h3>
                    <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full shrink-0">
                      <SiUpwork size={12} className="text-emerald-400" />
                      <span className="text-[10px] font-semibold text-emerald-300">
                        Upwork Verified
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row: Date & Star Rating */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06] text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <FiCalendar size={13} className="text-slate-400" />
                      <span>{item.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            size={13}
                            className={
                              i < fullStars || (i === fullStars && isPartial)
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-600"
                            }
                          />
                        ))}
                      </div>
                      <span className="font-bold text-amber-300 text-xs">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative mb-6">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-normal">
                      &ldquo;{item.feedback}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Card Footer: Client Info & Skill Tags */}
                <div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-slate-300 bg-white/[0.03] border border-white/[0.06] rounded-md px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-colors">
                        <FiUser size={15} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          <span>{item.clientName}</span>
                          <FiCheckCircle size={12} className="text-emerald-400" title="Verified Client" />
                        </div>
                        <span className="text-[10px] text-slate-400">Upwork Client</span>
                      </div>
                    </div>

                    <a
                      href={upworkProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      aria-label="Verify review on Upwork profile"
                    >
                      <span>Verify</span>
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Upwork Reviews Action */}
        <div className="text-center">
          <a
            href={upworkProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="View all verified client reviews on Upwork"
          >
            <SiUpwork size={16} />
            <span>View All Client Reviews on Upwork</span>
            <FiExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
};

export default ClientFeedback;
