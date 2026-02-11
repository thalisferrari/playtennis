"use client";

import { Instagram, Facebook, Youtube, Linkedin, Phone, MessageCircle } from "lucide-react";
import { footerColumns, socialLinks, companyInfo, BASE_PATH } from "@/data/site-data";

const socialIconMap: Record<string, React.ElementType> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="relative bg-bg-secondary" role="contentinfo">
      {/* Gradient separator */}
      <div className="gradient-separator" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-2 text-xl font-sans font-bold tracking-tight text-text-primary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}/images/logo.png`}
                alt=""
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span>Play<span className="gradient-text-neon">Tennis</span></span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed">
              {companyInfo.tagline}
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-neon-blue hover:glow-blue transition-all duration-300"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-text-secondary mt-4">
              &copy; {new Date().getFullYear()} {companyInfo.name}. Todos os direitos reservados.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-sans font-semibold text-sm text-text-primary mb-4">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-neon-blue transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href={`https://wa.me/${companyInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-accent to-blue-500 flex items-center justify-center text-bg-primary shadow-lg hover:glow-accent-intense hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
          aria-label="Telefone"
          className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-neon-blue hover:glow-blue-intense hover:scale-110 transition-all duration-300"
        >
          <Phone size={20} />
        </a>
      </div>
    </footer>
  );
}
