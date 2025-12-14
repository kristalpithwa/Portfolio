import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Mouse Spotlight */}
      <div
        className="fixed inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: 0.1,
            scale: Math.random() * 0.5 + 0.5,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [0.5, 1, 0.5],
            y: [null, Math.random() * -100], // Float up
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
