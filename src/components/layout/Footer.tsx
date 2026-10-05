import { siteConfig } from "@/config/site";

const navItems = [
  { label: "Projekty", href: "/projekty" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

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
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
      </address>

      <p className="footer-legal">© 2026 Dobrze się składa.</p>
    </footer>
  );
}
