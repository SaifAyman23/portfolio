import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

import { ProjectCard } from '@/components/projects'
import { projects } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_DISTANCE = (count: number) => `+=${(count - 1) * 110}%`

export default function Projects() {
  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current
        if (!track) return

        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96)

        gsap.to(track, {
          x: () => -getDistance(),
          ease: '1',
          force3D: true,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top -44%',
            end: SCROLL_DISTANCE(projects.length),
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <p className="eyebrow">Selected Work</p>
        <h2 className="font-heading mt-4 text-[clamp(3rem,9vw,8.5rem)] font-black uppercase leading-[0.9] tracking-tight">
          Things I&apos;ve
          <br />
          Built
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          A few projects I worked on. Each one taught me something specific.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto md:mt-16 lg:overflow-x-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-cols-1 gap-8 px-5 sm:px-6 md:grid-cols-2 lg:mt-4 lg:flex lg:w-max lg:flex-row lg:items-stretch lg:gap-10 lg:ps-[max(1.5rem,calc((100vw-1280px)/2))] lg:pe-[50vw]">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} className="shrink-0 lg:w-[min(42vw,680px)]" />
          ))}
        </div>
      </div>
    </section>
  )
}
