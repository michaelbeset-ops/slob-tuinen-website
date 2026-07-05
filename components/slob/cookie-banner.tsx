"use client"

import { useEffect, useState } from "react"
import { withBasePath } from "@/lib/base-path"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background shadow-2xl">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Wij gebruiken één functionele cookie om uw voorkeur te onthouden.
          Google Maps wordt alleen geladen als u daar zelf voor kiest. Lees ons{" "}
          <a
            href={withBasePath("/cookiebeleid")}
            className="underline underline-offset-2 hover:text-foreground"
          >
            cookiebeleid
          </a>{" "}
          en{" "}
          <a
            href={withBasePath("/privacybeleid")}
            className="underline underline-offset-2 hover:text-foreground"
          >
            privacybeleid
          </a>{" "}
          voor meer informatie.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-none border border-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Weigeren
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-none bg-forest px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
