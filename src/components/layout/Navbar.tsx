'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNavigation, type PageName } from '@/lib/store'

const navLinks: { label: string; page: PageName }[] = [
  { label: 'Products', page: 'products' },
  { label: 'Services', page: 'services' },
  { label: 'How We Work', page: 'how-we-work' },
  { label: 'Quality', page: 'quality' },
  { label: 'FAQ', page: 'faq' },
  { label: 'About', page: 'about' },
]

export function Navbar() {
  const { currentPage, navigate, isMenuOpen, setMenuOpen } = useNavigation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = '64px'
    return () => {
      document.documentElement.style.scrollPaddingTop = ''
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy/90 backdrop-blur-md border-b border-gold-border'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex flex-col items-center leading-none gap-1 py-2"
          >
            <span className="block w-full h-px bg-gold" />
            <span className="font-[family-name:var(--font-cormorant)] text-lg tracking-[0.25em] text-gold uppercase">
              VESTARA
            </span>
            <span className="block w-full h-px bg-gold" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={cn(
                  'font-sans text-[13px] font-normal transition-colors duration-300 hover:text-gold',
                  currentPage === link.page ? 'text-gold' : 'text-cream-muted'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="hidden md:block px-4 py-2 bg-gold text-obsidian text-[13px] font-sans font-medium tracking-wide hover:bg-gold-light transition-colors duration-300"
            >
              Request Quote
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-cream-muted hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-md flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-cream-muted hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  className={cn(
                    'font-[family-name:var(--font-cormorant)] text-[36px] font-light transition-colors duration-300 hover:text-gold',
                    currentPage === link.page ? 'text-gold' : 'text-cream'
                  )}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.35 }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                onClick={() => navigate('contact')}
                className="mt-4 px-8 py-3 bg-gold text-obsidian font-sans text-[14px] font-medium tracking-wide hover:bg-gold-light transition-colors duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35 }}
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
