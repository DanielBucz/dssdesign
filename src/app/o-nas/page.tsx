import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Dobrze się składa to niezależne studio kreatywne łączące strategię, design i development.",
  alternates: {
    canonical: "/o-nas",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="subpage-hero dark-page" data-nav-theme="dark">
        <p className="subpage-kicker">O nas</p>
        <h1>
          Składamy strategię, obraz i technologię<span className="accent-dot">.</span>
        </h1>
        <p>
          Działamy jak małe, niezależne studio: blisko projektu, bez korporacyjnego
          tonu i bez dokładania elementów tylko dlatego, że można.
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
          <h2>Język marki</h2>
          <p>Unikamy generycznych sloganów. Szukamy tonu, który pasuje do firmy i zostaje w pamięci.</p>
        </article>
      </section>
    </PageShell>
  );
}
