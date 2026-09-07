export const WHATSAPP_URL = "https://wa.me/31628864744"
export const PHONE = "0628864744"
export const PHONE_TEL = "tel:+31628864744"
export const EMAIL = "slobdienstverlening@gmail.com"
export const EMAIL_MAILTO = `mailto:${EMAIL}`

/** WhatsApp-link met vooringevuld bericht, verlaagt de drempel om contact op te nemen. */
export function whatsappUrl(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_QUOTE = whatsappUrl(
  "Hallo Martin, ik zou graag een offerte aanvragen voor mijn project.",
)

export const NAV_LINKS = [
  { label: "Diensten", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over Ons", href: "/over-ons", isPage: true },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export type TeamMember = {
  name: string
  role: string
  image?: string
  /** Korte introductie of omschrijving van de werkzaamheden, per alinea. */
  bio?: string[]
}

/** Groepsfoto van het team, o.a. gebruikt in de "Over ons"-sectie op de homepage. */
export const TEAM_PHOTO = "/images/team-groepsfoto.webp"

export const TEAM: TeamMember[] = [
  {
    name: "Martin Slob",
    role: "Eigenaar & Uitvoerder",
    image: "/images/team-martin.webp",
    bio: [
      "Hallo, ik ben Martin Slob en ik kom uit Leerdam. Begin 2025 heb ik het bedrijf Slob Tuinen opgericht.",
      "Wij houden ons bezig met tuinen, groenvoorziening, straatwerk, grondverzet, kraanverhuur, beschoeiingswerk, parken en bedrijventerreinen.",
      "We werken samen met vaste partners waarmee we dit alles mogelijk maken en de juiste kwaliteit kunnen leveren.",
      "We hopen snel bij u langs te mogen komen om uw project te bezichtigen en een offerte te maken!",
    ],
  },
  {
    name: "Rick de Bruijn",
    role: "Straatwerk, Beschoeiing & Grondverzet",
    image: "/images/team-rick.webp",
    bio: [
      "Rick realiseert werkzaamheden in straatwerk, beschoeiingen en grondverzet.",
    ],
  },
  {
    name: "Tieme de Rijke",
    role: "Straatwerk & Beschoeiing",
    image: "/images/team-tieme.webp",
    bio: ["Tieme realiseert werkzaamheden in straatwerk en beschoeiingen."],
  },
  {
    name: "Jesse Pelicaan",
    role: "Groenvoorziening & Tuinaanleg",
    image: "/images/team-jesse.webp",
    bio: [
      "Jesse realiseert werkzaamheden in groenvoorziening, bedrijventerreinen en tuinen.",
    ],
  },
]

export type Service = {
  /** Dient tevens als slug: /diensten/[id] */
  id: string
  title: string
  image: string
  /** Korte tagline op de dienstenkaart. */
  intro: string
  /** Lead + SEO meta-description op de dienstpagina. */
  summary: string
  /** Beschrijvende alinea's op de dienstpagina. */
  paragraphs: string[]
  /** Wat wij bieden (bulletlijst). */
  highlights: string[]
  /** Eigen foto's van uitgevoerd werk, getoond als galerij op de dienstpagina. */
  gallery?: string[]
  /** Zoektermen waarop deze dienst gevonden mag worden (voor de meta keywords). */
  keywords?: string[]
  /** Veelgestelde vragen: op de pagina én als FAQ-structured-data voor Google. */
  faq?: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  {
    id: "tuinaanleg",
    title: "Tuinaanleg",
    image: "/images/service-tuinaanleg.webp",
    intro: "Een complete tuin, precies zoals u hem voor ogen heeft.",
    summary:
      "Wij leggen complete tuinen aan in Leerdam en omgeving. Van het eerste idee tot de laatste plant, alles in eigen beheer en klaar om er jaren van te genieten.",
    paragraphs: [
      "Een goede tuin begint met een goed plan. We komen langs, kijken naar uw huis en luisteren naar wat u wilt. Samen bedenken we hoe de tuin ingedeeld kan worden. Een strakke tuin bij huis of juist een ruime, groene tuin: het moet passen bij hoe u buiten leeft.",
      "Daarna doen we alles zelf. Het grondwerk, de bestrating, de beschoeiing en de beplanting. Doordat we het hele werk in eigen hand houden, sluit alles op elkaar aan en heeft u maar één aanspreekpunt: Martin.",
      "We kiezen materialen en planten die tegen een stootje kunnen, zodat uw tuin er over een paar jaar nog net zo goed bij ligt. En als we klaar zijn, is de tuin ook echt af.",
    ],
    highlights: [
      "Tuinontwerp en advies op maat",
      "Grondwerk en egalisatie",
      "Bestrating, paden en terrassen",
      "Beplanting, hagen en borders",
      "Netjes opgeleverd tot in de details",
    ],
    keywords: [
      "tuinaanleg",
      "tuin aanleggen",
      "hovenier Leerdam",
      "tuinaanleg Leerdam",
      "complete tuin aanleggen",
      "tuinontwerp",
      "achtertuin aanleggen",
      "voortuin aanleggen",
    ],
    faq: [
      {
        q: "Leggen jullie de hele tuin aan of alleen een deel?",
        a: "Beide kan. We leggen complete tuinen aan, van grondwerk en bestrating tot beplanting, maar we pakken net zo goed een deel van de tuin aan. Alles in eigen beheer, met één aanspreekpunt.",
      },
      {
        q: "Verzorgen jullie ook het ontwerp?",
        a: "Ja. We komen langs, luisteren naar uw wensen en denken met u mee over de indeling en materialen, zodat de tuin bij uw huis en manier van buitenleven past.",
      },
      {
        q: "In welke omgeving leggen jullie tuinen aan?",
        a: "In Leerdam en omgeving, waaronder de Vijfheerenlanden, Vianen, Gorinchem, Culemborg en de Betuwe.",
      },
    ],
  },
  {
    id: "grondverzet",
    title: "Grondverzet",
    image: "/images/project-grondverzet-kopje.webp",
    intro: "Graven, verplaatsen en egaliseren met zwaar materieel.",
    summary:
      "Grondverzet in Leerdam en de Betuwe: ontgraven, ophogen, egaliseren en grond afvoeren. Wij hebben het materieel in huis en leveren uw terrein netjes op.",
    paragraphs: [
      "Klein karwei of groot project, we hebben het materieel en de ervaring om vlot door te werken. Een kavel bouwrijp maken, een vijver uitgraven of een terrein ophogen: we pakken het aan zoals het hoort.",
      "We ontgraven, verplaatsen en egaliseren, en voeren de grond af die u niet meer nodig heeft. Daarbij letten we goed op uw perceel en op de omgeving. We houden rekening met kabels en leidingen en laten het terrein strak achter.",
      "Omdat we ook het grond- en straatwerk doen, kunnen we meteen doorpakken. Zo ligt er een goede basis voor bestrating, beplanting of een aanbouw.",
    ],
    highlights: [
      "Ontgraven en uitgraven",
      "Ophogen en egaliseren",
      "Afvoeren van overtollige grond",
      "Kavels bouwrijp maken",
      "Modern materieel, ervaren uitvoering",
    ],
    gallery: [
      "/images/service-grondverzet-work.webp",
      "/images/project-grondverzet-kopje.webp",
    ],
    keywords: [
      "grondverzet",
      "grondverzet Leerdam",
      "grondwerk en grondverzet",
      "ontgraven",
      "terrein ophogen",
      "grond afvoeren",
      "kavel bouwrijp maken",
      "minigraver huren met machinist",
      "grondverzet Betuwe",
    ],
    faq: [
      {
        q: "Wat valt er allemaal onder grondverzet?",
        a: "Onder grondverzet vallen ontgraven en uitgraven, ophogen en egaliseren, het afvoeren van overtollige grond en bijvoorbeeld een kavel bouwrijp maken. We hebben het materieel in eigen beheer.",
      },
      {
        q: "Voeren jullie ook de grond af?",
        a: "Ja. We voeren de grond af die u niet meer nodig heeft en laten het terrein strak en netjes achter.",
      },
      {
        q: "Houden jullie rekening met kabels en leidingen?",
        a: "Zeker. We werken zorgvuldig en houden rekening met kabels, leidingen en de omgeving, zodat er geen verrassingen ontstaan.",
      },
    ],
  },
  {
    id: "beschoeiingswerk",
    title: "Beschoeiingswerk",
    image: "/images/service-beschoeiing.webp",
    intro: "Beschoeiing plaatsen en vervangen langs sloot, vijver en watergang.",
    summary:
      "Beschoeiing plaatsen of vervangen in Leerdam, de Vijfheerenlanden en de Betuwe. Wij leggen stevige oeverbeschoeiing aan in hardhout, kunststof of composiet, waterpas, op maat en met een verankering die jarenlang meegaat.",
    paragraphs: [
      "Een goede beschoeiing houdt uw oever op zijn plek en geeft de overgang tussen land en water een strakke, nette rand. In een waterrijk gebied als de Vijfheerenlanden, de Alblasserwaard en het Rivierenland is oeverbeschoeiing geen luxe maar noodzaak: zonder stevige walbeschoeiing kalft de kant af, zakt uw grond weg en loopt de sloot dicht.",
      "Wij plaatsen beschoeiing in hardhout, kunststof (bijvoorbeeld een kunststof damwand) of composiet, afhankelijk van uw situatie, budget en gewenste uitstraling. Hardhout heeft een natuurlijke look en gaat zo'n 20 tot 25 jaar mee; kunststof en composiet zijn onderhoudsvrij en gaan vaak 30 jaar of langer mee. Elke beschoeiing komt waterpas en op maat te staan, met stevige palen en een verankering die de druk van grond en water blijvend opvangt.",
      "Staat uw huidige beschoeiing te rotten, begint de oever te verzakken of hangt het schot scheef? Dan is het tijd om de beschoeiing te vervangen. Wij nemen de oude constructie weg, herstellen de oever en plaatsen een nieuwe, duurzame oeverbescherming, zodat uw kant er weer jaren strak bij ligt.",
      "Of het nu gaat om een slootkant, een vijver in de tuin, een bredere watergang of een oever langs een bedrijfsterrein: wij werken in Leerdam en omgeving, waaronder de Vijfheerenlanden, Vianen, Gorinchem, Culemborg en de Betuwe. We houden rekening met de regels van het waterschap (Rivierenland) en leveren het werk netjes op.",
    ],
    highlights: [
      "Beschoeiing plaatsen én vervangen",
      "Hardhout, kunststof damwand of composiet",
      "Oeverbeschoeiing voor sloot, vijver en watergang",
      "Bescherming tegen afkalven en verzakken",
      "Waterpas, op maat en stevig verankerd",
      "Voor particulier en zakelijk in Leerdam e.o.",
    ],
    keywords: [
      "beschoeiing",
      "beschoeiing plaatsen",
      "beschoeiing vervangen",
      "beschoeiingswerk",
      "oeverbeschoeiing",
      "oeverbescherming",
      "walbeschoeiing",
      "houten beschoeiing",
      "hardhouten beschoeiing",
      "kunststof beschoeiing",
      "kunststof damwand",
      "composiet beschoeiing",
      "beschoeiing sloot",
      "vijverbeschoeiing",
      "beschoeiing Leerdam",
      "beschoeiing Vijfheerenlanden",
      "beschoeiingsbedrijf Betuwe",
    ],
    faq: [
      {
        q: "Welk materiaal kan ik het beste kiezen voor mijn beschoeiing: hout, kunststof of composiet?",
        a: "Dat hangt af van uw situatie en wensen. Hardhout heeft een warme, natuurlijke uitstraling en gaat zo'n 20 tot 25 jaar mee. Kunststof (een kunststof damwand) en composiet zijn onderhoudsvrij en gaan vaak 30 jaar of langer mee. We komen graag langs om samen de beste keuze te maken voor uw oever en budget.",
      },
      {
        q: "Hoe lang gaat een beschoeiing mee?",
        a: "De levensduur hangt af van het materiaal, de grondsoort en de belasting op de oever. Een hardhouten beschoeiing gaat gemiddeld 20 tot 25 jaar mee, kunststof en composiet vaak 30 jaar of langer.",
      },
      {
        q: "Wanneer moet ik mijn beschoeiing vervangen?",
        a: "Tijd om te vervangen is er meestal bij rot of scheuren in het hout, een scheefhangend of loskomend schot, of een oever die begint te verzakken of af te kalven. Wij bekijken uw situatie en adviseren eerlijk of herstel of vervangen verstandiger is.",
      },
      {
        q: "Wat is het verschil tussen een beschoeiing en een damwand?",
        a: "Een beschoeiing is doorgaans lager en houdt de grond langs de waterkant tegen. Een damwand is hoger en zwaarder en wordt gebruikt bij een grotere kerende hoogte. Wij adviseren wat past bij uw oever en de hoogte die gekeerd moet worden.",
      },
      {
        q: "Wat kost beschoeiing per meter?",
        a: "De prijs per strekkende meter hangt af van het materiaal, de hoogte, de lengte en de bereikbaarheid van de oever. Wij maken graag een vrijblijvende offerte op maat, zodat u vooraf precies weet waar u aan toe bent.",
      },
      {
        q: "In welke regio plaatsen jullie beschoeiing?",
        a: "Wij werken in Leerdam en omgeving, waaronder de Vijfheerenlanden, Vianen, Gorinchem, Culemborg, de Alblasserwaard en de Betuwe.",
      },
    ],
  },
  {
    id: "groenvoorziening",
    title: "Groenvoorziening",
    image: "/images/service-groenvoorziening.webp",
    intro: "Beplanting, hagen en onderhoud.",
    summary:
      "Groenaanleg en onderhoud in Leerdam en omgeving. Wij planten hagen, borders en bomen, en houden uw groen het hele jaar netjes.",
    paragraphs: [
      "Groen maakt een tuin pas af. We planten hagen, borders, bomen en vaste planten, en weten welke soort waar het beste groeit. Welke grond, hoeveel zon en hoeveel onderhoud er bij komt kijken: daar denken we vooraf over na.",
      "Ook na de aanleg blijven we langskomen als u dat wilt. Snoeien, knippen, schoffelen en het groen op peil houden, zodat u er zelf geen omkijken naar heeft.",
      "Van één haag tot al het groen rond uw huis of bedrijfspand: we doen het met zorg en houden de lange termijn in gedachten.",
    ],
    highlights: [
      "Aanplant van hagen, borders en bomen",
      "De juiste plant op de juiste plek",
      "Snoei- en knipwerk",
      "Structureel groenonderhoud",
      "Voor particulier en zakelijk",
    ],
    keywords: [
      "groenvoorziening",
      "groenvoorziening Leerdam",
      "beplanting",
      "hagen planten",
      "tuinonderhoud",
      "snoeiwerk",
      "groenonderhoud bedrijf",
      "hovenier onderhoud",
    ],
    faq: [
      {
        q: "Doen jullie ook het onderhoud na de aanplant?",
        a: "Ja. Als u dat wilt blijven we langskomen voor snoeien, knippen, schoffelen en het op peil houden van het groen, zodat u er zelf geen omkijken naar heeft.",
      },
      {
        q: "Werken jullie ook voor bedrijven?",
        a: "Zeker. We verzorgen groenaanleg en onderhoud voor zowel particulieren als bedrijven en bedrijventerreinen.",
      },
      {
        q: "Kiezen jullie de beplanting voor mij uit?",
        a: "We adviseren de juiste plant op de juiste plek, op basis van grondsoort, zon en het onderhoud dat erbij past. Zo blijft uw groen jaren mooi.",
      },
    ],
  },
  {
    id: "grondwerk",
    title: "Grondwerk",
    image: "/images/service-grondwerk.webp",
    intro: "De basis die u niet ziet, maar die alles bepaalt.",
    summary:
      "Grondwerk in Leerdam en omgeving: ontgraving, fundering, drainage en een waterpas ondergrond. De basis waar u straks niets meer van ziet, maar die alles bepaalt.",
    paragraphs: [
      "Goed grondwerk is de basis van elk buitenproject. Wat er onder de grond gebeurt, bepaalt of uw bestrating vlak blijft liggen en of planten goed groeien. Daar doen we geen concessies aan.",
      "We verzorgen de ontgraving, de fundering, de drainage en een waterpas voorbereide ondergrond. Met de juiste opbouw en afwatering voorkomen we verzakking en wateroverlast, problemen die anders pas later opduiken en dan duur zijn om te herstellen.",
      "U ziet het straks niet meer terug, maar het bepaalt wel het eindresultaat. Met goed grondwerk ligt er een terrein dat jarenlang strak en stabiel blijft.",
    ],
    highlights: [
      "Ontgraving en fundering",
      "Drainage en afwatering",
      "Waterpas voorbereide ondergrond",
      "Voorkomt verzakking en wateroverlast",
      "Basis voor bestrating en beplanting",
    ],
    keywords: [
      "grondwerk",
      "grondwerk Leerdam",
      "fundering aanleggen",
      "drainage aanleggen",
      "ondergrond voorbereiden",
      "afwatering tuin",
      "bouwrijp maken",
      "grondwerker",
    ],
    faq: [
      {
        q: "Waarom is goed grondwerk zo belangrijk?",
        a: "Wat er onder de grond gebeurt, bepaalt of uw bestrating vlak blijft liggen en of planten goed groeien. Met de juiste opbouw, fundering en afwatering voorkomen we verzakking en wateroverlast.",
      },
      {
        q: "Leggen jullie ook drainage aan?",
        a: "Ja. We verzorgen drainage en afwatering, zodat regenwater goed wegloopt en u geen wateroverlast krijgt.",
      },
      {
        q: "Kunnen jullie na het grondwerk ook de bestrating leggen?",
        a: "Zeker. Omdat we ook straatwerk en tuinaanleg doen, pakken we meteen door op een goed voorbereide ondergrond.",
      },
    ],
  },
  {
    id: "straatwerk",
    title: "Straatwerk",
    image: "/images/service-straatwerk.webp",
    intro: "Strakke opritten, paden en terrassen.",
    summary:
      "Straatwerk en bestrating in Leerdam en omgeving. Strakke opritten, paden en terrassen met nette voegen en een goede afwatering, die blijven liggen.",
    paragraphs: [
      "Bestrating waar u jaren plezier van heeft, begint bij een goede ondergrond en eindigt bij strak gelegde stenen. Een oprit, een terras of een tuinpad: we leggen het netjes en met aandacht.",
      "We doen het hele werk. De ondergrond voorbereiden, zorgen voor de juiste afwatering en de stenen leggen met nette voegen en een goede kantopsluiting. Zo blijft uw bestrating vlak liggen en zakt er niets weg.",
      "Klinkers, betontegels of natuursteen: we helpen u kiezen in materiaal en legpatroon, en leggen straatwerk dat blijft liggen.",
    ],
    highlights: [
      "Opritten, paden en terrassen",
      "Strakke voegen en kantopsluiting",
      "Goede afwatering en afschot",
      "Klinkers, tegels of natuursteen",
      "Degelijke voorbereiding van de ondergrond",
    ],
    gallery: [
      "/images/service-straatwerk-work-1.webp",
      "/images/service-straatwerk-work-2.webp",
      "/images/service-straatwerk-work-3.webp",
    ],
    keywords: [
      "straatwerk",
      "straatwerk Leerdam",
      "bestrating",
      "oprit bestraten",
      "terras aanleggen",
      "klinkers leggen",
      "sierbestrating",
      "stratenmaker Leerdam",
    ],
    faq: [
      {
        q: "Welke bestrating kan ik kiezen?",
        a: "Klinkers, betontegels of natuursteen. We helpen u kiezen in materiaal en legpatroon dat past bij uw huis en gebruik, en dat blijft liggen.",
      },
      {
        q: "Zorgen jullie ook voor een goede afwatering?",
        a: "Ja. We leggen de bestrating met het juiste afschot en een goede kantopsluiting, zodat regenwater wegloopt en er niets wegzakt.",
      },
      {
        q: "Leggen jullie ook de ondergrond aan?",
        a: "Zeker. We doen het hele werk, van het voorbereiden en verdichten van de ondergrond tot het strak leggen en aftrillen van de stenen.",
      },
    ],
  },
]

export function getServiceById(id: string) {
  return SERVICES.find((s) => s.id === id)
}

export type Project = {
  title: string
  location: string
  image: string
  /** Optional "before" photo. When set, the detail page toont een swipe-vergelijking. */
  beforeImage?: string
  /** Extra foto's, getoond als galerij op de detailpagina. */
  gallery?: string[]
  size: "tall" | "wide" | "regular"
  /** Wanneer gezet, is de projectkaart klikbaar naar /projecten/[slug]. */
  slug?: string
  /** Opleverdatum (YYYY-MM-DD). Voedt de <lastmod> in de sitemap. */
  date?: string
  /** Korte samenvatting, dient als lead én als SEO meta-description. */
  summary?: string
  /** Beschrijvende alinea's voor de detailpagina. */
  body?: string[]
  /** Uitgevoerde werkzaamheden (bulletlijst). */
  highlights?: string[]
  /** Diensten die bij dit project zijn ingezet. */
  services?: string[]
}

export const PROJECTS: Project[] = [
  {
    title: "Tuinaanleg Dalem",
    location: "Dalem",
    image: "/images/project-dalem-1.webp",
    gallery: [
      "/images/project-dalem-1.webp",
      "/images/project-dalem-2.webp",
      "/images/project-dalem-3.webp",
    ],
    size: "wide",
    slug: "tuinaanleg-dalem",
    date: "2026-07-09",
    summary:
      "In Dalem legden wij een complete achtertuin aan: een strakke bestrating van getrommelde klinkers en een warm hardhouten vlonder rond de bestaande bomen.",
    body: [
      "Voor deze tuin in Dalem mochten we de hele achtertuin opnieuw inrichten. De wens was een onderhoudsarme tuin met een warme, natuurlijke uitstraling waar het fijn zitten is, met behoud van de bestaande leibomen tegen de schutting.",
      "We zijn begonnen met het grondwerk en een goed voorbereide, waterpas ondergrond. Daarna hebben we de bestrating gelegd met getrommelde klinkers in een rustig legverband, met nette kantopsluiting zodat alles strak blijft liggen. Rond de bomen legden we een hardhouten vlonder, netjes ingepast met uitsparingen zodat de stammen de ruimte houden om te groeien.",
      "Het resultaat is een complete, gebruiksklare tuin: een ruim terras om te zitten, een warm houten vlonder en genoeg plek voor potten en beplanting. Onderhoudsarm en klaar om jaren van te genieten.",
    ],
    highlights: [
      "Grondwerk en waterpas voorbereide ondergrond",
      "Bestrating met getrommelde klinkers en nette kantopsluiting",
      "Hardhouten vlonder, ingepast rond de bestaande bomen",
      "Ruimte voor beplanting en potten",
      "Onderhoudsarm en strak opgeleverd",
    ],
    services: ["Grondwerk", "Straatwerk", "Tuinaanleg"],
  },
  {
    title: "Tuinaanleg Vianen",
    location: "Vianen",
    image: "/images/project-tuinaanleg-vianen-1.webp",
    gallery: [
      "/images/project-tuinaanleg-vianen-1.webp",
      "/images/project-tuinaanleg-vianen-2.webp",
    ],
    size: "wide",
    slug: "tuinaanleg-vianen",
    date: "2026-07-09",
    summary:
      "In Vianen legden wij een strak terras met grootformaat tegels aan, met bestrating langs de woning en een nette afwerking tegen de schutting.",
    body: [
      "Voor deze tuin in Vianen was de wens een strak, onderhoudsarm terras waar het fijn zitten is. We begonnen met een goed voorbereide, waterpas ondergrond zodat de tegels vlak blijven liggen en het water goed wegloopt.",
      "Het terras is gelegd met grootformaat tegels in een rustige tint, netjes ingepast tegen de schutting en de woning. Langs de zijkant zorgden we voor bestrating met een nette kantopsluiting, zodat het geheel strak op elkaar aansluit.",
    ],
    highlights: [
      "Waterpas voorbereide ondergrond",
      "Terras met grootformaat tegels",
      "Bestrating langs de woning",
      "Nette kantopsluiting",
      "Strak en onderhoudsarm opgeleverd",
    ],
    services: ["Tuinaanleg", "Straatwerk"],
  },
  {
    title: "Tuinaanleg Dussen",
    location: "Dussen",
    image: "/images/project-tuinaanleg-dussen-1.webp",
    gallery: [
      "/images/project-tuinaanleg-dussen-1.webp",
      "/images/project-tuinaanleg-dussen-2.webp",
      "/images/project-tuinaanleg-dussen-3.webp",
    ],
    size: "regular",
    slug: "tuinaanleg-dussen",
    date: "2026-07-09",
    summary:
      "Een onderhoudsarme voortuin in Dussen met siergrind, strakke plantenbakken van betonblokken en een net pad naar de voordeur.",
    body: [
      "Voor deze voortuin in Dussen was de wens een verzorgde, onderhoudsarme uitstraling met weinig omkijken. We hebben de tuin opnieuw ingericht met een basis van siergrind en strakke plantvakken.",
      "De plantenbakken zijn opgebouwd uit nette betonblokken in grijs en antraciet, gevuld met aarde en klaar voor beplanting. Een strak pad leidt naar de voordeur, met de bestrating netjes aangesloten op de bestaande stoep.",
    ],
    highlights: [
      "Onderhoudsarme voortuin",
      "Siergrind als basis",
      "Plantenbakken van betonblokken",
      "Net toegangspad naar de voordeur",
      "Strak en verzorgd afgewerkt",
    ],
    services: ["Tuinaanleg", "Groenvoorziening", "Straatwerk"],
  },
  {
    title: "Straatwerk Gouda",
    location: "Gouda",
    image: "/images/project-straatwerk-gouda-1.webp",
    gallery: [
      "/images/project-straatwerk-gouda-1.webp",
      "/images/project-straatwerk-gouda-2.webp",
      "/images/project-straatwerk-gouda-3.webp",
      "/images/project-straatwerk-gouda-4.webp",
    ],
    size: "wide",
    slug: "straatwerk-gouda",
    date: "2026-07-09",
    summary:
      "Een ruime oprit in Gouda opnieuw bestraat: van egaliseren en zandbed tot een strak gelegde, egale verharding rond het huis.",
    body: [
      "Voor deze woning in Gouda mochten we de ruime oprit opnieuw bestraten. We zijn begonnen met het opnemen van de oude verharding, het egaliseren van de ondergrond en het aanbrengen van een goed verdicht zandbed.",
      "Daarna hebben we de bestrating strak gelegd, netjes ingepast rond de bestaande bomen en de gevel. Het resultaat is een egale, ruime oprit met volop plek om te parkeren, die vlak blijft liggen en jaren meegaat.",
    ],
    highlights: [
      "Opnemen van de oude verharding",
      "Egaliseren en verdicht zandbed",
      "Bestrating strak gelegd rond bestaande bomen",
      "Ruime, egale parkeerruimte",
      "Vlak en degelijk opgeleverd",
    ],
    services: ["Straatwerk", "Grondwerk", "Grondverzet"],
  },
  {
    title: "Schutting Dalem",
    location: "Dalem",
    image: "/images/project-schutting-dalem-1.webp",
    gallery: [
      "/images/project-schutting-dalem-1.webp",
      "/images/project-schutting-dalem-2.webp",
    ],
    size: "regular",
    slug: "schutting-dalem",
    date: "2026-07-09",
    summary:
      "In Dalem plaatsten wij een strakke hardhouten schutting met stevige antracieten palen, die de tuin een nette, afgeschermde rand geeft.",
    body: [
      "Voor deze nieuwbouwtuin in Dalem plaatsten we een strakke hardhouten schutting. De houten schermen zijn gecombineerd met stevige antracieten palen, wat een moderne, verzorgde uitstraling geeft.",
      "Alles is waterpas en op maat geplaatst, met een stevige verankering die de schermen jarenlang op hun plek houdt. Zo krijgt de tuin een nette afscheiding en meer privacy, klaar om verder ingericht te worden.",
    ],
    highlights: [
      "Hardhouten schermen",
      "Stevige antracieten palen",
      "Waterpas en op maat geplaatst",
      "Stevige verankering",
      "Strakke, moderne uitstraling",
    ],
    services: ["Schuttingwerk", "Tuinaanleg"],
  },
  {
    title: "Plantenbakken op maat",
    location: "Leerdam e.o.",
    image: "/images/project-plantenbakken-1.webp",
    gallery: [
      "/images/project-plantenbakken-1.webp",
      "/images/project-plantenbakken-2.webp",
    ],
    size: "wide",
    slug: "plantenbakken-op-maat",
    date: "2026-07-16",
    summary:
      "Op maat gemetselde plantenbakken van stapelblokken, afgewerkt met een strakke hardstenen rand die netjes is gelijmd en afgekit.",
    body: [
      "Voor deze klus maakten wij drie plantenbakken volledig op maat. De bakken zijn opgebouwd uit stapelblokken en waterpas gelijmd, zodat ze strak en stevig staan en jarenlang op hun plek blijven.",
      "De bovenrand is afgewerkt met natuursteen (hardsteen), netjes op verstek gezaagd in de hoeken en strak op de bakken gelijmd. Alle naden zijn zorgvuldig afgekit voor een verzorgde, waterdichte afwerking. De bakken zijn gevuld met tuinaarde en klaar voor beplanting.",
      "Het resultaat is een set robuuste, onderhoudsarme plantenbakken die de tuin een luxe, strakke uitstraling geven en perfect aansluiten op de bestaande bestrating.",
    ],
    highlights: [
      "Drie plantenbakken volledig op maat",
      "Stapelblokken waterpas gelijmd",
      "Hardstenen rand, op verstek en strak gelijmd",
      "Naden netjes afgekit en waterdicht afgewerkt",
      "Gevuld met tuinaarde, klaar voor beplanting",
    ],
    services: ["Tuinaanleg", "Straatwerk"],
  },
  {
    title: "Straatwerk Nieuwegein",
    location: "Nieuwegein",
    image: "/images/project-straatwerk-nieuwegein-1.webp",
    gallery: ["/images/project-straatwerk-nieuwegein-1.webp"],
    size: "tall",
    slug: "straatwerk-nieuwegein",
    date: "2026-07-16",
    summary:
      "Een nieuwe oprit in Nieuwegein bestraat met gebakken klinkers in een strak legverband, afgewerkt met een contrasterende kantband rondom.",
    body: [
      "Voor deze woning in Nieuwegein legden wij de oprit volledig opnieuw aan. We begonnen met het opnemen van de oude situatie, het egaliseren van de ondergrond en het aanbrengen van een goed verdicht zandbed, zodat de bestrating vlak blijft liggen en het water goed wegloopt.",
      "De oprit is bestraat met gebakken klinkers in een warme, genuanceerde kleur, gelegd in een strak halfsteensverband. Rondom brachten we een contrasterende kantband aan die het geheel netjes omlijst en de verharding stevig op zijn plek houdt.",
      "Het resultaat is een verzorgde, egale oprit met een tijdloze uitstraling, ruim genoeg om op te parkeren en klaar om jaren mee te gaan.",
    ],
    highlights: [
      "Opnemen van de oude verharding",
      "Egaliseren en verdicht zandbed",
      "Gebakken klinkers in strak halfsteensverband",
      "Contrasterende kantband rondom",
      "Vlak en degelijk opgeleverd",
    ],
    services: ["Straatwerk", "Grondwerk"],
  },
  {
    title: "Terras met flagstones",
    location: "Leerdam e.o.",
    image: "/images/project-flagstones-1.webp",
    gallery: ["/images/project-flagstones-1.webp"],
    size: "tall",
    slug: "tuinaanleg-flagstones",
    date: "2026-07-16",
    summary:
      "Een ruim terras aangelegd met natuurstenen flagstones, strak afgevoegd met vloeibare voegmortel voor een naadloze, onderhoudsarme afwerking.",
    body: [
      "Voor deze karakteristieke woning legden wij een ruim terras aan met natuurstenen flagstones. De onregelmatige natuursteen geeft het terras een warme, landelijke uitstraling die perfect past bij het pand.",
      "We begonnen met een goed voorbereide, stabiele ondergrond zodat de stenen vlak liggen en het water goed wegloopt. De flagstones zijn met zorg gepast en gelegd, en vervolgens volledig afgevoegd met vloeibare voegmortel. Die afwerking zorgt voor een strakke, gesloten voeg waar geen onkruid tussen groeit en die jarenlang mooi blijft.",
      "Het resultaat is een sfeervol en onderhoudsarm terras met een natuurlijke look, klaar om van te genieten.",
    ],
    highlights: [
      "Terras van natuurstenen flagstones",
      "Stabiel voorbereide ondergrond",
      "Flagstones met zorg gepast en gelegd",
      "Volledig afgevoegd met vloeibare voegmortel",
      "Onderhoudsarm en onkruidvrij afgewerkt",
    ],
    services: ["Tuinaanleg", "Straatwerk"],
  },
  {
    title: "Tuinaanleg Gorinchem",
    location: "Gorinchem",
    image: "/images/project-gorinchem-3.webp",
    gallery: [
      "/images/project-gorinchem-3.webp",
      "/images/project-gorinchem-2.webp",
      "/images/project-gorinchem-4.webp",
      "/images/project-gorinchem-5.webp",
      "/images/project-gorinchem-1.webp",
    ],
    size: "wide",
    slug: "tuinaanleg-gorinchem",
    date: "2026-07-16",
    summary:
      "Een complete achtertuin in Gorinchem: het terras opgehoogd met een houten damwand en keramische tegels, waaltjespaden door de tuin en een onderheide betonvloer als stevige basis.",
    body: [
      "Voor deze woning in Gorinchem hebben wij de complete achtertuin opnieuw aangelegd. Omdat het terras op hoogte moest komen, plaatsten we een stevige houten damwand als keerwand, waarmee we de tuin netjes op niveau brachten.",
      "Het verhoogde terras werd afgewerkt met keramische tegels, strak gelegd en afgevoegd voor een moderne, onderhoudsarme uitstraling. Een hardhouten trap verbindt het terras met de rest van de tuin. Door de tuin legden we sfeervolle paden van waaltjes, netjes ingepast met een strakke kantopsluiting.",
      "Daarnaast realiseerden we een onderheide betonvloer als stevige, zakvrije basis — bijvoorbeeld voor een overkapping of berging. Zo kreeg de tuin een complete, duurzame inrichting die jaren meegaat.",
    ],
    highlights: [
      "Houten damwand als keerwand voor een verhoogd terras",
      "Keramische tegels, strak gelegd en afgevoegd",
      "Hardhouten trap naar de tuin",
      "Sfeervolle waaltjespaden met kantopsluiting",
      "Onderheide betonvloer als stevige basis",
    ],
    services: ["Tuinaanleg", "Straatwerk", "Grondwerk"],
  },
  {
    title: "Tuinaanleg Leerdam",
    location: "Leerdam",
    image: "/images/project-leerdam-3.webp",
    gallery: [
      "/images/project-leerdam-3.webp",
      "/images/project-leerdam-1.webp",
      "/images/project-leerdam-4.webp",
      "/images/project-leerdam-2.webp",
    ],
    size: "wide",
    slug: "tuinaanleg-leerdam",
    date: "2026-07-16",
    summary:
      "Een strak vernieuwde achtertuin in Leerdam met een ruim terras, nette borders en grindpaden met kantopsluiting, klaar voor beplanting en gazon.",
    body: [
      "Voor deze tuin in Leerdam legden wij een compleet nieuwe achtertuin aan. Het ruime terras is bestraat met strakke tegels in een donkere tint, netjes ingepast tegen de woning en de schutting.",
      "Door de tuin maakten we nette grindpaden, afgezet met een strakke kantopsluiting zodat alles mooi gescheiden blijft. Langs de randen legden we borders aan, voorbereid en gevuld met tuinaarde en klaar voor beplanting. Ook de composieten schutting zorgt voor een verzorgde, onderhoudsarme afscheiding.",
      "Het resultaat is een strakke, onderhoudsarme tuin met een duidelijke indeling van terras, paden en groen — klaar om verder in te richten en van te genieten.",
    ],
    highlights: [
      "Ruim terras met strakke tegels",
      "Grindpaden met nette kantopsluiting",
      "Borders voorbereid voor beplanting",
      "Onderhoudsarme composieten schutting",
      "Strakke, duidelijke tuinindeling",
    ],
    services: ["Tuinaanleg", "Straatwerk", "Groenvoorziening"],
  },
  {
    title: "Betonvloer Arkel",
    location: "Arkel",
    image: "/images/project-betonvloer-arkel-3.webp",
    gallery: [
      "/images/project-betonvloer-arkel-3.webp",
      "/images/project-betonvloer-arkel-1.webp",
      "/images/project-betonvloer-arkel-2.webp",
      "/images/project-betonvloer-arkel-4.webp",
    ],
    size: "wide",
    slug: "betonvloer-arkel",
    date: "2026-07-16",
    summary:
      "Een gewapende betonvloer in Arkel, vakkundig gestort en strak gevlinderd voor een egale, sterke en onderhoudsarme ondervloer.",
    body: [
      "Voor deze klus in Arkel legden wij een gewapende betonvloer aan als stevige, duurzame basis — bijvoorbeeld voor een overkapping, tuinhuis of berging. We begonnen met het uitgraven en waterpas voorbereiden van de ondergrond en het plaatsen van een nette bekisting.",
      "Vervolgens brachten we de wapening (betonstaal) aan, zodat de vloer sterk is en niet scheurt. De beton is in één keer gestort en zorgvuldig uitgevlakt. Daarna hebben we de vloer machinaal gevlinderd voor een strakke, egale en gladde afwerking.",
      "Het resultaat is een vlakke, gewapende betonvloer die tegen een stootje kan en jarenlang meegaat — klaar om op te bouwen.",
    ],
    highlights: [
      "Ondergrond uitgegraven en waterpas voorbereid",
      "Nette bekisting geplaatst",
      "Gewapend met betonstaal tegen scheuren",
      "In één keer gestort en uitgevlakt",
      "Strak machinaal gevlinderd",
    ],
    services: ["Grondwerk", "Grondverzet"],
  },
  {
    title: "Straatwerk Lexmond",
    location: "Lexmond",
    image: "/images/project-straatwerk-lexmond-3.webp",
    gallery: [
      "/images/project-straatwerk-lexmond-3.webp",
      "/images/project-straatwerk-lexmond-1.webp",
      "/images/project-straatwerk-lexmond-2.webp",
    ],
    size: "wide",
    slug: "straatwerk-lexmond",
    date: "2026-07-16",
    summary:
      "Compleet straatwerk in Lexmond: een ruime, strak bestrate oprit met nieuwe parkeervakken en een border met staptegels rondom het huis.",
    body: [
      "Voor deze woning in Lexmond verzorgden wij het complete straatwerk. We begonnen met het bouwrijp maken en waterpas voorbereiden van de ondergrond met een goed verdicht zandbed, zodat de bestrating vlak blijft liggen en het water goed wegloopt.",
      "De ruime oprit is bestraat met gebakken klinkers in een strak keperverband, met duidelijk afgezette parkeervakken in een contrasterende steen. Rondom het huis legden we een nette border met grind en staptegels, die het geheel afmaakt en een verzorgde looproute langs de gevel geeft.",
      "Het resultaat is een ruime, praktische en verzorgde bestrating met volop parkeerruimte, die vlak blijft liggen en jaren meegaat.",
    ],
    highlights: [
      "Ondergrond bouwrijp gemaakt en verdicht zandbed",
      "Oprit in gebakken klinkers, strak keperverband",
      "Duidelijke parkeervakken in contrasterende steen",
      "Border met grind en staptegels rondom het huis",
      "Ruim, praktisch en netjes opgeleverd",
    ],
    services: ["Straatwerk", "Grondwerk"],
  },
  {
    title: "Groenvoorziening Schelluinen",
    location: "Schelluinen",
    image: "/images/project-groen-schelluinen-1.webp",
    gallery: [
      "/images/project-groen-schelluinen-1.webp",
      "/images/project-groen-schelluinen-2.webp",
      "/images/project-groen-schelluinen-3.webp",
      "/images/project-groen-schelluinen-4.webp",
    ],
    size: "wide",
    slug: "groenvoorziening-schelluinen",
    date: "2026-07-16",
    summary:
      "Groenonderhoud in Schelluinen: hagen en struiken strak in bolvorm gesnoeid en de tuin netjes winterklaar gemaakt.",
    body: [
      "Voor deze tuin in Schelluinen verzorgden wij het groenonderhoud. De aanwezige hagen en struiken hebben we strak in bolvorm gesnoeid, waardoor de tuin een verzorgde, speelse en tijdloze uitstraling krijgt.",
      "Naast het vormsnoeien hebben we de tuin volledig winterklaar gemaakt: snoeiafval afgevoerd, randen netjes afgestoken en het groen teruggebracht in model. Zo staat de tuin er het hele seizoen verzorgd bij en komt hij in het voorjaar sterk terug.",
      "Het resultaat is een strak onderhouden, groene tuin die met minimaal onderhoud jaarrond mooi blijft.",
    ],
    highlights: [
      "Hagen en struiken strak in bolvorm gesnoeid",
      "Vormsnoei voor een verzorgde uitstraling",
      "Snoeiafval afgevoerd",
      "Randen afgestoken en groen in model",
      "Tuin volledig winterklaar gemaakt",
    ],
    services: ["Groenvoorziening"],
  },
  {
    title: "Voortuin Dalem",
    location: "Dalem",
    image: "/images/project-dalem2-3.webp",
    gallery: [
      "/images/project-dalem2-3.webp",
      "/images/project-dalem2-1.webp",
      "/images/project-dalem2-2.webp",
    ],
    size: "wide",
    slug: "voortuin-dalem",
    date: "2026-08-01",
    summary:
      "Een strakke, onderhoudsarme voortuin in Dalem met grijze bestrating, een sfeervol plantvak met olijfbomen in gemetselde plantenbakken en warme tuinverlichting.",
    body: [
      "Voor deze nieuwbouwwoning in Dalem legden wij de complete voortuin aan. De wens was een strakke, onderhoudsarme tuin met een warme uitstraling en volop ruimte om te parkeren en te zitten.",
      "We hebben de voortuin bestraat met grijze tegels in een strak verband, met een nette kantopsluiting rondom. In het hart van de tuin maakten we een plantvak met gemetselde plantenbakken van stapelblokken, afgetopt met wit split en beplant met sfeervolle olijfbomen. Daaromheen kwam een gevarieerde border met lavendel, siergrassen en vaste planten.",
      "Met de ingebouwde grondverlichting komt de tuin ook 's avonds prachtig tot z'n recht. Het resultaat is een verzorgde, onderhoudsarme voortuin met karakter — klaar om jaren van te genieten.",
    ],
    highlights: [
      "Grijze bestrating in strak verband met kantopsluiting",
      "Plantvak met gemetselde plantenbakken van stapelblokken",
      "Olijfbomen met wit split als blikvanger",
      "Gevarieerde border met lavendel en vaste planten",
      "Sfeervolle grondverlichting",
    ],
    services: ["Tuinaanleg", "Straatwerk", "Groenvoorziening"],
  },
  {
    title: "Straatwerk Leerdam",
    location: "Leerdam",
    image: "/images/project-straatwerk-leerdam-2.webp",
    gallery: [
      "/images/project-straatwerk-leerdam-2.webp",
      "/images/project-straatwerk-leerdam-1.webp",
    ],
    size: "wide",
    slug: "straatwerk-leerdam",
    date: "2026-09-02",
    summary:
      "Openbaar straatwerk in Leerdam: het trottoir langs de straat volledig opnieuw bestraat met nieuwe betontegels, strak en vlak opgeleverd terwijl het verkeer gewoon door kon rijden.",
    body: [
      "In Leerdam verzorgden wij het herbestraten van het trottoir langs een woonstraat. De oude verharding is opgenomen, de ondergrond opnieuw geëgaliseerd en verdicht, en daarna is het trottoir strak herstraat met nieuwe betontegels.",
      "Omdat het werk midden in een woonwijk plaatsvond, hebben we het werkvak netjes afgezet met bebording en geleidebakens, zodat het verkeer en de bewoners er veilig langs konden. Per vak werkten we het trottoir af, inclusief nette aansluitingen op inritten, straatmeubilair en lichtmasten.",
      "Het resultaat is een vlak, strak en veilig begaanbaar trottoir dat weer jaren meekan. Dit soort openbaar straatwerk voeren we uit voor gemeenten, aannemers en bedrijven in Leerdam en omgeving.",
    ],
    highlights: [
      "Oude verharding opgenomen en afgevoerd",
      "Ondergrond geëgaliseerd en verdicht",
      "Trottoir strak herstraat met betontegels",
      "Nette aansluitingen op inritten en lichtmasten",
      "Veilige afzetting, verkeer kon doorrijden",
    ],
    services: ["Straatwerk", "Grondwerk"],
  },
  {
    title: "Straatwerk Groot-Ammers",
    location: "Groot-Ammers",
    image: "/images/project-straatwerk-groot-ammers-1.webp",
    gallery: [
      "/images/project-straatwerk-groot-ammers-1.webp",
      "/images/project-straatwerk-groot-ammers-2.webp",
      "/images/project-straatwerk-groot-ammers-3.webp",
      "/images/project-straatwerk-groot-ammers-4.webp",
      "/images/project-straatwerk-groot-ammers-5.webp",
      "/images/project-straatwerk-groot-ammers-6.webp",
      "/images/project-straatwerk-groot-ammers-7.webp",
      "/images/project-straatwerk-groot-ammers-8.webp",
      "/images/project-straatwerk-groot-ammers-9.webp",
      "/images/project-straatwerk-groot-ammers-10.webp",
    ],
    size: "wide",
    slug: "straatwerk-groot-ammers",
    date: "2026-09-02",
    summary:
      "Een compleet nieuw erf in Groot-Ammers: een ruim bestraat terrein rond een nieuwbouwwoning, met rode gebakken klinkers in visgraatverband en een strakke antracieten omlijsting.",
    body: [
      "Bij deze nieuwbouwwoning in Groot-Ammers mochten wij het complete erf bestraten. Rondom het huis lag alleen nog zand, dus we begonnen bij het begin: de ondergrond op hoogte brengen, egaliseren en goed verdichten. Met een afreirei en trilplaat hebben we het hele terrein waterpas afgewerkt, zodat de bestrating vlak blijft liggen en het water overal goed wegloopt.",
      "Rondom brachten we een stevige kantopsluiting van betonbanden aan en langs de gevel legden we een lijngoot, zodat het regenwater netjes wordt afgevoerd en niet tegen het huis blijft staan. Zo ligt er een basis die niet gaat zakken of uitzakken aan de randen.",
      "Het vlak zelf is bestraat met rode gebakken klinkers in een strak visgraatverband, omlijst door een brede rand van antracieten stenen in halfsteensverband. Dat kleurcontrast geeft het erf rust en maakt het geheel af. Ook de aansluitingen op de betonvloer bij de schuur en de inrit zijn netjes op elkaar afgestemd.",
      "Het resultaat is een ruim, vlak en verzorgd erf met volop plek om te parkeren en te manoeuvreren — degelijk aangelegd en klaar om jaren mee te gaan.",
    ],
    highlights: [
      "Ondergrond op hoogte gebracht, geëgaliseerd en verdicht",
      "Kantopsluiting met betonbanden rondom",
      "Lijngoot langs de gevel voor goede afwatering",
      "Rode gebakken klinkers in strak visgraatverband",
      "Brede antracieten rand als contrasterende omlijsting",
      "Ruim erf met volop parkeer- en manoeuvreerruimte",
    ],
    services: ["Straatwerk", "Grondwerk", "Grondverzet"],
  },
]

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export const PROJECT_SLUGS = PROJECTS.flatMap((p) => (p.slug ? [p.slug] : []))

export type Review = {
  name: string
  quote: string
  rating: number
}

export const REVIEWS: Review[] = [
  {
    name: "Francis Kosterman",
    quote:
      "Fijne ondernemer met vakkennis die er blijk van gaf goed met klanten te kunnen communiceren. Werkzaamheden zijn goed en volgens afspraak uitgevoerd.",
    rating: 5,
  },
  {
    name: "Sandra Schuilenburg",
    quote:
      "We zijn blij met het straatwerk dat door Martin is gerealiseerd. We hebben weer een supermooie oprit.",
    rating: 5,
  },
  {
    name: "Jitse Straub",
    quote: "Vakman! Communicatie goed en alles volledig naar wens gemaakt!",
    rating: 5,
  },
  {
    name: "Damiaen Peters",
    quote: "Uitstekend vakmanschap. Een dikke vijf sterren waard.",
    rating: 5,
  },
]

/** Gemiddelde reviewscore, o.a. voor de structured data in de layout. */
export const REVIEW_AVERAGE =
  Math.round(
    (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length) * 10,
  ) / 10

export type Location = {
  /** Dient tevens als slug: /hovenier/[plaats] */
  slug: string
  /** Plaatsnaam zoals we die in lopende tekst gebruiken. */
  name: string
  /** Lead + SEO meta-description op de plaatspagina. */
  summary: string
  /** Beschrijvende alinea's op de plaatspagina. */
  paragraphs: string[]
  /** Wijken, buurtschappen en dorpen die we vanuit hier meepakken. */
  nearby: string[]
  /** Slugs uit PROJECTS die we als bewijs op deze pagina tonen. */
  projectSlugs: string[]
  /** Zoektermen waarop deze plaats gevonden mag worden. */
  keywords: string[]
  /** Veelgestelde vragen: op de pagina én als FAQ-structured-data. */
  faq: { q: string; a: string }[]
}

export const LOCATIONS: Location[] = [
  {
    slug: "gorinchem",
    name: "Gorinchem",
    summary:
      "Hovenier in Gorinchem voor tuinaanleg, straatwerk, grondwerk en groenvoorziening. Slob Tuinen werkt vanuit Leerdam, op een kwartier rijden, en heeft in Gorinchem en Dalem al meerdere tuinen en opritten opgeleverd.",
    paragraphs: [
      "Gorinchem ligt op een kwartier rijden van onze standplaats in Leerdam. Daardoor komen we er vaak: voor een complete tuin, een nieuwe oprit, grondwerk achter de woning of het onderhoud van een bedrijventerrein. Kort op de weg betekent ook dat we makkelijk even langskomen om mee te kijken voordat er iets op papier staat.",
      "In de oudere wijken binnen de vesting werken we vaak op krappe plekken, waar het materieel niet zomaar de tuin in rijdt en de aanvoer via de voordeur of een smalle steeg gaat. In de nieuwbouw rond Hoog Dalem is het andere werk: daar ligt de tuin er bij oplevering kaal en ongelijk bij, en moet er eerst goed grondwerk komen voordat de bestrating en de beplanting erin kunnen.",
      "Wat het ook is, we doen het in eigen beheer. Het grondwerk, de bestrating, de beschoeiing en het groen komen van hetzelfde team, dus u heeft één aanspreekpunt: Martin. Dat scheelt afstemming, en het voorkomt dat het ene werk het andere in de weg zit.",
    ],
    nearby: ["Dalem", "Hoog Dalem", "Arkel", "Schelluinen", "Hardinxveld", "Spijk"],
    projectSlugs: [
      "tuinaanleg-gorinchem",
      "voortuin-dalem",
      "tuinaanleg-dalem",
      "schutting-dalem",
      "betonvloer-arkel",
      "groenvoorziening-schelluinen",
    ],
    keywords: [
      "hovenier Gorinchem",
      "tuinaanleg Gorinchem",
      "straatwerk Gorinchem",
      "bestrating Gorinchem",
      "grondwerk Gorinchem",
      "groenvoorziening Gorinchem",
      "tuin laten aanleggen Gorinchem",
      "hovenier Dalem",
    ],
    faq: [
      {
        q: "Werken jullie ook in de kern van Gorinchem?",
        a: "Ja. We werken zowel in de binnenstad als in de nieuwere wijken. Op krappe plekken in de vesting voeren we materiaal met kleiner materieel of met de hand aan, zodat we ook achter een smalle doorgang uit de voeten kunnen.",
      },
      {
        q: "Hoe snel kunnen jullie langskomen?",
        a: "Gorinchem ligt op een kwartier rijden vanaf Leerdam, dus langskomen om mee te kijken is zo geregeld. Bel of app Martin, dan plannen we een moment dat u uitkomt.",
      },
      {
        q: "Doen jullie ook alleen het straatwerk of alleen de beplanting?",
        a: "Dat kan. We leggen complete tuinen aan, maar u kunt ons net zo goed inschakelen voor alleen de oprit, alleen het grondwerk of alleen het groen.",
      },
    ],
  },
  {
    slug: "vianen",
    name: "Vianen",
    summary:
      "Hovenier in Vianen voor tuinaanleg, straatwerk, grondwerk en groenvoorziening. Slob Tuinen werkt vanuit Leerdam in de hele Vijfheerenlanden en legde in Vianen onder meer een strak terras met grootformaat tegels aan.",
    paragraphs: [
      "Vianen hoort bij de Vijfheerenlanden, net als Leerdam, en dat is precies ons werkgebied. We rijden er zonder omweg naartoe, wat het makkelijk maakt om een werk in etappes te doen of nog even terug te komen voor de laatste details.",
      "Het werk in Vianen loopt uiteen. In de tuinen rond de oude kern gaat het vaak om een terras vervangen, een oprit opnieuw leggen of een tuin die na jaren is verzakt weer waterpas krijgen. In de nieuwere wijken en op de bedrijventerreinen langs de A2 gaat het eerder om grondwerk, bestrating over een groter oppervlak en het groen dat daarbij hoort.",
      "We beginnen altijd onderin. Een goed voorbereide, waterpas ondergrond bepaalt of bestrating over vijf jaar nog vlak ligt en of het water wegloopt waar het hoort. Dat deel zie je later niet meer terug, maar het is wel het deel waar het op aankomt.",
    ],
    nearby: ["Lexmond", "Hagestein", "Everdingen", "Meerkerk", "Nieuwegein", "Hoef en Haag"],
    projectSlugs: [
      "tuinaanleg-vianen",
      "straatwerk-lexmond",
      "straatwerk-nieuwegein",
    ],
    keywords: [
      "hovenier Vianen",
      "tuinaanleg Vianen",
      "straatwerk Vianen",
      "bestrating Vianen",
      "grondwerk Vianen",
      "hovenier Vijfheerenlanden",
      "tuin laten aanleggen Vianen",
      "hovenier Lexmond",
    ],
    faq: [
      {
        q: "Werken jullie in de hele Vijfheerenlanden?",
        a: "Ja. Vianen, Leerdam, Meerkerk, Lexmond, Hagestein en de dorpen daartussen liggen allemaal in ons vaste werkgebied.",
      },
      {
        q: "Kunnen jullie een verzakt terras of een verzakte oprit herstellen?",
        a: "Dat doen we regelmatig. We halen de bestrating eruit, brengen de ondergrond weer op hoogte en leggen het geheel opnieuw met een nette kantopsluiting, zodat het strak blijft liggen.",
      },
      {
        q: "Doen jullie ook werk voor bedrijven?",
        a: "Ja. Naast particuliere tuinen verzorgen we grondwerk, bestrating en groenvoorziening op bedrijventerreinen en bij bedrijfspanden.",
      },
    ],
  },
]

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug)
}

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug)
