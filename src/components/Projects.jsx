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
    gridClass: "lg:col-span-4 md:col-span-6",
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
    gridClass: "lg:col-span-2 md:col-span-6",
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
    gridClass: "lg:col-span-3 md:col-span-3",
    hasLiveDemo: false,
  },
  {
    id: 9,
    title: "Scout",
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
    gridClass: "lg:col-span-3 md:col-span-3",
    hasLiveDemo: false,
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
    gridClass: "lg:col-span-2 md:col-span-2",
    hasLiveDemo: true,
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
    gridClass: "lg:col-span-2 md:col-span-2",
    hasLiveDemo: false,
  },
  {
    id: 4,
    title: "E-Commerce",
    github: "https://github.com/JudeAlmaden/E-menu-and-Online-Polling",
    category: "Frontend",
    tagline: "E-menu & polling software built to test deployment optimizations on serverless cloud architectures.",
    role: "Developer",
    year: "2023",
    metrics: ["✓ Deploed in Vercel", "✓ Clean live ballot polls", "✓ E-Menu system"],
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
    gridClass: "lg:col-span-2 md:col-span-2",
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
    gridClass: "lg:col-span-3 md:col-span-3",
    hasLiveDemo: false,
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
    gridClass: "lg:col-span-3 md:col-span-3",
    hasLiveDemo: false,
  },
];

const categories = ["All", "Fullstack", "Frontend", "Other"];

/* ─── Premium interactive card with dynamic tilt, spotlight, and auto sliding screenshot showcases ─── */
function BentoCard({ project, onClick, isFeatured, isDimmed, isExpanded, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const timerRef = useRef(null);

  // Spotlight and 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (isExpanded) return; // Tilt disabled when expanded for clean specs reading
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
    if (card && !isExpanded) {
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

  useEffect(() => {
    // Autoplay also running when expanded
    if (isExpanded && project.images.length > 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 1800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isExpanded, project.images.length]);

  // Center expanded card smoothly in viewport
  useEffect(() => {
    if (isExpanded && cardRef.current) {
      const scrollTimer = setTimeout(() => {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 180);
      return () => clearTimeout(scrollTimer);
    }
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isExpanded ? undefined : onClick}
      className={`bento-item relative rounded-[28px] overflow-hidden transition-all duration-700 ${isExpanded ? 'col-span-6 bg-white/80 border border-violet-500/20 shadow-2xl p-8 min-h-[460px] flex flex-col justify-between' : `${project.gridClass} bg-white/70 border border-slate-100 hover:border-violet-200/80 cursor-pointer shadow-sm hover:shadow-xl`} ${isDimmed ? 'opacity-25 scale-[0.97] blur-[1.5px] pointer-events-none' : ''}`}
      style={{
        transition: 'transform 0.18s ease-out, opacity 0.6s ease, filter 0.6s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* Dynamic blurred backdrop image (Living atmospheric background when expanded) */}
      {isExpanded && (
        <div
          className="absolute inset-0 -z-10 rounded-[28px] overflow-hidden pointer-events-none opacity-30 scale-110"
          style={{
            backgroundImage: `url(${project.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(110px)',
            transition: 'background-image 0.5s ease',
          }}
        />
      )}

      {/* Vercel spotlight cursor overlay */}
      {!isExpanded && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
          style={{
            background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${project.glowColor}, transparent 80%)`
          }}
        />
      )}

      <div className={`flex flex-col ${(isFeatured || isExpanded) ? 'lg:flex-row' : ''} h-full relative z-20 ${isExpanded ? 'gap-8' : 'gap-0'}`}>

        {/* Image Panel — clean, full-bleed, no device chrome */}
        <div className={`relative flex-shrink-0 overflow-hidden transition-all duration-500 ${isExpanded ? 'lg:w-[53%] lg:h-auto min-h-[260px] rounded-2xl' : isFeatured ? 'lg:w-[53%] lg:h-auto min-h-[260px]' : 'w-full aspect-[16/10]'}`}>
          {/* Subtle theme gradient tint */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} z-10 pointer-events-none mix-blend-multiply`} />

          <img
            src={project.images[currentImg]}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-all duration-500"
          />

          {/* Progress Bullet Indicators */}
          {project.images.length > 1 && (isHovered || isExpanded) && (
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
        <div className={`flex flex-col justify-between flex-1 space-y-4 ${!isExpanded ? 'px-5 pb-5 pt-3' : ''}`}>
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

            {/* Progressive disclosure: Show tagline initially, reveal detailed metrics only on expanded */}
            <p className="text-slate-500 text-xs leading-relaxed">
              {project.tagline}
            </p>

            {/* Layered specs checklist (fades in on card expansion) */}
            {isExpanded && (
              <div className="space-y-2 pt-2 animate-[fadeIn_0.5s_ease-out]">
                <h5 className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-heading">
                  Architecture &amp; Performance Checks
                </h5>
                <div className="space-y-1.5">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-xs font-semibold text-slate-600 flex items-center gap-2">
                      <i className="fas fa-check-circle text-violet-500 text-[10px]" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100/80">
            {/* Tech tag badges */}
            <div className="flex flex-wrap gap-1">
              {(isExpanded ? project.tags : project.tags.slice(0, 2)).map((tag, i) => (
                <span
                  key={i}
                  className="text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md hover:border-violet-300 hover:text-primary transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {isExpanded ? (
                <>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl border border-slate-200 text-[10px] font-bold text-slate-700 hover:border-primary hover:text-primary transition-all flex items-center gap-1.5 bg-white shadow-sm"
                    >
                      <i className="fab fa-github" />
                      <span>Codebase</span>
                    </a>
                  )}
                  {project.hasLiveDemo && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold transition-all flex items-center gap-1.5 shadow-md shadow-slate-900/10"
                    >
                      <span>Live Demo</span>
                      <i className="fas fa-external-link-alt text-[8px]" />
                    </a>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="px-3 py-2 rounded-xl bg-violet-50 border border-violet-100 hover:bg-violet-100 text-primary text-[10px] font-bold transition-all focus:outline-none"
                  >
                    <span>Close Showcase</span>
                  </button>
                </>
              ) : (
                <span className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-bold group-hover:bg-primary transition-all flex items-center gap-1.5 shadow-sm">
                  <span>Explore Showcase</span>
                  <i className="fas fa-plus text-[8px]" />
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const gridRef = useRef(null);

  const filteredProjects = projectsList.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Stagger loading grid items on category shift
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
  }, [activeCategory]);

  const handleSectionClick = (e) => {
    if (expandedProjectId !== null && !e.target.closest('.bento-item')) {
      setExpandedProjectId(null);
    }
  };

  return (
    <section
      id="projects"
      onClick={handleSectionClick}
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

        {/* ── Category Navigation Filters ── */}
        <div className="flex flex-wrap gap-2 justify-start items-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setExpandedProjectId(null); // Reset showcase on category shift
                  setActiveCategory(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${isActive ? 'bg-slate-900 text-white shadow-md' : 'bg-white border border-slate-100 text-slate-500 hover:border-slate-200 hover:text-slate-700'}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── 3D Bento Layout (Dynamic inline expansion) ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch"
        >
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            const isDimmed = expandedProjectId !== null && expandedProjectId !== project.id;
            const isFeatured = project.gridClass.includes("lg:col-span-4");

            return (
              <BentoCard
                key={project.id}
                project={project}
                isFeatured={isFeatured}
                isDimmed={isDimmed}
                isExpanded={isExpanded}
                onClick={() => setExpandedProjectId(project.id)}
                onClose={() => setExpandedProjectId(null)}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
