import Hero from '@/components/hero'
import Header from '@/components/header'
import Services from '@/components/services'
import Gallery from '@/components/gallery'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import About from '@/components/about'
import Faq from '@/components/faq'
import Trust from '@/components/trust'
import FinalCta from '@/components/final-cta'
import Footer from '@/components/footer'
import StickyCTA from '@/components/sticky-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />

      <div className="pt-16 md:pt-20">
        <Hero />
      </div>

      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <About />
      <Faq />
      <Trust />
      <FinalCta />
      <Footer />

      <StickyCTA />
    </main>
  )
}
