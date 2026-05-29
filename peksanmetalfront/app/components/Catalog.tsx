import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "../data/products";

const FEATURED = PRODUCTS.filter((p) => p.featured);

export function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="wrap">
        <div className="catalog-head reveal">
          <div>
            <span className="eyebrow">— Galeri</span>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              <em>Galeri.</em>
            </h2>
          </div>
          <Link href="/galeri" className="nav-cta">
            Tüm Galeriyi Gör &nbsp;→
          </Link>
        </div>

        <div className="catalog-grid">
          {FEATURED.map((it) => (
            <article key={it.id} className="card reveal">
              <div className="card-img">
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
