const STATS = [
  { n: "46", sup: "+", t: "yıllık atölye", s: "Est. 1978" },
  { n: "240", t: "özgün model", s: "Sürekli genişleyen katalog" },
  { n: "18.400", t: "tamamlanan parça", s: "1978'den bugüne" },
  { n: "27", t: "ülkeye sevkiyat", s: "Avrupa · Körfez · Asya" },
];

export function Stats() {
  return (
    <section className="stats" aria-label="Rakamlarla Peksan Metal">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.t} className="stat reveal">
              <div className="n">
                {s.n}
                {s.sup && <sup>{s.sup}</sup>}
              </div>
              <div className="t">{s.t}</div>
              <div className="s">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
