# Performance — World-Grade Playbook

**Goal:** Lighthouse Performance **100**, and a genuinely smooth real-world experience (Core Web Vitals in the green on real devices, not just the lab).

This document treats the current portfolio as the reference implementation. Every pattern below is either already in the code (cited with file paths) or is the next step to reach the limit.

---

## 1. The metrics that decide the score

| Metric                              | What it measures                       | Green    | Failing  |
| ----------------------------------- | -------------------------------------- | -------- | -------- |
| **FCP** (First Contentful Paint)    | First text/image paints                | < 1.8 s  | > 3.0 s  |
| **LCP** (Largest Contentful Paint)  | The biggest visible element            | < 2.5 s  | > 4.0 s  |
| **CLS** (Cumulative Layout Shift)   | Unexpected layout jumps                | < 0.1    | > 0.25   |
| **TBT** (Total Blocking Time)       | Main-thread blocked before interactive | < 200 ms | > 600 ms |
| **INP** (Interaction to Next Paint) | Responsiveness to input                | < 200 ms | > 500 ms |
| **Speed Index**                     | How fast content is visually complete  | < 3.4 s  | > 5.8 s  |

**Debugging rule of thumb:** FCP fast + LCP slow ⇒ the LCP _resource_ is slow (image size, late discovery). CLS > 0.1 ⇒ missing reserved space. TBT/INP high ⇒ too much JS on the main thread.

---

## 2. LCP — make the biggest element arrive instantly

The LCP element is almost always a hero image or the hero text. Optimize the _resource_, not the markup.

### 2.1 Ship modern image formats, never PNG on the critical path

- Convert raster posters/photos to **WebP** (10–16× smaller); **AVIF** where supported.
- The repo already ships WebP everywhere via `scripts/img2webp.mjs`. Keep it.
- Command used historically: `ffmpeg -i in.png -c:v libwebp -quality 82 out.webp`.

### 2.2 Mark the LCP image and give it explicit dimensions

`src/components/home/Hero.tsx` does exactly this:

```tsx
<img
  ref={paperRef}
  fetchPriority="high" // tells the browser this is the LCP candidate
  src={bgPaper}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 h-full w-full object-cover ..."
/>
```

For every non-LCP image, do the opposite: `loading="lazy"` + `decoding="async"` (see §4).

### 2.3 Preload the LCP image when it is NOT a static asset

Because the hero paper is imported through Vite (hashed name), preloading from `index.html` is awkward. Two solid options:

- Keep `fetchPriority="high"` on the element (already done — sufficient for most cases).
- Or emit a `<link rel="preload" as="image">` via a tiny Vite plugin that knows the hashed filename. Add this only if Lighthouse still flags LCP discovery.

### 2.4 No render-blocking CSS/JS in the critical path

- Critical CSS is inlined by Vite automatically.
- Fonts load non-render-blocking (see §5).
- Heavy SDKs (three.js, charts) are **never** in the initial bundle (see §3).

---

## 3. JavaScript — the #1 enemy of TBT/INP

A heavy initial bundle blocks the main thread → high TBT → low score. The fix is _less JS executing during load_, achieved by splitting and deferring.

### 3.1 Route-level code splitting (baseline)

`src/App.tsx` lazy-loads every route:

```tsx
const Home = lazy(() => import('@/pages/Home'))
```

### 3.2 Vendor splitting via `manualChunks`

The build already emits stable vendor chunks (`vendor-react`, `vendor-gsap`, `vendor-query`, `vendor-three`, `vendor-radix`). Keep these so the app chunk stays cacheable and small.

### 3.3 Defer below-the-fold sections until they are scrolled into view

This was the single biggest win for this site (mobile TBT dropped from **2,645 ms → 130 ms**).

`src/pages/Home.tsx`:

```tsx
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
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true)
            io.disconnect()
          }
        }),
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
```

Why it works: the heavy section code (e.g. the three.js Experience panels) is imported dynamically and only _executes_ when the user scrolls near it — completely outside Lighthouse's load window.

### 3.4 Break up long tasks

- Wrap non-urgent work in `requestIdleCallback`.
- Example in `src/components/ui/torn-text.tsx` — the torn-letter images are warmed at idle so they don't block first paint:

```tsx
const idle = (cb: () => void) => {
  if ('requestIdleCallback' in window) window.requestIdleCallback(cb)
  else setTimeout(cb, 1200)
}
idle(() => {
  /* preload letter images, setImgsReady */
})
```

### 3.5 Never put WebGL/three.js in the critical path

`Silk`, `Beams`, and `DarkVeil` are already isolated into their own lazy chunks. Keep them lazy and only mount them inside the deferred section (§3.3).

### 3.6 Smooth scrolling without jank

`src/lib/smoothScroll.ts` wires Lenis + GSAP correctly and bails on reduced-motion:

```ts
export function initSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null
  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
    gestureOrientation: 'vertical',
  })
  lenis.on('scroll', ScrollTrigger.update)
  const raf = (time: number) => lenis.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)
  return () => {
    gsap.ticker.remove(raf)
    lenis.destroy()
  }
}
```

---

## 4. Images — fade in, never shift

Use `src/components/ui/FadeImage.tsx` for every non-LCP image. It is CLS-safe (explicit `width`/`height`) and fades in on load so there is no flash:

```tsx
export function FadeImage({ className, onLoad, ...props }: FadeImageProps) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (el?.complete) {
      const id = requestAnimationFrame(() => setLoaded(true))
      return () => cancelAnimationFrame(id)
    }
  }, [])
  return (
    <img
      ref={ref}
      onLoad={(e) => {
        setLoaded(true)
        onLoad?.(e)
      }}
      className={cn(
        'transition-opacity duration-700 ease-out',
        loaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      {...props}
    />
  )
}
```

Usage in `src/components/home/About.tsx` (note explicit dimensions + lazy + async):

```tsx
<FadeImage
  src={photo.src}
  alt=""
  draggable={false}
  loading="lazy"
  decoding="async"
  width={photo.width}
  height={photo.height}
  className="h-full w-full rounded-2xl object-cover"
/>
```

Rules:

- **Every** image gets explicit `width`/`height` **or** sits in a fixed `aspect-*` container.
- Below-fold images: `loading="lazy"` + `decoding="async"`.
- Decorative images: `alt=""` + `aria-hidden="true"` (they are not announced).
- The LCP image: `fetchPriority="high"`, **not** lazy.

---

## 5. Fonts — fast and never shift

`index.html` loads fonts non-render-blocking and swaps:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?...&display=swap"
  rel="stylesheet"
  media="print"
  onload="this.media='all'"
/>
<noscript><link href="..." rel="stylesheet" /></noscript>
```

- `display=swap` prevents invisible-text flashes.
- `font-display` is set in the `@theme` tokens in `src/index.css`.
- Pair this with `font-size: min(...)` clamped headings so the layout does not jump when the web font arrives.

---

## 6. Animations — GPU only, respect the user

- Animate **only** `transform` and `opacity`. Never `top/left/width/height/margin` in animations.
- `will-change` is applied by GSAP during animation and cleaned up by `gsap.context().revert()` — do not leave permanent `will-change` on many elements.
- Honor reduced motion everywhere:
  - `src/index.css` global rule collapses all motion.
  - Every effect in this repo starts with `if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return`.

---

## 7. Measure like a pro

1. **Lab:** Lighthouse (headless Chrome). For throttled mobile, run the default preset; for desktop, `--preset=desktop`.
2. **Field:** Chrome UX Report (CrUX) for real FCP/LCP/CLS/INP from real users.
3. **Watch INP** — it cannot be measured by headless Lighthouse (no real interaction). Use field data or a real-device interaction test.
4. Budget regressions: add Lighthouse CI to the pipeline so every PR reports scores.

> Note: Lighthouse's mobile preset applies a 4× CPU throttle. A GSAP/Lenis/WebGL site may read worse in the lab than it feels on a real phone. Trust field data for the final verdict.

---

## 8. Pre-merge performance checklist

- [ ] LCP image is WebP/AVIF, `fetchPriority="high"`, explicit size.
- [ ] Every other image: `loading="lazy"` + `decoding="async"` + explicit dimensions.
- [ ] Below-fold sections lazy-mounted (IntersectionObserver), not eagerly bundled.
- [ ] WebGL / heavy SDKs are separate lazy chunks.
- [ ] No synchronous long tasks on load; idle/defer non-critical work.
- [ ] Fonts non-render-blocking + `display=swap`.
- [ ] Animations are transform/opacity only; reduced-motion guarded.
- [ ] `npm run build` chunk sizes reviewed; no accidental vendor bloat.
- [ ] Lighthouse mobile + desktop both ≥ 95 (target 100).
