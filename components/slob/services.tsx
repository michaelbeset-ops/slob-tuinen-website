"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { SERVICES, type Service } from "./data"
import { withBasePath } from "@/lib/base-path"

function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={withBasePath(`/diensten/${service.id}`)}
      className="group relative block aspect-[4/3] w-full overflow-hidden bg-foreground text-left"
      aria-label={`Meer over ${service.title}`}
    >
      <img
        src={withBasePath(service.image || "/placeholder.svg")}
        alt={`${service.title} door Slob Tuinen`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Uniforme donkere overlay: zelfde dekking op elke kaart */}
      <div className="absolute inset-0 bg-foreground/45 transition-colors duration-500 group-hover:bg-foreground/30" />
      {/* Verloop onderaan voor leesbaarheid van de titel */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
      <div className="relative flex size-full flex-col justify-between p-6">
        <span className="flex size-11 items-center justify-center self-end rounded-none border border-white/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
        <div>
          <h3 className="font-extrabold uppercase leading-none tracking-tight text-white text-[clamp(1.5rem,3vw,2.25rem)]">
            {service.title}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-white/70">{service.intro}</p>
        </div>
      </div>
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-forest transition-all duration-500 group-hover:w-full" />
    </a>
  )
}

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(i, SERVICES.length - 1))
    const card = track.children[clamped] as HTMLElement | undefined
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" })
      setCurrent(clamped)
    }
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    let nearest = 0
    let min = Infinity
    Array.from(track.children as HTMLCollectionOf<HTMLElement>).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - track.scrollLeft)
      if (dist < min) { min = dist; nearest = i }
    })
    setCurrent(nearest)
  }

  return (
    <section id="diensten" className="bg-background py-14 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-6 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Onze diensten
            </p>
            <h2 className="max-w-2xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,6vw,5rem)]">
              Alles voor buiten
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Zes specialismen, één aanspreekpunt. Klik op een dienst voor meer info.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal swipe carousel */}
      <div className="md:hidden">
        {/* Swipe hint */}
        <div className="mb-3 flex items-center gap-2 px-6 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <ArrowLeft className="size-3.5" />
          <span>Swipe voor meer diensten</span>
          <ArrowRight className="size-3.5" />
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-1 scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((service) => (
            <div key={service.id} className="w-[85%] shrink-0 snap-start">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex justify-center gap-2 px-6">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`relative h-1.5 rounded-full transition-all duration-300 before:absolute before:left-1/2 before:top-1/2 before:size-11 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] ${
                i === current ? "w-8 bg-forest" : "w-1.5 bg-border"
              }`}
              aria-label={`Dienst ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="mx-auto hidden max-w-[1600px] px-6 md:block md:px-12">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
