"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { withBasePath } from "@/lib/base-path"

const PAGE_NAV = [
  { label: "Diensten", href: withBasePath("/#diensten") },
  { label: "Projecten", href: withBasePath("/#projecten") },
  { label: "Over Ons", href: withBasePath("/over-ons") },
  { label: "Reviews", href: withBasePath("/#reviews") },
  { label: "Contact", href: withBasePath("/#contact") },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a
          href={withBasePath("/")}
          className="text-lg font-black uppercase tracking-tight text-foreground md:text-xl"
        >
          Slob Tuinen
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {PAGE_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-none bg-forest px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark sm:flex"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-none border border-border text-foreground lg:hidden"
            aria-label={open ? "Sluit menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {PAGE_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-semibold uppercase tracking-wide text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-forest px-5 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp Martin
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
