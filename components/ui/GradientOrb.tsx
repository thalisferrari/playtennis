"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GradientOrbProps {
  color: "blue" | "green" | "mixed";
  size?: number;
  className?: string;
  animationDuration?: number;
}

const colorMap = {
  blue: "from-neon-blue/30 to-cyan-500/10",
  green: "from-neon-green/30 to-emerald-500/10",
  mixed: "from-neon-blue/20 via-purple-500/15 to-neon-green/20",
};

export default function GradientOrb({
  color,
  size = 400,
  className = "",
  animationDuration = 10,
}: GradientOrbProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full bg-gradient-radial ${colorMap[color]} blur-3xl pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              x: [0, 30, -20, 10, 0],
              y: [0, -20, 15, -10, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
            }
      }
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
