'use client'

import { Star } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'

const testimonials = [
  {
    id: 1,
    attribution: 'Maria G.',
    rating: 5,
    text: 'I’ve been coming here for months and always leave feeling amazing.',
  },
  {
    id: 2,
    attribution: 'Jessica T.',
    rating: 5,
    text: 'Very professional and clean. Highly recommend!',
  },
  {
    id: 3,
    attribution: 'Ashley R.',
    rating: 5,
    text: 'Booking was easy and the results exceeded my expectations.',
  },
  {
    id: 4,
    attribution: 'Nicole P.',
    rating: 5,
    text: 'The team listens to what you want and delivers every time. My go-to salon.',
  },
  {
    id: 5,
    attribution: 'Rachel M.',
    rating: 5,
    text: 'Friendly staff, calm atmosphere, and my nails always look perfect.',
  },
  {
    id: 6,
    attribution: 'Danielle K.',
    rating: 5,
    text: 'I love that I can get my hair, lashes, and a facial in one visit.',
  },
]

export default function Testimonials() {
  const { visibleIds, setItemRef } = useInViewItemIds(testimonials.length)

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Star className="text-accent fill-accent" size={22} aria-hidden />
            <span className="text-accent font-semibold text-sm tracking-wide">
              TESTIMONIALS
            </span>
            <Star className="text-accent fill-accent" size={22} aria-hidden />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
            Loved by locals
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A few words from clients who book with us again and again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={setItemRef(index)}
              data-id={testimonial.id}
              className={`transition-all duration-700 ${
                visibleIds.has(testimonial.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-card rounded-xl border border-border/80 shadow-sm hover:shadow-md transition-shadow p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-accent fill-accent"
                      aria-hidden
                    />
                  ))}
                </div>

                <p className="text-sm md:text-base text-foreground mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <p className="text-sm font-semibold text-foreground border-t border-border pt-4">
                  — {testimonial.attribution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
