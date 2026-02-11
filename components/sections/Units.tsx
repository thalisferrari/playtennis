"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import UnitCarousel from "@/components/ui/UnitCarousel";
import { units } from "@/data/site-data";

export default function Units() {
  return (
    <section
      id="unidades"
      className="relative py-20 lg:py-28 bg-bg-secondary overflow-hidden"
      aria-label="Nossas unidades"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-neon-blue to-neon-accent" aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-text-primary">
              Jogue Agora
            </h2>
          </div>
          <p className="text-text-secondary max-w-xl ml-5 text-base">
            Encontre a unidade mais próxima de você e comece a jogar hoje mesmo.
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <UnitCarousel units={units} />
      </div>
    </section>
  );
}
