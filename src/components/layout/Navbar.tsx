"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiFileText, FiExternalLink } from "react-icons/fi";

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavLinkItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Tech", href: "#tech", id: "tech" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const googleDriveLink =
    "https://drive.google.com/drive/folders/19cMUgW-c2jWw7XNj3_33FYw7Q4_Q-aH9?usp=drive_link";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 200;
      for (const link of [...navLinks].reverse()) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(link.id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#060b18]/85 border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 text-white font-sans font-bold text-xl tracking-tight focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 px-1.5 transition-transform hover:scale-105"
          aria-label="Kristal Pithwa - Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20">
            K
          </div>
          <span className="text-slate-100 font-semibold tracking-tight group-hover:text-cyan-400 transition-colors">
            Kristal<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 backdrop-blur-md">
          {navLinks.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/15 border border-cyan-500/25 shadow-sm shadow-cyan-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                }`}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Download Kristal Pithwa's React Native resume"
          >
            <FiFileText size={14} />
            <span>Resume</span>
            <FiExternalLink size={12} className="opacity-70" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2.5 text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden backdrop-blur-2xl bg-[#060b18]/95 border-b border-white/[0.08] px-6 py-4 space-y-2 shadow-2xl"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ label, href, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm rounded-xl transition-all ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <a
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 mt-2"
            >
              <FiFileText size={16} />
              <span>Download Resume</span>
              <FiExternalLink size={14} className="opacity-80" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
