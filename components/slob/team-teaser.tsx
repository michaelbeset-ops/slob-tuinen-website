import { withBasePath } from "@/lib/base-path"
import { ArrowRight } from "lucide-react"

export function TeamTeaser() {
  return (
    <section className="bg-foreground py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Het team
            </p>
            <h2 className="max-w-xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2rem,4.5vw,3.75rem)]">
              Mensen die
              <br />
              het werk doen
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-white/65">
              Achter elk project staat een vast clubje mensen dat weet wat het
              doet. Ze zijn strak in hun werk, gaan netjes met uw tuin om en
              zijn pas tevreden als u dat ook bent.
            </p>
          </div>
          <a
            href={withBasePath("/over-ons")}
            className="group inline-flex shrink-0 items-center gap-4 border border-white/30 px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-forest hover:bg-forest"
          >
            Ontmoet het team
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
