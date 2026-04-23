"use client";

import { useState, FormEvent } from "react";

const PROJECT_TYPES = [
  "Konut",
  "Restorasyon",
  "Otel / Ticari",
  "Özel tasarım",
  "Toplu sipariş",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [chips, setChips] = useState<Set<string>>(new Set(["Konut"]));
  const [status, setStatus] = useState<Status>("idle");

  const toggleChip = (c: string) => {
    setChips((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const data = new FormData(e.currentTarget);
    data.set("projectTypes", Array.from(chips).join(", "));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setChips(new Set(["Konut"]));
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      className="contact-form reveal"
      onSubmit={onSubmit}
      aria-label="Teklif ve proje formu"
      noValidate
    >
      <div className="form-head">
        <h3>Teklif &amp; proje formu</h3>
        <span className="step-tag">— 03 Adım</span>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-name">Ad Soyad</label>
          <input id="cf-name" name="name" type="text" placeholder="Adınız" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Telefon</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            placeholder="+90 5__ ___ __ __"
            required
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-email">E-posta</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="siz@eposta.com"
          required
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <div className="field">
        <label>Proje Türü</label>
        <div className="chips" role="group" aria-label="Proje türü seçin">
          {PROJECT_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              className={`chip${chips.has(t) ? " on" : ""}`}
              aria-pressed={chips.has(t)}
              onClick={() => toggleChip(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-budget">Tahmini Bütçe</label>
          <select id="cf-budget" name="budget" defaultValue="">
            <option value="" disabled>
              Seçiniz
            </option>
            <option>25.000 TL altı</option>
            <option>25 – 75.000 TL</option>
            <option>75 – 250.000 TL</option>
            <option>250.000 TL üzeri</option>
            <option>Henüz belirsiz</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-deadline">Teslim Tarihi</label>
          <select id="cf-deadline" name="deadline" defaultValue="">
            <option value="" disabled>
              Seçiniz
            </option>
            <option>2 – 4 hafta</option>
            <option>1 – 2 ay</option>
            <option>3 – 6 ay</option>
            <option>Esnek</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-msg">Projenizden bahsedin</label>
        <textarea
          id="cf-msg"
          name="message"
          placeholder="Kaç parça, hangi stiller, varsa referans görseller — ne kadar detay o kadar iyi."
        />
      </div>

      {/* honeypot */}
      <div style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="cf-hp">Bu alanı boş bırakın</label>
        <input id="cf-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="submit-row">
        <p className="small">
          Formunuzu gönderdiğinizde usta başımız Hüseyin bey sizi 24 saat içinde arar.
        </p>
        <button type="submit" className="btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Gönderiliyor…" : status === "success" ? "✓ Teşekkürler" : "Gönder"}
          <svg className="arrow" width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {status === "success" && (
        <div className="form-status" role="status">
          Teşekkürler — en geç 24 saat içinde size döneceğiz.
        </div>
      )}
      {status === "error" && (
        <div className="form-status error" role="alert">
          Mesajınız gönderilemedi. Lütfen info@peksanmetal.com adresinden yazın.
        </div>
      )}
    </form>
  );
}
