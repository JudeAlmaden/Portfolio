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
    problem:
      'Traditional optical mark recognition (OMR) testing requires expensive, specialized scanner hardware and rigid physical paper templates that are inaccessible for many schools and educators.',
    tags: ['React', 'PHP', 'Laravel', 'Docker', 'OpenCV.js'],
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
    highlights: [
      'Built a client-side Optical Mark Recognition (OMR) scanner using OpenCV.js with 99% test grading accuracy across multi-format bubble sheets.',
      'Designed and developed a PWA-ready dashboard using React, Tailwind CSS, Laravel, and MySQL.',
      'Containerized the full stack application using Docker and deployed on Render cloud platform.',
    ],
  },
  {
    id: 11,
    title: 'KaiwaAI',
    github: 'https://github.com/JudeAlmaden/KaiwaAI',
    live: 'https://kaiwa-ai.vercel.app',
    description:
      'AI-powered Japanese language learning platform with conversational practice and a persistent AI companion.',
    problem:
      'Language learners often lack consistent access to native speaking partners and real-time contextual feedback, making conversational fluency difficult to achieve outside immersive environments.',
    tags: ['Next.js', 'Vercel', 'Supabase', 'Capacitor', 'Gemini AI'],
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
    highlights: [
      'Integrated Google Gemini AI to power 5+ contextual learning tools: dynamic conversations, custom scenario generation, roleplay, and sentence breakdowns.',
      'Architected responsive user interfaces with Next.js App Router, TypeScript, and Tailwind CSS.',
      'Managed relational data and authentication using Prisma ORM, PostgreSQL, and Supabase.',
      'Packaged and deployed as a cross-platform mobile application using Capacitor.',
    ],
  },
  {
    id: 6,
    title: 'Swift Accounting System',
    github: 'https://github.com/JudeAlmaden/SwiftAccountingSystem',
    description:
      'Commissioned by the Accounting Head of St. Anne College to transition the school’s disbursement operations from paper to digital. Features multi-tier voucher approval routing, financial statement generation, and real-time expense analytics.',
    problem:
      'The disbursement process at St. Anne College was heavily bottlenecked by physical paper vouchers requiring multi-person manual sign-offs (Assistant creates voucher → Accounting Head approves → Auditor reviews → SVP signs off → returned to Assistant), causing long delays and fragmented audit trails.',
    tags: ['Laravel', 'React', 'MySQL', 'Blade'],
    thumbnail: `${base}images/swift/showcase.png`,
    gallery: [
      `${base}images/swift/showcase.png`,
      `${base}images/swift/image-1.png`,
      `${base}images/swift/image-2.png`,
      `${base}images/swift/image-3.png`,
      `${base}images/swift/image-4.png`,
      `${base}images/swift/image-5.png`,
      `${base}images/swift/image-6.png`,
    ],
    highlights: [
      'Engineered an end-to-end multi-role approval pipeline connecting Accounting Assistants, Accounting Head, Internal Auditors, and the Senior Vice President (SVP).',
      'Implemented automated financial reporting modules including Trial Balance, Income Statements, and ledger audits.',
      'Developed real-time institutional dashboards visualizing disbursement volume, department allocations, and expense statistics.',
      'Eliminated paper voucher bottlenecks by digitizing voucher creation, status tracking, and multi-tier approval sign-offs.',
    ],
  },
  {
    id: 10,
    title: 'Hi-Queue',
    github: 'https://github.com/JudeAlmaden',
    live: 'https://hi-queue.vercel.app/',
    description:
      'Comprehensive queuing application that empowers users to create custom organizations and fully customizable portal experiences. An improved version of Sacli-Q.',
    problem:
      'Physical queuing in campus offices caused overcrowding, long idle waiting times, and poor visibility into service status for students and administrative staff.',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Supabase'],
    thumbnail: `${base}images/hi_queue/showcase.png`,
    gallery: [
      `${base}images/hi_queue/showcase.png`,
      `${base}images/hi_queue/image-1.png`,
      `${base}images/hi_queue/image-2.png`,
      `${base}images/hi_queue/image-3.png`,
      `${base}images/hi_queue/image-4.png`,
      `${base}images/hi_queue/image-5.png`,
    ],
    highlights: [
      'Engineered a multi-tenant queue management SaaS platform allowing organizations to build customized ticketing workflows and client portals.',
      'Developed real-time status updates and ticket tracking using Next.js, TypeScript, and Vercel.',
      'Implemented responsive customer tracking portals and administrative control centers.',
    ],
  },
  {
    id: 3,
    title: 'SACLI-Q',
    github: 'https://github.com/JudeAlmaden/SACLI-Q',
    description:
      "A queue system with a 'Where's My Ticket?' portal for remote queue status tracking. Developed for my school.",
    problem:
      'Students faced long physical waiting lines across multiple college offices with no way to track queue progress or know when their turn was approaching remotely.',
    tags: ['Laravel', 'MySQL', 'PHP', 'Blade'],
    thumbnail: `${base}images/sacli_queue/showcase.png`,
    gallery: [
      `${base}images/sacli_queue/showcase.png`,
      `${base}images/sacli_queue/image-1.png`,
      `${base}images/sacli_queue/image-2.png`,
      `${base}images/sacli_queue/image-3.png`,
    ],
    highlights: [
      'Developed and deployed a multi-office queuing system for daily college operations, handling hundreds of student visits each day.',
      "Created a dedicated 'Where’s My Ticket?' web portal enabling students to monitor queue positions in real-time.",
      'Designed role-based administrative dashboards for office staff and registrars.',
    ],
  },
  {
    id: 2,
    title: 'Quizzly',
    github: 'https://github.com/JudeAlmaden/Quizzly_SPA',
    description:
      'Real-time interactive quiz bee platform deployed for foundation day competitive events.',
    problem:
      'Running school-wide competitive quiz bees with manual score tallying was slow, prone to disputes, and lacked live audience engagement.',
    tags: ['Laravel', 'Vue.js', 'PHP', 'Blade'],
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
    highlights: [
      'Engineered a live interactive quiz bee platform for school-wide foundation day competitions.',
      'Built high-performance single-page interfaces with Vue.js, Laravel, and Blade templates.',
      'Implemented live participant score tracking and real-time leaderboard projection displays.',
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
    problem:
      'Manual paper bingo card distribution and game tracking for large school events was wasteful and prone to duplicate card errors.',
    tags: ['React', 'TailwindCSS'],
    thumbnail: `${base}images/bingo/showcase.png`,
    gallery: [
      `${base}images/bingo/showcase.png`,
      `${base}images/bingo/image-1.png`,
      `${base}images/bingo/image-2.png`,
    ],
    highlights: [
      'Interactive digital bingo game with randomized card generation and automated game state verification.',
      'Configured automated CI/CD deployment pipelines using GitHub Pages and Tailwind CSS.',
    ],
  },
  {
    id: 12,
    title: 'WriteSphere',
    github: 'https://github.com/JudeAlmaden',
    description:
      'A hands-on learning project built to explore custom MVC architectures in Vanilla PHP, live markdown parsing, and publishing workflows.',
    tags: ['Vanilla PHP', 'MVC Framework', 'MySQL'],
    thumbnail: `${base}images/writesphere/showcase.png`,
    gallery: [
      `${base}images/writesphere/showcase.png`,
      `${base}images/writesphere/image-1.png`,
      `${base}images/writesphere/image-2.png`,
      `${base}images/writesphere/image-3.png`,
    ],
    highlights: [
      'Built a custom MVC architecture in Vanilla PHP to understand core backend design patterns from scratch.',
      'Implemented markdown parsing and document editing with real-time preview.',
    ],
  },
  {
    id: 4,
    title: 'Sisigan ni kuya moy',
    description:
      'An interactive virtual menu and ordering system developed as a learning project exploring React components and full-stack integration.',
    tags: ['React.js', 'PHP', 'MySQL'],
    thumbnail: `${base}images/ecommerce/showcase.png`,
    gallery: [
      `${base}images/ecommerce/showcase.png`,
      `${base}images/ecommerce/image-1.png`,
      `${base}images/ecommerce/image-2.png`,
      `${base}images/ecommerce/image-3.png`,
      `${base}images/ecommerce/image-4.png`,
      `${base}images/ecommerce/image-5.png`,
    ],
    highlights: [
      'Interactive digital e-menu interface with item selection and cart management.',
      'Connected frontend React views to PHP and MySQL backends for order data persistence.',
    ],
  },
  {
    id: 9,
    title: 'Scout',
    description:
      'Proprietary QA governance test case management dashboard developed during our internship.',
    problem:
      'Fragmented spreadsheet-based QA test tracking made test regression analysis, test case governance, and CI/CD status reporting inefficient during engineering cycles.',
    tags: ['Django', 'React', 'MySQL', 'Docker', 'GitLab CI/CD'],
    thumbnail: `${base}images/scout/showcase.png`,
    gallery: [
      `${base}images/scout/showcase.png`,
      `${base}images/scout/image-1.png`,
      `${base}images/scout/image-2.png`,
      `${base}images/scout/image-3.png`,
    ],
    highlights: [
      'Developed during software engineering internship at Open iT Asia, Inc.',
      'Implemented features for QA test case management, tracking, and execution dashboards.',
      'Built backend REST APIs using Django and MySQL schemas, managed within Docker and GitLab CI/CD.',
    ],
  },
  {
    id: 5,
    title: 'Booking System',
    description:
      'CodeIgniter Admin Dashboard for managing user bookings, payment requests, and trip schedules.',
    problem:
      'Trip scheduling, reservation approvals, and payment verifications were handled through fragmented chat logs and manual spreadsheets.',
    tags: ['CodeIgniter', 'PHP', 'MySQL'],
    thumbnail: `${base}images/booking_sys/showcase.png`,
    gallery: [`${base}images/booking_sys/showcase.png`],
    highlights: [
      'Full-featured reservation management system built on CodeIgniter PHP and MySQL.',
      'Features automated booking verification, schedule calendars, payment requests, and administrative reporting.',
    ],
  },
];
