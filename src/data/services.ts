export type Service = {
  title: string;
  description: string;
  points: string[];
  symbol: string;
  href: string;
  linkLabel: string;
};

export const services: Service[] = [
  {
    title: "Landing page",
    description:
      "Jedna strona pod jedną usługę, kampanię albo nową ofertę: oferta, realizacje i prosta droga do kontaktu. Od 1000 zł, gotowa w 1–2 tygodnie.",
    points: ["jedna oferta", "wezwanie do działania", "1–2 tygodnie"],
    symbol: "◎",
    href: "/landing-page/",
    linkLabel: "Więcej o landing page",
  },
  {
    title: "Strona firmowa",
    description:
      "Pełna strona Twojej firmy: podstrony usług, struktura pod Google i wygodna wersja na telefon. Od 2000 zł, gotowa w 3–4 tygodnie.",
    points: ["podstrony usług", "struktura pod SEO", "wersja mobilna"],
    symbol: "</>",
    href: "/kontakt/",
    linkLabel: "Napisz WYCENA",
  },
  {
    title: "Opieka i rozwój",
    description:
      "Zmiany, aktualizacje i rozwój strony po starcie, żeby nie stała w miejscu. W abonamencie od 150 zł miesięcznie.",
    points: ["zmiany", "aktualizacje", "rozwój"],
    symbol: "↗",
    href: "/opieka-i-rozwoj-strony/",
    linkLabel: "Więcej o opiece",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  effect: string;
  details: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Poznajemy",
    description: "Rozmawiamy o Twojej firmie, klientach i o tym, co strona ma załatwić.",
    effect: "Efekt: wiesz, który pakiet ma sens i w jakich widełkach cenowych się zmieścisz.",
    details:
      "Zaczynamy od krótkiej rozmowy. Pytamy, czym się zajmujesz, kto jest Twoim klientem i z czym dziś do Ciebie przychodzi. Na tej podstawie dobieramy pakiet: landing page, stronę firmową albo opiekę nad istniejącą stroną.",
  },
  {
    number: "02",
    title: "Projektujemy",
    description: "Układamy strukturę, treści i wygląd strony pod Twoją ofertę.",
    effect: "Efekt: widzisz projekt strony, zanim powstanie pierwsza linijka kodu.",
    details:
      "Planujemy, jakie sekcje i podstrony są potrzebne, w jakiej kolejności klient ma poznać ofertę i gdzie ma kliknąć, żeby się z Tobą skontaktować. Potem projektujemy wygląd dopasowany do Twojej marki.",
  },
  {
    number: "03",
    title: "Budujemy",
    description: "Kodujemy stronę, sprawdzamy ją na telefonie i komputerze, dopinamy szczegóły.",
    effect: "Efekt: gotowa, szybka strona, którą możesz sprawdzić przed publikacją.",
    details:
      "Zamieniamy projekt w działającą stronę. Dbamy o szybkie ładowanie, wygodną obsługę na telefonie i techniczne podstawy SEO, żeby strona miała szansę pojawiać się w Google.",
  },
  {
    number: "04",
    title: "Odpalamy",
    description: "Uruchamiamy stronę i pomagamy po starcie.",
    effect: "Efekt: strona działa i może zbierać zapytania od klientów.",
    details:
      "Publikujemy stronę i sprawdzamy, czy wszystko działa po starcie. Jeśli chcesz, żeby strona dalej się rozwijała, przechodzimy na opiekę i rozwój w abonamencie.",
  },
];
