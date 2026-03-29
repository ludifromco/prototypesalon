'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { SITE, bookingTelHref } from '@/lib/site'

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'before-after', label: 'Results' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
] as const

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const closeIfDesktop = () => {
      if (mq.matches) setIsOpen(false)
    }
    mq.addEventListener('change', closeIfDesktop)
    return () => mq.removeEventListener('change', closeIfDesktop)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-card/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 md:h-[4.5rem]">
          <Link
            href="/"
            className="flex-shrink-0 min-w-0"
            aria-label={`${SITE.name} — home`}
          >
            <span className="text-lg sm:text-2xl md:text-3xl font-serif font-semibold text-foreground tracking-tight">
              {SITE.name}
            </span>
          </Link>

          <nav
            className="hidden lg:flex gap-6 xl:gap-8 items-center"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/90 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              href={bookingTelHref()}
              className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors whitespace-nowrap"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={bookingTelHref()}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-sm min-h-11"
            >
              Book Appointment
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href={bookingTelHref()}
              className="text-xs font-semibold text-primary px-2 py-2 min-h-11 flex items-center"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              className="p-2.5 text-foreground min-h-11 min-w-11 flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          id="mobile-navigation"
          side="right"
          hideClose
          className="lg:hidden w-full sm:max-w-sm pt-14"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Section links and booking.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors text-base font-medium text-left py-3.5 px-1 min-h-12"
              >
                {item.label}
              </button>
            ))}
            <a
              href={bookingTelHref()}
              className="text-sm text-muted-foreground py-2"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={bookingTelHref()}
              className="mt-4 bg-primary text-primary-foreground px-4 py-4 rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors text-center min-h-12 flex items-center justify-center"
            >
              Book Appointment
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
