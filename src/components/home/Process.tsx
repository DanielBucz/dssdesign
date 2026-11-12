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
          <span>04</span>
          <i />
        </div>
        <div>
          <h2 id="process-title" className="section-title process-title">
            JAK PRACUJEMY<span className="accent-dot">.</span>
          </h2>
          <p>
            Cztery etapy od pierwszej rozmowy do strony, która zbiera zapytania.
            Każdy kończy się konkretnym efektem.
          </p>
        </div>
      </div>

      <ol className="process-timeline">
        {processSteps.map((step) => (
          <li key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <p className="process-effect">{step.effect}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
