"use client";

import React from "react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-12 pb-12">
      <div className="divider-gradient mb-8" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-white font-sans font-bold text-lg tracking-tight mb-1 flex items-center justify-center sm:justify-start gap-2">
              <span>{personalInfo.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-slate-400 text-xs">
              {personalInfo.role}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label, hover, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                aria-label={`${personalInfo.name} on ${label}`}
                className={`p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 ${hover}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="text-center sm:text-right">
            <p className="text-slate-400 text-xs flex items-center gap-1 justify-center sm:justify-end">
              Built with precision & Next.js &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
