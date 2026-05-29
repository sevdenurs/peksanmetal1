import Image from "next/image";

export function Signature() {
  return (
    <section className="signature" aria-label="İmza parça">
      <div className="wrap">
        <div className="sig-grid">
          <div className="sig-left reveal">
            <div className="sig-img">
              <Image
                src="/assets/lion-head-knocker.jpg"
                alt="Peksan Metal Arslan Başı Konak Tokmağı — PM-0351 el dökümü bronz imza parça"
                fill
                sizes="(max-width: 1080px) 100vw, 40vw"
              />
            </div>
            <div className="sig-frame" aria-hidden="true" />
          </div>
          <div className="sig-right reveal">
            <span className="eyebrow">— İmza parça · PM-0351</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Arslan Başı
              <br />
              <em>Konak Tokmağı.</em>
            </h2>
            <p className="lede">
              Her biri tek tek dökülen, 47 ayrı nokta elle tashih edilen bu tokmak,
              Peksan&apos;ın imza parçasıdır. Yaşlandıkça koyulaşan patinası —
              zamanın imzasıdır.
            </p>
            <ul className="sig-bullets">
              <li>
                <strong>14 gün el işçiliği</strong>
                Tek parça kum kalıba döküm; yüz detayı ustanın keskisiyle bitirilir.
              </li>
              <li>
                <strong>%100 saf bronz alaşımı</strong>
                Asitlenmiş patina; dış mekânda 20+ yıl renk stabilizasyonu.
              </li>
              <li>
                <strong>Özel ölçü &amp; ithalat</strong>
                Müşteri ağırlığına göre halka kalınlığı. Avrupa ve Körfez&apos;e sevkiyat.
              </li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ marginTop: 44 }}>
              Bu parça için teklif al
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
          </div>
        </div>
      </div>
    </section>
  );
}
