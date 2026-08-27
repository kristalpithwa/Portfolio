"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiClock,
  FiSend,
} from "react-icons/fi";
import { IconType } from "react-icons";

interface ContactOption {
  href: string;
  icon: IconType;
  label: string;
  value: string;
  badge: string;
  accent: string;
  border: string;
  external?: boolean;
}

const contactOptions: ContactOption[] = [
  {
    href: "mailto:crystalpithwa@gmail.com",
    icon: FiMail,
    label: "Direct Email",
    value: "crystalpithwa@gmail.com",
    badge: "Fastest response",
    accent: "group-hover:text-cyan-400",
    border: "hover:border-cyan-500/40",
  },
  {
    href: "https://www.linkedin.com/in/kristal-pithwa",
    icon: FiLinkedin,
    label: "LinkedIn Profile",
    value: "kristal-pithwa",
    badge: "Connect & Chat",
    accent: "group-hover:text-blue-400",
    border: "hover:border-blue-500/40",
    external: true,
  },
  {
    href: "https://github.com/kristalpithwa",
    icon: FiGithub,
    label: "GitHub Repositories",
    value: "kristalpithwa",
    badge: "Open Source & Code",
    accent: "group-hover:text-purple-400",
    border: "hover:border-purple-500/40",
    external: true,
  },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("crystalpithwa@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <div className="section-divider">
        <span>Let&apos;s Connect</span>
      </div>

      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Start a Conversation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have a Mobile App Idea?{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Build It.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Whether you need a brand-new React Native app from scratch,
            performance optimization for an existing codebase, or an
            experienced developer for your team — I&apos;m here to help.
          </p>

          {/* Quick Copy Email Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="mailto:crystalpithwa@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FiSend size={15} />
              <span>Send Me an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 glass-card rounded-full text-slate-200 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all border border-white/[0.1] focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Copy Kristal's email address"
            >
              {copied ? (
                <>
                  <FiCheck className="text-emerald-400" size={15} />
                  <span className="text-emerald-300 font-semibold">
                    Email Copied to Clipboard!
                  </span>
                </>
              ) : (
                <>
                  <FiCopy className="text-slate-400" size={15} />
                  <span>Copy crystalpithwa@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactOptions.map(
              ({
                href,
                icon: Icon,
                label,
                value,
                badge,
                accent,
                border,
                external,
              }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`group glass-card rounded-2xl p-5 text-left border border-white/[0.06] ${border} transition-all duration-300 flex flex-col justify-between hover:shadow-lg`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] text-slate-300 group-hover:text-cyan-400 transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.05]">
                        {badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium mb-1">
                      {label}
                    </div>
                    <div
                      className={`text-sm font-bold text-white tracking-tight ${accent} transition-colors truncate`}
                    >
                      {value}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform">
                    <span>Connect</span>
                    <FiArrowUpRight size={14} />
                  </div>
                </a>
              ),
            )}
          </div>

          {/* Availability Footer Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5">
            <FiClock size={14} className="text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-300">
              Current Status: Open to Opportunities • Replies within 24 Hours
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
