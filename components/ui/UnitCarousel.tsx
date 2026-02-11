"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import type { Unit } from "@/types";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";

interface UnitCarouselProps {
  units: Unit[];
}

export default function UnitCarousel({ units }: UnitCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 340;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }, []);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text-primary hover:glow-blue transition-all duration-300 cursor-pointer hidden md:flex"
          aria-label="Unidade anterior"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text-primary hover:glow-blue transition-all duration-300 cursor-pointer hidden md:flex"
          aria-label="Próxima unidade"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Cards container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory scroll-smooth"
        role="region"
        aria-label="Carrossel de unidades"
      >
        {units.map((unit, index) => (
          <motion.div
            key={unit.id}
            custom={index}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex-shrink-0 w-[300px] snap-start"
          >
            <GlassCard hoverGlow="blue" className="h-full overflow-hidden group">
              {/* Image placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-bg-secondary to-bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary/30">
                  <MapPin size={48} />
                </div>
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="glass px-3 py-1 rounded-full text-xs text-text-primary font-medium">
                    {unit.city}, {unit.state}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold font-sans text-text-primary">
                  {unit.name}
                </h3>

                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <MapPin size={14} className="flex-shrink-0" />
                  <span>{unit.address}</span>
                </div>

                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Phone size={14} className="flex-shrink-0" />
                  <span>{unit.phone}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {unit.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-text-secondary border border-white/5"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <NeonButton
                  variant="outlined"
                  color="blue"
                  href={unit.url}
                  className="mt-2 text-xs"
                >
                  Quero conhecer
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
