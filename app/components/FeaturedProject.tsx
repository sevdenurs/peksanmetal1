import Image from "next/image";

export function FeaturedProject() {
  return (
    <section className="fp" id="referans">

      {/* ── Thin editorial header bar ── */}
      <div className="fp-header">
        <div className="wrap fp-header-inner">
          <span className="fp-header-label">— Referans Proje</span>
          <div className="fp-header-rule" aria-hidden="true" />
          <span className="fp-header-meta">Beşiktaş · İstanbul · 2024</span>
        </div>
      </div>

      {/* ── Folio: framed photo left + editorial text right ── */}
      <div className="wrap">
        <div className="fp-folio">

          {/* Framed photo */}
          <figure className="fp-folio-fig reveal">
            <div className="fp-folio-frame">
              <Image
                src="/assets/yildiz-fener-siralama.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 480px"
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
              />
            </div>
            <figcaption className="fp-folio-caption">
              <span>Montaj öncesi · Beşiktaş</span>
            </figcaption>
          </figure>

          {/* Editorial text */}
          <div className="fp-folio-text reveal">
            <h2 className="fp-folio-title">
              <span>Yıldız</span>
              <em>Sarayı</em>
            </h2>
            <div className="fp-folio-ornament" aria-hidden="true">
              <span className="fp-orn-line" />
              <span className="fp-orn-gem">✦</span>
              <span className="fp-orn-line" />
            </div>
            <p className="fp-folio-desc">
              Yıldız Sarayı'nın tarihi bahçe yolları için el dökümü bakır-pirinç fenerler
              ürettik. Her biri özgün Osmanlı motiflerini taşıyan bu fenerler, sarayın
              tarihî dokusuna saygıyla tasarlandı.
            </p>
            
          </div>

        </div>
      </div>

      {/* ── Hikâye: yakın çekim + metin ── */}
      <div className="wrap">
        <div className="fp-story reveal">
          <div className="fp-story-left">
            <div className="fp-tall-photo">
              <div className="fp-tall-inner">
                <Image
                  src="/assets/yildiz-fener-kapak.jpg"
                  alt="Bakır kubbe ve dövme pirinç taç detayı — yakın çekim"
                  width={900}
                  height={1200}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div className="fp-tall-badge">Bakır Kubbe — Pirinç Taç Detayı</div>
              </div>
            </div>
          </div>
          <div className="fp-story-right">
            <span className="eyebrow">— Proje Hikâyesi</span>
            <h3 className="fp-story-title">
              Tarihin<br /><em>Işığında</em>
            </h3>
            <p className="lede">
              Her detayda Osmanlı zarafeti, her birleşimde usta eli.
            </p>
            <div className="fp-story-body">
              <p>
                Üretim sürecinde dönemin çizimlerinden ilham alınarak özgün kalıplar oluşturuldu;
                bakır kubbenin elle dövülmesi, pirinç taç motiflerinin tek tek döküm kalıplarıyla
                biçimlendirilmesi tüm aşamalar atölyemizde gerçekleştirildi.
              </p>
            </div>
            <div className="fp-folio-specs">
              <div className="fp-folio-spec">
                <span className="fp-folio-spec-k">Konum</span>
                <strong className="fp-folio-spec-v">Yıldız Sarayı, Beşiktaş</strong>
              </div>
              <div className="fp-folio-spec">
                <span className="fp-folio-spec-k">Malzeme</span>
                <strong className="fp-folio-spec-v">Bakır &amp; Pirinç</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Üçlü fotoğraf şeridi ── */}
      <div className="fp-strip">
        <div className="fp-strip-item reveal">
          <div className="fp-strip-img">
            <Image
              src="/assets/yildiz-fener-duvar.jpg"
              alt="Yıldız Sarayı cephesine monte edilmiş yanmış fener"
              fill
              sizes="(max-width: 720px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="fp-strip-cap">Saray Cephesi — Gece Görünümü</div>
        </div>
        <div className="fp-strip-item reveal">
          <div className="fp-strip-img">
            <Image
              src="/assets/yildiz-fener-bahce.jpg"
              alt="Yıldız Sarayı bahçesinde çok kollu fener direği"
              fill
              sizes="(max-width: 720px) 100vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
          <div className="fp-strip-cap">Bahçe Yolu — Çok Kollu Direk</div>
        </div>
        <div className="fp-strip-item reveal">
          <div className="fp-strip-img">
            <Image
              src="/assets/yildiz-fener-atolye.jpg"
              alt="Yıldız Sarayı fenerlerinin atölye üretim aşaması"
              fill
              sizes="(max-width: 720px) 100vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
          </div>
          <div className="fp-strip-cap">Atölye — Üretim Aşaması</div>
        </div>
      </div>

    </section>
  );
}
