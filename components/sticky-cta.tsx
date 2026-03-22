'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isNearCTA, setIsNearCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)

      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect()
        setIsNearCTA(rect.top < window.innerHeight * 0.5)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || isNearCTA) return null

  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed bottom-6 right-6 z-30 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all motion-safe:transform motion-safe:hover:scale-110 flex items-center gap-2"
    >
      <Phone size={20} aria-hidden />
      <span className="font-medium hidden sm:inline">Call Now</span>
    </a>
  )
}
