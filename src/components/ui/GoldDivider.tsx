'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
}

export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <motion.span
        className="block w-10 h-px bg-gold origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <span className="mx-3 w-1.5 h-1.5 border border-gold rotate-45 shrink-0" />
      <motion.span
        className="block w-10 h-px bg-gold origin-right"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      />
    </div>
  )
}
