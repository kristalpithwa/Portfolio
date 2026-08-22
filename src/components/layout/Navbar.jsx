"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const googleDriveLink =
    "https://drive.google.com/drive/folders/1rxuh2kagfGl66vjF0Hf6KVZ0Dv5NeaI5?usp=drive_link";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#060b18]/80 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-white font-geist font-bold text-xl tracking-tight hover:opacity-80 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 rounded"
          aria-label="Kristal Pithwa - Portfolio Home"
        >
          K<span className="text-blue-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200 font-geist focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
              aria-label={`Navigate to ${label} section`}
            >
              {label}
            </a>
          ))}
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors font-geist focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
            aria-label="Download Kristal Pithwa's React Native resume"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 rounded"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden backdrop-blur-2xl bg-[#060b18]/95 border-t border-white/[0.04] px-6 py-4 space-y-1"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all font-geist"
            >
              {label}
            </a>
          ))}
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-blue-400 font-geist"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
