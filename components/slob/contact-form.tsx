"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { EMAIL } from "./data"

/**
 * Minimaal inline contactformulier. De site is een statische export zonder
 * backend, dus het formulier opent de mailclient van de bezoeker met een
 * vooringevuld bericht aan Slob Tuinen.
 */
export function ContactForm() {
  const [naam, setNaam] = useState("")
  const [email, setEmail] = useState("")
  const [bericht, setBericht] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Aanvraag via de website${naam ? ` – ${naam}` : ""}`
    const body =
      `Naam: ${naam}\n` +
      `E-mailadres: ${email}\n\n` +
      `${bericht}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const fieldClass =
    "w-full rounded-none border border-white/20 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-colors focus:border-forest focus:bg-white/10"

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="contact-naam" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
          Naam
        </label>
        <input
          id="contact-naam"
          name="naam"
          type="text"
          required
          autoComplete="name"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          placeholder="Uw naam"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
          E-mailadres
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="naam@voorbeeld.nl"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-bericht" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
          Bericht
        </label>
        <textarea
          id="contact-bericht"
          name="bericht"
          required
          rows={4}
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          placeholder="Wat kunnen we voor u doen?"
          className={`${fieldClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-3 rounded-none bg-forest px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
      >
        <Send className="size-4" />
        Verstuur bericht
      </button>
    </form>
  )
}
