"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { withBasePath } from "@/lib/base-path"

const PAGE_NAV = [
  { label: "Diensten", href: withBasePath("/#diensten"), match: null },
  { label: "Projecten", href: withBasePath("/#projecten"), match: null },
  { label: "Over Ons", href: withBasePath("/over-ons"), match: "/over-ons" },
  { label: "Reviews", href: withBasePath("/#reviews"), match: null },
  { label: "Contact", href: withBasePath("/#contact"), match: null },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (match: string | null) => !!match && pathname === match

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-foreground">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href={withBasePath("/")} className="shrink-0" aria-label="Slob Tuinen, naar home">
          <img
            src={withBasePath("/logo.png")}
            alt="Slob Tuinen logo"
            className="h-10 w-48 object-contain object-left md:h-12 md:w-56"
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {PAGE_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.match) ? "page" : undefined}
              className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-white ${
                isActive(link.match) ? "text-forest" : "text-white/80"
              }`}
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
            className="flex items-center gap-2 rounded-none bg-forest px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark sm:px-5 sm:py-3"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-none border border-white/40 text-white lg:hidden"
            aria-label={open ? "Sluit menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-foreground lg:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <img
              src={withBasePath("/logo.png")}
              alt="Slob Tuinen logo"
              className="h-11 w-52 object-contain object-left"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Sluit menu"
              className="flex size-11 items-center justify-center border border-white/40 text-white"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col px-6 pt-2">
            {PAGE_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.match) ? "page" : undefined}
                className={`border-b border-white/10 py-5 text-lg font-semibold uppercase tracking-wide ${
                  isActive(link.match) ? "text-forest" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 bg-forest px-5 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp Martin
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
