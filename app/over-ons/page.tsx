import { SiteHeader } from "@/components/slob/site-header"
import { TEAM, WHATSAPP_URL } from "@/components/slob/data"
import { WhatsAppIcon } from "@/components/slob/whatsapp-icon"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { withBasePath } from "@/lib/base-path"

export const metadata = {
  title: "Over Ons — Slob Tuinen | Leerdam",
  description:
    "Maak kennis met Martin Slob en het team van Slob Tuinen. Vakmanschap, eerlijkheid en jarenlange ervaring in grond, groen en straat.",
}

const [martin, ...crew] = TEAM

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero: Martin Slob prominent */}
      <section id="hoofdinhoud" tabIndex={-1} className="relative min-h-[70vh] bg-foreground">
        <img
          src={withBasePath("/images/martin-slob.webp")}
          alt="Martin Slob, eigenaar van Slob Tuinen"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
            Over ons
          </p>
          <h1 className="max-w-2xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-white text-[clamp(2.5rem,7vw,6rem)]">
            De man
            <br />
            achter
            <br />
            het werk
          </h1>
          <p className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-white/75">
            Slob Tuinen is Martin Slob: een toegewijde, betrouwbare vakman uit
            Leerdam. Met een nuchtere instelling en oog voor detail pakt hij
            elke klus aan alsof het zijn eigen tuin is — van het zware grondwerk
            tot de laatste straatsteen.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-forest px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
              {martin.name} &mdash; {martin.role}
            </span>
          </div>
        </div>
      </section>

      {/* Martin: extended bio */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4vw,3.5rem)]">
                Vakmanschap
                <br />
                zit in het bloed
              </h2>
              <div className="mt-8 flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Martin Slob heeft jarenlange ervaring in grondwerk,
                  tuinaanleg, beschoeiing en straatwerk. Hij begon jong in de
                  buitensector en heeft zijn vakkennis door de jaren heen
                  opgebouwd tot een breed en solide fundament.
                </p>
                <p>
                  Wat hem onderscheidt, is zijn persoonlijke betrokkenheid bij
                  elk project. Hij staat zelf op de klus, denkt mee met de
                  klant en levert op wat hij belooft — zonder gedoe.
                </p>
                <p>
                  Slob Tuinen werkt voor particulieren en zakelijke opdrachtgevers
                  in Leerdam en de Betuwe. Klein of groot, eenvoudig of complex
                  — het werk klopt altijd tot in de details.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 self-start rounded-none bg-forest px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
              >
                <WhatsAppIcon className="size-5" />
                Plan een kennismaking
              </a>
            </div>

            <dl className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-1">
              {[
                {
                  title: "Heldere communicatie",
                  text: "U weet altijd waar u aan toe bent. Korte lijnen, eerlijk advies en geen verrassingen.",
                },
                {
                  title: "Afspraak is afspraak",
                  text: "Wat we afspreken, komen we na — in planning, in prijs en in kwaliteit.",
                },
                {
                  title: "Vakkennis",
                  text: "Jarenlange ervaring in grondwerk, beschoeiing en tuinaanleg. Het werk klopt tot in detail.",
                },
                {
                  title: "Lokale betrokkenheid",
                  text: "Wij werken in Leerdam en omgeving. Kort op de bal, snel ter plaatse.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-background p-6 md:p-8">
                  <dt className="font-bold uppercase tracking-wide text-foreground">
                    {v.title}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">
                    {v.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Team */}
      {crew.length > 0 && (
        <section className="border-t border-border bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="mb-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
                Het team
              </p>
              <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4vw,3.5rem)]">
                Mensen die
                <br />
                het werk doen
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {crew.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden bg-background"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    {member.image ? (
                      <img
                        src={withBasePath(member.image)}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-foreground/5">
                        <span className="text-7xl font-black uppercase tracking-tighter text-foreground/20">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-border p-6">
                    <p className="font-black uppercase tracking-tight text-foreground">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-foreground py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
          <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2rem,5vw,4.5rem)]">
            Klaar om te beginnen?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-white/70">
            Neem contact op met Martin. Hij denkt graag mee over uw project en
            geeft snel een eerlijk antwoord.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp Martin
            </a>
            <a
              href={withBasePath("/#contact")}
              className="inline-flex items-center gap-3 border border-white/40 px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
            >
              Bekijk contactpagina
            </a>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
