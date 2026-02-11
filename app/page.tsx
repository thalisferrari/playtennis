import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Units from "@/components/sections/Units";
import Products from "@/components/sections/Products";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Units />
        <Products />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
