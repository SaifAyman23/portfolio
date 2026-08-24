import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

import bgPaper from '../../assets/img/hero/background paper 3.webp'
import cloud10 from '../../assets/img/hero/cloud 10.webp'
import cloud11 from '../../assets/img/hero/cloud 11.webp'
import cloud9 from '../../assets/img/hero/cloud 9.webp'
import fungi11 from '../../assets/img/hero/fungi 11.webp'
import fungi2 from '../../assets/img/hero/fungi 2.webp'
import fungi5 from '../../assets/img/hero/fungi 5.webp'
import plant3 from '../../assets/img/hero/plant 3.webp'
import plants2 from '../../assets/img/hero/plants 2.webp'
import plants4 from '../../assets/img/hero/plants 4.webp'
import aTorn2 from '../../assets/img/hero/Saif Eldin/a torn 2.webp'
import dTorn from '../../assets/img/hero/Saif Eldin/d torn 1.webp'
import eTorn from '../../assets/img/hero/Saif Eldin/e torn 1.webp'
import fTorn from '../../assets/img/hero/Saif Eldin/f torn 2.webp'
import iTorn2 from '../../assets/img/hero/Saif Eldin/i torn 2.webp'
import iTorn3 from '../../assets/img/hero/Saif Eldin/i torn 3.webp'
import lTorn from '../../assets/img/hero/Saif Eldin/l torn 1.webp'
import nTorn from '../../assets/img/hero/Saif Eldin/n torn 1.webp'
import sTorn from '../../assets/img/hero/Saif Eldin/s torn 2.webp'

import HeroContactBar from '@/components/home/HeroContactBar'
import { TornText } from '@/components/ui/torn-text'

gsap.registerPlugin(ScrollTrigger)

const heroImages = [
  { src: sTorn, scale: 3 },
  { src: aTorn2, scale: 2 },
  { src: iTorn2, scale: 5 },
  { src: fTorn, scale: 3 },
  { src: eTorn, scale: 2.5 },
  { src: lTorn, scale: 3 },
  { src: dTorn, scale: 2.5 },
  { src: iTorn3, scale: 5 },
  { src: nTorn, scale: 2 },
]

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cloudsRef = useRef<HTMLDivElement>(null)
  const plantsRef = useRef<HTMLDivElement>(null)
  const fungiRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const clouds = cloudsRef.current ? Array.from(cloudsRef.current.children) : []
      const plants = plantsRef.current ? Array.from(plantsRef.current.children) : []
      const fungi = fungiRef.current ? Array.from(fungiRef.current.children) : []
      const gradient = gradientRef.current
      const pin = pinRef.current
      const heading = headingRef.current
      const sub = subRef.current
      const content = contentRef.current
      if (!pin || !gradient || !heading || !sub || !content || clouds.length === 0) return

      gsap.set(clouds, { yPercent: 125, autoAlpha: 0, force3D: true })
      gsap.set(plants, { yPercent: 140, autoAlpha: 0, force3D: true })
      gsap.set(fungi, { yPercent: 155, autoAlpha: 0, force3D: true })
      gsap.set(heading, { scale: 1.08, transformOrigin: '50% 50%', force3D: true })
      gsap.set(sub, { yPercent: 8, autoAlpha: 0.9, force3D: true })
      gsap.set(content, { yPercent: 0, force3D: true })
      gsap.set([...clouds, ...plants, ...fungi, heading, sub, content], {
        willChange: 'transform, opacity',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1.1,
          pin: pin,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })

      tl.to(heading, { scale: 1, duration: 1, ease: 'power1.inOut' }, 0)
        .to(sub, { yPercent: 0, autoAlpha: 1, duration: 1, ease: 'power1.inOut' }, 0)
        .to(content, { yPercent: 0, duration: 1, ease: 'power1.inOut' }, 0)
        .to(
          clouds,
          {
            yPercent: 15,
            autoAlpha: 1,
            duration: 0.85,
            stagger: { each: 0.09, from: 'random' },
            ease: 'sine.out',
          },
          0.08
        )
        .to(
          plants,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: { each: 0.09, from: 'random' },
            ease: 'sine.out',
          },
          0.3
        )
        .to(
          fungi,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: { each: 0.1, from: 'random' },
            ease: 'sine.out',
          },
          0.52
        )
        .to({}, { duration: 0.35 })
        .to({}, { duration: 1 })
        .to({}, { duration: 2 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[200vh] overflow-hidden bg-background">
      <div
        ref={pinRef}
        className="flex h-screen w-full max-w-full items-stretch justify-stretch overflow-hidden"
      >
        <div
          ref={gradientRef}
          className="bg-linear-to-b relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden from-[#68bdf2] to-[#DCF2FF]"
        >
          <HeroContactBar />

          <img
            src={bgPaper}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-color-burn"
          />

          <div
            ref={fungiRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <img src={fungi11} alt="" className="absolute end-[45%] bottom-0 w-150" />
            <img src={fungi2} alt="" className="absolute end-[25%] bottom-10 w-150" />
            <img src={fungi5} alt="" className="absolute start-[10%] bottom-20 w-150" />
          </div>

          <div
            ref={plantsRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <img src={plant3} alt="" className="absolute end-[0%] -bottom-40 w-150 rotate-30" />
            <img src={plants2} alt="" className="absolute end-[40%] bottom-10 w-100" />
            <img src={plants4} alt="" className="absolute -start-[35%] -bottom-[45%] w-400" />
          </div>

          <div
            ref={cloudsRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          >
            <img src={cloud10} alt="" className="absolute -start-40 top-130 w-300" />
            <img src={cloud11} alt="" className="absolute start-60 top-130 w-300" />
            <img src={cloud9} alt="" className="absolute -end-50 top-130 w-300" />
          </div>

          <div
            ref={contentRef}
            className="relative z-20 flex max-w-full flex-col items-center justify-center px-6 text-center"
          >
            <TornText
              ref={headingRef}
              text="Saif Eldin"
              images={heroImages}
              className="font-heavitas flex max-w-full flex-wrap items-end justify-center leading-none text-white [font-size:clamp(3.2rem,11vw,170px)]"
            />
            <p
              ref={subRef}
              className="mx-auto mt-3 max-w-4xl text-center text-[clamp(0.95rem,1.6vw,1.5rem)] leading-relaxed font-bold text-[#4D92BC]"
            >
              Two years of building the whole stack. <br className="hidden sm:block" />
              ERPs, delivery platforms, AI tools, live-streaming infra. Django under the hood, React
              where it counts, real-time by default.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
