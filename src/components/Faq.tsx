import { StructuredData } from "@/components/StructuredData";
import type { FaqItem } from "@/data/faq";

type FaqProps = {
  number: string;
  items: FaqItem[];
};

export function Faq({ number, items }: FaqProps) {
  return (
    <section className="services-section faq-section" id="faq" aria-labelledby="faq-title" data-nav-theme="dark">
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }} />
      <div className="services-heading">
        <div className="section-kicker light" aria-hidden="true">
          <span>{number}</span>
          <i />
        </div>
        <h2 id="faq-title" className="section-title light">
          PYTANIA<span className="accent-dot">.</span>
        </h2>
      </div>

      <div className="faq-list">
        {items.map((item) => (
          <article className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
            {item.link && (
              <a href={item.link.href}>
                {item.link.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
