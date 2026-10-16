export type PricingPlan = {
  title: string;
  price: string;
  description: string;
  points: string[];
  duration?: string;
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    title: "Landing page",
    price: "od 1 000 zł",
    description: "Jedna strona sprzedażowa: oferta, realizacje, kontakt.",
    points: ["oferta", "realizacje", "kontakt"],
    duration: "1–2 tyg.",
  },
  {
    title: "Strona firmowa",
    price: "od 2 000 zł",
    description: "Podstrony usług, struktura pod SEO, wersja mobilna.",
    points: ["podstrony usług", "struktura pod SEO", "wersja mobilna"],
    duration: "3–4 tyg.",
    featured: true,
  },
  {
    title: "Rozwój i opieka",
    price: "od 150 zł / mies.",
    description: "Optymalizacja, zmiany, analityka.",
    points: ["optymalizacja", "zmiany", "analityka"],
  },
];
