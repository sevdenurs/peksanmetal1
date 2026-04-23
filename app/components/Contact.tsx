import { ContactForm } from "./ContactForm";

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
              Özel ölçü, özel motif, restorasyon ya da toplu sipariş — her proje için
              önce çay, sonra çizim. Atölyemizi ziyaret etmek ister misiniz?
            </p>
            <div className="contact-info">
              <div className="info-block">
                <div className="lbl">— Atölye</div>
                <div className="val">
                  Kemeraltı Cd. No:42
                  <br />
                  Karaköy, İstanbul
                </div>
                <div className="sub">
                  Hafta içi 09:00 – 18:30 · Cumartesi randevu ile
                </div>
              </div>
              <div className="info-block">
                <div className="lbl">— Telefon &amp; WhatsApp</div>
                <div className="val">
                  <a href="tel:+902122521478">+90 212 252 14 78</a>
                </div>
                <div className="sub">
                  Teknik sorularınız için usta başı Hüseyin bey
                </div>
              </div>
              <div className="info-block">
                <div className="lbl">— E-posta</div>
                <div className="val">
                  <a href="mailto:info@peksanmetal.com">info@peksanmetal.com</a>
                </div>
                <div className="sub">
                  24 saat içinde yanıt · PDF katalog talep edebilirsiniz
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
