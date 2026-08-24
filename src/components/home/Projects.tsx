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
      const track = trackRef.current
      if (!track || window.innerWidth < 768) return

      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96)

      gsap.to(track, {
        x: () => -getDistance(),
        ease: '1',
        force3D: true,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top -30%',
          end: SCROLL_DISTANCE(projects.length),
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-background pb-40">
      <div className="mx-auto max-w-7xl px-6">
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

      <div className="mt-20 md:px-[max(1.5rem,calc((100vw-1280px)/2))] pe-120">
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-14 px-10 pb-6 will-change-transform"
          style={{ paddingRight: '50vw' }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="aspect-square w-[min(88vw,680px)] shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
