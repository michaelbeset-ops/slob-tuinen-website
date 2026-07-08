import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppIcon } from "@/components/slob/whatsapp-icon"
import { WHATSAPP_URL } from "@/components/slob/data"
import { withBasePath } from "@/lib/base-path"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main
        id="hoofdinhoud"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 py-20 md:px-12"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
          Pagina niet gevonden (404)
        </p>
        <h1 className="max-w-3xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.5rem,7vw,6rem)]">
          Hier is nog
          <br />
          niets aangelegd
        </h1>
        <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          De pagina die u zoekt bestaat niet (meer). Geen zorgen, via de
          knoppen hieronder bent u zo weer op de juiste plek.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={withBasePath("/")}
            className="inline-flex items-center justify-center gap-3 bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
          >
            <ArrowLeft className="size-5" />
            Naar de homepage
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-forest hover:bg-forest hover:text-white"
          >
            <WhatsAppIcon className="size-5" />
            Stel uw vraag via WhatsApp
          </a>
        </div>
      </main>
    </div>
  )
}
