import { pageMetadata } from "@/config/seo";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { listedProjects } from "@/data/projects";

export const metadata = pageMetadata(
  "Realizacje stron internetowych dla firm",
  "Realizacje stron internetowych dla firm usługowych: detailing, trenerka personalna, pracownia ceramiki. Zobacz przykłady i zamów bezpłatną wycenę.",
  "/projekty/",
);

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="subpage-hero light-page" data-nav-theme="light">
        <p className="subpage-kicker">Portfolio</p>
        <h1>
          Realizacje stron internetowych dla firm<span className="accent-dot">.</span>
        </h1>
        <p>
          Nasze portfolio stron internetowych dla firm to przykłady stron
          i landing page dla małych firm usługowych. Przy każdej realizacji
          piszemy, z jakim problemem przyszedł klient i co zmieniła strona.
          Chcesz podobną stronę? <a href="/kontakt/">Napisz WYCENA →</a>
        </p>
        <ul className="subpage-industries" aria-label="Branże w portfolio">
          <li>detailing samochodowy</li>
          <li>trenerka personalna</li>
          <li>pracownia ceramiki i rękodzieło</li>
        </ul>
      </section>

      <section className="subpage-projects light-page" data-nav-theme="light" aria-label="Lista projektów">
        {listedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} detailed />
        ))}
      </section>

      <section className="subpage-links light-page" data-nav-theme="light" aria-labelledby="offer-links-title">
        <h2 id="offer-links-title">Zobacz, co możemy zrobić dla Twojej firmy</h2>
        <ul>
          <li><a href="/landing-page/">Landing page dla firmy, od 1000 zł <span aria-hidden="true">→</span></a></li>
          <li><a href="/opieka-i-rozwoj-strony/">Opieka nad stroną internetową, od 150 zł / mies. <span aria-hidden="true">→</span></a></li>
        </ul>
      </section>

      <FinalCTA
        links={[
          { label: "Wiesz, że chcesz landing page?", href: "/landing-page/" },
          { label: "Masz stronę i szukasz opieki?", href: "/opieka-i-rozwoj-strony/" },
        ]}
      />
    </PageShell>
  );
}
