import { PROJECTS } from "./data"

export function Projects() {
  return (
    <section id="projecten" className="bg-foreground py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Projecten
            </p>
            <h2 className="max-w-3xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.25rem,6vw,5rem)]">
              Werk dat blijft
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-white/60">
            Een greep uit gerealiseerde projecten in Leerdam en de wijde
            omgeving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          {PROJECTS.map((project, i) => {
            const layout = projectLayout(i)
            return (
              <figure
                key={project.title}
                className={`group ${layout.col} ${layout.offset}`}
              >
                <div className={`relative overflow-hidden ${layout.ratio}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} — ${project.location}`}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

function projectLayout(index: number) {
  // Asymmetrical editorial grid across a 12-column layout
  switch (index % 4) {
    case 0:
      return { col: "md:col-span-7", offset: "", ratio: "aspect-[4/5]" }
    case 1:
      return { col: "md:col-span-5", offset: "md:mt-28", ratio: "aspect-[3/4]" }
    case 2:
      return { col: "md:col-span-5", offset: "", ratio: "aspect-[4/5]" }
    default:
      return { col: "md:col-span-7", offset: "md:mt-12", ratio: "aspect-[3/4]" }
  }
}
