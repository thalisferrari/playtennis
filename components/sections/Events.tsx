"use client";

import { Trophy, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NeonButton from "@/components/ui/NeonButton";
import { events } from "@/data/site-data";

const eventIcons: Record<string, React.ElementType> = {
  torneios: Trophy,
  eventos: Sparkles,
};

export default function Events() {
  return (
    <section
      id="eventos"
      className="relative py-20 lg:py-28 bg-bg-secondary"
      aria-label="Eventos e torneios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection animation="slideUp" className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-text-primary mb-4">
            Eventos & Torneios
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Participe dos nossos eventos e viva a experiência completa do tênis.
          </p>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event, index) => {
            const Icon = eventIcons[event.id] || Trophy;

            return (
              <AnimatedSection
                key={event.id}
                animation={index === 0 ? "slideLeft" : "slideRight"}
              >
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group cursor-pointer">
                  {/* Background gradient placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />

                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${index === 0 ? "30% 70%" : "70% 30%"}, ${index === 0 ? "rgba(0,212,255,0.3)" : "rgba(0,255,136,0.3)"}, transparent 50%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <div className="glass rounded-2xl p-8 max-w-sm group-hover:glow-blue transition-all duration-500">
                      <Icon
                        size={36}
                        className={`mx-auto mb-4 ${index === 0 ? "text-neon-blue" : "text-neon-green"}`}
                      />
                      <h3 className="text-2xl font-sans font-bold text-text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-6">
                        {event.description}
                      </p>
                      <NeonButton
                        variant="outlined"
                        color={index === 0 ? "blue" : "green"}
                        href={event.url}
                      >
                        Saiba Mais
                      </NeonButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
