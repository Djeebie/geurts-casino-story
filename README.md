# Geurt's Casino — story site

Een klein scrollytelling-verhaal dat drie maanden **Geurt's Casino** (speeltuin-bot)
viert: 10 juni – 29 september 2026. Statische site, **geen build step**, vanilla
HTML/CSS/JS.

## Lokaal bekijken

Openen via een simpele webserver (nodig zodat `js/content.js` geladen wordt):

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Het verhaal schrijven

Alles staat in **`js/content.js`**. Dat is het enige bestand dat je hoeft aan te raken.

Het verhaal bestaat uit **hoofdstukken**, en elk hoofdstuk uit **blokken** die je
vrij kunt ordenen. Tekst die begint met `[SCHRIJF HIER: ...]` wordt als hint
(schuingedrukt, gedempt) getoond; zodra je die vervangt door eigen tekst is het
gewone tekst.

### Bloktypes

```js
{ type: "text",    text: "Korte of langere alinea.", size: "short" | "long" }
{ type: "image",   src: "assets/...", alt: "...", caption: "...",
                   variant: "full" | "frame" | "pin" | "parallax",
                   egg: "dust" | "boom" | "gold" }          // egg optioneel
{ type: "facts",   facts: [ { value, label, celebrate?, egg? } ] }
{ type: "gallery", images: [ { src, alt, caption } ] }
{ type: "divider" }
```

- `variant: "full"` = beeld rand-tot-rand; `"frame"` = ingekaderd;
  `"parallax"` = traag meebewegend; `"pin"` = blijft staan terwijl je verder
  scrollt (alleen op desktop; op mobiel valt hij terug op `frame`).
- Feitkaarten: `celebrate: true` (sparkle) of `egg: "gold"` (klik → gouden
  confetti-explosie).
- Op een `image`-blok: `egg: "dust" | "boom" | "gold"` voor een klik-effect.

### Een hoofdstuk toevoegen

Kopieer een compleet hoofdstuk-object in de `chapters`-lijst en plak het ertussen:

```js
{
  id: "mijn-nieuw-hoofdstuk",   // uniek, wordt de #anker-link
  kicker: "07",                 // het grote nummer
  eyebrow: "Mijn titel",        // klein label boven de kop
  title: "De kop van het hoofdstuk",
  theme: "neon",                // memoriam | klassiek | neon | highroller |
                                // arcade | glitch | blueprint
  entry: "neon",                // effect bij binnenkomst (zie hieronder)
  blocks: [
    { type: "image", src: "assets/games/jackpot.webp", alt: "...", caption: "...", variant: "full" },
    { type: "text",  text: "Eerste alinea.", size: "long" },
    { type: "text",  text: "Tweede, korte alinea.", size: "short" },
    { type: "facts", facts: [ { value: "42", label: "Wat het betekent" } ] },
  ],
}
```

De hoofdstukstippen aan de rechterkant, de voortgangsbalk en de thema-stijlen
regelen zichzelf.

## Thema's, beweging en effecten

- **Thema's** (`.theme--*` in `css/style.css`) bepalen per hoofdstuk alleen
  **accentkleur, display-typografie, deeltjeskleur en een subtiel patroon**; de
  basisachtergrond blijft rustig. Het accent **crossfade't vloeiend** mee terwijl
  je scrollt.
- **Beweging** komt van **GSAP + ScrollTrigger** (`js/gsap.min.js`,
  `js/ScrollTrigger.min.js`; licentie in `js/gsap.LICENSE.txt`) en staat in
  **`js/story.js`**. Op desktop zijn er parallax en sticky pins; op mobiel alleen
  rustige reveals.
- **Effecten** (confetti/as/sparkle) staan in `js/effects.js` en gebruiken
  **canvas-confetti** (`js/confetti.min.js`, ISC — zie `js/confetti.LICENSE.txt`).
  `entry` kiest het effect bij binnenkomst: `confetti`, `dust`, `neon`, `gold`,
  `arcade`, `explosion` of `blueprint`.
- Alles respecteert **`prefers-reduced-motion`**. Zonder GSAP blijft een rustige
  IntersectionObserver-fallback werken.

## Beeld toevoegen

Zet afbeeldingen in `assets/` (bv. `assets/cards/` of `assets/games/`) en
verwijs ernaar met een relatief pad in `src:`. Houd ze klein (webp/jpg, < ~300 KB).

## Publiceren (GitHub Pages)

De repo **`Djeebie/geurts-casino-story`** bestaat al en `origin` is ingesteld.
Wijzigingen publiceren is dus gewoon:

```bash
git push
```

Om de site online te zetten: GitHub → **Settings → Pages** →
*Build and deployment*: **Deploy from a branch**, branch `main`, folder `/ (root)`.
De site staat dan op `https://djeebie.github.io/geurts-casino-story/`.

`.nojekyll` staat al in de repo, zodat GitHub Pages de bestanden ongewijzigd serveert.
