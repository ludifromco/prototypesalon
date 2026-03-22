import Hero from '@/components/hero'
import Header from '@/components/header'
import Services from '@/components/services'
import Gallery from '@/components/gallery'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Footer from '@/components/footer'
import StickyCTA from '@/components/sticky-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="pt-16 md:pt-20">
        <Hero />
      </div>

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <Footer />

      {/* Sticky CTA Button */}
      <StickyCTA />
    </main>
  )
}
