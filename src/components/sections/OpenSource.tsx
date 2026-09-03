"use client";

import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { FiExternalLink } from "react-icons/fi";
import { openSourceSection } from "@/data/portfolioData";

const OpenSource: React.FC = () => {
  const {
    sectionTag,
    subtitleTag,
    title,
    description,
    githubUsername,
    githubProfileUrl,
  } = openSourceSection;

  return (
    <>
      <div className="section-divider">
        <span>{sectionTag}</span>
      </div>

      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            {subtitleTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 border border-white/[0.08] overflow-x-auto"
        >
          <div className="w-full flex justify-center py-2 text-slate-200">
            <GitHubCalendar
              blockMargin={7}
              blockSize={13}
              username={githubUsername}
              colorScheme="dark"
              fontSize={12}
            />
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] w-full flex items-center justify-between text-xs text-slate-400">
            <span>Profile: @{githubUsername}</span>
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              <span>View GitHub Profile</span>
              <FiExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OpenSource;
