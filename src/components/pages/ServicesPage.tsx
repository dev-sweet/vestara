'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import { useNavigation } from '@/lib/store'
import {
  Ruler,
  Building2,
  ClipboardList,
  ShieldCheck,
  Tag,
  Truck,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'

const iconMap: Record<string, LucideIcon> = {
  ruler: Ruler,
  factory: Building2,
  clipboard: ClipboardList,
  shield: ShieldCheck,
  tag: Tag,
  truck: Truck,
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export default function ServicesPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-obsidian overflow-hidden pt-16">
        {/* Background Image */}
        <Image
          src="/images/about/product-development.png"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian/90" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-cormorant)] text-[42px] md:text-[56px] font-light text-cream leading-[1.1] mb-6"
          >
            End-to-End Sourcing Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-cream-muted text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed"
          >
            We don&apos;t just find factories. We manage the entire supply chain.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Building2
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-surface border border-gold-border hover:border-gold-border-strong p-8 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <Icon
                    className="text-gold mb-4"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[24px] text-cream mb-3">
                    {service.title}
                  </h3>
                  <p className="text-cream-muted text-[15px] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="text-[11px] uppercase text-gold tracking-wider mb-3">
                    Includes:
                  </div>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="text-cream-muted text-[14px] flex items-start gap-2"
                      >
                        <span className="text-gold mt-0.5 shrink-0">&mdash;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[42px] font-light text-cream mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream-muted text-[16px] max-w-lg mx-auto leading-relaxed mb-10"
            >
              Tell us about your project and we&apos;ll match you with the right factories, the right fabrics, and the right timeline.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 bg-gold text-obsidian px-8 py-3 text-[13px] uppercase tracking-wider font-medium hover:bg-gold-light transition-colors duration-300"
              >
                Request a Quote
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
