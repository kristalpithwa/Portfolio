"use client";

import { motion } from "framer-motion";
import { SiApple, SiAndroid, SiReact } from "react-icons/si";
import Image from "next/image";

const skills = [
  {
    label: "iOS & Android",
    color: "bg-blue-500/10 text-blue-300 border-blue-500/15",
  },
  {
    label: "Cross-platform",
    color: "bg-teal-500/10 text-teal-300 border-teal-500/15",
  },
  {
    label: "App Performance",
    color: "bg-purple-500/10 text-purple-300 border-purple-500/15",
  },
  {
    label: "UI/UX Design",
    color: "bg-pink-500/10 text-pink-300 border-pink-500/15",
  },
  {
    label: "OTA Updates",
    color: "bg-amber-500/10 text-amber-300 border-amber-500/15",
  },
];

const platforms = [
  { icon: SiApple, name: "iOS", color: "text-gray-300" },
  { icon: SiAndroid, name: "Android", color: "text-green-400" },
  { icon: SiReact, name: "React Native", color: "text-cyan-400" },
];

const cardBase = "glass-card rounded-2xl";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutMe = () => {
  return (
    <>
      <div className="section-divider">
        <span>About Me</span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-16"
      >
        <motion.div
          variants={item}
          className={`${cardBase} p-5 flex items-center justify-center md:row-span-2`}
        >
          <div className="relative">
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500">
              <Image
                alt="Kristal Pithwa"
                src="/kristal.jpg"
                width={220}
                height={220}
                style={{ width: "auto", height: "auto" }}
                className="w-40 h-40 sm:w-44 sm:h-44 md:w-full md:h-auto md:max-w-[220px] object-cover rounded-[14px] block"
              />
            </div>
            <div className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-20 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500" />
          </div>
        </motion.div>

        <motion.div variants={item} className={`${cardBase} p-6 md:col-span-2`}>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-1">
            Who I Am
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight font-geist mb-3">
            Mobile App Developer
          </h3>
          <div className="divider-gradient mb-4" />
          <p className="text-gray-400 leading-relaxed text-sm mb-5">
            5+ years building production mobile applications for iOS and
            Android. I specialize in React Native to deliver cross-platform apps
            with native performance, smooth 60fps animations, and pixel-perfect
            UI — from concept to App Store {"&"} Google Play.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map(({ label, color }) => (
              <span
                key={label}
                className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className={`${cardBase} p-5 flex flex-col items-center justify-center text-center`}
        >
          <div className="text-2xl font-bold font-geist text-white tracking-tighter">
            5+
          </div>
          <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">
            Years Experience
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className={`${cardBase} p-5 flex flex-col items-center justify-center text-center`}
        >
          <div className="text-2xl font-bold font-geist text-white tracking-tighter">
            20+
          </div>
          <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">
            Apps Delivered
          </div>
        </motion.div>

        {/* <motion.div variants={item} className={`${cardBase} p-5 md:col-span-1`}>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist mb-3">
            Platforms
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
            {platforms.map(({ icon: Icon, name, color }) => (
              <div key={name} className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center">
                  <Icon size={16} className={color} />
                </div>
                <span className="text-[9px] text-gray-500 font-geist">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div> */}

        <motion.div variants={item} className={`${cardBase} p-5 md:col-span-3`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-geist">
              Mobile Expertise
            </span>
            <span className="text-xs text-gray-400 font-geist font-medium">
              95%
            </span>
          </div>
          <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMe;
