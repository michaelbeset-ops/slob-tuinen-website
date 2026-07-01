export const WHATSAPP_URL = "https://wa.me/31628864744"
export const PHONE = "0628864744"
export const PHONE_TEL = "tel:+31628864744"

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

export const TEAM: TeamMember[] = [
  {
    name: "Martin Slob",
    role: "Eigenaar & Uitvoerder",
    image: "/images/martin-slob.png",
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
  id: string
  title: string
  image: string
  intro: string
  body: string
}

export const SERVICES: Service[] = [
  {
    id: "tuinaanleg",
    title: "Tuinaanleg",
    image: "/images/service-tuinaanleg.png",
    intro: "Complete tuinen, van schets tot oplevering.",
    body: "Wij ontwerpen en realiseren tuinen die jarenlang meegaan. Van de eerste schets en grondvoorbereiding tot beplanting, bestrating en sfeervolle details — alles wordt met oog voor verhouding en duurzaamheid uitgevoerd. Een tuin die past bij uw woning én bij uw manier van leven.",
  },
  {
    id: "grondverzet",
    title: "Grondverzet",
    image: "/images/service-grondverzet.png",
    intro: "Graven, verplaatsen en egaliseren met zwaar materieel.",
    body: "Voor grote en kleine grondverzetklussen beschikken wij over modern materieel en de ervaring om efficiënt te werken. Ontgraven, ophogen, egaliseren en afvoeren van grond — strak uitgevoerd en netjes opgeleverd, met respect voor uw perceel en de omgeving.",
  },
  {
    id: "beschoeiingswerk",
    title: "Beschoeiingswerk",
    image: "/images/service-beschoeiing.png",
    intro: "Stevige oeverbescherming langs water.",
    body: "Een sterke beschoeiing beschermt uw oever tegen afkalving en geeft het water een strakke, verzorgde rand. Wij plaatsen duurzame beschoeiingen in hout, kunststof of staal, perfect waterpas en op maat — gemaakt om decennialang stand te houden.",
  },
  {
    id: "groenvoorziening",
    title: "Groenvoorziening",
    image: "/images/service-groenvoorziening.png",
    intro: "Beplanting, hagen en onderhoud.",
    body: "Van het aanplanten van hagen, borders en bomen tot structureel groenonderhoud: wij zorgen dat uw groen er het hele jaar verzorgd bij staat. De juiste plant op de juiste plek, vakkundig aangelegd en met kennis van zaken onderhouden.",
  },
  {
    id: "grondwerk",
    title: "Grondwerk",
    image: "/images/service-grondwerk.png",
    intro: "De solide basis onder elk project.",
    body: "Goed grondwerk is de basis van elk geslaagd buitenproject. Wij verzorgen ontgraving, fundering, drainage en een waterpas voorbereide ondergrond, zodat bestrating en beplanting perfect en stabiel worden aangelegd. Onzichtbaar, maar bepalend voor het eindresultaat.",
  },
  {
    id: "straatwerk",
    title: "Straatwerk",
    image: "/images/service-straatwerk.png",
    intro: "Strakke opritten, paden en terrassen.",
    body: "Bestrating waar u jaren plezier van heeft. Of het nu gaat om een moderne oprit, een sfeervol terras of een tuinpad — wij leggen het strak, met perfecte voegen en de juiste afwatering. Vakwerk dat blijft liggen en blijft staan.",
  },
]

export type Project = {
  title: string
  location: string
  image: string
  size: "tall" | "wide" | "regular"
}

export const PROJECTS: Project[] = [
  {
    title: "Moderne Oprit",
    location: "Leerdam",
    image: "/images/project-oprit.png",
    size: "tall",
  },
  {
    title: "Grootschalig Grondverzet",
    location: "Betuwe",
    image: "/images/project-grondverzet.png",
    size: "wide",
  },
  {
    title: "Complete Tuinaanleg",
    location: "Leerdam e.o.",
    image: "/images/project-tuin.png",
    size: "regular",
  },
  {
    title: "Beschoeiing & Oever",
    location: "Vijfheerenlanden",
    image: "/images/project-beschoeiing.png",
    size: "tall",
  },
]

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
