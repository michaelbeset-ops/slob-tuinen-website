import { WhatsAppIcon } from "./whatsapp-icon"
import { WHATSAPP_URL } from "./data"

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een bericht via WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-forest text-white shadow-lg shadow-foreground/20 transition-transform duration-300 hover:scale-110 hover:bg-forest-dark md:size-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-forest/40 [animation-duration:2.5s]" />
      <WhatsAppIcon className="relative size-7 md:size-8" />
    </a>
  )
}
