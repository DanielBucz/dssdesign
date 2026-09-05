import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Wybrane projekty i koncepcje studia Dobrze się składa: web design, UX/UI, branding i development.",
  alternates: {
    canonical: "/projekty",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="subpage-hero light-page" data-nav-theme="light">
        <p className="subpage-kicker">Portfolio</p>
        <h1>
          Projekty, które pokazują sposób myślenia<span className="accent-dot">.</span>
        </h1>
        <p>
          Na start pokazujemy wybrane koncepty i redesign studies. Każdy projekt
          jest opisany jasno, bez udawania współpracy, która nie miała miejsca.
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
