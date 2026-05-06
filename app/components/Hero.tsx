import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow reveal">Zanaatkâr pirinç · El işçiliği</span>
          <h1 className="reveal">
            Her kapının
            <br />
            <em>kendine has</em>
            <br />
            bir imzası vardır.
          </h1>
          <p className="hero-sub reveal">
            Tarihi konaklardan çağdaş mimariye — 46 yıldır döktüğümüz, cilaladığımız ve
            elle tamamladığımız pirinç kapı kolu, tokmak ve aksesuarlar.
          </p>
          <div className="hero-ctas reveal">
            <a href="#catalog" className="btn-primary">
              Koleksiyonu Keşfet
              <svg
                className="arrow"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Teklif İste
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </a>
          </div>

          <div className="hero-meta reveal">
            <div>
              <div className="mk">— Deneyim</div>
              <div className="mv">
                46
                <sup style={{ fontSize: ".55em", color: "var(--brass)" }}>+</sup>
              </div>
              <div className="ms">Yıllık zanaat</div>
            </div>
            <div>
              <div className="mk">— Koleksiyon</div>
              <div className="mv">240</div>
              <div className="ms">Özgün model</div>
            </div>
            <div>
              <div className="mk">— Müşteri</div>
              <div className="mv">
                4.9<span style={{ fontSize: ".55em", color: "var(--brass)" }}>★</span>
              </div>
              <div className="ms">820+ değerlendirme</div>
            </div>
          </div>
        </div>

        <div className="hero-art reveal">
          <div className="frame">
            <div className="inner-frame">
              <Image
                src="/assets/hero-brass-bar.jpg"
                alt="Peksan Metal el dökümü pirinç kapı kolu — zanaatkâr el işçiliği"
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <svg className="ring" viewBox="0 0 160 160">
              <defs>
                <path
                  id="circ"
                  d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
              </defs>
              <text fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="3" fill="#c9a961">
                <textPath href="#circ">
                  HANDCRAFTED · SINCE 1978 · İSTANBUL · PEKSAN METAL ·{" "}
                </textPath>
              </text>
            </svg>
            <div className="hero-stamp-inner">
              Saf
              <br />
              <span className="big">Pirinç</span>
              Döküm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
