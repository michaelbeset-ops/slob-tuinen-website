import { withBasePath } from "@/lib/base-path"
import { ArrowRight } from "lucide-react"
import { TEAM_PHOTO } from "./data"

export function TeamTeaser() {
  return (
    <section className="bg-foreground py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Groepsfoto */}
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/2]">
            <img
              src={withBasePath(TEAM_PHOTO)}
              alt="Het team van Slob Tuinen bij de bedrijfsbus en kraan"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          {/* Tekst naast de foto, knop eronder */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Het team
            </p>
            <h2 className="max-w-xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2rem,4.5vw,3.75rem)]">
              De jongens
              <br />
              van Slob
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-white/65">
              Achter elk project staat een vast team dat van aanpakken weet.
              Geen loze beloftes, maar vakwerk en korte lijnen. We werken netjes,
              overleggen waar nodig en zijn pas tevreden als de oprit of tuin er
              strak bij ligt.
            </p>
            <a
              href={withBasePath("/over-ons")}
              className="group mt-8 inline-flex items-center gap-4 border border-white/30 px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-forest hover:bg-forest"
            >
              Ontmoet het team
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
