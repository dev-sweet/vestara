'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'
import AboutPage from '@/components/pages/AboutPage'
import ProductsPage from '@/components/pages/ProductsPage'
import ProductCategoryPage from '@/components/pages/ProductCategoryPage'
import ServicesPage from '@/components/pages/ServicesPage'
import HowWeWorkPage from '@/components/pages/HowWeWorkPage'
import QualityPage from '@/components/pages/QualityPage'
import FAQPage from '@/components/pages/FAQPage'
import ContactPage from '@/components/pages/ContactPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ProductCategoriesPreview from '@/components/sections/ProductCategoriesPreview'
import WhyVestara from '@/components/sections/WhyVestara'
import ProcessOverview from '@/components/sections/ProcessOverview'
import BuyerMarkets from '@/components/sections/BuyerMarkets'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductCategoriesPreview />
      <WhyVestara />
      <ProcessOverview />
      <BuyerMarkets />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } }
}

export default function Home() {
  const { currentPage, categorySlug } = useNavigation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (categorySlug ? `-${categorySlug}` : '')}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'products' && <ProductsPage />}
            {currentPage === 'product-category' && <ProductCategoryPage slug={categorySlug || ''} />}
            {currentPage === 'services' && <ServicesPage />}
            {currentPage === 'how-we-work' && <HowWeWorkPage />}
            {currentPage === 'quality' && <QualityPage />}
            {currentPage === 'faq' && <FAQPage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
