# Geurt's Casino — brontekst

Dit bestand is de brontekst van het verhaal. Alles hier wordt later omgezet
naar `js/content.js`. Alleen tekst aanleveren; geen code nodig.

── Regels ───────────────────────────────────────────────────────────────
- `# 00 — Titel`            begin van een hoofdstuk (nummer koppelt het aan
                            het bestaande hoofdstuk). Titel mag je wijzigen.
- losse alinea's            elke alinea = één tekstblok (scheid met lege regel).
- `|` in een alinea         = nieuwe alinea (hetzelfde als een lege regel).
- `FEIT <waarde> | <label>` feitkaart (grote waarde | kleine uitleg).
- `BEELD <pad> | caption: <tekst>`   foto uit assets/.
- `(thema: …, effect: …)`   optioneel; laat weg = bestaande keuze blijft.
- `TITEL`/`ONDERTITEL`/`PERIODE`   velden van de opening (titelpagina).
- `STAT <waarde> | <label>`   de grote cijfers op de titelpagina.

Alinea's worden als plain text getoond: geen vet/cursief/links. Wil je iets
benadrukken, gebruik dan korte, losse alinea's.

Hints die je nog moet vervangen staan tussen [vierkante haakjes].


# Opening — titelpagina
(geen hoofdstuknummer; dit is wat je ziet vóór het verhaal begint)

TITEL Geurt's Casino
ONDERTITEL Drie maanden speeltuin
PERIODE 1 augustus — 30 oktober 2026
BEELD assets/games/start.webp

Zaterdagochtend 8.03 uur. Vincent klikt op draw en verliest z'n eerste hand. Jacks or Better. En het casino was geopend.

Man, wat is het hard gegaan. 3 maanden zijn we onderweg met het nieuwe casino... Het voelt veel langer. Het blijft bizar dat in zo'n korte tijd zo'n vette hangout is ontstaan. Props voor Vincent dat hij het initiatief nam (hartje emoji) En heel leuk dat Johannes en ik ons steentje kunnen bijdragen. En vergeet de testers niet: Dhr. Baffink en oppergokker Quint (hartje handen emoji).

Anyway, ik vond dit wel een gepast moment om een kleine ode te brengen aan Geurt's Casino. 

Ons casino.

Enjoy the ride.

STAT 111 | dagen sinds de eerste commit
STAT 1.506 | commits
STAT 522 | bestanden
STAT 3 | committers
STAT 8 | spellen live
STAT 29 | design-docs


# 00 — Proloog — d'n Ouden Geurtbot
(thema: memoriam, effect: dust)

BEELD assets/cards/in-memoriam.webp | caption: † 28 november 2022 — hij werd 6,5 jaar.

Op 28 november 2022 blies d'n Ouden Geurtbot zijn laatste adem uit. Hij werd 6,5 jaar. Toch vrij oud voor een bot.

Wat weinig mensen weten is dat in de IT-wereld bots tot leven worden gebracht door baarbroeders. Dat zijn mensen die over heel moeilijke dingen logisch kunnen nadenken, daarover in meerdere onbegrijpelijke talen kunnen schrijven en aan het eind doet je computer het niet.

Maar goed.

Onze eigen baarbroeders Vincent, Johannes en Merwin kregen ook zo'n ding aan de praat en daar hebben we toch veel plezier van gehad. Lekker inleveren met highcardje, verouderde adressen opvragen en toch even spieken hoe dat ene kind van dingetje ook alweer heette.

En borsten.

Heel veel borsten.

Ontzettend veel borsten.

Man, wat veel borsten.

...

Ik ben er nog stil van.

FEIT Geboren 1 februari 2016
FEIT Uitgezet 28 nov 2022
FEIT 6,5 jaar | Leeftijd
FEIT Borsten | Veel. Ontzettend veel.


# 01 — Tussenspel — Enter Won Dip Syk
(thema: blueprint, effect: blueprint)

Meet Won. 

Won Dip Syk.

Vincent had eerder dit jaar contact met een moddervette Amerikaan, Claude, die hem enorm veel werk uit handen nam. Eigenlijk z'n hele werk, zodat Vincent meer dan genoeg tijd had om huizen te kopen, bier te drinken en squash- en tennisrackets vast te houden. 

Alleen Claude was wel een beetje duur. Eigenlijk iets te duur. Gelukkig kopiëren ze in China eigenlijk alles wat er te kopiëren is en dus vond Vincent op een grote markt in Shanghai een, iets minder, dikke Chinees die eigenlijk alles kon wat Claude ook kon. Dus ja. 

Voor de prijs van een bordje babi pangang kon Vincent een Chinees een maand aan het werk zetten. Hmmm, misschien kon hij wel iets leuks neerzetten voor Geurt.

Met een ferme handdruk en een kleine creditcardbetaling was de samenwerking tussen Won Dip Syk en Vincent een feit.

Het eerste wapenfeit van Won? De Geurtbot reviven met Highcardje. Oldskool te spelen met /highcardje.

BEELD assets/pics/won-dip-syk-amersfoort.jpg | caption: Won aan de gracht in Amersfoort tijdens een korte vakantie deze zomer. Vincent was niet thuis, dus ze hebben elkaar niet gezien.

Interview met Won:
Interviewer: Hallo Won. Hoe heet je?
Won Dip Syk: 你好，我是温迪普·赛克，我是一个幻想。

BEELD assets/pics/won-dip-syk-bobslee.jpg | caption: Won in een bobslee tijdens de laatste Olympische Spelen. Doet 'ie ook.

Interviewer: Dat dacht ik al. Geil?
Won Dip Syk: 不，不完全是。但我确实觉得热。

BEELD assets/pics/won-dip-syk-desk.jpg | caption: Won in z'n natuurlijke habitat.

Interviewer: Het is ook wel warm ja. Biertje?
Won Dip Syk: 好的，给我来一罐Warsteiner 0.0。

BEELD assets/pics/won-dip-syk-festival.jpg | caption: Won tijdens een lokaal festival. Goed voor hem dat hij er af en toe ook even uit is.

Interviewer: Het is weekend hè. Laat je eens gaan.
Won Dip Syk: 好的，抱歉。给我来一瓶Stroh rum 80%。

BEELD assets/pics/won-dip-syk-babi.jpg | caption: Won haalt in het weekend altijd een babi pangang infuus op de markt. Gewoon. Om zichzelf te verwennen.

FEIT Babi Pangang | Lievelingseten
FEIT Nasi Goreng  | 2e lievelingseten
FEIT Bami Goreng | 3e lievelingseten
FEIT Loempia | For Life


# 02 — Het begin — HIGHCARDJE
(thema: klassiek, effect: confetti)

BEELD assets/cards/AS.png | caption: Terug van weggeweest

[SCHRIJF HIER: de allereerste avond — 10 juni 2026. Highcardje, /join, kaarten die één voor één omdraaiden, en het besef dat dit wel eens uit de hand kon lopen.]

[SCHRIJF HIER: waarom begon het? Een grap, een weddenschap, verveling? Noem de aanleiding.]

FEIT 10 juni 2026 | Eerste commit
FEIT Highcardje | Het eerste spel
FEIT Telegram-chat | Het platform
FEIT 1 | Spel, verder niks


# 03 — De opening — Het casino krijgt deuren
(thema: neon, effect: neon)

BEELD assets/games/start.webp | caption: Van chatcommando's naar een echte lobby met tegels.

[SCHRIJF HIER: 3 juli 2026 — de Mini App. Het moment dat de bot een echt casino werd met een lobby, in plaats van wat commando's in een chat.]

[SCHRIJF HIER: de eerste indruk — wat vond de groep ervan? En de eerste keer dat er écht GeurtCoins werden vergokt?]

FEIT 3 juli 2026 | Eerste Mini App-commit
FEIT 1 aug 2026 | Het casino vliegt écht los
FEIT 1.506 | Commits inmiddels
FEIT Lobby | Tegels i.p.v. commando's


# 04 — De tafels — Blackjack, poker en een jackpot die nooit valt
(thema: highroller, effect: gold)

BEELD assets/games/jackpot.webp | caption: De jackpot: reken maar niet op een snelle uitbetaling.

[SCHRIJF HIER: de tafelspellen arriveerden in hoog tempo — Blackjack (15 juni), Video Poker (18 juni), Deuces Wild (19 juni), Three Card Poker (26 juni), Ultimate Texas Hold'em (27 juni) en later Pai Gow (4 augustus).]

[SCHRIJF HIER: de jackpot. Eén op 8.460 voor een suited blackjack, één op 9.150 voor een straight flush bij Jacks or Better. Iemand ooit gewonnen? Vertel het verhaal.]

FEIT 1 op 8.460 | Suited blackjack-jackpot
FEIT 1 op 9.150 | Straight flush (JoB)
FEIT 1 op 3.590 | Straight flush+ (UTH)
FEIT 0,05 → 0,01 GC | Jackpot-buy-in ging omlaag
FEIT 5× / ×2 | Lightning-multiplier


# 05 — De lounge & arcade — Toen er ineens een speeltuin naast het casino kwam
(thema: arcade, effect: arcade)

[SCHRIJF HIER: Woordle (6 juli), Motorboat 2000 (7 juli), 2048 (4 augustus), Flappy Geurt (6 augustus), Muurtje (14 augustus) en de gokkast Golden Spin.]

BEELD assets/games/background-night.webp | caption: Flappy Geurt
BEELD assets/games/bavarian_background.jpeg | caption: Motorboat 2000
BEELD assets/games/geurt-sprite-single.webp | caption: Geurt, in zijn natuurlijke habitat

[SCHRIJF HIER: Golden Spin — de machine waarvan het huis in de tests alleen maar kon winnen. En de Golden Wheel die elke tiende spin opengaat.]

FEIT Woordle | 6 juli 2026
FEIT Motorboat 2000 | 7 juli 2026
FEIT 2048 | 4 augustus 2026
FEIT Flappy Geurt | 6 augustus 2026
FEIT 10e spin | Golden Wheel ontgrendelt
FEIT 30× | Top-prijs op het rad


# 06 — De waanzin — Twee spellen op één dag
(thema: glitch, effect: explosion)

BEELD assets/cards/geurt-wint.jpg | caption: Klik maar eens op deze kaart.

[SCHRIJF HIER: 20 september 2026 — 37 commits op één dag. 'Vega's Gambit' werd omgedoopt tot Jesters, en de gedeelde raket To The Moon ging de lucht in.]

[SCHRIJF HIER: de waanzin van de balansupdates — Foil, stempels, jokers, een payout-cap van 2.500 GC. En de halving, de gouden raket, de bagholders.]

FEIT 37 commits | Op 20 september 2026
FEIT Jesters | Voorheen 'Vega's Gambit'
FEIT 2.500 GC | Jesters payout-cap
FEIT 27 → 30 | Joker-pool groeide
FEIT 50× | To The Moon naar de maan
FEIT 24 sept | Let It Ride


# 07 — Wat komt er nog — De speeltuin raakt nooit af
(thema: blueprint, effect: blueprint)

BEELD assets/cards/platzak.jpg | caption: Er ligt nog genoeg op de tekentafel.

[SCHRIJF HIER: wat ligt er nog? No Limit Hold'em, Geurtris, en een stapel design-docs met ideeën die het daglicht nog niet zagen.]

[SCHRIJF HIER: een dankwoord aan wie meehielp, testte, en vooral bleef spelen. Slotzinnen.]

FEIT 64.010 | Regels Python
FEIT 43.718 | Regels TypeScript/Vue
FEIT 38 | Testbestanden
FEIT 29 | Design-docs
FEIT NLHE | Op de tekentafel
FEIT ∞ | Ideeën in de map docs/


# Slot — outro
(titel: Op naar de volgende drie maanden)

[SCHRIJF HIER: de afsluitende regel — bedank de spelers, noem de datum, en wens ze veel geluk aan de tafels.]
