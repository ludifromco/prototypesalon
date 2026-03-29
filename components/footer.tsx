import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import { SITE, bookingTelHref } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card text-foreground border-t border-border py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-14">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">{SITE.name}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-service beauty in Sun City Center — hair, nails, lashes, facials, and waxing
              in a professional, welcoming space.
            </p>
            <a
              href={bookingTelHref()}
              className="inline-flex items-center justify-center mt-8 w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors min-h-11"
            >
              Book Appointment
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex gap-2 items-center text-foreground">
              <MapPin size={20} className="text-accent shrink-0" aria-hidden />
              Visit us
            </h3>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              {SITE.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex gap-2 items-center text-foreground">
              <Clock size={20} className="text-accent shrink-0" aria-hidden />
              Hours
            </h3>
            <div className="text-muted-foreground text-sm space-y-1.5">
              <p>{SITE.hours.weekday}</p>
              <p>{SITE.hours.saturday}</p>
              <p>{SITE.hours.sunday}</p>
            </div>
            <a
              href={bookingTelHref()}
              className="flex gap-2 items-center mt-6 text-primary font-semibold hover:text-primary/80 transition-colors min-h-11"
            >
              <Phone size={18} className="shrink-0" aria-hidden />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {year} {SITE.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm min-h-11 flex items-center"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm min-h-11 flex items-center"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
