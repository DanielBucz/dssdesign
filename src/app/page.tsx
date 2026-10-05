import { Hero } from "@/components/home/Hero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Process } from "@/components/home/Process";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Services } from "@/components/home/Services";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { pageMetadata, pageUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { StructuredData } from "@/components/StructuredData";

export const metadata = pageMetadata("Tworzenie stron internetowych i UX/UI", siteConfig.description, "/");

export default function Home() {
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
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
