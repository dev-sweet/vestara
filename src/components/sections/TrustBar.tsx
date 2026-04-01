'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const signals = [
  { value: 15, suffix: '+', label: 'Factory Partners', useCounter: true },
  { value: 50, suffix: '', label: 'Pieces Min MOQ', useCounter: true },
  { value: null, text: 'USA · UK · EU · AUS', label: 'Ready to Ship', useCounter: false },
  { value: 14, suffix: '–21', label: 'Days for Samples', useCounter: true, displayAs: '14–21' },
  { value: null, text: 'ISO', label: 'Compliant QC', useCounter: false },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function TrustBar() {
  return (
    <section className="bg-navy border-y border-gold-border py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-wrap justify-center"
      >
        {signals.map((signal, index) => (
          <motion.div key={signal.label} variants={itemVariants} className="flex items-center">
            <div className="flex flex-col items-center text-center px-6 md:px-8">
              {signal.useCounter && signal.value !== null ? (
                <span className="font-[family-name:var(--font-cormorant)] text-[28px] md:text-[32px] text-gold font-light">
                  {signal.displayAs ? signal.displayAs : (
                    <>
                      <AnimatedCounter value={signal.value} duration={1500} />
                      {signal.suffix}
                    </>
                  )}
                </span>
              ) : (
                <span className="font-[family-name:var(--font-cormorant)] text-[28px] md:text-[32px] text-gold font-light">
                  {signal.text}
                </span>
              )}
              <span className="font-[family-name:var(--font-jost)] text-[11px] uppercase tracking-[0.12em] text-cream-muted mt-2">
                {signal.label}
              </span>
            </div>
            {index < signals.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-gold-border" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
