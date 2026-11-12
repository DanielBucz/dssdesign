// Linki w treści: [tekst](/adres/), pogrubienia: **tekst** — renderuje je komponent RichText.

export type ArticleTable = {
  caption: string;
  head: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  table?: ArticleTable;
  list?: string[];
  after?: string[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  readingTime: string;
  lead: string;
  sections: ArticleSection[];
  faq?: ArticleFaq[];
  cta: string;
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "ile-kosztuje-strona-internetowa",
    title: "Ile kosztuje strona internetowa dla małej firmy?",
    seoTitle: "Ile kosztuje strona internetowa? Cennik",
    description:
      "Landing page od 1000 zł, strona firmowa od 2000 zł. Sprawdź, co wpływa na cenę strony internetowej i zamów bezpłatną wycenę dla swojej firmy.",
    date: "2026-11-03",
    readingTime: "5 min czytania",
    lead:
      "Krótko: u nas landing page kosztuje od 1000 zł, strona firmowa od 2000 zł, a opieka nad stroną od 150 zł miesięcznie. Poniżej wyjaśniamy, skąd biorą się te kwoty, co podnosi cenę i jak nie przepłacić.",
    sections: [
      {
        heading: "Cennik stron internetowych – ceny w skrócie",
        paragraphs: [
          "Pracujemy na trzech pakietach, bo większość małych firm usługowych potrzebuje jednego z nich:",
        ],
        table: {
          caption: "Cennik stron internetowych Dobrze się składa (ceny końcowe)",
          head: ["Pakiet", "Cena", "Czas realizacji"],
          rows: [
            ["[Landing page](/landing-page/)", "od 1000 zł", "1–2 tygodnie"],
            ["Strona firmowa", "od 2000 zł", "3–4 tygodnie"],
            ["[Opieka i rozwój](/opieka-i-rozwoj-strony/)", "od 150 zł / mies.", "na bieżąco"],
          ],
        },
        list: [
          "[Landing page](/landing-page/) od 1000 zł: jedna strona pod jedną usługę albo kampanię, gotowa w 1–2 tygodnie.",
          "Strona firmowa od 2000 zł: podstrony usług, struktura pod Google i wersja mobilna, gotowa w 3–4 tygodnie.",
          "[Opieka i rozwój](/opieka-i-rozwoj-strony/) od 150 zł miesięcznie: zmiany, aktualizacje i rozwój strony po starcie.",
        ],
        after: [
          "To ceny końcowe, bez doliczanego VAT. Studio działa w ramach działalności nierejestrowanej, więc kwota z wyceny to kwota, którą płacisz.",
        ],
      },
      {
        heading: "Od czego zależy cena strony internetowej",
        paragraphs: [
          "Słowo „od” w cenniku nie jest wybiegiem. Dwie strony firmowe mogą różnić się zakresem tak mocno, że trudno je porównać. Najwięcej zmieniają te rzeczy:",
        ],
        list: [
          "Liczba podstron. Strona z trzema usługami to mniej pracy niż strona z piętnastoma, z których każda ma własny opis.",
          "Treści. Jeśli masz gotowe teksty i zdjęcia, idzie szybciej. Jeśli trzeba je napisać albo uporządkować, to dodatkowa praca.",
          "Funkcje. Kalkulator wyceny, wersje językowe, blog czy formularz z kilkoma krokami podnoszą cenę, bo trzeba je zaprojektować i przetestować.",
          "Projekt graficzny. Strona dopasowana do istniejącej marki to inna praca niż strona, przy której dopiero ustalamy kolory i styl.",
        ],
      },
      {
        heading: "Jak to wygląda na przykładach",
        paragraphs: [
          "[Buczek Poleruje](/projekty/buczek-poleruje/) to landing page usługi detailingu: realizacje przed i po, lista usług, kalkulator wyceny i szybki kontakt. Jedna strona, jedna oferta.",
          "[Trans Adviser](/projekty/trans-adviser/) to rozbudowana strona B2B dla firmy transportowej: wiele podstron usługowych, wersje językowe i blog. Taki zakres wychodzi wyraźnie ponad pakiet startowy, bo każda usługa i każdy język to dodatkowe treści i podstrony.",
        ],
      },
      {
        heading: "Koszty, o które warto zapytać od razu",
        paragraphs: [
          "Sama strona to nie wszystko. Przy wycenie dopytaj o rzeczy, które pojawiają się po starcie:",
        ],
        list: [
          "Domena i hosting. To osobne, zwykle roczne opłaty u dostawcy. Przy wycenie mówimy, czego potrzebujesz i ile mniej więcej to wyniesie.",
          "Zmiany po publikacji. Nowa usługa, nowy cennik, nowe zdjęcia. Warto wiedzieć, kto i za ile je wprowadzi.",
          "Własność strony. Upewnij się, że domena jest zarejestrowana na Ciebie, a nie na wykonawcę.",
        ],
        after: [
          "**Ile kosztuje landing page?** U nas od 1000 zł. To jedna strona pod jedną usługę albo kampanię, z cennikiem lub kalkulatorem i przyciskiem kontaktu. Szczegóły pakietu znajdziesz na stronie [landing page](/landing-page/).",
          "**Ile kosztuje strona firmowa z kilkoma podstronami?** Od 2000 zł za stronę z osobnymi podstronami usług, informacjami o firmie i kontaktem. Każda kolejna usługa z własnym opisem, wersja językowa czy blog podnoszą cenę.",
          "**Ile kosztuje opieka nad stroną po starcie?** Od 150 zł miesięcznie za zmiany, aktualizacje i rozwój w ramach [opieki i rozwoju strony](/opieka-i-rozwoj-strony/).",
        ],
      },
      {
        heading: "Tania strona czy strona, która przynosi klientów",
        paragraphs: [
          "Najtańsza strona to ta, która zarabia na siebie. Strona za kilkaset złotych, z której nikt nie dzwoni, kosztuje więcej niż strona za 2000 zł, która co miesiąc przynosi kilka zapytań.",
          "Dlatego zanim porównasz ceny, zapytaj wykonawcę, jak strona ma prowadzić klienta do kontaktu. Dobra odpowiedź to konkret: gdzie będzie cena, gdzie przycisk, co klient zobaczy na telefonie.",
        ],
      },
      {
        heading: "Jak dostać wycenę",
        paragraphs: [
          "**[Zamów bezpłatną wycenę](/kontakt/)** przez formularz kontaktowy albo napisz WYCENA na Instagramie lub Facebooku. Zadamy 4 krótkie pytania o projekt, podamy widełki cenowe według pakietów, a potem porozmawiamy 15 minut o szczegółach.",
          "Chcesz wiedzieć, jak wygląda współpraca po wycenie? Opisujemy to w artykule [proces tworzenia strony internetowej](/blog/proces-tworzenia-strony-internetowej/), a terminy w artykule [ile trwa zrobienie strony internetowej](/blog/ile-trwa-zrobienie-strony-internetowej/).",
        ],
      },
    ],
    cta: "Chcesz wiedzieć, ile będzie kosztować Twoja strona? Napisz WYCENA.",
    related: [
      "proces-tworzenia-strony-internetowej",
      "ile-trwa-zrobienie-strony-internetowej",
      "landing-page-czy-strona-firmowa",
    ],
  },
  {
    slug: "landing-page-czy-strona-firmowa",
    title: "Landing page czy strona firmowa – która wersja jest dla Twojej firmy?",
    seoTitle: "Landing page czy strona firmowa?",
    description:
      "Landing page czy strona firmowa? Porównujemy cenę, czas realizacji i zastosowanie, żeby mała firma usługowa wybrała wersję dla swojej oferty.",
    date: "2026-11-03",
    readingTime: "4 min czytania",
    lead:
      "Jeśli masz jedną usługę i chcesz szybko zacząć, zwykle wystarczy landing page. Jeśli masz kilka usług i chcesz, żeby klienci znajdowali Cię w Google na różne zapytania, potrzebujesz strony firmowej. Poniżej szczegóły.",
    sections: [
      {
        heading: "Czym jest landing page",
        paragraphs: [
          "Landing page to jedna strona pod jedną ofertę. Klient przewija ją od góry do dołu: dowiaduje się, co robisz, widzi efekty, cenę albo kalkulator i trafia na przycisk kontaktu. Nie ma menu z dziesięcioma zakładkami, bo nie ma dokąd uciekać.",
          "U nas [landing page](/landing-page/) kosztuje od 1000 zł i jest gotowy w 1–2 tygodnie od przekazania materiałów.",
        ],
      },
      {
        heading: "Czym jest strona firmowa",
        paragraphs: [
          "Strona firmowa ma kilka podstron: osobne strony usług, informacje o firmie, realizacje i kontakt. Każda podstrona usługi może odpowiadać na inne zapytanie w Google, np. „transport kruszyw” i „spedycja międzynarodowa”.",
          "U nas strona firmowa kosztuje od 2000 zł i powstaje w 3–4 tygodnie.",
        ],
      },
      {
        heading: "Kiedy wybrać landing page",
        paragraphs: [],
        list: [
          "Sprzedajesz jedną główną usługę, np. renowację lamp, treningi personalne czy sesje zdjęciowe.",
          "Startujesz z nową ofertą albo kampanią reklamową i chcesz szybko mieć gdzie kierować ruch.",
          "Klienci trafiają do Ciebie głównie z Instagrama, Facebooka albo z polecenia, a strona ma ich przekonać i doprowadzić do kontaktu.",
          "Masz ograniczony budżet i wolisz zacząć od czegoś, co działa, niż czekać na dużą stronę.",
        ],
      },
      {
        heading: "Kiedy wybrać stronę firmową",
        paragraphs: [],
        list: [
          "Masz kilka różnych usług i każda zasługuje na osobny opis.",
          "Chcesz, żeby klienci znajdowali Cię w Google na różne frazy, a nie tylko po nazwie firmy.",
          "Pracujesz z klientami B2B, którzy przed zapytaniem sprawdzają firmę dokładnie.",
          "Planujesz rozwijać treści, np. blog albo wersje językowe.",
        ],
      },
      {
        heading: "Przykłady z naszych realizacji",
        paragraphs: [
          "[Buczek Poleruje](/projekty/buczek-poleruje/) to landing page. Jedna usługa, mocne zdjęcia przed i po, kalkulator wyceny i bezpośredni kontakt. Więcej nie było potrzebne.",
          "[Trans Adviser](/projekty/trans-adviser/) to strona firmowa. Transport, spedycja, kruszywa i fotowoltaika to zbyt wiele usług na jedną stronę, więc każda dostała swoją podstronę, a całość ma wersje językowe i blog.",
        ],
      },
      {
        heading: "Czy można zacząć od landing page i rozbudować go później",
        paragraphs: [
          "Często tak. Landing page dobrze sprawdza się na start, a gdy oferta rośnie, można dołożyć podstrony usług i zbudować z niego stronę firmową. Warto powiedzieć o tym planie od razu, przy wycenie, żeby projekt od początku był na to gotowy.",
          "Nie wiesz, co wybrać? Napisz WYCENA i opisz krótko swoją firmę. Podpowiemy, która wersja ma sens, zanim cokolwiek zapłacisz.",
        ],
      },
    ],
    cta: "Nie wiesz, czy wystarczy landing page? Napisz WYCENA, podpowiemy.",
    related: ["ile-kosztuje-strona-internetowa", "proces-tworzenia-strony-internetowej"],
  },
  {
    slug: "proces-tworzenia-strony-internetowej",
    title: "Jak wygląda proces tworzenia strony internetowej krok po kroku?",
    seoTitle: "Proces tworzenia strony internetowej",
    description:
      "Proces tworzenia strony internetowej w 4 etapach: poznajemy, projektujemy, budujemy, odpalamy. Sprawdź, co przygotować, i zamów bezpłatną wycenę.",
    date: "2026-11-03",
    readingTime: "5 min czytania",
    lead:
      "Tworzenie strony internetowej dzielimy na cztery etapy: poznajemy, projektujemy, budujemy, odpalamy. Każdy kończy się konkretnym efektem, więc wiesz, na czym stoisz, zanim przejdziemy dalej.",
    sections: [
      {
        heading: "Etapy tworzenia strony internetowej w skrócie",
        paragraphs: [],
        list: [
          "**Poznajemy** – efekt: ustalony zakres, pakiet i struktura strony.",
          "**Projektujemy** – efekt: projekt graficzny zaakceptowany przez Ciebie.",
          "**Budujemy** – efekt: gotowa, przetestowana strona do przejrzenia.",
          "**Odpalamy** – efekt: strona działa pod Twoją domeną, a my wspieramy Cię po starcie.",
        ],
      },
      {
        heading: "Etap 1: Poznajemy",
        paragraphs: [
          "Zaczynamy od rozmowy. Pytamy, czym się zajmujesz, kim są Twoi klienci, skąd dziś do Ciebie trafiają i o co najczęściej pytają, zanim zamówią usługę.",
          "Na tej podstawie dobieramy pakiet: landing page, stronę firmową albo opiekę nad stroną, którą już masz. Efekt etapu: wiesz, który pakiet ma sens i w jakich widełkach cenowych się zmieścisz.",
        ],
      },
      {
        heading: "Etap 2: Projektujemy – akceptujesz projekt, zanim zaczniemy kodować",
        paragraphs: [
          "Planujemy strukturę: jakie sekcje i podstrony są potrzebne, w jakiej kolejności klient poznaje ofertę i gdzie ma kliknąć, żeby się z Tobą skontaktować. Dopiero potem projektujemy wygląd dopasowany do Twojej marki.",
          "Efekt etapu: widzisz projekt strony, zanim powstanie pierwsza linijka kodu. **Do budowy przechodzimy dopiero wtedy, gdy zaakceptujesz projekt graficzny.** Poprawki na tym etapie są najtańsze i najszybsze.",
        ],
      },
      {
        heading: "Etap 3: Budujemy",
        paragraphs: [
          "Zamieniamy projekt w działającą stronę. Sprawdzamy ją na telefonie i komputerze, dbamy o szybkie ładowanie i techniczne podstawy SEO, żeby strona miała szansę pojawiać się w Google.",
          "Efekt etapu: gotowa strona, którą możesz przejrzeć i sprawdzić przed publikacją.",
        ],
      },
      {
        heading: "Etap 4: Odpalamy",
        paragraphs: [
          "Publikujemy stronę pod Twoją domeną i sprawdzamy, czy wszystko działa po starcie: formularze, przyciski, wersja mobilna.",
          "Efekt etapu: strona działa i może zbierać zapytania od klientów. Jeśli chcesz, żeby dalej się rozwijała, przechodzimy na [opiekę i rozwój strony](/opieka-i-rozwoj-strony/).",
          "**[Zamów bezpłatną wycenę](/kontakt/)**, żeby ustalić zakres i termin Twojej strony.",
        ],
      },
      {
        heading: "Co przygotować przed stworzeniem strony internetowej",
        paragraphs: [
          "Najwięcej czasu w każdym projekcie zjada czekanie na materiały. Jeśli przygotujesz je wcześniej, strona powstanie szybciej:",
        ],
        list: [
          "**Teksty:** opis usług, nawet w formie notatek. Pomożemy je uporządkować.",
          "**Zdjęcia:** Twoje, zespołu, miejsca pracy i realizacji. Prawdziwe zdjęcia działają lepiej niż zdjęcia ze stocków.",
          "**Logo** i kolory marki, jeśli je masz.",
          "**Cennik usług**, choćby orientacyjny.",
          "**Opinie klientów**, za ich zgodą.",
          "**Dostęp do domeny** albo informację, gdzie jest zarejestrowana.",
        ],
        after: [
          "Termin realizacji liczymy od dnia, w którym mamy komplet materiałów. Więcej o tym w artykule [ile trwa zrobienie strony internetowej](/blog/ile-trwa-zrobienie-strony-internetowej/).",
        ],
      },
      {
        heading: "Ile to wszystko trwa",
        paragraphs: [
          "Landing page powstaje w 1–2 tygodnie, strona firmowa w 3–4 tygodnie, licząc od przekazania materiałów. Szczegóły i to, co może wydłużyć projekt, opisujemy w artykule [Ile trwa zrobienie strony internetowej](/blog/ile-trwa-zrobienie-strony-internetowej/).",
          "Ceny pakietów i to, od czego zależą, znajdziesz w artykule [ile kosztuje strona internetowa](/blog/ile-kosztuje-strona-internetowa/).",
          "Chcesz zobaczyć, jak ten proces wyglądał w praktyce? Zajrzyj do [naszych realizacji](/projekty/).",
        ],
      },
    ],
    faq: [
      {
        question: "Czy mogę zobaczyć projekt graficzny, zanim zacznie się kodowanie?",
        answer:
          "Tak. Akceptacja projektu graficznego to warunek przejścia do etapu Budujemy. Dopóki projekt Ci nie odpowiada, wprowadzamy poprawki w projekcie, a nie w gotowym kodzie.",
      },
      {
        question: "Co muszę przygotować przed rozpoczęciem prac?",
        answer:
          "Teksty o usługach (mogą być notatki), zdjęcia, logo i cennik usług. Im szybciej je przekażesz, tym szybciej startujemy z terminem.",
      },
    ],
    cta: "Chcesz przejść ten proces ze swoją stroną? Napisz WYCENA.",
    related: ["ile-trwa-zrobienie-strony-internetowej", "ile-kosztuje-strona-internetowa"],
  },
  {
    slug: "strona-internetowa-dla-trenera-personalnego",
    title: "Co powinna mieć strona internetowa dla trenera personalnego?",
    seoTitle: "Co powinna mieć strona trenera personalnego?",
    description:
      "Pakiety z cenami, prawdziwe zdjęcia, opinie i kontakt jednym kliknięciem. Sprawdź, co powinna mieć strona trenera personalnego, żeby dawała zapisy.",
    date: "2026-11-03",
    readingTime: "5 min czytania",
    lead:
      "Dobra strona trenera personalnego odpowiada na trzy pytania, zanim klient napisze: co dostanę, ile to kosztuje i jak się zapisać. Poniżej lista elementów, które pomagają zamienić odwiedziny w konkretne zapytania.",
    sections: [
      {
        heading: "1. Oferta w pakietach, z ceną przy każdym",
        paragraphs: [
          "To najważniejsza sekcja. Pracowaliśmy nad stroną trenerki personalnej Patrycji, do której klientki pisały z pytaniem „ile to kosztuje?”, zanim w ogóle poznały ofertę. Rozwiązaniem była sekcja z trzema pakietami, ceną przy każdym i osobnym przyciskiem do każdego pakietu.",
          "Klientka sama wybiera pakiet, zanim napisze, więc rozmowa zaczyna się od tego, czego potrzebuje, a nie od ceny. Całość opisujemy w [case study strony dla trenera personalnego](/projekty/trenerka-personalna/).",
        ],
      },
      {
        heading: "2. Kim jesteś i jak pracujesz",
        paragraphs: [
          "Klient wybiera osobę, z którą będzie spędzał kilka godzin w tygodniu. Pokaż swoje zdjęcie, napisz krótko o doświadczeniu i kwalifikacjach, a przede wszystkim o tym, jak wygląda współpraca: pierwsze spotkanie, plan, kontakt między treningami.",
        ],
      },
      {
        heading: "3. Efekty i opinie",
        paragraphs: [
          "Metamorfozy i opinie podopiecznych przekonują lepiej niż jakikolwiek opis. Publikuj je tylko za zgodą klientów i stawiaj na prawdziwe historie, nie na obietnice typu „minus 10 kg w miesiąc”.",
        ],
      },
      {
        heading: "4. Kontakt w jednym kliknięciu",
        paragraphs: [
          "Większość osób trafi na Twoją stronę z Instagrama, czyli z telefonu. Kontakt musi być pod kciukiem:",
        ],
        list: [
          "przycisk przy każdym pakiecie,",
          "numer telefonu, który dzwoni po dotknięciu,",
          "link do wiadomości na Instagramie albo WhatsAppie,",
          "krótki formularz, jeśli ktoś woli napisać wieczorem.",
        ],
      },
      {
        heading: "5. Gdzie trenujesz",
        paragraphs: [
          "Napisz wprost, czy prowadzisz treningi na konkretnej siłowni, w plenerze, u klienta czy online. To jedna z pierwszych rzeczy, które klient sprawdza, a przy okazji pomaga w wynikach Google dla zapytań typu „trener personalny” z nazwą miasta.",
        ],
      },
      {
        heading: "6. Krótkie FAQ",
        paragraphs: [
          "Zbierz pytania, które słyszysz najczęściej, i odpowiedz na nie na stronie: czy pierwsza konsultacja jest płatna, czy trzeba mieć doświadczenie, jak często trenować, co z dietą. Każda odpowiedź na stronie to jedna wiadomość mniej do napisania ręcznie.",
        ],
      },
      {
        heading: "Czy wystarczy landing page?",
        paragraphs: [
          "Dla większości trenerów personalnych tak. Jedna dobrze ułożona strona z ofertą, opiniami i kontaktem wystarczy na start. [Landing page](/landing-page/) kosztuje u nas od 1000 zł i powstaje w 1–2 tygodnie.",
        ],
      },
    ],
    cta: "Trenujesz ludzi i chcesz mniej pytań o cenę? Napisz WYCENA.",
    related: ["landing-page-czy-strona-firmowa", "ile-kosztuje-strona-internetowa"],
  },
  {
    slug: "ile-trwa-zrobienie-strony-internetowej",
    title: "Ile trwa zrobienie strony internetowej i od czego to zależy?",
    seoTitle: "Ile trwa zrobienie strony internetowej?",
    description:
      "Landing page robimy w 1–2 tygodnie, stronę firmową w 3–4 tygodnie. Sprawdź, co wydłuża realizację, i zamów bezpłatną wycenę terminu dla Twojej firmy.",
    date: "2026-11-03",
    readingTime: "4 min czytania",
    lead:
      "Landing page robimy w 1–2 tygodnie, stronę firmową w 3–4 tygodnie. Liczymy od momentu, w którym dostajemy materiały. Właśnie ten moment najczęściej decyduje o tym, czy strona powstanie szybko.",
    sections: [
      {
        heading: "Czas realizacji w skrócie",
        paragraphs: [],
        table: {
          caption: "Czas realizacji strony internetowej, liczony od przekazania materiałów",
          head: ["Pakiet", "Czas realizacji"],
          rows: [
            ["[Landing page](/landing-page/)", "1–2 tygodnie"],
            ["Strona firmowa", "3–4 tygodnie"],
            ["[Opieka nad stroną](/opieka-i-rozwoj-strony/)", "na bieżąco"],
          ],
        },
        after: [
          "**Tyle samo trwa stworzenie strony internetowej od zera – liczymy od dnia, w którym dostajemy materiały.** Te terminy obejmują projekt, budowę i publikację.",
          "Ceny tych pakietów rozpisujemy w artykule [ile kosztuje strona internetowa](/blog/ile-kosztuje-strona-internetowa/).",
        ],
      },
      {
        heading: "Dlaczego liczymy od przekazania materiałów",
        paragraphs: [
          "Bez opisu usług, zdjęć i cennika możemy zaprojektować układ, ale nie gotową stronę. Gdy materiały przychodzą w częściach, przez kilka tygodni, projekt rozciąga się razem z nimi. Dlatego termin startuje dopiero wtedy, gdy mamy komplet.",
          "Co dokładnie dzieje się w tym czasie, krok po kroku, opisujemy w artykule [proces tworzenia strony internetowej](/blog/proces-tworzenia-strony-internetowej/).",
        ],
      },
      {
        heading: "Co wydłuża realizację",
        paragraphs: [],
        list: [
          "Brak tekstów. Pisanie opisów usług od zera to najczęstszy powód opóźnień.",
          "Brak zdjęć. Jeśli trzeba umówić sesję, dochodzi czas fotografa.",
          "Wiele osób decydujących. Gdy projekt akceptuje kilka osób, każda runda poprawek trwa dłużej.",
          "Dodatkowe funkcje. Kalkulator wyceny, wersje językowe czy blog wymagają projektu i testów.",
          "Zmiana zakresu w trakcie. Nowa usługa dorzucona przy etapie budowy oznacza powrót do projektu.",
        ],
      },
      {
        heading: "Jak przyspieszyć powstanie strony",
        paragraphs: [],
        list: [
          "**Przekaż teksty, zdjęcia i logo od razu.** Opis usług i cennik mogą być notatkami w telefonie, zdjęcia realizacji wrzuć do jednego folderu.",
          "**Szybko zaakceptuj projekt graficzny.** Budowę zaczynamy dopiero po akceptacji, więc każdy dzień zwłoki przesuwa termin.",
          "**Wyznacz jedną osobę do kontaktu.** Jedna osoba zbiera uwagi i akceptuje projekt po Twojej stronie.",
          "**Zgłaszaj poprawki zbiorczo**, w jednej wiadomości, a nie po jednej dziennie.",
          "**Zacznij od landing page**, jeśli zależy Ci na czasie, i rozbuduj stronę później.",
        ],
      },
      {
        heading: "A co po starcie?",
        paragraphs: [
          "Publikacja to nie koniec. Pierwsze tygodnie pokazują, o co klienci pytają i gdzie klikają. Wtedy warto poprawić teksty albo dodać brakującą informację. Jeśli wolisz nie robić tego samodzielnie, zajmiemy się tym w ramach [opieki i rozwoju strony](/opieka-i-rozwoj-strony/), od 150 zł miesięcznie.",
          "**[Zamów bezpłatną wycenę](/kontakt/)**, żeby dowiedzieć się, kiedy Twoja strona może być gotowa.",
        ],
      },
    ],
    cta: "Chcesz wiedzieć, kiedy Twoja strona może być gotowa? Napisz WYCENA.",
    related: ["proces-tworzenia-strony-internetowej", "ile-kosztuje-strona-internetowa"],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}
