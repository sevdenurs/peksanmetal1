const Star = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 1l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 14.5 4.8 17.3l1-5.9L1.5 7.2l5.9-.9z" />
  </svg>
);

const REVIEWS = [
  {
    avatar: "D",
    name: "Defne Aksoy",
    role: "Restoratör mimar · Yeniköy",
    quote:
      "Konak restorasyonumuzda orijinal parçayı bulmak imkânsızdı. Peksan ustaları, fotoğraftan birebir döktüler. Eski ile yeni arasındaki çizgiyi sildiler.",
  },
  {
    avatar: "K",
    name: "Kerem Yıldız",
    role: "Hotel Atölye · Kuruçeşme",
    quote:
      "Butik otelimiz için 38 farklı oda, 38 farklı kapı kolu. Hiçbir iki parça birbirinin aynısı değil. Misafirler fark etmese bile — biz her gün fark ediyoruz.",
  },
  {
    avatar: "S",
    name: "Selin & Emre Korkmaz",
    role: "Özel koleksiyoner · Bebek",
    quote:
      "Katalogdan değil, çizimden sipariş verdim. Hüseyin usta üç kere atölyeye davet etti, ağırlığına kadar elimize verdi. Bu artık ticaret değil — akrabalık.",
  },
];

export function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="review-head reveal">
          <span className="eyebrow">— Referanslar</span>
          <h2 className="section-title" style={{ marginTop: 20 }}>
            Ustalar birbirini
            <br />
            <em>hemen tanır.</em>
          </h2>
          <div className="rating-big" aria-label="Ortalama puan 4.9/5">
            <div className="score">4.9</div>
            <div className="of">/ 5.0</div>
            <div>
              <div className="stars" aria-hidden="true">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="count">820 değerlendirme</div>
            </div>
          </div>
          <div className="rating-meta">
            <span>Google Business</span>
            <span className="sep">✦</span>
            <span>Trendyol</span>
            <span className="sep">✦</span>
            <span>Houzz Pro</span>
            <span className="sep">✦</span>
            <span>Archiproducts</span>
          </div>
        </div>

        <div className="review-grid">
          {REVIEWS.map((r) => (
            <article key={r.name} className="review reveal">
              <span className="verified">Doğrulanmış proje</span>
              <div className="review-stars" aria-hidden="true">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <blockquote>{r.quote}</blockquote>
              <div className="review-footer">
                <div className="avatar" aria-hidden="true">
                  {r.avatar}
                </div>
                <div className="review-who">
                  <div className="name">{r.name}</div>
                  <div className="role">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
