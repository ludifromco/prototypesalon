'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'
import { bookingHashHref } from '@/lib/site'

const services = [
  {
    id: 1,
    name: 'Professional Nails',
    description: 'Manicures, pedicures, and custom nail art designs',
    image: '/service-nails.jpg',
  },
  {
    id: 2,
    name: 'Lash Extensions',
    description: 'Premium lash extensions and semi-permanent treatments',
    image: '/service-lashes.jpg',
  },
  {
    id: 3,
    name: 'Skincare',
    description: 'Professional facials and luxury skincare treatments',
    image: '/service-skincare.jpg',
  },
  {
    id: 4,
    name: 'Waxing',
    description: 'Hair removal and smooth skin treatments',
    image: '/service-waxing.jpg',
  },
]

export default function Services() {
  const { visibleIds, setItemRef } = useInViewItemIds(services.length)

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary" size={24} />
            <span className="text-primary font-semibold">OUR SERVICES</span>
            <Sparkles className="text-primary" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Luxury Beauty Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our curated selection of premium beauty services designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={setItemRef(index)}
              data-id={service.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleIds.has(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-full">
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={bookingHashHref()}
                    className="w-full bg-primary text-primary-foreground py-2 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors text-center block"
                  >
                    Book this service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
