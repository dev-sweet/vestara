export interface ProductCategory {
  slug: string
  title: string
  shortDescription: string
  products: { name: string; specs: string }[]
  moqRange: string
  sampleLeadTime: string
  productionLeadTime: string
  availableFabrics: string[]
  certifications: string[]
  gsmRange: string
  keyCompliance: string
  keyAppeal: string
  factoryNote: string
  factoryBullets: string[]
  imageGradient: string
  image: string
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'baby-clothing',
    title: 'Baby Clothing',
    shortDescription: 'Safe, soft, and certified baby essentials — from bodysuits to sleepwear, produced to the highest international safety standards.',
    products: [
      { name: 'Bodysuits', specs: '100% organic cotton, snap closure, sizes NB–24M' },
      { name: 'Rompers', specs: 'Interlock cotton, front zipper, sizes 0–3M to 18–24M' },
      { name: 'Sleepsuits', specs: 'Ribbed cotton, full-length zip, sizes NB–36M' },
      { name: '2-Piece Sets', specs: 'Top + bottom combo, cotton jersey, sizes 0–3M to 2T' },
      { name: 'Baby Bibs', specs: 'Cotton toweling, snap-back closure, food-safe' },
      { name: 'Footed PJs', specs: 'Fleece/cotton interlock, non-slip soles, sizes NB–4T' },
    ],
    moqRange: '50–100 pcs per style',
    sampleLeadTime: '14–21 days',
    productionLeadTime: '45–60 days',
    availableFabrics: ['100% organic cotton', 'bamboo cotton blend', 'interlock', 'ribbed knit'],
    certifications: ['OEKO-TEX Standard 100', 'CPSC (USA)', 'EN 14682 (EU)'],
    gsmRange: '140–220 GSM',
    keyCompliance: 'CPSC (USA), EN 14682 (EU), OEKO-TEX Standard 100',
    keyAppeal: 'All baby garments produced to OEKO-TEX certified fabric standards',
    factoryNote: 'Our baby clothing partner factories specialize in infant wear with dedicated infant production lines, ensuring the highest levels of safety compliance and fabric quality.',
    factoryBullets: [
      'Dedicated infant production lines with strict contamination controls',
      'In-house testing for colorfastness, shrinkage, and pH levels',
      'Experienced in CPSC and EN safety standard documentation',
    ],
    imageGradient: 'from-rose-900/60 to-obsidian/90',
    image: '/images/categories/baby-clothing.png',
  },
  {
    slug: 'womens-basics',
    title: "Women's Basics",
    shortDescription: 'Everyday essentials for modern women — loungewear, nightwear, dresses, and leggings in natural fabrics.',
    products: [
      { name: 'Loungewear Sets', specs: 'Cotton/modal blend, relaxed fit, sizes XS–XL' },
      { name: 'Nightwear / PJ Sets', specs: 'Cotton/modal, piping detail, sizes XS–XXL' },
      { name: 'Cotton Day Dresses', specs: '100% cotton, A-line and shift styles, sizes XS–XL' },
      { name: 'Leggings', specs: 'Cotton/modal/spandex, 4-way stretch, sizes XS–XXL' },
      { name: 'Maternity Basics', specs: 'Expanding waistband, cotton jersey, sizes S–XL' },
      { name: 'Brunch Sets', specs: 'Matching top + bottom, cotton blends, sizes XS–XL' },
    ],
    moqRange: '100–200 pcs per style',
    sampleLeadTime: '14–21 days',
    productionLeadTime: '45–60 days',
    availableFabrics: ['Organic cotton', 'modal', 'bamboo blends', 'rib knit', 'French terry'],
    certifications: ['OEKO-TEX Standard 100', 'GOTS (organic options)'],
    gsmRange: '140–280 GSM',
    keyCompliance: 'OEKO-TEX Standard 100, GOTS (organic options)',
    keyAppeal: 'Low MOQ for small brands and online sellers',
    factoryNote: 'Our partner factories for women\'s basics specialize in knitwear with experience in DTC brands, offering flexible sizing and custom color options.',
    factoryBullets: [
      'Specialized knitwear factories with DTC brand experience',
      'Flexible sizing from XS to 3XL, plus size options available',
      'Custom color matching with Pantone reference',
    ],
    imageGradient: 'from-pink-900/50 to-obsidian/90',
    image: '/images/categories/womens-basics.png',
  },
  {
    slug: 'heavyweight-street-basics',
    title: 'Heavyweight Street Basics',
    shortDescription: 'Premium-weight blanks for streetwear brands — 240–260gsm tees, 350–400gsm hoodies, and custom finishes.',
    products: [
      { name: 'Heavyweight T-Shirts', specs: '240–260 GSM, 100% cotton, drop-shoulder options' },
      { name: 'Hoodies', specs: '350–400 GSM, cotton-polyester fleece, kangaroo pocket' },
      { name: 'Crewneck Sweatshirts', specs: '320–360 GSM, French terry, ribbed cuffs' },
      { name: 'Drop-Shoulder Tees', specs: '240–260 GSM, oversized fit, boxy cut' },
      { name: 'Boxy Fit Cuts', specs: '260+ GSM, contemporary silhouette, raw hem option' },
    ],
    moqRange: '100–300 pcs per style',
    sampleLeadTime: '14–21 days',
    productionLeadTime: '45–60 days',
    availableFabrics: ['100% cotton', 'cotton-polyester fleece', 'loop-back terry', 'brushed fleece'],
    certifications: ['OEKO-TEX Standard 100'],
    gsmRange: '240–400 GSM',
    keyCompliance: 'OEKO-TEX Standard 100',
    keyAppeal: 'Premium streetwear weight, blank & branded options, custom dyeing',
    factoryNote: 'Our heavyweight specialists operate advanced knitting and dyeing facilities, capable of producing consistent heavy-weight fabrics with custom wash and dye programs.',
    factoryBullets: [
      'Advanced circular knitting machines for consistent heavy-weight fabric',
      'In-house garment dyeing and custom wash programs',
      'Stone wash, enzyme wash, and vintage finish capabilities',
    ],
    imageGradient: 'from-slate-800/60 to-obsidian/90',
    image: '/images/categories/heavyweight-street.png',
  },
  {
    slug: 'polo-uniform',
    title: 'Polo & Uniform',
    shortDescription: 'Corporate-ready polo shirts, performance wear, and complete uniform solutions with branding services.',
    products: [
      { name: 'Classic Polo Shirts', specs: 'Cotton pique, 2-button placket, sizes S–3XL' },
      { name: 'Pique Polo', specs: 'Cotton/cotton-blend pique, textured finish, sizes S–3XL' },
      { name: 'Performance Polo', specs: 'Polyester pique, moisture-wicking, anti-bacterial finish' },
      { name: 'Corporate Shirts', specs: 'Cotton poplin, button-down, sizes S–2XL' },
      { name: 'Uniform Trousers', specs: 'Poly-cotton twill, multiple colors, sizes 28–42 waist' },
      { name: 'Workwear Sets', specs: 'Complete top + bottom, heavy-duty fabric, branded' },
    ],
    moqRange: '100–500 pcs per style',
    sampleLeadTime: '14–21 days',
    productionLeadTime: '45–60 days',
    availableFabrics: ['Cotton pique', 'polyester pique', 'CVC blend', 'anti-bacterial finishes'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001 (select factories)'],
    gsmRange: '180–280 GSM',
    keyCompliance: 'OEKO-TEX Standard 100, ISO 9001 (select factories)',
    keyAppeal: 'Uniform branding: embroidery, screen print, woven labels',
    factoryNote: 'Our uniform-dedicated factories have extensive experience with corporate clients, offering complete branding solutions including embroidery, screen printing, and woven label integration.',
    factoryBullets: [
      'Dedicated embroidery department with multi-head machines',
      'Screen printing capability up to 8-color prints',
      'Complete branding package: labels, tags, and packaging',
    ],
    imageGradient: 'from-blue-900/50 to-obsidian/90',
    image: '/images/categories/polo-uniform.png',
  },
  {
    slug: 'denim-products',
    title: 'Denim Products',
    shortDescription: 'Premium denim from jeans to jackets — with stone wash, acid wash, laser finishing, and stretch options.',
    products: [
      { name: '5-Pocket Jeans', specs: '10–14oz denim, stretch and non-stretch, sizes 26–38' },
      { name: 'Denim Jackets', specs: '12oz denim, sherpa-lined options, sizes S–2XL' },
      { name: 'Denim Shirts', specs: '8–10oz denim, casual fit, sizes S–2XL' },
      { name: 'Denim Shorts', specs: '10–12oz denim, multiple washes, sizes 26–38' },
      { name: 'Denim Skirts', specs: '10–12oz denim, A-line and pencil styles, sizes XS–XL' },
      { name: 'Fashion Wash Denim', specs: 'Custom wash development, vintage and modern finishes' },
    ],
    moqRange: '200–500 pcs per style',
    sampleLeadTime: '14–21 days',
    productionLeadTime: '50–70 days',
    availableFabrics: ['10–14oz denim', 'stretch denim (2–4% elastane)', 'recycled denim options'],
    certifications: ['OEKO-TEX Standard 100', 'GOTS (recycled options)'],
    gsmRange: '300–450 GSM',
    keyCompliance: 'OEKO-TEX Standard 100, GOTS (recycled options)',
    keyAppeal: 'Stone wash, acid wash, enzyme wash, sand blast, laser finishing',
    factoryNote: 'Our denim specialists are located in Narayanganj, Bangladesh\'s historic denim hub, with integrated washing facilities and laser finishing technology.',
    factoryBullets: [
      'Integrated washing facility with stone, acid, enzyme, and sand blast capabilities',
      'Laser finishing technology for precision distressing and patterns',
      'In-house denim development: custom washes, dyeing, and finishing',
    ],
    imageGradient: 'from-indigo-900/50 to-obsidian/90',
    image: '/images/categories/denim.png',
  },
  {
    slug: 'private-label',
    title: 'Private Label & Custom Manufacturing',
    shortDescription: 'Complete brand-in-a-box service — from custom labels and hangtags to retail-ready packaging and presentation.',
    products: [
      { name: 'Custom Woven Labels', specs: 'Damask / satin weave, custom logo, min 500 pcs' },
      { name: 'Printed Labels', specs: 'Heat transfer / silk screen, care & content labels' },
      { name: 'Hangtags Design & Production', specs: 'Custom design, premium cardstock, various finishes' },
      { name: 'Polybag & Packaging', specs: 'Custom printed polybags, tissue paper, branded boxes' },
      { name: 'Retail-Ready Presentation', specs: 'Display-ready packaging, hang-sell options' },
      { name: 'Custom Branding Packs', specs: 'Complete label + tag + packaging bundle' },
    ],
    moqRange: 'Labels from 500 pcs / Garments from 50 pcs',
    sampleLeadTime: '14–21 days',
    productionLeadTime: '45–60 days',
    availableFabrics: ['Per garment category — any of the above fabric ranges'],
    certifications: ['OEKO-TEX Standard 100', 'GOTS', 'Custom brand compliance support'],
    gsmRange: 'Per garment category',
    keyCompliance: 'Custom brand compliance with buyer-specific standards',
    keyAppeal: 'Complete brand-in-a-box service for new brands and e-commerce sellers',
    factoryNote: 'Our private label service coordinates across multiple specialized suppliers — label printers, packaging makers, and garment factories — to deliver a complete branded product.',
    factoryBullets: [
      'Dedicated label production with custom weave, print, and finish options',
      'Packaging design support including box, polybag, and tissue options',
      'Tech pack assistance and brand guideline creation for factories',
    ],
    imageGradient: 'from-amber-900/50 to-obsidian/90',
    image: '/images/categories/private-label.png',
  },
]

export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  market: string
  marketFlag: string
  photo: string
  category: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'VESTARA delivered our first private label collection on spec and on time. The sampling process was seamless — we went from initial brief to approved samples in under three weeks. Our DTC brand has since scaled to three collections per year, all sourced through VESTARA.',
    name: 'Sarah Miller',
    title: 'Founder & CEO',
    company: 'Haven Apparel Co.',
    market: 'United States',
    marketFlag: '🇺🇸',
    photo: '/images/testimonials/sarah-miller.png',
    category: 'Private Label',
  },
  {
    quote: 'As a small independent retailer, I was genuinely nervous about sourcing internationally for the first time. VESTARA completely removed that anxiety. Their account manager walked me through every step — from fabric selection to customs documentation. It genuinely felt like working with a local partner.',
    name: 'James Thornton',
    title: 'Buying Director',
    company: 'Thornton & Hart Ltd.',
    market: 'United Kingdom',
    marketFlag: '🇬🇧',
    photo: '/images/testimonials/james-thornton.png',
    category: 'Uniform',
  },
  {
    quote: 'The quality, communication, and pricing were all exactly as promised — no surprises, no hidden costs. We\'re now on our fourth production run and have expanded from basic tees to a full streetwear line including heavyweight hoodies and custom denim washes.',
    name: 'Lena Krüger',
    title: 'Founder',
    company: 'NORDSTADT Studio',
    market: 'Germany',
    marketFlag: '🇩🇪',
    photo: '/images/testimonials/lena-krueger.png',
    category: 'Streetwear',
  },
  {
    quote: 'What impressed me most was VESTARA\'s ability to match our very specific OEKO-TEX and CPSC compliance requirements for baby clothing. The factory they connected us with understood children\'s product safety from day one. That level of specialization is hard to find.',
    name: 'Marc LeRoux',
    title: 'VP of Product',
    company: 'Maison Bébé Inc.',
    market: 'Canada',
    marketFlag: '🇨🇦',
    photo: '/images/testimonials/marc-leroux.png',
    category: 'Baby Clothing',
  },
  {
    quote: 'We needed a sourcing partner who could handle both our women\'s basics line and our corporate uniform division — two completely different product types. VESTARA managed both flawlessly, with consistent quality across the board. They\'re a true one-stop sourcing partner.',
    name: 'Emma Clarke',
    title: 'Head of Procurement',
    company: 'Stylecraft Group',
    market: 'Australia',
    marketFlag: '🇦🇺',
    photo: '/images/testimonials/emma-clarke.png',
    category: 'Multi-Category',
  },
  {
    quote: 'In the Middle East, branding and packaging presentation are everything. VESTARA\'s private label service went beyond just manufacturing — they helped us design hangtags, select packaging materials, and build a complete brand identity. Our retail partners noticed the difference immediately.',
    name: 'Ahmed Al-Rashid',
    title: 'Managing Director',
    company: 'Elegance Trading FZCO',
    market: 'United Arab Emirates',
    marketFlag: '🇦🇪',
    photo: '/images/testimonials/ahmed-al-rashid.png',
    category: 'Private Label',
  },
]

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const faqData: FAQItem[] = [
  {
    category: 'MOQ & Pricing',
    question: 'What is your minimum order quantity?',
    answer: 'MOQ varies by category. Baby clothing and private label start from 50 pcs per style. Women\'s basics and streetwear from 100 pcs. Denim and polo/uniform from 200 pcs. Contact us for specific requirements.',
  },
  {
    category: 'MOQ & Pricing',
    question: 'Do you charge for samples?',
    answer: 'Proto samples are charged at cost (typically $30–80 per sample depending on complexity). Sample costs are credited back on the first production order above 200 pcs.',
  },
  {
    category: 'MOQ & Pricing',
    question: 'How do you price your orders?',
    answer: 'We provide FOB Chittagong pricing. Price includes all production costs, packaging, and standard export documentation. Freight is quoted separately based on your destination port.',
  },
  {
    category: 'MOQ & Pricing',
    question: 'Can you work with my target price?',
    answer: 'Yes. We present factory options across price tiers. We\'re transparent about what\'s achievable at different price points so you can make informed decisions.',
  },
  {
    category: 'Products & Production',
    question: 'What fabric types can you work with?',
    answer: 'We source 100% cotton, cotton blends, modal, bamboo, recycled polyester, denim (10–14oz), fleece (French terry, brushed, loopback), and more. If you have a specific fabric, send us a swatch reference.',
  },
  {
    category: 'Products & Production',
    question: 'Can you do custom dyeing and washing?',
    answer: 'Yes. We have access to reactive dyeing, garment dyeing, stone wash, enzyme wash, acid wash, and laser finishing. Color matching to Pantone/physical swatch is standard.',
  },
  {
    category: 'Products & Production',
    question: 'Do you handle tech packs?',
    answer: 'Yes. We can work from your existing tech pack, or our product development team can create a basic tech pack from your design brief or reference sample.',
  },
  {
    category: 'Products & Production',
    question: 'What is your typical production lead time?',
    answer: 'Standard production is 45–60 days after sample approval and order confirmation. Rush orders (70–80% of standard price + priority fee) can reduce this to 30–35 days for select categories.',
  },
  {
    category: 'Quality & Compliance',
    question: 'What quality standards do you work to?',
    answer: 'AQL 2.5 as standard for all orders. AQL 1.0 available on request. All inspections are conducted by VESTARA\'s in-house QC team with written reports.',
  },
  {
    category: 'Quality & Compliance',
    question: 'Can your factories produce to OEKO-TEX standards?',
    answer: 'Yes. Several of our partner factories hold OEKO-TEX Standard 100 certification. We can match your order to a certified facility upon request.',
  },
  {
    category: 'Quality & Compliance',
    question: 'Do you support CPSC compliance for USA baby products?',
    answer: 'Yes. We work with accredited testing labs for CPSC (Consumer Product Safety Commission) compliance testing for all baby and children\'s garments destined for the US market.',
  },
  {
    category: 'Shipping & Logistics',
    question: 'What shipping terms do you offer?',
    answer: 'Standard terms are FOB Chittagong. We can also arrange CIF to your destination port. We work with established freight forwarders and can provide competitive rates.',
  },
  {
    category: 'Shipping & Logistics',
    question: 'What documents do you provide with each shipment?',
    answer: 'Full documentation pack: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin (CO), Test Reports (if ordered), and Inspection Certificate.',
  },
  {
    category: 'Shipping & Logistics',
    question: 'How long does shipping take to the USA/UK?',
    answer: 'Sea freight: USA (West Coast) 18–22 days, USA (East Coast) 22–28 days, UK 20–25 days, Australia 18–22 days. Air freight available for urgent orders.',
  },
  {
    category: 'Getting Started',
    question: 'How do I start working with VESTARA?',
    answer: 'Submit a quote request form on our website or message us on WhatsApp. An account manager will contact you within 24 hours to discuss your requirements.',
  },
  {
    category: 'Getting Started',
    question: 'Do you work with new brands and startups?',
    answer: 'Absolutely. We specialize in supporting emerging brands and online sellers who need a reliable sourcing partner with low MOQ flexibility.',
  },
  {
    category: 'Getting Started',
    question: 'Can I visit the factories?',
    answer: 'Yes. We arrange factory visits for serious buyers. Factory tours are coordinated through our team and are available at no charge for orders above 1,000 pcs.',
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Inquiry & Consultation',
    timeline: 'Day 1',
    description: 'Submit your product brief via our quote form or WhatsApp. A dedicated account manager contacts you within 24 hours for a 30-minute discovery call.',
    deliverable: 'Initial response within 24 hours, questionnaire to clarify requirements',
  },
  {
    step: 2,
    title: 'Factory Matching',
    timeline: 'Days 2–5',
    description: 'We review your requirements and match them against our factory network — selecting the best fit for product type, MOQ, compliance needs, and target price.',
    deliverable: 'Factory recommendation sheet with capabilities overview',
  },
  {
    step: 3,
    title: 'Costing & Sampling',
    timeline: 'Days 5–21',
    description: 'We issue a preliminary cost estimate within 3 business days. Once approved, proto sample development begins. Sample shipping included for serious buyers.',
    deliverable: 'Preliminary cost sheet, sample development timeline',
  },
  {
    step: 4,
    title: 'Sample Approval',
    timeline: 'Days 21–28',
    description: 'You review the proto sample against your brief. Revision rounds are handled efficiently — most orders achieve approval within 1–2 sample rounds.',
    deliverable: 'Physical sample with fabric card, trim card, measurement sheet',
  },
  {
    step: 5,
    title: 'Order Confirmation',
    timeline: 'Day 28–35',
    description: 'Proforma Invoice issued. 30–50% deposit initiates production. All specifications locked in writing before production begins.',
    deliverable: 'Proforma Invoice, production specifications document',
  },
  {
    step: 6,
    title: 'Production & QC',
    timeline: 'Days 35–80',
    description: 'In-line and mid-line quality checks performed by our QC team. Weekly production reports sent to you with photo updates.',
    deliverable: 'Weekly progress reports, inline inspection report, pre-shipment report',
  },
  {
    step: 7,
    title: 'Delivery',
    timeline: 'Day 80–90',
    description: 'Pre-shipment inspection signed off. Booking confirmed with freight forwarder. Full document pack (B/L, packing list, commercial invoice, C/O) delivered to you.',
    deliverable: 'Full shipping documentation, tracking information, post-shipment support',
  },
]

export const services = [
  {
    title: 'Product Development',
    icon: 'ruler',
    description: 'From concept to proto sample — we assist with tech pack creation, fabric selection, lab dips, and trim sourcing. We bring your design brief to life before production begins.',
    includes: ['Tech pack review', 'Fabric sourcing', 'Sample development', 'Costing'],
  },
  {
    title: 'Factory Sourcing & Matching',
    icon: 'factory',
    description: 'We maintain a vetted network of 15+ Bangladesh factories. We match your specific product, quality, and compliance requirements to the right manufacturing partner.',
    includes: ['Factory audit', 'Capacity assessment', 'Compliance check', 'Factory tour coordination'],
  },
  {
    title: 'Merchandising & Production Follow-up',
    icon: 'clipboard',
    description: 'Our in-house merchandisers track every order milestone — from PP sample approval to final shipment — keeping you informed with regular production reports.',
    includes: ['BOM management', 'Production schedule', 'PP sample approval', 'Milestone reporting'],
  },
  {
    title: 'Quality Control',
    icon: 'shield',
    description: 'Multi-stage inspection protocol covering inline inspection, mid-line, and pre-shipment inspection — with AQL 2.5 as standard.',
    includes: ['Inline QC', 'Pre-shipment inspection', 'AQL sampling', 'Lab testing coordination'],
  },
  {
    title: 'Private Label & Branding',
    icon: 'tag',
    description: 'Complete private label setup — from woven labels and hangtags to polybag printing and retail-ready packaging. We make your brand look premium from day one.',
    includes: ['Label production', 'Hangtags', 'Packaging', 'Brand compliance'],
  },
  {
    title: 'Logistics Coordination',
    icon: 'truck',
    description: 'We coordinate with freight forwarders to offer FOB Chittagong and CIF options, with full documentation support for customs clearance in your market.',
    includes: ['FOB/CIF', 'Shipping documentation', 'HS code advisory', 'Freight forwarder referral'],
  },
]

export const countries = [
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇪🇺', name: 'European Union' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇪', name: 'Middle East' },
]
