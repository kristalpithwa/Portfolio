/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/pb.png"

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Close the menu on mobile after clicking
  };

  return (
    <header className="bg-[#0F1724] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-6">
        <motion.h1
          className="text-2xl lg:text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("landing")}
        >
          <img src={logoImage} alt="logo" width={44} height={44} />

        </motion.h1>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className={`w-8 h-8 ${isOpen ? "text-gray-300" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </div>
        <nav className="hidden lg:flex space-x-8">
          {["skills", "services", "experience", "projects", "contact"].map((item) => (
            <motion.div
              key={item}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.div>
          ))}
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 left-0 h-screen w-full bg-[#0F1724] z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <h1
                  className="text-2xl lg:text-3xl font-bold cursor-pointer"
                  onClick={() => {
                    handleItemClick("landing");
                    setIsOpen(false);
                  }}
                >
                  <img src={logoImage} alt="logo" width={44} height={44} />
                </h1>
                <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <nav className="flex flex-col space-y-4">
                {["skills", "services", "experience", "projects", "contact"].map((item) => (
                  <motion.div
                    key={item}
                    className="cursor-pointer text-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
