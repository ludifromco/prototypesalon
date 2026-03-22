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
import { SITE } from '@/lib/site'

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label={`${SITE.name} — home`}
          >
            <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
              {SITE.name}
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center" aria-label="Main">
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Testimonials
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Pricing
            </button>
          </nav>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          id="mobile-navigation"
          side="right"
          hideClose
          className="md:hidden w-full sm:max-w-sm pt-14"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Links to main sections and phone number.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-3 px-1"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-3 px-1"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-3 px-1"
            >
              Testimonials
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium text-left py-3 px-1"
            >
              Pricing
            </button>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-4 bg-primary text-primary-foreground px-4 py-3 rounded-full font-medium text-sm hover:bg-primary/90 transition-colors text-center"
            >
              Call Now
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
