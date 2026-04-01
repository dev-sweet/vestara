'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  labelClassName?: string
}

const sizeMap = {
  sm: { icon: 40, gap: 2, label: 11 },
  md: { icon: 52, gap: 3, label: 12 },
  lg: { icon: 64, gap: 4, label: 13 },
}

export function BgmeaLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="BGMEA">
        <rect width="64" height="64" rx="4" fill="none" />
        {/* Shield shape */}
        <path d="M32 6L12 16v16c0 12 8.7 22.7 20 26 11.3-3.3 20-14 20-26V16L32 6z" stroke="currentColor" strokeWidth="2" fill="none" className="text-cream-muted" />
        <path d="M32 10L16 18.5v13c0 10 7 19.2 16 22 9-2.8 16-12 16-22v-13L32 10z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" opacity="0.3" />
        {/* Gear / Industry symbol */}
        <circle cx="32" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
        <circle cx="32" cy="30" r="3" fill="currentColor" className="text-gold" />
        {/* Gear teeth */}
        <path d="M32 20v2M32 38v2M22 30h2M40 30h2M24.3 22.3l1.4 1.4M38.3 36.3l1.4 1.4M24.3 37.7l1.4-1.4M38.3 23.7l1.4-1.4" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
        {/* BGMEA text */}
        <text x="32" y="50" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="8" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">BGMEA</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>BGMEA Member</span>}
    </div>
  )
}

export function OekoTexLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="OEKO-TEX Standard 100">
        {/* Circle frame */}
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gold" opacity="0.2" />
        {/* Globe / Earth symbol */}
        <circle cx="32" cy="28" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
        <ellipse cx="32" cy="28" rx="5" ry="10" stroke="currentColor" strokeWidth="1" fill="none" className="text-gold" />
        <path d="M22 28h20" stroke="currentColor" strokeWidth="1" className="text-gold" />
        <path d="M24 23h16M24 33h16" stroke="currentColor" strokeWidth="0.75" className="text-gold" opacity="0.6" />
        {/* OEKO-TEX text */}
        <text x="32" y="48" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="6.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">OEKO-TEX</text>
        <text x="32" y="54" textAnchor="middle" fill="currentColor" className="text-gold" fontSize="5" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.5">STANDARD 100</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>OEKO-TEX Standard 100</span>}
    </div>
  )
}

export function WrapLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="WRAP Certified">
        {/* Rounded square frame */}
        <rect x="6" y="6" width="52" height="52" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        {/* Checkmark in circle */}
        <circle cx="32" cy="26" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
        <path d="M26 26l4 4 8-8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
        {/* WRAP text */}
        <text x="32" y="50" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">WRAP</text>
        <text x="32" y="56" textAnchor="middle" fill="currentColor" className="text-gold" fontSize="4.5" fontFamily="sans-serif" fontWeight="500" letterSpacing="1">CERTIFIED</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>WRAP Certified</span>}
    </div>
  )
}

export function GotsLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GOTS Certified">
        {/* Leaf outline */}
        <path d="M32 56c-2-2-16-12-16-26s8-20 16-22c8 2 16 8 16 22s-14 24-16 26z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
        <path d="M32 52c-1.5-1.5-12-10-12-20s6-15 12-17c6 2 12 7 12 17s-10.5 18.5-12 20z" stroke="currentColor" strokeWidth="0.75" fill="none" className="text-gold" opacity="0.25" />
        {/* Leaf vein */}
        <path d="M32 14v30" stroke="currentColor" strokeWidth="1" className="text-gold" opacity="0.5" />
        <path d="M32 24c-4 2-8 4-10 8M32 32c4 2 8 4 10 8" stroke="currentColor" strokeWidth="0.75" className="text-gold" opacity="0.4" />
        {/* GOTS text */}
        <text x="32" y="22" textAnchor="middle" fill="currentColor" className="text-obsidian" fontSize="7" fontFamily="sans-serif" fontWeight="800">GOTS</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>GOTS Organic</span>}
    </div>
  )
}

export function IsoLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ISO 9001">
        {/* Hexagonal frame */}
        <path d="M32 4L56 16v24c0 6-10 16-24 20-14-4-24-14-24-20V16L32 4z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        <path d="M32 8L52 18v20c0 5-8.5 14-20 17.5-11.5-3.5-20-12.5-20-17.5V18L32 8z" stroke="currentColor" strokeWidth="0.75" fill="none" className="text-gold" opacity="0.15" />
        {/* ISO text */}
        <text x="32" y="32" textAnchor="middle" fill="currentColor" className="text-gold" fontSize="11" fontFamily="sans-serif" fontWeight="800" letterSpacing="1">ISO</text>
        <text x="32" y="42" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="10" fontFamily="sans-serif" fontWeight="600">9001</text>
        {/* Tick mark */}
        <path d="M28 48l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" className="text-gold" />
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>ISO 9001</span>}
    </div>
  )
}

export function CpscLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CPSC Compliance">
        {/* Shield with star */}
        <path d="M32 6L10 17v15c0 14 9.3 22.5 22 26 12.7-3.5 22-12 22-26V17L32 6z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        {/* Star */}
        <path d="M32 18l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" className="text-gold" />
        {/* CPSC text */}
        <text x="32" y="48" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.5">CPSC</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>CPSC (USA)</span>}
    </div>
  )
}

export function ReachLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="REACH Compliance">
        {/* Circle with EU stars */}
        <circle cx="32" cy="30" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        {/* Small stars in circle */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const r = 16
          const cx = 32 + r * Math.cos(angle)
          const cy = 30 + r * Math.sin(angle)
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="1"
              fill="currentColor"
              className="text-gold"
            />
          )
        })}
        {/* REACH text */}
        <text x="32" y="34" textAnchor="middle" fill="currentColor" className="text-gold" fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">REACH</text>
        <text x="32" y="56" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="5" fontFamily="sans-serif" fontWeight="500" letterSpacing="0.5">EU COMPLIANCE</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>REACH (EU)</span>}
    </div>
  )
}

export function BkmeaLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="BKMEA">
        {/* Double hexagon */}
        <path d="M32 6L56 18v20c0 8-10.3 17-24 22-13.7-5-24-14-24-22V18L32 6z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        <path d="M32 12L50 21.5v15c0 6-8 13.5-18 17-10-3.5-18-11-18-17v-15L32 12z" stroke="currentColor" strokeWidth="0.75" fill="none" className="text-gold" opacity="0.2" />
        {/* Thread / yarn symbol */}
        <path d="M26 22c0 4 2 8 6 10M38 22c0 4-2 8-6 10M26 32c0 4 2 6 6 8M38 32c0 4-2 6-6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold" />
        {/* BKMEA text */}
        <text x="32" y="52" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="7" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">BKMEA</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>BKMEA Member</span>}
    </div>
  )
}

export function SGSLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SGS">
        <rect x="6" y="6" width="52" height="52" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        <text x="32" y="38" textAnchor="middle" fill="currentColor" className="text-gold" fontSize="16" fontFamily="sans-serif" fontWeight="800" letterSpacing="2">SGS</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>SGS</span>}
    </div>
  )
}

export function BureauVeritasLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bureau Veritas">
        <rect x="6" y="6" width="52" height="52" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        {/* Diamond mark */}
        <path d="M32 16l12 16-12 16-12-16z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
        <text x="32" y="56" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="4.5" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.3">BUREAU VERITAS</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>Bureau Veritas</span>}
    </div>
  )
}

export function IntertekLogo({ className, size = 'md', showLabel = true, labelClassName }: LogoProps) {
  const s = sizeMap[size]
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Intertek">
        <rect x="6" y="6" width="52" height="52" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-cream-muted" />
        {/* Triangle mark */}
        <path d="M32 18l14 20H18l14-20z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gold" />
        <text x="32" y="50" textAnchor="middle" fill="currentColor" className="text-cream-muted" fontSize="6" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">INTERTEK</text>
      </svg>
      {showLabel && <span className={cn('text-center', labelClassName || `text-[${s.label}px] text-cream-muted`)}>Intertek</span>}
    </div>
  )
}
