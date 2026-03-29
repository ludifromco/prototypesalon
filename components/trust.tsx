'use client'

import { ShieldCheck } from 'lucide-react'

export default function Trust() {
  return (
    <section
      id="trust"
      className="py-16 md:py-20 bg-background border-y border-border/60"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-accent mb-6">
          <ShieldCheck className="w-7 h-7" aria-hidden />
        </div>
        <h2
          id="trust-heading"
          className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-5 text-balance"
        >
          Your Satisfaction Comes First
        </h2>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
          We take pride in every service we provide. If you&apos;re not satisfied, we&apos;ll
          make it right.
        </p>
      </div>
    </section>
  )
}
