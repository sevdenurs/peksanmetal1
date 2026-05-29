const REFERENCES = [
  "Dolmabahçe Restorasyonu",
  "Çırağan Palace",
  "Swissôtel The Bosphorus",
  "Pera Müzesi",
  "Mimar Sinan Vakfı",
  "Rahmi M. Koç Müzesi",
  "Kempinski Ortaköy",
  "Yıldız Sarayı",
];

export function Trust() {
  const items = [...REFERENCES, ...REFERENCES];
  return (
    <div className="trust" aria-label="Referans projeler">
      <div className="trust-track">
        {items.map((r, i) => (
          <span key={`${r}-${i}`}>{r}</span>
        ))}
      </div>
    </div>
  );
}
