import { WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"

const VALUES = [
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
]

export function About() {
  return (
    <section id="over-ons" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[760px]">
          <img
            src="/images/martin-slob.png"
            alt="Martin Slob, eigenaar van Slob Tuinen, aan het werk"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-forest px-6 py-4">
            <span className="font-black uppercase tracking-tight text-white">
              Martin Slob
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
            Over ons
          </p>
          <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2.25rem,5vw,4.5rem)]">
            De man achter
            <br />
            het werk
          </h2>
          <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            Slob Tuinen is Martin Slob: een toegewijde, betrouwbare vakman uit
            Leerdam. Met een nuchtere instelling en oog voor detail pakt hij
            elke klus aan alsof het zijn eigen tuin is — van het zware grondwerk
            tot de laatste straatsteen.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-1">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-background p-6">
                <dt className="font-bold uppercase tracking-wide text-foreground">
                  {value.title}
                </dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {value.text}
                </dd>
              </div>
            ))}
          </dl>

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
      </div>
    </section>
  )
}
