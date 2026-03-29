/**
 * Remote image URLs (Unsplash). All IDs verified HTTP 200 — replace if a link breaks.
 * Docs: https://unsplash.com/documentation#hotlinking
 */
const q80 = 'auto=format&fit=crop&q=80'

export const IMAGES = {
  hero: `https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=85&w=1920`,
  og: `https://images.unsplash.com/photo-1560066984-138dadb4c035?${q80}&w=1200&h=630`,
  services: {
    hair: `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?${q80}&w=800`,
    nails: `https://images.unsplash.com/photo-1604654894610-df63bc536371?${q80}&w=800`,
    lashes: `https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?${q80}&w=800`,
    facials: `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?${q80}&w=800`,
    waxing: `https://images.unsplash.com/photo-1540555700478-4be289fbecef?${q80}&w=800`,
  },
  beforeAfter: {
    hairBefore: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?${q80}&w=800`,
    hairAfter: `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?${q80}&w=800`,
    skinBefore: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?${q80}&w=800`,
    skinAfter: `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?${q80}&w=800`,
    lashesBefore: `https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?${q80}&w=800`,
    lashesAfter: `https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?${q80}&w=800`,
  },
} as const
