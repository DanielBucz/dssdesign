import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { RichText } from "@/components/RichText";
import { StructuredData } from "@/components/StructuredData";
import { pageMetadata, pageUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { articles, formatArticleDate, getArticleBySlug } from "@/data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artykuł" };
  }

  return pageMetadata(article.seoTitle, article.description, `/blog/${article.slug}/`);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = articles.filter((item) => article.related.includes(item.slug));

  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        inLanguage: "pl-PL",
        mainEntityOfPage: pageUrl(`/blog/${article.slug}`),
        author: { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name },
        publisher: { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name },
      }} />
      <article className="article light-page" data-nav-theme="light">
        <header className="article-header">
          <p className="subpage-kicker">
            <a href="/blog/">Blog</a> · <time dateTime={article.date}>{formatArticleDate(article.date)}</time> · {article.readingTime}
          </p>
          <h1>{article.title}</h1>
          <p className="article-lead">
            <RichText text={article.lead} />
          </p>
        </header>

        <div className="article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>
                  <RichText text={paragraph} />
                </p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item.slice(0, 40)}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.after?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </section>
          ))}
        </div>

        {related.length ? (
          <nav className="article-related" aria-labelledby="related-title">
            <h2 id="related-title">Przeczytaj też</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <a href={`/blog/${item.slug}/`}>
                    {item.title} <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </article>

      <FinalCTA lead={article.cta} linkLabel="Napisz WYCENA" />
    </PageShell>
  );
}
