import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { OneTestimonial } from '@/components/OneTestimonial'
import { Pricing } from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Display - Gagnez votre marché public</title>
        <meta
          name="description"
          content="Répondez aux appels d'offres sereinement"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <OneTestimonial />
        {/* <Pricing /> */}
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
