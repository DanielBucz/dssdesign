declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// gtag istnieje dopiero po zgodzie na analitykę, więc bez zgody zdarzenie nie jest wysyłane.
export function trackEvent(name: string, params?: Record<string, string>) {
  window.gtag?.("event", name, params);
}
