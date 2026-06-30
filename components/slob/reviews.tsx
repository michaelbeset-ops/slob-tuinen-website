import { Star } from "lucide-react"
import { REVIEWS } from "./data"

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-[#fbbc05] text-[#fbbc05]" : "text-border"}`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Ervaringen
            </p>
            <h2 className="max-w-2xl text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4.5vw,3.75rem)]">
              Wat klanten zeggen
            </h2>
          </div>

          <div className="flex items-center gap-4 border border-border bg-card px-5 py-4">
            <GoogleG className="size-9 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold leading-none text-foreground">5,0</span>
                <Stars count={5} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Beoordelingen op Google
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col border border-border bg-card p-6 md:p-7"
            >
              <div className="mb-4 flex items-center justify-between">
                <Stars count={review.rating} />
                <GoogleG className="size-5 opacity-80" />
              </div>
              <blockquote className="flex-1 text-pretty leading-relaxed text-foreground">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold uppercase text-white">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {review.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Google review
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
