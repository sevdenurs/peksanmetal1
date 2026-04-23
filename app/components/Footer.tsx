import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="f">
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <Logo />
            <p>
              Pirincin sesini dinleyen üç nesildir aynı atölyede. Her kapı, kendi
              hikâyesini kendi kolundan anlatır.
            </p>
          </div>

          <div className="f-col">
            <h5>Koleksiyon</h5>
            <ul>
              <li><a href="#catalog">Kapı Kolları</a></li>
              <li><a href="#catalog">Tokmaklar</a></li>
              <li><a href="#catalog">Sürgü &amp; Mandal</a></li>
              <li><a href="#catalog">Kilit Plakaları</a></li>
              <li><a href="#contact">Özel Sipariş</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Atölye</h5>
            <ul>
              <li><a href="#story">Hikâyemiz</a></li>
              <li><a href="#craft">Üretim Süreci</a></li>
              <li><a href="#reviews">Referanslar</a></li>
              <li><a href="#contact">Kariyer — Çırak</a></li>
              <li><a href="#contact">Basın</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Servis</h5>
            <ul>
              <li><a href="#contact">PDF Katalog</a></li>
              <li><a href="#contact">Restorasyon</a></li>
              <li><a href="#contact">Bakım Rehberi</a></li>
              <li><a href="#contact">Nakliye &amp; Sigorta</a></li>
              <li><a href="#contact">KVKK</a></li>
            </ul>
          </div>

          <div className="f-col f-news">
            <h5>Atölye mektubu</h5>
            <p>
              Ayda bir, atölyeden notlar ve yeni dökümler. Spam yok; sadece pirincin
              sesi.
            </p>
            <form
              className="newsform"
              action="/api/subscribe"
              method="post"
              aria-label="Bültene abone ol"
            >
              <label htmlFor="nl-email" style={{ position: "absolute", left: "-9999px" }}>
                E-posta adresiniz
              </label>
              <input
                id="nl-email"
                type="email"
                name="email"
                placeholder="E-posta adresiniz"
                required
                autoComplete="email"
              />
              <button type="submit">Abone ol</button>
            </form>
          </div>
        </div>

        <div className="f-bottom">
          <div>© {new Date().getFullYear()} Peksan Metal San. Tic. Ltd. Şti. · Tüm hakları saklıdır.</div>
          <div className="f-social">
            <a href="https://www.instagram.com/peksanmetal" rel="noopener noreferrer" target="_blank">Instagram</a>
            <a href="https://www.pinterest.com/peksanmetal" rel="noopener noreferrer" target="_blank">Pinterest</a>
            <a href="https://www.houzz.com/pro/peksanmetal" rel="noopener noreferrer" target="_blank">Houzz</a>
            <a href="https://www.linkedin.com/company/peksanmetal" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </div>
          <div>MERSİS 0720-0478-2100-0014</div>
        </div>
      </div>
    </footer>
  );
}
