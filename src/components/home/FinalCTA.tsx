type FinalCTAProps = {
  lead?: string;
  linkLabel?: string;
};

export function FinalCTA({
  lead = "Napisz WYCENA albo zadzwoń. Porozmawiajmy o stronie dla Twojej firmy.",
  linkLabel = "Porozmawiajmy",
}: FinalCTAProps) {
  return (
    <section
      className="final-cta"
      id="kontakt"
      aria-labelledby="contact-title"
      data-nav-theme="dark"
    >
      <div>
        <p className="cta-kicker">Kontakt</p>
        <h2 id="contact-title">
          <span>MASZ POMYSŁ?</span>
          <span>
            DOBRZE SIĘ <span className="keep-together">SKŁADA<span className="accent-dot">.</span></span>
          </span>
        </h2>
      </div>
      <div className="final-cta-side">
        <p>{lead}</p>
        <a href="/kontakt/">
          {linkLabel} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
