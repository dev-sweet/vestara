'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/store'
import SectionHeading from '@/components/ui/SectionHeading'
import { productCategories } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function ProductCategoriesPreview() {
  const navigate = useNavigation((s) => s.navigate)

  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="PRODUCT CATEGORIES"
          heading="What We Source"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {productCategories.map((category, index) => {
            const isFirst = index === 0
            const productNames = category.products.slice(0, 3).map((p) => p.name).join(', ')

            return (
              <motion.div
                key={category.slug}
                variants={itemVariants}
                onClick={() => navigate('product-category', category.slug)}
                className={`
                  relative overflow-hidden rounded-sm border border-gold-border
                  hover:border-gold-border-strong transition-all duration-300 group cursor-pointer
                  ${isFirst ? 'md:col-span-2 md:row-span-2' : ''}
                `}
              >
                <div className={`h-full bg-navy-mid/50 ${isFirst ? 'min-h-[400px]' : 'min-h-[250px]'}`}>
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.imageGradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300 z-[1]`} />

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-end h-full relative z-10">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-[24px] md:text-[28px] text-cream">
                      {category.title}
                    </h3>
                    <p className="font-[family-name:var(--font-jost)] text-[13px] text-cream-muted mt-2">
                      {productNames}
                    </p>
                    <span className="font-[family-name:var(--font-jost)] text-[13px] text-gold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
