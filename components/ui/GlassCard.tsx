"use client";

import type { GlowColor, GlassIntensity } from "@/types";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: GlowColor;
  intensity?: GlassIntensity;
  as?: React.ElementType;
}

const intensityMap: Record<GlassIntensity, string> = {
  light: "glass-light",
  medium: "glass",
  strong: "glass-strong",
};

const glowHoverMap: Record<GlowColor, string> = {
  blue: "hover:border-neon-blue/40 hover:glow-blue",
  green: "hover:border-neon-green/40 hover:glow-green",
};

export default function GlassCard({
  children,
  className = "",
  hoverGlow = "blue",
  intensity = "medium",
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={`
        ${intensityMap[intensity]}
        ${glowHoverMap[hoverGlow]}
        rounded-2xl transition-all duration-300
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
