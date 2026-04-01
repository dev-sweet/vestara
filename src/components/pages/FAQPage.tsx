'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'
import { faqData } from '@/lib/data'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Group FAQs by category
const groupedFaqs: Record<string, typeof faqData> = {}
faqData.forEach((faq) => {
  if (!groupedFaqs[faq.category]) {
    groupedFaqs[faq.category] = []
  }
  groupedFaqs[faq.category].push(faq)
})

const categories = Object.keys(groupedFaqs)

export default function FAQPage() {
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
            Frequently Asked Questions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            Everything You Need{' '}
            <span className="text-gold">to Know</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Answers to the most common questions about sourcing with VESTARA.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: catIndex * 0.05 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-[13px] uppercase tracking-[0.15em] text-gold mb-4">
                {category}
              </h2>

              <Accordion type="single" collapsible className="border border-gold-border rounded-sm">
                {groupedFaqs[category].map((faq, i) => (
                  <AccordionItem
                    key={`${category}-${i}`}
                    value={`${category}-${i}`}
                    className="border-gold-border"
                  >
                    <AccordionTrigger className="text-base text-cream font-normal hover:text-gold hover:bg-gold/5 transition-colors hover:no-underline px-6 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-cream-muted leading-relaxed px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-gold-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-cream mb-8">
              Still have questions?
            </h2>
            <button
              onClick={() => navigate('contact')}
              className="inline-block bg-gold text-obsidian px-8 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
            >
              Contact our team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
