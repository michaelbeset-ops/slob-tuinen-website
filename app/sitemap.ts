import type { MetadataRoute } from "next"
import { LOCATIONS, PROJECTS, SERVICES } from "@/components/slob/data"

const SITE_URL = "https://slobtuinen.nl"

/** Vereist bij output: "export" — de sitemap wordt bij de build vastgelegd. */
export const dynamic = "force-static"

/**
 * Wordt bij de build gegenereerd uit dezelfde data als de pagina's zelf, zodat
 * een nieuw project of een nieuwe plaats nooit meer handmatig toegevoegd hoeft
 * te worden. Projectpagina's krijgen een lastmod uit hun opleverdatum.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = PROJECTS.filter((p) => p.slug)

  /** Nieuwste projectdatum, als lastmod voor de pagina's die projecten tonen. */
  const newestProject = projects
    .map((p) => p.date)
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(-1)

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: newestProject,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/offerte`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/over-ons`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...LOCATIONS.map((l) => ({
      url: `${SITE_URL}/hovenier/${l.slug}`,
      lastModified: newestProject,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/diensten/${s.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/projecten/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/algemene-voorwaarden`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacybeleid`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookiebeleid`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
