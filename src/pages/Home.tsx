import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import Hero from '@/components/home/Hero'
import ThemeToggle from '@/components/theme/ThemeToggle'

const Experience = lazy(() => import('@/components/home/Experience'))
const Skills = lazy(() => import('@/components/home/Skills'))
const Projects = lazy(() => import('@/components/home/Projects'))
const About = lazy(() => import('@/components/home/About'))
const Gallery = lazy(() => import('@/components/home/Gallery'))
const Footer = lazy(() => import('@/components/home/Footer'))

function LazySection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setShow(true))
      return () => cancelAnimationFrame(id)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true)
            io.disconnect()
          }
        })
      },
      { rootMargin: '300px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {show ? (
        <Suspense fallback={<div className="min-h-[50vh]" aria-hidden="true" />}>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-[50vh]" aria-hidden="true" />
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Hero />
      <LazySection>
        <Experience />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Gallery />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
      <ThemeToggle />
    </div>
  )
}
