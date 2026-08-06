const base = import.meta.env.BASE_URL;

/* ─── Featured Flagship Projects (Sticky Showcase) ─────────────────── */
export const FEATURED = [
  {
    id: 1,
    title: 'EasyAssess',
    github: 'https://github.com/JudeAlmaden/EasyAssess',
    live: 'https://easyassessomr.site',
    description:
      'Transforms any smartphone into a precision OMR scanner. Print, scan, and get results instantly — completely hardware-free.',
    tags: ['React', 'PHP', 'Laravel', 'Docker'],
    thumbnail: `${base}images/easy_assess/showcase.png`,
    gallery: [
      `${base}images/easy_assess/showcase.png`,
      `${base}images/easy_assess/image-1.png`,
      `${base}images/easy_assess/image-2.png`,
      `${base}images/easy_assess/image-3.png`,
      `${base}images/easy_assess/image-4.png`,
      `${base}images/easy_assess/image-5.png`,
      `${base}images/easy_assess/image-6.png`,
    ],
  },
  {
    id: 11,
    title: 'KaiwaAI',
    github: 'https://github.com/JudeAlmaden/KaiwaAI',
    live: 'https://kaiwa-ai.vercel.app',
    description:
      'AI-powered Japanese language learning platform with conversational practice and a persistent AI companion.',
    tags: ['Next.js', 'Vercel', 'Supabase', 'Capacitor'],
    thumbnail: `${base}images/kaiwa_ai/showcase.png`,
    gallery: [
      `${base}images/kaiwa_ai/showcase.png`,
      `${base}images/kaiwa_ai/image-1.jpg`,
      `${base}images/kaiwa_ai/image-2.jpg`,
      `${base}images/kaiwa_ai/image-3.jpg`,
      `${base}images/kaiwa_ai/image-4.jpg`,
      `${base}images/kaiwa_ai/image-5.jpg`,
      `${base}images/kaiwa_ai/mobile-1.png`,
      `${base}images/kaiwa_ai/mobile-2.png`,
      `${base}images/kaiwa_ai/mobile-3.png`,
      `${base}images/kaiwa_ai/mobile-4.png`,
    ],
  },
  {
    id: 6,
    title: 'Swift Accounting System',
    github: 'https://github.com/JudeAlmaden/SwiftAccountingSystem',
    description:
      'Accounting registry system developed to simplify the disbursement flow of our school.',
    tags: ['Laravel', 'React', 'MySQL'],
    thumbnail: `${base}images/swift/showcase.png`,
    gallery: [
      `${base}images/swift/showcase.png`,
      `${base}images/swift/image-1.png`,
      `${base}images/swift/image-2.png`,
      `${base}images/swift/image-3.png`,
      `${base}images/swift/image-4.png`,
      `${base}images/swift/image-5.png`,
    ],
  },
  {
    id: 10,
    title: 'Hi-Queue',
    github: 'https://github.com/JudeAlmaden',
    live: 'https://hi-queue.vercel.app/',
    description:
      'Comprehensive queuing application that empowers users to create custom organizations and fully customizable portal experiences. An improved version of Sacli-Q.',
    tags: ['Next.js', 'TypeScript', 'Vercel'],
    thumbnail: `${base}images/hi_queue/showcase.png`,
    gallery: [
      `${base}images/hi_queue/showcase.png`,
      `${base}images/hi_queue/image-1.png`,
      `${base}images/hi_queue/image-2.png`,
      `${base}images/hi_queue/image-3.png`,
      `${base}images/hi_queue/image-4.png`,
      `${base}images/hi_queue/image-5.png`,
    ],
  },
  {
    id: 3,
    title: 'SACLI-Q',
    github: 'https://github.com/JudeAlmaden/SACLI-Q',
    description:
      "A queue system with a 'Where's My Ticket?' portal for remote queue status tracking. Developed for my school.",
    tags: ['Laravel', 'MySQL'],
    thumbnail: `${base}images/sacli_queue/showcase.png`,
    gallery: [
      `${base}images/sacli_queue/showcase.png`,
      `${base}images/sacli_queue/image-1.png`,
      `${base}images/sacli_queue/image-2.png`,
      `${base}images/sacli_queue/image-3.png`,
    ],
  },
  {
    id: 2,
    title: 'Quizzly',
    github: 'https://github.com/JudeAlmaden/Quizzly_SPA',
    description:
      'Real-time interactive quiz bee platform deployed for foundation day competitive events.',
    tags: ['Laravel', 'Vue.js'],
    thumbnail: `${base}images/quizzly/showcase.png`,
    gallery: [
      `${base}images/quizzly/showcase.png`,
      `${base}images/quizzly/image-0.png`,
      `${base}images/quizzly/image-1.png`,
      `${base}images/quizzly/image-2.png`,
      `${base}images/quizzly/image-3.png`,
      `${base}images/quizzly/image-4.png`,
      `${base}images/quizzly/image-5.png`,
      `${base}images/quizzly/image-6.png`,
      `${base}images/quizzly/image-7.png`,
      `${base}images/quizzly/image-8.png`,
      `${base}images/quizzly/image-9.png`,
    ],
  },
];

/* ─── Archive Projects (Grid Below) ───────────────────────────────── */
export const ARCHIVE = [
  {
    id: 8,
    title: 'Sacli Bingo',
    github: 'https://github.com/JudeAlmaden/SacliBingo',
    live: 'https://judealmaden.github.io/SacliBingo/',
    description:
      'Bingo game with auto CI/CD deployments and clean digital card generators.',
    tags: ['React', 'TailwindCSS'],
    thumbnail: `${base}images/bingo/showcase.png`,
    gallery: [
      `${base}images/bingo/showcase.png`,
      `${base}images/bingo/image-1.png`,
      `${base}images/bingo/image-2.png`,
    ],
  },
  {
    id: 12,
    title: 'WriteSphere',
    github: 'https://github.com/JudeAlmaden',
    description:
      'Modern collaborative writing and publishing platform featuring rich markdown editing and real-time preview.',
    tags: ['Vanilla PHP', 'MVC Framework'],
    thumbnail: `${base}images/writesphere/showcase.png`,
    gallery: [
      `${base}images/writesphere/showcase.png`,
      `${base}images/writesphere/image-1.png`,
      `${base}images/writesphere/image-2.png`,
      `${base}images/writesphere/image-3.png`,
    ],
  },
  {
    id: 4,
    title: 'Sisigan ni kuya moy',
    description:
      'Interactive e-menu, online ordering, and customer polling platform created for a local canteen.',
    tags: ['React.js', 'PHP'],
    thumbnail: `${base}images/ecommerce/showcase.png`,
    gallery: [
      `${base}images/ecommerce/showcase.png`,
      `${base}images/ecommerce/image-1.png`,
      `${base}images/ecommerce/image-2.png`,
      `${base}images/ecommerce/image-3.png`,
      `${base}images/ecommerce/image-4.png`,
      `${base}images/ecommerce/image-5.png`,
    ],
  },
  {
    id: 9,
    title: 'Scout',
    description:
      'Proprietary QA governance test case management dashboard developed during our internship.',
    tags: ['Django', 'MySQL', 'Docker'],
    thumbnail: `${base}images/scout/showcase.png`,
    gallery: [
      `${base}images/scout/showcase.png`,
      `${base}images/scout/image-1.png`,
      `${base}images/scout/image-2.png`,
      `${base}images/scout/image-3.png`,
    ],
  },
  {
    id: 5,
    title: 'Booking System',
    description:
      'CodeIgniter Admin Dashboard for managing user bookings, payment requests, and trip schedules.',
    tags: ['CodeIgniter', 'PHP'],
    thumbnail: `${base}images/booking_sys/showcase.png`,
    gallery: [`${base}images/booking_sys/showcase.png`],
  },
];
