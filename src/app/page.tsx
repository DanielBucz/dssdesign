import { AuditSection } from "@/components/home/AuditSection";
import { Hero } from "@/components/home/Hero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { testimonials } from "@/data/testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { pageMetadata, pageUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { StructuredData } from "@/components/StructuredData";

export const metadata = pageMetadata("Tworzenie stron internetowych i UX/UI", siteConfig.description, "/");

export default function Home() {
  // Ukryta sekcja „Opinie” nie zostawia luki w numeracji.
  const auditNumber = testimonials.length > 0 ? "06" : "05";

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name, url: pageUrl(), description: siteConfig.description, email: siteConfig.email, telephone: siteConfig.phone },
          { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: pageUrl(), inLanguage: "pl-PL", publisher: { "@id": `${siteConfig.url}/#organization` } },
        ],
      }} />
      <Navbar />
      <main id="main">
        <Hero />
        <SelectedProjects />
        <Services />
        <Pricing />
        <Process />
        <Testimonials number="05" />
        <AuditSection number={auditNumber} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
