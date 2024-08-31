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
    <header className="h-20 bg-white shadow-md shadow-slate-300 px-2  py-6">
      <div className="mx-auto  flex justify-between items-center lg:px-4">
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

{
  /* Modal */
}

{
  /* <AnimatePresence>
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
                <div
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
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
                {headerList.map((item) => (
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
      </AnimatePresence> */
}
