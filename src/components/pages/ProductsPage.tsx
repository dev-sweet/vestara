'use client'

import { motion } from 'framer-motion'
import { productCategories } from '@/lib/data'
import { useNavigation } from '@/lib/store'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export default function ProductsPage() {
  const { navigate } = useNavigation()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-obsidian overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-radial from-navy/40 via-obsidian to-obsidian" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6"
          >
            Product Categories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-cormorant)] text-[42px] md:text-[56px] font-light text-cream leading-[1.1] mb-6"
          >
            Six Categories. Endless Possibilities.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-cream-muted text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed"
          >
            From baby essentials to heavyweight streetwear — explore our full sourcing capability.
          </motion.p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 md:py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {productCategories.map((category) => (
              <motion.div
                key={category.slug}
                variants={fadeInUp}
                onClick={() => navigate('product-category', category.slug)}
                className="relative h-[300px] md:h-[350px] bg-navy-mid border border-gold-border overflow-hidden cursor-pointer group"
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${category.imageGradient} transition-all duration-500 group-hover:opacity-90 z-[1]`} />

                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[11px] uppercase text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold-border">
                    {category.products.length} products
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-[28px] text-cream mb-2">
                    {category.title}
                  </h2>
                  <p className="text-cream-muted text-[14px] leading-relaxed mb-4 line-clamp-2">
                    {category.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>View Category</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
