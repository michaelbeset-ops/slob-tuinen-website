"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { withBasePath } from "@/lib/base-path"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a href="#top" className="shrink-0" aria-label="Slob Tuinen — home">
          <img
            src={withBasePath("/logo.png")}
            alt="Slob Tuinen logo"
            className="h-12 w-52 object-contain object-left md:h-14 md:w-60"
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.isPage ? withBasePath(link.href) : link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
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
            className="flex size-11 items-center justify-center rounded-none border border-white/40 text-white lg:hidden"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/15 bg-foreground/95 backdrop-blur lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.isPage ? withBasePath(link.href) : link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-base font-semibold uppercase tracking-wide text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-none bg-forest px-5 py-4 text-sm font-bold uppercase tracking-wide text-white"
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
