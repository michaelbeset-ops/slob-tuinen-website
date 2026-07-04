"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

type BeforeAfterProps = {
  /** New / finished result — shown by default. */
  after: string
  /** Old / original situation — revealed by dragging the handle. */
  before: string
  alt: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfter({
  after,
  before,
  alt,
  beforeLabel = "Toen",
  afterLabel = "Nu",
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // Handle position as a percentage from the left. Starts high so the
  // finished result dominates and a sliver of "before" peeks in on the right.
  const [pos, setPos] = useState(88)
  const [dragging, setDragging] = useState(false)
  const [interacted, setInteracted] = useState(false)
  const [beforeFailed, setBeforeFailed] = useState(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, raw)))
  }, [])

  const startDrag = (clientX: number) => {
    setDragging(true)
    setInteracted(true)
    updateFromClientX(clientX)
  }

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: PointerEvent) => {
      e.preventDefault()
      updateFromClientX(e.clientX)
    }
    const onUp = () => setDragging(false)
    window.addEventListener("pointermove", onMove, { passive: false })
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [dragging, updateFromClientX])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setInteracted(true)
      setPos((p) => Math.max(0, Math.min(100, p + (e.key === "ArrowLeft" ? -4 : 4))))
    }
  }

  // If the "before" image is missing, degrade to just showing the result.
  if (beforeFailed) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={withBasePath(after)}
          alt={alt}
          className="size-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => startDrag(e.clientX)}
      className="relative aspect-[4/3] cursor-ew-resize touch-none select-none overflow-hidden"
    >
      {/* Base layer: the OLD situation */}
      <img
        src={withBasePath(before)}
        alt={`${alt} — ${beforeLabel.toLowerCase()}`}
        draggable={false}
        onError={() => setBeforeFailed(true)}
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />
      <span className="pointer-events-none absolute right-4 top-4 z-10 bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
        {beforeLabel}
      </span>

      {/* Top layer: the NEW result, clipped to the left of the handle */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={withBasePath(after)}
          alt={`${alt} — ${afterLabel.toLowerCase()}`}
          draggable={false}
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
        <span className="pointer-events-none absolute left-4 top-4 z-10 bg-forest px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
          {afterLabel}
        </span>
      </div>

      {/* Handle / hatch divider */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`${afterLabel} versus ${beforeLabel} — sleep om te vergelijken`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => {
          e.stopPropagation()
          startDrag(e.clientX)
        }}
        className={`absolute inset-y-0 z-20 -ml-px w-0.5 bg-white ${
          dragging ? "" : "transition-[left] duration-100"
        } ${!interacted ? "ba-hint" : ""}`}
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/10">
          <MoveHorizontal className="size-5" />
        </span>
      </div>
    </div>
  )
}
