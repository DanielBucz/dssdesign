"use client";

import { FormEvent, useId, useState } from "react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

type Variant = "audit" | "contact";
type Status = "idle" | "sending" | "success" | "error";

const variants = {
  audit: {
    subject: "Darmowy audyt strony — dssdesign.pl",
    submit: "Zamów darmowy audyt",
    success: "Dzięki! Odezwiemy się w ciągu 24 h z 3 konkretnymi poprawkami",
    event: "audit_form_submit",
  },
  contact: {
    subject: "Zapytanie ze strony — dssdesign.pl",
    submit: "Wyślij wiadomość",
    success: "Dzięki! Wiadomość dotarła. Odezwiemy się najszybciej, jak to możliwe.",
    event: "contact_form_submit",
  },
} as const;

export function LeadForm({ variant }: { variant: Variant }) {
  const id = useId();
  const config = variants[variant];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    // Pole-pułapka wypełniają tylko boty.
    if (data.botcheck) return;

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: siteConfig.web3formsKey,
          subject: config.subject,
          from_name: "dssdesign.pl",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      setStatus("success");
      trackEvent(config.event);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="lead-form-success" role="status">
        {config.success}
      </p>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      {variant === "audit" ? (
        <div className="lead-field">
          <label htmlFor={`${id}-website`}>Adres strony</label>
          <input
            id={`${id}-website`}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="np. twojafirma.pl"
            required
          />
        </div>
      ) : (
        <div className="lead-field">
          <label htmlFor={`${id}-name`}>Imię</label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="given-name" required />
        </div>
      )}

      <div className="lead-field">
        <label htmlFor={`${id}-email`}>E-mail</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required />
      </div>

      <div className="lead-field">
        <label htmlFor={`${id}-phone`}>
          Telefon <span>(opcjonalnie)</span>
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" />
      </div>

      {variant === "contact" && (
        <div className="lead-field">
          <label htmlFor={`${id}-message`}>Wiadomość</label>
          <textarea id={`${id}-message`} name="message" rows={5} required />
        </div>
      )}

      <input className="lead-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="lead-consent">
        <input id={`${id}-consent`} name="consent" type="checkbox" value="tak" required />
        <label htmlFor={`${id}-consent`}>
          Zgadzam się na kontakt w sprawie mojego zgłoszenia. Zasady przetwarzania danych opisuje{" "}
          <a href="/polityka-prywatnosci">polityka prywatności</a>.
        </label>
      </div>

      <button className="hero-cta lead-submit" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Wysyłanie…" : config.submit}</span>
        <span aria-hidden="true">→</span>
      </button>

      <p className="lead-form-error" role="alert">
        {status === "error" && (
          <>
            Nie udało się wysłać formularza. Spróbuj ponownie albo napisz na{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
