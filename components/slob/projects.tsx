"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { PROJECTS } from "./data"
import { withBasePath } from "@/lib/base-path"

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(i, PROJECTS.length - 1))
    const card = track.children[clamped] as HTMLElement | undefined
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" })
      setActive(clamped)
    }
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const children = Array.from(track.children) as HTMLElement[]
    const center = track.scrollLeft
    let nearest = 0
    let min = Infinity
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - center)
      if (dist < min) {
        min = dist
        nearest = i
      }
    })
    setActive(nearest)
  }

  return (
    <section id="projecten" className="bg-foreground py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Projecten
            </p>
            <h2 className="max-w-3xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.25rem,6vw,5rem)]">
              Werk dat blijft
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToIndex(active - 1)}
              disabled={active === 0}
              className="flex size-12 items-center justify-center border border-white/30 text-white transition-colors hover:border-forest hover:bg-forest disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/30 disabled:hover:bg-transparent"
              aria-label="Vorig project"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(active + 1)}
              disabled={active === PROJECTS.length - 1}
              className="flex size-12 items-center justify-center border border-white/30 text-white transition-colors hover:border-forest hover:bg-forest disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/30 disabled:hover:bg-transparent"
              aria-label="Volgend project"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] md:gap-8 md:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project) => (
          <figure
            key={project.title}
            className="group w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[42%]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={withBasePath(project.image || "/placeholder.svg")}
                alt={`${project.title} — ${project.location}`}
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
              <span className="font-black uppercase tracking-tighter text-[clamp(1.25rem,2.2vw,1.875rem)]">
                {project.title}
              </span>
              <span className="shrink-0 text-sm font-medium uppercase tracking-wide text-forest">
                {project.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1600px] items-center gap-2 px-6 md:px-12">
        {PROJECTS.map((project, i) => (
          <button
            key={project.title}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Ga naar project ${i + 1}`}
            className={`h-1 rounded-none transition-all duration-300 ${
              i === active ? "w-10 bg-forest" : "w-5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
