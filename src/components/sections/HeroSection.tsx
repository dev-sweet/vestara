'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'
import Image from 'next/image'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const navigate = useNavigation((s) => s.navigate)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover"
        unoptimized
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian/80" />
      <div
        className="absolute inset-0 grain-overlay"
        style={{ zIndex: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0, ease: 'easeOut' }}
          className="mt-10 font-[family-name:var(--font-jost)] text-[11px] uppercase tracking-[0.2em] text-gold mb-6"
        >
          Premium Apparel Sourcing
        </motion.p>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-cormorant)] text-[44px] md:text-[72px] lg:text-[88px] font-light leading-[1] text-cream">
          {['Bangladesh\'s Premier', 'Apparel Sourcing Partner', 'for Global Brands'].map((line, i) => (
            <motion.span
              key={line}
              className="block"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease: 'easeOut' }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="font-[family-name:var(--font-jost)] text-[18px] text-cream-muted max-w-[520px] mx-auto mt-8 leading-relaxed"
        >
          Private label manufacturing, end-to-end merchandising, and factory-direct sourcing — built for retailers, startups, and online sellers worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="flex gap-4 justify-center mt-10 flex-wrap"
        >
          <button
            onClick={() => navigate('contact')}
            className="bg-gold text-obsidian px-8 py-3.5 font-medium font-[family-name:var(--font-jost)] text-[14px] uppercase tracking-wider hover:bg-gold-light transition-colors duration-300 cursor-pointer"
          >
            Request a Quote
          </button>
          <button
            onClick={() => navigate('products')}
            className="border border-gold text-gold px-8 py-3.5 font-medium font-[family-name:var(--font-jost)] text-[14px] uppercase tracking-wider hover:bg-gold/10 transition-colors duration-300 cursor-pointer"
          >
            Explore Products
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="h-12 w-px bg-gold/50" />
        <div
          className="w-1.5 h-1.5 rounded-full bg-gold/70"
          style={{ animation: 'scroll-bounce 2s infinite' }}
        />
      </motion.div>
    </section>
  )
}
