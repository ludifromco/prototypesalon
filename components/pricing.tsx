'use client'

import { Check } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'
import { SITE } from '@/lib/site'

const pricingTiers = [
  {
    id: 1,
    name: 'Manicure',
    price: '$35',
    description: 'Classic or gel manicure',
    features: ['Professional nail care', 'Cuticle treatment', 'Polish or gel finish'],
  },
  {
    id: 2,
    name: 'Lash Extensions',
    price: '$80',
    description: 'Full set of premium lashes',
    features: ['Classic or volume lashes', 'Premium quality materials', '4-6 week durability'],
  },
  {
    id: 3,
    name: 'Facial Treatment',
    price: '$95',
    description: 'Luxury skincare facial',
    features: ['Custom facial blend', 'Skin analysis', 'Hydrating mask', 'Eye & lip treatment'],
  },
  {
    id: 4,
    name: 'Waxing Service',
    price: '$45',
    description: 'Professional hair removal',
    features: ['Gentle waxing', 'Premium products', '4-6 week smoothness'],
  },
]

export default function Pricing() {
  const { visibleIds, setItemRef } = useInViewItemIds(pricingTiers.length)

  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm md:text-base">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Investment in Your Beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our selection of premium beauty services. Appointment availability varies by week—call or book ahead for your preferred time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              ref={setItemRef(index)}
              data-id={tier.id}
              className={`transition-all duration-700 ${
                visibleIds.has(tier.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-8 h-full flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    {tier.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-foreground"
                    >
                      <Check size={18} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors text-center block"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            First-time clients receive a welcome offer—mention it when you book. We&apos;re happy to answer questions about any service.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
          >
            Book Your Appointment Today
          </a>
        </div>
      </div>
    </section>
  )
}
