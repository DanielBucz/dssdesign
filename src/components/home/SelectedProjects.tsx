import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function SelectedProjects() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <section
      className="projects-section"
      id="projekty"
      aria-labelledby="projects-title"
      data-nav-theme="light"
    >
      <div className="projects-header">
        <div className="section-kicker" aria-hidden="true">
          <span>01</span>
          <i />
        </div>

        <h2 id="projects-title" className="section-title">
          <span>PROJEKTY,</span>
          <span>Z KTÓRYCH JESTEŚMY</span>
          <span>
            DUMNI<span className="accent-dot">.</span>
          </span>
        </h2>

        <div className="projects-intro">
          <p>
            Każdy projekt to osobny układ decyzji: strategia, obraz, rytm i kod.
            Pokazujemy koncepcje bez udawania gotowej listy klientów.
          </p>
          <a href="/projekty" aria-label="Zobacz wszystkie projekty">
            Zobacz wszystkie projekty <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="projects-grid" id="projekty-lista">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
