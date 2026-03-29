/** Central contact and business copy — replace URL with production domain when live. */
export const SITE = {
  name: 'Silk Beauty Salon',
  legalName: 'Silk Beauty Salon Full Service',
  phoneTel: '+18136333302',
  phoneDisplay: '+1 (813) 633-3302',
  streetAddress: '916 N Pebble Beach Blvd',
  addressLocality: 'Sun City Center',
  addressRegion: 'FL',
  postalCode: '33573',
  addressCountry: 'US',
  addressLines: [
    '916 N Pebble Beach Blvd',
    'Sun City Center, FL 33573',
  ],
  url: 'https://silkbeautysalon.com',
  bookingSectionId: 'book',
  hours: {
    weekday: 'Mon–Fri: 10am–7pm',
    saturday: 'Saturday: 10am–6pm',
    sunday: 'Sunday: 12pm–5pm',
  },
} as const

export function bookingTelHref() {
  return `tel:${SITE.phoneTel}`
}

export function bookingHashHref() {
  return `#${SITE.bookingSectionId}`
}
