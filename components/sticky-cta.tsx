'use client'

import { useEffect, useState } from 'react'
import { bookingTelHref } from '@/lib/site'

export default function StickyCTA() {
  const [showBar, setShowBar] = useState(false)
  const [hideNearBook, setHideNearBook] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 320)

      const bookSection = document.getElementById('book')
      if (bookSection) {
        const rect = bookSection.getBoundingClientRect()
        setHideNearBook(rect.top < window.innerHeight * 0.55)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showBar || hideNearBook) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-card/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Book now"
    >
      <a
        href={bookingTelHref()}
        className="flex w-full items-center justify-center rounded-xl bg-primary text-primary-foreground py-4 text-base font-semibold hover:bg-primary/90 transition-colors min-h-14 active:scale-[0.99]"
      >
        Book Now
      </a>
    </div>
  )
}
