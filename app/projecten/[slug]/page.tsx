import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { WhatsAppIcon } from "@/components/slob/whatsapp-icon"
import { BeforeAfter } from "@/components/slob/before-after"
import { getProjectBySlug, PROJECT_SLUGS, whatsappUrl } from "@/components/slob/data"
import { withBasePath } from "@/lib/base-path"

const SITE_URL = "https://michaelbeset-ops.github.io/slob-tuinen-website/"

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
  if (!project) return { title: "Project niet gevonden — Slob Tuinen" }

  const title = `${project.title} in ${project.location} — Slob Tuinen`
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${project.title} — ${project.location}` }],
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projecten", item: `${SITE_URL}#projecten` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${project.title} — ${project.location}`,
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
                alt={`${project.title} in ${project.location} — het eindresultaat door Slob Tuinen`}
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
                  {project.services.map((s) => (
                    <li
                      key={s}
                      className="border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground"
                    >
                      {s}
                    </li>
                  ))}
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

        {/* CTA */}
        <section className="bg-foreground py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
            <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(1.75rem,4.5vw,3.5rem)]">
              Zoiets voor uw terrein?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-white/70">
              Vertel Martin over uw project — u krijgt snel en eerlijk antwoord,
              met een vrijblijvende offerte.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl(
                  `Hallo Martin, ik zag jullie project "${project.title}" in ${project.location} en wil graag een offerte voor iets soortgelijks.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
              >
                <WhatsAppIcon className="size-5" />
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
