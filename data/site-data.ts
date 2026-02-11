import type { Unit, Product, EventItem, NavLink, FooterColumn, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Unidades", href: "#unidades" },
  { label: "Produtos", href: "#produtos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contato", href: "#contato" },
];

export const units: Unit[] = [
  {
    id: "moema",
    name: "PlayTennis Moema",
    address: "Av. Jurema, 65",
    city: "São Paulo",
    state: "SP",
    image: "/images/unit-placeholder.jpg",
    amenities: ["Quadras cobertas", "Iluminação LED", "Estacionamento", "Lanchonete"],
    phone: "(11) 5051-3868",
    whatsapp: "5511950513868",
    url: "#",
  },
  {
    id: "itaim",
    name: "PlayTennis Itaim",
    address: "R. Joaquim Floriano, 466",
    city: "São Paulo",
    state: "SP",
    image: "/images/unit-placeholder.jpg",
    amenities: ["Quadras cobertas", "Iluminação LED", "Loja Pro Shop"],
    phone: "(11) 3078-1939",
    whatsapp: "5511930781939",
    url: "#",
  },
  {
    id: "pinheiros",
    name: "PlayTennis Pinheiros",
    address: "R. dos Pinheiros, 1200",
    city: "São Paulo",
    state: "SP",
    image: "/images/unit-placeholder.jpg",
    amenities: ["Quadras cobertas", "Iluminação LED", "Estacionamento"],
    phone: "(11) 3061-2020",
    url: "#",
  },
  {
    id: "alphaville",
    name: "PlayTennis Alphaville",
    address: "Al. Rio Negro, 500",
    city: "Barueri",
    state: "SP",
    image: "/images/unit-placeholder.jpg",
    amenities: ["Quadras cobertas", "Iluminação LED", "Estacionamento", "Academia"],
    phone: "(11) 4191-5050",
    whatsapp: "5511941915050",
    url: "#",
  },
  {
    id: "morumbi",
    name: "PlayTennis Morumbi",
    address: "Av. Giovanni Gronchi, 5819",
    city: "São Paulo",
    state: "SP",
    image: "/images/unit-placeholder.jpg",
    amenities: ["Quadras cobertas", "Iluminação LED", "Estacionamento", "Lanchonete"],
    phone: "(11) 3742-1010",
    url: "#",
  },
  {
    id: "campinas",
    name: "PlayTennis Campinas",
    address: "R. Abolição, 2050",
    city: "Campinas",
    state: "SP",
    image: "/images/unit-placeholder.jpg",
    amenities: ["Quadras cobertas", "Iluminação LED", "Estacionamento"],
    phone: "(19) 3252-1010",
    url: "#",
  },
];

export const products: Product[] = [
  {
    id: "aulas",
    title: "Aulas de Tênis",
    description:
      "Aulas para todos os níveis com professores certificados. Metodologia exclusiva que acelera seu desenvolvimento dentro e fora da quadra.",
    icon: "racquet",
    url: "#",
  },
  {
    id: "assinaturas",
    title: "Assinaturas",
    description:
      "Planos flexíveis para jogar quando quiser. Acesso a quadras, aulas em grupo e benefícios exclusivos para assinantes.",
    icon: "crown",
    url: "#",
  },
  {
    id: "locacoes",
    title: "Locação de Quadras",
    description:
      "Reserve quadras online de forma rápida e prática. Disponibilidade em tempo real e confirmação instantânea.",
    icon: "calendar",
    url: "#",
  },
];

export const events: EventItem[] = [
  {
    id: "torneios",
    title: "Torneios",
    description: "Participe dos nossos torneios e desafie-se contra jogadores do seu nível.",
    image: "/images/event-placeholder.jpg",
    url: "#",
  },
  {
    id: "eventos",
    title: "Eventos Especiais",
    description: "Clínicas com profissionais, festivais e muito mais.",
    image: "/images/event-placeholder.jpg",
    url: "#",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Unidades", href: "#unidades" },
      { label: "Produtos", href: "#produtos" },
      { label: "Eventos", href: "#eventos" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Produtos",
    links: [
      { label: "Aulas de Tênis", href: "#" },
      { label: "Assinaturas", href: "#" },
      { label: "Locação de Quadras", href: "#" },
      { label: "Pro Shop", href: "#" },
    ],
  },
  {
    title: "Unidades",
    links: [
      { label: "Moema", href: "#" },
      { label: "Itaim", href: "#" },
      { label: "Pinheiros", href: "#" },
      { label: "Alphaville", href: "#" },
      { label: "Morumbi", href: "#" },
      { label: "Campinas", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", icon: "instagram", url: "https://instagram.com/playtennis" },
  { label: "Facebook", icon: "facebook", url: "https://facebook.com/playtennis" },
  { label: "YouTube", icon: "youtube", url: "https://youtube.com/playtennis" },
  { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/company/playtennis" },
];

export const companyInfo = {
  name: "PlayTennis",
  tagline: "A primeira academia de tênis inteligente da América Latina",
  phone: "(11) 5051-3868",
  whatsapp: "5511950513868",
  email: "contato@playtennis.com.br",
  website: "https://playtennis.com.br",
};
