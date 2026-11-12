import { pageMetadata } from "@/config/seo";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { pricingPlans } from "@/data/pricing";
import { processSteps } from "@/data/services";

export const metadata = pageMetadata(
  "Studio projektowania stron internetowych",
  "Dobrze się składa to studio, które projektuje strony internetowe dla firm usługowych. Poznaj nasz proces: poznajemy, projektujemy, budujemy, odpalamy.",
  "/o-nas/",
);

export default function AboutPage() {
  return (
    <PageShell>
      <section className="subpage-hero dark-page" data-nav-theme="dark">
        <p className="subpage-kicker">O nas</p>
        <h1>
          <span className="h1-sub">Studio projektowania stron internetowych – </span>
          składamy strategię, obraz i technologię<span className="accent-dot">.</span>
        </h1>
        <p>
          Działamy jak małe, niezależne studio: blisko projektu, bez korporacyjnego
          tonu i bez dokładania elementów tylko dlatego, że można. Projektujemy
          strony dla małych firm usługowych, które chcą dostawać zapytania, a nie
          tylko „mieć stronę”.
        </p>
      </section>

      <section className="about-grid dark-page" data-nav-theme="dark">
        <article>
          <span>01</span>
          <h2>Design najpierw</h2>
          <p>Strona bez animacji musi już działać wizualnie. Motion traktujemy jako wzmocnienie, nie protezę.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Technologia bez nadmiaru</h2>
          <p>Budujemy frontend tak, żeby dało się go rozwijać, mierzyć i wdrażać bez ciężkiego zaplecza na start.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Język klienta</h2>
          <p>Piszemy tak, jak mówią Twoi klienci. Unikamy generycznych sloganów, bo nikt ich nie szuka w Google.</p>
        </article>
      </section>

      <section className="content-block dark-page" data-nav-theme="dark" aria-labelledby="process-title">
        <h2 id="process-title">Jak tworzymy strony internetowe<span className="accent-dot">.</span></h2>
        <p className="content-lead">
          Proces tworzenia strony internetowej dzielimy na cztery etapy. Każdy kończy
          się konkretnym efektem, więc zawsze wiesz, na jakim etapie jesteśmy.
        </p>
        <ol className="about-grid is-four">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.details}</p>
              <p className="about-effect">{step.effect}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-block dark-page" data-nav-theme="dark" aria-labelledby="about-pricing-title">
        <h2 id="about-pricing-title">Ile to kosztuje<span className="accent-dot">.</span></h2>
        <ul className="price-inline">
          {pricingPlans.map((plan) => (
            <li key={plan.title}>
              <span>{plan.title}</span>
              <strong>{plan.price}</strong>
            </li>
          ))}
        </ul>
        <p className="content-links">
          <a href="/projekty/">Zobacz, jak to wygląda w praktyce <span aria-hidden="true">→</span></a>
          <a href="/blog/proces-tworzenia-strony-internetowej/">Proces krok po kroku – artykuł <span aria-hidden="true">→</span></a>
          <a href="/kontakt/">Napisz WYCENA <span aria-hidden="true">→</span></a>
        </p>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
