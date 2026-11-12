import type { ReactNode } from "react";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { StructuredData } from "@/components/StructuredData";
import { pageUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/data/faq";

export type ServiceSection = {
  title: string;
  /** Jeden akapit albo kilka akapitów (tablica). */
  body: ReactNode | ReactNode[];
  /** Lista punktów pod akapitem. */
  list?: ReactNode[];
};

type ServicePageProps = {
  path: string;
  kicker: string;
  heading: string;
  lead: string;
  serviceName: string;
  price: string;
  sections: ServiceSection[];
  faq?: FaqItem[];
  cta: string;
  ctaLinks?: { label: string; href: string }[];
};

export function ServicePage({ path, kicker, heading, lead, serviceName, price, sections, faq, cta, ctaLinks }: ServicePageProps) {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        url: pageUrl(path),
        areaServed: "PL",
        provider: { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name, url: pageUrl() },
        offers: { "@type": "Offer", price, priceCurrency: "PLN" },
      }} />
      <section className="subpage-hero dark-page" data-nav-theme="dark">
        <p className="subpage-kicker">{kicker}</p>
        <h1>
          {heading}<span className="accent-dot">.</span>
        </h1>
        <p>{lead}</p>
      </section>

      <div className="case-study">
        {sections.map((section) => {
          const paragraphs = Array.isArray(section.body) ? section.body : [section.body];
          const isLong = paragraphs.length > 1 || Boolean(section.list?.length);
          return (
            <section className={isLong ? "case-section is-long" : "case-section"} key={section.title}>
              <h2>{section.title}</h2>
              <div className="case-body">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.list?.length ? (
                  <ul className="case-list">
                    {section.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>

      {faq?.length ? <Faq number="01" items={faq} /> : null}

      <FinalCTA lead={cta} linkLabel="Napisz WYCENA" links={ctaLinks} />
    </PageShell>
  );
}
