import { LeadForm } from "@/components/LeadForm";
import { siteConfig } from "@/config/site";

type AuditSectionProps = {
  number: string;
};

export function AuditSection({ number }: AuditSectionProps) {
  return (
    <section
      className="services-section audit-section"
      id="audyt"
      aria-labelledby="audit-title"
      data-nav-theme="dark"
    >
      <div className="services-heading">
        <div className="section-kicker light" aria-hidden="true">
          <span>{number}</span>
          <i />
        </div>
        <h2 id="audit-title" className="section-title light">
          DARMOWY AUDYT STRONY<span className="accent-dot">.</span>
        </h2>
        <p className="audit-lead">
          Napisz AUDYT <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">na Instagramie</a> albo Facebooku i dodaj adres swojej
          strony albo zostaw go w formularzu. W ciągu 24 godzin odpiszemy
          z 3 konkretnymi poprawkami do wdrożenia.
        </p>
      </div>

      <LeadForm variant="audit" />
    </section>
  );
}
