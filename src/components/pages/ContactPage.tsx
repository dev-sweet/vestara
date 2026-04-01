'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  Mail,
  MessageCircle,
  Clock,
  Calendar,
  CheckCircle2,
  Linkedin,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Valid email is required'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().optional(),
  productCategories: z.array(z.string()).min(1, 'Select at least one category'),
  estimatedQuantity: z.string().min(1, 'Quantity range is required'),
  buyerType: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const countries = [
  'USA',
  'UK',
  'Canada',
  'Germany',
  'France',
  'Australia',
  'UAE',
  'Saudi Arabia',
  'Other',
]

const productCategoryOptions = [
  'Baby Clothing',
  "Women's Basics",
  'Street Basics',
  'Polo & Uniform',
  'Denim',
  'Private Label',
  'Other',
]

const quantityOptions = [
  'Under 100 pcs',
  '100–500 pcs',
  '500–2000 pcs',
  '2000+ pcs',
]

const buyerTypeOptions = [
  'A new brand',
  'Established retailer',
  'Wholesaler',
  'Uniform buyer',
  'Other',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      productCategories: [],
    },
  })

  const selectedCategories = watch('productCategories') || []

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }

      setIsSubmitted(true)
      reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  const toggleCategory = (category: string) => {
    const current = selectedCategories
    if (current.includes(category)) {
      setValue(
        'productCategories',
        current.filter((c) => c !== category),
        { shouldValidate: true }
      )
    } else {
      setValue('productCategories', [...current, category], {
        shouldValidate: true,
      })
    }
  }

  const inputClass =
    'w-full bg-navy/50 border border-gold-border text-cream placeholder:text-cream-muted/50 focus:border-gold focus:ring-1 focus:ring-gold rounded-sm px-4 py-3 text-sm outline-none transition-colors'
  const labelClass = 'block text-[13px] text-cream-muted uppercase tracking-wider mb-2 font-normal'

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center grain-overlay pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-obsidian/40 to-obsidian" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs uppercase tracking-[0.2em] mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            Let's Build Something{' '}
            <span className="text-gold">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're ready to order or just exploring options — we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] text-cream-muted uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@vestaraglobal.com"
                      className="text-cream hover:text-gold transition-colors"
                    >
                      hello@vestaraglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] text-cream-muted uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="tel:+8801XXXXXXXXX"
                      className="text-cream hover:text-gold transition-colors"
                    >
                      +880 1XXX-XXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] text-cream-muted uppercase tracking-wider mb-1">
                      Response Time
                    </p>
                    <p className="text-cream">
                      We respond within 24 hours on business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] text-cream-muted uppercase tracking-wider mb-1">
                      Business Hours
                    </p>
                    <p className="text-cream">
                      Mon–Sat, 9am–6pm BST (Bangladesh Standard Time)
                    </p>
                    <p className="text-[13px] text-cream-muted mt-1">
                      That's 4am–1pm EST / 9am–6pm GMT
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-[13px] text-cream-muted uppercase tracking-wider mb-4">
                  Connect with us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 border border-gold-border flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-gold-border flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:hello@vestaraglobal.com"
                    className="w-10 h-10 border border-gold-border flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Quote Request Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1 }}
            >
              {isSubmitted ? (
                <div className="bg-surface border border-gold-border p-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream mb-3">
                    Thank you!
                  </h3>
                  <p className="text-cream-muted leading-relaxed">
                    Your inquiry has been received. Expect a response within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      {...register('fullName')}
                      placeholder="John Smith"
                      className={cn(inputClass, errors.fullName && 'border-red-500/60')}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className={labelClass}>Company / Brand Name</label>
                    <input
                      {...register('companyName')}
                      placeholder="Your Company"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@company.com"
                      className={cn(inputClass, errors.email && 'border-red-500/60')}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className={labelClass}>
                      Country <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('country')}
                        className={cn(inputClass, 'appearance-none pr-10', errors.country && 'border-red-500/60')}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select your country
                        </option>
                      {countries.map((c) => (
                        <option key={c} value={c} className="bg-navy text-cream">
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted pointer-events-none" />
                    </div>
                    {errors.country && (
                      <p className="text-red-400 text-xs mt-1">{errors.country.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </div>

                  {/* Product Categories (checkboxes) */}
                  <div>
                    <label className={labelClass}>
                      Product Categories of Interest <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {productCategoryOptions.map((cat) => (
                        <label
                          key={cat}
                          className={cn(
                            'flex items-center gap-2 cursor-pointer px-3 py-2 border rounded-sm transition-colors',
                            selectedCategories.includes(cat)
                              ? 'border-gold bg-gold/10'
                              : 'border-gold-border hover:border-gold/40'
                          )}
                        >
                          <input
                            type="checkbox"
                            value={cat}
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="sr-only"
                          />
                          <div
                            className={cn(
                              'w-4 h-4 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors',
                              selectedCategories.includes(cat)
                                ? 'bg-gold border-gold'
                                : 'border-gold-border'
                            )}
                          >
                            {selectedCategories.includes(cat) && (
                              <svg
                                className="w-3 h-3 text-obsidian"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-cream">{cat}</span>
                        </label>
                      ))}
                    </div>
                    {errors.productCategories && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.productCategories.message}
                      </p>
                    )}
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label className={labelClass}>
                      Estimated Monthly Quantity <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('estimatedQuantity')}
                        className={cn(
                          inputClass,
                          'appearance-none pr-10',
                          errors.estimatedQuantity && 'border-red-500/60'
                        )}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select quantity range
                        </option>
                        {quantityOptions.map((q) => (
                          <option key={q} value={q} className="bg-navy text-cream">
                            {q}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted pointer-events-none" />
                    </div>
                    {errors.estimatedQuantity && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.estimatedQuantity.message}
                      </p>
                    )}
                  </div>

                  {/* Buyer Type (radio) */}
                  <div>
                    <label className={labelClass}>Are you:</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {buyerTypeOptions.map((type) => (
                        <label
                          key={type}
                          className={cn(
                            'flex items-center gap-2 cursor-pointer px-3 py-2 border rounded-sm transition-colors',
                            watch('buyerType') === type
                              ? 'border-gold bg-gold/10'
                              : 'border-gold-border hover:border-gold/40'
                          )}
                        >
                          <input
                            type="radio"
                            value={type}
                            {...register('buyerType')}
                            className="sr-only"
                          />
                          <div
                            className={cn(
                              'w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors',
                              watch('buyerType') === type
                                ? 'border-gold'
                                : 'border-gold-border'
                            )}
                          >
                            {watch('buyerType') === type && (
                              <div className="w-2 h-2 rounded-full bg-gold" />
                            )}
                          </div>
                          <span className="text-sm text-cream">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>
                      Tell us about your product requirements
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Describe your ideal product, specifications, or any special requirements..."
                      className={inputClass}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-obsidian py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>

                  <p className="text-[12px] text-cream-muted/60 text-center">
                    By submitting, you agree to our privacy policy. We never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
