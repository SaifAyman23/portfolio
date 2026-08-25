# SEO — World-Grade Playbook

**Goal:** Lighthouse SEO **100**, plus real search-engine ranking. SEO 100 in Lighthouse only checks _technical_ basics; real ranking also needs content, links, and performance (LCP is a ranking signal — see `Performance.md`).

This document uses the current portfolio as the reference implementation.

---

## 1. The technical foundation

| Check                                   | Requirement                        |
| --------------------------------------- | ---------------------------------- |
| `robots.txt`                            | Allows crawling, points to sitemap |
| `sitemap.xml`                           | Lists all real routes              |
| `<title>` + `<meta name="description">` | Unique, present on every route     |
| `viewport`                              | `width=device-width`               |
| `http` → `https`                        | Served over HTTPS                  |
| `canonical`                             | One canonical URL per route        |
| `hreflang` (if multilingual)            | Language alternates                |

The repo emits `robots.txt` + `sitemap.xml` on every build via a Vite plugin in `vite.config.ts`:

```ts
// siteFiles plugin (conceptual)
{
  robots: `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml`,
  sitemap: `<?xml version="1.0"?><urlset ...>${routes}</urlset>`,
}
```

---

## 2. Per-route meta (SPA-safe)

Google renders client JS, but you must still deliver correct `<title>`/`<meta>` per route. The repo does this with two pieces:

**`src/lib/seo.ts`** — single source of truth:

```ts
export const SITE_NAME = 'Saif Eldin Ayman'
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://example.com'
export const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  '/': { title: '...', description: '...' },
  '/login': { title: '...', description: '...' },
  // every route gets an entry
}
export function matchRouteSeo(pathname: string) {
  /* longest-prefix match */
}
```

**`src/components/SeoUpdater.tsx`** — renders `null`, but on every route change upserts `document.title`, the description meta, OG tags, and the canonical link. Wire it **inside the Router, above `<Suspense>`** so it runs for all routes.

Rule: **every route added to the app must get an entry in `ROUTE_SEO`** and a corresponding path in `lib/constants.ts` `ROUTES`.

---

## 3. Open Graph + Twitter

Defined once in `index.html` (default/fallback) and overridden per route by `SeoUpdater`. Required tags:

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Saif Eldin Ayman" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://saifayman23.github.io/portfolio/" />
<meta property="og:image" content=".../logo.webp" />
<meta name="twitter:card" content="summary_large_image" />
```

- Always supply `og:image` with `og:image:width` / `og:image:height` / `og:image:alt`.
- Use `summary_large_image` for the richest Twitter preview.

---

## 4. Structured data (JSON-LD)

Machines read JSON-LD better than meta. `index.html` includes `Organization` + `WebSite` (with `inLanguage`). Add more as needed:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saif Eldin Ayman",
    "jobTitle": "Full Stack Software Engineer",
    "url": "https://saifayman23.github.io/portfolio/"
  }
</script>
```

Extend per page type:

- **Articles / blog** → `Article` + `BreadcrumbList`.
- **Products / projects** → `CreativeWork` or `Product`.
- **Local business** → `LocalBusiness` with `geo` + `address`.
  Validate with Google's Rich Results Test.

---

## 5. Crawlability for SPAs

- Every route is reachable via `<Link>` (crawlers follow links; never only JS events). `App.tsx` uses `lazy()` routes but still renders real `<a>` tags via React Router's `Link`.
- Avoid `href="#"` or buttons that navigate via `onClick` only.
- Keep the internal link graph dense: related projects link to each other, footer links to key sections.

---

## 6. Content & semantics that rank

- One `<h1>` per page (the hero name is the page's single `<h1>`). `src/components/ui/torn-text.tsx` renders the name as an `<h1>` with `aria-label` so screen readers and crawlers get the text, not just torn images.
- Heading order is strict: `h1 → h2 → h3`, never skip levels.
- Descriptive link text: "View the delivery-platform case study", never "click here".
- `alt` text is meaningful for informative images, `alt=""` for decorative ones.
- URLs are clean and keyword-aware (e.g. `/work/delivery-platform`), not query-string soup.

---

## 7. Performance is SEO

LCP, CLS, and INP are ranking factors. Treat `Performance.md` as part of this playbook — a fast site outranks a slow one with better copy.

---

## 8. Pre-merge SEO checklist

- [ ] `robots.txt` allows crawling and references the sitemap.
- [ ] `sitemap.xml` lists every real route.
- [ ] Unique `<title>` + `description` on every route (via `ROUTE_SEO`).
- [ ] `canonical` set per route.
- [ ] Open Graph + Twitter cards complete, with `og:image` dimensions.
- [ ] JSON-LD present and validates (Organization/Person/WebSite at minimum).
- [ ] All routes reachable via `<Link>`.
- [ ] Single `<h1>` per page; heading order correct.
- [ ] Images have meaningful `alt` (or `alt=""` if decorative).
- [ ] Lighthouse SEO = 100; rich-result validation passes.
