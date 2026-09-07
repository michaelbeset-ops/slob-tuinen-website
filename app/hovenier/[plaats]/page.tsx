import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight, Check, MapPin, Plus } from "lucide-react"
import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import {
  getLocationBySlug,
  getProjectBySlug,
  LOCATION_SLUGS,
  SERVICES,
} from "@/components/slob/data"
import { withBasePath } from "@/lib/base-path"

const SITE_URL = "https://slobtuinen.nl/"

export function generateStaticParams() {
  return LOCATION_SLUGS.map((plaats) => ({ plaats }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ plaats: string }>
}): Promise<Metadata> {
  const { plaats } = await params
  const location = getLocationBySlug(plaats)
  if (!location) return { title: "Plaats niet gevonden | Slob Tuinen" }

  const title = `Hovenier ${location.name} | Tuinaanleg & Straatwerk | Slob Tuinen`
  const description = location.summary
  const url = `${SITE_URL}hovenier/${plaats}`

  return {
    title,
    description,
    keywords: location.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "nl_NL",
      siteName: "Slob Tuinen",
      title,
      description,
      url,
      images: [
        {
          url: "og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Slob Tuinen, hovenier in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["og-image.jpg"],
    },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ plaats: string }>
}) {
  const { plaats } = await params
  const location = getLocationBySlug(plaats)
  if (!location) notFound()

  const projects = location.projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  const hero = projects[0]
  const url = `${SITE_URL}hovenier/${plaats}`

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Hovenier in ${location.name}`,
    description: location.summary,
    serviceType: SERVICES.map((s) => s.title),
    areaServed: [
      { "@type": "City", name: location.name },
      ...location.nearby.map((n) => ({ "@type": "Place", name: n })),
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Slob Tuinen",
      telephone: "+31628864744",
      email: "slobdienstverlening@gmail.com",
      url: SITE_URL,
    },
    url,
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Hovenier ${location.name}`,
        item: url,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceLd, faqLd, breadcrumbLd]),
        }}
      />
      <SiteHeader />

      <main id="hoofdinhoud" tabIndex={-1}>
        {/* Breadcrumb */}
        <nav
          aria-label="Kruimelpad"
          className="mx-auto max-w-[1600px] px-6 pt-8 md:px-12"
        >
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <li>
              <a href={withBasePath("/")} className="transition-colors hover:text-forest">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">Hovenier {location.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-[1600px] px-6 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            {hero && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={withBasePath(hero.image)}
                  alt={`Werk van Slob Tuinen in ${location.name}: ${hero.title}`}
                  fetchPriority="high"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-col justify-center">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
                <MapPin className="size-4" />
                Werkgebied
              </p>
              <h1 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.5rem,6vw,4.5rem)]">
                Hovenier in
                <br />
                {location.name}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {location.summary}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={withBasePath("/offerte")}
                  className="inline-flex items-center justify-center gap-3 bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
                >
                  Offerte aanvragen
                </a>
                <a
                  href={withBasePath("/#contact")}
                  className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-white"
                >
                  Contact opnemen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Verhaal + omliggende plaatsen */}
        <section className="mx-auto max-w-[1600px] px-6 pb-4 md:px-12">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <h2 className="mb-6 font-black uppercase tracking-tighter text-foreground text-[clamp(1.5rem,3vw,2.25rem)]">
                Ons werk in {location.name}
              </h2>
              <div className="flex flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {location.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="min-w-0 lg:pt-1">
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
                Ook in de buurt
              </h2>
              <ul className="flex flex-col gap-4">
                {location.nearby.map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-forest" />
                    <span className="min-w-0 leading-relaxed text-foreground">{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
          <div className="border-t border-border pt-14">
            <h2 className="mb-8 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
              Wat we doen in {location.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={withBasePath(`/diensten/${s.id}`)}
                  className="group flex flex-col justify-between border border-border p-6 transition-colors hover:border-forest"
                >
                  <div>
                    <h3 className="font-black uppercase tracking-tight text-foreground text-xl">
                      {s.title} in {location.name}
                    </h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {s.intro}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-forest">
                    Bekijk dienst
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Projecten als bewijs */}
        {projects.length > 0 && (
          <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-12 md:pb-20">
            <div className="border-t border-border pt-14">
              <h2 className="mb-3 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
                Opgeleverd in {location.name} en omgeving
              </h2>
              <p className="mb-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Werk van onze eigen ploeg, gefotografeerd na oplevering.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {projects.map((p) => (
                  <a
                    key={p.slug}
                    href={withBasePath(`/projecten/${p.slug}`)}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={withBasePath(p.image)}
                        alt={`${p.title} in ${p.location} door Slob Tuinen`}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-black uppercase tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 text-forest" />
                      {p.location}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Veelgestelde vragen */}
        <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-12 md:pb-20">
          <div className="border-t border-border pt-14">
            <h2 className="mb-8 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
              Veelgestelde vragen
            </h2>
            <div className="max-w-3xl divide-y divide-border border-y border-border">
              {location.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-semibold text-foreground">
                    {f.q}
                    <Plus className="mt-0.5 size-5 shrink-0 text-forest transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
            <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(1.75rem,4.5vw,3.5rem)]">
              Plannen in {location.name}?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-white/70">
              Vertel Martin over uw tuin of terrein. U krijgt snel en eerlijk
              antwoord, met een vrijblijvende offerte.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={withBasePath("/offerte")}
                className="inline-flex items-center gap-3 bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
              >
                Offerte aanvragen
              </a>
              <a
                href={withBasePath("/#projecten")}
                className="inline-flex items-center gap-3 border border-white/40 px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
              >
                Alle projecten
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  )
}
