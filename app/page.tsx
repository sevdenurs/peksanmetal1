import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Catalog } from "./components/Catalog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RevealInit } from "./components/Reveal";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <Contact />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
