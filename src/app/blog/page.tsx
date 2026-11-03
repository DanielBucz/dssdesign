import { pageMetadata } from "@/config/seo";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { articles, formatArticleDate } from "@/data/articles";

export const metadata = pageMetadata(
  "Blog o stronach internetowych dla firm",
  "Ile kosztuje strona internetowa, ile trwa jej zrobienie i co wybrać: landing page czy stronę firmową. Konkretne odpowiedzi dla małych firm usługowych.",
  "/blog/",
);

export default function BlogPage() {
  return (
    <PageShell>
      <section className="subpage-hero light-page" data-nav-theme="light">
        <p className="subpage-kicker">Blog</p>
        <h1>
          Strony internetowe bez tajemnic<span className="accent-dot">.</span>
        </h1>
        <p>
          Odpowiadamy na pytania, które właściciele małych firm usługowych
          zadają nam najczęściej: o cenę, czas i to, czego strona naprawdę potrzebuje.
        </p>
      </section>

      <section className="article-list light-page" data-nav-theme="light" aria-label="Artykuły">
        {articles.map((article) => (
          <article key={article.slug}>
            <p className="subpage-kicker">
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time> · {article.readingTime}
            </p>
            <h2>
              <a href={`/blog/${article.slug}/`}>{article.title}</a>
            </h2>
            <p>{article.description}</p>
          </article>
        ))}
      </section>

      <FinalCTA />
    </PageShell>
  );
}
