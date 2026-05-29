const SERVICES = [
  {
    id: "dokum",
    title: "Pirinç & Bronz Döküm",
    body: "Detaya özel her türlü pirinç ve bronz aksesuar imalatı bünyemizde gerçekleştirilmektedir.",
  },
  {
    id: "restorasyon",
    title: "Restorasyon & Tadilat",
    body: "Mevcut numune veya teknik çizim ile restorasyon projelerine birebir üretim yapılır.",
  },
  {
    id: "osmanli",
    title: "Osmanlı & Antik Objeler",
    body: "Osmanlı kilitleri, dövme kilit, antik kapı ve pencere kolları ile dekoratif antik objeler.",
  },
  {
    id: "cami",
    title: "Cami Aksesuarları",
    body: "Cami kulpları, kapı kolları ve tüm cami metal aksesuarları özel ölçü ve motifle üretilir.",
  },
  {
    id: "ispanyolet",
    title: "İspanyolet Sistemleri",
    body: "Komple pirinç ve bronz malzemeden İspanyolet modelleri, her boyut ve finiş seçeneğiyle.",
  },
  {
    id: "numune",
    title: "Numune & Çizimden Üretim",
    body: "Elinizde numune ya da teknik çizim varsa yeterli — birebir üretim için bize ulaşın.",
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services-head reveal">
          <span className="eyebrow">— Hizmetler</span>
          <h2 className="section-title" style={{ marginTop: 20 }}>
            Her detay için
            <br />
            <em>doğru adres.</em>
          </h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.id} className="service-card reveal">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
