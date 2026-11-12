import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Opieka nad stroną internetową",
  "Opieka nad stroną internetową: zmiany, aktualizacje i rozwój po starcie strony, w abonamencie od 150 zł miesięcznie. Napisz i ustalmy zakres opieki.",
  "/opieka-i-rozwoj-strony/",
);

export default function CarePage() {
  return (
    <ServicePage
      path="/opieka-i-rozwoj-strony/"
      kicker="Opieka i rozwój · od 150 zł / mies."
      heading="Opieka nad stroną internetową po starcie"
      lead="Strona nie kończy się w dniu publikacji. Zajmujemy się zmianami, aktualizacjami i rozwojem, a Ty zajmujesz się klientami."
      serviceName="Opieka nad stroną internetową"
      price="150"
      sections={[
        {
          title: "Dla kogo",
          body: [
            "Dla firm, które mają już działającą stronę – zrobioną przez nas albo gdzie indziej – i chcą ją na bieżąco rozwijać, bez szukania wykonawcy przy każdej drobnej zmianie.",
            <>
              Jeśli dopiero planujesz stronę, zacznij od{" "}
              <a href="/landing-page/">landing page dla jednej usługi</a> albo zobacz{" "}
              <a href="/projekty/">nasze realizacje</a>. Opieka przyda się po starcie.
            </>,
          ],
        },
        {
          // TODO [ZAKRES]: dopisać dokładną liczbę zmian w cenie, limity i czas reakcji, gdy zespół je potwierdzi.
          title: "Zakres",
          body: "Opieka nad stroną internetową to abonament od 150 zł miesięcznie. Dokładny zakres ustalamy przy wycenie, pod Twoją stronę. Typowe prace w opiece to na przykład:",
          list: [
            "aktualizacja strony internetowej firmy: treści, ceny, godziny otwarcia,",
            "wymiana i dodawanie zdjęć, np. nowych realizacji,",
            "dodanie nowej podstrony usługi albo oferty sezonowej,",
            "drobne poprawki graficzne i układu na telefonie,",
            "sprawdzenie, czy formularz i dane kontaktowe działają.",
          ],
        },
        {
          title: "Rozwój strony",
          body: [
            "Rozwój strony internetowej to coś więcej niż poprawki. Gdy zmienia się Twoja oferta, strona powinna zmieniać się razem z nią: nowe usługi dostają własne podstrony, a sekcje, o które klienci najczęściej pytają, przesuwamy wyżej.",
            "W abonamencie na stronę internetową nie musisz za każdym razem tłumaczyć od nowa, jak działa Twoja firma. Znamy stronę i wiemy, co już na niej jest.",
          ],
        },
        {
          title: "Kiedy zaczynamy",
          body: [
            "Po etapie Odpalamy, czyli po uruchomieniu strony, jako naturalna kontynuacja współpracy. Jeśli stronę zrobiła inna firma, zaczynamy od przeglądu tego, co już działa.",
            <a href="/blog/proces-tworzenia-strony-internetowej/" key="link">Zobacz cały proces tworzenia strony →</a>,
          ],
        },
      ]}
      faq={[
        {
          question: "Czy mogę zamówić opiekę, jeśli stronę zrobiła inna firma?",
          answer:
            "Tak. Opieka nie jest tylko dla stron zrobionych przez nas. Na początku sprawdzamy, na czym działa Twoja strona i do czego mamy dostęp, a potem ustalamy zakres i cenę abonamentu.",
        },
        {
          // TODO [ZAKRES]: wpisać realny czas reakcji na zgłoszenie, gdy zespół go potwierdzi.
          question: "Jak szybko reagujecie na zgłoszenie?",
          answer:
            "Czas reakcji ustalamy przy wycenie, razem z zakresem opieki, żeby pasował do tego, jak często zmieniasz stronę.",
        },
      ]}
      cta="Masz już stronę i potrzebujesz kogoś do jej prowadzenia? Napisz WYCENA."
      ctaLinks={[{ label: "Zobacz nasze realizacje", href: "/projekty/" }]}
    />
  );
}
