'use client'

import { Star } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    service: 'Lash Extensions',
    rating: 5,
    text: 'La Beautique transformed my look! The lash extensions are absolutely gorgeous and the team is so professional. I cannot recommend them enough!',
  },
  {
    id: 2,
    name: 'Jessica Chen',
    service: 'Skincare Treatment',
    rating: 5,
    text: 'Finally found a salon that understands quality! My skin has never looked better. The skincare treatments are worth every penny.',
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    service: 'Nail Art',
    rating: 5,
    text: 'The nail artists here are pure artists. My custom designs always turn out better than I imagined. Best beauty experience ever!',
  },
  {
    id: 4,
    name: 'Emily Thompson',
    service: 'Complete Beauty Package',
    rating: 5,
    text: 'I booked multiple services and was blown away by the luxury experience. The attention to detail is incredible. A true gem!',
  },
]

export default function Testimonials() {
  const { visibleIds, setItemRef } = useInViewItemIds(testimonials.length)

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-primary fill-primary" size={24} />
            <span className="text-primary font-semibold">TESTIMONIALS</span>
            <Star className="text-primary fill-primary" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from our happy clients about their experience at La Beautique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>

                <p className="text-sm text-foreground mb-6 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
