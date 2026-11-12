import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Landing page dla firmy - cena",
  "Landing page dla jednej usługi albo kampanii, gotowy w 1–2 tygodnie, od 1000 zł. Zobacz przykład realizacji i zamów bezpłatną wycenę projektu.",
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
          body: "Masz jedną usługę, kampanię albo nową ofertę, którą trzeba szybko wypromować, bez budowania całej strony firmowej.",
        },
        {
          title: "Co dostajesz",
          body: "Jedną stronę z ofertą, wezwaniem do działania i ścieżką kontaktu. Gotową w 1–2 tygodnie od przekazania materiałów.",
        },
        {
          title: "Cena",
          body: "Landing page od 1000 zł. To cena końcowa, bez doliczanego VAT – studio działa w ramach działalności nierejestrowanej.",
        },
        {
          title: "Przykład",
          body: (
            <>
              Buczek Poleruje to działający landing page detailingu samochodowego z realizacjami przed i po oraz kalkulatorem wyceny.{" "}
              <a href="/projekty/buczek-poleruje/">Zobacz realizację →</a>
            </>
          ),
        },
      ]}
      cta="Napisz WYCENA, żeby dostać widełki cenowe pod swój landing page."
    />
  );
}
