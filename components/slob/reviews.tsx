"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { REVIEWS } from "./data"

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-5 ${
            i < count ? "fill-forest text-forest" : "text-border"
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + REVIEWS.length) % REVIEWS.length)

  return (
    <section id="reviews" className="overflow-hidden bg-background py-20 md:py-32">
      {/* Marquee band */}
      <div className="flex select-none overflow-hidden border-y border-border py-6">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-8 pr-8">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-black uppercase tracking-tighter text-foreground text-[clamp(1.5rem,3vw,2.5rem)]">
                {r.name}
              </span>
              <Star className="size-6 shrink-0 fill-forest text-forest" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 pt-16 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-forest">
              Reviews
            </p>
            <h2 className="text-balance font-black uppercase leading-[0.9] tracking-tighter text-foreground text-[clamp(2rem,4vw,3.5rem)]">
              Wat klanten zeggen
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex size-12 items-center justify-center rounded-none border border-foreground text-foreground transition-colors hover:bg-forest hover:border-forest hover:text-white"
                aria-label="Vorige review"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex size-12 items-center justify-center rounded-none border border-foreground text-foreground transition-colors hover:bg-forest hover:border-forest hover:text-white"
                aria-label="Volgende review"
              >
                <ArrowRight className="size-5" />
              </button>
              <span className="ml-2 text-sm font-medium tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <blockquote className="lg:col-span-9">
            <Stars count={review.rating} />
            <p className="mt-6 text-balance font-black leading-[1.05] tracking-tight text-foreground text-[clamp(1.75rem,4.2vw,3.5rem)]">
              &ldquo;{review.quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-forest" />
              <cite className="not-italic text-lg font-semibold text-foreground">
                {review.name}
              </cite>
              <span className="text-sm text-muted-foreground">
                · Google review
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
