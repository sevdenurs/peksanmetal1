import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Trust } from "./components/Trust";
import { Story } from "./components/Story";
import { Craft } from "./components/Craft";
import { Catalog } from "./components/Catalog";
import { Signature } from "./components/Signature";
import { Reviews } from "./components/Reviews";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RevealInit } from "./components/Reveal";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Story />
        <Craft />
        <Catalog />
        <Signature />
        <Reviews />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
