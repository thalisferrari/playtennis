"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";
import GradientOrb from "@/components/ui/GradientOrb";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-bg-primary" aria-hidden="true" />

      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,255,136,0.1), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Animated gradient orbs */}
      <GradientOrb color="blue" size={500} className="top-[-10%] left-[-10%] opacity-40" animationDuration={10} />
      <GradientOrb color="green" size={350} className="bottom-[-5%] right-[-5%] opacity-30" animationDuration={12} />
      <GradientOrb color="mixed" size={300} className="top-[30%] right-[20%] opacity-20" animationDuration={8} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate="visible"
      >
        <motion.p
          variants={childVariants}
          className="text-neon-blue text-sm sm:text-base font-medium tracking-widest uppercase mb-4"
        >
          Bem-vindo à PlayTennis
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight mb-6"
        >
          A primeira academia de{" "}
          <span className="gradient-text-animated">tênis inteligente</span>{" "}
          da América Latina
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Tecnologia, metodologia exclusiva e as melhores quadras para você elevar seu jogo a outro nível.
        </motion.p>

        <motion.div variants={childVariants}>
          <NeonButton variant="filled" color="green" href="#unidades">
            Jogue Agora
          </NeonButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#unidades"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-neon-blue transition-colors duration-300"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
