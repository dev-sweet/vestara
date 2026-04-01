'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801XXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20sourcing%20with%20VESTARA"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[9999] flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring */}
      <span
        className="absolute w-14 h-14 rounded-full bg-[#25D366] pointer-events-none"
        style={{
          animation: 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        }}
      />

      {/* Tooltip */}
      <span className="absolute right-16 bg-obsidian/90 border border-gold-border text-cream-muted font-sans text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <span className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#25D366]/20">
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
      </span>
    </a>
  )
}
