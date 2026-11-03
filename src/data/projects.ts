export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  type: string;
  status?: "in-progress";
  description: string;
  /** Jedno zdanie w języku branży klienta, widoczne na karcie projektu. */
  industry: string;
  /** Dopisek do H1 z frazą, np. „strona internetowa dla firmy transportowej”. */
  headline: string;
  seoTitle: string;
  seoDescription: string;
  /** Tekst CTA do /kontakt/ na końcu case study. */
  cta: string;
  note?: string;
  proof?: string;
  related?: { label: string; href: string };
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
    industry: "Strona B2B dla firmy transportowej i spedycyjnej.",
    headline: "strona internetowa dla firmy transportowej",
    seoTitle: "Strona dla firmy transportowej",
    seoDescription:
      "Zobacz, jak zaprojektowaliśmy stronę B2B dla firmy transportowo-spedycyjnej Trans Adviser z Lublina: usługi, języki i content SEO. Napisz WYCENA.",
    cta: "Potrzebujesz podobnej strony dla swojej firmy? Napisz WYCENA.",
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
      "Firma z szeroką ofertą transportu, spedycji, kruszyw i fotowoltaiki potrzebowała strony, która porządkuje wiele usług bez utraty czytelności i wspiera widoczność w wyszukiwarce. Firma transportowa czy spedycyjna pracuje głównie z klientami B2B, którzy przed zapytaniem chcą szybko sprawdzić zakres usług i wiarygodność przewoźnika.",
    solution:
      "Projekt został oparty o rozbudowaną architekturę podstron usługowych, wersje językowe, blog oraz klarowny podział oferty dla klientów B2B i indywidualnych.",
    // TODO [WYNIK]: dopisać potwierdzony efekt strony Trans Adviser (np. zapytania, widoczność), jeśli będzie dostępny.
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
    type: "Własna marka",
    description:
      "Landing page dla detailingu samochodowego w Lublinie, z ofertą usług, realizacjami, kalkulatorem wyceny i ścieżką kontaktu.",
    industry: "Landing page dla lokalnej usługi detailingu samochodowego.",
    headline: "strona internetowa dla firmy detailingowej",
    seoTitle: "Strona dla firmy detailingowej",
    seoDescription:
      "Landing page dla Buczek Poleruje: detailing samochodowy w Lublinie z ofertą usług, realizacjami i kalkulatorem wyceny. Zobacz projekt i napisz WYCENA.",
    cta: "Potrzebujesz podobnej strony dla swojej usługi? Napisz WYCENA.",
    note:
      "Buczek Poleruje to własna marka właściciela studia, a nie zewnętrzny klient. Pokazujemy ją, bo to działający landing page, na którym sprawdzamy w praktyce to, co proponujemy klientom.",
    related: { label: "Zobacz pakiet landing page", href: "/landing-page/" },
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
    // TODO [WYNIK]: dopisać potwierdzony efekt strony Buczek Poleruje (liczby zapytań, telefonów), jeśli będzie dostępny.
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
    industry: "Strona dla pracowni ceramiki i rękodzieła.",
    headline: "strona internetowa dla pracowni ceramiki (projekt w trakcie)",
    seoTitle: "Strona dla pracowni ceramiki",
    seoDescription:
      "Projekt w trakcie: strona dla pracowni ceramiki Handmade by Martula art, z kolekcjami inspirowanymi naturą i dużymi zdjęciami prac. Premiera wkrótce.",
    cta: "Masz podobny projekt rękodzieła? Napisz WYCENA.",
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
    // Po premierze: usunąć status "in-progress" i dopisać prawdziwy efekt strony.
    effect:
      "Projekt jest w trakcie realizacji. Strona marki ceramicznej powstaje pod adresem martula-art.pl, z hasłem „Kwiaty, które zostają”. Prezentowane widoki pokazują aktualny kierunek wizualny strony głównej, kolekcji i mobilnego katalogu prac.",
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
  {
    slug: "trenerka-personalna",
    title: "Trenerka Patrycja",
    category: "Web Design / Oferta / Development",
    // TODO: potwierdzić rok realizacji.
    year: "2026",
    type: "Real Client Project",
    description:
      "Strona trenerki personalnej z ofertą w trzech pakietach, ceną przy każdym i osobnym przyciskiem kontaktu.",
    industry: "Strona dla trenera personalnego z cennikiem pakietów.",
    headline: "strona internetowa dla trenera personalnego",
    seoTitle: "Strona dla trenera personalnego",
    seoDescription:
      "Zobacz, jak zaprojektowaliśmy stronę dla trenerki personalnej: oferta z trzema pakietami i ceną przy każdym. Mniej pytań o cenę, więcej konkretnych zapytań. Napisz WYCENA.",
    cta: "Masz podobny problem z pytaniami o cenę? Napisz WYCENA.",
    proof:
      "Stronę pokazaliśmy krok po kroku w karuzeli case study na naszym Instagramie.",
    palette: "digital",
    imageSrc: "/images/case-studies/trenerka-personalna/home-hero.png",
    imageAlt:
      "Rzut strony głównej Patrycji Pasiecznej z nagłówkiem Trening, który pasuje do Ciebie i zdjęciem trenerki na siłowni.",
    gallery: [
      {
        src: "/images/case-studies/trenerka-personalna/offer-section.png",
        alt: "Rzut sekcji Oferta współpracy z trzema pakietami, ceną przy każdym i przyciskiem Porozmawiajmy.",
        label: "Oferta z cenami",
        orientation: "landscape",
      },
      {
        src: "/images/case-studies/trenerka-personalna/mobile-offer.png",
        alt: "Mobilny rzut sekcji oferty z pierwszym pakietem i ceną 700 zł.",
        label: "Wersja mobile",
        orientation: "portrait",
      },
    ],
    location: "Lublin",
    externalUrl: "https://patrycjapasieczna.pl",
    challenge:
      "Klientki pisały do trenerki personalnej Patrycji z pytaniem „ile to kosztuje?”, zanim poznały jej ofertę. Rozmowa zaczynała się od ceny, a nie od tego, czego klientka potrzebuje.",
    solution:
      "Zaprojektowaliśmy sekcję oferty z trzema pakietami, ceną przy każdym i osobnym przyciskiem do każdego pakietu. Klientka może sama wybrać pakiet, zanim napisze.",
    // TODO [WYNIK]: dopisać liczby efektu, kiedy będą dostępne od klientki.
    effect:
      "Mniej pytań o cenę i więcej konkretnych zapytań. Klientka widzi pakiety i ceny, zanim napisze, więc rozmowa zaczyna się od tego, czego potrzebuje.",
    system: {
      typography:
        "Elegancki szeryfowy krój w nagłówkach i prosty bezszeryfowy w opisach. Ceny pakietów są wyraźnie pogrubione.",
      colors:
        "Ciepły beż, złamana biel i pudrowy róż. Spokojna, kobieca paleta zamiast agresywnej estetyki siłowni.",
      components:
        "Hero ze zdjęciem trenerki, sekcja o mnie, karty pakietów z ceną i przyciskiem, Instagram i formularz kontaktu.",
    },
    roles: ["Web Design", "UX", "Development"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
