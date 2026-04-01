'use client'

import { motion } from 'framer-motion'
import { Scale, Shield, Settings } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const values = [
  {
    icon: Scale,
    title: 'Low MOQ, High Flexibility',
    description: 'Start from 50 pieces per style. Scale as your brand grows. We work with startups and established retailers equally.',
  },
  {
    icon: Shield,
    title: 'Vetted Factory Network',
    description: 'Every factory in our network is audited for compliance, capacity, and quality standards before we work with them.',
  },
  {
    icon: Settings,
    title: 'Full-Service Merchandising',
    description: 'From tech pack to shipment, we manage the entire production cycle — so you can focus on selling.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function WhyVestara() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="WHY VESTARA"
          heading="A Sourcing Partner Built for the Modern Buyer"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((item) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-surface border border-gold-border hover:border-gold-border-strong rounded-sm p-8 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="w-12 h-1 bg-gold mb-6" />
                <IconComponent size={24} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-cormorant)] text-[24px] text-cream mb-3">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-jost)] text-[15px] text-cream-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
