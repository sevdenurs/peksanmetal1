"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Category = "all" | "kol" | "tokmak" | "mandal" | "kilit";

type Item = {
  id: string;
  code: string;
  cat: Exclude<Category, "all">;
  size: "large" | "tall" | "wide" | "med" | "sm";
  img: string;
  alt: string;
  title: string;
  kicker: string;
  meta: string[];
  badge?: string;
};

const ITEMS: Item[] = [
  {
    id: "pm-0142",
    code: "PM-0142 · Kol Serisi",
    cat: "kol",
    size: "large",
    img: "/assets/brass-latch-trio.jpg",
    alt: 'Vapur mandalı "Boğaz" — el dökümü saf pirinç kapı kolu',
    title: 'Vapur Mandalı "Boğaz"',
    kicker: "→ Detay",
    meta: ["Saf pirinç · Ayna cila", "3 beden", "14 gün teslim"],
    badge: "Signature",
  },
  {
    id: "pm-0287",
    code: "PM-0287 · Sürgü",
    cat: "mandal",
    size: "tall",
    img: "/assets/bronze-rod-vertical.jpg",
    alt: "Osmanî dikey sürgü — antik bronz el dövmesi kapı aksesuarı",
    title: "Osmanî Dikey Sürgü",
    kicker: "→",
    meta: ["Antik bronz", "60–140 cm"],
    badge: "El Dökümü",
  },
  {
    id: "pm-0351",
    code: "PM-0351 · Tokmak",
    cat: "tokmak",
    size: "tall",
    img: "/assets/lion-head-knocker.jpg",
    alt: "Arslan başı pirinç kapı tokmağı — konak kapı aksesuarı",
    title: "Arslan Başı Tokmak",
    kicker: "→",
    meta: ["Siyahlatma bronz", "Ø 16 cm"],
    badge: "Yeni",
  },
  {
    id: "pm-0108",
    code: "PM-0108 · Çubuk",
    cat: "mandal",
    size: "wide",
    img: "/assets/bronze-bars-display.jpg",
    alt: "Yıldız motifli patina bronz kapı çubuğu — özel ölçü el işçiliği",
    title: "Yıldız Motifli Bronz Çubuk",
    kicker: "→",
    meta: ["Patina bronz", "Özel ölçü"],
  },
  {
    id: "pm-0077",
    code: "PM-0077",
    cat: "kilit",
    size: "med",
    img: "/assets/brass-lock-plate.jpg",
    alt: "Konak pirinç kilit plakası — ham pirinç cila finiş",
    title: "Konak Kilit Plakası",
    kicker: "→",
    meta: ["Ham pirinç · Cila"],
  },
  {
    id: "pm-0194",
    code: "PM-0194 · Tokmak",
    cat: "tokmak",
    size: "med",
    img: "/assets/brass-ring-knocker.jpg",
    alt: "Saray halka tokmağı — gümüşlenmiş pirinç kapı aksesuarı",
    title: "Saray Halka Tokmağı",
    kicker: "→",
    meta: ["Gümüşlenmiş pirinç"],
    badge: "Limited",
  },
  {
    id: "pm-0321",
    code: "PM-0321 · Kol",
    cat: "kol",
    size: "med",
    img: "/assets/ornate-escutcheon.jpg",
    alt: "Çift levha Fransız kapı kolu — işlemeli pirinç oyma",
    title: "Çift Levha Fransız Kol",
    kicker: "→",
    meta: ["İşlemeli pirinç"],
  },
  {
    id: "pm-0410",
    code: "PM-0410 · Kilit",
    cat: "kilit",
    size: "med",
    img: "/assets/gothic-lock-forged.jpg",
    alt: "Gotik dövme demir kilit — el dövmesi restorasyon parçası",
    title: "Gotik Dövme Kilit",
    kicker: "→",
    meta: ["El dövmesi demir"],
    badge: "Dövme",
  },
  {
    id: "pm-0055",
    code: "PM-0055 · Set",
    cat: "kol",
    size: "med",
    img: "/assets/door-knobs-wood.jpg",
    alt: "Ahşap üzeri pirinç kapı kolu kompozisyonu — varyasyon serisi",
    title: "Kapı Kolu Kompozisyonu",
    kicker: "→",
    meta: ["Varyasyon serisi"],
  },
  {
    id: "pm-col",
    code: "PM-COL · Katalog",
    cat: "kol",
    size: "wide",
    img: "/assets/handles-collection.jpg",
    alt: "Peksan Metal pirinç kapı kolu koleksiyonu — 240 özgün model",
    title: "240 modeli kataloğumuzda inceleyin",
    kicker: "→ Tüm katalog",
    meta: ["PDF kataloğu talep edin"],
  },
];

const FILTERS: { key: Category; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "kol", label: "Kolu" },
  { key: "tokmak", label: "Tokmak" },
  { key: "mandal", label: "Mandal" },
  { key: "kilit", label: "Kilit" },
];

export function Catalog() {
  const [active, setActive] = useState<Category>("all");

  const visible = useMemo(
    () => ITEMS.map((i) => ({ ...i, hidden: active !== "all" && i.cat !== active })),
    [active]
  );

  return (
    <section className="catalog" id="catalog">
      <div className="wrap">
        <div className="catalog-head reveal">
          <div>
            <span className="eyebrow">— Koleksiyon</span>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              Kapınıza bir
              <br />
              <em>imza seçin.</em>
            </h2>
          </div>
          <div className="catalog-filters" role="tablist" aria-label="Koleksiyon filtreleri">
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
        </div>

        <div className="catalog-grid">
          {visible.map((it) => (
            <article
              key={it.id}
              className={`card ${it.size} reveal`}
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
              {it.badge && <span className="badge">{it.badge}</span>}
              <div className="overlay">
                <div className="kicker">
                  <span>{it.code}</span>
                  <span>{it.kicker}</span>
                </div>
                <h3>{it.title}</h3>
                <div className="meta">
                  {it.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
