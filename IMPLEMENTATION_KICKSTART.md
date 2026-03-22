# La Beautique - Implementation Kickstart

## Project Overview
A luxury beauty salon landing page for "La Beautique" - featuring lash extensions, nails, and skincare services. Mobile-first, single-page design with smooth animations and premium aesthetic.

---

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Images:** Generated stock photos (GenerateImage tool)

---

## Brand Identity

### Color Palette
| Token | Color | Usage |
|-------|-------|-------|
| `--primary` | #C8A96A | Gold accents, CTAs, highlights |
| `--background` | #F5EDE6 | Page background (warm beige) |
| `--foreground` | #1A1A1A | Primary text (soft black) |
| `--muted` | #8B7355 | Secondary text, subtle elements |
| `--card` | #FFFFFF | Cards, elevated surfaces |

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Lato (sans-serif, clean, readable)

### Tone
Luxurious, confident, warm, and inviting. Premium but approachable.

---

## Page Structure

### 1. Header/Navigation
- Logo: "La Beautique" text (Playfair Display)
- Nav links (smooth scroll): Services | Pricing | Testimonials | Contact
- CTA Button: "Book Now" → `tel:+15551234567`
- Sticky on scroll with backdrop blur
- Mobile: Hamburger menu

### 2. Hero Section
- **Headline:** "Elevate Your Beauty Experience"
- **Subheadline:** "Premium lash extensions, nail artistry, and skincare treatments in a serene, luxurious setting."
- **CTA:** "Book Your Appointment" → `tel:+15551234567`
- **Visual:** Full-width background image (beauty/salon aesthetic)
- **Animation:** Fade-in on load

### 3. Services Section
- **Headline:** "Our Signature Services"
- 3 Service Cards:
  1. **Lash Extensions** - "Wispy, voluminous, or natural—custom lash sets tailored to your eye shape and style."
  2. **Nail Artistry** - "From classic manicures to intricate nail art, we bring your vision to life."
  3. **Skincare Treatments** - "Rejuvenating facials, peels, and treatments for radiant, glowing skin."
- **CTA:** "View Services & Book" → `tel:+15551234567`
- **Animation:** Scroll-triggered fade-up on cards

### 4. Before & After Section
- **Headline:** "Transformations That Speak for Themselves"
- Static side-by-side comparisons (3-4 pairs)
- Categories: Lashes, Nails, Skin
- **Animation:** Scroll-triggered reveal

### 5. Pricing Section
- **Headline:** "Transparent Pricing, Exceptional Value"
- 3 Pricing Cards (example packages):
  1. **Essentials** - $75 | Classic lash set OR gel manicure
  2. **Luxe** - $150 | Volume lash set + express facial
  3. **Ultimate Glam** - $250 | Full set lashes + nail art + signature facial
- **Shared CTA:** "Book Your Experience" → `tel:+15551234567`
- **Animation:** Scroll-triggered stagger on cards

### 6. Testimonials Section
- **Headline:** "What Our Clients Say"
- 4 Testimonials (all 5-star ratings):
  1. "Absolutely love my lashes! The team at La Beautique made me feel so pampered." — Jessica M.
  2. "Best nail salon I've ever been to. My gel set lasted 3 weeks with no chips!" — Aisha T.
  3. "The facial was heavenly. My skin has never looked better." — Rachel L.
  4. "I won't go anywhere else. The attention to detail is unmatched." — Danielle K.
- Add more if needed for layout balance
- **Animation:** Scroll-triggered fade-in

### 7. Contact/Footer Section
- **Headline:** "Visit Us"
- **Address:** 123 Glow Avenue, Suite 4B, Beauty City, CA 90210
- **Phone:** (555) 123-4567 (clickable tel: link)
- **Hours:** Mon–Sat: 9am – 7pm | Sun: 10am – 5pm
- Urgency text: "Limited spots available this week" (static)
- **CTA:** "Call to Book" → `tel:+15551234567`
- Copyright: © 2026 La Beautique. All rights reserved.

---

## Interactive Features

### Animations (Framer Motion)
- **Hero:** Fade-in + subtle slide-up on load
- **All Sections:** Scroll-triggered fade-up animations
- **Cards:** Staggered entrance animations
- **Buttons:** Scale on hover (1.02-1.05)
- **Nav:** Smooth backdrop blur transition on scroll

### Navigation
- Smooth scroll to sections using native CSS `scroll-behavior: smooth` or Framer Motion
- Section IDs: `#services`, `#pricing`, `#testimonials`, `#contact`

### Mobile Sticky CTA
- Appears after scrolling past hero section
- Hidden when near other visible CTAs (pricing, contact sections)
- Fixed bottom position with safe area padding
- "Book Now" → `tel:+15551234567`

---

## Images to Generate

| Image | Description | Location |
|-------|-------------|----------|
| Hero BG | Elegant beauty salon interior or woman with beautiful lashes/makeup | `/public/images/hero.jpg` |
| Lashes | Close-up of beautiful eyelash extensions | `/public/images/service-lashes.jpg` |
| Nails | Elegant manicured nails with nail art | `/public/images/service-nails.jpg` |
| Skincare | Woman receiving facial treatment or glowing skin | `/public/images/service-skincare.jpg` |
| Before/After 1 | Lash transformation | `/public/images/ba-lashes-before.jpg`, `/public/images/ba-lashes-after.jpg` |
| Before/After 2 | Nail transformation | `/public/images/ba-nails-before.jpg`, `/public/images/ba-nails-after.jpg` |
| Before/After 3 | Skin transformation | `/public/images/ba-skin-before.jpg`, `/public/images/ba-skin-after.jpg` |

---

## SEO & Metadata

```typescript
export const metadata: Metadata = {
  title: "La Beautique | Premium Lash Extensions, Nails & Skincare",
  description: "Experience luxury beauty services at La Beautique. Expert lash extensions, nail artistry, and rejuvenating skincare treatments in Beauty City, CA.",
  keywords: ["beauty salon", "lash extensions", "nail salon", "skincare", "facial", "Beauty City"],
  openGraph: {
    title: "La Beautique | Premium Beauty Salon",
    description: "Elevate your beauty experience with our signature lash, nail, and skincare services.",
    type: "website",
  },
}
```

---

## Performance Optimizations
- Next.js Image component with lazy loading
- Intersection Observer for scroll animations (load only when visible)
- Optimized image formats (WebP where possible)
- Minimal JavaScript bundle

---

## Accessibility
- WCAG-compliant color contrast (verify gold on beige, adjust if needed)
- Semantic HTML structure (header, main, section, footer)
- Skip-to-content link
- Proper heading hierarchy (h1 → h2 → h3)
- Focus states on all interactive elements
- Alt text on all images
- `aria-label` on icon-only buttons

---

## File Structure

```
app/
├── layout.tsx          # Root layout with fonts, metadata
├── page.tsx            # Main landing page (imports components)
├── globals.css         # Design tokens, custom styles
components/
├── header.tsx          # Navigation + logo
├── hero.tsx            # Hero section
├── services.tsx        # Services grid
├── before-after.tsx    # Transformation gallery
├── pricing.tsx         # Pricing cards
├── testimonials.tsx    # Client reviews
├── footer.tsx          # Contact + footer
├── mobile-cta.tsx      # Sticky mobile booking button
├── scroll-animation.tsx # Reusable scroll animation wrapper
public/
└── images/             # Generated stock photos
```

---

## Implementation Order

1. **Setup:** Update globals.css with design tokens, configure fonts in layout.tsx
2. **Generate Images:** Create all stock photos using GenerateImage tool
3. **Build Components:** Header → Hero → Services → Before/After → Pricing → Testimonials → Footer
4. **Add Animations:** Implement Framer Motion scroll animations
5. **Mobile CTA:** Add sticky mobile booking button with visibility logic
6. **Polish:** Final responsive tweaks, accessibility audit, performance check

---

## Contact Information (Final)
- **Phone:** (555) 123-4567
- **Address:** 123 Glow Avenue, Suite 4B, Beauty City, CA 90210
- **Hours:** Mon–Sat: 9am – 7pm | Sun: 10am – 5pm

---

*Ready for implementation. All CTAs link to tel:+15551234567*
