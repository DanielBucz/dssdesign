import { processSteps } from "@/data/services";

export function Process() {
  return (
    <section
      className="process-section"
      id="onas"
      aria-labelledby="process-title"
      data-nav-theme="light"
    >
      <div className="process-intro">
        <div className="section-kicker" aria-hidden="true">
          <span>03</span>
          <i />
        </div>
        <div>
          <h2 id="process-title" className="section-title process-title">
            JAK PRACUJEMY<span className="accent-dot">.</span>
          </h2>
          <p>
            Sprawdzony proces, dzięki któremu wiemy, że dowozimy efekt bez
            przypadkowych decyzji.
          </p>
        </div>
      </div>

      <ol className="process-timeline">
        {processSteps.map((step) => (
          <li key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
