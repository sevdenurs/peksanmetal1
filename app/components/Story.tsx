import Image from "next/image";

export function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap">
        <div className="story-grid">
          <div className="story-left reveal">
            <span className="eyebrow">— Atölyemiz</span>
            <h2 className="section-title">
              Üç nesildir
              <br />
              aynı eller,
              <br />
              <em>aynı ocak.</em>
            </h2>
            <div className="story-figures">
              <figure>
                <div className="fig-img">
                  <Image
                    src="/assets/brass-knobs-detail.jpg"
                    alt="Oyma motifli cilalı pirinç kapı kolu detayı"
                    fill
                    sizes="(max-width: 1080px) 100vw, 40vw"
                  />
                </div>
                <figcaption>
                  <span>Fig. 01 · Oyma motif</span>
                  <span>Cilalı pirinç</span>
                </figcaption>
              </figure>
              <figure>
                <div className="fig-img">
                  <Image
                    src="/assets/ornate-bronze-rods.jpg"
                    alt="Patinalı bronz kapı aksesuar çubukları — el döküm detayı"
                    fill
                    sizes="(max-width: 1080px) 100vw, 40vw"
                  />
                </div>
                <figcaption>
                  <span>Fig. 02 · Döküm detay</span>
                  <span>Patinalı bronz</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="story-right reveal">
            <div className="body" style={{ fontSize: "17px", lineHeight: 1.75 }}>
              <p>
                1978&apos;de, İstanbul&apos;un tarihi Kapalıçarşı esnafından bir ustanın
                küçük atölyesinde başladı Peksan&apos;ın hikâyesi. Bugün aynı ocakta,
                aynı çekiç sesleriyle çalışan üçüncü nesil zanaatkârlarımız; Osmanlı
                motiflerinden Art Nouveau çizgilere uzanan bir katalog dokuyor.
              </p>

              <p>
                Her parça, özel kum kalıplara dökülen %100 saf pirinçten — sonra elle
                törpülenir, çapaklar alınır, mat veya ayna cila ile bitirilir. Tekrar
                eden makinenin değil, nefes alan elin izi vardır üzerinde.
              </p>

              <p>
                Bizim için kapı kolu, bir mekâna ilk dokunuştur. Mermerden daha önce,
                ahşaptan daha önce — parmağın ilk buluştuğu yer. O ilk temasın hikâye
                anlatması gerekir.
              </p>
            </div>

            <blockquote className="story-quote">
              &ldquo;Pirinci dövmek kolay; ama onu sana cevap verene kadar dinlemek —
              işte o yıllar ister.&rdquo;
            </blockquote>
            <div className="story-signature">— Hüseyin Peksan, Usta &amp; Kurucu</div>
          </div>
        </div>
      </div>
    </section>
  );
}
