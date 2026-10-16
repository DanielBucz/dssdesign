export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  /** Ścieżka w /public, np. "/images/testimonials/jan-kowalski.jpg" (kwadrat, min. 160×160 px). */
  photo?: string;
};

// Wpisz tu 1–3 prawdziwe opinie klientów (za ich zgodą). Pusta lista = sekcja „Opinie” jest ukryta.
// Przykład struktury:
// { quote: "Treść opinii…", name: "Imię Nazwisko", company: "Nazwa firmy", photo: "/images/testimonials/imie.jpg" },
export const testimonials: Testimonial[] = [];
