"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/projekty", label: "Projekty" },
  { href: "/#uslugi", label: "Usługi" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    function updateSectionState() {
      const headerBandBottom = 132;
      const lightSections = document.querySelectorAll("[data-nav-theme='light']");
      const isLight = Array.from(lightSections).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= headerBandBottom && rect.bottom >= 0;
      });

      setIsOnLightSection(isLight);
    }

    updateSectionState();
    window.addEventListener("scroll", updateSectionState, { passive: true });
    window.addEventListener("resize", updateSectionState);

    return () => {
      window.removeEventListener("scroll", updateSectionState);
      window.removeEventListener("resize", updateSectionState);
    };
  }, []);

  return (
    <header
      className="site-header"
      aria-label="Główna nawigacja"
      data-on-light={isOnLightSection}
      data-menu-open={isMenuOpen}
    >
      <a className="skip-link" href="#main">
        Przejdź do treści
      </a>
      <nav className="nav-shell">
        <Link className="brand-mark" href="/" aria-label="Dobrze się składa, strona główna">
          <span>DOBRZE</span>
          <span>
            SIĘ SKŁADA<span className="accent-dot">.</span>
          </span>
        </Link>

        <div className="nav-links" aria-label="Sekcje strony">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="mobile-menu" id="mobile-menu" data-open="true">
          <div className="mobile-menu-inner" aria-label="Menu mobilne">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
