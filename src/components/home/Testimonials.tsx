import { testimonials } from "@/data/testimonials";

type TestimonialsProps = {
  number: string;
};

export function Testimonials({ number }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section
      className="services-section testimonials-section"
      id="opinie"
      aria-labelledby="testimonials-title"
      data-nav-theme="dark"
    >
      <div className="services-heading">
        <div className="section-kicker light" aria-hidden="true">
          <span>{number}</span>
          <i />
        </div>
        <h2 id="testimonials-title" className="section-title light">
          OPINIE<span className="accent-dot">.</span>
        </h2>
      </div>

      <div className="services-list testimonials-list">
        {testimonials.map((item) => (
          <figure className="service-item testimonial-item" key={item.name}>
            <span className="service-symbol" aria-hidden="true">&bdquo;</span>
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <figcaption>
              {item.photo && (
                // Statyczny eksport: zwykły <img> zamiast optymalizacji next/image.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.photo} alt="" width={56} height={56} loading="lazy" />
              )}
              <span>
                <strong>{item.name}</strong>
                {item.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
