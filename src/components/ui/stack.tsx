
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface StackProps {
  children: React.ReactNode
  className?: string
}

export function Stack({ children, className }: StackProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stack-card', rootRef.current)
      if (cards.length === 0) return

      const STACK_TOP = 18

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top ${STACK_TOP + i * 2}%`,
          endTrigger: rootRef.current,
          end: 'bottom bottom',
          pin: card,
          pinSpacing: false,
          anticipatePin: 1,
        })
      })

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return

        gsap.to(card, {
          scale: 0.96 - i * 0.008,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 85%',
            end: `top ${STACK_TOP + (i + 1) * 2}%`,
            scrub: true,
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      {children}
    </div>
  )
}
