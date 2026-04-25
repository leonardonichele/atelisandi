import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Catalogo from "@/components/Catalogo";
import BannerCTA from "@/components/BannerCTA";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Catalogo />
      <BannerCTA />
      <Depoimentos />
      <Footer />
    </main>
  );
}
