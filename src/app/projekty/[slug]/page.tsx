import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { pageMetadata } from "@/config/seo";
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

  return pageMetadata(
    project.seoTitle,
    project.seoDescription,
    `/projekty/${project.slug}/`,
    project.imageSrc,
  );
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
            <h1>
              {project.title}
              <span className="h1-sub"> – {project.headline}</span>
            </h1>
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
                  <a href={project.externalUrl} target="_blank" rel="nofollow">
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

        {project.note ? (
          <section className="case-section case-note">
            <h2>Uczciwie</h2>
            <p>{project.note}</p>
          </section>
        ) : null}

        <section className="case-section">
          <h2>Rozwiązanie</h2>
          <p>{project.solution}</p>
        </section>

        {project.system ? (
        <section className="case-system" aria-labelledby="system-title">
          <h2 id="system-title">Design system</h2>
          <div>
            <span>Typography</span>
            <p>{project.system.typography}</p>
          </div>
          <div>
            <span>Colors</span>
            <p>{project.system.colors}</p>
          </div>
          <div>
            <span>Components</span>
            <p>{project.system.components}</p>
          </div>
        </section>
        ) : null}

        {project.gallery?.length ? (
        <section className="case-gallery" aria-label="Rzuty projektu">
          {project.gallery.map((item) => (
              <figure
                className="case-shot"
                data-orientation={item.orientation ?? "landscape"}
                key={item.src}
              >
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>{item.label}</figcaption>
              </figure>
          ))}
        </section>
        ) : null}

        <section className="case-section">
          <h2>{project.status === "in-progress" ? "Aktualny etap" : "Efekt"}</h2>
          <p>{project.effect}</p>
        </section>

        {project.proof ? (
          <section className="case-section">
            <h2>Gdzie to zobaczyć</h2>
            <p>
              {project.proof}
              {siteConfig.instagramUrl ? (
                <>
                  {" "}
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Zobacz na Instagramie →</a>
                </>
              ) : null}
            </p>
          </section>
        ) : null}

        {project.related ? (
          <section className="case-section">
            <h2>Pakiet</h2>
            <p>
              Ta strona to przykład pakietu landing page: jedna strona pod jedną ofertę.{" "}
              <a href={project.related.href}>{project.related.label} →</a>
            </p>
          </section>
        ) : null}

        <nav className="next-project" aria-label="Następny projekt">
          <a href="/projekty/">Wszystkie realizacje</a>
          <a href={`/projekty/${nextProject.slug}/`}>Następny projekt → {nextProject.title}</a>
        </nav>
      </article>
      <FinalCTA lead={project.cta} linkLabel="Napisz WYCENA" />
    </PageShell>
  );
}
