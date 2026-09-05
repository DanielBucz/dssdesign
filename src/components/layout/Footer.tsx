const navItems = [
  { label: "Projekty", href: "/projekty" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];
const socials = ["Instagram", "Behance", "LinkedIn"];

export function Footer() {
  return (
    <footer className="site-footer" data-nav-theme="dark">
      <div className="footer-brand">
        <span>DOBRZE</span>
        <span>
          SIĘ SKŁADA<span className="accent-dot">.</span>
        </span>
      </div>

      <nav aria-label="Nawigacja w stopce">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <address id="kontakt-info">
        <span>Napisz do nas</span>
        <span>e-mail: do uzupełnienia</span>
        <span>Telefon: do uzupełnienia</span>
      </address>

      <div className="footer-socials">
        <span>Obserwuj nas</span>
        {socials.map((item) => (
          <a key={item} href="/kontakt">
            {item}
          </a>
        ))}
      </div>

      <p className="footer-legal">© 2026 Dobrze się składa. Dane kontaktowe robocze.</p>
    </footer>
  );
}
