import { MapPin, Phone } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { withBasePath } from "@/lib/base-path"

const SERVICES = [
  "Tuinaanleg",
  "Grondverzet",
  "Beschoeiingswerk",
  "Groenvoorziening",
  "Grondwerk",
  "Straatwerk",
]

const LEGAL = [
  { label: "Privacybeleid", href: "/privacybeleid" },
  { label: "Cookiebeleid", href: "/cookiebeleid" },
]

export function Contact() {
  return (
    <section id="contact" className="bg-foreground text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: heading + details */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Contact
            </p>
            <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-[clamp(2.5rem,6vw,5.5rem)]">
              Laten we
              <br />
              beginnen
            </h2>
            <p className="mt-8 max-w-md text-pretty leading-relaxed text-white/70">
              Een idee, een vraag of een offerte? Stuur een bericht via WhatsApp
              of bel Martin direct. U krijgt snel en eerlijk antwoord.
            </p>

            <div className="mt-12 flex flex-col gap-px border border-white/15 bg-white/15">
              <a
                href={PHONE_TEL}
                className="group flex items-center gap-4 bg-foreground p-6 transition-colors hover:bg-forest"
              >
                <Phone className="size-6 shrink-0 text-forest transition-colors group-hover:text-white" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/50">
                    Telefoon
                  </span>
                  <span className="text-lg font-semibold">{PHONE}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 bg-foreground p-6">
                <MapPin className="size-6 shrink-0 text-forest" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/50">
                    Adres
                  </span>
                  <span className="text-lg font-semibold">
                    Recht van Ter Leede, 4143 LP Leerdam
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-none bg-forest px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-none border border-white/40 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
              >
                <Phone className="size-5" />
                Bel direct
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="lg:pl-8">
            <div className="aspect-square w-full border border-white/15 lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <iframe
                title="Locatie Slob Tuinen — Leerdam"
                src="https://www.google.com/maps?q=Recht%20van%20Ter%20Leede%2C%204143%20LP%20Leerdam&output=embed"
                className="size-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/15">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <img
                src={withBasePath("/logo.png")}
                alt="Slob Tuinen logo"
                className="h-14 w-52 object-contain object-left"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Vakmanschap van de hoogste plank. Grond, groen &amp; straat in
                Leerdam en omgeving.
              </p>
              <a
                href="https://www.instagram.com/slob_tuinen/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <InstagramIcon className="size-4" />
                @slob_tuinen
              </a>
            </div>

            {/* Diensten */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Diensten
              </h3>
              <ul className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <a
                      href="#diensten"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Contact
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-white/60">
                <li>
                  <a
                    href={PHONE_TEL}
                    className="transition-colors hover:text-white"
                  >
                    {PHONE}
                  </a>
                </li>
                <li>Recht van Ter Leede</li>
                <li>4143 LP Leerdam</li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/slob_tuinen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Juridisch
              </h3>
              <ul className="flex flex-col gap-2">
                {LEGAL.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href === "#" ? "#" : withBasePath(l.href)}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-12">
            <span className="text-sm text-white/50">
              &copy; 2026 Slob Tuinen. Grond, Groen &amp; Straat.
            </span>
            <span className="text-sm text-white/50">
              KvK 97104078
            </span>
          </div>
        </div>
      </footer>
    </section>
  )
}
