/** Central contact and business copy — replace with production values. */
export const SITE = {
  name: 'La Beautique',
  phoneTel: '+15552345678',
  phoneDisplay: '(555) 234-5678',
  streetAddress: '1280 Union Square',
  addressLocality: 'San Francisco',
  addressRegion: 'CA',
  postalCode: '94109',
  addressCountry: 'US',
  addressLines: ['1280 Union Square', 'San Francisco, CA 94109'],
  url: 'https://labeautique.com',
  bookingSectionId: 'pricing',
  hours: {
    weekday: 'Mon–Fri: 10am–7pm',
    saturday: 'Saturday: 10am–6pm',
    sunday: 'Sunday: 12pm–5pm',
  },
} as const

export function bookingHashHref() {
  return `#${SITE.bookingSectionId}`
}
