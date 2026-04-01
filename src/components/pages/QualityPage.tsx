'use client'

import { motion } from 'framer-motion'
import { Search, ClipboardCheck, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  OekoTexLogo,
  WrapLogo,
  BgmeaLogo,
  BkmeaLogo,
  GotsLogo,
  IsoLogo,
  CpscLogo,
  ReachLogo,
  SGSLogo,
  BureauVeritasLogo,
  IntertekLogo,
} from '@/components/ui/CertificationLogos'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const qcStages = [
  {
    number: '01',
    title: 'Inline Inspection',
    timing: 'During production, at 20% completion',
    description:
      'Our QC team visits the factory floor to check stitch quality, fabric handling, and construction at the early stage of production.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Mid-Line Inspection',
    timing: 'At 50% completion',
    description:
      'A comprehensive check at the halfway mark covering measurements, color consistency, trims, and workmanship standards.',
    Icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Pre-Shipment Inspection',
    timing: '100% before loading, AQL 2.5',
    description:
      'Final inspection before goods are packed and loaded. Full AQL-based sampling with written report and photo documentation.',
    Icon: BadgeCheck,
  },
]

const aqlStandards = [
  {
    standard: 'AQL 2.5',
    level: 'Normal',
    application: 'Standard for all orders',
  },
  {
    standard: 'AQL 1.0',
    level: 'Tightened',
    application: 'Premium orders on request',
  },
  {
    standard: 'AQL 4.0',
    level: 'Reduced',
    application: 'Re-inspection / minor defects',
  },
]

export default function QualityPage() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url(/images/about/quality-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Full-page dark overlay */}
      <div className="absolute inset-0 bg-obsidian/92 z-0" />

      {/* All content above the background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center grain-overlay overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-transparent z-0" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold text-xs uppercase tracking-[0.2em] mb-6"
            >
              Quality &amp; Compliance
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-cream"
            >
              Compliance is Not Optional.{' '}
              <span className="text-gold">It&apos;s Our Standard.</span>
            </motion.h1>
          </div>
        </section>

        {/* QC Methodology Section */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-cream">
                Our 3-Stage QC Process
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid md:grid-cols-3 gap-6"
            >
              {qcStages.map((stage) => {
                const Icon = stage.Icon
                return (
                  <motion.div
                    key={stage.number}
                    variants={fadeUp}
                    className="bg-surface border border-gold-border p-8 relative"
                  >
                    <span className="absolute top-6 right-6 text-gold/20 font-[family-name:var(--font-cormorant)] text-4xl">
                      {stage.number}
                    </span>
                    <Icon className="w-8 h-8 text-gold mb-6" />
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-cream mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-gold mb-4">
                      {stage.timing}
                    </p>
                    <p className="text-sm text-cream-muted leading-relaxed">
                      {stage.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Certifications Section — with real SVG logos */}
        <section className="py-20 md:py-28 border-t border-gold-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
                Recognized Standards
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-cream">
                Testing &amp; Certifications
              </h2>
              <p className="text-cream-muted text-[16px] mt-4 max-w-2xl mx-auto leading-relaxed">
                Our partner factories hold and operate under internationally recognized certifications, ensuring your products meet the highest standards.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {/* Row 1: Primary certifications */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <OekoTexLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">OEKO-TEX Standard 100</span>
                <span className="text-[11px] text-cream-muted mt-1">Harmful substance testing</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <WrapLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">WRAP Certified</span>
                <span className="text-[11px] text-cream-muted mt-1">Social accountability</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <BgmeaLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">BGMEA Member</span>
                <span className="text-[11px] text-cream-muted mt-1">Bangladesh Garment Mfrs</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <IsoLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">ISO 9001</span>
                <span className="text-[11px] text-cream-muted mt-1">Quality management</span>
              </motion.div>

              {/* Row 2: Secondary certifications */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5 sm:col-start-1"
              >
                <GotsLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">GOTS Organic</span>
                <span className="text-[11px] text-cream-muted mt-1">Global organic textile</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <CpscLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">CPSC Compliance</span>
                <span className="text-[11px] text-cream-muted mt-1">USA product safety</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <ReachLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">REACH Compliance</span>
                <span className="text-[11px] text-cream-muted mt-1">EU chemical safety</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center p-6 bg-surface border border-gold-border rounded-sm hover:border-gold-border-strong transition-all duration-300 group hover:-translate-y-0.5"
              >
                <BkmeaLogo size="md" showLabel={false} />
                <span className="text-[13px] text-cream mt-3 font-medium">BKMEA Member</span>
                <span className="text-[11px] text-cream-muted mt-1">Knitwear exporters</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Testing Labs — with real SVG logos */}
        <section className="py-20 md:py-28 border-t border-gold-border bg-navy/60">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
                Third-Party Testing
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-cream mb-4">
                Partner Testing Labs
              </h2>
              <p className="text-cream-muted text-[16px] leading-relaxed mb-12 max-w-2xl mx-auto">
                For orders requiring third-party lab testing, we coordinate with internationally accredited testing laboratories:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="flex flex-wrap justify-center gap-10 md:gap-16 mb-12"
            >
              <motion.div variants={fadeUp} className="flex flex-col items-center">
                <SGSLogo size="lg" showLabel={false} />
                <span className="text-[13px] text-cream-muted mt-2">SGS</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center">
                <BureauVeritasLogo size="lg" showLabel={false} />
                <span className="text-[13px] text-cream-muted mt-2">Bureau Veritas</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center">
                <IntertekLogo size="lg" showLabel={false} />
                <span className="text-[13px] text-cream-muted mt-2">Intertek</span>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-cream-muted text-sm leading-relaxed max-w-2xl mx-auto"
            >
              Lab testing is coordinated for specific compliance requirements such as CPSC (USA baby products), REACH (EU chemical safety), and OEKO-TEX (harmful substance testing) certification.
            </motion.p>
          </div>
        </section>

        {/* AQL Standard Table */}
        <section className="py-20 md:py-28 border-t border-gold-border">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-cream mb-12 text-center">
                AQL Inspection Standards
              </h2>

              <div className="bg-surface border border-gold-border overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-border">
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gold font-normal">
                        Standard
                      </th>
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gold font-normal">
                        Level
                      </th>
                      <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-gold font-normal">
                        Application
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {aqlStandards.map((row, i) => (
                      <tr
                        key={row.standard}
                        className={cn(
                          'border-b border-gold-border/50 last:border-b-0',
                          i % 2 === 0 ? 'bg-navy/20' : 'bg-transparent'
                        )}
                      >
                        <td className="px-6 py-4 text-sm text-cream font-medium">{row.standard}</td>
                        <td className="px-6 py-4 text-sm text-cream-muted">{row.level}</td>
                        <td className="px-6 py-4 text-sm text-cream-muted">{row.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
