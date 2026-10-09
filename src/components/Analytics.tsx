"use client";

import { useEffect, useState } from "react";

const measurementId = "G-G7SH0HC47Y";
const storageKey = "dss-analytics-consent-v1";
type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    "ga-disable-G-G7SH0HC47Y"?: boolean;
  }
}

function startAnalytics() {
  window["ga-disable-G-G7SH0HC47Y"] = false;
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 60 * 60 * 24 * 180,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

function stopAnalytics() {
  window["ga-disable-G-G7SH0HC47Y"] = true;
  // Delete Analytics cookies across host-only and parent-domain scopes.
  const parts = location.hostname.split(".");
  const domains = ["", ...parts.map((_, index) => `; domain=${parts.slice(index).join(".")}`)];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}

export function Analytics() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch { /* Ask again when storage is unavailable. */ }
    if (saved === "granted" || saved === "denied") {
      setConsent(saved);
      if (saved === "granted") startAnalytics();
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;
    const trackContact = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      const href = link?.getAttribute("href") || "";
      const method = href.startsWith("tel:") ? "phone" : href.startsWith("mailto:") ? "email" : null;
      if (method) window.gtag?.("event", "contact_click", { contact_method: method });
    };
    document.addEventListener("click", trackContact);
    return () => document.removeEventListener("click", trackContact);
  }, [consent]);

  function choose(value: Consent) {
    try { localStorage.setItem(storageKey, value); } catch { /* The choice still applies to this page. */ }
    setConsent(value);
    setOpen(false);
    if (value === "granted") startAnalytics();
    else {
      stopAnalytics();
      // Unload an already running Google tag after withdrawing consent.
      if (consent === "granted") location.reload();
    }
  }

  return (
    <>
      <button className="analytics-settings" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="analytics-consent">
        Ustawienia prywatności
      </button>
      {open && (
        <section id="analytics-consent" className="analytics-consent" role="region" aria-labelledby="analytics-title">
          <h2 id="analytics-title">Czy możemy mierzyć odwiedziny?</h2>
          <p>Za Twoją zgodą użyjemy Google Analytics i plików cookie, by sprawdzać odwiedziny, źródła ruchu oraz kliknięcia telefonu i e-maila. Dane o korzystaniu ze strony trafią do Google. Analityka uruchomi się dopiero po akceptacji. Zgodę możesz wycofać w ustawieniach prywatności.</p>
          <div className="analytics-actions">
            <button type="button" onClick={() => choose("denied")}>Odrzucam</button>
            <button type="button" onClick={() => choose("granted")}>Akceptuję analitykę</button>
            {consent && <button type="button" onClick={() => setOpen(false)}>Zamknij</button>}
          </div>
        </section>
      )}
    </>
  );
}
