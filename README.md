<p align="center">
  <img src="src/assets/img/Saif Eldin Ayman.svg" alt="Saif Eldin Ayman" width="520" />
</p>

<p align="center">
  <b>Saif Eldin Ayman</b> — Full-stack engineer<br/>
  React, Django, PostgreSQL, Real-time systems
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
  <code>react</code> <code>typescript</code> <code>vite</code> <code>tailwind</code> <code>gsap</code> <code>ogl</code> <code>zustand</code> <code>tanstack-query</code> <code>radix-ui</code> <code>vitest</code>
</p>

## What this is

Portfolio for Saif Eldin Ayman. Work, projects and contact.

- **Hero** — ratio tuned graphics from `75%` baseline at `2048` using `vw` and `%`, WebP paper, GSAP pin
- **Work** — horizontal scrub on desktop `768` to `2560`, blur carousel with blue ray on mobile and above `4xl`
- **Sections** — `ScrollReveal`, `DarkVeil` with `ogl`, `FlowingMenu`, `AccordionGallery`
- **Perf** — WebP, `fetchPriority`, non blocking fonts, skeleton until `load`

Live: **https://saifayman23.github.io/portfolio/**

## Stack

| Layer     | Tech                                                 |
| --------- | ---------------------------------------------------- |
| Framework | **React 19** + **TypeScript (strict)**               |
| Bundler   | **Vite 7** — HMR, `manualChunks`                     |
| Styling   | **Tailwind CSS v4** + CSS variable tokens            |
| UI        | **Radix UI** via **shadcn/ui** + **Lucide**          |
| Motion    | **GSAP** + `motion` — `transform` and `opacity` only |
| Shaders   | **ogl** (`DarkVeil`)                                 |
| State     | **Zustand** (persisted) + **TanStack Query v5**      |
| HTTP      | **Axios** + auth interceptor                         |
| Routing   | **React Router v7** — `lazy()`                       |
| Testing   | **Vitest + RTL + axe-core**                          |

## Quick start

```bash
git clone https://github.com/SaifAyman23/portfolio.git
cd portfolio
npm install
cp .env.example .env
npm run dev            # http://localhost:5173
```

> Node 20+ / npm 10+

## Scripts

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Dev + HMR                                    |
| `npm run build`     | `tsc -b && vite build` to `dist/`            |
| `npm run preview`   | Preview `dist/`                              |
| `npm run check`     | `typecheck, lint, format:check, test, build` |
| `npm run typecheck` | `tsc -b --noEmit`                            |
| `npm run lint`      | ESLint flat                                  |
| `npm run format`    | Prettier write                               |
| `npm run test`      | Vitest + axe                                 |

## Structure

```
src/
├── api/              # 3 files per domain: endpoints + hooks + index
├── components/
│   ├── bits/         # DarkVeil, ScrollReveal, FlowingMenu
│   ├── home/         # Hero, Experience, Skills, Projects, Gallery, Footer
│   ├── ui/           # shadcn primitives
│   └── layout/       # Navbar, theme
├── lib/              # seo, constants, smoothScroll
├── pages/            # lazy orchestrators
├── store/auth/       # Zustand persisted
└── test/             # Vitest + axe
```

Full conventions in [`AGENTS.md`](./AGENTS.md)

## Perf and SEO

- WebP with `width` and `height`, `fetchPriority` for LCP, `loading lazy` below fold
- Fonts non blocking with `font-display: swap`
- `manualChunks` splits + `lazy()` routes, skeleton until `load`
- `robots.txt` + `sitemap.xml` via Vite plugin, `SeoUpdater` per route

## Env

Copy `.env.example` to `.env`:

```
VITE_API_URL=https://api.example.com/api/v1
VITE_APP_NAME=Portfolio
VITE_SITE_URL=https://saifayman23.github.io/portfolio
VITE_CONTACT_EMAIL=
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
```

Typed in `src/vite-env.d.ts`.

## Deploy

`dist/` is static. Host is GitHub Pages:

```bash
npm run build
npm run deploy
```

SPA: rewrite all paths to `index.html`.
