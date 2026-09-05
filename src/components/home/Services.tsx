import { services } from "@/data/services";

export function Services() {
  return (
    <section
      className="services-section"
      id="uslugi"
      aria-labelledby="services-title"
      data-nav-theme="dark"
    >
      <div className="services-heading">
        <div className="section-kicker light" aria-hidden="true">
          <span>02</span>
          <i />
        </div>
        <h2 id="services-title" className="section-title light">
          CO ROBIMY<span className="accent-dot">.</span>
        </h2>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article className="service-item" key={service.title}>
            <span className="service-symbol" aria-hidden="true">
              {service.symbol}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul aria-label={`Zakres: ${service.title}`}>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
