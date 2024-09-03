import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ scrollToSection, headerList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Close the menu on mobile after clicking
  };

  return (
    <header className="sticky top-0 z-50 h-20 bg-white shadow-md shadow-slate-300 px-2 py-6">
      <div className="mx-auto flex justify-between items-center lg:px-4">
        <p className="text-2xl lg:text-2xl font-bold cursor-pointer text-center w-full lg:w-auto">
          Kristal.dev
        </p>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 items-center justify-center w-full lg:w-auto">
          {headerList.map((item) => (
            <motion.div
              key={item}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleItemClick(item)}
            >
              <p className="text-xl font-bold text-center">{item}</p>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            className="lg:hidden flex flex-col space-y-4 p-4 items-center"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {headerList.map((item) => (
              <motion.div
                key={item}
                className="cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleItemClick(item)}
              >
                <p className="text-xl font-bold text-center">{item}</p>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
