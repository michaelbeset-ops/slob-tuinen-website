import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Check, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { BeforeAfter } from "@/components/slob/before-after"
import {
  getLocationForProject,
  getProjectBySlug,
  getRelatedProjects,
  getServiceByTitle,
  PROJECT_SLUGS,
} from "@/components/slob/data"
import { withBasePath } from "@/lib/base-path"

const SITE_URL = "https://slobtuinen.nl/"

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project niet gevonden | Slob Tuinen" }

  // Veel projecttitels bevatten de plaats al ("Straatwerk Leerdam"); dan niet
  // nog eens "in Leerdam" erachter plakken.
  const place = project.title.includes(project.location)
    ? project.title
    : `${project.title} in ${project.location}`
  const title = `${place} | Slob Tuinen`
  const description =
    project.summary ??
    `${project.title} in ${project.location}, uitgevoerd door Slob Tuinen.`
  const ogImage = `images/project-${slug}-og.jpg`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}projecten/${slug}` },
    openGraph: {
      type: "article",
      locale: "nl_NL",
      siteName: "Slob Tuinen",
      title,
      description,
      url: `${SITE_URL}projecten/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${project.title} in ${project.location}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(project)
  const serviceLinks = (project.services ?? []).flatMap((s) => {
    const service = getServiceByTitle(s)
    return service ? [service] : []
  })
  const location = getLocationForProject(slug)

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projecten", item: `${SITE_URL}#projecten` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${project.title} in ${project.location}`,
        item: `${SITE_URL}projecten/${slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
            <li>
              <a href={withBasePath("/#projecten")} className="transition-colors hover:text-forest">
                Projecten
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{project.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-[1600px] px-6 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={withBasePath(project.image)}
                alt={`${project.title} in ${project.location}, het eindresultaat door Slob Tuinen`}
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
                <MapPin className="size-4" />
                {project.location}
              </p>
              <h1 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.5rem,6vw,4.5rem)]">
                {project.title}
              </h1>
              {project.summary && (
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              )}
              {project.services && project.services.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.services.map((s) => {
                    const service = getServiceByTitle(s)
                    const chip =
                      "border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground"
                    return (
                      <li key={s}>
                        {service ? (
                          <a
                            href={withBasePath(`/diensten/${service.id}`)}
                            className={`${chip} inline-block transition-colors hover:border-forest hover:text-forest`}
                          >
                            {s}
                          </a>
                        ) : (
                          <span className={`${chip} inline-block`}>{s}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Beschrijving + werkzaamheden */}
        {(project.body?.length || project.highlights?.length) && (
          <section className="mx-auto max-w-[1600px] px-6 pb-4 md:px-12">
            <div className="grid grid-cols-1 gap-12 border-t border-border pt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
              {project.body && project.body.length > 0 && (
                <div>
                  <h2 className="mb-6 font-black uppercase tracking-tighter text-foreground text-[clamp(1.5rem,3vw,2.25rem)]">
                    Wat we hebben gedaan
                  </h2>
                  <div className="flex flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                    {project.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="min-w-0 lg:pt-1">
                  <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
                    In het kort
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <Check className="mt-0.5 size-5 shrink-0 text-forest" />
                        <span className="min-w-0 leading-relaxed text-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Galerij */}
        {(() => {
          const gallery = (project.gallery ?? []).filter(
            (src) => src !== project.image,
          )
          return gallery.length > 0 ? (
            <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
              <div className="border-t border-border pt-14">
                <h2 className="mb-8 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
                  Beeld van het werk
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                  {gallery.map((src, i) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden bg-muted"
                    >
                      <img
                        src={withBasePath(src)}
                        alt={`${project.title} in ${project.location}, foto ${i + 2}`}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null
        })()}

        {/* Voor & na */}
        {project.beforeImage && (
          <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
            <div className="border-t border-border pt-14">
              <h2 className="mb-3 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
                Van toen naar nu
              </h2>
              <p className="mb-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Sleep de handgreep om het verschil te zien tussen de oude
                situatie en het eindresultaat.
              </p>
              <div className="mx-auto max-w-3xl">
                <BeforeAfter
                  after={project.image}
                  before={project.beforeImage}
                  alt={`${project.title} in ${project.location}`}
                />
              </div>
            </div>
          </section>
        )}

        {/* Verder kijken: interne links naar diensten, plaats en vergelijkbare projecten */}
        {(related.length > 0 || serviceLinks.length > 0 || location) && (
          <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
            <div className="border-t border-border pt-14">
              {related.length > 0 && (
                <>
                  <h2 className="mb-8 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
                    Vergelijkbare projecten
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {related.map((p) => (
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
                </>
              )}

              {(serviceLinks.length > 0 || location) && (
                <>
                  <h2
                    className={`mb-8 font-black uppercase tracking-tighter text-foreground text-[clamp(1.5rem,3vw,2.25rem)] ${related.length > 0 ? "mt-16" : ""}`}
                  >
                    Meer over dit werk
                  </h2>
                  <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.id}
                        href={withBasePath(`/diensten/${s.id}`)}
                        className="group flex items-center justify-between gap-4 bg-background p-6 transition-colors hover:bg-foreground hover:text-white"
                      >
                        <span>
                          <span className="block font-black uppercase tracking-tight text-[clamp(1.1rem,2vw,1.4rem)]">
                            {s.title}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground group-hover:text-white/70">
                            {s.intro}
                          </span>
                        </span>
                        <ArrowUpRight className="size-5 shrink-0 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                    {location && (
                      <a
                        href={withBasePath(`/hovenier/${location.slug}`)}
                        className="group flex items-center justify-between gap-4 bg-background p-6 transition-colors hover:bg-foreground hover:text-white"
                      >
                        <span>
                          <span className="block font-black uppercase tracking-tight text-[clamp(1.1rem,2vw,1.4rem)]">
                            Hovenier in {location.name}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground group-hover:text-white/70">
                            Ons werk in {location.name} en omgeving.
                          </span>
                        </span>
                        <ArrowUpRight className="size-5 shrink-0 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-foreground py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
            <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(1.75rem,4.5vw,3.5rem)]">
              Zoiets voor uw terrein?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-white/70">
              Vertel Martin over uw project. U krijgt snel en eerlijk antwoord,
              met een vrijblijvende offerte.
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
                <ArrowLeft className="size-5" />
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
