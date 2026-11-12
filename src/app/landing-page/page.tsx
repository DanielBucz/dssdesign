import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Landing page dla firmy - cena",
  "Landing page dla firmy: jedna strona pod jedną usługę, gotowa w 1–2 tygodnie, od 1000 zł. Zobacz przykład i zamów bezpłatną wycenę projektu.",
  "/landing-page/",
);

export default function LandingPagePage() {
  return (
    <ServicePage
      path="/landing-page/"
      kicker="Landing page · od 1000 zł"
      heading="Landing page dla firmy – jedna strona pod jedną ofertę"
      lead="Jedna strona, która pokazuje Twoją usługę, odpowiada na najważniejsze pytania klienta i prowadzi go prosto do kontaktu."
      serviceName="Landing page dla firmy"
      price="1000"
      sections={[
        {
          title: "Dla kogo",
          body: [
            "Landing page dla jednej usługi sprawdzi się, gdy masz jedną usługę, kampanię albo nową ofertę, którą trzeba szybko wypromować, bez budowania całej strony firmowej.",
            "To dobry wybór na start dla lokalnej usługi, na szybką stronę internetową na kampanię w social mediach albo pod nową ofertę, którą chcesz sprawdzić, zanim rozbudujesz stronę.",
          ],
        },
        {
          title: "Co dostajesz",
          body: "Jedną stronę, gotową w 1–2 tygodnie od przekazania materiałów. W środku:",
          list: [
            "opis oferty napisany językiem Twoich klientów,",
            "wyraźne wezwanie do działania, np. telefon albo formularz,",
            "prostą ścieżkę kontaktu bez zbędnych kroków,",
            "podstawy SEO: tytuł, opis i nagłówki pod frazę Twojej usługi,",
            "wygodną wersję na telefon.",
          ],
        },
        {
          title: "Cena",
          body: "Landing page od 1000 zł. To cena końcowa, bez doliczanego VAT – studio działa w ramach działalności nierejestrowanej. Dokładne widełki podajemy po kilku pytaniach o projekt.",
        },
        {
          title: "Przykład",
          body: [
            "Buczek Poleruje to działający landing page detailingu samochodowego w Lublinie: realizacje przed i po, lista usług, kalkulator orientacyjnej wyceny i szybki kontakt telefoniczny. Klient widzi efekt i cenę, zanim zadzwoni.",
            <a href="/projekty/buczek-poleruje/" key="link">Zobacz projekt →</a>,
          ],
        },
        {
          title: "Po starcie",
          body: (
            <>
              Landing page nie musi stać w miejscu. Możesz dodawać realizacje, zmieniać ofertę albo rozbudować go w stronę firmową.{" "}
              <a href="/opieka-i-rozwoj-strony/">Zobacz, jak wygląda opieka nad stroną →</a>
            </>
          ),
        },
      ]}
      faq={[
        {
          question: "Czym różni się landing page od strony firmowej?",
          answer:
            "Landing page to jedna strona pod jedną usługę albo kampanię, z jednym celem: kontaktem. Strona firmowa ma kilka podstron, np. osobne strony usług, informacje o firmie i realizacje. Landing page jest szybszy i tańszy, strona firmowa lepiej sprawdza się przy kilku usługach.",
          link: { label: "Landing page czy strona firmowa – artykuł", href: "/blog/landing-page-czy-strona-firmowa/" },
        },
        {
          question: "Ile kosztuje landing page?",
          answer:
            "Landing page kosztuje od 1000 zł i jest gotowy w 1–2 tygodnie od przekazania materiałów. Wycena jest bezpłatna.",
          link: { label: "Zamów bezpłatną wycenę", href: "/kontakt/" },
        },
      ]}
      cta="Napisz WYCENA, żeby dostać bezpłatną wycenę i widełki cenowe pod swój landing page."
      ctaLinks={[{ label: "Co po starcie: opieka nad stroną", href: "/opieka-i-rozwoj-strony/" }]}
    />
  );
}
