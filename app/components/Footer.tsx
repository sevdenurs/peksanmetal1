import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="f">
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <Logo />
            <p>
              Tarihi konaklardan çağdaş mimariye 46 yıldır döktüğümüz, cilaladığımız ve elle tamamladığımız pirinç kapı kolu, tokmak ve aksesuarlar.
            </p>
          </div>

          <div className="f-col">
            <h5>Galeri</h5>
            <ul>
              <li><a href="/galeri">Kapı Kolları</a></li>
              <li><a href="/galeri">Tokmaklar</a></li>
              <li><a href="/galeri">Sürgü &amp; Mandal</a></li>
              <li><a href="/galeri">Kilit Plakaları</a></li>
            </ul>
          </div>

          <div className="f-col">
            <h5>İletişim</h5>
            <ul>
              <li><a href="#contact">Bize ulaşın</a></li>
              <li><a href="#contact">Özel sipariş</a></li>
            </ul>
          </div>
        </div>

        <div className="f-bottom">
          <div>© {new Date().getFullYear()} Peksan Metal San. Tic. Ltd. Şti.</div>
          <div className="f-social">
            <a href="https://www.instagram.com/peksanmetal" rel="noopener noreferrer" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/peksanmetal" rel="noopener noreferrer" target="_blank">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
