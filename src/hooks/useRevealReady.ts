import { useEffect, useRef, useState } from 'react'

export function useRevealReady<T extends HTMLElement = HTMLElement>(rootMargin = '300px') {
  const ref = useRef<T>(null)
  const [ready, setReady] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (ready) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true)
          io.disconnect()
        }
      },
      { rootMargin: `${rootMargin} 0px` }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ready, rootMargin])

  return [ref, ready] as const
}
