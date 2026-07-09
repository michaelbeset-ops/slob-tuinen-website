import { ArrowDown, Check } from "lucide-react"
import { Navbar } from "./navbar"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WHATSAPP_URL } from "./data"
import { withBasePath } from "@/lib/base-path"

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={withBasePath("/images/hero-voortuin-avond.webp")}
        alt="Sfeervol aangelegde voortuin met bestrating en verlichting door Slob Tuinen"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/70" />

      <Navbar />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 md:px-12">
        <p className="mb-6 hidden max-w-md text-sm font-semibold uppercase tracking-[0.25em] text-forest md:block">
          Leerdam &amp; omgeving
        </p>
        <h1 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-white text-[clamp(2rem,6vw,5rem)]">
          Slob.
          <br />
          <span className="text-forest">Grond,</span> Groen
          <br />
          &amp; Straat.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:mt-8 md:text-lg">
          Uw tuin, oprit of terrein in vertrouwde handen. Duidelijke afspraken,
          strak werk en één aanspreekpunt van begin tot eind.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-none bg-forest px-5 py-3 text-[0.8125rem] font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark md:gap-3 md:px-8 md:py-5 md:text-base"
          >
            <WhatsAppIcon className="size-4 shrink-0 md:size-5" />
            Direct contact via WhatsApp
          </a>
          <a
            href={withBasePath("/offerte")}
            className="inline-flex items-center justify-center gap-2 rounded-none border border-white/40 px-5 py-3 text-[0.8125rem] font-semibold uppercase tracking-wide text-white/85 transition-colors hover:border-white hover:text-white md:px-8 md:py-5 md:text-sm"
          >
            Offerte aanvragen
          </a>
        </div>

        {/* Vertrouwenspunten */}
        <ul className="mt-6 flex flex-col gap-x-8 gap-y-2.5 text-[0.8125rem] text-white/85 sm:flex-row sm:flex-wrap sm:items-center md:mt-8 md:text-sm">
          {[
            "Vakwerk in grond, groen én straat",
            "Jarenlange ervaring in zwaar grond- en straatwerk",
            "Alles in eigen beheer, van start tot oplevering",
          ].map((usp) => (
            <li key={usp} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-forest" strokeWidth={3} />
              <span>{usp}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#diensten"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white md:flex"
      >
        <ArrowDown className="size-4 animate-bounce" />
        Scroll
      </a>
    </section>
  )
}
