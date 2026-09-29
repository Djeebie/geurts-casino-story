/*
 * content.js — dit is het enige bestand dat je hoeft te bewerken.
 *
 * - Schrijf je verhaal tussen de aanhalingstekens van `prose`.
 *   Regels die beginnen met "[SCHRIJF HIER" worden als hint weergegeven
 *   (schuingedrukt, gedempt). Vervang ze door je eigen tekst.
 * - Feitkaarten staan onder `facts` ({ value, label }).
 * - Een nieuw hoofdstuk toevoegen? Kopieer een heel scène-object
 *   hieronder en plak het ervoor/ertussen. De site regelt de rest.
 *
 * Optionele velden per scène:
 *   theme: "memoriam" | "klassiek" | "neon" | "highroller" |
 *          "arcade" | "glitch" | "blueprint"   (default: klassiek)
 *   entry: welk effect bij binnenkomst: "confetti" | "dust" | "neon" |
 *          "gold" | "arcade" | "explosion" | "blueprint"
 *   artEgg: "dust" | "boom" | "gold"  → klik op de afbeelding
 *
 * Optionele velden per feitkaart:
 *   celebrate: true   → sparkle-animatie bij zichtbaar worden
 *   egg: "gold"       → klik geeft een gouden confetti-explosie
 */

window.STORY = {
  site: {
    title: "Geurt's Casino",
    subtitle: "Drie maanden speeltuin",
    period: "10 juni — 29 september 2026",
    intro: "[SCHRIJF HIER: zet de toon. Eén of twee zinnen over een speeltuin die per ongeluk een casino werd.]",
    scrollHint: "Scroll voor het verhaal",
  },

  /* De grote cijfers meteen onder de titel. Pas gerust aan. */
  stats: [
    { value: "111", label: "dagen" },
    { value: "1.506", label: "commits" },
    { value: "522", label: "bestanden" },
    { value: "3", label: "committers" },
    { value: "8", label: "spellen live" },
    { value: "29", label: "design-docs" },
  ],

  spine: [
    "proloog",
    "de aanloop",
    "de opening",
    "de tafels",
    "de lounge",
    "de waanzin",
    "wat komt",
  ],

  scenes: [
    /* ───────────────────────── 00 ───────────────────────── */
    {
      id: "proloog",
      kicker: "00",
      theme: "memoriam",
      entry: "dust",
      artEgg: "dust",
      eyebrow: "Proloog",
      title: "d'n Ouden Geurtbot",
      art: "assets/cards/genaaid.jpg",
      artAlt: "Joker-kaart 'genaaid'",
      artCaption: "† 28 november 2022 — hij werd 6,5 jaar.",
      prose: [
        "[Op 28 november 2022 blies d'n Ouden Geurtbot zijn laatste adem uit. Hij werd 6,5 jaar. Toch vrij oud voor een bot.]",
        "[SCHRIJF HIER: wat deed de oude bot, en waarom duurde het tot 2026 voor er een opvolger kwam?]",
      ],
      facts: [
        { value: "28 nov 2022", label: "Laatste adem" },
        { value: "6,5 jaar", label: "Leeftijd" },
        { value: "Vrij oud", label: "Voor een bot" },
        { value: "2026", label: "Terug van weggeweest" },
      ],
    },

    /* ───────────────────────── 01 ───────────────────────── */
    {
      id: "begin",
      kicker: "01",
      theme: "klassiek",
      entry: "confetti",
      eyebrow: "Het begin",
      title: "HIGHCARDJE",
      art: "assets/cards/AS.png",
      artAlt: "Aas van schoppen",
      artCaption: "Terug van weggeweest",
      prose: [
        "[SCHRIJF HIER: de allereerste avond — 10 juni 2026. Highcardje, /join, kaarten die één voor één omdraaiden, en het besef dat dit wel eens uit de hand kon lopen.]",
        "[SCHRIJF HIER: waarom begon het? Een grap, een weddenschap, verveling? Noem de aanleiding.]",
      ],
      facts: [
        { value: "10 juni 2026", label: "Eerste commit" },
        { value: "Highcardje", label: "Het eerste spel" },
        { value: "Telegram-chat", label: "Het platform" },
        { value: "1", label: "Spel, verder niks" },
      ],
    },

    /* ───────────────────────── 02 ───────────────────────── */
    {
      id: "opening",
      kicker: "02",
      theme: "neon",
      entry: "neon",
      eyebrow: "De opening",
      title: "Het casino krijgt deuren",
      art: "assets/games/start.webp",
      artAlt: "Startscherm van een speeltuinspel",
      artCaption: "Van chatcommando's naar een echte lobby met tegels.",
      prose: [
        "[SCHRIJF HIER: 3 juli 2026 — de Mini App. Het moment dat de bot een echt casino werd met een lobby, in plaats van wat commando's in een chat.]",
        "[SCHRIJF HIER: de eerste indruk — wat vond de groep ervan? En de eerste keer dat er écht GeurtCoins werden vergokt?]",
      ],
      facts: [
        { value: "3 juli 2026", label: "Eerste Mini App-commit" },
        { value: "1 aug 2026", label: "Het casino vliegt écht los" },
        { value: "1.506", label: "Commits inmiddels", celebrate: true },
        { value: "Lobby", label: "Tegels i.p.v. commando's" },
      ],
    },

    /* ───────────────────────── 03 ───────────────────────── */
    {
      id: "tafels",
      kicker: "03",
      theme: "highroller",
      entry: "gold",
      eyebrow: "De tafels",
      title: "Blackjack, poker en een jackpot die nooit valt",
      art: "assets/games/jackpot.webp",
      artAlt: "JACKPOT!-animatie",
      artCaption: "De jackpot: reken maar niet op een snelle uitbetaling.",
      prose: [
        "[SCHRIJF HIER: de tafelspellen arriveerden in hoog tempo — Blackjack (15 juni), Video Poker (18 juni), Deuces Wild (19 juni), Three Card Poker (26 juni), Ultimate Texas Hold'em (27 juni) en later Pai Gow (4 augustus).]",
        "[SCHRIJF HIER: de jackpot. Eén op 8.460 voor een suited blackjack, één op 9.150 voor een straight flush bij Jacks or Better. Iemand ooit gewonnen? Vertel het verhaal.]",
      ],
      facts: [
        { value: "1 op 8.460", label: "Suited blackjack-jackpot", egg: "gold" },
        { value: "1 op 9.150", label: "Straight flush (JoB)" },
        { value: "1 op 3.590", label: "Straight flush+ (UTH)" },
        { value: "0,05 → 0,01 GC", label: "Jackpot-buy-in ging omlaag" },
        { value: "5× / ×2", label: "Lightning-multiplier" },
      ],
    },

    /* ───────────────────────── 04 ───────────────────────── */
    {
      id: "lounge",
      kicker: "04",
      theme: "arcade",
      entry: "arcade",
      eyebrow: "De lounge & arcade",
      title: "Toen er ineens een speeltuin naast het casino kwam",
      art: "assets/games/background-night.webp",
      artAlt: "Nachtelijke achtergrond van Flappy Geurt",
      artCaption: "Het casino kreeg een speeltuin: lounge-games en een gokkast.",
      prose: [
        "[SCHRIJF HIER: Woordle (6 juli), Motorboat 2000 (7 juli), 2048 (4 augustus), Flappy Geurt (6 augustus), Muurtje (14 augustus) en de gokkast Golden Spin.]",
        "[SCHRIJF HIER: Golden Spin — de machine waarvan het huis in de tests alleen maar kon winnen. En de Golden Wheel die elke tiende spin opengaat.]",
      ],
      facts: [
        { value: "Woordle", label: "6 juli 2026" },
        { value: "Motorboat 2000", label: "7 juli 2026" },
        { value: "2048", label: "4 augustus 2026" },
        { value: "Flappy Geurt", label: "6 augustus 2026" },
        { value: "10e spin", label: "Golden Wheel ontgrendelt" },
        { value: "30×", label: "Top-prijs op het rad" },
      ],
    },

    /* ───────────────────────── 05 ───────────────────────── */
    {
      id: "waanzin",
      kicker: "05",
      theme: "glitch",
      entry: "explosion",
      artEgg: "boom",
      eyebrow: "De waanzin",
      title: "Twee spellen op één dag",
      art: "assets/cards/geurt-wint.jpg",
      artAlt: "Joker-kaart 'Geurt wint'",
      artCaption: "20 september: Jesters én To The Moon, in één ruk door.",
      prose: [
        "[SCHRIJF HIER: 20 september 2026 — 37 commits op één dag. 'Vega's Gambit' werd omgedoopt tot Jesters, en de gedeelde raket To The Moon ging de lucht in.]",
        "[SCHRIJF HIER: de waanzin van de balansupdates — Foil, stempels, jokers, een payout-cap van 2.500 GC. En de halving, de gouden raket, de bagholders.]",
      ],
      facts: [
        { value: "37 commits", label: "Op 20 september 2026", celebrate: true },
        { value: "Jesters", label: "Voorheen 'Vega's Gambit'" },
        { value: "2.500 GC", label: "Jesters payout-cap" },
        { value: "27 → 30", label: "Joker-pool groeide" },
        { value: "50×", label: "To The Moon naar de maan" },
        { value: "24 sept", label: "Let It Ride" },
      ],
    },

    /* ───────────────────────── 06 ───────────────────────── */
    {
      id: "toekomst",
      kicker: "06",
      theme: "blueprint",
      entry: "blueprint",
      eyebrow: "Wat komt er nog",
      title: "De speeltuin raakt nooit af",
      art: "assets/cards/platzak.jpg",
      artAlt: "Joker-kaart 'Platzak'",
      artCaption: "Er ligt nog genoeg op de tekentafel.",
      prose: [
        "[SCHRIJF HIER: wat ligt er nog? No Limit Hold'em, Geurtris, en een stapel design-docs met ideeën die het daglicht nog niet zagen.]",
        "[SCHRIJF HIER: een dankwoord aan wie meehielp, testte, en vooral bleef spelen. Slotzinnen.]",
      ],
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
