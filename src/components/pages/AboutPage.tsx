'use client'

import { motion } from 'framer-motion'
import { Building, Ship, Layers } from 'lucide-react'
import { BgmeaLogo, BkmeaLogo, WrapLogo, OekoTexLogo, GotsLogo, IsoLogo } from '@/components/ui/CertificationLogos'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const stats = [
  { number: '#2', label: 'Garment Exporter Globally' },
  { number: '$40B+', label: 'Annual Export Value' },
  { number: '4,500+', label: 'BGMEA Member Factories' },
  { number: '35+', label: 'Years of Export Experience' },
]

const factories = [
  { location: 'Dhaka & Gazipur', description: 'Woven & knit specialists', icon: Building },
  { location: 'Chittagong EPZ', description: 'Export-ready, WRAP certified', icon: Ship },
  { location: 'Narayanganj', description: 'Denim & heavy fabric specialists', icon: Layers },
]

const team = [
  {
    name: 'Anamul Hoque',
    title: 'Founder & Managing Director',
    bio: 'Over 15 years in Bangladesh apparel manufacturing and international trade. Anamul founded VESTARA to bridge the gap between world-class Bangladesh factories and the global brands that need them.',
    image: '/images/team/1.jpeg',
  },
  {
    name: 'Atiqul Islam Sumon',
    title: 'Head of Merchandising',
    bio: 'Experienced merchandiser with expertise in knitwear, woven, and denim production. Atiqul leads product development, factory coordination, and quality assurance across all client accounts.',
    image: '/images/team/2.png',
  },
   {
    name: 'Sanoar Ahamed',
    title: 'Head of Merchandising',
    bio: 'Experienced merchandiser with expertise in knitwear, woven, and denim production. Sanoar leads product development, factory coordination, and quality assurance across all client accounts.',
    image: '/images/team/3.jpeg',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-obsidian overflow-hidden pt-16">
        {/* Background Image */}
        <Image
          src="/images/about/factory.png"
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
            About VESTARA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-cormorant)] text-[42px] md:text-[56px] font-light text-cream leading-[1.1]"
          >
            A New Standard in Bangladesh Sourcing
          </motion.h1>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 md:py-28 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Pull Quote */}
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <span className="absolute -top-6 -left-4 text-[80px] text-gold/20 font-[family-name:var(--font-cormorant)] leading-none select-none">
                  &ldquo;
                </span>
                <blockquote className="relative z-10 font-[family-name:var(--font-cormorant)] italic text-[28px] md:text-[32px] text-cream leading-relaxed pl-8">
                  We exist to bridge the gap between world-class Bangladesh manufacturing and the global brands who need it most.
                </blockquote>
                <span className="absolute -bottom-10 right-0 text-[80px] text-gold/20 font-[family-name:var(--font-cormorant)] leading-none select-none rotate-180">
                  &ldquo;
                </span>
              </div>
            </motion.div>

            {/* Right: Paragraphs */}
            <motion.div variants={fadeInUp} className="space-y-0 relative">
              {/* Subtle background image */}
              <Image
                src="/images/about/product-development.png"
                alt=""
                fill
                className="object-cover opacity-[0.08]"
                unoptimized
              />
              <div className="relative z-10">
              <p className="text-cream-muted text-[16px] leading-[1.8] mb-4">
                VESTARA was founded with a clear purpose: to make Bangladesh&apos;s world-class garment manufacturing accessible to international buyers of all sizes — from emerging DTC brands to established retailers.
              </p>
              <p className="text-cream-muted text-[16px] leading-[1.8] mb-4">
                We are not a factory agent. We are a sourcing intelligence company — combining deep factory knowledge, merchandising expertise, and buyer-first service to deliver results.
              </p>
              <p className="text-cream-muted text-[16px] leading-[1.8]">
                Our team brings years of experience in apparel production, quality control, and international trade. We understand what buyers need because we&apos;ve been on both sides of the table.
              </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Bangladesh Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeInUp} className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
              The Manufacturing Advantage
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[42px] font-light text-cream"
            >
              Why the World Sources from Bangladesh
            </motion.h2>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center py-8 px-4"
              >
                <div className="font-[family-name:var(--font-cormorant)] text-[42px] text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-[12px] uppercase tracking-wider text-cream-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Two-Column Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <motion.p variants={fadeInUp} className="text-cream-muted text-[16px] leading-[1.8]">
              Bangladesh&apos;s garment industry has grown into one of the world&apos;s largest, backed by a skilled workforce of over 4 million workers, competitive pricing, and an ever-improving compliance infrastructure.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-cream-muted text-[16px] leading-[1.8]">
              From knitwear to denim, from baby clothes to heavy streetwear — Bangladesh offers manufacturing capabilities that rival any other garment-producing nation. VESTARA gives you direct access to the best of it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Factory Network Section */}
      <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
        {/* Subtle factory background */}
        <Image
          src="/images/about/factory.png"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          unoptimized
        />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[42px] font-light text-cream mb-4"
            >
              Our Vetted Factory Network
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-cream-muted text-[16px] max-w-2xl mx-auto leading-[1.8]">
              We work exclusively with audited, compliance-ready factories across Bangladesh&apos;s key production hubs.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {factories.map((factory) => {
              const Icon = factory.icon
              return (
                <motion.div
                  key={factory.location}
                  variants={fadeInUp}
                  className="bg-surface border border-gold-border p-6"
                >
                  <Icon className="text-gold mb-4" size={28} strokeWidth={1.5} />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] text-cream mb-2">
                    {factory.location}
                  </h3>
                  <p className="text-cream-muted text-[14px]">{factory.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Compliance Logos Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 pt-12 border-t border-gold-border"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold text-center mb-6">
              Compliance &amp; Certifications
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
              <BgmeaLogo size="sm" showLabel={false} />
              <BkmeaLogo size="sm" showLabel={false} />
              <WrapLogo size="sm" showLabel={false} />
              <OekoTexLogo size="sm" showLabel={false} />
              <GotsLogo size="sm" showLabel={false} />
              <IsoLogo size="sm" showLabel={false} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[42px] font-light text-cream"
            >
              The Team Behind VESTARA
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full border-2 border-gold mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-[full] h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[24px] text-cream mb-1">
                  {member.name}
                </h3>
                <p className="text-[13px] uppercase text-gold tracking-wider mb-4">
                  {member.title}
                </p>
                <p className="text-cream-muted text-[15px] leading-[1.7]">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
