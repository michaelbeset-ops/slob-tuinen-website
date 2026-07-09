"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, WHATSAPP_URL } from "./data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { withBasePath } from "@/lib/base-path"

/**
 * Homepage-only header that stays hidden over the hero and slides in once the
 * visitor scrolls past it, so navigation is always within reach.
 */
export function StickyNav() {
  const [shown, setShown] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.85
      setShown(past)
      if (!past) setOpen(false)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-foreground/95 backdrop-blur transition-transform duration-300 ${
        shown ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!shown}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#top"
          className="shrink-0"
          aria-label="Slob Tuinen, naar boven"
          tabIndex={shown ? 0 : -1}
        >
          <img
            src={withBasePath("/logo.png")}
            alt="Slob Tuinen logo"
            className="h-10 w-48 object-contain object-left md:h-11 md:w-52"
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.isPage ? withBasePath(link.href) : link.href}
              tabIndex={shown ? 0 : -1}
              className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
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
            tabIndex={shown ? 0 : -1}
            className="flex items-center gap-2 bg-forest px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-forest-dark sm:px-5 sm:py-3"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            tabIndex={shown ? 0 : -1}
            className="flex size-11 items-center justify-center border border-white/40 text-white lg:hidden"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && shown && (
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.isPage ? withBasePath(link.href) : link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 text-lg font-semibold uppercase tracking-wide text-white"
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
