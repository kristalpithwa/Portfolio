"use client";

import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-12 pb-12">
      <div className="divider-gradient mb-8" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-white font-sans font-bold text-lg tracking-tight mb-1 flex items-center justify-center sm:justify-start gap-2">
              <span>Kristal Pithwa</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-slate-400 text-xs">
              Senior Mobile Developer & React Native Specialist
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kristalpithwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kristal Pithwa on GitHub"
              className="p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kristal-pithwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kristal Pithwa on LinkedIn"
              className="p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-cyan-400 hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:crystalpithwa@gmail.com"
              aria-label="Email Kristal Pithwa"
              className="p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-purple-400 hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FiMail size={18} />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-slate-400 text-xs flex items-center gap-1 justify-center sm:justify-end">
              Built with precision & Next.js &copy; {new Date().getFullYear()} Kristal Pithwa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
