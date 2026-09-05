import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  size?: "card" | "hero" | "detail";
};

export function ProjectVisual({ project, size = "card" }: ProjectVisualProps) {
  return (
    <div className="project-visual" data-palette={project.palette} data-size={size}>
      <div className="cover-noise" aria-hidden="true" />
      <div className="visual-topline">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      {project.imageSrc ? (
        <img className="project-screenshot" src={project.imageSrc} alt={project.imageAlt ?? ""} />
      ) : (
        <div className="cover-art" aria-hidden="true">
          <span className="mockup mockup-a" />
          <span className="mockup mockup-b" />
          <span className="mockup mockup-c" />
        </div>
      )}
      <div className="cover-title">
        <span>{project.title}</span>
        <small>{project.category}</small>
      </div>
    </div>
  );
}
