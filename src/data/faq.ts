export type FaqItem = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export const priceFaq: FaqItem = {
  question: "Ile kosztuje strona internetowa?",
  answer:
    "Landing page kosztuje od 1000 zł, strona firmowa od 2000 zł, a opieka i rozwój strony od 150 zł miesięcznie. Dokładne widełki podajemy po kilku pytaniach o projekt i krótkiej rozmowie. Napisz WYCENA.",
  link: { label: "Ile kosztuje strona internetowa – artykuł", href: "/blog/ile-kosztuje-strona-internetowa/" },
};

export const durationFaq: FaqItem = {
  question: "Ile trwa realizacja?",
  answer:
    "Landing page jest gotowy w 1–2 tygodnie, strona firmowa w 3–4 tygodnie. Czas liczymy od momentu, w którym dostajemy od Ciebie materiały: teksty, zdjęcia i logo.",
  link: { label: "Ile trwa zrobienie strony – artykuł", href: "/blog/ile-trwa-zrobienie-strony-internetowej/" },
};

export const homeFaq: FaqItem[] = [priceFaq, durationFaq];
