export const WHATSAPP_URL = "https://wa.me/31628864744"
export const PHONE = "0628864744"
export const PHONE_TEL = "tel:+31628864744"
export const EMAIL = "slobdienstverlening@gmail.com"
export const EMAIL_MAILTO = `mailto:${EMAIL}`

/** WhatsApp-link met vooringevuld bericht — verlaagt de drempel om contact op te nemen. */
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
}

// Vervang de namen en voeg foto's toe (image: "/images/naam.webp") zodra die
// er zijn — de kaarten op /over-ons tonen tot die tijd een initiaal.
export const TEAM: TeamMember[] = [
  {
    name: "Martin Slob",
    role: "Eigenaar & Uitvoerder",
    image: "/images/martin-slob.webp",
  },
  {
    name: "Medewerker 1",
    role: "Grondwerk & Bestrating",
  },
  {
    name: "Medewerker 2",
    role: "Tuinaanleg & Groenvoorziening",
  },
  {
    name: "Medewerker 3",
    role: "Beschoeiing & Grondverzet",
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
}

export const SERVICES: Service[] = [
  {
    id: "tuinaanleg",
    title: "Tuinaanleg",
    image: "/images/service-tuinaanleg.webp",
    intro: "Complete tuinen, van schets tot oplevering.",
    summary:
      "Complete tuinaanleg in Leerdam en omgeving — van ontwerp en grondwerk tot beplanting, bestrating en de laatste details. Slob Tuinen legt tuinen aan die jarenlang meegaan.",
    paragraphs: [
      "Een mooie tuin begint bij een goed plan. Wij denken met u mee over indeling, materialen en beplanting, en vertalen uw wensen naar een ontwerp dat past bij uw woning én bij de manier waarop u de tuin wilt gebruiken. Of het nu gaat om een strakke stadstuin of een ruime landelijke tuin — de verhoudingen moeten kloppen.",
      "Vanaf de eerste spade tot de laatste plant voeren wij alles in eigen beheer uit: grondwerk, bestrating, beschoeiing, beplanting en de sfeervolle afwerking. Doordat alles in één hand ligt, sluit elk onderdeel naadloos op elkaar aan en houdt u één aanspreekpunt.",
      "Wij werken met duurzame materialen en kwaliteitsbeplanting, zodat uw tuin niet alleen bij oplevering mooi is, maar dat jarenlang blijft. Het resultaat is een tuin die af is tot in de details en waar u met een gerust hart van kunt genieten.",
    ],
    highlights: [
      "Tuinontwerp en advies op maat",
      "Grondwerk en egalisatie",
      "Bestrating, paden en terrassen",
      "Beplanting, hagen en borders",
      "Oplevering tot in de details",
    ],
  },
  {
    id: "grondverzet",
    title: "Grondverzet",
    image: "/images/service-grondverzet.webp",
    intro: "Graven, verplaatsen en egaliseren met zwaar materieel.",
    summary:
      "Grondverzet in Leerdam en de Betuwe — ontgraven, ophogen, egaliseren en afvoeren met modern materieel. Efficiënt uitgevoerd en netjes opgeleverd door Slob Tuinen.",
    paragraphs: [
      "Groot of klein: voor elke grondverzetklus beschikken wij over het juiste materieel en de ervaring om efficiënt te werken. Van het bouwrijp maken van een kavel tot het uitgraven van een vijver of het ophogen van een terrein — wij pakken het vakkundig aan.",
      "Wij ontgraven, verplaatsen, egaliseren en voeren overtollige grond af. Daarbij werken we met oog voor uw perceel en de omgeving: we voorkomen onnodige schade, houden rekening met kabels en leidingen en laten het terrein strak en verzorgd achter.",
      "Doordat wij ook het grond- en straatwerk verzorgen, sluit het grondverzet naadloos aan op de vervolgstappen. Zo legt u een solide basis voor bestrating, beplanting of bebouwing.",
    ],
    highlights: [
      "Ontgraven en uitgraven",
      "Ophogen en egaliseren",
      "Afvoeren van overtollige grond",
      "Bouwrijp maken van kavels",
      "Modern materieel, ervaren uitvoering",
    ],
  },
  {
    id: "beschoeiingswerk",
    title: "Beschoeiingswerk",
    image: "/images/service-beschoeiing.webp",
    intro: "Stevige oeverbescherming langs water.",
    summary:
      "Beschoeiing plaatsen langs water in de Vijfheerenlanden en omgeving. Slob Tuinen plaatst duurzame oeverbescherming in hout, kunststof of staal — waterpas en op maat.",
    paragraphs: [
      "Een sterke beschoeiing beschermt uw oever tegen afkalving en geeft het water een strakke, verzorgde rand. Zeker in een waterrijke omgeving als de Vijfheerenlanden is een goede oeverbescherming geen luxe, maar noodzaak.",
      "Wij plaatsen beschoeiingen in hout, kunststof of staal, afgestemd op uw situatie en wensen. Alles wordt perfect waterpas en op maat aangelegd, met een stevige verankering die de druk van grond en water jarenlang opvangt.",
      "Of het nu gaat om een sloot, vijver of bredere watergang — wij zorgen voor een beschoeiing die decennialang meegaat en die de overgang tussen land en water netjes afwerkt.",
    ],
    highlights: [
      "Beschoeiing in hout, kunststof of staal",
      "Bescherming tegen afkalving",
      "Waterpas en op maat geplaatst",
      "Stevige, duurzame verankering",
      "Voor sloot, vijver of watergang",
    ],
  },
  {
    id: "groenvoorziening",
    title: "Groenvoorziening",
    image: "/images/service-groenvoorziening.webp",
    intro: "Beplanting, hagen en onderhoud.",
    summary:
      "Groenvoorziening en groenonderhoud in Leerdam en omgeving — beplanting, hagen, bomen en structureel onderhoud. De juiste plant op de juiste plek door Slob Tuinen.",
    paragraphs: [
      "Groen maakt een tuin of terrein pas echt af. Wij verzorgen het aanplanten van hagen, borders, bomen en beplanting, met kennis van welke soort waar het beste tot zijn recht komt — qua grondsoort, licht en onderhoud.",
      "Naast de aanleg verzorgen wij ook structureel groenonderhoud: snoeien, knippen, schoffelen en het op peil houden van uw beplanting. Zo staat uw groen er het hele jaar door verzorgd bij, zonder dat u er zelf naar hoeft om te kijken.",
      "Of het nu gaat om een enkele haag of het complete groen rondom uw woning of bedrijfspand — wij leveren vakwerk met oog voor detail en voor de lange termijn.",
    ],
    highlights: [
      "Aanplant van hagen, borders en bomen",
      "De juiste plant op de juiste plek",
      "Snoei- en knipwerk",
      "Structureel groenonderhoud",
      "Voor particulier en zakelijk",
    ],
  },
  {
    id: "grondwerk",
    title: "Grondwerk",
    image: "/images/service-grondwerk.webp",
    intro: "De solide basis onder elk project.",
    summary:
      "Grondwerk in Leerdam en omgeving — ontgraving, fundering, drainage en een waterpas voorbereide ondergrond. De solide, onzichtbare basis onder elk project van Slob Tuinen.",
    paragraphs: [
      "Goed grondwerk is de basis van elk geslaagd buitenproject. Wat onder de grond gebeurt, bepaalt of bestrating vlak blijft liggen en of beplanting goed gedijt. Wij nemen die basis serieus.",
      "Wij verzorgen ontgraving, fundering, drainage en een waterpas voorbereide ondergrond. Door de juiste opbouw en een goede afwatering voorkomen we verzakking en wateroverlast — problemen die anders pas later, en duur, aan het licht komen.",
      "Onzichtbaar, maar bepalend voor het eindresultaat. Met degelijk grondwerk legt u de fundering voor een terrein dat jarenlang stabiel en strak blijft.",
    ],
    highlights: [
      "Ontgraving en fundering",
      "Drainage en afwatering",
      "Waterpas voorbereide ondergrond",
      "Voorkomt verzakking en wateroverlast",
      "Basis voor bestrating en beplanting",
    ],
  },
  {
    id: "straatwerk",
    title: "Straatwerk",
    image: "/images/service-straatwerk.webp",
    intro: "Strakke opritten, paden en terrassen.",
    summary:
      "Straatwerk en bestrating in Leerdam en omgeving — strakke opritten, tuinpaden en terrassen met perfecte voegen en goede afwatering. Vakwerk dat blijft liggen, door Slob Tuinen.",
    paragraphs: [
      "Bestrating waar u jaren plezier van heeft, begint bij een goede ondergrond en eindigt bij strak gelegde stenen. Of het nu gaat om een moderne oprit, een sfeervol terras of een tuinpad — wij leggen het vakkundig en met oog voor detail.",
      "Wij verzorgen het complete traject: van de voorbereiding van de ondergrond en de juiste afwatering tot het leggen van de bestrating met perfecte voegen en een nette kantopsluiting. Zo blijft uw bestrating vlak liggen en staat ze stevig.",
      "Van klinkers en betontegels tot natuursteen — wij adviseren over materiaal en legpatroon en leveren straatwerk dat blijft liggen en blijft staan.",
    ],
    highlights: [
      "Opritten, paden en terrassen",
      "Strakke voegen en kantopsluiting",
      "Goede afwatering en afschot",
      "Klinkers, tegels of natuursteen",
      "Degelijke voorbereiding van de ondergrond",
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
  size: "tall" | "wide" | "regular"
  /** Wanneer gezet, is de projectkaart klikbaar naar /projecten/[slug]. */
  slug?: string
  /** Korte samenvatting — dient als lead én als SEO meta-description. */
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
    title: "Oprijlaan",
    location: "Nieuwland",
    image: "/images/project-oprijlaan-nu.webp",
    beforeImage: "/images/project-oprijlaan-toen.webp",
    size: "wide",
    slug: "oprijlaan-nieuwland",
    summary:
      "Van een modderige, onbegaanbare oprijlaan naar een strakke, verharde toegangsweg in Nieuwland. Slob Tuinen verzorgde het volledige grondwerk, de afwatering en de verharding.",
    body: [
      "De oprijlaan in Nieuwland veranderde bij elke regenbui in een modderpoel. De ondergrond was verzadigd, water bleef in plassen staan en de laan was nauwelijks begaanbaar — niet voor auto's en niet te voet. Een stevige, duurzame oplossing was nodig die het hele jaar door droog en berijdbaar blijft.",
      "Wij zijn begonnen met het afgraven en afvoeren van de doorweekte bovenlaag. Daarna is een stabiele, waterdoorlatende fundering aangebracht en zorgvuldig verdicht, met de juiste afschot richting de naastgelegen sloot zodat regenwater voortaan snel wegloopt. De laan is afgewerkt met een strakke grindverharding en langs de oever is een nette houten afscheiding geplaatst.",
      "Het resultaat is een verzorgde, onderhoudsarme oprijlaan die naadloos aansluit op het landelijke karakter van de omgeving. Waar eerst modder en plassen lagen, is nu een egale, droge toegangsweg die jarenlang meegaat.",
    ],
    highlights: [
      "Afgraven en afvoeren van de verzadigde modderlaag",
      "Aanbrengen en verdichten van een stabiele, waterdoorlatende fundering",
      "Afwatering met de juiste afschot richting de sloot",
      "Strakke grindverharding voor een natuurlijke, onderhoudsarme uitstraling",
      "Nette houten afscheiding langs de oever",
    ],
    services: ["Grondwerk", "Grondverzet", "Straatwerk"],
  },
  {
    title: "Moderne Oprit",
    location: "Leerdam",
    image: "/images/project-oprit.webp",
    size: "tall",
  },
  {
    title: "Grootschalig Grondverzet",
    location: "Betuwe",
    image: "/images/project-grondverzet.webp",
    size: "wide",
  },
  {
    title: "Complete Tuinaanleg",
    location: "Leerdam e.o.",
    image: "/images/project-tuin.webp",
    size: "regular",
  },
  {
    title: "Beschoeiing & Oever",
    location: "Vijfheerenlanden",
    image: "/images/project-beschoeiing.webp",
    size: "tall",
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
    name: "Lotte Kemkes",
    quote: "Keurige vakman, verdiende onze klus.",
    rating: 5,
  },
  {
    name: "Damiaen Peters",
    quote: "Uitstekend vakmanschap. Een dikke vijf sterren waard.",
    rating: 5,
  },
]
