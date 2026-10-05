export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  type: string;
  status?: "in-progress";
  description: string;
  palette: "logistics" | "detailing" | "interior" | "mono" | "digital";
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
    slug: "buczek-poleruje",
    title: "Buczek Poleruje",
    category: "Landing Page / UX / Development",
    year: "2026",
    type: "Real Client Project",
    description:
      "Landing page dla detailingu samochodowego w Lublinie, z ofertą usług, realizacjami, kalkulatorem wyceny i ścieżką kontaktu.",
    palette: "detailing",
    imageSrc: "/images/case-studies/buczek-poleruje/effects-before-after.png",
    imageAlt:
      "Rzut sekcji efektów renowacji lamp na stronie Buczek Poleruje z porównaniem przed i po.",
    gallery: [
      {
        src: "/images/case-studies/buczek-poleruje/pricing-calculator.png",
        alt: "Rzut sekcji szybkiej wyceny renowacji lamp na stronie Buczek Poleruje.",
        label: "Kalkulator wyceny",
        orientation: "landscape",
      },
      {
        src: "/images/case-studies/buczek-poleruje/mobile-realization.png",
        alt: "Mobilny rzut karty realizacji i przycisków kontaktowych na stronie Buczek Poleruje.",
        label: "Wersja mobile",
        orientation: "portrait",
      },
    ],
    location: "Lublin",
    externalUrl: "https://buczekpoleruje.pl",
    challenge:
      "Lokalna usługa detailingowa potrzebowała strony, która szybko pokazuje efekt pracy, buduje zaufanie i prowadzi użytkownika do telefonu albo wiadomości na Instagramie.",
    solution:
      "Strona została oparta o mocne przykłady przed i po, prostą listę usług, orientacyjny kalkulator ceny oraz bezpośrednie CTA do kontaktu.",
    effect:
      "Powstała kompaktowa strona sprzedażowa, która pokazuje realny efekt usługi i skraca drogę od zainteresowania do umówienia terminu.",
    system: {
      typography:
        "Prosta, mocna typografia wspierająca krótkie komunikaty usługowe i szybkie skanowanie oferty.",
      colors:
        "Czerń, biel i metaliczne refleksy lakieru. Paleta buduje skojarzenie z czystym autem, połyskiem i pracą ręczną.",
      components:
        "Hero usługowy, realizacje przed i po, kafle usług, kalkulator wyceny, opinie i szybki kontakt.",
    },
    roles: ["Web Design", "UX", "Frontend", "Conversion flow"],
  },
  {
    slug: "handmade-by-martula-art",
    title: "Handmade by Martula art",
    category: "Web Design / UX / Development",
    year: "2026",
    type: "Projekt w trakcie",
    status: "in-progress",
    description:
      "Powstająca strona pracowni ceramiki inspirowanej naturą — z kolekcjami, katalogiem prac i spokojną oprawą wizualną.",
    palette: "interior",
    imageSrc: "/images/case-studies/handmade-by-martula/home-hero.png",
    imageAlt:
      "Widok strony Handmade by Martula z nagłówkiem Kwiaty, które zostają i zdjęciem błękitnych ceramicznych kwiatów.",
    gallery: [
      {
        src: "/images/case-studies/handmade-by-martula/collections.png",
        alt: "Widok kolekcji Handmade by Martula ze zdjęciami ceramicznych bukietów.",
        label: "Kolekcje — widok roboczy",
        orientation: "landscape",
      },
      {
        src: "/images/case-studies/handmade-by-martula/mobile-categories.png",
        alt: "Mobilny widok kategorii Formy dekoracyjne z opisem i wyborem kategorii ceramiki.",
        label: "Kategorie na telefonie — widok roboczy",
        orientation: "portrait",
      },
    ],
    challenge:
      "Pokazać charakter ręcznie tworzonej ceramiki i uporządkować różnorodne prace w czytelne kategorie oraz kolekcje inspirowane naturą.",
    solution:
      "Projekt łączy duże fotografie prac, wyraziste szeryfowe nagłówki i spokojne tło. Kolekcje oraz nawigacja po kategoriach pomagają odkrywać ceramiczne kwiaty, naczynia i formy dekoracyjne również na telefonie.",
    effect:
      "Projekt jest w trakcie realizacji. Prezentowane widoki pokazują aktualny kierunek wizualny strony głównej, kolekcji i mobilnego katalogu prac.",
    system: {
      typography:
        "Duże szeryfowe nagłówki zestawione z lekkim, czytelnym krojem bezszeryfowym w opisach i nawigacji.",
      colors:
        "Ciepła, złamana biel i ciemna zieleń tworzą tło dla naturalnych faktur oraz kolorów ceramiki.",
      components:
        "Hero z fotografią, galerie kolekcji, przyciski kategorii i mobilna nawigacja katalogu.",
    },
    roles: ["Web Design", "UX", "Development"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
