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

## Analityka

Google Analytics 4: `G-G7SH0HC47Y`. Integracja znajduje się w `src/components/Analytics.tsx` i jest podłączona do wspólnego layoutu.

- Tag Google ładuje się dopiero po akceptacji analityki. Decyzja jest zapamiętywana w przeglądarce. Przycisk „Ustawienia prywatności” na dole strony pozwala ją zmienić.
- Wycofanie zgody wyłącza pomiar, usuwa cookies `_ga` i `_ga_*` oraz przeładowuje stronę, aby usunąć działający tag.
- Zdarzenie `contact_click` ma parametr `contact_method`: `phone` lub `email`. Oznacza kliknięcie, a nie potwierdzony kontakt.
- W GA4 pozostaw włączony Pomiar zaawansowany → Wyświetlenia strony → zmiany strony na podstawie zdarzeń historii przeglądarki. Obsługuje to przejścia Next.js bez ręcznego dublowania odsłon.

Po `npm run build` prześlij **zawartość** folderu `out` na hosting. Nie dodawaj drugiej kopii tagu w panelu hostingu.

Po publikacji sprawdź w prywatnym oknie: brak żądań do Google Analytics/Tag Manager przed zgodą i po odmowie; po akceptacji widoczność wizyty oraz przejść między podstronami w raporcie czasu rzeczywistego/DebugView. Kliknij telefon i e-mail, aby zweryfikować `contact_click`. Wycofaj zgodę i sprawdź brak dalszego pomiaru po przeładowaniu. Blokery reklam mogą uniemożliwić pomiar.
