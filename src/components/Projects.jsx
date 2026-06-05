import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const base = import.meta.env.BASE_URL;

const projectsList = [
  {
    id: 1,
    title: "EasyAssess",
    github: "https://github.com/JudeAlmaden/EasyAssess",
    live: "https://easyassessomr.site",
    category: "Fullstack",
    tagline: "Transforms any smartphone into a precision OMR scanner. Print, scan, and get results instantly — completely hardware-free.",
    role: "Solo Creator",
    year: "2025",
    metrics: ["✓ Offline PWA support", "✓ Mobile-first OMR dashboard", "✓ Instant grading analytics"],
    images: [
      `${base}images/easy_assess/easy-assess-hero.png`,
      `${base}images/easy_assess/easy-assess-2.png`,
      `${base}images/easy_assess/easy-assess-3.png`,
      `${base}images/easy_assess/easy-assess-4.png`,
      `${base}images/easy_assess/easy-assess-5.png`,
    ],
    tags: ["PHP", "React.js", "TailwindCSS"],
    theme: "from-emerald-500/10 via-teal-500/5 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.25)",
    gridClass: "lg:col-span-3 md:col-span-6",
    hasLiveDemo: true,
  },
  {
    id: 10,
    title: "Hi-Queue",
    github: "https://github.com/JudeAlmaden",
    live: "https://hi-queue.vercel.app/",
    category: "Fullstack",
    tagline: "Comprehensive queuing application that empowers users to create custom organizations and fully customizable portal experiences.",
    role: "Sole Developer",
    year: "2025",
    metrics: ["✓ Multi-organization support", "✓ Customizable portal interfaces", "✓ Real-time queue management"],
    images: [
      `${base}images/hi-queue/781_1x_shots_so.png`,
      `${base}images/hi-queue/596_1x_shots_so.png`,
      `${base}images/hi-queue/73_1x_shots_so.png`,
      `${base}images/hi-queue/947_1x_shots_so.png`,
      `${base}images/hi-queue/960_1x_shots_so.png`,
    ],
    tags: ["Next.js", "React", "TypeScript"],
    theme: "from-indigo-500/10 via-purple-500/5 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.25)",
    gridClass: "lg:col-span-3 md:col-span-6",
    hasLiveDemo: true,
  },
  {
    id: 8,
    title: "Sacli Bingo",
    github: "https://github.com/JudeAlmaden/SacliBingo",
    live: "https://judealmaden.github.io/SacliBingo/",
    category: "Frontend",
    tagline: "Bingo game with auto CI/CD deployments and clean digital card generators.",
    role: "Frontend Dev",
    year: "2024",
    metrics: ["✓ Github pages deployment", "✓ PWA support", "✓ Clean UI, easy to use"],
    images: [
      `${base}images/bingo/bingo-hero.png`,
      `${base}images/bingo/bingo-2.png`,
      `${base}images/bingo/bingo-3.png`,
    ],
    tags: ["React", "TailwindCSS"],
    theme: "from-lime-500/10 via-emerald-500/5 to-transparent",
    glowColor: "rgba(132, 204, 22, 0.25)",
    gridClass: "lg:col-span-2 md:col-span-3",
    hasLiveDemo: true,
  },
  {
    id: 2,
    title: "Quizzly",
    github: "https://github.com/JudeAlmaden/Quizzly_SPA",
    category: "Fullstack",
    tagline: "Real-time interactive quiz bee platform deployed for foundation day competitive events.",
    role: "Solo Developer",
    year: "2024",
    metrics: ["✓ Realtime scoreboard ", "✓ Gameshow style interface", "✓ Used in foundation day competitive events"],
    images: [
      `${base}images/quizzly/quizzly-hero.png`,
      `${base}images/quizzly/quizzly-2.png`,
      `${base}images/quizzly/quizzly-3.png`,
      `${base}images/quizzly/quizzly-4.png`,
    ],
    tags: ["Laravel", "Vue.js"],
    theme: "from-orange-500/10 via-amber-500/5 to-transparent",
    glowColor: "rgba(245, 158, 11, 0.25)",
    gridClass: "lg:col-span-4 md:col-span-3",
    hasLiveDemo: false,
  },
  {
    id: 9,
    title: "Scout Test Case Management",
    category: "Other",
    tagline: "Proprietary QA governance test case management dashboard designed for Open iT internship projects.",
    role: "QA Engineer & Developer",
    year: "2026",
    metrics: ["✓ Direct test repository pipelines", "✓ Source of truth for test cases", "✓ QA reporting and automation"],
    images: [
      `${base}images/scout/scout-hero.png`,
      `${base}images/scout/scout-2.png`,
      `${base}images/scout/scout-3.png`,
      `${base}images/scout/scout-4.png`,
    ],
    tags: ["QA Automation", "Laravel", "PostgreSQL"],
    theme: "from-purple-500/10 via-violet-500/5 to-transparent",
    glowColor: "rgba(139, 92, 246, 0.25)",
    gridClass: "lg:col-span-3 md:col-span-6",
    hasLiveDemo: false,
  },
  {
    id: 3,
    title: "SACLI-Q",
    github: "https://github.com/JudeAlmaden/SACLI-Q",
    category: "Fullstack",
    tagline: "Smart student services queue system with a 'Where's My Ticket?' portal for remote queue status tracking.",
    role: "Fullstack Architect",
    year: "2024",
    metrics: ["✓ Real-time ticket indicators", "✓ Operational throughput metrics", "✓ Supports multiple windows"],
    images: [
      `${base}images/sacli_queue/sacli-queue-hero.png`,
      `${base}images/sacli_queue/sacli-queue-2.png`,
      `${base}images/sacli_queue/sacli-queue-3.png`,
      `${base}images/sacli_queue/sacli-queue-4.png`,
    ],
    tags: ["Laravel", "Blade", "MySQL"],
    theme: "from-cyan-500/10 via-blue-500/5 to-transparent",
    glowColor: "rgba(6, 182, 212, 0.25)",
    gridClass: "lg:col-span-3 md:col-span-6",
    hasLiveDemo: false,
  },
  {
    id: 6,
    title: "Swift Accounting",
    github: "https://github.com/JudeAlmaden/SwiftAccountingSystem",
    category: "Fullstack",
    tagline: "Accounting registry system developed to simplify student disbursements and secure audit histories.",
    role: "Team Lead",
    year: "2024",
    metrics: ["✓Simplified approval flows for transactions", "✓ Accounts payable and receivable", "✓ Audit trail for all transactions"],
    images: [
      `${base}images/swift/swift-hero.png`,
      `${base}images/swift/swift-2.png`,
      `${base}images/swift/swift-3.png`,
      `${base}images/swift/swift-4.png`,
    ],
    tags: ["TypeScript", "Express"],
    theme: "from-violet-500/10 via-fuchsia-500/5 to-transparent",
    glowColor: "rgba(168, 85, 247, 0.25)",
    gridClass: "lg:col-span-2 md:col-span-3",
    hasLiveDemo: false,
  },
  {
    id: 4,
    title: "Restaurant E-Menu",
    github: "https://github.com/JudeAlmaden/E-menu-and-Online-Polling",
    category: "Frontend",
    tagline: "Digital menu and polling platform for a local restaurant, featuring interactive ordering and customer engagement.",
    role: "Developer",
    year: "2023",
    metrics: ["✓ Deployed on Vercel", "✓ Interactive live polls", "✓ Digital menu system"],
    images: [
      `${base}images/ecommerce/ecommerce-hero.png`,
      `${base}images/ecommerce/ecommerce-2.png`,
      `${base}images/ecommerce/ecommerce-3.png`,
      `${base}images/ecommerce/ecommerce-4.png`,
      `${base}images/ecommerce/ecommerce-5.png`,
      `${base}images/ecommerce/ecommerce-6.png`,
    ],
    tags: ["React.js", "TypeScript"],
    theme: "from-rose-500/10 via-pink-500/5 to-transparent",
    glowColor: "rgba(244, 63, 94, 0.25)",
    gridClass: "lg:col-span-4 md:col-span-3",
    hasLiveDemo: false,
  },
  {
    id: 5,
    title: "Booking System",
    github: "https://github.com/JudeAlmaden/BookingSysCodeIgniter",
    category: "Fullstack",
    tagline: "Comprehensive reservation workflows featuring calendar schedulers and record histories.",
    role: "Backend Architect",
    year: "2023",
    metrics: ["✓Multiple stopovers", "✓ Flexible schedulers", "✓ Reservation management"],
    images: [
      `${base}images/booking_sys/booking-hero.png`,
    ],
    tags: ["CodeIgniter", "PHP", "CSS"],
    theme: "from-sky-500/10 via-indigo-500/5 to-transparent",
    glowColor: "rgba(14, 165, 233, 0.25)",
    gridClass: "lg:col-span-4 md:col-span-6",
    hasLiveDemo: false,
    reverseLayout: true,
  },
  {
    id: 7,
    title: "WriteSphere",
    github: "https://github.com/JudeAlmaden/WriteSphere",
    category: "Fullstack",
    tagline: "Practice markdown blogging platform featuring standard MVC structures built entirely from scratch.",
    role: "Solo Creator",
    year: "2023",
    metrics: ["✓ Vanilla PHP MVC routing framework", "✓ Migrations and seeder", "✓ Elegant reading canvas layouts"],
    images: [
      `${base}images/writesphere/writesphere-hero.png`,
      `${base}images/writesphere/writesphere-2.png`,
      `${base}images/writesphere/writesphere-3.png`,
      `${base}images/writesphere/writesphere-4.png`,
    ],
    tags: ["PHP", "Vanilla JS"],
    theme: "from-blue-500/10 via-cyan-500/5 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.25)",
    gridClass: "lg:col-span-2 md:col-span-6",
    hasLiveDemo: false,
  },
];

const categories = ["All", "Fullstack", "Frontend", "Other"];

/* ─── Premium interactive card with dynamic tilt, spotlight, and auto sliding screenshot showcases ─── */
function BentoCard({ project, onClick, isDimmed }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const timerRef = useRef(null);

  // Spotlight and 3D Tilt calculation
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 5; // up to 5 deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    }
    setCurrentImg(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 1500);
    }
  };

  const isFeatured = project.gridClass.includes("lg:col-span-4");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`bento-item relative rounded-[28px] overflow-hidden transition-all duration-700 ${project.gridClass} bg-white/70 border border-slate-100 hover:border-violet-200/80 cursor-pointer shadow-sm hover:shadow-xl ${isDimmed ? 'opacity-25 scale-[0.97] blur-[1.5px] pointer-events-none' : ''}`}
      style={{
        transition: 'transform 0.18s ease-out, opacity 0.6s ease, filter 0.6s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* Vercel spotlight cursor overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${project.glowColor}, transparent 80%)`
        }}
      />

      <div className={`flex flex-col ${isFeatured ? 'lg:flex-row' : ''} ${project.reverseLayout && isFeatured ? 'lg:flex-row-reverse' : ''} h-full relative z-20 gap-0`}>

        {/* Image Panel — clean, full-bleed, no device chrome */}
        <div className={`relative flex-shrink-0 overflow-hidden transition-all duration-500 ${isFeatured ? 'lg:w-[53%] lg:h-auto min-h-[260px]' : 'w-full aspect-[16/10]'}`}>
          {/* Subtle theme gradient tint */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} z-10 pointer-events-none mix-blend-multiply`} />

          <img
            src={project.images[currentImg]}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-all duration-500"
          />

          {/* Progress Bullet Indicators */}
          {project.images.length > 1 && isHovered && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImg ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Detailed Description Panel */}
        <div className={`flex flex-col justify-between flex-1 space-y-4 px-5 pb-5 pt-3`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[9px] font-bold uppercase tracking-wider text-primary bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full">
                {project.role}
              </span>
              <span className="text-[10px] font-bold text-slate-400 tabular-nums">{project.year}</span>
            </div>

            <h4 className="text-2xl font-black text-slate-900 font-heading leading-tight transition-colors duration-300">
              {project.title}
            </h4>

            <p className="text-slate-500 text-xs leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100/80">
            {/* Tech tag badges */}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md hover:border-violet-300 hover:text-primary transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {project.hasLiveDemo && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-[9px] font-bold transition-all flex items-center gap-1 shadow-sm"
                >
                  <i className="fas fa-external-link-alt text-[7px]" />
                  <span>Live</span>
                </a>
              )}
              <button className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-bold hover:bg-slate-800 transition-all flex items-center gap-1.5 shadow-sm">
                <span>View Details</span>
                <i className="fas fa-arrow-right text-[8px]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Project Modal Component ─── */
function ProjectModal({ project, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Autoplay images in modal
    if (project.images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 2000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [project.images.length]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white border border-slate-200 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <i className="fas fa-times text-slate-700" />
        </button>

        {/* Blurred background */}
        <div
          className="absolute inset-0 -z-10 opacity-20 scale-110"
          style={{
            backgroundImage: `url(${project.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(80px)',
          }}
        />

        <div className="flex flex-col lg:flex-row max-h-[85vh] overflow-y-auto">
          {/* Image Section */}
          <div className="lg:w-[55%] relative bg-slate-50">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} z-10 pointer-events-none mix-blend-multiply`} />
            <img
              src={project.images[currentImg]}
              alt={project.title}
              className="w-full h-full object-cover object-center min-h-[400px]"
            />
            
            {/* Image indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentImg ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="lg:w-[45%] p-8 lg:p-10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-violet-50 border border-violet-100 px-3 py-1 rounded-full">
                  {project.role}
                </span>
                <span className="text-sm font-bold text-slate-400 tabular-nums">{project.year}</span>
              </div>

              <h2 className="text-4xl font-black text-slate-900 font-heading leading-tight">
                {project.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Metrics */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 font-heading">
                Key Features
              </h3>
              <div className="space-y-2">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-sm font-semibold text-slate-700 flex items-start gap-3">
                    <i className="fas fa-check-circle text-violet-500 text-sm mt-0.5" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 font-heading">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-900 text-sm font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <i className="fab fa-github" />
                  <span>View Code</span>
                </a>
              )}
              {project.hasLiveDemo && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30"
                >
                  <span>Live Demo</span>
                  <i className="fas fa-external-link-alt text-xs" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useRef(null);

  // Stagger loading grid items on mount
  useEffect(() => {
    if (gridRef.current) {
      animate(gridRef.current.querySelectorAll('.bento-item'), {
        opacity: [0, 1],
        scale: [0.95, 1],
        translateY: [25, 0],
        delay: stagger(45),
        duration: 550,
        ease: 'outExpo',
      });
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-50/20 overflow-hidden dot-grid"
    >
      {/* Ambient background lighting trails */}
      <div className="absolute top-[12%] left-[15%] w-[420px] h-[420px] bg-violet-100/25 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[8%] w-[480px] h-[480px] bg-indigo-100/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto space-y-12 relative z-10">

        {/* ── Section Title ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/50 pb-6">
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Interactive Showcase</p>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 leading-none">
              My Projects
            </h2>
          </div>
          <a
            href="https://github.com/JudeAlmaden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-indigo-600 transition-colors flex items-center gap-2 group font-bold shrink-0"
          >
            <span>GitHub Repositories</span>
            <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ── Bento Grid Layout ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch"
        >
          {projectsList.map((project) => (
            <BentoCard
              key={project.id}
              project={project}
              isDimmed={false}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </div>

      {/* ── Project Modal ── */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
