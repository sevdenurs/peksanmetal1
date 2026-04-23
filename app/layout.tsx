import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.peksanmetal.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2a2018",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Peksan Metal — Pirinç Kapı Kolu, Tokmak & El İşçiliği Zanaat Atölyesi | İstanbul",
    template: "%s | Peksan Metal",
  },
  description:
    "1978'den beri İstanbul Karaköy'de el dökümü pirinç kapı kolu, bronz tokmak, mandal, sürgü ve özel üretim metal aksesuarlar. Konak, restorasyon ve otel projeleri için zanaatkâr el işçiliği.",
  applicationName: "Peksan Metal",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "pirinç kapı kolu",
    "el yapımı kapı kolu",
    "pirinç döküm",
    "pirinç döküm atölyesi",
    "bronz kapı tokmağı",
    "osmanlı kapı kolu",
    "antika kapı kolu",
    "özel üretim kapı kolu",
    "el işçiliği kapı aksesuarı",
    "konak kapı kolu",
    "saray kapı kolu",
    "restorasyon pirinç aksesuar",
    "arslan başı tokmak",
    "pirinç kilit plakası",
    "pirinç mandal",
    "pirinç sürgü",
    "kapı tokmağı",
    "dekoratif kapı aksesuarı",
    "İstanbul pirinç atölyesi",
    "Karaköy pirinç",
    "saf pirinç kol",
    "el dövmesi kilit",
    "özel tasarım metal aksesuar",
    "zanaatkâr pirinç",
    "el işçiliği metal",
    "Peksan Metal",
  ],
  authors: [{ name: "Peksan Metal", url: SITE_URL }],
  creator: "Peksan Metal",
  publisher: "Peksan Metal San. Tic. Ltd. Şti.",
  category: "Home & Garden / Architectural Hardware",
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Peksan Metal",
    title:
      "Peksan Metal — Pirinç Kapı Kolu & El İşçiliği Zanaat Atölyesi",
    description:
      "46 yıllık İstanbul atölyesi. El dökümü pirinç kapı kolu, tokmak, mandal, kilit ve özel üretim metal aksesuarlar. Konak ve restorasyon projelerine sanatkâr işçilik.",
    images: [
      {
        url: "/assets/hero-brass-bar.jpg",
        width: 1200,
        height: 1500,
        alt: "Peksan Metal el dökümü pirinç kapı kolu",
      },
      {
        url: "/assets/lion-head-knocker.jpg",
        width: 1200,
        height: 1600,
        alt: "Peksan Metal arslan başı pirinç kapı tokmağı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Peksan Metal — Pirinç Kapı Kolu & El İşçiliği Zanaat Atölyesi",
    description:
      "1978'den beri el dökümü pirinç kapı kolu, tokmak ve özel tasarım metal aksesuarlar. İstanbul Karaköy.",
    images: ["/assets/hero-brass-bar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  verification: {
    // google: "Google-Search-Console-Verification-Code",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}#organization`,
  name: "Peksan Metal",
  legalName: "Peksan Metal San. Tic. Ltd. Şti.",
  alternateName: "Peksan Metal Pirinç Döküm Atölyesi",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/hero-brass-bar.jpg`,
  image: `${SITE_URL}/assets/hero-brass-bar.jpg`,
  description:
    "1978'den beri İstanbul Karaköy'de el dökümü pirinç kapı kolu, bronz tokmak, mandal, sürgü ve özel üretim dekoratif metal aksesuarlar üreten üçüncü nesil zanaat atölyesi.",
  foundingDate: "1978",
  founders: [{ "@type": "Person", name: "Hüseyin Peksan" }],
  slogan: "Her kapının kendine has bir imzası vardır.",
  priceRange: "₺₺₺",
  telephone: "+902122521478",
  email: "info@peksanmetal.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kemeraltı Cd. No:42",
    addressLocality: "Karaköy",
    addressRegion: "İstanbul",
    postalCode: "34425",
    addressCountry: "TR",
  },
  areaServed: ["TR", "EU", "GCC", "Asia"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
      description: "Randevu ile",
    },
  ],
  sameAs: [
    "https://www.instagram.com/peksanmetal",
    "https://www.pinterest.com/peksanmetal",
    "https://www.houzz.com/pro/peksanmetal",
    "https://www.linkedin.com/company/peksanmetal",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "820",
    bestRating: "5",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pirinç kapı kolu" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pirinç kapı tokmağı" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bronz mandal & sürgü" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pirinç kilit plakası" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Özel üretim dekoratif metal" } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Peksan Metal",
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE_URL}#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
