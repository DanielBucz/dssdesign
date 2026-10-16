import { pricingPlans } from "@/data/pricing";

export function Pricing() {
  return (
    <section
      className="services-section pricing-section"
      id="cennik"
      aria-labelledby="pricing-title"
      data-nav-theme="dark"
    >
      <div className="services-heading">
        <div className="section-kicker light" aria-hidden="true">
          <span>03</span>
          <i />
        </div>
        <h2 id="pricing-title" className="section-title light">
          CENNIK<span className="accent-dot">.</span>
        </h2>
      </div>

      <div className="pricing-body">
        <div className="services-list pricing-list">
          {pricingPlans.map((plan) => (
            <article className="service-item pricing-item" data-featured={plan.featured || undefined} key={plan.title}>
              {plan.featured && <p className="pricing-badge">Najczęściej wybierana</p>}
              <h3>{plan.title}</h3>
              <p className="pricing-price">{plan.price}</p>
              <p>{plan.description}</p>
              <ul aria-label={`Zakres: ${plan.title}`}>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {plan.duration && (
                <p className="pricing-duration">
                  Czas realizacji: <strong>{plan.duration}</strong>
                </p>
              )}
            </article>
          ))}
        </div>

        <a className="hero-cta pricing-cta" href="/kontakt">
          <span>Poproś o wycenę</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
