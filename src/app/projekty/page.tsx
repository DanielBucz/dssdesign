import { pageMetadata } from "@/config/seo";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = pageMetadata(
  "Realizacje stron internetowych",
  "Zobacz projekty stron firmowych, landing page i projekt w trakcie realizacji. Poznaj zakres prac, rozwiązania UX/UI i wdrożenia studia Dobrze się składa.",
  "/projekty/",
);

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="subpage-hero light-page" data-nav-theme="light">
        <p className="subpage-kicker">Portfolio</p>
        <h1>
          Projekty stron internetowych<span className="accent-dot">.</span>
        </h1>
        <p>
          Zobacz nasze strony firmowe i landing page. Pokazujemy ukończone
          realizacje oraz oznaczony projekt w trakcie prac.
        </p>
      </section>

      <section className="subpage-projects light-page" data-nav-theme="light" aria-label="Lista projektów">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </PageShell>
  );
}
