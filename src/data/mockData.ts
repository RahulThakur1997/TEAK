import { SectorItem, CaseStudy, ReviewItem, BeforeAfterProject } from '../types';

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'hospitality',
    category: 'hospitality',
    title: 'Hospitality & Dining',
    subtitle: 'Cafés, Signature Restaurants, Wine Bars & Nightlife',
    description: 'Specialised high-cadence hospitality fit-outs built around kitchen extraction, grease trap sequencing, acoustic dampening, and bespoke patron flow.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Typically 6-10 Week Turnarounds',
    capabilities: [
      'Commercial grade kitchen & bar hydraulic installs',
      'Exhaust & mechanical ventilation coordination',
      'Custom fluted timber, marble & brass bar joinery',
      'Heritage building compliance & structural alterations'
    ],
    keyHighlights: ['Zero trading day delay', 'Acoustic baffle ceilings', 'Melbourne liquor licensing compliance'],
    sampleProject: 'Contraband Artisan Coffee & Roastery, Fitzroy'
  },
  {
    id: 'commercial',
    category: 'commercial',
    title: 'Commercial & Workplace',
    subtitle: 'Corporate HQs, Tech Hubs & Executive Boardrooms',
    description: 'High-density office transformations engineered for agile workflows, acoustic privacy, integrated AV technology, and staff wellness.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    metrics: '300 to 3,500+ sqm Workspaces',
    capabilities: [
      'Glazed acoustic partition suites (Rw 48+)',
      'Structured server room cabling & UPS power sequencing',
      'Architectural exposed ceiling services & baffle baffles',
      'Fast-track live-environment floor staging'
    ],
    keyHighlights: ['Minimal tenant disruption', 'DEFECT-FREE handover standard', 'NABERS rating energy upgrades'],
    sampleProject: 'Synechron Financial Headquarters, Collins St'
  },
  {
    id: 'medical',
    category: 'medical',
    title: 'Medical & Specialist',
    subtitle: 'Clinical Suites, Dental Practices & Day Surgeries',
    description: 'Strict AS/NZS compliance, medical gas piping, radiation shielding, anti-microbial surfaces, and vibration-isolated equipment slabs.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Strict AS 4187 & Infection Control',
    capabilities: [
      'Lead-lined X-ray & imaging room shielding',
      'Class 100/1000 cleanroom HVAC filtration systems',
      'Chair-side suction, nitrogen & nitrous oxide chases',
      'Acoustic doctor-patient consultation containment'
    ],
    keyHighlights: ['Council medical permit specialists', 'Heavy equipment floor reinforcement', 'Non-porous clinical joinery'],
    sampleProject: 'Lumina Dermatology & Surgical, East Melbourne'
  },
  {
    id: 'retail',
    category: 'retail',
    title: 'Retail & Flagships',
    subtitle: 'High-Fashion Boutiques, Flagship Showrooms & Galleries',
    description: 'Experiential spaces where precision lighting, bespoke product displays, and ultra-durable micro-cement floor finishes captivate foot traffic.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Mall & High-Street Strip Specialists',
    capabilities: [
      'Chadstone & Melbourne Central after-hours hoardings',
      'Integrated hidden LED track & directional spotlighting',
      'Sculptural micro-cement and polished Venetian plaster',
      'High-security lockable display cases & inventory safes'
    ],
    keyHighlights: ['Rapid launch delivery', 'Direct joinery fabrication', 'Zero punch-list handover'],
    sampleProject: 'Atelier Maison Luxury Flagship, High St Armadale'
  },
  {
    id: 'trades',
    category: 'trades',
    title: 'In-House Trades Division',
    subtitle: 'Direct Payroll Master Carpenters, Framers & Plasterers',
    description: 'Unlike commercial brokers who subcontract 100% of the site, TEAK deploys full-time employed carpenters and tradesmen on every project critical path.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    metrics: '14+ Master Craftsmen on Direct Payroll',
    capabilities: [
      'Structural steel framing & timber stud work',
      'Architectural acoustic ceilings & baffle assemblies',
      'Bespoke timber shop-fitting & wall paneling',
      'Rapid sequence change response without variation extortion'
    ],
    keyHighlights: ['Zero middleman markup', 'Guaranteed craftsman accountability', 'Direct site sequencing'],
    sampleProject: 'Bespoke Architectural Frameworks Across All Sites'
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'synechron',
    title: 'Synechron Melbourne Financial Headquarters',
    location: '101 Collins Street, Melbourne CBD',
    sqm: '850 sqm',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    beforeLabel: 'Raw Concrete Shell — Week 0',
    afterLabel: 'Handover & Occupancy — Week 10',
    details: 'Complete strip-out of obsolete 1990s floorplate to exposed industrial slabs, followed by full installation of acoustic timber slats, executive boardroom, glass partitions, and integrated boardroom AV.'
  },
  {
    id: 'contraband',
    title: 'Contraband Artisan Coffee & Roastery',
    location: 'Argyle Street, Fitzroy',
    sqm: '310 sqm',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80',
    beforeLabel: 'Derelict Industrial Shell — Week 0',
    afterLabel: 'Completed Roastery & Espresso Bar — Week 7',
    details: 'Structural reinforcement of 90-year-old brickwork, custom hydraulic grease separation, hand-poured micro-cement countertops, and in-house bespoke charred oak joinery.'
  },
  {
    id: 'lumina',
    title: 'Lumina Specialist Medical Suites',
    location: 'Clarendon Street, East Melbourne',
    sqm: '420 sqm',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    beforeLabel: 'Unserviced Cold Shell — Week 0',
    afterLabel: 'Operational Specialist Suites — Week 8',
    details: 'Acoustic Rw 52 partition isolation for consult privacy, clinical surgical lighting, isolated negative pressure HVAC ducting, and anti-bacterial seamless vinyl floors.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'The George on Flinders',
    sector: 'Hospitality & Dining',
    location: 'Flinders Lane, Melbourne CBD',
    sqm: 420,
    duration: '8 Weeks',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A subterranean restaurant and bespoke cocktail salon inside a heritage basement. Engineered with custom structural steel portal frames to support double-height bottle shelving and heavy stone bar tops.',
    clientQuote: {
      text: 'James and Matthew were on site every single morning at 6:45 AM. When an unexpected underground sewer clash threatened our opening date, TEAK redesigned the pipe run with their own plumbers within 4 hours. No delays, no gouging.',
      author: 'George Castan',
      role: 'Founding Partner & Restaurateur'
    },
    keyFeatures: ['Heritage Melbourne basalt preservation', 'Negative pressure kitchen extraction', 'Custom bronze & smoked timber joinery']
  },
  {
    id: 'cs-2',
    title: 'Apex Capital Executive HQ',
    sector: 'Commercial & Workplace',
    location: '101 Collins Street, Melbourne',
    sqm: 850,
    duration: '11 Weeks',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-spec financial headquarters featuring curved acoustic glazed suites, custom American walnut boardrooms, and smart building automated climate zoning.',
    clientQuote: {
      text: 'Having the building firm directors directly manage trade tradespeople eliminated the typical finger-pointing you get with tier-2 builders. Flawless execution.',
      author: 'Caroline Vance',
      role: 'Chief Operating Officer, Apex Capital'
    },
    keyFeatures: ['Acoustic rating Rw 50 partitions', 'Boardroom video-conferencing integration', 'Terrazzo reception with concealed lighting']
  },
  {
    id: 'cs-3',
    title: 'Lumina Aesthetic & Surgical Clinic',
    sector: 'Medical & Specialist',
    location: 'East Melbourne Medical Precinct',
    sqm: 340,
    duration: '8 Weeks',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Turnkey medical and laser clinic compliant with AS 4187 standards, including scrub rooms, medical gas lines, and specialized laser safety interlocks.',
    clientQuote: {
      text: 'Medical fit-outs require zero room for error. TEAK understood the healthcare codes better than our architect. We passed council and departmental health inspections on the first round.',
      author: 'Dr. Marcus Webb',
      role: 'Medical Director & Plastic Surgeon'
    },
    keyFeatures: ['Medical gas manifold system', 'Laser safety door sensors & warning beacons', 'Anti-microbial seamless surfaces']
  },
  {
    id: 'cs-4',
    title: 'Atelier Maison Luxury Flagship',
    sector: 'Retail & Flagships',
    location: 'High Street, Armadale',
    sqm: 280,
    duration: '6 Weeks',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bespoke retail space with hand-troweled micro-cement floors, blackened steel hanging racks, and recessed museum-grade optical spotlights (CRI 98).',
    clientQuote: {
      text: 'The speed and finish quality TEAK produced in Armadale was extraordinary. Their carpentry team built our cash desk on-site like fine furniture.',
      author: 'Elena Rinaldi',
      role: 'Brand Director, Atelier Maison'
    },
    keyFeatures: ['Continuous seamless micro-cement', 'Custom blackened steel display system', 'Concealed security & inventory tracking']
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Dimitri Kostas',
    role: 'Owner & Operator',
    company: 'Saint Urban Dining & Bar',
    projectType: 'Hospitality Fit-Out',
    avatarText: 'DK',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Working with James and Matthew was a breath of fresh air. Every other commercial builder we interviewed was essentially a broker who was going to sub out our venue to subcontractors they’d never worked with. TEAK’s own carpenters built our curved bar and ceiling baffles. Handed over 4 days ahead of schedule, opening weekend went off without a hitch.',
    highlight: 'Handed over 4 days ahead of schedule with in-house carpenters'
  },
  {
    id: 'rev-2',
    name: 'Sarah Henderson',
    role: 'Head of People & Facilities',
    company: 'Fintech Melbourne',
    projectType: 'Corporate Office Fit-Out',
    avatarText: 'SH',
    rating: 5,
    date: '1 month ago',
    comment: 'We relocated our 120-person team to 101 Collins. TEAK managed the entire 900 sqm fit-out while the building below us was fully tenanted. Zero noise complaints, meticulous dust protection, and the directors were personally on site every day at 7 AM. Absolutely recommend without reservation.',
    highlight: 'Zero noise complaints and directors on site daily at 7 AM'
  },
  {
    id: 'rev-3',
    name: 'Dr. Anthony Chen',
    role: 'Principal Orthodontist',
    company: 'Melbourne Smile Specialist Clinic',
    projectType: 'Medical & Dental Clinic',
    avatarText: 'AC',
    rating: 5,
    date: '2 months ago',
    comment: 'Medical and dental construction is notoriously unforgiving with plumbing and suction chases. Matthew Papadimitriou went over every millimetre of our CAD drawings with the dental chair technicians. The result is flawless. Registered builder CB-L 67337 credential gave our landlord complete peace of mind.',
    highlight: 'Passed all medical council and Department of Health audits first time'
  },
  {
    id: 'rev-4',
    name: 'Julian Montgomery',
    role: 'Managing Director',
    company: 'Montgomery Retail Properties',
    projectType: 'Retail Flagship',
    avatarText: 'JM',
    rating: 5,
    date: '3 months ago',
    comment: 'As a commercial landlord in South Yarra and Armadale, we’ve seen countless builders drag jobs out with bogus delay claims. TEAK is the exact opposite: tight sequencing, in-house carpenters who take pride in the craft, and transparent cost reporting. They are our go-to builders in Melbourne.',
    highlight: 'Tight sequencing and transparent cost reporting. The gold standard.'
  },
  {
    id: 'rev-5',
    name: 'Tess Gallagher',
    role: 'Creative Director',
    company: 'Studio Arc Interior Architecture',
    projectType: 'Architectural Hospitality',
    avatarText: 'TG',
    rating: 5,
    date: '4 months ago',
    comment: 'As architects, we fear builders who compromise design intent to cut corners. James Papadimitriou treated our architectural detailing with respect and brought craft solutions that actually improved the acoustic performance. A truly director-led builder.',
    highlight: 'Treated our architectural detailing with utmost respect'
  }
];

export const DIRECTORS = [
  {
    name: 'James Papadimitriou',
    role: 'Co-Director & Head of Construction & Trades',
    experience: '15+ Years Commercial & Carpentry Mastery',
    focus: 'On-site sequencing, direct trade management, structural detailing, quality control',
    phone: '+61 3 9000 8325',
    email: 'james@teakbuildinggroup.com.au',
    image: '/james-director.jpg',
    fallbackImage: 'https://teakbuildinggroup.com.au/images/about-james.jpg',
    quote: '"If you build it with your own hands, you treat every millimeter like your name is on it. Because it is."'
  },
  {
    name: 'Matthew Papadimitriou',
    role: 'Co-Director & Commercial Contracts & Program',
    experience: '14+ Years Commercial Construction & Project Delivery',
    focus: 'Cost planning, procurement velocity, council permits, authority sign-offs, lease negotiations',
    phone: '+61 3 9000 8326',
    email: 'matthew@teakbuildinggroup.com.au',
    image: '/matthew-director.jpg',
    fallbackImage: 'https://media.licdn.com/dms/image/v2/D4E22AQFJ66iA-LAlKw/feedshare-shrink_800/B4EZ0ZX2T7GkAc-/0/1774247175921?e=1793836800&v=beta&t=0XD8AUsk-n_R1pOVYt7gG84GQXb-UZzyF9aU9YUPuu4',
    quote: '"Zero bureaucracy. When clients have a critical decision, they don’t talk to a junior coordinator. They talk directly to us."'
  }
];
