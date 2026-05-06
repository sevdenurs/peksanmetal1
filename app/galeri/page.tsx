import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { RevealInit } from "../components/Reveal";
import { GalleryGrid } from "./GalleryGrid";

export const metadata = {
  title: "Koleksiyon — Peksan Metal",
  description:
    "El dökümü pirinç kapı kolu, bronz tokmak, Osmanlı kilitleri, İspanyolet ve tüm metal aksesuar koleksiyonu.",
};

export default function GaleriPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="gallery-hero">
          <div className="wrap">
            <span className="eyebrow reveal">— Koleksiyon</span>
            <h1 className="section-title reveal" style={{ marginTop: 20, marginBottom: 16 }}>
              Tüm <em>ürünler.</em>
            </h1>
            <p className="lede reveal">
              Pirinç, bronz ve dövme demir — her biri el işçiliğiyle üretilmiş,
              her biri bir kapıya imza bırakmak için.
            </p>
          </div>
        </section>

        <section className="catalog" style={{ paddingTop: 40 }}>
          <div className="wrap">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
