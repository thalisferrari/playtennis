import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "PlayTennis | A Primeira Academia de Tênis Inteligente da América Latina",
  description:
    "Aulas de tênis, locação de quadras e assinaturas na PlayTennis. Tecnologia e metodologia exclusiva nas melhores quadras de São Paulo. Venha jogar!",
  keywords: [
    "tênis",
    "aulas de tênis",
    "quadras de tênis",
    "academia de tênis",
    "PlayTennis",
    "tênis São Paulo",
    "locação de quadras",
    "torneios de tênis",
  ],
  robots: "index, follow",
  openGraph: {
    title: "PlayTennis | Academia de Tênis Inteligente",
    description:
      "Aulas, locação de quadras e assinaturas. Tecnologia e metodologia exclusiva nas melhores quadras de São Paulo.",
    url: "https://playtennis.com.br",
    siteName: "PlayTennis",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayTennis | Academia de Tênis Inteligente",
    description:
      "Aulas, locação de quadras e assinaturas. Venha jogar nas melhores quadras de São Paulo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "PlayTennis",
              description:
                "A primeira academia de tênis inteligente da América Latina. Aulas, locação de quadras e assinaturas.",
              url: "https://playtennis.com.br",
              telephone: "+551150513868",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              sport: "Tennis",
            }),
          }}
        />
      </head>
      <body
        className={`${exo2.variable} ${inter.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
