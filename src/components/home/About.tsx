import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

import photoLeft from '@/assets/img/about/left.webp'
import photoMiddle from '@/assets/img/about/middle.webp'
import photoRight from '@/assets/img/about/right.webp'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface AboutPhoto {
  src: string
  className?: string
  scatter?: { x: number; y: number; rotation: number }
  stacked?: { x: number; y: number; rotation: number }
}

const photos: AboutPhoto[] = [
  { src: photoLeft, className: 'h-[360px] w-[280px] will-change-transform sm:size-170' },
  {
    src: photoMiddle,
    className: 'h-[360px] w-[280px] will-change-transform sm:h-[480px] sm:w-[360px]',
  },
  {
    src: photoRight,
    className: 'h-[360px] w-[280px] will-change-transform sm:h-[480px] sm:w-[420px]',
  },
]

const SCATTER = [
  { x: -270, y: 46, rotation: -16 },
  { x: 0, y: -34, rotation: 0 },
  { x: 270, y: 46, rotation: 16 },
]

const STACKED = [
  { x: -10, y: 6, rotation: -3 },
  { x: 0, y: 0, rotation: 0 },
  { x: 10, y: 12, rotation: 3 },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const deckRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const isSmall = typeof window !== 'undefined' && window.innerWidth < 640
      const k = isSmall ? 0.45 : 1
      const scaleOffsets = (o: { x: number; y: number; rotation: number }) => ({
        x: o.x * k,
        y: o.y * k,
        rotation: o.rotation,
      })

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { autoAlpha: 0, y: 60, letterSpacing: '0.06em' },
          {
            autoAlpha: 1,
            y: 0,
            letterSpacing: '-0.02em',
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }

      const items = gsap.utils.toArray<HTMLElement>('.about-photo', deckRef.current)
      if (items.length !== photos.length) return

      items.forEach((item, i) => {
        gsap.set(item, {
          ...scaleOffsets(photos[i].stacked ?? STACKED[i]),
          zIndex: i + 1,
          force3D: true,
        })
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: deckRef.current,
            start: 'top 75%',
            end: 'top 20%',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        })
        .to(
          items[0],
          { ...scaleOffsets(photos[0].scatter ?? SCATTER[0]), duration: 1, ease: 'sine.inOut', force3D: true },
          0
        )
        .to(
          items[1],
          {
            ...scaleOffsets(photos[1].scatter ?? SCATTER[1]),
            scale: 1.05,
            duration: 1,
            ease: 'sine.inOut',
            force3D: true,
          },
          0
        )
        .to(
          items[2],
          { ...scaleOffsets(photos[2].scatter ?? SCATTER[2]), duration: 1, ease: 'sine.inOut', force3D: true },
          0
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background px-6 pb-36 pt-8">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-center">About</p>

        <h2
          ref={headingRef}
          className="font-libertine mt-4 text-center text-[clamp(3rem,8vw,7.5rem)] italic leading-[1.05] tracking-tight text-foreground"
        >
          The guy behind
          <br />
          the work
        </h2>

        <div
          ref={deckRef}
          className="relative mx-auto mt-10 flex h-[420px] max-w-full items-center justify-center sm:h-[520px]"
        >
          {photos.map((photo) => (
            <div key={photo.src} className={cn('about-photo absolute ', photo.className)}>
              <img
                src={photo.src}
                alt=""
                draggable={false}
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-14 max-w-3xl text-center">
          <p className="font-libertine text-2xl italic leading-relaxed text-foreground sm:text-3xl">
            &ldquo;I build software. When I&apos;m not shipping code, I&apos;m behind a camera,
            cutting footage, or out on my bike. Different crafts, same obsession with the
            details.&rdquo;
          </p>
          <footer className="font-libertine mt-5 text-lg italic text-muted-foreground">
            coding, video editing, photography, long rides. A cool guy indeed.
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
