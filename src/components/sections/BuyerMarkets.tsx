'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { countries } from '@/lib/data'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function BuyerMarkets() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="WE SERVE BUYERS FROM"
          heading="Global Reach, Bangladesh Expertise"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-border hover:border-gold-border-strong hover:bg-gold/5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-lg">{country.flag}</span>
              <span className="font-[family-name:var(--font-jost)] text-[14px] text-cream">
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-[family-name:var(--font-jost)] text-[16px] text-cream-muted text-center max-w-3xl mx-auto leading-relaxed"
        >
          Our documentation, compliance support, and communication standards are aligned with buyer requirements across North America, Europe, and the Asia-Pacific region.
        </motion.p>
      </div>
    </section>
  )
}
