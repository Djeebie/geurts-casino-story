/*
 * content.js — dit is het enige bestand dat je hoeft te bewerken.
 *
 * Het verhaal is opgebouwd uit HOOFDSTUKKEN, en elk hoofdstuk uit BLOKKEN.
 * Je bepaalt zelf de volgorde van de blokken.
 *
 * ── Hoofdstuk ─────────────────────────────────────────────────────────────
 *   {
 *     id: "unieke-id",          // wordt de #anker-link
 *     kicker: "01",             // groot nummer
 *     eyebrow: "Het begin",     // klein label
 *     title: "De kop",          // hoofdstuktitel
 *     theme: "memoriam" | "klassiek" | "neon" | "highroller" |
 *            "arcade" | "glitch" | "blueprint",     // accent + typografie
 *     entry: "confetti" | "dust" | "neon" | "gold" | "arcade" |
 *            "explosion" | "blueprint",             // effect bij binnenkomst
 *     blocks: [ ... ]
 *   }
 *
 * ── Blokken ───────────────────────────────────────────────────────────────
 *   { type: "text",    text: "Korte of langere alinea.", size: "short" | "long" }
 *   { type: "image",   src: "assets/...", alt: "...", caption: "...",
 *                      variant: "full" | "frame" | "pin" | "parallax",
 *                      egg: "dust" | "boom" | "gold" }   // egg optioneel
 *   { type: "facts",   facts: [ { value, label, celebrate?, egg? } ] }
 *   { type: "gallery", images: [ { src, alt, caption } ] }
 *   { type: "divider" }
 *
 * Tekst die begint met "[SCHRIJF HIER" wordt als hint weergegeven.
 * variant "pin" werkt alleen op desktop (op mobiel valt hij terug op "frame").
 */

window.STORY = {
  site: {
    title: "Geurt's Casino",
    subtitle: "Drie maanden speeltuin",
    period: "1 augustus — 30 oktober 2026",
    intro: "Zaterdagochtend 8.03 uur. Vincent klikt op draw en verliest z'n eerste hand. Jacks or Better. En het casino was geopend. ",
    scrollHint: "Scroll voor het verhaal",
    heroArt: "assets/games/start.webp",
    heroArtAlt: "Startscherm van een speeltuinspel",
  },

  /* De grote cijfers in de opening. Pas gerust aan. */
  stats: [
    { value: "111", label: "dagen sinds de eerste commit" },
    { value: "1.506", label: "commits" },
    { value: "522", label: "bestanden" },
    { value: "3", label: "committers" },
    { value: "8", label: "spellen live" },
    { value: "29", label: "design-docs" },
  ],

  chapters: [
    /* ───────────────────────── 00 ───────────────────────── */
    {
      id: "proloog",
      kicker: "00",
      eyebrow: "Proloog",
      title: "d'n Ouden Geurtbot",
      theme: "memoriam",
      entry: "dust",
      blocks: [
        {
          type: "image",
          src: "assets/cards/in-memoriam.webp",
          alt: "Telegram-bericht met een in-memoriam-monument voor GeurtBot (1 feb 2016 – 28 nov 2022)",
          caption: "† 28 november 2022 — hij werd 6,5 jaar.",
          variant: "frame",
          egg: "dust",
        },
        {
          type: "text",
          text: "Op 28 november 2022 blies d'n Ouden Geurtbot zijn laatste adem uit. Hij werd 6,5 jaar. Toch vrij oud voor een bot.",
          size: "short",
        },
        {
          type: "text",
          text: "Wat weinig mensen weten is dat in de IT-wereld bots tot leven worden gebracht door baarbroeders. Dat zijn mensen die over heel moeilijke dingen kunnen nadenken, daarover in meerdere onbegrijpelijke talen kunnen schrijven en aan het eind doet je computer het niet. Maar goed. Onze eigen baarbroeders Vincent, Johannes en Merwin kregen ook zo'n ding aan de praat en daar hebben we toch veel plezier van gehad. Lekker inleveren met highcardje, verouderde adressen opvragen en toch even spieken hoe dat ene kind van dingetje ook alweer heette.",
          size: "short",
        },
        {
          type: "facts",
          facts: [
            { value: "28 nov 2022", label: "Laatste adem" },
            { value: "6,5 jaar", label: "Leeftijd" },
            { value: "Vrij oud", label: "Voor een bot" },
            { value: "2026", label: "Terug van weggeweest" },
          ],
        },
      ],
    },

    /* ───────────────────────── 01 ───────────────────────── */
    {
      id: "developer",
      kicker: "01",
      eyebrow: "Tussenspel",
      title: "Enter Won Dip Syk",
      theme: "blueprint",
      entry: "blueprint",
      blocks: [
        {
          type: "text",
          text: "[SCHRIJF HIER: korte intro — wie is dit, en waarom programmeert hij overal?]",
          size: "short",
        },
        {
          type: "image",
          src: "assets/pics/won-dip-syk-amersfoort.jpg",
          alt: "AI-beeld: de developer werkt op een laptop aan een gracht met boten en botenhuizen",
          caption: "[SCHRIJF HIER: onderschrift bij de gracht-foto]",
          variant: "full",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: korte regel tussen de foto's.]",
          size: "short",
        },
        {
          type: "image",
          src: "assets/pics/won-dip-syk-bobslee.jpg",
          alt: "AI-beeld: de developer programmeert op een laptop in een olympische bobslee op de ijsbaan",
          caption: "[SCHRIJF HIER: onderschrift bij de bobslee-foto]",
          variant: "full",
          egg: "boom",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: korte regel tussen de foto's.]",
          size: "short",
        },
        {
          type: "image",
          src: "assets/pics/won-dip-syk-desk.jpg",
          alt: "AI-beeld: de developer achter een bureau met zes monitoren in de nacht",
          caption: "[SCHRIJF HIER: onderschrift bij de nachtelijke bureau-foto]",
          variant: "full",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: korte regel tussen de foto's.]",
          size: "short",
        },
        {
          type: "image",
          src: "assets/pics/won-dip-syk-festival.jpg",
          alt: "AI-beeld: de developer codeert op vier laptops op een picknickkleed op een lampionsfestival",
          caption: "[SCHRIJF HIER: onderschrift bij de festival-foto]",
          variant: "full",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: korte regel tussen de foto's.]",
          size: "short",
        },
        {
          type: "image",
          src: "assets/pics/won-dip-syk-babi.jpg",
          alt: "AI-beeld: de developer loopt met een infuus van ijsthee door een avondmarkt",
          caption: "[SCHRIJF HIER: onderschrift bij de markt-foto]",
          variant: "full",
        },
        {
          type: "facts",
          facts: [
            { value: "5", label: "Plekken" },
            { value: "0", label: "Slaap" },
            { value: "∞", label: "Koffie", celebrate: true },
            { value: "24/7", label: "Online" },
          ],
        },
      ],
    },

    /* ───────────────────────── 02 ───────────────────────── */
    {
      id: "begin",
      kicker: "02",
      eyebrow: "Het begin",
      title: "HIGHCARDJE",
      theme: "klassiek",
      entry: "confetti",
      blocks: [
        {
          type: "image",
          src: "assets/cards/AS.png",
          alt: "Aas van schoppen",
          caption: "Terug van weggeweest",
          variant: "full",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: de allereerste avond — 10 juni 2026. Highcardje, /join, kaarten die één voor één omdraaiden, en het besef dat dit wel eens uit de hand kon lopen.]",
          size: "long",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: waarom begon het? Een grap, een weddenschap, verveling? Noem de aanleiding.]",
          size: "short",
        },
        {
          type: "facts",
          facts: [
            { value: "10 juni 2026", label: "Eerste commit" },
            { value: "Highcardje", label: "Het eerste spel" },
            { value: "Telegram-chat", label: "Het platform" },
            { value: "1", label: "Spel, verder niks" },
          ],
        },
      ],
    },

    /* ───────────────────────── 03 ───────────────────────── */
    {
      id: "opening",
      kicker: "03",
      eyebrow: "De opening",
      title: "Het casino krijgt deuren",
      theme: "neon",
      entry: "neon",
      blocks: [
        {
          type: "image",
          src: "assets/games/start.webp",
          alt: "Startscherm van een speeltuinspel",
          caption: "Van chatcommando's naar een echte lobby met tegels.",
          variant: "parallax",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: 3 juli 2026 — de Mini App. Het moment dat de bot een echt casino werd met een lobby, in plaats van wat commando's in een chat.]",
          size: "long",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: de eerste indruk — wat vond de groep ervan? En de eerste keer dat er écht GeurtCoins werden vergokt?]",
          size: "short",
        },
        {
          type: "facts",
          facts: [
            { value: "3 juli 2026", label: "Eerste Mini App-commit" },
            { value: "1 aug 2026", label: "Het casino vliegt écht los" },
            { value: "1.506", label: "Commits inmiddels", celebrate: true },
            { value: "Lobby", label: "Tegels i.p.v. commando's" },
          ],
        },
      ],
    },

    /* ───────────────────────── 04 ───────────────────────── */
    {
      id: "tafels",
      kicker: "04",
      eyebrow: "De tafels",
      title: "Blackjack, poker en een jackpot die nooit valt",
      theme: "highroller",
      entry: "gold",
      blocks: [
        {
          type: "image",
          src: "assets/games/jackpot.webp",
          alt: "JACKPOT!-animatie",
          caption: "De jackpot: reken maar niet op een snelle uitbetaling.",
          variant: "full",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: de tafelspellen arriveerden in hoog tempo — Blackjack (15 juni), Video Poker (18 juni), Deuces Wild (19 juni), Three Card Poker (26 juni), Ultimate Texas Hold'em (27 juni) en later Pai Gow (4 augustus).]",
          size: "long",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: de jackpot. Eén op 8.460 voor een suited blackjack, één op 9.150 voor een straight flush bij Jacks or Better. Iemand ooit gewonnen? Vertel het verhaal.]",
          size: "long",
        },
        {
          type: "facts",
          facts: [
            { value: "1 op 8.460", label: "Suited blackjack-jackpot", egg: "gold" },
            { value: "1 op 9.150", label: "Straight flush (JoB)" },
            { value: "1 op 3.590", label: "Straight flush+ (UTH)" },
            { value: "0,05 → 0,01 GC", label: "Jackpot-buy-in ging omlaag" },
            { value: "5× / ×2", label: "Lightning-multiplier" },
          ],
        },
      ],
    },

    /* ───────────────────────── 05 ───────────────────────── */
    {
      id: "lounge",
      kicker: "05",
      eyebrow: "De lounge & arcade",
      title: "Toen er ineens een speeltuin naast het casino kwam",
      theme: "arcade",
      entry: "arcade",
      blocks: [
        {
          type: "text",
          text: "[SCHRIJF HIER: Woordle (6 juli), Motorboat 2000 (7 juli), 2048 (4 augustus), Flappy Geurt (6 augustus), Muurtje (14 augustus) en de gokkast Golden Spin.]",
          size: "long",
        },
        {
          type: "gallery",
          images: [
            {
              src: "assets/games/background-night.webp",
              alt: "Nachtelijke achtergrond van Flappy Geurt",
              caption: "Flappy Geurt",
            },
            {
              src: "assets/games/bavarian_background.jpeg",
              alt: "Beierse achtergrond van Motorboat 2000",
              caption: "Motorboat 2000",
            },
            {
              src: "assets/games/geurt-sprite-single.webp",
              alt: "Geurt-sprite",
              caption: "Geurt, in zijn natuurlijke habitat",
            },
          ],
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: Golden Spin — de machine waarvan het huis in de tests alleen maar kon winnen. En de Golden Wheel die elke tiende spin opengaat.]",
          size: "short",
        },
        {
          type: "facts",
          facts: [
            { value: "Woordle", label: "6 juli 2026" },
            { value: "Motorboat 2000", label: "7 juli 2026" },
            { value: "2048", label: "4 augustus 2026" },
            { value: "Flappy Geurt", label: "6 augustus 2026" },
            { value: "10e spin", label: "Golden Wheel ontgrendelt" },
            { value: "30×", label: "Top-prijs op het rad" },
          ],
        },
      ],
    },

    /* ───────────────────────── 06 ───────────────────────── */
    {
      id: "waanzin",
      kicker: "06",
      eyebrow: "De waanzin",
      title: "Twee spellen op één dag",
      theme: "glitch",
      entry: "explosion",
      blocks: [
        {
          type: "image",
          src: "assets/cards/geurt-wint.jpg",
          alt: "Joker-kaart 'Geurt wint'",
          caption: "Klik maar eens op deze kaart.",
          variant: "pin",
          egg: "boom",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: 20 september 2026 — 37 commits op één dag. 'Vega's Gambit' werd omgedoopt tot Jesters, en de gedeelde raket To The Moon ging de lucht in.]",
          size: "long",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: de waanzin van de balansupdates — Foil, stempels, jokers, een payout-cap van 2.500 GC. En de halving, de gouden raket, de bagholders.]",
          size: "long",
        },
        {
          type: "facts",
          facts: [
            { value: "37 commits", label: "Op 20 september 2026", celebrate: true },
            { value: "Jesters", label: "Voorheen 'Vega's Gambit'" },
            { value: "2.500 GC", label: "Jesters payout-cap" },
            { value: "27 → 30", label: "Joker-pool groeide" },
            { value: "50×", label: "To The Moon naar de maan" },
            { value: "24 sept", label: "Let It Ride" },
          ],
        },
      ],
    },

    /* ───────────────────────── 07 ───────────────────────── */
    {
      id: "toekomst",
      kicker: "07",
      eyebrow: "Wat komt er nog",
      title: "De speeltuin raakt nooit af",
      theme: "blueprint",
      entry: "blueprint",
      blocks: [
        {
          type: "image",
          src: "assets/cards/platzak.jpg",
          alt: "Joker-kaart 'Platzak'",
          caption: "Er ligt nog genoeg op de tekentafel.",
          variant: "frame",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: wat ligt er nog? No Limit Hold'em, Geurtris, en een stapel design-docs met ideeën die het daglicht nog niet zagen.]",
          size: "long",
        },
        {
          type: "text",
          text: "[SCHRIJF HIER: een dankwoord aan wie meehielp, testte, en vooral bleef spelen. Slotzinnen.]",
          size: "short",
        },
        {
          type: "facts",
          facts: [
            { value: "64.010", label: "Regels Python", celebrate: true },
            { value: "43.718", label: "Regels TypeScript/Vue" },
            { value: "38", label: "Testbestanden" },
            { value: "29", label: "Design-docs" },
            { value: "NLHE", label: "Op de tekentafel" },
            { value: "∞", label: "Ideeën in de map docs/" },
          ],
        },
      ],
    },
  ],

  outro: {
    title: "Op naar de volgende drie maanden",
    lines: [
      "[SCHRIJF HIER: de afsluitende regel — bedank de spelers, noem de datum, en wens ze veel geluk aan de tafels.]",
    ],
    credits: [
      "Gebouwd door Vincent van Breugel, Johannes Gijsbers & Djeebie",
      "1.506 commits · 10 juni – 29 september 2026",
    ],
  },
};
