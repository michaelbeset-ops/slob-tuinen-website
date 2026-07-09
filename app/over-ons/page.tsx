import { SiteHeader } from "@/components/slob/site-header"
import { TEAM, whatsappUrl } from "@/components/slob/data"
import { WhatsAppIcon } from "@/components/slob/whatsapp-icon"
import { WhatsAppFloat } from "@/components/slob/whatsapp-float"
import { withBasePath } from "@/lib/base-path"

export const metadata = {
  title: "Over Ons | Slob Tuinen, Leerdam",
  description:
    "Maak kennis met Martin Slob en het team van Slob Tuinen. Vakmanschap, eerlijkheid en jarenlange ervaring in grond, groen en straat.",
}

const [martin, ...crew] = TEAM

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero: Martin Slob prominent, foto duidelijk in beeld */}
      <section id="hoofdinhoud" tabIndex={-1} className="bg-foreground">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch lg:grid-cols-2">
          {/* Tekst */}
          <div className="order-2 flex flex-col justify-center px-6 py-14 md:px-12 md:py-20 lg:order-1 lg:py-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Over ons
            </p>
            <h1 className="max-w-2xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-white text-[clamp(2.5rem,6vw,5rem)]">
              De man
              <br />
              achter
              <br />
              het werk
            </h1>
            <p className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-white/75">
              Slob Tuinen, dat is Martin Slob. Een echte Leerdammer die zijn
              vak verstaat en doet wat hij belooft. Hij staat zelf op de klus en
              pakt elk werk aan alsof het zijn eigen tuin is, of het nu gaat om
              zwaar grondwerk of de laatste straatsteen.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-forest px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                {martin.name}, {martin.role}
              </span>
            </div>
          </div>

          {/* Foto: volledig zichtbaar */}
          <div className="relative order-1 min-h-[440px] overflow-hidden bg-foreground sm:min-h-[560px] lg:order-2 lg:min-h-[720px]">
            <img
              src={withBasePath(martin.image ?? "/images/martin-slob.webp")}
              alt="Martin Slob, eigenaar van Slob Tuinen"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-cover object-[center_20%]"
            />
          </div>
        </div>
      </section>

      {/* Martin: extended bio */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4vw,3.5rem)]">
                Even
                <br />
                voorstellen
              </h2>
              <div className="mt-8 flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
                {(martin.bio ?? []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <a
                href={whatsappUrl("Hallo Martin, ik zou graag een kennismaking inplannen.")}
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
                  text: "Wat we afspreken, dat doen we ook. In de planning, in de prijs en in de kwaliteit.",
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
                  <dt className="text-sm font-bold uppercase tracking-wide text-foreground md:text-base">
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
                De jongens
                <br />
                van Slob
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
                    <p className="mt-1 text-sm font-semibold text-forest">
                      {member.role}
                    </p>
                    {member.bio && member.bio.length > 0 && (
                      <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                        {member.bio.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}
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
              href={whatsappUrl("Hallo Martin, ik heb een vraag over mijn project.")}
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
