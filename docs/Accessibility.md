# Accessibility — World-Grade Playbook

**Goal:** Lighthouse Accessibility **100**, and a site that is genuinely usable by everyone (keyboard, screen reader, low-vision, reduced-motion, motor-impaired).

Reference implementation: the current portfolio. File paths are cited throughout.

---

## 1. Structural accessibility (must-haves)

### 1.1 Skip link

The first focusable element on every page: `src/MainLayout.tsx`

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-50 ...">
  Skip to content
</a>
<main id="main-content" tabIndex={-1}>
```

### 1.2 Landmarks & semantic HTML

- Use real `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, and headings. Never fake a button with `<div onClick>`.
- `SeoUpdater`/root sets `lang="en"` on `<html>` (and `dir="ltr"`). For RTL locales, flip to `dir="rtl"` and use logical properties (`ms-*` / `me-*`, `start`/`end`).

### 1.3 Visible focus

`src/index.css` enforces a global focus ring:

```css
:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 2px;
}
```

Every keyboard-focused element shows it. Never remove `outline` without replacing it.

---

## 2. Motion & vestibular safety

`src/index.css` collapses animation for users who ask:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

And every JS animation guards at the top:

```ts
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
```

This is applied in `Hero.tsx`, `HeroHint.tsx`, `HeroHoverCue.tsx`, `smoothScroll.ts`, and the `LazySection` in `Home.tsx`.

---

## 3. Keyboard & focus management

- All interactive elements are real `<button>` / `<a>` (Radix primitives provide accessible dialog/select/tabs behavior for free — prefer them).
- The hero name is focusable and reveals its surprise on `focus` as well as `hover`: `src/components/ui/torn-text.tsx` adds `tabIndex={0}`, `aria-label={text}`, and `onFocus`/`onBlur` handlers mirroring `onMouseEnter`/`onMouseLeave`.
- Modals/menus must trap focus and close on `Escape` (Radix `Dialog` does this).
- Touch targets are ≥ 44×44 px.

---

## 4. Images, media & text alternatives

- **Informative images:** meaningful `alt`. The About photos and project cards pass real context through surrounding text; use `alt=""` only when the text already conveys it.
- **Decorative images:** `alt=""` + `aria-hidden="true"`. The hero paper, clouds, plants, fungi, and the hint/tape overlays are all `aria-hidden`:
  - `Hero.tsx`: paper `alt="" aria-hidden`.
  - `HeroHint.tsx` / `HeroHoverCue.tsx`: root `aria-hidden="true"` (purely decorative cues).
- `FadeImage` always carries an `alt` prop — never omit it.

---

## 5. Forms & errors

- Every control has a visible `<Label>` or `aria-label`.
- Errors are announced: `role="alert"` + `aria-describedby` pointing at the error text.
- Use `extractErrorMessage` to surface failures to the user — never a silent `catch {}`.

---

## 6. Color & contrast

- Maintain ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI components.
- The design tokens in `src/index.css` (`@theme inline`) expose `foreground`, `muted-foreground`, `accent-sky`, etc. Verify contrast in both light and dark.
- Support `forced-colors` (Windows High Contrast) — do not hard-code backgrounds that hide borders.
- The hero hint uses `dark:` variants so text contrast holds in both themes (see `HeroHint.tsx`).

---

## 7. Automated a11y enforcement (the safety net)

The repo runs `axe-core` in tests: `src/test/axe.ts` + `a11y-*.test.tsx`. Pattern:

```tsx
import { axe } from './axe'
import { render } from '@testing-library/react'

it('has no serious a11y violations', async () => {
  const { container } = render(<Component />)
  expect(await axe(container)).toHaveNoViolations()
})
```

Rules:

- `IS_REACT_ACT_ENVIRONMENT` is set in `src/test/setup-env.ts` (must stay first in `setupFiles`).
- `waitFor` must not be nested inside `act()`.

---

## 8. Pre-merge accessibility checklist

- [ ] Skip link present and works.
- [ ] `<main id="main-content" tabIndex={-1}>` exists; all content inside.
- [ ] `lang` set on `<html>`; `dir` correct for locale.
- [ ] `:focus-visible` outline visible on every control.
- [ ] `prefers-reduced-motion` collapses all animation (CSS + JS).
- [ ] All interactive elements are keyboard-operable; focus order is logical.
- [ ] Informative images have meaningful `alt`; decorative have `alt=""` + `aria-hidden`.
- [ ] Forms have labels; errors use `role="alert"` / `aria-describedby`.
- [ ] Color contrast ≥ 4.5:1 (light + dark).
- [ ] `axe` tests pass with no violations.
- [ ] Lighthouse Accessibility = 100.
