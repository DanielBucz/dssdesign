import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Porozmawiajmy o stronie, redesignie, UX/UI albo digitalowej strategii marki.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-page dark-page" data-nav-theme="dark">
        <p className="subpage-kicker">Kontakt</p>
        <h1>
          Masz pomysł? Dobrze się <span className="keep-together">składa<span className="accent-dot">.</span></span>
        </h1>
        <div className="contact-panel">
          <p>
            Dane kontaktowe są jeszcze robocze. Na tym etapie zostawiamy je jako
            czytelne placeholdery, żeby nie publikować fikcyjnych informacji firmy.
          </p>
          <dl>
            <div>
              <dt>E-mail</dt>
              <dd>do uzupełnienia</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>do uzupełnienia</dd>
            </div>
            <div>
              <dt>Social</dt>
              <dd>Instagram / Behance / LinkedIn</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageShell>
  );
}
