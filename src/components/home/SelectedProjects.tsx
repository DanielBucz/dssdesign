import { ProjectCard } from "@/components/projects/ProjectCard";
import { listedProjects } from "@/data/projects";

export function SelectedProjects() {
  const selectedProjects = listedProjects.slice(0, 3);

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
            Landing page dla detailingu, strona pracowni ceramiki i strona
            trenerki personalnej. Zobacz, jak wyglądają w praktyce.
          </p>
          <a href="/projekty/">
            Zobacz wszystkie realizacje <span aria-hidden="true">→</span>
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
