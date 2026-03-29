import { bookingTelHref } from '@/lib/site'

export default function FinalCta() {
  return (
    <section
      id="book"
      className="py-20 md:py-28 bg-foreground text-background"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-5 text-balance"
        >
          Ready to Book Your Appointment?
        </h2>
        <p className="text-lg text-white/80 mb-10 text-pretty leading-relaxed">
          Secure your spot today.
        </p>
        <a
          href={bookingTelHref()}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-12 py-4 md:py-[1.125rem] rounded-full font-semibold text-lg hover:bg-primary/90 transition-all min-h-14 shadow-lg"
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}
