import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Opieka nad stroną internetową",
  "Zmiany, aktualizacje i rozwój strony internetowej po starcie, w abonamencie od 150 zł miesięcznie. Napisz do nas i ustalmy zakres opieki.",
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
          body: "Dla firm, które mają już działającą stronę – zrobioną przez nas albo gdzie indziej – i chcą ją na bieżąco rozwijać.",
        },
        {
          // TODO [ZAKRES]: dopisać dokładną liczbę zmian w cenie i czas reakcji, gdy zespół je potwierdzi.
          title: "Zakres",
          body: "Zmiany, aktualizacje i rozwój strony w abonamencie od 150 zł miesięcznie. Dokładny zakres i czas reakcji ustalamy przy wycenie, pod Twoją stronę.",
        },
        {
          title: "Kiedy zaczynamy",
          body: (
            <>
              Po etapie Odpalamy, czyli po uruchomieniu strony, jako naturalna kontynuacja współpracy.{" "}
              <a href="/o-nas/">Zobacz cały proces →</a>
            </>
          ),
        },
      ]}
      cta="Masz już stronę i potrzebujesz kogoś do jej prowadzenia? Napisz WYCENA."
    />
  );
}
