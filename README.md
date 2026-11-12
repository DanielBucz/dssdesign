# DSS Design

Strona portfolio dla studia kreatywnego **Dobrze się składa.**

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Projekt jest skonfigurowany pod statyczny eksport Next.js.

## Formularze

Formularze kontaktowy i audytu wysyłają zgłoszenia przez [Web3Forms](https://web3forms.com) na adres przypisany do klucza. Skopiuj `.env.example` do `.env.local` i wpisz klucz w `NEXT_PUBLIC_WEB3FORMS_KEY`. Klucz trafia do kodu strony podczas `npm run build`, więc po jego zmianie zbuduj stronę ponownie.

## Treści do uzupełnienia

- Instagram: `instagramUrl` w `src/config/site.ts`. Dopóki pole jest puste, link w stopce jest ukryty.
- Opinie: `src/data/testimonials.ts` (1–3 wpisy, zdjęcia w `public/images/testimonials/`). Przy pustej liście sekcja jest ukryta, a numeracja sekcji się nie przesuwa.
- Cennik: `src/data/pricing.ts`.
- Polityka prywatności: pola w nawiasach `[ ]` w `src/app/polityka-prywatnosci/page.tsx`.

## Analityka

Google Analytics 4: `G-G7SH0HC47Y`. Integracja znajduje się w `src/components/Analytics.tsx` i jest podłączona do wspólnego layoutu.

- Tag Google ładuje się dopiero po akceptacji analityki. Decyzja jest zapamiętywana w przeglądarce. Przycisk „Ustawienia prywatności” na dole strony pozwala ją zmienić.
- Wycofanie zgody wyłącza pomiar, usuwa cookies `_ga` i `_ga_*` oraz przeładowuje stronę, aby usunąć działający tag.
- Zdarzenie `contact_click` ma parametry `contact_method` (`phone` lub `email`) i `contact_location` (`mobile_bar` dla paska kontaktu na telefonie, `page` dla pozostałych linków). Oznacza kliknięcie, a nie potwierdzony kontakt.
- Zdarzenia `contact_form_submit` (formularz na /kontakt) i `audit_form_submit` (formularz „Darmowy audyt strony”) są wysyłane dopiero po potwierdzeniu wysyłki przez Web3Forms. W GA4 oznacz je jako kluczowe zdarzenia.
- W GA4 pozostaw włączony Pomiar zaawansowany → Wyświetlenia strony → zmiany strony na podstawie zdarzeń historii przeglądarki. Obsługuje to przejścia Next.js bez ręcznego dublowania odsłon.

Wdrożenie jest automatyczne: każdy push do `main` uruchamia `.github/workflows/deploy.yml`, który buduje stronę i wgrywa folder `out` na SEOHOST przez FTP (sekrety opisane w tym pliku). Ręcznie: po `npm run build` prześlij **zawartość** folderu `out` na hosting. Nie dodawaj drugiej kopii tagu w panelu hostingu.

Po publikacji sprawdź w prywatnym oknie: brak żądań do Google Analytics/Tag Manager przed zgodą i po odmowie; po akceptacji widoczność wizyty oraz przejść między podstronami w raporcie czasu rzeczywistego/DebugView. Kliknij telefon i e-mail, aby zweryfikować `contact_click`. Wycofaj zgodę i sprawdź brak dalszego pomiaru po przeładowaniu. Blokery reklam mogą uniemożliwić pomiar.
