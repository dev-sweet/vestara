'use client'

import { Linkedin, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNavigation, type PageName } from '@/lib/store'

const quickLinks: { label: string; page: PageName }[] = [
  { label: 'Products', page: 'products' },
  { label: 'Services', page: 'services' },
  { label: 'About', page: 'about' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact', page: 'contact' },
]

export function Footer() {
  const { navigate } = useNavigation()

  return (
    <footer className="mt-auto bg-obsidian border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-start leading-none gap-1 w-fit">
              <span className="block w-full h-px bg-gold" />
              <span className="font-[family-name:var(--font-cormorant)] text-lg tracking-[0.25em] text-gold uppercase">
                Vestara
              </span>
              <span className="block w-full h-px bg-gold" />
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-[18px] text-cream italic leading-relaxed">
              Where Bangladesh Craftsmanship Meets Global Standards
            </p>
            <p className="font-sans text-sm text-cream-muted leading-relaxed max-w-xs">
              Your trusted sourcing partner for premium apparel manufactured in Bangladesh — from concept to container, we deliver quality, transparency, and reliability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="font-sans text-sm text-cream-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-gold">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@vestaraglobal.com"
                className="block font-sans text-sm text-cream-muted hover:text-gold transition-colors duration-300"
              >
                hello@vestaraglobal.com
              </a>
              <a
                href="https://wa.me/+8801734114388"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm text-cream-muted hover:text-gold transition-colors duration-300"
              >
                WhatsApp: +880 1734 114388
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://linkedin.com/company/vestara-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-muted hover:text-gold transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-muted hover:text-gold transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-gold-border flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-xs text-cream-muted">
            © 2025 VESTARA Global Sourcing. Registered in Bangladesh.
          </p>
          <p className="font-sans text-[11px] text-cream-muted/60">
            VESTARA is a trading name, registered with BGMEA.
          </p>
        </div>
      </div>
    </footer>
  )
}
