import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";

const contactLinks = [
  {
    href: "mailto:crystalpithwa@gmail.com",
    icon: FiMail,
    label: "Email",
    value: "crystalpithwa@gmail.com",
    accent: "group-hover:text-purple-400",
    glow: "group-hover:bg-purple-500/10",
  },
  {
    href: "https://www.linkedin.com/in/kristal-pithwa-a62861a4",
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "kristal-pithwa",
    accent: "group-hover:text-blue-400",
    glow: "group-hover:bg-blue-500/10",
    external: true,
  },
  {
    href: "https://github.com/kristalpithwa",
    icon: FiGithub,
    label: "GitHub",
    value: "kristalpithwa",
    accent: "group-hover:text-white",
    glow: "group-hover:bg-white/[0.06]",
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  return (
    <>
      <div className="section-divider">
        <span>Get In Touch</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        {/* Heading */}
        <div className="mb-3 text-[11px] text-gray-500 uppercase tracking-[0.15em] font-geist">
          Let's work together
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter font-geist text-white mb-4">
          Build Something{" "}
          <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Amazing
          </span>
        </h2>

        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
          Need a mobile app for iOS or Android? I'm always open to
          discussing new projects, collaborations, or creative app ideas.
        </p>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto"
        >
          {contactLinks.map(({ href, icon: Icon, label, value, accent, glow, external }) => (
            <motion.a
              key={label}
              variants={itemVariants}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group glass-card glass-card-glow glass-card-lift rounded-2xl px-5 py-4 flex items-center gap-4 text-left transition-all duration-300"
            >
              <div className={`p-2.5 rounded-xl bg-white/[0.04] text-gray-500 transition-all duration-200 ${accent} ${glow}`}>
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-geist">{label}</div>
                <div className={`text-sm font-medium text-gray-300 transition-colors duration-200 truncate ${accent}`}>
                  {value}
                </div>
              </div>
              <FiArrowUpRight className={`text-gray-600 shrink-0 transition-all duration-200 ${accent} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} size={14} />
            </motion.a>
          ))}
        </motion.div>

        {/* Availability card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass-card rounded-2xl p-5 max-w-xs mx-auto"
        >
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 font-semibold text-sm font-geist">
              Currently Available
            </span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            Open to new projects and consulting.
            <br />Response time: within 24 hours.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
