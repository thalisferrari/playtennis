export interface Unit {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  image: string;
  amenities: string[];
  phone: string;
  whatsapp?: string;
  url: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  unit: string;
  subject: string;
  message: string;
}

export type GlowColor = "blue" | "green";
export type GlassIntensity = "light" | "medium" | "strong";
export type ButtonVariant = "filled" | "outlined";
export type AnimationType = "fadeIn" | "slideUp" | "slideLeft" | "slideRight";
