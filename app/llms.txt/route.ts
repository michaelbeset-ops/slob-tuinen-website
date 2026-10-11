import {
  EMAIL,
  HOME_FAQ,
  LOCATIONS,
  PHONE,
  PROJECTS,
  SERVICES,
} from "@/components/slob/data"

const SITE_URL = "https://slobtuinen.nl"

/** Vereist bij output: "export" — het bestand wordt bij de build vastgelegd. */
export const dynamic = "force-static"

/**
 * llms.txt (https://llmstxt.org): een korte, leesbare samenvatting van de site
 * voor AI-zoekmachines als ChatGPT, Claude en Perplexity. Gegenereerd uit
 * dezelfde data als de pagina's, zodat nieuwe projecten vanzelf meekomen.
 */
export function GET() {
  const projects = PROJECTS.filter((p) => p.slug)

  const lines = [
    "# Slob Tuinen",
    "",
    "> Slob Tuinen is een hovenier uit Leerdam (Vijfheerenlanden) van Martin Slob. Tuinaanleg, straatwerk en bestrating, beschoeiingswerk, grondverzet, grondwerk en groenvoorziening voor particulieren en bedrijven in Leerdam en omgeving, alles in eigen beheer.",
    "",
    `Adres: Recht van Ter Leede 28a, 4143 LP Leerdam. Telefoon en WhatsApp: ${PHONE}. E-mail: ${EMAIL}.`,
    "Werkgebied: Leerdam, Vijfheerenlanden, Vianen, Gorinchem, Culemborg, de Alblasserwaard en de Betuwe.",
    "",
    "## Diensten",
    "",
    ...SERVICES.map((s) => `- [${s.title}](${SITE_URL}/diensten/${s.id}): ${s.summary}`),
    "",
    "## Werkgebied",
    "",
    ...LOCATIONS.map(
      (l) => `- [Hovenier in ${l.name}](${SITE_URL}/hovenier/${l.slug}): ${l.summary}`,
    ),
    "",
    "## Projecten",
    "",
    ...projects.map(
      (p) =>
        `- [${p.title}](${SITE_URL}/projecten/${p.slug})${p.summary ? `: ${p.summary}` : ""}`,
    ),
    "",
    "## Veelgestelde vragen",
    "",
    ...HOME_FAQ.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Contact",
    "",
    `- [Offerte aanvragen](${SITE_URL}/offerte): vrijblijvende offerte op maat.`,
    `- [Over ons](${SITE_URL}/over-ons): het team achter Slob Tuinen.`,
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
