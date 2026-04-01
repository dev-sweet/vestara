'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/data'
import { Star } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="TESTIMONIALS"
          heading="What Our Buyers Say"
          description="Trusted by brands and retailers across six continents — hear directly from the people who source with us."
        />

        {/* Featured testimonial (first one, larger) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-surface border border-gold-border rounded-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Photo side */}
              <div className="relative h-[280px] lg:h-full min-h-[320px]">
                <Image
                  src={testimonials[0].photo}
                  alt={testimonials[0].name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:hidden" />
                {/* Category badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="inline-block bg-gold/90 text-obsidian text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-sm">
                    {testimonials[0].category}
                  </span>
                </div>
              </div>
              {/* Content side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <span className="font-[family-name:var(--font-cormorant)] italic text-[48px] text-gold/20 leading-none block mb-3">
                  &ldquo;
                </span>
                <p className="font-[family-name:var(--font-jost)] text-[16px] text-cream leading-[1.8] mb-6">
                  {testimonials[0].quote}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gold-border">
                  <Image
                    src={testimonials[0].photo}
                    alt={testimonials[0].name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border border-gold/40"
                    unoptimized
                  />
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-[18px] text-cream">
                      {testimonials[0].name}
                    </p>
                    <p className="font-[family-name:var(--font-jost)] text-[12px] text-cream-muted">
                      {testimonials[0].title}, {testimonials[0].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Remaining testimonials grid (2x2) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(1).map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="bg-surface border border-gold-border rounded-sm p-6 md:p-8 flex flex-col hover:border-gold-border-strong transition-all duration-300 group"
            >
              {/* Header: photo + name */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-cormorant)] text-[18px] text-cream truncate">
                    {testimonial.name}
                  </p>
                  <p className="font-[family-name:var(--font-jost)] text-[12px] text-cream-muted truncate">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <span className="font-[family-name:var(--font-cormorant)] italic text-[36px] text-gold/20 leading-none block mb-2">
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-jost)] text-[14px] text-cream leading-[1.75] mb-5 flex-1">
                {testimonial.quote}
              </p>

              {/* Footer: company + market */}
              <div className="mt-auto pt-4 border-t border-gold-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-jost)] text-[12px] text-gold font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{testimonial.marketFlag}</span>
                    <span className="font-[family-name:var(--font-jost)] text-[11px] text-cream-muted uppercase tracking-wider">
                      {testimonial.market}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-gold/10 text-gold text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
