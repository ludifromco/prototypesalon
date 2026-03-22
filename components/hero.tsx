'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SITE } from '@/lib/site'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-lashes.jpg"
          alt="La Beautique — premium beauty services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-pretty">
            Elevate Your Beauty
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-pretty">
            Experience luxury beauty treatments designed to enhance your natural radiance. Professional nails, lashes, skincare, and more.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex bg-primary text-primary-foreground px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 motion-safe:animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
