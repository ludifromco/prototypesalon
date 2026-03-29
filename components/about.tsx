'use client'

import { bookingTelHref } from '@/lib/site'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-accent font-semibold text-sm tracking-wide">
          ABOUT US
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-8 text-balance">
          A salon that puts you first
        </h2>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-10">
          At Silk Beauty Salon, we provide a full range of beauty services in a clean,
          welcoming environment. Our goal is simple — help you look great and feel confident
          every time you visit.
        </p>
        <a
          href={bookingTelHref()}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-colors min-h-12 shadow-sm"
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}
