"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Send } from "lucide-react"
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

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
              Een idee, een vraag of een offerte? Stuur een bericht of bel
              Martin direct. U krijgt snel en eerlijk antwoord.
            </p>

            <div className="mt-12 flex flex-col gap-px border border-white/15 bg-white/15">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-4 bg-foreground p-6 transition-colors hover:bg-forest"
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

            {/* Map frame */}
            <div className="mt-6 aspect-[16/9] w-full border border-white/15">
              <iframe
                title="Locatie Slob Tuinen — Leerdam"
                src="https://www.google.com/maps?q=Recht%20van%20Ter%20Leede%2C%204143%20LP%20Leerdam&output=embed"
                className="size-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:pl-8">
            {sent ? (
              <div className="flex h-full min-h-[300px] flex-col items-start justify-center border border-white/15 p-10">
                <h3 className="font-black uppercase tracking-tighter text-[clamp(1.5rem,3vw,2.5rem)]">
                  Bedankt!
                </h3>
                <p className="mt-4 max-w-sm leading-relaxed text-white/70">
                  Uw bericht is genoteerd. Martin neemt zo snel mogelijk contact
                  met u op. Liever direct? Bel {PHONE}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <Field id="name" label="Naam" type="text" placeholder="Uw naam" />
                <Field id="email" label="E-mail" type="email" placeholder="naam@voorbeeld.nl" />
                <Field id="phone" label="Telefoon" type="tel" placeholder={PHONE} />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-white/50"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Vertel kort over uw project..."
                    className="resize-none border-b border-white/30 bg-transparent pb-3 text-lg text-white placeholder:text-white/30 focus:border-forest focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 self-start rounded-none bg-forest px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
                >
                  <Send className="size-5" />
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-12">
          <span className="text-lg font-black uppercase tracking-tight">
            Slob Tuinen
          </span>
          <span className="text-sm text-white/50">
            &copy; 2026 Slob Tuinen. Grond, Groen &amp; Straat.
          </span>
        </div>
      </footer>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wide text-white/50"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="border-b border-white/30 bg-transparent pb-3 text-lg text-white placeholder:text-white/30 focus:border-forest focus:outline-none"
      />
    </div>
  )
}
