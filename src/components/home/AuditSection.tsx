import { LeadForm } from "@/components/LeadForm";

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
          Podaj adres strony. Sprawdzimy ją i wyślemy 3 konkretne poprawki.
        </p>
      </div>

      <LeadForm variant="audit" />
    </section>
  );
}
