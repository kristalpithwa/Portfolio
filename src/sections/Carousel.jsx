import React, { useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 flex h-full w-full items-center justify-center"
        initial={false}
        animate={{ x: -currentIndex * 100 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <button onClick={handlePrev} className="btn btn-primary">
          Prev
        </button>
        <button onClick={handleNext} className="btn btn-primary ml-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
