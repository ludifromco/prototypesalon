'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { bookingTelHref } from '@/lib/site'

const faqs = [
  {
    q: 'How do I book?',
    a: 'Call us at the number on this page. We’ll find a time that works and confirm your service.',
  },
  {
    q: 'Do you accept walk-ins?',
    a: 'Walk-ins are welcome when we have availability. Calling ahead is the best way to secure your preferred time.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer hair, nails, lashes, facials, and waxing — full-service beauty in one location.',
  },
  {
    q: 'How long do appointments take?',
    a: 'It depends on the service. Most visits range from 30 minutes to a few hours; we’ll give you a time estimate when you book.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Please give us at least 24 hours’ notice if you need to cancel or reschedule so we can offer the slot to another guest.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-4 text-balance">
            Common questions
          </h2>
          <p className="text-muted-foreground text-pretty">
            Straight answers so you can book with confidence.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-card rounded-xl border border-border/80 px-2 md:px-4 shadow-sm">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="px-2">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <a
            href={bookingTelHref()}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-colors min-h-12"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
