"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import GradientOrb from "@/components/ui/GradientOrb";
import { units } from "@/data/site-data";
import type { ContactFormData } from "@/types";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  unit: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site — form would need external handler (e.g., Formspree, Netlify Forms)
    console.log("Form submitted:", formData);
    setFormData(initialFormData);
  };

  return (
    <section
      id="contato"
      className="relative py-20 lg:py-28 bg-bg-primary overflow-hidden"
      aria-label="Formulário de contato"
    >
      {/* Background orbs */}
      <GradientOrb color="blue" size={300} className="top-10 left-[-5%] opacity-20" animationDuration={12} />
      <GradientOrb color="accent" size={250} className="bottom-10 right-[-5%] opacity-15" animationDuration={10} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <AnimatedSection animation="slideUp" className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neon-blue/10 text-neon-blue mb-4">
            <Mail size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-text-primary mb-4">
            Fale Conosco
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Tem alguma dúvida? Entre em contato e responderemos o mais rápido possível.
          </p>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <GlassCard intensity="strong" className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              {/* Name and Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-text-secondary mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 focus:border-neon-blue focus:glow-blue outline-none transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-text-secondary mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 focus:border-neon-blue focus:glow-blue outline-none transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Phone and Unit row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm text-text-secondary mb-1.5">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 focus:border-neon-blue focus:glow-blue outline-none transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="contact-unit" className="block text-sm text-text-secondary mb-1.5">
                    Unidade
                  </label>
                  <select
                    id="contact-unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-neon-blue focus:glow-blue outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238888aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "16px" }}
                  >
                    <option value="" className="bg-bg-primary">Selecione uma unidade</option>
                    {units.map((unit) => (
                      <option key={unit.id} value={unit.id} className="bg-bg-primary">
                        {unit.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm text-text-secondary mb-1.5">
                  Assunto
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 focus:border-neon-blue focus:glow-blue outline-none transition-all duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm text-text-secondary mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 focus:border-neon-blue focus:glow-blue outline-none transition-all duration-300 resize-y min-h-[120px]"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <NeonButton variant="filled" color="accent" type="submit" className="w-full sm:w-auto">
                  <Send size={16} />
                  Enviar
                </NeonButton>
              </div>
            </form>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
