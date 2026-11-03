import { pageMetadata } from "@/config/seo";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = pageMetadata(
  "Realizacje stron internetowych dla firm",
  "Zobacz nasze realizacje: strona dla firmy transportowej, landing page detailingu, strona trenerki personalnej i pracowni ceramiki. Napisz WYCENA i dołącz do grona klientów.",
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
          Strony i landing page dla firm usługowych i B2B: od transportu, przez
          detailing, po trenerkę personalną i pracownię ceramiki. Chcesz podobną
          stronę? <a href="/kontakt/">Napisz WYCENA →</a>
        </p>
      </section>

      <section className="subpage-projects light-page" data-nav-theme="light" aria-label="Lista projektów">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="subpage-links light-page" data-nav-theme="light" aria-labelledby="offer-links-title">
        <h2 id="offer-links-title">Zobacz, co możemy zrobić dla Twojej firmy</h2>
        <ul>
          <li><a href="/landing-page/">Landing page dla firmy, od 1000 zł <span aria-hidden="true">→</span></a></li>
          <li><a href="/opieka-i-rozwoj-strony/">Opieka nad stroną internetową, od 150 zł / mies. <span aria-hidden="true">→</span></a></li>
        </ul>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
