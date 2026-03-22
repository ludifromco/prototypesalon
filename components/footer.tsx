import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">{SITE.name}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier destination for luxury beauty and wellness treatments. Experience
              professional service with premium products and expert care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex gap-2 items-center">
              <MapPin size={20} className="text-primary" />
              Visit Us
            </h3>
            <p className="text-gray-300 text-sm">
              {SITE.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex gap-2 items-center">
              <Clock size={20} className="text-primary" />
              Hours
            </h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>{SITE.hours.weekday}</p>
              <p>{SITE.hours.saturday}</p>
              <p>{SITE.hours.sunday}</p>
            </div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex gap-2 items-center mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone size={18} />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {year} {SITE.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
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
