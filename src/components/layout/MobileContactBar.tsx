import { siteConfig } from "@/config/site";

export function MobileContactBar() {
  return (
    <nav className="mobile-contact-bar" aria-label="Szybki kontakt" data-contact-location="mobile_bar">
      <a href={`tel:${siteConfig.phone}`}>
        Zadzwoń <span aria-hidden="true">→</span>
      </a>
      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
    </nav>
  );
}
