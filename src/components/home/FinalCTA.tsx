type FinalCTAProps = {
  lead?: string;
  linkLabel?: string;
  /** Dodatkowe linki wewnętrzne dla osób, które już wiedzą, czego potrzebują. */
  links?: { label: string; href: string }[];
};

export function FinalCTA({
  lead = "Napisz WYCENA albo zadzwoń. Porozmawiajmy o stronie dla Twojej firmy.",
  linkLabel = "Porozmawiajmy",
  links,
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
        {links?.length ? (
          <ul className="final-cta-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label} <span aria-hidden="true">→</span></a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
