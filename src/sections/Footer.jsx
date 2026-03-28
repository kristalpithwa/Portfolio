import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative mt-8">
      <div className="divider-gradient" />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - branding */}
          <div className="text-center sm:text-left">
            <div className="text-white font-geist font-bold text-lg tracking-tight mb-1">
              Kristal Pithwa
            </div>
            <p className="text-gray-500 text-xs">
              Front-End Developer
            </p>
          </div>

          {/* Center - social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kristalpithwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/kristal-pithwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:crystalpithwa@gmail.com"
              aria-label="Email"
              className="text-gray-500 hover:text-purple-400 transition-colors duration-200"
            >
              <FiMail size={16} />
            </a>
          </div>

          {/* Right - copyright */}
          <div className="text-center sm:text-right">
            <p className="text-gray-600 text-xs flex items-center gap-1 justify-center sm:justify-end">
              Made with <FiHeart size={10} className="text-red-400" /> &copy; {new Date().getFullYear()} Kristal Pithwa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
