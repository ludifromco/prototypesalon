# Implementation plan — La Beautique marketing site

This document captures a full-site review: visual/UX issues, technical debt, performance, accessibility, and content. It includes **removing the before/after drag slider** from the gallery as requested.

---

## Priority 0 — Broken or misleading experience

### 1. Missing images and metadata assets

**What’s wrong:** `public/` currently contains only `icon.svg`, while the app references many static files that are not present:

- Hero: `/hero-lashes.jpg`
- Services: `/service-nails.jpg`, `/service-lashes.jpg`, `/service-skincare.jpg`, `/service-waxing.jpg`
- Gallery: `/before-after-nails-before.jpg`, `/before-after-nails-after.jpg`, `/before-after-skin-before.jpg`, `/before-after-skin-after.jpg`
- `layout.tsx` metadata: `/og-image.jpg`, `/icon-light-32x32.png`, `/icon-dark-32x32.png`, `/apple-icon.png`

**Impact:** Broken images in the UI, broken social previews, and incomplete PWA/browser icons.

**Plan:**

1. Add optimized JPEG/WebP assets at the paths above (or change paths to match real filenames).
2. Run `next build` and fix any remaining 404s for static files.
3. Optionally generate a single OG image (1200×630) aligned with brand colors.

### 2. Remove the before/after sliding interaction

**Where it lives:** `components/gallery.tsx` — `BeforeAfterSlider` (mouse/touch move over the whole card, clip reveal, handle, Before/After labels).

**What to do:**

1. Delete the `BeforeAfterSlider` component and all slider state/handlers.
2. Replace each gallery item with a **static layout**, for example:
   - **Option A:** Two images side by side (Before | After) with clear captions — no interaction.
   - **Option B:** Single “result” image per item if you want a cleaner, less clinical look.
3. Update the section subtitle (currently: “Drag the slider…”) to match the new pattern.
4. Keep or simplify the scroll-in animation on gallery cards; avoid implying a slider in copy.

### 3. TypeScript build errors ignored

**Where:** `next.config.mjs` sets `typescript.ignoreBuildErrors: true`.

**Impact:** Type errors can ship to production unnoticed.

**Plan:** Remove this flag after fixing any reported errors, and treat `npm run build` as the source of truth.

---

## Priority 1 — UX, polish, and trust

### 4. Duplicate heading level (`<h1>`)

**What’s wrong:** The site brand in `components/header.tsx` uses `<h1>`, and `components/hero.tsx` also uses `<h1>` for the main headline. That violates the usual “one `<h1>` per page” pattern and hurts SEO/accessibility.

**Plan:** Change the header logo to a `<span>` or `<p>` with appropriate styling, or use `<p className="...">` with `aria-label` on the home link. Keep a single `<h1>` in the hero.

### 5. Placeholder business data

**What’s wrong:** Phone `+1234567890`, generic address, footer copyright `© 2024`, and “Limited spots available this week” repeated in pricing read as template filler.

**Plan:** Replace with real contact details, update copyright year (or compute it in code), and vary or soften urgency copy so it stays credible.

### 6. Footer legal links go nowhere

**What’s wrong:** Privacy Policy and Terms use `href="#"`.

**Plan:** Add real routes or external URLs, or remove until pages exist (avoid empty hash links).

### 7. “Learn More” that only calls

**What’s wrong:** In `components/services.tsx`, “Learn More” is a `tel:` link — users expect detail or a modal/section, not an immediate dial.

**Plan:** Rename to “Book” / “Call to book”, link to `#pricing` or a booking URL, or add a short expandable description per service.

### 8. Sticky call button animation

**What’s wrong:** `components/sticky-cta.tsx` uses `animate-bounce` on a fixed CTA. It draws attention but can feel noisy and may conflict with `prefers-reduced-motion`.

**Plan:** Remove bounce or gate it behind `(prefers-reduced-motion: no-preference)`; prefer a subtle shadow/hover state.

### 9. Mobile menu accessibility

**What’s wrong:** Menu toggle has `aria-label` but no `aria-expanded`; no focus trap when open; no Escape-to-close pattern.

**Plan:** Set `aria-expanded={isOpen}`, consider `radix` Dialog/Sheet pattern already in the UI kit, or add focus management and Escape handling.

---

## Priority 2 — Performance and configuration

### 10. Next/Image optimization disabled

**Where:** `next.config.mjs` — `images: { unoptimized: true }`.

**Impact:** Larger payloads, no automatic sizing/format negotiation (when using the default loader).

**Plan:** Once real images exist in `public/` (or a remote CDN), set `unoptimized: false` and add `sizes` on `fill` images (hero, cards, gallery) for responsive loading.

### 11. Fonts vs Next.js `next/font`

**What’s wrong:** `app/layout.tsx` loads Playfair and Inter with `variable: '--font-playfair'` / `'--font-inter'`, but `app/globals.css` `@theme inline` hardcodes `--font-sans` / `--font-serif` as string family names. The CSS variables from `next/font` are not wired into the Tailwind theme.

**Plan:** Point `--font-sans` and `--font-serif` at `var(--font-inter)` and `var(--font-playfair)` (or the exact variable names Next emits) so body and headings use the self-hosted files.

### 12. Redundant viewport meta

**What’s wrong:** `layout.tsx` exports `viewport` and also includes `<meta name="viewport" ... />` in `<head>`.

**Plan:** Rely on the `viewport` export only; remove the duplicate tag.

---

## Priority 3 — Codebase hygiene (not user-visible but worth fixing)

### 13. Unused duplicate mobile menu

**What’s wrong:** `components/mobile-menu.tsx` duplicates header mobile behavior but is not imported anywhere; `header.tsx` implements its own menu.

**Plan:** Delete `mobile-menu.tsx` or refactor `header.tsx` to use one shared component.

### 14. Duplicate global CSS

**What’s wrong:** `styles/globals.css` exists with a different token set (e.g. Geist) than `app/globals.css` (beige/gold salon theme). The app only imports `app/globals.css`.

**Plan:** Remove `styles/globals.css` if unused, or document why it exists to avoid accidental imports.

### 15. Unused theme infrastructure

**What’s wrong:** `next-themes` and `components/theme-provider.tsx` are present; `.dark` tokens exist in `app/globals.css`, but the root layout does not wrap with `ThemeProvider` and there is no toggle.

**Plan:** Either wire dark mode (header-safe colors, toggle) or remove unused deps and simplify CSS.

### 16. Repeated IntersectionObserver logic

**What’s wrong:** The same observer pattern is copy-pasted in `services.tsx`, `gallery.tsx`, `testimonials.tsx`, and `pricing.tsx`.

**Plan:** Extract a small `useInViewOnce` hook or a wrapper component to reduce bugs and bundle size.

### 17. Package metadata

**What’s wrong:** `package.json` `"name": "my-project"`.

**Plan:** Rename to something like `salonprototype` or `labeautique-site` for clarity in tooling.

---

## Priority 4 — Optional enhancements

### 18. Structured data (LocalBusiness)

Add JSON-LD in `layout.tsx` or a dedicated component with address, phone, hours, and `url` matching production.

### 19. Booking flow

Replace or supplement `tel:` with a real booking link (Square, Fresha, Cal.com, etc.) and align all CTAs.

### 20. Gallery content strategy

After removing the slider, consider alt text that describes results (not just “Before/After”), and consistent aspect ratios across items.

---

## Suggested implementation order

1. **Add real image/icon assets** (or update paths) so the site is not visually broken.
2. **Remove `BeforeAfterSlider`** and replace with static before/after or single-image gallery; refresh copy.
3. **Fix `<h1>` duplication** and **footer/legal/placeholder** content.
4. **Tighten CTAs** (sticky CTA motion, “Learn More” labeling).
5. **Enable TypeScript in build** and fix errors.
6. **Wire fonts**, **image optimization**, **remove duplicate/unused files**.
7. **Accessibility** pass on mobile nav and focus states.
8. Optional: SEO JSON-LD, booking integration, dark mode decision.

---

## File reference (quick map)

| Area        | Main files |
|------------|------------|
| Gallery / slider removal | `components/gallery.tsx` |
| Hero       | `components/hero.tsx` |
| Header / nav | `components/header.tsx` |
| Services   | `components/services.tsx` |
| Pricing    | `components/pricing.tsx` |
| Testimonials | `components/testimonials.tsx` |
| Footer     | `components/footer.tsx` |
| Sticky CTA | `components/sticky-cta.tsx` |
| Global styles & theme | `app/globals.css`, `app/layout.tsx` |
| Build config | `next.config.mjs` |
| Static assets | `public/` |

This plan is intentionally actionable: each item states what looks wrong, why it matters, and what to change without expanding scope beyond the marketing one-pager.
