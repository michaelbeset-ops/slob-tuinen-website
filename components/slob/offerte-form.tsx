"use client"

import { useEffect, useState } from "react"
import { Check, Send } from "lucide-react"
import { EMAIL, SERVICES, whatsappUrl } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"

const DIENSTEN = [...SERVICES.map((s) => s.title), "Anders"]

/**
 * Offerteformulier. De site is een statische export zonder backend, dus de
 * aanvraag wordt verstuurd via de mailclient van de bezoeker (of via WhatsApp).
 * De gekozen dienst kan vooraf ingevuld worden via ?dienst=<id> in de URL.
 */
export function OfferteForm() {
  const [dienst, setDienst] = useState("")
  const [andersDienst, setAndersDienst] = useState("")
  const [naam, setNaam] = useState("")
  const [email, setEmail] = useState("")
  const [telefoon, setTelefoon] = useState("")
  const [plaats, setPlaats] = useState("")
  const [bericht, setBericht] = useState("")
  const [verstuurd, setVerstuurd] = useState(false)

  // Dienst vooraf selecteren via ?dienst=<id of titel> in de URL.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("dienst")
    if (!q) return
    const match = SERVICES.find(
      (s) => s.id === q.toLowerCase() || s.title.toLowerCase() === q.toLowerCase(),
    )
    if (match) setDienst(match.title)
  }, [])

  const gekozenDienst = dienst === "Anders" ? andersDienst.trim() : dienst

  const buildBody = () =>
    `Dienst: ${gekozenDienst || "-"}\n` +
    `Naam: ${naam}\n` +
    `E-mailadres: ${email}\n` +
    `Telefoon: ${telefoon || "-"}\n` +
    `Plaats: ${plaats || "-"}\n\n` +
    `Omschrijving:\n${bericht}`

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Offerteaanvraag${gekozenDienst ? ` – ${gekozenDienst}` : ""}${
      naam ? ` (${naam})` : ""
    }`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(buildBody())}`
    setVerstuurd(true)
  }

  const naarWhatsapp = () => {
    const msg =
      `Hallo Martin, ik wil graag een offerte aanvragen.\n\n` + buildBody()
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer")
  }

  const field =
    "w-full rounded-none border border-border bg-card px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-forest"
  const label =
    "mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      {/* Dienstkeuze */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest">
          1. Om welke dienst gaat het?
        </legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DIENSTEN.map((d) => {
            const active = dienst === d
            return (
              <button
                type="button"
                key={d}
                onClick={() => setDienst(d)}
                aria-pressed={active}
                className={`flex items-center justify-between gap-2 border p-4 text-left text-sm font-bold uppercase tracking-wide transition-colors ${
                  active
                    ? "border-forest bg-forest text-white"
                    : "border-border bg-card text-foreground hover:border-forest hover:text-forest"
                }`}
              >
                {d}
                {active && <Check className="size-4 shrink-0" />}
              </button>
            )
          })}
        </div>

        {dienst === "Anders" && (
          <div className="mt-4">
            <label htmlFor="anders" className={label}>
              Welke dienst / werkzaamheden?
            </label>
            <input
              id="anders"
              type="text"
              required
              value={andersDienst}
              onChange={(e) => setAndersDienst(e.target.value)}
              placeholder="Bijv. sloopwerk, kraanverhuur, drainage…"
              className={field}
            />
          </div>
        )}
      </fieldset>

      {/* Gegevens */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest">
          2. Uw gegevens
        </legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="naam" className={label}>
              Naam *
            </label>
            <input
              id="naam"
              type="text"
              required
              autoComplete="name"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              placeholder="Uw naam"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              E-mailadres *
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="naam@voorbeeld.nl"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="telefoon" className={label}>
              Telefoon
            </label>
            <input
              id="telefoon"
              type="tel"
              autoComplete="tel"
              value={telefoon}
              onChange={(e) => setTelefoon(e.target.value)}
              placeholder="06 12345678"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="plaats" className={label}>
              Plaats
            </label>
            <input
              id="plaats"
              type="text"
              autoComplete="address-level2"
              value={plaats}
              onChange={(e) => setPlaats(e.target.value)}
              placeholder="Bijv. Leerdam"
              className={field}
            />
          </div>
        </div>
      </fieldset>

      {/* Omschrijving */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest">
          3. Vertel over uw project
        </legend>
        <label htmlFor="bericht" className={label}>
          Omschrijving *
        </label>
        <textarea
          id="bericht"
          required
          rows={5}
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          placeholder="Wat wilt u laten doen? Denk aan afmetingen, wensen en eventueel een gewenste periode."
          className={`${field} resize-y`}
        />
      </fieldset>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 rounded-none bg-forest px-8 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
        >
          <Send className="size-5" />
          Verstuur aanvraag
        </button>
        <button
          type="button"
          onClick={naarWhatsapp}
          className="inline-flex items-center justify-center gap-3 rounded-none border border-border px-8 py-5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-forest hover:bg-forest hover:text-white"
        >
          <WhatsAppIcon className="size-5" />
          Of stuur via WhatsApp
        </button>
      </div>

      {verstuurd && (
        <p className="text-sm leading-relaxed text-muted-foreground" role="status">
          Uw mailprogramma is geopend met de aanvraag. Niet gelukt? Mail dan
          rechtstreeks naar{" "}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-forest underline">
            {EMAIL}
          </a>{" "}
          of gebruik de WhatsApp-knop.
        </p>
      )}

      <p className="text-xs leading-relaxed text-muted-foreground">
        * Verplichte velden. Uw aanvraag is vrijblijvend. We nemen zo snel
        mogelijk contact met u op voor een offerte.
      </p>
    </form>
  )
}
