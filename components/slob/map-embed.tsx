"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Recht%20van%20Ter%20Leede%2C%204143%20LP%20Leerdam&t=&z=15&ie=UTF8&iwloc=&output=embed"
const MAPS_ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Recht+van+Ter+Leede,+4143+LP+Leerdam"

/**
 * Click-to-load Google Maps: de kaart (en de cookies van Google) worden pas
 * geladen nadat de bezoeker daar expliciet voor kiest. Sneller én AVG-proof.
 *
 * De keuze wordt onthouden: heeft de bezoeker de cookies geaccepteerd (of eerder
 * de kaart geladen), dan laadt de kaart voortaan automatisch. Zo hoeft niemand
 * telkens opnieuw op "Kaart laden" te klikken.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const check = () => {
      try {
        const cookie = localStorage.getItem("cookie_consent")
        const maps = localStorage.getItem("maps_consent")
        if (cookie === "accepted" || maps === "accepted") setLoaded(true)
      } catch {
        /* localStorage niet beschikbaar: kaart blijft achter de knop */
      }
    }
    check()
    // Zodra de bezoeker de cookies accepteert, meteen de kaart tonen.
    window.addEventListener("slob-cookie-accepted", check)
    return () => window.removeEventListener("slob-cookie-accepted", check)
  }, [])

  const load = () => {
    try {
      localStorage.setItem("maps_consent", "accepted")
    } catch {
      /* negeer */
    }
    setLoaded(true)
  }

  if (loaded) {
    return (
      <iframe
        title="Locatie Slob Tuinen in Leerdam"
        src={MAPS_EMBED_URL}
        className="size-full grayscale"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div className="flex size-full flex-col items-center justify-center gap-5 bg-white/5 p-8 text-center">
      <MapPin className="size-10 text-forest" aria-hidden="true" />
      <div>
        <p className="font-bold uppercase tracking-wide">Recht van Ter Leede</p>
        <p className="text-sm text-white/60">4143 LP Leerdam</p>
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-white/60">
        De interactieve kaart wordt geladen via Google Maps. Daarbij kan Google
        cookies plaatsen.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={load}
          className="bg-forest px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
        >
          Kaart laden
        </button>
        <a
          href={MAPS_ROUTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
        >
          Route plannen
        </a>
      </div>
    </div>
  )
}
