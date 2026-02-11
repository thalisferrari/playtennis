"use client";

import type { ButtonVariant, GlowColor } from "@/types";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: GlowColor;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export default function NeonButton({
  children,
  variant = "filled",
  color = "accent",
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: NeonButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer";

  const variantStyles =
    variant === "filled"
      ? color === "accent"
        ? "bg-gradient-to-r from-neon-accent to-blue-400 text-bg-primary hover:glow-accent-intense"
        : "bg-gradient-to-r from-neon-blue to-cyan-400 text-bg-primary hover:glow-blue-intense"
      : color === "accent"
        ? "border border-neon-accent/60 text-neon-accent hover:bg-neon-accent/10 hover:glow-accent"
        : "border border-neon-blue/60 text-neon-blue hover:bg-neon-blue/10 hover:glow-blue";

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
