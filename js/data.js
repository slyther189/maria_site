/* ============================================
   data.js — Maria Buchhaus Gallery Data
   
   PAINTINGS (111): all publicly visible works.
   Schema per entry:
     id, dateiname, titel,
     groesse — physical size, on-site tape measurement, "ca. H x W cm"
       ("ca." since hand measurements carry a small margin of error)
     motiv_de / motiv_en   — category tags, restricted to the fixed set:
         Landschaft/Landscape, Natur/Nature, Stadt/City, Menschen/People,
         Akte/Nudes, Blumen/Flowers, Abstrakt/Abstrakt, Sonstiges/Others
     technik_de / technik_en — technique tags, restricted to the fixed set:
         Mischtechnik/Mixed media, Aquarell/Watercolour, Acryl/Acrylic, Öl/Oil,
         Leinwand/Canvas, Druck/Print, Tusche/Ink, Linolschnitt/Linocut, Monotypie/Monotype
     beschreibung_de / beschreibung_en — short (8-9 word) descriptions
     schlagworte — OPTIONAL. Extra search-only keywords for a specific painting,
       not shown anywhere on the page and not part of the motiv/technik pill
       taxonomies above. Used sparingly for one-off terms a visitor might
       search for that don't fit the fixed categories (e.g. "Roboter" for
       painting #36, "Automatische Welt").
     sichtbar — true for all entries here

   HIDDEN_PAINTINGS (23): unchanged from the previous pass, still using the
   old schema (farbe/stimmung/motiv/technik as free text). Deferred pending
   clarification with the client on how the hidden-gallery mechanism should work.
   ============================================ */

const PAINTINGS = [
  {
    "id": 1,
    "dateiname": "IMG_7921.jpeg",
    "titel": "Familie",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Drei schemenhafte Figuren lösen sich im dunklen Hintergrund auf.",
    "beschreibung_en": "Three shadowy figures emerge from a dark, atmospheric ground.",
    "sichtbar": true
  },
  {
    "id": 2,
    "dateiname": "IMG_7924.jpeg",
    "titel": "Explosiv",
    "groesse": "ca. 83 x 62.5 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Dunkle Komposition mit verborgenem Gesicht und diagonaler Farbenergie.",
    "beschreibung_en": "Dark composition with a hidden face and diagonal energy.",
    "sichtbar": true
  },
  {
    "id": 3,
    "dateiname": "IMG_7927.jpeg",
    "titel": "Blauer Baum",
    "groesse": "ca. 81.5 x 62 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Blauer kahler Baum vor geometrischem grün-goldenem Gitter.",
    "beschreibung_en": "Blue bare tree over a geometric green-gold grid.",
    "sichtbar": true
  },
  {
    "id": 6,
    "dateiname": "IMG_7939.jpeg",
    "titel": "Spuren",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Zartes ätherisches Abstrakt in Altrosa, Grau und Schwarz.",
    "beschreibung_en": "Delicate ethereal abstract in dusty rose, grey and black.",
    "sichtbar": true
  },
  {
    "id": 7,
    "dateiname": "IMG_7944.jpeg",
    "titel": "Mehr Spuren",
    "groesse": "ca. 80.5 x 60.5 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Dunkles Abstrakt mit weißen Pinselstrichen über Braun und Schwarz.",
    "beschreibung_en": "Dark abstract with white brushstrokes over brown and black.",
    "sichtbar": true
  },
  {
    "id": 8,
    "dateiname": "IMG_7948.jpeg",
    "titel": "Beschützerin",
    "groesse": "ca. 80.5 x 60.5 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Sitzende Figur in warmem Gelb mit tropfenden schwarzen Linien.",
    "beschreibung_en": "Seated figure in warm yellow with dripping black lines.",
    "sichtbar": true
  },
  {
    "id": 9,
    "dateiname": "IMG_7949.jpeg",
    "titel": "Steinformation",
    "groesse": "ca. 81.5 x 61 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Felsartige Formen in warmen Erdtönen mit schwarzen Konturen.",
    "beschreibung_en": "Rock-like forms in warm earth tones with dark contours.",
    "sichtbar": true
  },
  {
    "id": 10,
    "dateiname": "IMG_7963.jpeg",
    "titel": "Zerstörter Lebensraum",
    "groesse": "ca. 83 x 62.5 cm",
    "motiv_de": [
      "Natur"
    ],
    "motiv_en": [
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Baum oder Fels mit eingefügtem Foto einer Orang-Utan-Mutter.",
    "beschreibung_en": "Tree or rock with an inset orangutan mother photo.",
    "sichtbar": true
  },
  {
    "id": 11,
    "dateiname": "IMG_7968.jpeg",
    "titel": "Menschen in der Stadt",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Stadt",
      "Menschen"
    ],
    "motiv_en": [
      "City",
      "People"
    ],
    "technik_de": [
      "Aquarell",
      "Tusche"
    ],
    "technik_en": [
      "Watercolour",
      "Ink"
    ],
    "beschreibung_de": "Schemenhafte Figuren neben städtischer, industrieller Szene in Ocker.",
    "beschreibung_en": "Shadowy figures beside an ochre-toned urban, industrial scene.",
    "sichtbar": true
  },
  {
    "id": 12,
    "dateiname": "IMG_7969.jpeg",
    "titel": "Durchblick",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Zwei abstrakte Formen im Dialog aus Dunkelgrün und Rot.",
    "beschreibung_en": "Two abstract forms in dialogue, dark green and red.",
    "sichtbar": true
  },
  {
    "id": 13,
    "dateiname": "IMG_7974.jpeg",
    "titel": "Murano 1",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Stadt",
      "Menschen"
    ],
    "motiv_en": [
      "City",
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Höhlenartiges Interieur mit schemenhaften Figuren und atmosphärischem Licht.",
    "beschreibung_en": "Cave-like interior with shadowy figures and atmospheric light.",
    "sichtbar": true
  },
  {
    "id": 14,
    "dateiname": "IMG_7977.jpeg",
    "titel": "im Cafe",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Blasse schemenhafte Figuren versammeln sich am Tisch in Blaugrau.",
    "beschreibung_en": "Pale shadowy figures gather at a table in blue-grey.",
    "sichtbar": true
  },
  {
    "id": 15,
    "dateiname": "IMG_7985.jpeg",
    "titel": "in der Sauna",
    "groesse": "ca. 71.5 x 101 cm",
    "motiv_de": [
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Liegende Figur in Beige und Rosa, umgeben von Schatten.",
    "beschreibung_en": "Reclining figure in beige and pink, surrounded by shadows.",
    "sichtbar": true
  },
  {
    "id": 16,
    "dateiname": "IMG_7988.jpeg",
    "titel": "Landschaftsformationen",
    "groesse": "ca. 61.5 x 81 cm",
    "motiv_de": [
      "Landschaft",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Strukturiertes abstraktes Landschaftsbild in warme geometrische Segmente unterteilt.",
    "beschreibung_en": "Textured abstract landscape divided into warm geometric segments.",
    "sichtbar": true
  },
  {
    "id": 17,
    "dateiname": "IMG_7994.jpeg",
    "titel": "Zerstörte Hoffnung",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Aquarell",
      "Tusche"
    ],
    "technik_en": [
      "Watercolour",
      "Ink"
    ],
    "beschreibung_de": "Gebeugte Menschenmenge unter Stacheldraht — eindringliches politisches Werk.",
    "beschreibung_en": "Bowed crowd beneath barbed wire — a stark political statement.",
    "sichtbar": true
  },
  {
    "id": 18,
    "dateiname": "IMG_8003.jpeg",
    "titel": "Menage a trois",
    "groesse": "ca. 82.5 x 62.6 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Drei energetische Figuren in Bewegung, wie ein Tanz.",
    "beschreibung_en": "Three energetic figures in motion, like a dance.",
    "sichtbar": true
  },
  {
    "id": 19,
    "dateiname": "IMG_8010.jpeg",
    "titel": "Abschied nehmen",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Monochrome schemenhafte Figur löst sich aus erodierten Oberflächen.",
    "beschreibung_en": "Monochrome shadowy figure emerges from eroded surface textures.",
    "sichtbar": true
  },
  {
    "id": 20,
    "dateiname": "IMG_8021.jpeg",
    "titel": "Gesteinsbrocken",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Gedämpftes horizontales Abstrakt mit höhlenartigen Bogenformen in Ocker.",
    "beschreibung_en": "Muted horizontal abstract with cave-like arches in ochre.",
    "sichtbar": true
  },
  {
    "id": 21,
    "dateiname": "IMG_8024.jpeg",
    "titel": "Zur Moschee",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Landschaft",
      "Stadt",
      "Menschen"
    ],
    "motiv_en": [
      "Landscape",
      "City",
      "People"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Kuppel und Turm mit zentraler Figur in warmem Bernstein.",
    "beschreibung_en": "Dome and tower with a central figure in warm amber.",
    "sichtbar": true
  },
  {
    "id": 22,
    "dateiname": "IMG_8029.jpeg",
    "titel": "Kukuruz",
    "groesse": "ca. 72 x 52 cm",
    "motiv_de": [
      "Natur",
      "Blumen"
    ],
    "motiv_en": [
      "Nature",
      "Flowers"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Nahaufnahme hoher Pflanzenstängel in gesättigtem Bernstein und Orange.",
    "beschreibung_en": "Close-up of tall stalks in saturated amber and orange.",
    "sichtbar": true
  },
  {
    "id": 23,
    "dateiname": "IMG_8033.jpeg",
    "titel": "kubische Familie",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Klee-ähnliche Komposition aus bunten Formen im Bogenrahmen.",
    "beschreibung_en": "Klee-like composition of colourful shapes within an arch.",
    "sichtbar": true
  },
  {
    "id": 24,
    "dateiname": "IMG_8036.jpeg",
    "titel": "Komposition in Rot-Schwarz",
    "groesse": "ca. 81 x 61.5 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Fallende rote Figur vor zerschlitztem Grau und Schwarz.",
    "beschreibung_en": "Falling red figure against slashed grey and black.",
    "sichtbar": true
  },
  {
    "id": 25,
    "dateiname": "IMG_8042.jpeg",
    "titel": "Urlaubserinnerungen",
    "groesse": "ca. 71.5 x 52 cm",
    "motiv_de": [
      "Blumen",
      "Abstrakt"
    ],
    "motiv_en": [
      "Flowers",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Nahaufnahme einer Blüte in Blau, Violett und Grün.",
    "beschreibung_en": "Close-up of a blossom in blue, violet and green.",
    "sichtbar": true
  },
  {
    "id": 26,
    "dateiname": "IMG_8043.jpeg",
    "titel": "Narzissen",
    "groesse": "ca. 71 x 51.5 cm",
    "motiv_de": [
      "Blumen"
    ],
    "motiv_en": [
      "Flowers"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Präzises, fröhliches Aquarell mit gelben Narzissen vor blau-violettem Himmel.",
    "beschreibung_en": "Cheerful watercolour of yellow daffodils against a blue-violet sky.",
    "sichtbar": true
  },
  {
    "id": 27,
    "dateiname": "IMG_8051.jpeg",
    "titel": "Zypressen",
    "groesse": "ca. 70.5 x 51 cm",
    "motiv_de": [
      "Landschaft",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Geometrische Farbfelder in Grün, Gelb, Rot und Orange.",
    "beschreibung_en": "Geometric colour fields in green, yellow, red and orange.",
    "sichtbar": true
  },
  {
    "id": 30,
    "dateiname": "IMG_8058.jpeg",
    "titel": "Abbruch",
    "groesse": "ca. 74 x 54 cm",
    "motiv_de": [
      "Stadt",
      "Menschen"
    ],
    "motiv_en": [
      "City",
      "People"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Eingestürzter Innenraum mit freiliegendem Mauerwerk und schemenhaftem Gesicht.",
    "beschreibung_en": "Collapsed interior with exposed brick and a shadowy masked face.",
    "sichtbar": true
  },
  {
    "id": 31,
    "dateiname": "IMG_8062.jpeg",
    "titel": "Auferstehung",
    "groesse": "ca. 54 x 74 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Aquarell",
      "Tusche"
    ],
    "technik_en": [
      "Watercolour",
      "Ink"
    ],
    "beschreibung_de": "Feuer oder Zerstörung in Rot, Orange und Schwarz.",
    "beschreibung_en": "Fire or destruction in red, orange and black.",
    "sichtbar": true
  },
  {
    "id": 32,
    "dateiname": "IMG_8063.jpeg",
    "titel": "Magnolien",
    "groesse": "ca. 51 x 61 cm",
    "motiv_de": [
      "Blumen"
    ],
    "motiv_en": [
      "Flowers"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Zartes, präzises Aquarell von Magnolienblüten vor tiefem Blaugrau.",
    "beschreibung_en": "Delicate, precise watercolour of magnolia blossoms against deep blue-grey.",
    "sichtbar": true
  },
  {
    "id": 33,
    "dateiname": "IMG_8075.jpeg",
    "titel": "Sonnenuntergang",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Ruhiges Abstrakt: warmes Gold-Orange geht in tiefes Blau über.",
    "beschreibung_en": "Calm abstract: warm gold-orange merges into deep blue.",
    "sichtbar": true
  },
  {
    "id": 34,
    "dateiname": "IMG_8079.jpeg",
    "titel": "Zerstörter Lebensraum 2",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Natur"
    ],
    "motiv_en": [
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Affenmutter mit Jungtier vor dichtem goldenem Impasto-Hintergrund.",
    "beschreibung_en": "Mother monkey with infant against a dense golden impasto ground.",
    "sichtbar": true
  },
  {
    "id": 36,
    "dateiname": "IMG_8086.jpeg",
    "titel": "Automatische Welt",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Sonstiges"
    ],
    "motiv_en": [
      "Others"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Satirisches Narrativbild über Automatisierung und menschliche Entfremdung heute.",
    "beschreibung_en": "Satirical narrative on automation and modern human alienation.",
    "schlagworte": [
      "Roboter",
      "Robot"
    ],
    "sichtbar": true
  },
  {
    "id": 37,
    "dateiname": "IMG_8091.jpeg",
    "titel": "Morgen in den Bergen",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Landschaft"
    ],
    "motiv_en": [
      "Landscape"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Berggipfel tauchen durch Nebel in Tiefblau und Orange auf.",
    "beschreibung_en": "Mountain peaks emerge through mist in deep blue, orange.",
    "sichtbar": true
  },
  {
    "id": 39,
    "dateiname": "IMG_8099.jpeg",
    "titel": "Gesellschaft",
    "groesse": "ca. 75 x 58 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Dichte nächtliche Menschenmenge in Tiefblau, Schwarz und Grau.",
    "beschreibung_en": "Dense nocturnal crowd in deep blue, black and grey.",
    "sichtbar": true
  },
  {
    "id": 40,
    "dateiname": "IMG_8106.jpeg",
    "titel": "Kakadu",
    "groesse": "ca. 75 x 58 cm",
    "motiv_de": [
      "Natur"
    ],
    "motiv_en": [
      "Nature"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Weißer Kakadu auf einem Ast vor warmer Terrakotta.",
    "beschreibung_en": "White cockatoo on a branch against warm terracotta.",
    "sichtbar": true
  },
  {
    "id": 41,
    "dateiname": "IMG_8110.jpeg",
    "titel": "Kopfzerbrechen",
    "groesse": "ca. 75 x 58 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Dämonisches Seitenprofil in Rot und Gold vor Bernstein.",
    "beschreibung_en": "Demonic profile in red and gold against amber.",
    "sichtbar": true
  },
  {
    "id": 42,
    "dateiname": "IMG_8118.jpeg",
    "titel": "Zerstörte Paradiese",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Natur"
    ],
    "motiv_en": [
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Ökologische Collage mit echtem Netz und buntem Abfall.",
    "beschreibung_en": "Ecological collage with real netting and colourful debris.",
    "sichtbar": true
  },
  {
    "id": 43,
    "dateiname": "IMG_8124.jpeg",
    "titel": "Schaurige Felsen",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Großformatige texturierte Berglandschaft in Violett, Grau und Gelbgrün.",
    "beschreibung_en": "Large-scale textured mountain landscape in violet, grey, yellow-green.",
    "sichtbar": true
  },
  {
    "id": 44,
    "dateiname": "IMG_8129.jpeg",
    "titel": "Aufstieg",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Stadt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "City"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Gerundete Felsblöcke entlang eines Wegs mit dunklem Türeingang.",
    "beschreibung_en": "Rounded boulders along a path with a dark doorway.",
    "sichtbar": true
  },
  {
    "id": 45,
    "dateiname": "IMG_8136.jpeg",
    "titel": ",Gegensätze?",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Landschaft",
      "Stadt",
      "Blumen"
    ],
    "motiv_en": [
      "Landscape",
      "City",
      "Flowers"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Nächtliche Kuppel-Szene mit Minarett, Vollmond und weißer Blüte.",
    "beschreibung_en": "Nocturnal dome scene with minaret, full moon, white blossom.",
    "sichtbar": true
  },
  {
    "id": 46,
    "dateiname": "IMG_8141.jpeg",
    "titel": "Lanzarote",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Felsige Küste mit orangefarbenen Klippen und ruhigem Wasser.",
    "beschreibung_en": "Rocky coastline with orange cliffs and calm blue water.",
    "sichtbar": true
  },
  {
    "id": 47,
    "dateiname": "IMG_8146.jpeg",
    "titel": "Steirische Hügellandschaft",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Landschaft",
      "Stadt",
      "Blumen"
    ],
    "motiv_en": [
      "Landscape",
      "City",
      "Flowers"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Sanfte Hügellandschaft mit weißem Weg und roten Mohnblumen.",
    "beschreibung_en": "Gentle hills with a white path and red poppies.",
    "sichtbar": true
  },
  {
    "id": 48,
    "dateiname": "IMG_8159.jpeg",
    "titel": "Stoak wia a Fösn (steirisch)",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Nahaufnahme von texturierten Felsformen mit nebligem Bergpanorama dahinter.",
    "beschreibung_en": "Close-up of rock forms with a misty mountain backdrop.",
    "sichtbar": true
  },
  {
    "id": 49,
    "dateiname": "IMG_8164.jpeg",
    "titel": "Geheimnis der Berge",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Ockerfarbene Felsformationen unter rosa-rotem Himmel, fast figürlich.",
    "beschreibung_en": "Ochre rock formations beneath a pink-red sky, almost figural.",
    "sichtbar": true
  },
  {
    "id": 50,
    "dateiname": "IMG_8172.jpeg",
    "titel": "Gegensätze?",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Landschaft",
      "Stadt",
      "Blumen"
    ],
    "motiv_en": [
      "Landscape",
      "City",
      "Flowers"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Tagversion des Kuppel-Motivs mit sichtbarem Kreuz und Minarett.",
    "beschreibung_en": "Daytime version of the dome motif, cross beside minaret.",
    "sichtbar": true
  },
  {
    "id": 51,
    "dateiname": "IMG_8173.jpeg",
    "titel": "Verwirrend",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Gesicht taucht aus einem Wirbel aus Farben auf.",
    "beschreibung_en": "A face emerges from a swirling vortex of colour.",
    "sichtbar": true
  },
  {
    "id": 52,
    "dateiname": "IMG_8178.jpeg",
    "titel": "stürmische Familie",
    "groesse": "ca. 75 x 58 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Mehrere Gesichter wirbeln ekstatisch in Rot und Orange.",
    "beschreibung_en": "Several faces whirl ecstatically in red and orange.",
    "sichtbar": true
  },
  {
    "id": 53,
    "dateiname": "IMG_8183.jpeg",
    "titel": "Zugebaut",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Stadt"
    ],
    "motiv_en": [
      "City"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Abstrahierte Stadtblöcke unter blassem Himmel, menschenleer und still.",
    "beschreibung_en": "Abstracted city blocks under a pale, empty sky.",
    "sichtbar": true
  },
  {
    "id": 54,
    "dateiname": "IMG_8186.jpeg",
    "titel": "Glas voller Steine",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Überlappende runde Kieselformen in Pflaume, Mauve und Ocker.",
    "beschreibung_en": "Overlapping rounded pebble forms in plum, mauve and ochre.",
    "sichtbar": true
  },
  {
    "id": 55,
    "dateiname": "IMG_8193.jpeg",
    "titel": "Marmor-Steinbruch",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Steinbruchlandschaft mit kantigen Blöcken in Hellblau und Grau.",
    "beschreibung_en": "Quarry landscape with angular blocks in pale blue, grey.",
    "sichtbar": true
  },
  {
    "id": 56,
    "dateiname": "IMG_8197.jpeg",
    "titel": "Zukunft?",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Stadt",
      "Menschen"
    ],
    "motiv_en": [
      "City",
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Bogenraum in blauem Licht mit Regenbogen und Figuren.",
    "beschreibung_en": "Arched hall in blue light with a rainbow, figures.",
    "sichtbar": true
  },
  {
    "id": 57,
    "dateiname": "IMG_8200.jpeg",
    "titel": "Die Kürbisfrau",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Friedliches Gesicht zwischen orangefarbenen Rundformen vor tiefblauem Himmel.",
    "beschreibung_en": "Peaceful face among orange round forms, deep blue sky.",
    "sichtbar": true
  },
  {
    "id": 58,
    "dateiname": "IMG_8205.jpeg",
    "titel": "Neptun",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Natur",
      "Menschen"
    ],
    "motiv_en": [
      "Nature",
      "People"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Meereslandschaft mit tiefblauen Wellen und winziger bedrohter Figur.",
    "beschreibung_en": "Seascape with deep blue waves and a small figure.",
    "sichtbar": true
  },
  {
    "id": 59,
    "dateiname": "IMG_8206.jpeg",
    "titel": "Rise like a Phoenix",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Bärtige Figur im Goldkleid, gefeiert von jubelnder Menge.",
    "beschreibung_en": "Bearded figure in gold, celebrated by a cheering crowd.",
    "sichtbar": true
  },
  {
    "id": 60,
    "dateiname": "IMG_8210.jpeg",
    "titel": "Lanzarote 2",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Klare Küstenlandschaft mit Terrakotta-Klippen und leuchtendem Wasser.",
    "beschreibung_en": "Clear coastline with terracotta cliffs and luminous blue water.",
    "sichtbar": true
  },
  {
    "id": 61,
    "dateiname": "IMG_8216.jpeg",
    "titel": "alles Bio",
    "groesse": "ca. 70 x 100 cm",
    "motiv_de": [
      "Landschaft"
    ],
    "motiv_en": [
      "Landscape"
    ],
    "technik_de": [
      "Acryl",
      "Öl"
    ],
    "technik_en": [
      "Acrylic",
      "Oil"
    ],
    "beschreibung_de": "Grüne Landschaft mit Fruchtformen und Hügeln unter Orange.",
    "beschreibung_en": "Green landscape with fruit-like forms and hills under orange.",
    "sichtbar": true
  },
  {
    "id": 64,
    "dateiname": "IMG_8236.jpeg",
    "titel": "Freundinnen",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Natur",
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "Nature",
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Fragmentierte Aktfigur in Ocker mit dunkler tierischer Form.",
    "beschreibung_en": "Fragmented nude in ochre with a dark animal-like form.",
    "sichtbar": true
  },
  {
    "id": 65,
    "dateiname": "IMG_8238.jpeg",
    "titel": "Liebe",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Zwei Aktfiguren in enger Umarmung, dichte blau-graue Tupftechnik.",
    "beschreibung_en": "Two nude figures embracing, in dense blue-grey pointillist technique.",
    "sichtbar": true
  },
  {
    "id": 66,
    "dateiname": "IMG_8243.jpeg",
    "titel": "Komposition mit Kürbis",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Geometrische Bögen und Blattformen in Olivgrün und Gelb.",
    "beschreibung_en": "Geometric arches and leaf shapes in olive green, yellow.",
    "sichtbar": true
  },
  {
    "id": 67,
    "dateiname": "IMG_8246.jpeg",
    "titel": "Cubic Houses",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Stadt",
      "Abstrakt"
    ],
    "motiv_en": [
      "City",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Dichte geometrische Abstraktion aus Rechtecken und Dreiecken, Klee-ähnlich.",
    "beschreibung_en": "Dense geometric abstraction of rectangles and triangles, Klee-like.",
    "sichtbar": true
  },
  {
    "id": 68,
    "dateiname": "IMG_8252.jpeg",
    "titel": "goldene Stadt",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Landschaft",
      "Stadt"
    ],
    "motiv_en": [
      "Landscape",
      "City"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Vertikale Stadtansicht mit Türmen und Minaretten in Bernstein.",
    "beschreibung_en": "Vertical cityscape with towers and minarets in amber tones.",
    "sichtbar": true
  },
  {
    "id": 69,
    "dateiname": "IMG_8258.jpeg",
    "titel": "Komposition mit Baum",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Natur",
      "Stadt",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "City",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Geometrische Architekturkomposition mit zypressenähnlichen Bäumen in Olivgrün.",
    "beschreibung_en": "Geometric architecture with cypress-like trees in olive and ochre.",
    "sichtbar": true
  },
  {
    "id": 70,
    "dateiname": "IMG_8267.jpeg",
    "titel": "altes Bewahren",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Zurückhaltende Komposition mit Blattform und Gittermuster in Olivgrün.",
    "beschreibung_en": "Restrained composition with a leaf shape and grid pattern.",
    "sichtbar": true
  },
  {
    "id": 71,
    "dateiname": "IMG_8270.jpeg",
    "titel": "Strassencafe",
    "groesse": "ca. 71.5 x 101 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Drei schemenhafte Figuren lösen sich im Papiergrund auf.",
    "beschreibung_en": "Three shadowy figures dissolve into the paper ground.",
    "sichtbar": true
  },
  {
    "id": 72,
    "dateiname": "IMG_8274.jpeg",
    "titel": "Harlekine mit Rose",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Liegende Figur in Tupftechnik mit einzelner roter Rose.",
    "beschreibung_en": "Reclining figure in pointillist technique with a red rose.",
    "sichtbar": true
  },
  {
    "id": 73,
    "dateiname": "IMG_8279.jpeg",
    "titel": "Neumarkt",
    "groesse": "ca. 81.5 x 61.5 cm",
    "motiv_de": [
      "Stadt",
      "Abstrakt"
    ],
    "motiv_en": [
      "City",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Grüne Rundformen und Architekturfragmente in Gelbgrün und Rot.",
    "beschreibung_en": "Rounded green shapes and architectural fragments in yellow-green, red.",
    "sichtbar": true
  },
  {
    "id": 75,
    "dateiname": "IMG_8286.jpeg",
    "titel": "Rotschädl",
    "groesse": "ca. 81 x 61.5 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Aquarell",
      "Tusche"
    ],
    "technik_en": [
      "Watercolour",
      "Ink"
    ],
    "beschreibung_de": "Fragmentiertes Gesicht mit kräftigen Konturen und Tintenspritzern, maskenartig.",
    "beschreibung_en": "Fragmented face with bold contours and ink splatters, mask-like.",
    "sichtbar": true
  },
  {
    "id": 76,
    "dateiname": "IMG_8294.jpeg",
    "titel": "Akt in Brauntönen",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Liegende Aktfigur in Terrakotta, dichte Tupftechnik, Begleitstück zu #65.",
    "beschreibung_en": "Reclining nude in terracotta, dense pointillist companion to #65.",
    "sichtbar": true
  },
  {
    "id": 78,
    "dateiname": "IMG_8304.jpeg",
    "titel": "Nachts am See",
    "groesse": "ca. 51.5 x 71.5 cm",
    "motiv_de": [
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Dichte nächtliche Hafenszene mit Reflexionen im dunklen Wasser.",
    "beschreibung_en": "Dense nocturnal harbour scene with reflections in dark water.",
    "sichtbar": true
  },
  {
    "id": 80,
    "dateiname": "IMG_8316.jpeg",
    "titel": "Minka immer hungrig",
    "groesse": "ca. 51 x 41 cm",
    "motiv_de": [
      "Natur",
      "Menschen"
    ],
    "motiv_en": [
      "Nature",
      "People"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Weiße Katze mit goldenen Augen vor dunklem Interieur.",
    "beschreibung_en": "White cat with golden eyes against a dark interior.",
    "sichtbar": true
  },
  {
    "id": 81,
    "dateiname": "IMG_8322.jpeg",
    "titel": "Primeln",
    "groesse": "ca. 51 x 61 cm",
    "motiv_de": [
      "Landschaft",
      "Blumen"
    ],
    "motiv_en": [
      "Landscape",
      "Flowers"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Gelbe Primel in präzisem Aquarell vor grüner Landschaft.",
    "beschreibung_en": "Yellow primrose in precise watercolour against a green landscape.",
    "sichtbar": true
  },
  {
    "id": 84,
    "dateiname": "IMG_8337.jpeg",
    "titel": "Malfetzen",
    "groesse": "ca. 61 x 51.5 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Lockeres, flächendeckendes Abstrakt in Violett, Blau und Orange.",
    "beschreibung_en": "Loose, all-over abstract in violet, blue and orange.",
    "sichtbar": true
  },
  {
    "id": 85,
    "dateiname": "IMG_8345.jpeg",
    "titel": "Tulpen",
    "groesse": "ca. 50.5 x 60.5 cm",
    "motiv_de": [
      "Blumen"
    ],
    "motiv_en": [
      "Flowers"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Rosa und gelbe Tulpen von unten vor blau-grauem Himmel.",
    "beschreibung_en": "Pink and yellow tulips seen from below, blue-grey sky.",
    "sichtbar": true
  },
  {
    "id": 86,
    "dateiname": "IMG_8347.jpeg",
    "titel": "Veilchen und Mimosen",
    "groesse": "ca. 51 x 61 cm",
    "motiv_de": [
      "Blumen"
    ],
    "motiv_en": [
      "Flowers"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Vase mit lila Veilchen und gelben Mimosenästen, reinstes Stillleben.",
    "beschreibung_en": "Vase of violets and mimosa branches, a pure still life.",
    "sichtbar": true
  },
  {
    "id": 87,
    "dateiname": "IMG_8359.jpeg",
    "titel": "Szene im Park",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Natur",
      "Menschen"
    ],
    "motiv_en": [
      "Nature",
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Figuren und Hund im Schnee vor herbstlichen rot-orangen Bäumen.",
    "beschreibung_en": "Figures and a dog in snow before autumn red-orange trees.",
    "sichtbar": true
  },
  {
    "id": 88,
    "dateiname": "IMG_8364.jpeg",
    "titel": "Entschlossenheit",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Acryl",
      "Leinwand"
    ],
    "technik_en": [
      "Acrylic",
      "Canvas"
    ],
    "beschreibung_de": "Mehrere kubistisch zerlegte Gesichter drängen sich dicht zusammen.",
    "beschreibung_en": "Several cubist faces crowd densely together in muted tones.",
    "sichtbar": true
  },
  {
    "id": 89,
    "dateiname": "IMG_8366.jpeg",
    "titel": "Akt mit rotem Haar",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Acryl",
      "Leinwand"
    ],
    "technik_en": [
      "Acrylic",
      "Canvas"
    ],
    "beschreibung_de": "Zusammengerollter weiblicher Akt mit langem, fließendem rotbraunem Haar.",
    "beschreibung_en": "Curled female nude with long, flowing red-brown hair.",
    "sichtbar": true
  },
  {
    "id": 90,
    "dateiname": "IMG_8371.jpeg",
    "titel": "Auf der anderen Seite",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Landschaft"
    ],
    "motiv_en": [
      "Landscape"
    ],
    "technik_de": [
      "Acryl",
      "Leinwand"
    ],
    "technik_en": [
      "Acrylic",
      "Canvas"
    ],
    "beschreibung_de": "Stacheldraht vor brennendem Himmel — Grenzen und menschliches Leid.",
    "beschreibung_en": "Barbed wire against a burning sky — borders, human suffering.",
    "sichtbar": true
  },
  {
    "id": 91,
    "dateiname": "IMG_8376.jpeg",
    "titel": "Im Reisfeld",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Landschaft"
    ],
    "motiv_en": [
      "Landscape"
    ],
    "technik_de": [
      "Mischtechnik",
      "Leinwand"
    ],
    "technik_en": [
      "Mixed media",
      "Canvas"
    ],
    "beschreibung_de": "Feldarbeiterinnen mit Strohhüten in sattgrünen Reisfeldern, dokumentarisch.",
    "beschreibung_en": "Field workers in straw hats amid lush green rice paddies.",
    "sichtbar": true
  },
  {
    "id": 92,
    "dateiname": "IMG_8381.jpeg",
    "titel": "Monotypie 31",
    "groesse": "ca. 70.5 x 51 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Druck",
      "Monotypie"
    ],
    "technik_en": [
      "Print",
      "Monotype"
    ],
    "beschreibung_de": "Kraftvolle abstrakte Monotypie in Rot, Navy und Ockergelb.",
    "beschreibung_en": "Powerful abstract monotype in red, navy and ochre-yellow.",
    "sichtbar": true
  },
  {
    "id": 94,
    "dateiname": "IMG_8398.jpeg",
    "titel": "Landschaft in Flammen",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Abstrakte Vogelperspektive auf Felder, zerlegt durch türkisfarbene Linien.",
    "beschreibung_en": "Abstract bird's-eye view of fields, cut by turquoise lines.",
    "sichtbar": true
  },
  {
    "id": 95,
    "dateiname": "IMG_8411.jpeg",
    "titel": "Harlekine in Grün",
    "groesse": "ca. 61 x 81 cm",
    "motiv_de": [
      "Natur",
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "Nature",
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Sitzender weiblicher Akt aufgelöst in grünem pointillistischem Netzgeflecht.",
    "beschreibung_en": "Seated female nude dissolved into a green pointillist mesh.",
    "sichtbar": true
  },
  {
    "id": 96,
    "dateiname": "IMG_8413.jpeg",
    "titel": "Verbindungen",
    "groesse": "ca. 81.5 x 61.5 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Leuchtende Farbfelder, strukturiert durch rote und gelbgrüne Linien.",
    "beschreibung_en": "Luminous colour fields structured by red and yellow-green lines.",
    "sichtbar": true
  },
  {
    "id": 98,
    "dateiname": "IMG_8423.jpeg",
    "titel": "Sonnenenergie",
    "groesse": "ca. 61.5 x 81 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Kreisförmige Strahlenzentren über goldgelb-ockerfarbener Fläche, kosmische Energie.",
    "beschreibung_en": "Circular radiating centres over a golden-ochre field, cosmic energy.",
    "sichtbar": true
  },
  {
    "id": 100,
    "dateiname": "IMG_8448.jpeg",
    "titel": "Verzweigt",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Leuchtend orangefarbener Baumstamm verzweigt sich vor tiefblauem Hintergrund.",
    "beschreibung_en": "Vivid orange tree trunk branches against a deep blue ground.",
    "sichtbar": true
  },
  {
    "id": 101,
    "dateiname": "IMG_8451.jpeg",
    "titel": "nackter Clown",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Natur",
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "Nature",
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Weiblicher Akt zerlegt durch Netzlinien und pointillistische Farbtupfer.",
    "beschreibung_en": "Female nude broken into net lines and pointillist dots.",
    "sichtbar": true
  },
  {
    "id": 102,
    "dateiname": "IMG_8453.jpeg",
    "titel": "9-11",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Diagonale Linien strahlen aus zwei Zentren, kosmischer Aufprall.",
    "beschreibung_en": "Diagonal lines radiate from two centres, a cosmic impact.",
    "sichtbar": true
  },
  {
    "id": 106,
    "dateiname": "IMG_8463.jpeg",
    "titel": "Harlekine in Gelb",
    "groesse": "ca. 80.5 x 60 cm",
    "motiv_de": [
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Dicht gesetzte pointillistische Farbtupfer bilden kugelförmige Formen in Gelb.",
    "beschreibung_en": "Densely set pointillist dots form spherical shapes in yellow.",
    "sichtbar": true
  },
  {
    "id": 107,
    "dateiname": "IMG_8464.jpeg",
    "titel": "Am Neusiedlersee",
    "groesse": "ca. 61.5 x 81 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Nächtliches Seeufer mit aufragendem Schilf und weißen Lichtspuren.",
    "beschreibung_en": "Nocturnal lakeshore with tall reeds and streaks of light.",
    "sichtbar": true
  },
  {
    "id": 108,
    "dateiname": "IMG_8471.jpeg",
    "titel": "Akt mit Hut",
    "groesse": "ca. 75 x 55.5 cm",
    "motiv_de": [
      "Natur",
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "Nature",
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik",
      "Leinwand"
    ],
    "technik_en": [
      "Mixed media",
      "Canvas"
    ],
    "beschreibung_de": "Sitzende Figur mit dunklem Hut, erdige Palette, Schiele-Atmosphäre.",
    "beschreibung_en": "Seated figure in a dark hat, earthy Schiele-like mood.",
    "sichtbar": true
  },
  {
    "id": 110,
    "dateiname": "IMG_8483.jpeg",
    "titel": "Maschinen",
    "groesse": "ca. 76 x 56 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Acryl",
      "Leinwand"
    ],
    "technik_en": [
      "Acrylic",
      "Canvas"
    ],
    "beschreibung_de": "Kubistisch-abstrakte Komposition aus Kreisen und Rechtecken, maschinelle Energie.",
    "beschreibung_en": "Cubist-abstract composition of circles and rectangles, machine-like energy.",
    "sichtbar": true
  },
  {
    "id": 111,
    "dateiname": "IMG_8488.jpeg",
    "titel": "Tor in Graz",
    "groesse": "ca. 70 x 50 cm",
    "motiv_de": [
      "Natur",
      "Stadt"
    ],
    "motiv_en": [
      "Nature",
      "City"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Barockes Tor mit Rundbogen, rotbraune Fassaden, symmetrisch angeordnet.",
    "beschreibung_en": "Baroque gate with round arch, symmetrical red-brown façades.",
    "sichtbar": true
  },
  {
    "id": 112,
    "dateiname": "IMG_8489.jpeg",
    "titel": "Verträumt",
    "groesse": "ca. 60 x 50 cm",
    "motiv_de": [
      "Natur",
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "Nature",
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Liegende Frau mit rotem Haar, Klimt-artige Ornamentik, 1994.",
    "beschreibung_en": "Reclining woman with red hair, Klimt-like ornament, dated 1994.",
    "sichtbar": true
  },
  {
    "id": 113,
    "dateiname": "IMG_8502.jpeg",
    "titel": "Squid",
    "groesse": "ca. 81 x 61 cm",
    "motiv_de": [
      "Natur",
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Zwei quallenartige rote Formen schweben rätselhaft vor Blau.",
    "beschreibung_en": "Two jellyfish-like red forms float, surreal against blue.",
    "sichtbar": true
  },
  {
    "id": 114,
    "dateiname": "IMG_8505.jpeg",
    "titel": "Figurale Figuren",
    "groesse": "ca. 81.5 x 61.5 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Druck",
      "Monotypie"
    ],
    "technik_en": [
      "Print",
      "Monotype"
    ],
    "beschreibung_de": "Schwarz-weiße Monotypie deutet rohen Torso oder Figur an.",
    "beschreibung_en": "Black-and-white monotype hinting at a raw torso or figure.",
    "sichtbar": true
  },
  {
    "id": 115,
    "dateiname": "IMG_8514.jpeg",
    "titel": "Yellow Lines",
    "groesse": "ca. 61.5 x 81 cm",
    "motiv_de": [
      "Natur",
      "Abstrakt"
    ],
    "motiv_en": [
      "Nature",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Gelbe und rote Linien tanzen kalligrafisch über Erdbraun.",
    "beschreibung_en": "Yellow and red lines dance calligraphically over earthy brown.",
    "sichtbar": true
  },
  {
    "id": 116,
    "dateiname": "IMG_8518.jpeg",
    "titel": "Harlekine von Hinten",
    "groesse": "ca. 50 x 40 cm",
    "motiv_de": [
      "Menschen",
      "Akte"
    ],
    "motiv_en": [
      "People",
      "Nudes"
    ],
    "technik_de": [
      "Mischtechnik",
      "Leinwand"
    ],
    "technik_en": [
      "Mixed media",
      "Canvas"
    ],
    "beschreibung_de": "Stehender Akt von hinten, pointillistisch strukturiert, schwarzes Liniengitter.",
    "beschreibung_en": "Standing nude from behind, pointillist texture, black line grid.",
    "sichtbar": true
  },
  {
    "id": 117,
    "dateiname": "IMG_8519.jpeg",
    "titel": "Frühling",
    "groesse": "ca. 51 x 71 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl",
      "Leinwand"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic",
      "Canvas"
    ],
    "beschreibung_de": "Lebhafte Frühlingslandschaft mit Birke, rosa und gelben Büschen.",
    "beschreibung_en": "Vivid spring landscape with a birch, pink and yellow bushes.",
    "sichtbar": true
  },
  {
    "id": 118,
    "dateiname": "IMG_8524.jpeg",
    "titel": "Maiskolben",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Natur"
    ],
    "motiv_en": [
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Dramatische Nahaufnahme eines Maiskolbens in trockenen goldbraunen Blättern.",
    "beschreibung_en": "Dramatic close-up of a corn cob in dry golden husks.",
    "sichtbar": true
  },
  {
    "id": 119,
    "dateiname": "IMG_8526.jpeg",
    "titel": "Ayers Rock Phantasy",
    "groesse": "ca. 60 x 81 cm",
    "motiv_de": [
      "Landschaft"
    ],
    "motiv_en": [
      "Landscape"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Leuchtendes Gebirgsmassiv hebt sich dramatisch vom nachtblauen Himmel ab.",
    "beschreibung_en": "Glowing mountain massif stands dramatically against a night-blue sky.",
    "sichtbar": true
  },
  {
    "id": 120,
    "dateiname": "IMG_8529.jpeg",
    "titel": "Blaue Tür",
    "groesse": "ca. 50 x 70 cm",
    "motiv_de": [
      "Stadt"
    ],
    "motiv_en": [
      "City"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Verwitterte blaue Holztür mit ornamentalem Beschlag, mediterraner Charme.",
    "beschreibung_en": "Weathered blue wooden door with ornamental fittings, Mediterranean charm.",
    "sichtbar": true
  },
  {
    "id": 123,
    "dateiname": "IMG_8544.jpeg",
    "titel": "Sporgassen-Türke",
    "groesse": "ca. 70 x 50 cm",
    "motiv_de": [
      "Menschen"
    ],
    "motiv_en": [
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic"
    ],
    "beschreibung_de": "Expressives weißes Gesicht taucht aus glutrotem Hintergrund auf.",
    "beschreibung_en": "Expressive white face emerges from a glowing red ground.",
    "sichtbar": true
  },
  {
    "id": 124,
    "dateiname": "IMG_8545.jpeg",
    "titel": "Birkenvorhang",
    "groesse": "ca. 51.5 x 71.5 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Weiße Birkenstämme stehen vor orangefarbenem und gelbem Hintergrund.",
    "beschreibung_en": "White birch trunks stand before orange and yellow tones.",
    "sichtbar": true
  },
  {
    "id": 125,
    "dateiname": "IMG_8549.jpeg",
    "titel": "Strandpromenande",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Natur",
      "Stadt"
    ],
    "motiv_en": [
      "Nature",
      "City"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Belebte Stadtstraße bei Sonnenuntergang mit südlicher Abendstimmung, 1998.",
    "beschreibung_en": "Lively city street at sunset, a southern evening mood.",
    "sichtbar": true
  },
  {
    "id": 126,
    "dateiname": "IMG_8559.jpeg",
    "titel": "mehr Mais",
    "groesse": "ca. 80 x 60 cm",
    "motiv_de": [
      "Natur"
    ],
    "motiv_en": [
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Goldgelber Maiskolben liegt vor violett-lila fließendem Hintergrund, träumerisch.",
    "beschreibung_en": "Golden corn cob against a flowing violet-lilac ground, dreamlike.",
    "sichtbar": true
  },
  {
    "id": 127,
    "dateiname": "IMG_8565.jpeg",
    "titel": "in Bewegung",
    "groesse": "ca. 70 x 80 cm",
    "motiv_de": [
      "Abstrakt"
    ],
    "motiv_en": [
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik"
    ],
    "technik_en": [
      "Mixed media"
    ],
    "beschreibung_de": "Geometrische Flächen in Rotbraun und Ocker, gestisch fragmentiert.",
    "beschreibung_en": "Geometric planes in red-brown and ochre, gestural and fragmented.",
    "sichtbar": true
  },
  {
    "id": 128,
    "dateiname": "IMG_8571.jpeg",
    "titel": "Mystic Tree",
    "groesse": "ca. 50 x 70 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Mischtechnik",
      "Acryl",
      "Leinwand"
    ],
    "technik_en": [
      "Mixed media",
      "Acrylic",
      "Canvas"
    ],
    "beschreibung_de": "Dunkler Baumstamm ragt aus stark strukturiertem olivgrün-beigem Untergrund.",
    "beschreibung_en": "Dark trunk rises from a heavily textured olive-beige ground.",
    "sichtbar": true
  },
  {
    "id": 129,
    "dateiname": "IMG_8573.jpeg",
    "titel": "Nächtliche Dächer",
    "groesse": "ca. 60 x 80 cm",
    "motiv_de": [
      "Stadt",
      "Menschen"
    ],
    "motiv_en": [
      "City",
      "People"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Nächtliche Stadtlandschaft mit kubistischen Dächern, Fenstern und Katzensilhouette.",
    "beschreibung_en": "Nocturnal cityscape with cubist rooftops and a cat silhouette.",
    "sichtbar": true
  },
  {
    "id": 130,
    "dateiname": "IMG_8576.jpeg",
    "titel": "Steirerland",
    "groesse": "ca. 50 x 68 cm",
    "motiv_de": [
      "Landschaft",
      "Natur",
      "Stadt"
    ],
    "motiv_en": [
      "Landscape",
      "Nature",
      "City"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Weitläufige Hügellandschaft unter leuchtend orange-gelbem Abendhimmel, großformatig.",
    "beschreibung_en": "Expansive hilly landscape beneath a luminous orange-yellow evening sky.",
    "sichtbar": true
  },
  {
    "id": 131,
    "dateiname": "IMG_8584.jpeg",
    "titel": "Winter",
    "groesse": "ca. 50 x 70 cm",
    "motiv_de": [
      "Landschaft",
      "Natur"
    ],
    "motiv_en": [
      "Landscape",
      "Nature"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "Watercolour"
    ],
    "beschreibung_de": "Verschneites Dorf mit spitzem Kirchturm unter türkis-blauem Winterhimmel.",
    "beschreibung_en": "Snow-covered village with a steeple under a turquoise winter sky.",
    "sichtbar": true
  },
  {
    "id": 132,
    "dateiname": "IMG_8587.jpeg",
    "titel": "Felsenakt",
    "groesse": "ca. 57 x 38 cm",
    "motiv_de": [
      "Menschen",
      "Abstrakt"
    ],
    "motiv_en": [
      "People",
      "Abstrakt"
    ],
    "technik_de": [
      "Mischtechnik",
      "Aquarell"
    ],
    "technik_en": [
      "Mixed media",
      "Watercolour"
    ],
    "beschreibung_de": "Abstrahierter Torso in Grau und Lila, traumhafte Qualität.",
    "beschreibung_en": "Abstracted torso in grey and lilac, dreamlike quality.",
    "sichtbar": true
  },
  {
    "id": 133,
    "dateiname": "IMG_8592.jpeg",
    "titel": "Doldenblüte",
    "groesse": "ca. 40.5 x 30.5 cm",
    "motiv_de": [
      "Natur",
      "Blumen"
    ],
    "motiv_en": [
      "Nature",
      "Flowers"
    ],
    "technik_de": [
      "Druck",
      "Linolschnitt"
    ],
    "technik_en": [
      "Print",
      "Linocut"
    ],
    "beschreibung_de": "Originaler Linolschnitt mit weißen Doldenblüten auf schwarzem Grund.",
    "beschreibung_en": "Original linocut with white umbel flowers on black ground.",
    "sichtbar": true
  }
];

const HIDDEN_PAINTINGS = [
  {
    "id": 4,
    "dateiname": "IMG_7931.jpeg",
    "titel": "vernetzt",
    "farbe_de": [
      "Grün",
      "Blau",
      "Gelb",
      "Rot",
      "Weiß"
    ],
    "farbe_en": [
      "green",
      "blue",
      "yellow",
      "red",
      "white"
    ],
    "motiv_de": [
      "Figur",
      "Netz",
      "Abstrakt",
      "experimentell"
    ],
    "motiv_en": [
      "figure",
      "net",
      "abstract",
      "experimental"
    ],
    "stimmung_de": [
      "geheimnisvoll",
      "organisch",
      "intensiv"
    ],
    "stimmung_en": [
      "mysterious",
      "organic",
      "intense"
    ],
    "technik_de": [
      "Mischtechnik",
      "experimentell",
      "Collage"
    ],
    "technik_en": [
      "mixed media",
      "experimental",
      "collage"
    ],
    "beschreibung_de": "Eine Figur hinter einer großformatigen Netzstruktur mit leuchtendem rot-orangem Zentrum — möglicherweise mit echtem Netzgewebe im Material.",
    "beschreibung_en": "A figure behind a large-scale net or mesh texture with a glowing red-orange centre, possibly with real netting embedded in the surface.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 5,
    "dateiname": "IMG_7938.jpeg",
    "titel": "Lebensfluss",
    "farbe_de": [
      "Blau",
      "Gelbgrün",
      "Weiß",
      "Dunkelgrün"
    ],
    "farbe_en": [
      "blue",
      "yellow-green",
      "white",
      "dark green"
    ],
    "motiv_de": [
      "Wasser",
      "Wellen",
      "Landschaft",
      "Abstrakt"
    ],
    "motiv_en": [
      "water",
      "waves",
      "landscape",
      "abstract"
    ],
    "stimmung_de": [
      "bewegt",
      "dynamisch",
      "kraftvoll"
    ],
    "stimmung_en": [
      "dynamic",
      "energetic",
      "powerful"
    ],
    "technik_de": [
      "Mischtechnik",
      "Impasto"
    ],
    "technik_en": [
      "mixed media",
      "impasto"
    ],
    "beschreibung_de": "Wellenartige Formen in tiefem Blau und Gelbgrün mit starker Impasto-Textur, die an ein stürmisches Meer oder eine Luftlandschaft erinnern.",
    "beschreibung_en": "Rolling wave-like forms in deep blue and yellow-green with heavy impasto texture, evoking a turbulent seascape or aerial landscape.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 28,
    "dateiname": "IMG_8056.jpeg",
    "titel": "Caorle 1",
    "farbe_de": [
      "Gelb",
      "Weiß",
      "Terrakotta",
      "Grün",
      "Blau"
    ],
    "farbe_en": [
      "yellow",
      "white",
      "terracotta",
      "green",
      "blue"
    ],
    "motiv_de": [
      "Stadtansicht",
      "Architektur",
      "Straße",
      "Mediterran"
    ],
    "motiv_en": [
      "townscape",
      "architecture",
      "street",
      "mediterranean"
    ],
    "stimmung_de": [
      "warm",
      "heiter",
      "einladend"
    ],
    "stimmung_en": [
      "warm",
      "cheerful",
      "inviting"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "watercolour"
    ],
    "beschreibung_de": "Sonnige mediterrane Straßenszene mit weißen und gelben Gebäuden, Terrakottadächern, Tontöpfen und einem Baum — möglicherweise ein Werk eines anderen Künstlers (signiert O. Trebas).",
    "beschreibung_en": "Sunny Mediterranean street scene with white and yellow buildings, terracotta roofs, clay pots and a tree — possibly by a different artist (signed O. Trebas).",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 29,
    "dateiname": "IMG_8057.jpeg",
    "titel": "gelber Akt 1",
    "farbe_de": [
      "Gelb",
      "Grün",
      "Braun",
      "Blau",
      "Weiß"
    ],
    "farbe_en": [
      "yellow",
      "green",
      "brown",
      "blue",
      "white"
    ],
    "motiv_de": [
      "Akt",
      "Figur",
      "sitzend",
      "Studie"
    ],
    "motiv_en": [
      "nude",
      "figure",
      "seated",
      "study"
    ],
    "stimmung_de": [
      "zart",
      "spontan",
      "lebendig"
    ],
    "stimmung_en": [
      "delicate",
      "spontaneous",
      "lively"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "watercolour"
    ],
    "beschreibung_de": "Lockeres, flüssiges Aquarell eines sitzenden Aktes in Gelb, Grün und Erdrot auf weißem Grund — gestisch und skizzenartig.",
    "beschreibung_en": "Loose fluid watercolour nude of a seated figure in yellow, green and earthy red on a bare white ground — gestural and sketch-like.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 35,
    "dateiname": "IMG_8084.jpeg",
    "titel": "Akt in Flammen",
    "farbe_de": [
      "Orange",
      "Rot",
      "Gelb",
      "Weiß",
      "Braun"
    ],
    "farbe_en": [
      "orange",
      "red",
      "yellow",
      "white",
      "brown"
    ],
    "motiv_de": [
      "Akt",
      "Figur",
      "weiblich",
      "Gruppe"
    ],
    "motiv_en": [
      "nude",
      "figure",
      "female",
      "group"
    ],
    "stimmung_de": [
      "kraftvoll",
      "sinnlich",
      "warm"
    ],
    "stimmung_en": [
      "powerful",
      "sensual",
      "warm"
    ],
    "technik_de": [
      "Acryl",
      "Mischtechnik"
    ],
    "technik_en": [
      "acrylic",
      "mixed media"
    ],
    "beschreibung_de": "Großformatiges horizontales Gemälde einer weiblichen Aktfigur in flammendem Orange-Rot mit erhobenen Armen, umgeben von geisterhaften Figuren.",
    "beschreibung_en": "Large horizontal painting of a nude female figure in fiery orange-red with arms raised, surrounded by ghostly figures.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 38,
    "dateiname": "IMG_8095.jpeg",
    "titel": "Zwei gelbe Akte intim",
    "farbe_de": [
      "Gelb",
      "Orange",
      "Gold",
      "Grün",
      "Braun"
    ],
    "farbe_en": [
      "yellow",
      "orange",
      "gold",
      "green",
      "brown"
    ],
    "motiv_de": [
      "Akt",
      "Figur",
      "liegend",
      "weiblich"
    ],
    "motiv_en": [
      "nude",
      "figure",
      "reclining",
      "female"
    ],
    "stimmung_de": [
      "sinnlich",
      "warm",
      "intensiv"
    ],
    "stimmung_en": [
      "sensual",
      "warm",
      "intense"
    ],
    "technik_de": [
      "Acryl",
      "Mischtechnik"
    ],
    "technik_en": [
      "acrylic",
      "mixed media"
    ],
    "beschreibung_de": "Großformatiger liegender Akt in sattem Gold und Orange mit gestischen Kratzspuren — Figur und Hintergrund verschmelzen zu einer intensiv warmen Einheit.",
    "beschreibung_en": "Large reclining nude suffused in golden yellow and orange with scratched gestural marks — figure and ground almost merge into an intensely warm whole.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 62,
    "dateiname": "IMG_8219.jpeg",
    "titel": "Schildkröte gefangen",
    "farbe_de": [
      "Blau",
      "Grün",
      "Gelb",
      "Orange",
      "Schwarz"
    ],
    "farbe_en": [
      "blue",
      "green",
      "yellow",
      "orange",
      "black"
    ],
    "motiv_de": [
      "Meer",
      "Fisch",
      "Netz",
      "ökologisch",
      "Unterwasser"
    ],
    "motiv_en": [
      "sea",
      "fish",
      "net",
      "ecological",
      "underwater"
    ],
    "stimmung_de": [
      "mahnend",
      "surreal",
      "melancholisch"
    ],
    "stimmung_en": [
      "cautionary",
      "surreal",
      "melancholic"
    ],
    "technik_de": [
      "Mischtechnik",
      "Collage",
      "experimentell"
    ],
    "technik_en": [
      "mixed media",
      "collage",
      "experimental"
    ],
    "beschreibung_de": "Unterwasserszene mit eingearbeitetem echtem Netz — ein gefangener Fisch mit ausdrucksstarken Augen, ein Hai, Quallen und Meerestiere — Teil der ökologischen Netzserie.",
    "beschreibung_en": "Underwater scene with real netting embedded in the surface — a trapped fish with expressive eyes, a shark, jellyfish and sea creatures — part of the ecological net series.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 63,
    "dateiname": "IMG_8229.jpeg",
    "titel": "Küstenszene",
    "farbe_de": [
      "Blau",
      "Weiß",
      "Grün",
      "Gelb",
      "Grau"
    ],
    "farbe_en": [
      "blue",
      "white",
      "green",
      "yellow",
      "grey"
    ],
    "motiv_de": [
      "Küste",
      "Felsen",
      "Meer",
      "Insel",
      "Natur"
    ],
    "motiv_en": [
      "coast",
      "rocks",
      "sea",
      "island",
      "nature"
    ],
    "stimmung_de": [
      "ruhig",
      "klar",
      "malerisch"
    ],
    "stimmung_en": [
      "calm",
      "clear",
      "scenic"
    ],
    "technik_de": [
      "Aquarell",
      "Acryl"
    ],
    "technik_en": [
      "watercolour",
      "acrylic"
    ],
    "beschreibung_de": "Präzise, leuchtende Küstenszene mit weißen Felsblöcken, blauem Wasser, Zypressen und einer fernen Insel — möglicherweise eine andere Signatur, mit Maria zu klären.",
    "beschreibung_en": "Precise luminous coastal scene with white boulders, blue water, cypress trees and a distant island — signed differently, worth clarifying with Maria.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 74,
    "dateiname": "IMG_8283.jpeg",
    "titel": "blasser Akt",
    "farbe_de": [
      "Grün",
      "Blau",
      "Gelb",
      "Beige",
      "Braun"
    ],
    "farbe_en": [
      "green",
      "blue",
      "yellow",
      "beige",
      "brown"
    ],
    "motiv_de": [
      "Akt",
      "Figur",
      "sitzend",
      "Studie"
    ],
    "motiv_en": [
      "nude",
      "figure",
      "seated",
      "study"
    ],
    "stimmung_de": [
      "spontan",
      "leicht",
      "zart"
    ],
    "stimmung_en": [
      "spontaneous",
      "light",
      "delicate"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "watercolour"
    ],
    "beschreibung_de": "Lockere Aquarell-Aktstudie einer sitzenden Figur in Grün, Blau und Gelb auf weißem Grund — flüssig und gestisch.",
    "beschreibung_en": "Loose watercolour nude study of a seated figure in green, blue and yellow on bare paper — fluid and gestural.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 79,
    "dateiname": "IMG_8311.jpeg",
    "titel": "keine Ahnung",
    "farbe_de": [
      "Schwarz",
      "Weiß",
      "Grau"
    ],
    "farbe_en": [
      "black",
      "white",
      "grey"
    ],
    "motiv_de": [
      "Stillleben",
      "Objekte",
      "monochrom",
      "experimentell"
    ],
    "motiv_en": [
      "still life",
      "objects",
      "monochrome",
      "experimental"
    ],
    "stimmung_de": [
      "kühl",
      "technisch",
      "rätselhaft"
    ],
    "stimmung_en": [
      "cool",
      "technical",
      "enigmatic"
    ],
    "technik_de": [
      "Fotogramm",
      "Drucktechnik"
    ],
    "technik_en": [
      "photogram",
      "print technique"
    ],
    "beschreibung_de": "Monochromes Fotogramm oder Röntgenbild-ähnliche Komposition mit Küchenutensilien, Töpfen und Drahtformen auf dunklem Grund — technisch einzigartig in der Sammlung.",
    "beschreibung_en": "Monochrome photogram or X-ray-like composition of kitchen graters, pots and wire forms on a dark ground — technically unique in the collection.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 93,
    "dateiname": "IMG_8392.jpeg",
    "titel": "Raupe Nimmersatt",
    "farbe_de": [
      "grün",
      "orange",
      "gelb",
      "blau",
      "schwarz",
      "weiß"
    ],
    "farbe_en": [
      "green",
      "orange",
      "yellow",
      "blue",
      "black",
      "white"
    ],
    "motiv_de": [
      "Kreise",
      "Spirale",
      "abstrakt",
      "geometrische Formen",
      "Bewegung"
    ],
    "motiv_en": [
      "circles",
      "spiral",
      "abstract",
      "geometric forms",
      "movement"
    ],
    "stimmung_de": [
      "spielerisch",
      "lebendig",
      "heiter",
      "energetisch"
    ],
    "stimmung_en": [
      "playful",
      "lively",
      "cheerful",
      "energetic"
    ],
    "technik_de": [
      "Mischtechnik",
      "Papier",
      "Pastell",
      "Acryl",
      "gerahmt"
    ],
    "technik_en": [
      "mixed media",
      "paper",
      "pastel",
      "acrylic",
      "framed"
    ],
    "beschreibung_de": "Leuchtende orange und gelbe Kreisformen werden von schwungvollen grünen Spiralbewegungen umschlossen. Die lockere, skizzenhafte Linienführung und die strahlenden Farben verleihen dem Bild Leichtigkeit und Energie.",
    "beschreibung_en": "Vivid orange and yellow circular forms are enclosed by sweeping green spiral movements. The loose, sketchy linework and radiant colours give the work a sense of lightness and energy.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 105,
    "dateiname": "IMG_8461.jpeg",
    "titel": "Josefs Haus",
    "farbe_de": [
      "blau",
      "dunkelblau",
      "beige",
      "grau",
      "braun",
      "gelb"
    ],
    "farbe_en": [
      "blue",
      "dark blue",
      "beige",
      "grey",
      "brown",
      "yellow"
    ],
    "motiv_de": [
      "Bäume",
      "Gebäude",
      "Hof",
      "Landschaft",
      "Schatten",
      "Architektur"
    ],
    "motiv_en": [
      "trees",
      "building",
      "courtyard",
      "landscape",
      "shadows",
      "architecture"
    ],
    "stimmung_de": [
      "ruhig",
      "licht",
      "sommerlich",
      "offen",
      "luftig"
    ],
    "stimmung_en": [
      "calm",
      "bright",
      "summery",
      "open",
      "airy"
    ],
    "technik_de": [
      "Aquarell",
      "Papier",
      "gerahmt"
    ],
    "technik_en": [
      "watercolour",
      "paper",
      "framed"
    ],
    "beschreibung_de": "Blaue Bäume mit filigranem Geäst rahmen einen hellen Innenhof mit einem ockergelben Gebäude im Hintergrund. Schatten spielen auf dem weißen Boden. Die lockere Aquarelltechnik verleiht der Szene Transparenz und Leichtigkeit.",
    "beschreibung_en": "Blue trees with delicate branching frame a bright courtyard with an ochre-yellow building in the background. Shadows play across the white ground. The loose watercolour technique gives the scene transparency and lightness.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 109,
    "dateiname": "IMG_8481.jpeg",
    "titel": "Caorle 2",
    "farbe_de": [
      "rosa",
      "beige",
      "cremeweiß",
      "grün",
      "grau",
      "blau"
    ],
    "farbe_en": [
      "pink",
      "beige",
      "cream white",
      "green",
      "grey",
      "blue"
    ],
    "motiv_de": [
      "Stadtansicht",
      "Gasse",
      "Gebäude",
      "Architektur",
      "Fenster",
      "Blumen"
    ],
    "motiv_en": [
      "townscape",
      "alley",
      "buildings",
      "architecture",
      "windows",
      "flowers"
    ],
    "stimmung_de": [
      "heiter",
      "mediterran",
      "alltäglich",
      "leicht",
      "sonnig"
    ],
    "stimmung_en": [
      "cheerful",
      "Mediterranean",
      "everyday",
      "light",
      "sunny"
    ],
    "technik_de": [
      "Aquarell",
      "Papier",
      "gerahmt"
    ],
    "technik_en": [
      "watercolour",
      "paper",
      "framed"
    ],
    "beschreibung_de": "Eine enge Gasse zwischen mehrstöckigen Häusern in Rosé und Gelb, mit einem markanten Schornstein im Zentrum. Blumenkästen an den Fenstern und ein Markisendach rechts verleihen der Szene südeuropäischen Charme. Die lockere Aquarelltechnik betont Licht und Leichtigkeit.",
    "beschreibung_en": "A narrow alley between multi-storey buildings in pink and yellow, with a distinctive chimney at the centre. Window boxes and an awning on the right lend the scene southern European charm. The loose watercolour technique emphasises light and airiness.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 122,
    "dateiname": "IMG_8535.jpeg",
    "titel": "stadtbild",
    "farbe_de": [
      "rosa",
      "beige",
      "cremeweiß",
      "grün",
      "grau",
      "blau",
      "gelb"
    ],
    "farbe_en": [
      "pink",
      "beige",
      "cream white",
      "green",
      "grey",
      "blue",
      "yellow"
    ],
    "motiv_de": [
      "Stadtansicht",
      "Gasse",
      "Gebäude",
      "Architektur",
      "Fenster",
      "Blumen"
    ],
    "motiv_en": [
      "townscape",
      "alley",
      "buildings",
      "architecture",
      "windows",
      "flowers"
    ],
    "stimmung_de": [
      "heiter",
      "mediterran",
      "alltäglich",
      "leicht",
      "sonnig"
    ],
    "stimmung_en": [
      "cheerful",
      "Mediterranean",
      "everyday",
      "light",
      "sunny"
    ],
    "technik_de": [
      "Aquarell",
      "Papier",
      "ungerahmt"
    ],
    "technik_en": [
      "watercolour",
      "paper",
      "unframed"
    ],
    "beschreibung_de": "Dieselbe Gasse mit Schornstein, rosa und gelben Gebäuden wie in #109 — möglicherweise eine Vorstudie oder Variante desselben Motivs. Die Palette ist etwas heller und kühler, die Linienführung etwas lockerer. Ungerahmt.",
    "beschreibung_en": "The same alley with chimney, pink and yellow buildings as in #109 — possibly a preliminary study or variant of the same motif. The palette is somewhat lighter and cooler, the linework slightly looser. Unframed.",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 134,
    "dateiname": "IMG_8594.jpeg",
    "titel": "Taxböck Irene Bild",
    "farbe_de": [
      "schwarz",
      "weiß",
      "grau"
    ],
    "farbe_en": [
      "black",
      "white",
      "grey"
    ],
    "motiv_de": [
      "Elefant",
      "Tier",
      "Bäume",
      "Natur",
      "Afrika",
      "Linolschnitt"
    ],
    "motiv_en": [
      "elephant",
      "animal",
      "trees",
      "nature",
      "Africa",
      "linocut"
    ],
    "stimmung_de": [
      "kraftvoll",
      "ruhig",
      "grafisch",
      "archaisch",
      "naturverbunden"
    ],
    "stimmung_en": [
      "powerful",
      "calm",
      "graphic",
      "archaic",
      "connected to nature"
    ],
    "technik_de": [
      "Linolschnitt",
      "Druckgrafik",
      "Papier",
      "gerahmt",
      "nummeriert 4/5",
      "signiert",
      "datiert 1996"
    ],
    "technik_en": [
      "linocut",
      "print",
      "paper",
      "framed",
      "numbered 4/5",
      "signed",
      "dated 1996"
    ],
    "beschreibung_de": "Ein Linolschnitt (4/5) mit einem Elefanten unter ausladenden Bäumen in starker schwarz-weißer Flächenwirkung. Die Silhouette des Tieres und das kahle Astwerk sind expressiv vereinfacht. Signiert und datiert 1996 — Vorname auf Signatur zur Klärung mit Maria (liest sich möglicherweise nicht als 'Maria').",
    "beschreibung_en": "A linocut (4/5) depicting an elephant beneath spreading trees in bold black-and-white surface contrast. The animal's silhouette and bare branches are expressively simplified. Signed and dated 1996 — first name on signature to be clarified with Maria (may not read as 'Maria').",
    "sichtbar": false,
    "kategorie_zusatz": "Tante"
  },
  {
    "id": 77,
    "dateiname": "IMG_8297.jpeg",
    "titel": "Im Frühling",
    "farbe_de": [
      "Grün",
      "Braun",
      "Weiß",
      "Blau",
      "Ocker"
    ],
    "farbe_en": [
      "green",
      "brown",
      "white",
      "blue",
      "ochre"
    ],
    "motiv_de": [
      "Bauernhaus",
      "Landschaft",
      "Bäume",
      "ländlich"
    ],
    "motiv_en": [
      "farmhouse",
      "landscape",
      "trees",
      "rural"
    ],
    "stimmung_de": [
      "ruhig",
      "idyllisch",
      "nostalgisch"
    ],
    "stimmung_en": [
      "calm",
      "idyllic",
      "nostalgic"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "watercolour"
    ],
    "beschreibung_de": "Traditionelles Aquarell eines Bauernhauses mit blühenden Bäumen, Zaun und grünem Garten — das klassischste und möglicherweise früheste Werk der Sammlung.",
    "beschreibung_en": "Traditional watercolour of a farmhouse with blossoming trees, a fence and green garden — the most classically representational and possibly earliest work in the collection.",
    "sichtbar": false
  },
  {
    "id": 82,
    "dateiname": "IMG_8325.jpeg",
    "titel": "URBANEK BILD",
    "farbe_de": [
      "Schwarz",
      "Weiß",
      "Grau"
    ],
    "farbe_en": [
      "black",
      "white",
      "grey"
    ],
    "motiv_de": [
      "Maske",
      "Venedig",
      "Architektur",
      "Ruine"
    ],
    "motiv_en": [
      "mask",
      "venice",
      "architecture",
      "ruin"
    ],
    "stimmung_de": [
      "geheimnisvoll",
      "theatralisch",
      "melancholisch"
    ],
    "stimmung_en": [
      "mysterious",
      "theatrical",
      "melancholic"
    ],
    "technik_de": [
      "Druckgrafik",
      "Limitierte Auflage"
    ],
    "technik_en": [
      "print",
      "limited edition"
    ],
    "beschreibung_de": "Monochrome Druckgrafik (Reprorapid 2/5) — venezianische Maske über einer verfallenen Architektur, reich texturiert — limitierte Auflage, kein Gemälde.",
    "beschreibung_en": "Monochrome limited edition print (Reprorapid 2/5) — a Venetian mask floating above a ruined architectural structure, densely textured.",
    "sichtbar": false
  },
  {
    "id": 83,
    "dateiname": "IMG_8334.jpeg",
    "titel": "Josefs Haustür",
    "farbe_de": [
      "Gelb",
      "Braun",
      "Grau",
      "Blau",
      "Weiß"
    ],
    "farbe_en": [
      "yellow",
      "brown",
      "grey",
      "blue",
      "white"
    ],
    "motiv_de": [
      "Tür",
      "Architektur",
      "Stadtansicht",
      "Interieur"
    ],
    "motiv_en": [
      "door",
      "architecture",
      "townscape",
      "interior"
    ],
    "stimmung_de": [
      "ruhig",
      "präzise",
      "einladend"
    ],
    "stimmung_en": [
      "calm",
      "precise",
      "inviting"
    ],
    "technik_de": [
      "Aquarell"
    ],
    "technik_en": [
      "watercolour"
    ],
    "beschreibung_de": "Präzises Aquarell eines reich verzierten Bogenportals mit der Nummer 548 an einer gelben Wand — architektonisch und ruhig.",
    "beschreibung_en": "Precise watercolour of an ornate arched doorway numbered 548 against a yellow wall — architectural and quietly charming.",
    "sichtbar": false
  },
  {
    "id": 97,
    "dateiname": "IMG_8417.jpeg",
    "titel": "Verbindungen",
    "farbe_de": [
      "gelb",
      "rot",
      "blau",
      "dunkelblau",
      "grün",
      "rotbraun",
      "violett"
    ],
    "farbe_en": [
      "yellow",
      "red",
      "blue",
      "dark blue",
      "green",
      "red-brown",
      "violet"
    ],
    "motiv_de": [
      "abstrakte Landschaft",
      "Felder",
      "Vogelperspektive",
      "Netzstruktur",
      "Farbflächen"
    ],
    "motiv_en": [
      "abstract landscape",
      "fields",
      "aerial view",
      "net structure",
      "colour fields"
    ],
    "stimmung_de": [
      "farbexplosiv",
      "rhythmisch",
      "dynamisch",
      "vibrierend"
    ],
    "stimmung_en": [
      "colour-explosive",
      "rhythmic",
      "dynamic",
      "vibrant"
    ],
    "technik_de": [
      "Aquarell",
      "Mischtechnik",
      "Papier",
      "gerahmt"
    ],
    "technik_en": [
      "watercolour",
      "mixed media",
      "paper",
      "framed"
    ],
    "beschreibung_de": "Eine Schwesternarbeit zu #96: Dasselbe System aus überlappenden Farbfeldern und Liniengeflechten, hier mit stärkerem Anteil an Dunkelblau und Rotbraun. Die Komposition wirkt etwas schwerer und erdverbundener als die Variante daneben.",
    "beschreibung_en": "A companion piece to #96: the same system of overlapping colour fields and line networks, here with a stronger presence of dark blue and red-brown. The composition feels slightly weightier and more grounded than its counterpart.",
    "sichtbar": false
  },
  {
    "id": 99,
    "dateiname": "IMG_8429.jpeg",
    "titel": "Dunkler Wald",
    "farbe_de": [
      "dunkelbraun",
      "rotbraun",
      "schwarz",
      "gold",
      "grau"
    ],
    "farbe_en": [
      "dark brown",
      "red-brown",
      "black",
      "gold",
      "grey"
    ],
    "motiv_de": [
      "Holzmaserung",
      "abstrakt",
      "Äste",
      "organische Struktur",
      "Dunkelheit"
    ],
    "motiv_en": [
      "wood grain",
      "abstract",
      "branches",
      "organic structure",
      "darkness"
    ],
    "stimmung_de": [
      "düster",
      "meditativ",
      "still",
      "geheimnisvoll",
      "schwer"
    ],
    "stimmung_en": [
      "sombre",
      "meditative",
      "still",
      "mysterious",
      "heavy"
    ],
    "technik_de": [
      "Aquarell",
      "Mischtechnik",
      "Papier",
      "gerahmt"
    ],
    "technik_en": [
      "watercolour",
      "mixed media",
      "paper",
      "framed"
    ],
    "beschreibung_de": "Eine dunkle, fast monochrome Komposition in tiefen Braun- und Schwarztönen zeigt eine vertikal gestreifte Struktur, die an Holzmaserung oder Baumrinde erinnert. Zwei knotige Augen-ähnliche Formen sowie zarte Goldlichtreflexe beleben die Tiefe.",
    "beschreibung_en": "A dark, near-monochrome composition in deep browns and blacks shows a vertically striped structure reminiscent of wood grain or tree bark. Two knotted eye-like forms and delicate gold light reflections animate the depth.",
    "sichtbar": false
  },
  {
    "id": 103,
    "dateiname": "IMG_8457.jpeg",
    "titel": "Rauchkuchl",
    "farbe_de": [
      "beige",
      "grau",
      "dunkelblau",
      "braun",
      "ocker",
      "weiß"
    ],
    "farbe_en": [
      "beige",
      "grey",
      "dark blue",
      "brown",
      "ochre",
      "white"
    ],
    "motiv_de": [
      "Interieur",
      "Küche",
      "Herd",
      "Keramik",
      "Krug",
      "Korb",
      "Stillleben"
    ],
    "motiv_en": [
      "interior",
      "kitchen",
      "hearth",
      "ceramics",
      "jug",
      "basket",
      "still life"
    ],
    "stimmung_de": [
      "ruhig",
      "nostalgisch",
      "mediterran",
      "alltäglich",
      "warm"
    ],
    "stimmung_en": [
      "calm",
      "nostalgic",
      "Mediterranean",
      "everyday",
      "warm"
    ],
    "technik_de": [
      "Aquarell",
      "Papier",
      "gerahmt",
      "bezeichnet und datiert 1989"
    ],
    "technik_en": [
      "watercolour",
      "paper",
      "framed",
      "inscribed and dated 1989"
    ],
    "beschreibung_de": "Ein aquarelliertes Kücheninterieur mit weißgetünchten Wänden, einem Tonkrug auf einem Herd und einem geflochtenen Korb. Die gedämpfte Palette und der unaufgeregte Blick erinnern an ein mediterranes Bauernhaus. Am unteren Rand eine handschriftliche Inschrift mit Ortsangabe und Jahreszahl 1989 — Titel und genaue Lesung zur Klärung mit Maria.",
    "beschreibung_en": "A watercolour kitchen interior with whitewashed walls, a clay jug on a hearth, and a woven basket. The muted palette and unhurried gaze evoke a Mediterranean farmhouse. A handwritten inscription at the bottom includes a place name and the year 1989 — title and exact reading to be clarified with Maria.",
    "sichtbar": false
  },
  {
    "id": 104,
    "dateiname": "IMG_8460.jpeg",
    "titel": "von josef cousin gemalt",
    "farbe_de": [
      "braun",
      "dunkelbraun",
      "lila",
      "grau",
      "gelb",
      "dunkelgrün"
    ],
    "farbe_en": [
      "brown",
      "dark brown",
      "lilac",
      "grey",
      "yellow",
      "dark green"
    ],
    "motiv_de": [
      "Landschaft",
      "kahle Bäume",
      "Sumpf",
      "Herbst",
      "Himmel",
      "Natur"
    ],
    "motiv_en": [
      "landscape",
      "bare trees",
      "marsh",
      "autumn",
      "sky",
      "nature"
    ],
    "stimmung_de": [
      "melancholisch",
      "still",
      "herbstlich",
      "einsam",
      "gedämpft"
    ],
    "stimmung_en": [
      "melancholic",
      "still",
      "autumnal",
      "lonely",
      "muted"
    ],
    "technik_de": [
      "Aquarell",
      "Papier",
      "gerahmt"
    ],
    "technik_en": [
      "watercolour",
      "paper",
      "framed"
    ],
    "beschreibung_de": "Kahle, dunkle Baumsilhouetten ragen vor einem bewölkten Himmel mit warmem Gelbschimmer auf. Darunter ein dunkler Sumpf- oder Teichboden mit niedrigem Gebüsch. Die Stimmung ist herbstlich-melancholisch und von stiller Naturbeobachtung geprägt.",
    "beschreibung_en": "Bare, dark tree silhouettes rise against a cloudy sky with a warm yellow glimmer. Below, a dark marsh or pond floor with low scrub. The mood is autumnally melancholic, marked by quiet nature observation.",
    "sichtbar": false
  },
  {
    "id": 121,
    "dateiname": "IMG_8534.jpeg",
    "titel": "URBANEK 2",
    "farbe_de": [
      "grau",
      "schwarz",
      "weiß",
      "hellgrau"
    ],
    "farbe_en": [
      "grey",
      "black",
      "white",
      "light grey"
    ],
    "motiv_de": [
      "Ruine",
      "Mauerwerk",
      "Äste",
      "Architektur",
      "Verfall",
      "Natur"
    ],
    "motiv_en": [
      "ruin",
      "masonry",
      "branches",
      "architecture",
      "decay",
      "nature"
    ],
    "stimmung_de": [
      "still",
      "melancholisch",
      "präzise",
      "grafisch",
      "kontemplativ"
    ],
    "stimmung_en": [
      "still",
      "melancholic",
      "precise",
      "graphic",
      "contemplative"
    ],
    "technik_de": [
      "Radierung",
      "Druckgrafik",
      "Papier",
      "ungerahmt",
      "signiert"
    ],
    "technik_en": [
      "etching",
      "print",
      "paper",
      "unframed",
      "signed"
    ],
    "beschreibung_de": "Eine fein gearbeitete schwarz-weiße Radierung mit zerfallenden Mauern und kahlen Ästen. Die linke Hälfte ist schraffiert und dicht, die rechte linienhafter und offener. Unten rechts eine Signatur, die nicht eindeutig als Maria Buchhaus lesbar ist — möglicherweise ein fremdes Werk. Dringend mit Maria klären.",
    "beschreibung_en": "A finely worked black-and-white etching depicting crumbling walls and bare branches. The left half is hatched and dense, the right more linear and open. A signature at the bottom right is not clearly readable as Maria Buchhaus — possibly a work by another artist. To be urgently clarified with Maria.",
    "sichtbar": false
  }
];
