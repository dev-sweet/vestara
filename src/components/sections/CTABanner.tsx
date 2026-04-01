'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'

export default function CTABanner() {
  const navigate = useNavigation((s) => s.navigate)

  return (
    <section className="relative overflow-hidden grain-overlay">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A2E44 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="font-[family-name:var(--font-cormorant)] text-[36px] md:text-[56px] font-light text-cream leading-tight">
            Ready to Source Your Next Collection?
          </h2>
          <p className="font-[family-name:var(--font-jost)] text-[18px] text-cream-muted mt-4 max-w-xl mx-auto">
            Tell us what you need. We&apos;ll handle the rest.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate('contact')}
              className="bg-gold text-obsidian px-10 py-4 font-[family-name:var(--font-jost)] text-[14px] uppercase tracking-wider font-medium hover:bg-gold-light transition-colors duration-300 cursor-pointer"
            >
              Request a Free Quote
            </button>
          </div>
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-[family-name:var(--font-jost)] text-[14px] text-gold mt-4 hover:text-gold-light transition-colors duration-300 group"
          >
            Or message us on WhatsApp <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
