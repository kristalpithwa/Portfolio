"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import HeroBackground from "@/components/common/HeroBackground";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiSmartphone,
} from "react-icons/fi";
import { SiApple, SiAndroid } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/kristalpithwa",
    icon: FiGithub,
    label: "GitHub",
    hover: "hover:text-white",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/kristal-pithwa",
    icon: FiLinkedin,
    label: "LinkedIn",
    hover: "hover:text-blue-400",
    target: "_blank",
  },
  {
    href: "mailto:crystalpithwa@gmail.com",
    icon: FiMail,
    label: "Email",
    hover: "hover:text-purple-400",
  },
];

const PhoneMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    <div style={{ perspective: "1200px" }}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transform: "rotateY(-8deg) rotateX(4deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-[200px] h-[420px] bg-gradient-to-b from-[#1a1a2e] to-[#16162a] rounded-[40px] p-[5px] shadow-[0_30px_80px_-20px_rgba(59,130,246,0.2),0_0_40px_rgba(139,92,246,0.08)] border border-white/[0.06] relative">
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[72px] h-[18px] bg-black rounded-full z-20" />
          <div className="w-full h-full bg-[#0a0e1a] rounded-[35px] overflow-hidden relative">
            <div className="flex justify-between items-center px-5 pt-7 pb-1.5">
              <span className="text-[7px] text-white/40 font-geist font-semibold">
                9:41
              </span>
              <div className="flex items-center gap-1">
                <div className="flex gap-[1px] items-end">
                  <div className="w-[2px] h-[3px] bg-white/20 rounded-full" />
                  <div className="w-[2px] h-[5px] bg-white/25 rounded-full" />
                  <div className="w-[2px] h-[7px] bg-white/30 rounded-full" />
                  <div className="w-[2px] h-[8px] bg-white/40 rounded-full" />
                </div>
                <div className="ml-1.5 w-5 h-[9px] border border-white/15 rounded-[2px] p-[1px]">
                  <div className="h-full w-3/4 bg-emerald-400/50 rounded-[1px]" />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="px-4 pt-2 pb-3"
            >
              <div className="text-[8px] text-white/30 font-geist">
                Good morning
              </div>
              <div className="text-[11px] text-white/80 font-geist font-semibold">
                Dashboard
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="mx-3 h-6 bg-white/[0.04] rounded-lg border border-white/[0.04] flex items-center px-2.5 mb-3"
            >
              <div className="w-2 h-2 rounded-full border border-white/15" />
              <div className="ml-1.5 w-10 h-[3px] bg-white/8 rounded" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex gap-2 px-3 mb-3"
            >
              <div className="flex-1 bg-gradient-to-br from-blue-500/12 to-blue-600/5 rounded-xl p-2 border border-blue-500/8">
                <div className="w-4 h-4 rounded-lg bg-blue-400/15 mb-1.5 flex items-center justify-center">
                  <div className="w-2 h-1.5 border border-blue-400/40 rounded-[1px]" />
                </div>
                <div className="w-5 h-[5px] bg-white/15 rounded mb-0.5" />
                <div className="w-8 h-[3px] bg-white/6 rounded" />
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-500/12 to-purple-600/5 rounded-xl p-2 border border-purple-500/8">
                <div className="w-4 h-4 rounded-lg bg-purple-400/15 mb-1.5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full border border-purple-400/40" />
                </div>
                <div className="w-6 h-[5px] bg-white/15 rounded mb-0.5" />
                <div className="w-9 h-[3px] bg-white/6 rounded" />
              </div>
            </motion.div>

            {[1.6, 1.8, 2.0].map((delay, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay }}
                className="mx-3 mb-2 bg-white/[0.025] rounded-xl p-2 border border-white/[0.03] flex items-center gap-2"
              >
                <div
                  className={`w-7 h-7 rounded-lg bg-gradient-to-br ${
                    [
                      "from-teal-400/20 to-teal-600/10",
                      "from-amber-400/20 to-amber-600/10",
                      "from-rose-400/20 to-rose-600/10",
                    ][i]
                  }`}
                />
                <div className="flex-1">
                  <div
                    className={`h-[4px] bg-white/12 rounded mb-1 ${["w-14", "w-12", "w-10"][i]}`}
                  />
                  <div
                    className={`h-[3px] bg-white/5 rounded ${["w-20", "w-16", "w-18"][i]}`}
                  />
                </div>
                <div className="w-6 h-2.5 bg-white/[0.04] rounded-full" />
              </motion.div>
            ))}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 2.4,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="absolute bottom-14 right-3.5 w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <div className="w-3 h-[1.5px] bg-white/90" />
              <div className="w-[1.5px] h-3 bg-white/90 absolute" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-11 bg-[#0a0e1a]/80 backdrop-blur border-t border-white/[0.03] flex items-center justify-around px-6">
              {["bg-blue-400/30", "bg-white/8", "bg-white/8", "bg-white/8"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 ${i === 0 ? "rounded-lg" : i === 3 ? "rounded-full" : "rounded-md"} ${c}`}
                  />
                ),
              )}
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-white/12 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0], y: [6, 0, 0, 0, -8] }}
      transition={{ delay: 3, duration: 3, repeat: Infinity, repeatDelay: 6 }}
      className="absolute -top-2 -left-14 glass-card rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 pointer-events-none border border-white/[0.06]"
    >
      <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <FiSmartphone size={8} className="text-white/80" />
      </div>
      <div>
        <div className="w-10 h-[3px] bg-white/20 rounded mb-[3px]" />
        <div className="w-6 h-[2px] bg-white/8 rounded" />
      </div>
    </motion.div>

    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1, 1, 0] }}
      transition={{
        delay: 4.5,
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 7,
      }}
      className="absolute top-5 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 pointer-events-none"
    >
      <span className="text-[6px] text-white font-bold font-geist">3</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="flex justify-center gap-2 mt-5"
    >
      <div className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1">
        <SiApple size={10} className="text-gray-400" />
        <span className="text-[10px] text-gray-400 font-geist">iOS</span>
      </div>
      <div className="flex items-center gap-1.5 glass-card rounded-full px-3 py-1">
        <SiAndroid size={10} className="text-gray-400" />
        <span className="text-[10px] text-gray-400 font-geist">Android</span>
      </div>
    </motion.div>

    <div className="absolute inset-0 -z-10 blur-[60px] opacity-15 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400 rounded-full scale-125" />
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative py-14">
      <HeroBackground />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{ y: [0, -16, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] right-[12%] w-1.5 h-1.5 bg-teal-400 rounded-full pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.15, 0.5, 0.15] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[28%] left-[7%] w-2 h-2 bg-purple-400 rounded-full blur-[0.5px] pointer-events-none hidden lg:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] text-gray-400 tracking-wide font-geist">
                  Open to work
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="font-geist tracking-tighter leading-[0.92] mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-1"
              >
                Kristal
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-shimmer"
              >
                Pithwa.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2.5 mb-5"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/50 hidden sm:block" />
              <div className="text-base sm:text-lg text-gray-300 font-geist font-medium">
                <AnimatedText text="Mobile App Developer" delay={0.5} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/50 hidden sm:block" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-gray-400 text-sm leading-relaxed mb-7 max-w-md mx-auto lg:mx-0"
            >
              <span className="inline-flex items-center gap-1">
                Hey!
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="React Native ecommerce app with Firebase"
                  src="/images/waving.png"
                  className="w-4 h-4 animate-wave"
                />
              </span>{" "}
              I build native {"&"} cross-platform mobile apps for iOS {"&"}{" "}
              Android. Specialized in React Native with a focus on smooth
              animations and pixel-perfect UI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-7"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-all group"
              >
                View My Work
                <FiArrowRight
                  className="group-hover:translate-x-0.5 transition-transform"
                  size={14}
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-white text-sm font-medium hover:bg-white/[0.06] transition-all"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="flex gap-2 justify-center lg:justify-start"
            >
              {socialLinks.map(({ href, icon: Icon, label, hover, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`p-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] text-gray-500 transition-all glass-card-lift ${hover}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="shrink-0 hidden md:block">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
