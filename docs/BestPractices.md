# Best Practices — World-Grade Playbook

**Goal:** Lighthouse Best Practices **100**, plus the engineering discipline that keeps a site fast, safe, and maintainable for years. The portfolio's `AGENTS.md` already encodes most of this; this document generalizes it and shows the "why".

Reference files: `AGENTS.md`, `src/api/**`, `src/hooks/**`, `src/lib/**`, `src/test/**`, `.github/workflows/ci.yml`, `src/vite-env.d.ts`.

---

## 1. Code health (what Lighthouse Best Practices actually checks)

Lighthouse flags: `console.error` in production, `debugger` statements, deprecated APIs, `document.write`, mixed content, HTTP usage, images without correct aspect ratio, invalid source maps, and unminified/duplicate JS.

Discipline that satisfies it:
- **No `console.log` in ship code.** `warn`/`error` are allowed (used for real failures). Enforced by `no-console` in ESLint.
- **No secrets in the client.** Env vars are typed in `src/vite-env.d.ts` and read via `import.meta.env.VITE_*`. `.env` is git-ignored; never commit it.
- **HTTPS everywhere**, including the `canonical`/OG/sitemap URLs and any API base.
- **No `dangerouslySetInnerHTML`** unless the content is sanitized (prefer the `markdown.tsx` renderer in `src/lib`).
- **Correct image dimensions** so the browser never shows a broken aspect ratio (use `FadeImage` + explicit `width`/`height`).

---

## 2. Architecture — decoupled, single-responsibility components

Pages are thin orchestrators; UI lives in components. `AGENTS.md` Part B §3.6:

```tsx
export default function SomePage() {
  // 1. hooks (auth, data, mutations)
  // 2. event handlers (thin, delegate to mutations)
  // 3. render: compose components, pass props
}
```

Rules:
- Extract any UI that appears twice, or any piece with clear boundaries, into its own file under `components/<domain>/`.
- Components receive data + callbacks via **props** — never read stores/routers/query hooks directly (keeps them reusable and testable).
- Each domain folder has a barrel `index.ts`; pages import from the barrel, never the file.
- `src/pages/**` is capped at **200 lines** (`max-lines` ESLint rule) to force thin pages.

---

## 3. The API layer — strict 3-file pattern

Every domain follows `src/api/<domain>/`:

```
api/accounts/
├── endpoints.ts   # axios calls + TS interfaces
├── hooks.ts       # React Query hooks (useLogin, useRegister)
└── index.ts       # barrel re-export
```

- `endpoints.ts` exports a const `domainApi` with the calls and a const `domainEndpoints` with URL paths.
- `hooks.ts` exports `use<Action>` hooks; every mutation surfaces errors via `extractErrorMessage`.
- `index.ts` re-exports both.
- Add the domain export to `api/index.ts`.

State ownership (from `AGENTS.md` §3.7):

| State | Tool | Persisted? |
| ----- | ---- | ---------- |
| Auth (user, token) | Zustand | Yes (localStorage) |
| Server data | React Query | No |
| UI state (form, modal) | `useState` | No |
| URL state | React Router | Yes (URL) |

---

## 4. Hooks & naming conventions

- Hooks: `use<Verb><Noun>` (`useLogin`).
- API fns: `camelCase` on a named const (`accountsApi.login`).
- Components: named export + `PascalCase` (`OAuthButtons`); pages: default export + `PascalCase` (`Home`).
- Types/interfaces: `PascalCase`.
- Import order (enforced by `import-x/order`, auto-fix with `npx eslint . --fix`):
  1. builtins → 2. external → 3. internal (`@/...`) → 4. parent/sibling → 5. index.

---

## 5. Dependencies & supply chain

- Pin versions; review `npm audit` in CI.
- Remove unused deps (they bloat the bundle and the attack surface).
- Prefer the libraries already in the stack (Radix, TanStack Query, Zustand, Axios, GSAP) over adding new ones.
- Heavy SDKs (three.js, etc.) stay lazy and out of the critical path (see `Performance.md` §3).

---

## 6. Testing — proof it works

- **Unit:** Vitest + RTL (`src/test/button.test.tsx`).
- **Accessibility:** `axe-core` in `src/test/axe.ts` + `a11y-*.test.tsx`.
- Tests run in the CI gate. A red pipeline means the PR is not ready — period.

---

## 7. CI gate (the enforcement point)

`.github/workflows/ci.yml` runs on every push/PR and must include:

```bash
npm ci
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run build
```

`package.json` exposes a single `check` script that runs typecheck + lint + format + tests. Never rely on self-discipline alone — the pipeline enforces it.

---

## 8. Security hardening

- **No secrets/client keys.** Anything in `import.meta.env` is public; keep real secrets server-side.
- **Input safety:** validate with `src/lib/validators.ts`; sanitize HTML; avoid `dangerouslySetInnerHTML`.
- Consider a **Content-Security-Policy** header at the host layer (allows only your domains + font CDNs). This also helps Lighthouse Best Practices and real security.
- **XSS:** never interpolate untrusted strings into `href`/`src` without validation; use Radix/React escaping.

---

## 9. Maintainability

- Comments only where the AGENTS rules allow (JSDoc on public APIs, section headers in complex files). No explanatory comments in business logic.
- Keep `AGENTS.md` as the source of truth; update it when conventions change.
- Consistent formatting via Prettier (`.prettierrc.json`) + EditorConfig; never hand-format.

---

## 10. Pre-merge best-practices checklist

- [ ] No `console.log`, `debugger`, or TODO/FIXME in ship code.
- [ ] No secrets committed; env vars typed in `vite-env.d.ts`.
- [ ] HTTPS for every external URL.
- [ ] No `document.write`, deprecated APIs, or `dangerouslySetInnerHTML` without sanitization.
- [ ] API domains follow the 3-file pattern; errors surfaced via `extractErrorMessage`.
- [ ] Pages thin (≤ 200 lines); components prop-driven.
- [ ] `npm run check` + `npm run build` green in CI.
- [ ] `npm audit` clean (or accepted with reason).
- [ ] Lighthouse Best Practices = 100.
