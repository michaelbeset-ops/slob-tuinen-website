import { SiteHeader } from "@/components/slob/site-header"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { OfferteForm } from "@/components/slob/offerte-form"
import { EMAIL, EMAIL_MAILTO, PHONE, PHONE_TEL } from "@/components/slob/data"
import { Mail, Phone } from "lucide-react"

export const metadata = {
  title: "Offerte aanvragen | Slob Tuinen, Leerdam",
  description:
    "Vraag vrijblijvend een offerte aan bij Slob Tuinen. Vul uw gegevens en gewenste dienst in, dan nemen we snel contact met u op.",
}

export default function OffertePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="hoofdinhoud" tabIndex={-1}>
        {/* Kop */}
        <section className="border-b border-border bg-foreground text-white">
          <div className="mx-auto max-w-[1600px] px-6 pb-14 pt-28 md:px-12 md:pb-20 md:pt-36">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Offerte aanvragen
            </p>
            <h1 className="max-w-3xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.5rem,6vw,5rem)]">
              Vraag vrijblijvend
              <br />
              een offerte aan
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
              Vertel ons kort over uw project. Martin denkt met u mee en u
              krijgt snel een eerlijk antwoord, zonder verplichtingen.
            </p>
          </div>
        </section>

        {/* Formulier + contact */}
        <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <OfferteForm />
            </div>

            {/* Zijbalk: liever direct contact */}
            <aside className="lg:pt-2">
              <div className="border border-border bg-card p-8">
                <h2 className="font-black uppercase tracking-tight text-foreground text-[clamp(1.25rem,2.5vw,1.75rem)]">
                  Liever direct contact?
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Bel of mail Martin gerust. Een korte vraag of meteen een
                  afspraak inplannen: het kan allemaal.
                </p>

                <div className="mt-8 flex flex-col gap-px border border-border bg-border">
                  <a
                    href={PHONE_TEL}
                    className="group flex items-center gap-4 bg-card p-5 transition-colors hover:bg-forest hover:text-white"
                  >
                    <Phone className="size-6 shrink-0 text-forest transition-colors group-hover:text-white" />
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground group-hover:text-white/70">
                        Telefoon
                      </span>
                      <span className="text-lg font-semibold text-foreground group-hover:text-white">
                        {PHONE}
                      </span>
                    </span>
                  </a>
                  <a
                    href={EMAIL_MAILTO}
                    className="group flex items-center gap-4 bg-card p-5 transition-colors hover:bg-forest hover:text-white"
                  >
                    <Mail className="size-6 shrink-0 text-forest transition-colors group-hover:text-white" />
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground group-hover:text-white/70">
                        E-mail
                      </span>
                      <span className="break-all text-lg font-semibold text-foreground group-hover:text-white">
                        {EMAIL}
                      </span>
                    </span>
                  </a>
                </div>

                <ul className="mt-8 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Eén vast aanspreekpunt van begin tot eind</li>
                  <li>Snel en eerlijk antwoord op uw aanvraag</li>
                  <li>Vrijblijvend, zonder verrassingen achteraf</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  )
}
