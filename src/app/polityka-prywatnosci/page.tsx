import { pageMetadata } from "@/config/seo";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/config/site";

export const metadata = pageMetadata(
  "Polityka prywatności",
  "Jak Dobrze się składa przetwarza dane osobowe przesłane przez formularze, e-mail i telefon oraz jak działa analityka na stronie dssdesign.pl.",
  "/polityka-prywatnosci/",
);

// TODO przed publikacją: uzupełnij dane w nawiasach [ ] i daj tekst do sprawdzenia osobie znającej RODO.
// Jeśli dodasz piksel Meta lub inne narzędzie, dopisz je w sekcjach „Odbiorcy” i „Cookies” oraz w banerze zgody.
const administrator = "[Imię i nazwisko / nazwa firmy], [adres], NIP: [NIP]";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="subpage-hero dark-page legal-hero" data-nav-theme="dark">
        <p className="subpage-kicker">Polityka prywatności</p>
        <h1>
          Twoje dane<span className="accent-dot">.</span>
        </h1>
        <p>Ostatnia aktualizacja: 3 listopada 2026.</p>
      </section>

      <article className="legal-page dark-page" data-nav-theme="dark">
        <h2>1. Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest {administrator} (dalej: „Administrator”). W sprawach danych
          osobowych napisz na <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>2. Jakie dane przetwarzamy</h2>
        <ul>
          <li>Formularz kontaktowy: imię, adres e-mail, numer telefonu (opcjonalnie) i treść wiadomości.</li>
          <li>Formularz „Darmowy audyt strony”: adres strony, adres e-mail i numer telefonu (opcjonalnie).</li>
          <li>Kontakt e-mailowy i telefoniczny: dane, które sam przekażesz.</li>
          <li>Analityka (tylko po zgodzie): informacje o urządzeniu, przeglądarce, odwiedzonych podstronach, źródle wejścia i kliknięciach.</li>
        </ul>

        <h2>3. Cele i podstawy przetwarzania</h2>
        <ul>
          <li>Odpowiedź na zapytanie i przygotowanie audytu lub wyceny: art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes: kontakt z osobą, która się zgłosiła).</li>
          <li>Statystyki odwiedzin: art. 6 ust. 1 lit. a RODO (Twoja zgoda wyrażona w banerze).</li>
          <li>Ewentualne dochodzenie roszczeń lub obrona przed nimi: art. 6 ust. 1 lit. f RODO.</li>
        </ul>

        <h2>4. Odbiorcy danych</h2>
        <ul>
          <li>Web3Forms: usługa przekazująca wiadomości z formularzy na naszą skrzynkę e-mail.</li>
          <li>Google Ireland Ltd.: Google Analytics 4, wyłącznie po wyrażeniu zgody.</li>
          <li>SEOHOST (<a href="https://seohost.pl" target="_blank" rel="noopener noreferrer">seohost.pl</a>): hosting strony i obsługa skrzynki e-mail.</li>
        </ul>
        <p>
          Część dostawców może przetwarzać dane poza Europejskim Obszarem Gospodarczym. Odbywa się to na
          podstawie decyzji Komisji Europejskiej (np. EU-US Data Privacy Framework) lub standardowych klauzul
          umownych. [Zweryfikuj u każdego dostawcy.]
        </p>

        <h2>5. Jak długo przechowujemy dane</h2>
        <ul>
          <li>Dane z zapytań: przez czas korespondencji, a później do [12 miesięcy], chyba że dojdzie do współpracy.</li>
          <li>Dane analityczne: zgodnie z ustawieniem przechowywania w Google Analytics ([2 / 14] miesięcy).</li>
        </ul>

        <h2>6. Twoje prawa</h2>
        <p>
          Masz prawo do dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia
          oraz sprzeciwu. Zgodę na analitykę możesz w każdej chwili wycofać przyciskiem „Ustawienia prywatności”
          na dole strony. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania. Możesz też
          złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.
        </p>
        <p>Podanie danych w formularzach jest dobrowolne, ale bez nich nie odpowiemy na zgłoszenie.</p>

        <h2>7. Cookies i pamięć przeglądarki</h2>
        <ul>
          <li>Twoja decyzja w banerze zgody jest zapisywana w pamięci przeglądarki (localStorage), aby nie pytać ponownie.</li>
          <li>Po zgodzie Google Analytics zapisuje pliki cookie <code>_ga</code> i <code>_ga_*</code> na maksymalnie 180 dni. Po wycofaniu zgody usuwamy je.</li>
          <li>Nie używamy cookies reklamowych.</li>
        </ul>

        <h2>8. Zmiany polityki</h2>
        <p>Gdy zmienimy sposób przetwarzania danych, zaktualizujemy tę stronę i datę na górze.</p>
      </article>
    </PageShell>
  );
}
