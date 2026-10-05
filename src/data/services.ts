export type Service = {
  title: string;
  description: string;
  points: string[];
  symbol: string;
};

export const services: Service[] = [
  {
    title: "Strategia",
    description: "Planujemy strukturę strony, treści i ścieżkę od poznania oferty do kontaktu. Zaczynamy od celów Twojej firmy i potrzeb klientów.",
    points: ["analiza", "positioning", "struktura", "UX"],
    symbol: "◎",
  },
  {
    title: "Design",
    description: "Projektujemy strony internetowe i interfejsy UX/UI dopasowane do marki. Dbamy o czytelność oferty i wygodną obsługę na telefonie oraz komputerze.",
    points: ["Web Design", "UI/UX", "Branding", "Design System"],
    symbol: "✧",
  },
  {
    title: "Development",
    description: "Wdrażamy strony firmowe i landing page. Łączymy responsywny układ, sprawną nawigację i techniczne podstawy SEO.",
    points: ["strony internetowe", "landing pages", "frontend", "wdrożenia"],
    symbol: "</>",
  },
  {
    title: "Rozwój",
    description: "Rozwijamy istniejące strony: porządkujemy treści, usprawniamy interfejs i optymalizujemy wydajność. Pomagamy mierzyć efekty zmian.",
    points: ["optymalizacja", "wsparcie", "analityka", "iteracje"],
    symbol: "↗",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Poznajemy",
    description: "Rozmawiamy o Twoim biznesie, celach i potrzebach.",
  },
  {
    number: "02",
    title: "Projektujemy",
    description: "Tworzymy strategię, koncept i projekt dopasowany do Ciebie.",
  },
  {
    number: "03",
    title: "Budujemy",
    description: "Kodujemy, testujemy i dopracowujemy każdy detal.",
  },
  {
    number: "04",
    title: "Odpalamy",
    description: "Uruchamiamy projekt i wspieramy po starcie.",
  },
];
