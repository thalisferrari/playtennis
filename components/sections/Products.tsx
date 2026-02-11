"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Crown, CalendarDays, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { products } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  racquet: BookOpen,
  crown: Crown,
  calendar: CalendarDays,
};

export default function Products() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="produtos"
      className="relative py-20 lg:py-28 bg-bg-primary overflow-hidden"
      aria-label="Nossos produtos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection animation="slideUp" className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-text-primary mb-4">
            Melhore Seu Jogo
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Descubra nossos produtos e serviços pensados para elevar sua performance.
          </p>
        </AnimatedSection>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = iconMap[product.icon] || BookOpen;

            return (
              <AnimatedSection
                key={product.id}
                animation="fadeIn"
                delay={index * 0.2}
              >
                <GlassCard
                  hoverGlow="green"
                  className="p-8 h-full flex flex-col items-center text-center group"
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-colors duration-300"
                    whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-xl font-sans font-bold text-text-primary mb-3">
                    {product.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>

                  {/* Link */}
                  <a
                    href={product.url}
                    className="inline-flex items-center gap-2 text-sm text-neon-blue hover:text-neon-green transition-colors duration-300 group/link"
                  >
                    Saiba mais
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
