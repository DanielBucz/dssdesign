import type { ReactNode } from "react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageShell } from "@/components/layout/PageShell";
import { StructuredData } from "@/components/StructuredData";
import { pageUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";

type ServicePageProps = {
  path: string;
  kicker: string;
  heading: string;
  lead: string;
  serviceName: string;
  price: string;
  sections: { title: string; body: ReactNode }[];
  cta: string;
};

export function ServicePage({ path, kicker, heading, lead, serviceName, price, sections, cta }: ServicePageProps) {
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
        {sections.map((section) => (
          <section className="case-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <FinalCTA lead={cta} linkLabel="Napisz WYCENA" />
    </PageShell>
  );
}
