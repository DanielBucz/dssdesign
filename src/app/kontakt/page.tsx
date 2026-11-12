import { pageMetadata } from "@/config/seo";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/config/site";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { priceFaq, type FaqItem } from "@/data/faq";

const valuationFaq: FaqItem = {
  question: "Ile kosztuje wycena strony internetowej?",
  answer:
    "Wycena strony internetowej jest bezpłatna i do niczego nie zobowiązuje. Zadajemy kilka pytań o projekt i podajemy widełki cenowe według naszych pakietów. Orientacyjne ceny pakietów znajdziesz w artykule o kosztach strony.",
  link: { label: "Orientacyjne ceny pakietów – artykuł", href: "/blog/ile-kosztuje-strona-internetowa/" },
};

export const metadata = pageMetadata(
  "Wycena strony internetowej - kontakt",
  "Chcesz wycenę strony internetowej? Wypełnij formularz, zadzwoń na 668 974 402 albo napisz e-mail. Odpowiemy widełkami cenowymi po krótkiej rozmowie.",
  "/kontakt/",
);

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-page dark-page" data-nav-theme="dark">
        <p className="subpage-kicker">Kontakt</p>
        <h1>
          Wycena strony internetowej<span className="accent-dot">.</span>
        </h1>
        <p className="contact-subtitle">
          Masz pomysł? Dobrze się <span className="keep-together">składa<span className="accent-dot">.</span></span>
        </p>
        <div className="contact-panel">
          <p>
            Napisz WYCENA <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">na Instagramie</a> albo Facebooku, wypełnij formularz poniżej
            albo zadzwoń. Porozmawiajmy o tym, czego potrzebuje Twoja firma.
          </p>
          <dl>
            <div>
              <dt>E-mail</dt>
              <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">@dobrzesiesklada.www</a></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services-section contact-form-section" aria-labelledby="contact-form-title" data-nav-theme="dark">
        <div className="services-heading">
          <div className="section-kicker light" aria-hidden="true">
            <span>01</span>
            <i />
          </div>
          <h2 id="contact-form-title" className="section-title light">
            NAPISZ DO NAS<span className="accent-dot">.</span>
          </h2>
          <div className="audit-lead">
            <p>
              Zamów bezpłatną wycenę strony internetowej – wypełnij formularz wyceny
              strony internetowej, zadzwoń albo napisz e-mail.
            </p>
            <p>Jak wygląda WYCENA:</p>
            <ol className="steps-list">
              <li>Piszesz WYCENA <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">na Instagramie</a>, Facebooku albo przez formularz.</li>
              <li>Zadajemy 4 krótkie pytania o projekt.</li>
              <li>Dostajesz widełki cenowe według naszych pakietów.</li>
              <li>Rozmawiamy 15 minut i ustalamy szczegóły.</li>
            </ol>
          </div>
        </div>

        <LeadForm variant="contact" />
      </section>

      <section className="services-section contact-audit-section" aria-labelledby="contact-audit-title" data-nav-theme="dark">
        <div className="services-heading">
          <div className="section-kicker light" aria-hidden="true">
            <span>02</span>
            <i />
          </div>
          <h2 id="contact-audit-title" className="section-title light">
            AUDYT STRONY<span className="accent-dot">.</span>
          </h2>
        </div>
        <div className="content-copy">
          <p>
            Masz już stronę, ale nie przynosi zapytań? Napisz AUDYT <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">na Instagramie</a>
            albo Facebooku i dodaj adres swojej strony. W ciągu 24 godzin odpiszemy
            z 3 konkretnymi poprawkami do wdrożenia. Bez opłat i bez zobowiązań.
          </p>
          <a href="/#audyt">Zamów audyt przez formularz <span aria-hidden="true">→</span></a>
          <p>
            Wolisz najpierw zobaczyć przykłady naszych stron?
          </p>
          <a href="/projekty/">Zobacz nasze realizacje <span aria-hidden="true">→</span></a>
          <p className="case-note-small">
            Dobrze się składa (DSS Design) – projektowanie stron internetowych
            i landing page dla małych firm usługowych.
          </p>
        </div>
      </section>

      <Faq number="03" items={[valuationFaq, priceFaq]} />
    </PageShell>
  );
}
