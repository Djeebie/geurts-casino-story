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

- **Prose**: elke scène heeft een `prose`-lijst. Regels die beginnen met
  `[SCHRIJF HIER: ...]` worden als hint (schuingedrukt, gedempt) getoond.
  Vervang ze door je eigen tekst. Zodra de regel niet meer met `[SCHRIJF HIER`
  begint, is het gewone tekst.
- **Feiten**: onder `facts` pas je de `value` (groot) en `label` (klein) aan.
  Optioneel: `celebrate: true` (sparkle-animatie) of `egg: "gold"`
  (klik → gouden confetti-explosie).
- **Kop/statistieken**: `site` (titel, ondertitel, periode, intro) en `stats`
  (de cijferstrook onder de titel).
- **Thema per hoofdstuk**: elk hoofdstuk heeft een eigen look. Zet `theme` op:
  `memoriam`, `klassiek`, `neon`, `highroller`, `arcade`, `glitch` of `blueprint`.
- **Effect bij binnenkomst**: `entry` kiest het effect als het hoofdstuk in beeld
  komt: `confetti`, `dust`, `neon`, `gold`, `arcade`, `explosion` of `blueprint`.
- **Klik-effect op de afbeelding**: `artEgg: "dust" | "boom" | "gold"`.

### Een hoofdstuk toevoegen

Kopieer een compleet scène-object in de `scenes`-lijst en plak het ertussen:

```js
{
  id: "mijn-nieuw-hoofdstuk",   // uniek, wordt de #anker-link
  kicker: "07",                 // het grote nummer
  theme: "neon",                // thema (zie hierboven)
  entry: "neon",                // effect bij binnenkomst
  eyebrow: "Mijn titel",        // klein label boven de kop
  title: "De kop van het hoofdstuk",
  art: "assets/games/jackpot.webp",   // optioneel; artEgg: "gold" voor een klik-effect
  artAlt: "beschrijving",
  artCaption: "onderschrift",
  prose: ["Eerste alinea.", "Tweede alinea."],
  facts: [
    { value: "42", label: "Wat het betekent" },
    { value: "1.506", label: "Bijzonder", celebrate: true },
  ],
}
```

De hoofdstukstippen aan de rechterkant, de voortgangsbalk en de thema-stijlen
regelen zichzelf.

## Thema's en effecten

- De zeven thema's staan als `.theme--*` in `css/style.css` (kleuren, typografie,
  achtergrondpatroon, feitkaartstijl en animatie).
- De deeltjes/confetti-logica staat in `js/effects.js` en gebruikt
  **canvas-confetti** (`js/confetti.min.js`, ISC-licentie — zie `js/confetti.LICENSE.txt`).
- Effecten respecteren `prefers-reduced-motion` en zijn lichter op smalle schermen.
- De lettertypes per thema komen via **Google Fonts** (netwerk nodig; zie de
  `<link>` in `index.html`).

## Beeld toevoegen

Zet afbeeldingen in `assets/` (bv. `assets/cards/` of `assets/games/`) en
verwijs ernaar met een relatief pad in `art:`. Houd ze klein (webp/jpg, < ~300 KB).

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
