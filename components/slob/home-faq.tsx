import { Plus } from "lucide-react"
import { HOME_FAQ } from "./data"

export function HomeFaq() {
  return (
    <section id="veelgestelde-vragen" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
          Veelgestelde vragen
        </p>
        <h2 className="mb-10 font-black uppercase tracking-tighter text-foreground text-[clamp(1.75rem,4vw,3rem)]">
          Goed om te weten
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-px border border-border bg-border">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="group bg-background">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-bold text-foreground marker:content-none">
                <span>{item.q}</span>
                <span className="shrink-0 text-forest transition-transform group-open:rotate-45" aria-hidden="true">
                  <Plus className="size-5" />
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
