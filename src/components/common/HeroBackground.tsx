"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STAR_COUNT = 20;

interface Star {
  scale: number;
  x: number;
  y: number;
  yOffset: number;
  duration: number;
  delay: number;
  w: number;
  h: number;
}

function generateStars(width: number, height: number): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    scale: Math.random() * 0.5 + 0.5,
    x: Math.random() * width,
    y: Math.random() * height,
    yOffset: Math.random() * -100,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2,
    w: Math.random() * 3 + 1,
    h: Math.random() * 3 + 1,
  }));
}

const HeroBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [mounted, setMounted] = useState<boolean>(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setMounted(true);
    const width = window.innerWidth;
    const height = window.innerHeight;
    setStars(generateStars(width, height));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Render nothing on the server to avoid hydration mismatch from Math.random()
  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className="fixed inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: 0.1,
            scale: star.scale,
            x: star.x,
            y: star.y,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [0.5, 1, 0.5],
            y: [null as unknown as number, star.yOffset],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
          style={{
            width: star.w + "px",
            height: star.h + "px",
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
