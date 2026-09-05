export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  type: string;
  description: string;
  palette: "logistics" | "interior" | "mono" | "digital";
  imageSrc?: string;
  imageAlt?: string;
  gallery?: {
    src: string;
    alt: string;
    label: string;
    orientation?: "landscape" | "portrait";
  }[];
  location?: string;
  externalUrl?: string;
  challenge: string;
  solution: string;
  effect: string;
  system?: {
    typography: string;
    colors: string;
    components: string;
  };
  roles: string[];
};

export const projects: Project[] = [
  {
    slug: "trans-adviser",
    title: "Trans Adviser",
    category: "Web Design / SEO / Development",
    year: "2025",
    type: "Real Client Project",
    description:
      "Rozbudowana strona B2B dla firmy transportowo-spedycyjnej z Lublina, oparta o usługi, języki i content SEO.",
    palette: "logistics",
    imageSrc: "/images/case-studies/trans-adviser/home-hero.png",
    imageAlt:
      "Rzut strony głównej Adviser Solutions Polska z hero opartym o zdjęcie ciężarówek na drodze.",
    gallery: [
      {
        src: "/images/case-studies/trans-adviser/offer-section.png",
        alt: "Rzut sekcji oferty Adviser Solutions z podziałem na transport i fotowoltaikę.",
        label: "Sekcja oferty",
        orientation: "landscape",
      },
      {
        src: "/images/case-studies/trans-adviser/mobile-outsourcing.png",
        alt: "Mobilny rzut sekcji o outsourcingu na stronie Adviser Solutions.",
        label: "Wersja mobile",
        orientation: "portrait",
      },
    ],
    location: "Lublin",
    externalUrl: "https://trans-adviser.pl",
    challenge:
      "Firma z szeroką ofertą transportu, spedycji, kruszyw i fotowoltaiki potrzebowała strony, która porządkuje wiele usług bez utraty czytelności i wspiera widoczność w wyszukiwarce.",
    solution:
      "Projekt został oparty o rozbudowaną architekturę podstron usługowych, wersje językowe, blog oraz klarowny podział oferty dla klientów B2B i indywidualnych.",
    effect:
      "Powstała strona, która może rozwijać się razem z ofertą firmy: zbiera usługi w jednym systemie, buduje wiarygodność i tworzy bazę pod dalszy content SEO.",
    system: {
      typography:
        "Prosta, użytkowa typografia podporządkowana czytelności długich opisów usług i szybkiej nawigacji po ofercie.",
      colors:
        "Stalowy niebieski, biel i czerń. Paleta bliższa branży transportowej niż kreatywnemu neonowi DSS.",
      components:
        "Hero z fotografią transportową, sekcje usługowe, listy ofertowe, blog i układ pod rozbudowę treści SEO.",
    },
    roles: ["Web Design", "UX", "Development", "SEO structure"],
  },
  {
    slug: "remonter",
    title: "Remonter",
    category: "Web Design / Development",
    year: "2026",
    type: "Concept Project / Redesign Study",
    description:
      "Premium redesign strony dla firmy od kompleksowego wykańczania wnętrz w Lublinie.",
    palette: "interior",
    location: "Lublin",
    challenge:
      "Strona firmy wykończeniowej powinna szybko budować zaufanie, pokazać standard pracy i prowadzić do zapytania bez nadmiaru treści.",
    solution:
      "Koncepcja opiera się na ciepłej palecie wnętrzarskiej, dużych modułach zdjęciowych, krótkich argumentach sprzedażowych i klarownej ścieżce kontaktu.",
    effect:
      "Powstał kierunek premium dla redesignu, który nie udaje dużej korporacji, tylko pokazuje rzemiosło, porządek i jakość wykonania.",
    roles: ["Strategia", "UX", "Web Design", "Frontend"],
  },
  {
    slug: "minus",
    title: "Minus",
    category: "Branding / Web Design",
    year: "2026",
    type: "Studio Concept",
    description:
      "Ciemny system wizualny dla marki produktowej z mocnym, minimalistycznym storefrontem.",
    palette: "mono",
    challenge:
      "Marka produktowa potrzebowała ascetycznego kierunku, który wyróżnia opakowania i nie rozprasza użytkownika zbędną narracją.",
    solution:
      "Zaprojektowaliśmy ciemny układ storefrontu, prostą hierarchię kolekcji i surowy język wizualny z dużym naciskiem na produkt.",
    effect:
      "Koncept daje marce bardziej galeryjny charakter i ułatwia późniejsze rozwinięcie kampanii oraz sklepu.",
    roles: ["Branding", "Web Design", "Art Direction"],
  },
  {
    slug: "nova",
    title: "Nova",
    category: "Strategia / UX/UI",
    year: "2026",
    type: "Studio Concept",
    description:
      "Cyfrowy koncept dla produktu inwestycyjnego, oparty o prosty onboarding i wyrazisty mobile UI.",
    palette: "digital",
    challenge:
      "Produkt cyfrowy wymagał lżejszego wejścia w temat inwestowania oraz interfejsu, który nie wygląda jak generyczny fintech.",
    solution:
      "Koncepcja prowadzi użytkownika przez krótkie ekrany decyzyjne, mocny mobile first UI i spokojniejszy język komunikacji.",
    effect:
      "Powstał kierunek, który łączy wiarygodność z bardziej współczesnym, zapamiętywalnym doświadczeniem.",
    roles: ["Strategia", "UX/UI", "Prototype"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
