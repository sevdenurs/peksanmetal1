"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PRODUCTS, FILTERS, type Category } from "../data/products";

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("all");

  const visible = useMemo(
    () => PRODUCTS.map((p) => ({ ...p, hidden: active !== "all" && p.cat !== active })),
    [active]
  );

  return (
    <>
      <div className="catalog-filters reveal" role="tablist" aria-label="Galeri filtreleri">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={active === f.key}
            className={active === f.key ? "active" : undefined}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="catalog-grid" style={{ marginTop: 32 }}>
        {visible.map((it) => (
          <article
            key={it.id}
            className="card reveal"
            hidden={it.hidden}
            aria-hidden={it.hidden}
          >
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
    </>
  );
}
