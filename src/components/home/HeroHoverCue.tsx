import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const TAPE_PHRASE = 'Hover for a surprise • '.repeat(4)

export function HeroHoverCue({ visible }: { visible: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { autoAlpha: visible ? 1 : 0, scale: visible ? 1 : 0.92 })
      return
    }
    gsap.to(el, {
      autoAlpha: visible ? 1 : 0,
      scale: visible ? 1 : 0.92,
      y: visible ? 0 : -8,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [visible])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.to(track, { xPercent: -50, duration: 16, repeat: -1, ease: 'none' })
    }, track)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[30%] z-20 w-[min(92vw,680px)] -translate-x-1/2 rotate-[-2deg] overflow-hidden rounded-lg bg-white py-2 opacity-0"
    >
      <div ref={trackRef} className="flex w-max items-center whitespace-nowrap will-change-transform">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-[#4D92BC] dark:text-blue-400 sm:text-base">
          {TAPE_PHRASE}
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-[#4D92BC] dark:text-blue-400 sm:text-base"
        >
          {TAPE_PHRASE}
        </span>
      </div>
    </div>
  )
}
