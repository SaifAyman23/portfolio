import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'

import { ProjectCard } from '@/components/projects'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([])
  const rayRef = useRef<HTMLDivElement>(null)
  const animatingRef = useRef(false)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      const vw = window.innerWidth
      if (!track || vw < 768 || vw > 2560) return

      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48)

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${getDistance() + window.innerHeight * 0.5}`,
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [rootRef])

  useLayoutEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.set(el, {
        autoAlpha: i === active ? 1 : 0,
        filter: i === active ? 'blur(0px)' : 'blur(12px)',
        scale: i === active ? 1 : 0.98,
        force3D: true,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goTo = (next: number) => {
    if (animatingRef.current || next === active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(next)
      return
    }
    const current = cardsRef.current[active]
    const incoming = cardsRef.current[next]
    const ray = rayRef.current
    const prevDot = dotsRef.current[active]
    const nextDot = dotsRef.current[next]
    if (!current || !incoming) {
      setActive(next)
      return
    }
    animatingRef.current = true
    gsap.set(incoming, {
      autoAlpha: 0,
      filter: 'blur(14px)',
      scale: 1.04,
      rotationY: 6,
      force3D: true,
    })
    if (ray) gsap.set(ray, { xPercent: -120, opacity: 0, force3D: true })

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(next)
        animatingRef.current = false
        if (ray) gsap.set(ray, { xPercent: -120, opacity: 0 })
      },
    })
    tl.to(
      current,
      {
        autoAlpha: 0,
        filter: 'blur(14px)',
        scale: 0.96,
        rotationY: -6,
        duration: 0.42,
        ease: 'power2.in',
        force3D: true,
      },
      0
    )
      .to(
        ray,
        { xPercent: 120, opacity: 1, duration: 0.55, ease: 'power2.inOut', force3D: true },
        0.08
      )
      .to(ray, { opacity: 0, duration: 0.22, ease: 'power2.out' }, 0.42)
      .to(
        incoming,
        {
          autoAlpha: 1,
          filter: 'blur(0px)',
          scale: 1,
          rotationY: 0,
          duration: 0.58,
          ease: 'power3.out',
          force3D: true,
        },
        0.18
      )
    if (prevDot && nextDot) {
      tl.to(
        prevDot,
        {
          width: 8,
          backgroundColor: 'rgba(113,113,122,0.3)',
          duration: 0.38,
          ease: 'power2.inOut',
        },
        0
      )
      tl.to(
        nextDot,
        { width: 28, backgroundColor: 'rgb(24,24,27)', duration: 0.38, ease: 'power2.inOut' },
        0
      )
      tl.to(prevDot, { scale: 0.9, duration: 0.18, yoyo: true, repeat: 1 }, 0)
      tl.to(nextDot, { scale: 1.15, duration: 0.18, yoyo: true, repeat: 1 }, 0.18)
    }
  }

  const prev = () => goTo((active - 1 + projects.length) % projects.length)
  const next = () => goTo((active + 1) % projects.length)

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <p className="eyebrow">Selected Work</p>

        <h2 className="font-heading mt-4 text-[clamp(3rem,12vw,8.5rem)] font-black uppercase leading-[0.88] tracking-tight">
          Things I&apos;ve
          <br />
          Built
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl md:text-2xl">
          A few projects I worked on. Each one taught me something unique.
        </p>
      </div>

      <div className="px-5 py-6 md:hidden min-[2561px]:!block min-[2561px]:px-0">
        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="relative min-h-[720px] overflow-hidden rounded-2xl sm:min-h-[740px] [clip-path:inset(0_round_16px)]">
            {projects.map((project, i) => (
              <div
                key={project.title}
                ref={(el) => {
                  cardsRef.current[i] = el
                }}
                className="absolute inset-0 overflow-hidden rounded-2xl will-change-transform"
                style={{ pointerEvents: i === active ? 'auto' : 'none' }}
                aria-hidden={i !== active}
              >
                <ProjectCard
                  {...project}
                  className="h-full w-full shrink-0 animate-fade-in overflow-hidden rounded-2xl"
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl [clip-path:inset(0_round_16px)]">
              <div
                ref={rayRef}
                className="absolute -inset-x-[40%] top-1/2 h-[180%] -translate-y-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-sky-400/70 to-transparent opacity-0 will-change-transform dark:from-transparent dark:via-blue-900/80 dark:to-transparent"
                style={{ filter: 'blur(7px)' }}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous project"
              onClick={prev}
              className="h-11 w-11 rounded-full border-2 shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    dotsRef.current[i] = el
                  }}
                  className="h-2 rounded-full"
                  style={{
                    width: i === active ? 28 : 8,
                    backgroundColor: i === active ? 'rgb(24,24,27)' : 'rgba(113,113,122,0.3)',
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              aria-label="Next project"
              onClick={next}
              className="h-11 w-11 rounded-full border-2 shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={rootRef}
        className="relative hidden overflow-hidden bg-background md:block min-[2561px]:!hidden"
      >
        <div
          className="
            flex h-[100svh] min-h-[500px] w-full items-center overflow-hidden
            md:overflow-visible
          "
        >
          <div
            className="
              flex w-full max-w-none items-center overflow-x-auto
              pe-0
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              md:overflow-visible
              md:px-0
            "
          >
            <div
              ref={trackRef}
              className="
                flex w-max items-stretch
                gap-4 px-5 py-4
                will-change-transform
                sm:gap-6 sm:px-6
                md:gap-6 md:ps-[max(1.5rem,calc((100vw-1280px)/2))] md:pe-[50vw]
                snap-x snap-mandatory
              "
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  className="
                  w-[calc(100vw-2.5rem)]
                  max-w-[680px]
                  shrink-0
                  max-md:snap-center
                  sm:w-[min(88vw,680px)]
                  md:w-[min(78vw,680px)]
                  animate-fade-in
                "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
