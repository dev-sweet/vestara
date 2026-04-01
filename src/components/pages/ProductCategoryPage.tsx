'use client'

import { motion } from 'framer-motion'
import { productCategories } from '@/lib/data'
import { useNavigation } from '@/lib/store'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

interface ProductCategoryPageProps {
  slug: string
}

export default function ProductCategoryPage({ slug }: ProductCategoryPageProps) {
  const { navigate } = useNavigation()
  const category = productCategories.find(c => c.slug === slug)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian">
        <div className="text-center px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[36px] text-cream mb-4">
            Category Not Found
          </h1>
          <p className="text-cream-muted text-[16px] mb-8">
            The category you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => navigate('products')}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-[14px] uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            Back to All Categories
          </button>
        </div>
      </div>
    )
  }

  const specRows = [
    { label: 'MOQ', value: category.moqRange },
    { label: 'Sample Lead Time', value: category.sampleLeadTime },
    { label: 'Production Lead Time', value: category.productionLeadTime },
    { label: 'Available Fabrics', value: category.availableFabrics.join(', ') },
    { label: 'GSM Range', value: category.gsmRange },
    { label: 'Certifications', value: category.certifications.join(', ') },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-obsidian overflow-hidden pt-16">
        {/* Background Image */}
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
          unoptimized
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${category.imageGradient} opacity-60 z-[1]`} />
        <div className="absolute inset-0 bg-obsidian/40 z-[1]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6"
          >
            {category.title}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-cormorant)] text-[36px] md:text-[64px] font-light text-cream leading-[1.1] mb-6"
          >
            {category.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-cream-muted text-[18px] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {category.shortDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 bg-gold text-obsidian px-8 py-3 text-[13px] uppercase tracking-wider font-medium hover:bg-gold-light transition-colors duration-300"
            >
              Request Quote for This Category
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Back to Products Link */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate('products')}
          className="inline-flex items-center gap-2 text-cream-muted hover:text-gold transition-colors text-[14px]"
        >
          <ArrowLeft size={16} />
          Back to All Categories
        </button>
      </div>

      {/* Product List Section */}
      <section className="py-20 md:py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[42px] font-light text-cream mb-10"
            >
              What We Can Make
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {category.products.map((product) => (
                <motion.div
                  key={product.name}
                  variants={fadeInUp}
                  className="bg-surface border border-gold-border p-6"
                >
                  <div className="w-10 h-1 bg-gold mb-4" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] text-cream mb-2">
                    {product.name}
                  </h3>
                  <p className="text-cream-muted text-[14px] leading-relaxed">
                    {product.specs}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left: Specs Table */}
            <motion.div variants={fadeInUp}>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[28px] md:text-[36px] font-light text-cream mb-8">
                Category Specifications
              </h2>
              <div className="border border-gold-border overflow-hidden">
                {specRows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col sm:flex-row border-b border-gold-border last:border-b-0 ${
                      i % 2 === 0 ? 'bg-surface/50' : 'bg-transparent'
                    }`}
                  >
                    <div className="sm:w-[180px] px-5 py-4 text-cream-muted text-[13px] uppercase tracking-wider shrink-0">
                      {row.label}
                    </div>
                    <div className="px-5 py-4 text-cream text-[14px]">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Inline CTA Card */}
            <motion.div variants={fadeInUp}>
              <div className="bg-surface border border-gold-border p-8 h-full flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-cormorant)] text-[28px] text-cream mb-4">
                  Interested in this category?
                </h3>
                <p className="text-cream-muted text-[15px] leading-relaxed mb-8">
                  Get a detailed quote for {category.title.toLowerCase()} production, including fabric options, pricing tiers, and timeline estimates.
                </p>
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-obsidian px-8 py-3 text-[13px] uppercase tracking-wider font-medium hover:bg-gold-light transition-colors duration-300 mb-8 self-start"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </button>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gold-border">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gold mb-1">Sample Lead Time</div>
                    <div className="text-cream text-[14px]">{category.sampleLeadTime}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gold mb-1">Production Lead Time</div>
                    <div className="text-cream text-[14px]">{category.productionLeadTime}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Factory Capability Note */}
      <section className="py-20 md:py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-[28px] md:text-[36px] font-light text-cream mb-6"
            >
              Factory Capability
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream-muted text-[16px] leading-[1.8] mb-8 max-w-3xl"
            >
              {category.factoryNote}
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-4 max-w-3xl">
              {category.factoryBullets.map((bullet) => (
                <motion.li
                  key={bullet}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="text-gold mt-1.5 shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="text-cream-muted text-[15px] leading-relaxed">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
