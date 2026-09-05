import type { Project } from "@/data/projects";
import Link from "next/link";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
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
        <p>{project.description}</p>
      </div>
    </article>
  );
}
