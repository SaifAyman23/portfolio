<p align="center">
  <img src="src/assets/img/Saif Eldin Ayman.svg" alt="Saif Eldin Ayman" width="520" />
</p>

<p align="center">
  <b>Full-stack engineer — React × Django × Real-time</b><br/>
  <i>Two years shipping ERPs, delivery platforms, AI tools and live-stream infra. Fast, accessible, SEO-solid.</i>
</p>

<p align="center">
  <a href="https://saifayman23.github.io/portfolio/"><img src="https://img.shields.io/badge/Live-Demo-0ea5e9?style=for-the-badge&logo=github&logoColor=white" alt="Live Demo" /></a>
  <a href="https://github.com/SaifAyman23/portfolio/actions"><img src="https://img.shields.io/github/actions/workflow/status/SaifAyman23/portfolio/ci.yml?branch=main&label=CI&style=flat-square&logo=github" alt="CI" /></a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TS" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,python,django,postgres,redis,docker,git,figma&perline=10" alt="stack icons" />
</p>

<p align="center">
  <code>react</code> <code>typescript</code> <code>vite</code> <code>tailwind</code> <code>gsap</code> <code>ogl</code> <code>zustand</code> <code>tanstack-query</code> <code>radix-ui</code> <code>vitest</code> <code>a11y</code> <code>seo</code>
</p>

---

## ✨ What this is

Personal portfolio — first impression is the code. Dark-leaning, atmospheric, engineering-grade underneath.

- **Hero** — WebGL paper + `75%` ratio-tuned fungi/plants/clouds (`vw/%` from `2048` baseline), GSAP pin + `TornText` hover
- **Work** — pinned horizontal scrub on desktop (`768–2560`), GSAP blur carousel with blue ray on mobile / `>4xl`
- **Experience • Skills • About • Gallery** — `ScrollReveal`, `DarkVeil` (`ogl`), `FlowingMenu`, `AccordionGallery`
- **Perf** — `LCP <2.5s`, `CLS≈0`, `TBT <200ms` — WebP, `fetchPriority`, non-blocking fonts, skeleton until `window.load`

Live: **https://saifayman23.github.io/portfolio/**

---

## 🛠️ Stack

| Layer     | Tech                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| Framework | **React 19** + **TypeScript (strict)**                                            |
| Bundler   | **Vite 7** — HMR, `manualChunks`                                                  |
| Styling   | **Tailwind CSS v4** + CSS-variable tokens                                         |
| UI        | **Radix UI** via **shadcn/ui** + **Lucide**                                       |
| Motion    | **GSAP** + `motion` (Framer) — `transform/opacity` only, `prefers-reduced-motion` |
| Shaders   | **ogl** (`DarkVeil` WebGL) — isolated, pausa-ble                                  |
| State     | **Zustand** (persisted) + **TanStack Query v5**                                   |
| HTTP      | **Axios** + auth interceptor                                                      |
| Routing   | **React Router v7** — fully `lazy()`                                              |
| Testing   | **Vitest + RTL + axe-core**                                                       |

---

## 🚀 Quick start

```bash
git clone https://github.com/SaifAyman23/portfolio.git
cd portfolio
npm install
cp .env.example .env   # fill VITE_*
npm run dev            # http://localhost:5173
```

> Node 20+ / npm 10+

---

## 📜 Scripts

| Command             | What it does                                               |
| ------------------- | ---------------------------------------------------------- |
| `npm run dev`       | Dev + HMR                                                  |
| `npm run build`     | `tsc -b && vite build` → `dist/`                           |
| `npm run preview`   | Preview `dist/`                                            |
| `npm run check`     | **Gate**: `typecheck → lint → format:check → test → build` |
| `npm run typecheck` | `tsc -b --noEmit`                                          |
| `npm run lint`      | ESLint flat                                                |
| `npm run format`    | Prettier write                                             |
| `npm run test`      | Vitest + axe                                               |

---

## 🗂️ Structure

```
src/
├── api/              # 3-file per domain: endpoints + hooks + index
├── components/
│   ├── bits/         # MagicBento, DarkVeil, ScrollReveal, FlowingMenu
│   ├── home/         # Hero (ratio vw), Experience, Skills, Projects, Gallery, Footer
│   ├── ui/           # shadcn primitives
│   └── layout/       # Navbar, theme
├── lib/              # seo, constants, smoothScroll (Lenis)
├── pages/            # thin lazy orchestrators
├── store/auth/       # Zustand persisted
└── test/             # Vitest + axe
```

Full conventions → [`AGENTS.md`](./AGENTS.md)

---

## ⚡ Perf & SEO

- Images **WebP** (`92KB` not `1.4MB PNG`), `width/height` + `fetchPriority="high"` for LCP, `loading="lazy"` below fold
- Fonts non-blocking `media="print" onload`, `font-display: swap`
- `manualChunks` vendor splits + `lazy()` routes, skeleton `#loading-skeleton` until `load` + 20s fallback
- `robots.txt` + `sitemap.xml` via Vite `siteFiles` plugin, `SeoUpdater` per-route

---

## 🔧 Env

Copy `.env.example` → `.env` (never commit `.env`):

```
VITE_API_URL=https://api.example.com/api/v1
VITE_APP_NAME=Portfolio
VITE_SITE_URL=https://saifayman23.github.io/portfolio
VITE_CONTACT_EMAIL=
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
```

Typed in `src/vite-env.d.ts`.

---

## 📦 Deploy

`dist/` is static. Host is **GitHub Pages** (`gh-pages`):

```bash
npm run build
npm run deploy   # → gh-pages -d dist
```

SPA: rewrite all paths to `index.html`.

---

<p align="center">
  <i>Saif Eldin Ayman — Ship it & forget it ®</i><br/>
  <a href="https://github.com/SaifAyman23/portfolio">★ Star if you like the craft</a>
</p>
