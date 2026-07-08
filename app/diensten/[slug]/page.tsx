import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { WhatsAppIcon } from "@/components/slob/whatsapp-icon"
import { getServiceById, SERVICES, whatsappUrl } from "@/components/slob/data"
import { withBasePath } from "@/lib/base-path"

const SITE_URL = "https://michaelbeset-ops.github.io/slob-tuinen-website/"

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceById(slug)
  if (!service) return { title: "Dienst niet gevonden | Slob Tuinen" }

  const title = `${service.title} | Slob Tuinen, Leerdam e.o.`
  const description = service.summary
  // OG-afbeelding afgeleid van de afbeeldingsnaam (image-id ≠ altijd de slug).
  const ogImage = service.image.replace(/^\//, "").replace(/\.webp$/, "-og.jpg")

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}diensten/${slug}` },
    openGraph: {
      type: "article",
      locale: "nl_NL",
      siteName: "Slob Tuinen",
      title,
      description,
      url: `${SITE_URL}diensten/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${service.title} door Slob Tuinen` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceById(slug)
  if (!service) notFound()

  const others = SERVICES.filter((s) => s.id !== slug)

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    areaServed: ["Leerdam", "Vijfheerenlanden", "Betuwe"],
    provider: {
      "@type": "LocalBusiness",
      name: "Slob Tuinen",
      telephone: "+31628864744",
      email: "slobdienstverlening@gmail.com",
      url: SITE_URL,
    },
    url: `${SITE_URL}diensten/${slug}`,
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diensten", item: `${SITE_URL}#diensten` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}diensten/${slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SiteHeader />

      <main id="hoofdinhoud" tabIndex={-1}>
        {/* Hero met afbeelding */}
        <section className="relative min-h-[52vh] bg-foreground md:min-h-[60vh]">
          <img
            src={withBasePath(service.image)}
            alt={`${service.title} door Slob Tuinen`}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/30" />

          <div className="relative mx-auto flex min-h-[52vh] max-w-[1600px] flex-col justify-end px-6 pb-14 pt-28 md:min-h-[60vh] md:px-12 md:pb-20">
            {/* Breadcrumb */}
            <nav aria-label="Kruimelpad" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                <li>
                  <a href={withBasePath("/")} className="transition-colors hover:text-forest">
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a href={withBasePath("/#diensten")} className="transition-colors hover:text-forest">
                    Diensten
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{service.title}</li>
              </ol>
            </nav>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Onze diensten
            </p>
            <h1 className="max-w-3xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-white text-[clamp(2.5rem,7vw,5.5rem)]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
              {service.summary}
            </p>
          </div>
        </section>

        {/* Beschrijving + highlights */}
        <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <h2 className="mb-6 font-black uppercase tracking-tighter text-foreground text-[clamp(1.5rem,3vw,2.25rem)]">
                Wat wij voor u doen
              </h2>
              <div className="flex flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <a
                href={whatsappUrl(
                  `Hallo Martin, ik zou graag een offerte aanvragen voor ${service.title.toLowerCase()}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-forest px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
              >
                <WhatsAppIcon className="size-5" />
                Vraag {service.title.toLowerCase()} aan
              </a>
            </div>

            <div className="min-w-0 lg:pt-1">
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
                Wat wij bieden
              </h2>
              <ul className="flex flex-col gap-4">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-forest" />
                    <span className="min-w-0 leading-relaxed text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Andere diensten */}
        <section className="border-t border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h2 className="mb-10 font-black uppercase tracking-tighter text-foreground text-[clamp(1.5rem,3vw,2.25rem)]">
              Andere diensten
            </h2>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
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
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
            <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(1.75rem,4.5vw,3.5rem)]">
              Klaar om te beginnen?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-white/70">
              Vertel Martin over uw project. U krijgt snel en eerlijk antwoord,
              met een vrijblijvende offerte.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl(
                  `Hallo Martin, ik zou graag een offerte aanvragen voor ${service.title.toLowerCase()}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
              >
                <WhatsAppIcon className="size-5" />
                Offerte aanvragen
              </a>
              <a
                href={withBasePath("/#diensten")}
                className="inline-flex items-center gap-3 border border-white/40 px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
              >
                <ArrowLeft className="size-5" />
                Alle diensten
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  )
}
