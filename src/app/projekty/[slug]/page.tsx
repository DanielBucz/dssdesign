import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { siteConfig } from "@/config/site";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt",
    };
  }

  return {
    title: `${project.title} case study`,
    description: project.description,
    alternates: {
      canonical: `/projekty/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${project.type}`,
      description: project.description,
      url: `${siteConfig.url}/projekty/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <PageShell>
      <article className="case-study">
        <header className="case-hero">
          <div>
            <p className="subpage-kicker">{project.type}</p>
            <h1>{project.title}</h1>
          </div>
          <dl className="case-meta">
            <div>
              <dt>Zakres</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Rok</dt>
              <dd>{project.year}</dd>
            </div>
            {project.location ? (
              <div>
                <dt>Lokalizacja</dt>
                <dd>{project.location}</dd>
              </div>
            ) : null}
            {project.externalUrl ? (
              <div>
                <dt>Strona</dt>
                <dd>
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    Zobacz online
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </header>

        <ProjectVisual project={project} size="hero" />

        <section className="case-section">
          <h2>Wyzwanie</h2>
          <p>{project.challenge}</p>
        </section>

        <section className="case-section">
          <h2>Rozwiązanie</h2>
          <p>{project.solution}</p>
        </section>

        <section className="case-system" aria-labelledby="system-title">
          <h2 id="system-title">Design system</h2>
          <div>
            <span>Typography</span>
            <p>
              {project.system?.typography ??
                "Duży grotesk, krótkie komunikaty i mocna hierarchia sekcji."}
            </p>
          </div>
          <div>
            <span>Colors</span>
            <p>
              {project.system?.colors ??
                "Czerń, złamana biel, akcent neon yellow-green oraz paleta projektu."}
            </p>
          </div>
          <div>
            <span>Components</span>
            <p>
              {project.system?.components ??
                "Moduły hero, duże karty, proste CTA i rytm oparty o linie."}
            </p>
          </div>
        </section>

        <section className="case-gallery" aria-label="Rzuty projektu">
          {project.gallery?.length ? (
            project.gallery.map((item) => (
              <figure
                className="case-shot"
                data-orientation={item.orientation ?? "landscape"}
                key={item.src}
              >
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))
          ) : (
            <>
              <ProjectVisual project={project} size="detail" />
              <ProjectVisual project={project} size="detail" />
            </>
          )}
        </section>

        <section className="case-section">
          <h2>Efekt</h2>
          <p>{project.effect}</p>
        </section>

        <nav className="next-project" aria-label="Następny projekt">
          <a href="/projekty">Wszystkie projekty</a>
          <a href={`/projekty/${nextProject.slug}`}>Next project → {nextProject.title}</a>
        </nav>
      </article>
    </PageShell>
  );
}
