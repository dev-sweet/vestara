'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Inquiry & Consultation',
    description: 'Tell us what you need',
  },
  {
    number: '02',
    title: 'Factory Matching & Sampling',
    description: 'We find the right fit',
  },
  {
    number: '03',
    title: 'Production & QC',
    description: 'Managed end-to-end',
  },
  {
    number: '04',
    title: 'Delivery & Documentation',
    description: 'Shipped to your door',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function ProcessOverview() {
  const navigate = useNavigation((s) => s.navigate)

  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="HOW IT WORKS"
          heading="From Inquiry to Delivery"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row gap-4 md:gap-0"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="flex-1 relative">
              {/* Connector line on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-px w-1/2 border-t border-dashed border-gold/40" />
              )}

              <div className="text-center relative py-6">
                <span className="font-[family-name:var(--font-cormorant)] text-[64px] text-gold/15 font-light leading-none select-none">
                  {step.number}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[20px] md:text-[22px] text-cream mt-2">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-jost)] text-[14px] text-cream-muted mt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('how-we-work')}
            className="font-[family-name:var(--font-jost)] text-[14px] text-gold hover:text-gold-light transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            See Full Process <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
