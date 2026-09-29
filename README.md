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
- **Kop/statistieken**: `site` (titel, ondertitel, periode, intro) en `stats`
  (de cijferstrook onder de titel).

### Een hoofdstuk toevoegen

Kopieer een compleet scène-object in de `scenes`-lijst en plak het ertussen:

```js
{
  id: "mijn-nieuw-hoofdstuk",   // uniek, wordt de #anker-link
  kicker: "07",                 // het grote gouden nummer
  eyebrow: "Mijn titel",        // klein label boven de kop
  title: "De kop van het hoofdstuk",
  art: "assets/games/jackpot.webp",   // optioneel
  artAlt: "beschrijving",
  artCaption: "onderschrift",
  prose: ["Eerste alinea.", "Tweede alinea."],
  facts: [ { value: "42", label: "Wat het betekent" } ],
}
```

De hoofdstukstippen aan de rechterkant en de voortgangsbalk regelen zichzelf.

## Beeld toevoegen

Zet afbeeldingen in `assets/` (bv. `assets/cards/` of `assets/games/`) en
verwijs ernaar met een relatief pad in `art:`. Houd ze klein (webp/jpg, < ~300 KB).

## Publiceren (GitHub Pages)

1. Maak een repo aan op GitHub, bv. `geurts-casino-story`.
2. Push deze map:

   ```bash
   git remote add origin git@github.com:<gebruiker>/geurts-casino-story.git
   git push -u origin main
   ```

3. GitHub → **Settings → Pages** → *Build and deployment*:
   **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. De site staat binnen een minuut op
   `https://<gebruiker>.github.io/geurts-casino-story/`.

`.nojekyll` staat al in de repo, zodat GitHub Pages de bestanden ongewijzigd serveert.
