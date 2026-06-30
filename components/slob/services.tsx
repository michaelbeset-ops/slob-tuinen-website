"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { SERVICES, type Service, WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { withBasePath } from "@/lib/base-path"

export function Services() {
  const [active, setActive] = useState<Service | null>(null)

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <section id="diensten" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Onze diensten
            </p>
            <h2 className="max-w-2xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.25rem,6vw,5rem)]">
              Alles voor buiten
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Zes specialismen, één aanspreekpunt. Klik op een dienst voor een
            heldere uitleg.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActive(service)}
              className="group relative aspect-[4/3] overflow-hidden bg-foreground text-left"
            >
              <img
                src={withBasePath(service.image || "/placeholder.svg")}
                alt={service.title}
                className="absolute inset-0 size-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="relative flex size-full flex-col justify-between p-6">
                <span className="flex size-11 items-center justify-center self-end rounded-none border border-white/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
                <div>
                  <h3 className="font-black uppercase leading-none tracking-tighter text-white text-[clamp(1.5rem,3vw,2.25rem)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-white/70">
                    {service.intro}
                  </p>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-forest transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>

      {/* Side drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!active}
      >
        <div
          className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
          onClick={() => setActive(null)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-background shadow-2xl transition-transform duration-500 ${
            active ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={active?.title}
        >
          {active && (
            <>
              <div className="relative h-56 shrink-0 overflow-hidden md:h-72">
                <img
                  src={withBasePath(active.image || "/placeholder.svg")}
                  alt={active.title}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-none bg-background/90 text-foreground transition-colors hover:bg-forest hover:text-white"
                  aria-label="Sluiten"
                >
                  <X className="size-5" />
                </button>
                <h3 className="absolute bottom-6 left-6 font-black uppercase leading-none tracking-tighter text-white text-[clamp(2rem,5vw,3rem)]">
                  {active.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto p-8 md:p-10">
                <p className="text-lg font-semibold leading-snug text-foreground">
                  {active.intro}
                </p>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  {active.body}
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-3 rounded-none bg-forest px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
                >
                  <WhatsAppIcon className="size-5" />
                  Vraag {active.title.toLowerCase()} aan
                </a>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}
