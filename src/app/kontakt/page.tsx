import { pageMetadata } from "@/config/seo";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/config/site";
import { LeadForm } from "@/components/LeadForm";

export const metadata = pageMetadata(
  "Kontakt — porozmawiajmy o Twojej stronie",
  "Potrzebujesz strony firmowej, landing page lub redesignu? Napisz na kontakt@dssdesign.pl lub zadzwoń: 668 974 402. Porozmawiajmy o Twoim projekcie.",
  "/kontakt/",
);

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-page dark-page" data-nav-theme="dark">
        <p className="subpage-kicker">Kontakt</p>
        <h1>
          Masz pomysł? Dobrze się <span className="keep-together">składa<span className="accent-dot">.</span></span>
        </h1>
        <div className="contact-panel">
          <p>
            Napisz do nas o swoim projekcie. Porozmawiajmy o tym, czego potrzebuje
            Twoja marka i jak możemy pomóc.
          </p>
          <dl>
            <div>
              <dt>E-mail</dt>
              <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services-section contact-form-section" aria-labelledby="contact-form-title" data-nav-theme="dark">
        <div className="services-heading">
          <div className="section-kicker light" aria-hidden="true">
            <span>01</span>
            <i />
          </div>
          <h2 id="contact-form-title" className="section-title light">
            NAPISZ DO NAS<span className="accent-dot">.</span>
          </h2>
          <p className="audit-lead">
            Wolisz zacząć od audytu? <a href="/#audyt">Zamów darmowy audyt strony <span aria-hidden="true">→</span></a>
          </p>
        </div>

        <LeadForm variant="contact" />
      </section>
    </PageShell>
  );
}
