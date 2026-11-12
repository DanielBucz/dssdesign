export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  type: string;
  status?: "in-progress";
  /** false = case study dostępne pod swoim adresem, ale niepokazywane w portfolio (lista /projekty/, strona główna). */
  listed?: boolean;
  description: string;
  /** Jedno zdanie w języku branży klienta, widoczne na karcie projektu. */
  industry: string;
  /** Dopisek do H1 z frazą, np. „strona internetowa dla firmy transportowej”. */
  headline: string;
  seoTitle: string;
  seoDescription: string;
  /** Jedno zdanie o problemie klienta i rozwiązaniu, widoczne na karcie projektu w /projekty/. */
  summary?: string;
  /** Akapit o tym, jak powstawała strona (sekcja „Jak powstała strona”). */
  process?: string;
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
    // Wg Wiedzy o DSS projekt nie jest promowany w portfolio ani w social media.
    listed: false,
    category: "Web Design / SEO / Development",
    year: "2025",
    type: "Real Client Project",
    description:
      "Rozbudowana strona B2B dla firmy transportowo-spedycyjnej z Lublina, oparta o usługi, języki i content SEO.",
    industry: "Strona B2B dla firmy transportowej i spedycyjnej.",
    headline: "strona internetowa dla firmy transportowej",
    seoTitle: "Strona dla firmy transportowej",
    seoDescription:
      "Strona B2B dla firmy transportowo-spedycyjnej Trans Adviser z Lublina: usługi, wersje językowe i content SEO. Zobacz projekt i zamów wycenę.",
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
    summary:
      "Problem: klient chciał zobaczyć efekt i orientacyjną cenę, zanim zadzwoni. Rozwiązanie: realizacje przed i po oraz kalkulator wyceny na jednej stronie.",
    headline: "strona internetowa dla firmy detailingowej",
    seoTitle: "Strona dla firmy detailingowej",
    seoDescription:
      "Landing page dla Buczek Poleruje: detailing samochodowy w Lublinie z ofertą, realizacjami i kalkulatorem wyceny. Zobacz projekt i zamów wycenę.",
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
    type: "Real Client Project",
    description:
      "Strona pracowni ceramiki inspirowanej naturą — z kolekcjami, katalogiem prac i spokojną oprawą wizualną.",
    industry: "Strona dla pracowni ceramiki i rękodzieła.",
    summary:
      "Problem: dużo różnorodnych prac ręcznych bez jednego miejsca do ich pokazania. Rozwiązanie: kolekcje, kategorie i duże zdjęcia ceramiki, wygodne też na telefonie.",
    headline: "strona internetowa dla pracowni ceramiki",
    seoTitle: "Strona internetowa dla pracowni ceramiki",
    seoDescription:
      "Strona internetowa dla pracowni ceramiki Handmade by Martula art. Kolekcje inspirowane naturą, duże zdjęcia prac. Zamów bezpłatną wycenę strony.",
    cta: "Masz podobny projekt rękodzieła? Napisz WYCENA.",
    palette: "interior",
    imageSrc: "/images/case-studies/handmade-by-martula/home-hero.png",
    imageAlt:
      "Strona internetowa dla pracowni ceramiki Martula Art: nagłówek Ceramika inspirowana naturą i bukiet ceramicznych kwiatów.",
    gallery: [
      {
        src: "/images/case-studies/handmade-by-martula/selected-works.png",
        alt: "Sekcja Wybrane prace: ceramika ręcznie robiona, filiżanki z motywem domków i żółte świeczniki.",
        label: "Wybrane prace",
        orientation: "landscape",
      },
      {
        src: "/images/case-studies/handmade-by-martula/mobile-catalog.png",
        alt: "Katalog ceramiki ręcznie robionej na telefonie, z przyciskami kategorii prac.",
        label: "Katalog na telefonie",
        orientation: "portrait",
      },
    ],
    externalUrl: "https://martula-art.pl",
    challenge:
      "Pokazać charakter ręcznie tworzonej ceramiki i uporządkować różnorodne prace w czytelne kategorie oraz kolekcje inspirowane naturą.",
    solution:
      "Projekt łączy duże fotografie prac, wyraziste szeryfowe nagłówki i spokojne tło. Kolekcje oraz nawigacja po kategoriach pomagają odkrywać ceramiczne kwiaty, naczynia i formy dekoracyjne również na telefonie. Teksty mówią językiem marki: ceramiczne bukiety przedstawia hasło „Kwiaty, które nie więdną.”, a nie katalogowy opis produktu.",
    // TODO [WYNIK]: dopisać potwierdzony efekt strony Martula Art (zapytania, sprzedaż), jeśli będzie dostępny.
    effect:
      "Strona marki ceramicznej działa pod adresem martula-art.pl, z hasłem „Ceramika inspirowana naturą”. Prace są pogrupowane w kolekcje i kategorie, więc osoba szukająca konkretnej formy, np. kwiatów albo naczyń, nie musi przewijać całego dorobku pracowni. Katalog jest ułożony tak, żeby wygodnie przeglądać ceramikę na telefonie, a duże zdjęcia pokazują fakturę i kolor każdej pracy. Przy pracach, które się spodobały, strona prowadzi do kontaktu z pracownią.",
    process:
      "Strona powstała w czterech krokach: poznaliśmy pracownię i jej prace, zaprojektowaliśmy układ kolekcji i kategorii, zbudowaliśmy stronę z naciskiem na wersję mobilną i uruchomiliśmy ją pod własną domeną. Ten sam proces stosujemy przy każdej stronie dla rękodzieła, gdzie najważniejsze jest pokazanie prac, a nie długi opis oferty.",
    system: {
      typography:
        "Duże szeryfowe nagłówki zestawione z lekkim, czytelnym krojem bezszeryfowym w opisach i nawigacji.",
      colors:
        "Ciepła, złamana biel i głęboki brąz tworzą spokojne tło dla naturalnych faktur oraz kolorów ceramiki.",
      components:
        "Hero z fotografią, sekcja wybranych prac, kolekcje, przyciski kategorii i mobilny katalog prac.",
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
    summary:
      "Problem: klientki zaczynały rozmowę od pytania o cenę. Rozwiązanie: sekcja oferty z trzema pakietami i ceną przy każdym, żeby klientka wybrała pakiet, zanim napisze.",
    headline: "strona internetowa dla trenera personalnego",
    seoTitle: "Strona dla trenera personalnego",
    seoDescription:
      "Strona dla trenerki personalnej: trzy pakiety z ceną przy każdym, mniej pytań o cenę, więcej konkretnych zapytań. Zobacz projekt i zamów wycenę.",
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

/** Projekty pokazywane w portfolio (lista /projekty/, strona główna, nawigacja „Następny projekt”). */
export const listedProjects = projects.filter((project) => project.listed !== false);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
