import Image from "next/image";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <span className="eyebrow">— İletişim</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Kapınız için bir
              <br />
              <em>sohbet</em> başlatın.
            </h2>
            <p className="body" style={{ marginTop: 28 }}>
              Özel ölçü, özel motif, restorasyon ya da toplu siparişleriniz için bizimle iletişime geçebilirsiniz. En kısa sürede size geri dönüş yapacağız.
            </p>
            <div className="contact-info">
              <div className="info-block">
                <div className="lbl">— Atölye</div>
                <div className="val">
                  Arnavutköy, İstanbul
                </div>
                <div className="sub">
                  Hafta içi 09:00 – 18:30. Cumartesi 10:00 – 16:00
                </div>
              </div>
              <div className="info-block">
                <div className="lbl">— Telefon &amp; WhatsApp</div>
                <div className="val">
                  <a href="tel:+902122521478">+90 545 658 34 58</a>
                </div>
                <div className="sub">
                  Teknik sorularınız için WhatsApp üzerinden de ulaşabilirsiniz
                </div>
              </div>
              <div className="info-block">
                <div className="lbl">— E-posta</div>
                <div className="val">
                  <a href="mailto:zaferpekk@gmail.com">zaferpekk@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <figure className="contact-visual reveal">
            <div className="contact-visual-img">
              <Image
                src="/assets/showroom-wall.jpg"
                alt="Peksan atölyesinde sergilenen el yapımı pirinç kapı aksesuarları"
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <span>Arnavutköy, İstanbul</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
