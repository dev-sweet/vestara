'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'
import { processSteps } from '@/lib/data'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { ArrowRight } from 'lucide-react'

const faqTeaser = [
  {
    question: 'How long does the entire process take?',
    answer: 'From initial inquiry to delivery, expect 80–90 days. Rush orders can reduce this.',
  },
  {
    question: 'What happens if the sample isn\'t right?',
    answer: 'We handle revision rounds efficiently. Most orders approve within 1–2 rounds.',
  },
  {
    question: 'Can I track my order during production?',
    answer: 'Yes. You receive weekly production reports with photo updates from our merchandising team.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function HowWeWorkPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center grain-overlay pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-obsidian/40 to-obsidian" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs uppercase tracking-[0.2em] mb-6"
          >
            Our Process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            Transparent. Structured.{' '}
            <span className="text-gold">Buyer-First.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every VESTARA order follows a proven 7-step process designed to eliminate
            uncertainty and deliver results.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            {/* Vertical dashed gold line */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-px w-px border-l-2 border-dashed border-gold/30" />

            {processSteps.map((step, index) => {
              const isOdd = index % 2 === 0
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className={`relative mb-16 last:mb-0 md:flex md:items-start md:justify-between ${
                    isOdd ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Mobile layout: all on right of timeline */}
                  {/* Desktop layout: alternating */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${isOdd ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    {/* Step number */}
                    <span className="font-[family-name:var(--font-cormorant)] text-[56px] leading-none text-gold/20 block">
                      {String(step.step).padStart(2, '0')}
                    </span>
                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] text-cream mb-2">
                      {step.title}
                    </h3>
                    {/* Timeline badge */}
                    <span className="text-xs uppercase tracking-wider text-gold mb-3 inline-block">
                      {step.timeline}
                    </span>
                    {/* Description */}
                    <p className="text-[15px] text-cream-muted leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {/* Deliverable */}
                    <p className="text-[11px] uppercase tracking-wider text-gold mb-1">
                      What you receive:
                    </p>
                    <p className="text-sm text-cream">
                      {step.deliverable}
                    </p>
                  </div>

                  {/* Gold dot on timeline */}
                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-gold border-4 border-obsidian z-10 mt-2 md:mt-8 shadow-[0_0_0_3px_rgba(201,168,76,0.2)]" />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 md:py-28 border-t border-gold-border">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-cream mb-8 text-center">
              Common Questions
            </h2>

            <Accordion type="single" collapsible className="mb-10">
              {faqTeaser.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`teaser-${i}`}
                  className="border-gold-border"
                >
                  <AccordionTrigger className="text-base text-cream font-normal hover:text-gold transition-colors hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-cream-muted leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center">
              <button
                onClick={() => navigate('faq')}
                className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors group"
              >
                Visit our FAQ page
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
