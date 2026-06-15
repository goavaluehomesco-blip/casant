'use client'

import { Hero } from '@/components/hero'
import { FeaturedWork } from '@/components/featured-work'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
