import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const OpenSource = () => {
  return (
    <>
      <div className="section-divider">
        <span className="border-white/10 border rounded-full">
          OpenSource Contribution
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card flex refraction-effect items-center justify-center rounded-3xl p-6 md:p-8 mb-24"
      >
        <GitHubCalendar blockMargin={8} username="kristalpithwa" />
      </motion.div>
    </>
  );
};

export default OpenSource;
