import type { Project } from "@/data/projects";
import Link from "next/link";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  /** Pokaż zdanie „problem → rozwiązanie” i przycisk „Zobacz projekt” (lista /projekty/). */
  detailed?: boolean;
};

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  return (
    <article className="project-card" data-palette={project.palette}>
      <Link className="project-cover" href={`/projekty/${project.slug}`} aria-label={`Zobacz case study: ${project.title}`}>
        <ProjectVisual project={project} />
        <span className="project-arrow" aria-hidden="true">
          →
        </span>
      </Link>

      <div className="project-meta">
        <h3>{project.title}</h3>
        <div>
          <p className="project-industry">{project.industry}</p>
          <p>{project.description}</p>
          {detailed && project.summary ? <p className="project-summary">{project.summary}</p> : null}
          {detailed ? (
            <Link className="project-link" href={`/projekty/${project.slug}/`}>
              Zobacz projekt <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
