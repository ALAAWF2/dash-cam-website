
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import WhyChoose from '@/components/why-choose'
import Gallery from '@/components/gallery'
import Reviews from '@/components/reviews'
import Pricing from '@/components/pricing'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import FloatingElements from '@/components/floating-elements'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <Hero />
      <Features />
      <WhyChoose />
      <Gallery />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingElements />
    </main>
  )
}
