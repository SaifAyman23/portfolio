import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lazy, Suspense, useLayoutEffect, useRef } from 'react'

import ScrollReveal from '@/components/bits/ScrollReveal'

const Beams = lazy(() => import('@/components/bits/Beams'))
const DarkVeil = lazy(() => import('@/components/bits/DarkVeil'))
const Silk = lazy(() => import('@/components/bits/Silk'))

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
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
  }, [])

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
            <div className="relative h-60 w-full overflow-hidden sm:h-72 md:h-80 rounded-2xl border bg-card md:h-80">
              <div className="absolute inset-0">
                <Suspense fallback={null}>
                  <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={20}
                    lightColor="#F97316"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={30}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4">
          <div data-from="left" className="reveal-panel will-change-transform">
            <div className="relative h-60 w-full overflow-hidden sm:h-72 md:h-80 rounded-2xl border bg-card md:h-80">
              <div className="absolute inset-0">
                <Suspense fallback={null}>
                  <Silk speed={5} scale={1} color="#150069" noiseIntensity={1.5} rotation={0} />
                </Suspense>
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
            <div className="relative w-full overflow-hidden rounded-2xl border bg-card h-56 md:h-80">
              <div className="absolute inset-0">
                <Suspense fallback={null}>
                  <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={2.5}
                    scanlineFrequency={0}
                    warpAmount={0}
                  />
                </Suspense>
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
