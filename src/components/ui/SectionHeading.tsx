'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  heading: string
  className?: string
}

export default function SectionHeading({ label, heading, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <span className="inline-block font-[family-name:var(--font-jost)] text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
        {label}
      </span>
      <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[44px] lg:text-[52px] font-light text-cream leading-tight">
        {heading}
      </h2>
      <div className="mt-6 mx-auto w-16 h-px bg-gold/40" />
    </motion.div>
  )
}
