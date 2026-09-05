export type Service = {
  title: string;
  description: string;
  points: string[];
  symbol: string;
};

export const services: Service[] = [
  {
    title: "Strategia",
    description: "Badamy, analizujemy i planujemy działania, które mają sens.",
    points: ["analiza", "positioning", "struktura", "UX"],
    symbol: "◎",
  },
  {
    title: "Design",
    description: "Projektujemy identyfikacje i cyfrowe doświadczenia, które przyciągają uwagę.",
    points: ["Web Design", "UI/UX", "Branding", "Design System"],
    symbol: "✧",
  },
  {
    title: "Development",
    description: "Budujemy szybkie, stabilne i nowoczesne strony internetowe.",
    points: ["strony internetowe", "landing pages", "frontend", "wdrożenia"],
    symbol: "</>",
  },
  {
    title: "Rozwój",
    description: "Pomagamy rozwijać marki w internecie i osiągać zamierzone cele.",
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
