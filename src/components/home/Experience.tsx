import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lazy, Suspense, useLayoutEffect } from 'react'

import beamsImg from '@/assets/img/experience/beams.webp'
import silkImg from '@/assets/img/experience/silk.webp'
import ScrollReveal from '@/components/bits/ScrollReveal'
import { useRevealReady } from '@/hooks/useRevealReady'

const DarkVeil = lazy(() => import('@/components/bits/DarkVeil'))

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const [sectionRef, ready] = useRevealReady<HTMLElement>()

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (!ready) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-panel').forEach((panel) => {
        gsap.fromTo(
          panel,
          {
            opacity: 0.15,
          },
          {
            opacity: 1,
            ease: 'sine.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 95%',
              end: 'top 45%',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [ready, sectionRef])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background px-5 py-20 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-4 max-w-5xl font-heading text-[clamp(3rem,9vw,8.5rem)] font-black uppercase leading-[0.9] tracking-tight">
          Where I&apos;ve
          <br />
          Shipped
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          Two years of work across teams, clients, and my own projects.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4">
          <div className="col-span-3">
            <ScrollReveal baseOpacity={0.1} enableBlur baseRotation={0} blurStrength={15}>
              I got my start in frontend at Genius AI. React and TypeScript, shipping production
              builds alongside the team. Over time I took on code reviews and helped new interns
              find their footing.
            </ScrollReveal>
          </div>

          <div data-from="right" className="reveal-panel will-change-transform">
            <div className="relative h-60 w-full overflow-hidden sm:h-72 md:h-80 rounded-2xl bg-card md:h-80">
              <div className="absolute inset-0">
                <img
                  src={beamsImg}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  loading="eager"
                  fetchPriority="low"
                  decoding="async"
                  className="h-full w-full select-none object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4">
          <div data-from="left" className="reveal-panel will-change-transform">
            <div className="relative h-60 w-full overflow-hidden sm:h-72 md:h-80 rounded-2xl bg-card md:h-80">
              <div className="absolute inset-0">
                <img
                  src={silkImg}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  loading="eager"
                  fetchPriority="low"
                  decoding="async"
                  className="h-full w-full select-none object-cover"
                />
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <ScrollReveal baseOpacity={0.1} enableBlur baseRotation={0} blurStrength={15}>
              At Digiations I built a Smart ERP system for enterprise workflows. Backend, frontend,
              database design, the whole pipeline. We worked close with the client to map how their
              business actually runs, and the system ships that today.
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4">
          <div data-from="center" className="reveal-panel col-span-full will-change-transform">
            <div className="relative w-full overflow-hidden rounded-2xl bg-background h-60 md:h-[16rem]">
              <div className="absolute inset-0 bg-black">
                {ready && (
                  <Suspense fallback={null}>
                    <DarkVeil
                      hueShift={0}
                      noiseIntensity={0}
                      scanlineIntensity={0}
                      speed={2.5}
                      scanlineFrequency={6}
                      warpAmount={0.7}
                      resolutionScale={1.2}
                    />
                  </Suspense>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <ScrollReveal baseOpacity={0.1} enableBlur baseRotation={0} blurStrength={15}>
              Beyond the job titles, I build. Delivery platforms, AI career tools, live-streaming
              infrastructure. Different problems, same approach: understand the system end to end,
              then make it work.
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
