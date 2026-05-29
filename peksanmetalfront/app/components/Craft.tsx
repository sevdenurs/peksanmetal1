const STEPS = [
  {
    num: "01",
    tag: "— Kalıp",
    title: "Kalıp & Model",
    desc:
      "Her model önce usta elinden çıkar; çamurdan pozitif model, kumdan negatif kalıp. Tek bir motif için üç gün.",
    icon: (
      <svg
        className="step-icon"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <rect x="8" y="14" width="32" height="22" rx="1" />
        <path d="M14 14v-4h6v4M28 14v-4h6v4" />
        <path d="M24 20v10M20 24h8" />
        <circle cx="24" cy="36" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "— Döküm",
    title: "Sıcak Döküm",
    desc:
      "%100 saf pirinç, 940°C'de eritilir ve elle dökülür. Sanayi tipi baskı değil — yerçekimi ve nefes.",
    icon: (
      <svg
        className="step-icon"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M10 10l6 12h16l6-12" />
        <path d="M16 22v18h16V22" />
        <path d="M20 28h8M20 33h8" />
        <path d="M14 8h20" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "— İşçilik",
    title: "Elle Tashih",
    desc:
      "Çapak alma, eğe, törpü, keski. Her bir motifin dip detayını ustanın kendi gözü tamamlar.",
    icon: (
      <svg
        className="step-icon"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M12 36l20-20" />
        <path d="M28 12l8 8-4 4-8-8z" fill="currentColor" fillOpacity=".15" />
        <path d="M10 38l4-2 2 4" />
        <circle cx="34" cy="14" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "— Cila",
    title: "Bitiş & Patina",
    desc:
      "Ayna, mat, antika patina veya siyahlatma. Seçim müşterinin — zaman her finişi kendi rengiyle bitirir.",
    icon: (
      <svg
        className="step-icon"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="8" strokeDasharray="2 2" />
        <path d="M18 18l12 12M30 18L18 30" opacity=".3" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export function Craft() {
  return (
    <section className="craft" id="craft">
      <div className="wrap">
        <div className="craft-head reveal">
          <div>
            <span className="eyebrow">— Süreç</span>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              Dört el, tek
              <br />
              <em>imza.</em>
            </h2>
          </div>
          <p className="lede">
            Kum kalıptan ciladan geçene kadar her parça 14 güne yakın sürede hazırlanır.
            Hiçbir adım makineye bırakılmaz; her dokunuş elimizin altında tamamlanır.
          </p>
        </div>

        <div className="craft-steps">
          {STEPS.map((s) => (
            <div key={s.num} className="step reveal">
              <div className="num">
                <span>{s.num}</span>
                <span>{s.tag}</span>
              </div>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
