import { useRef, useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { FEATURED, ARCHIVE } from '../data/projectsData';
import LightboxModal from './LightboxModal';
import { ContactContent } from './Contact';
import DotGrid from './DotGrid';
import ArchiveCard from './projects/ArchiveCard';

const N = FEATURED.length;
const pad = (n) => String(n).padStart(2, '0');

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

/* ─── Archive Section ──────────────────────────────────────────── */
function ArchiveSection({ projects, onOpenGallery, onCopyEmail }) {
  const archiveRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: archiveRef,
    offset: ['start start', 'end end'],
  });

  const headerY = useTransform(scrollYProgress, [0.22, 0.52], [0, -60]);
  const headerOpacity = useTransform(scrollYProgress, [0.22, 0.52], [1, 0]);
  const gridContainerOpacity = useTransform(scrollYProgress, [0.22, 0.52], [1, 0]);
  const gridDisplay = useTransform(scrollYProgress, (v) => (v >= 0.52 ? 'none' : 'flex'));

  const contactOpacity = useTransform(scrollYProgress, [0.50, 0.78, 1.0], [0, 1, 1]);
  const contactScale = useTransform(scrollYProgress, [0.50, 0.78, 1.0], [0.88, 1, 1]);
  const contactY = useTransform(scrollYProgress, [0.50, 0.78, 1.0], [40, 0, 0]);
  const contactDisplay = useTransform(scrollYProgress, (v) => (v < 0.42 ? 'none' : 'flex'));

  if (isMobile) {
    return (
      <>
        {/* Mobile Archive Section — No scroll scattering animation */}
        <section className="relative py-16 px-6 bg-[#101415] overflow-hidden">
          {/* Background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-between mb-8 max-w-7xl mx-auto w-full"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-1">
                Also Built
              </p>
              <h2 className="text-2xl font-heading font-bold text-white">
                Other Projects &amp; Systems
              </h2>
            </div>
            <span className="text-[11px] font-mono text-white/30 tracking-wider">
              {pad(projects.length)} projects
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto w-full">
            {projects.map((project, i) => (
              <ArchiveCard
                key={project.id}
                project={project}
                index={i}
                onOpenGallery={onOpenGallery}
                scrollYProgress={scrollYProgress}
                isMobile={true}
                className="col-span-1"
              />
            ))}
          </div>
        </section>

        {/* Mobile Contact Section */}
        <section id="contact" className="relative py-20 px-6 bg-[#101415] flex flex-col items-center justify-center">
          <ContactContent onCopyEmail={onCopyEmail} />
        </section>
      </>
    );
  }

  return (
    <section ref={archiveRef} data-archive-section className="relative h-[280vh] bg-[#101415]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-14 lg:px-20 overflow-hidden">

        {/* Background ambient glow & DotGrid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <DotGrid
          dotColor="rgba(208, 188, 255, 0.25)"
          glowColor="rgba(208, 188, 255, 0.12)"
          dotSize={1.5}
          gap={24}
          cursorRadius={160}
        />

        {/* Phase 1: Archive Grid */}
        <motion.div
          style={{ opacity: gridContainerOpacity, display: gridDisplay }}
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-14 lg:px-20 pointer-events-auto"
        >
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="flex items-end justify-between mb-8 max-w-7xl mx-auto w-full">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-1">
                Also Built
              </p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white">
                Other Projects &amp; Systems
              </h2>
            </div>
            <span className="text-[11px] font-mono text-white/30 tracking-wider hidden md:block">
              {pad(projects.length)} projects
            </span>
          </motion.div>

          <div className="grid grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto w-full">
            {projects.map((project, i) => (
              <ArchiveCard
                key={project.id}
                project={project}
                index={i}
                onOpenGallery={onOpenGallery}
                scrollYProgress={scrollYProgress}
                isMobile={false}
                className={i < 3 ? 'col-span-6 md:col-span-2' : 'col-span-6 md:col-span-3'}
              />
            ))}
          </div>
        </motion.div>

        {/* Phase 2: Contact */}
        <motion.div
          id="contact"
          style={{ opacity: contactOpacity, scale: contactScale, y: contactY, display: contactDisplay }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-20"
        >
          <ContactContent onCopyEmail={onCopyEmail} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Projects Export ─────────────────────────────────────────── */
export default function Projects({ onCopyEmail }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryProject, setGalleryProject] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryTab, setGalleryTab] = useState('details');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [0.6, 0.6, 0]);
  const activeIndexRef = useRef(0);

  // Directly bind active project index to proportional scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const clampedProgress = Math.max(0, Math.min(0.999, progress));
    const nextIndex = Math.floor(clampedProgress * N);
    if (nextIndex !== activeIndexRef.current) {
      setActiveIndex(nextIndex);
      activeIndexRef.current = nextIndex;
    }
  });

  const getSnapTarget = (i) => {
    if (!sectionRef.current) return 0;
    const el = sectionRef.current;
    const stickyHeight = (N * 75 + 20) * window.innerHeight / 100;
    const scrollable = stickyHeight - window.innerHeight;
    if (scrollable <= 0) return el.offsetTop;
    const progress = N <= 1 ? 0 : (i + 0.5) / N;
    return el.offsetTop + scrollable * progress;
  };

  const jumpTo = (i) => {
    const target = Math.max(0, Math.min(N - 1, i));
    setActiveIndex(target);
    activeIndexRef.current = target;
    window.scrollTo({
      top: getSnapTarget(target),
      behavior: 'smooth',
    });
  };

  const openGallery = (project, index = 0, tab = 'details') => {
    setGalleryProject(project);
    setGalleryIndex(index);
    setGalleryTab(tab);
    if (typeof window !== 'undefined') {
      window.history.pushState({ modal: 'gallery', projectId: project.id, tab }, '');
    }
  };

  const closeGallery = () => {
    if (typeof window !== 'undefined' && window.history.state?.modal === 'gallery') {
      window.history.back();
    } else {
      setGalleryProject(null);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (galleryProject) {
        setGalleryProject(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [galleryProject]);

  useEffect(() => {
    if (!galleryProject) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight')
        setGalleryIndex((prev) => (prev + 1) % galleryProject.gallery.length);
      if (e.key === 'ArrowLeft')
        setGalleryIndex((prev) => (prev - 1 + galleryProject.gallery.length) % galleryProject.gallery.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryProject]);

  const active = FEATURED[activeIndex];

  return (
    <>
      {/* Section Intro Header */}
      <div id="projects" className="px-6 md:px-14 lg:px-20 pt-24 pb-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          My Work
        </p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-on-surface leading-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
              Works
            </span>
          </h2>
        </div>
        <div className="mt-6 h-px bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />
      </div>

      {/* PART 1 — Featured Flagship Sticky Scroll */}
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: `${N * 75 + 20}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background active image with clean transition */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0"
            >
              <img
                src={active.thumbnail}
                alt={active.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101415]/88 via-[#101415]/40 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101415]/95 via-transparent to-[#101415]/40 pointer-events-none z-10" />

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-14 lg:px-20 pt-6 md:pt-8">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold">
              Featured Work
            </span>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 items-center">
                {FEATURED.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => jumpTo(i)}
                    animate={{ width: i === activeIndex ? 20 : 5 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`h-[3px] rounded-full cursor-pointer transition-colors duration-300 ${i === activeIndex ? 'bg-primary' : i < activeIndex ? 'bg-primary/40' : 'bg-white/20'}`}
                    title={FEATURED[i].title}
                  />
                ))}
              </div>
              <span className="text-[11px] text-white/35 font-mono tracking-wider">
                {pad(activeIndex + 1)}&nbsp;/&nbsp;{pad(N)}
              </span>
            </div>
          </div>

          {/* Project info (bottom-left) */}
          <div className="absolute bottom-20 md:bottom-24 left-6 md:left-14 lg:left-20 z-20 max-w-xs md:max-w-sm lg:max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-[0.08em] px-2 py-0.5 rounded border border-white/15 text-white/50 bg-white/5 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-[36px] md:text-[50px] lg:text-[62px] font-heading font-bold leading-[0.95] text-white mb-4">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] leading-relaxed text-white/55 mb-5 max-w-[30ch] md:max-w-[38ch]">
                  {active.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-2.5">
                  {active.live ? (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-primary/60 text-primary text-[11px] uppercase tracking-[0.08em] font-semibold bg-primary/10 hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    >
                      VISIT
                      <i className="fas fa-arrow-up-right-from-square text-[9px]" />
                    </a>
                  ) : active.github ? (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-white/25 text-white/75 text-[11px] uppercase tracking-[0.08em] font-semibold bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    >
                      <i className="fab fa-github text-sm" />
                      GitHub
                    </a>
                  ) : (
                    <span className="text-[11px] text-white/25 uppercase tracking-[0.1em]">
                      Private Project
                    </span>
                  )}

                  {active.gallery && active.gallery.length > 0 && (
                    <button
                      onClick={() => openGallery(active, 0, 'details')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-white/20 text-white/70 text-[11px] uppercase tracking-[0.08em] font-semibold bg-white/5 hover:bg-white/15 hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
                    >
                      <i className="fas fa-layer-group text-xs" />
                      See more
                    </button>
                  )}

                  {active.live && active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/15 text-white/40 bg-white/5 hover:bg-white/10 hover:text-white/70 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <i className="fab fa-github text-sm" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail strip (bottom-right) */}
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-14 lg:right-20 z-20">
            <div className="flex items-end gap-1.5 md:gap-2 p-1">
              {FEATURED.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.button
                    key={p.id}
                    onClick={() => jumpTo(i)}
                    className="relative flex-shrink-0 overflow-hidden rounded cursor-pointer"
                    animate={{ width: isActive ? 64 : 36, height: isActive ? 42 : 24, opacity: isActive ? 1 : 0.45 }}
                    whileHover={{ opacity: 0.9 }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    style={{
                      outline: isActive ? '2px solid rgba(208,188,255,0.85)' : '1px solid rgba(255,255,255,0.1)',
                      outlineOffset: isActive ? '2px' : '0px',
                    }}
                    title={p.title}
                  >
                    <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Scroll cue */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
            style={{ opacity: scrollCueOpacity }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1"
            >
              <motion.div
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-px h-1.5 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PART 2 — Archive Grid */}
      <ArchiveSection
        projects={ARCHIVE}
        onOpenGallery={(p) => openGallery(p, 0, 'details')}
        onCopyEmail={onCopyEmail}
      />

      {/* Shared Lightbox Modal */}
      {galleryProject && (
        <LightboxModal
          key={`${galleryProject.id}-${galleryTab}`}
          project={galleryProject}
          currentIndex={galleryIndex}
          initialTab={galleryTab}
          onClose={closeGallery}
          onSelectIndex={(idx) => setGalleryIndex(idx)}
          onNext={() => setGalleryIndex((prev) => (prev + 1) % galleryProject.gallery.length)}
          onPrev={() => setGalleryIndex((prev) => (prev - 1 + galleryProject.gallery.length) % galleryProject.gallery.length)}
        />
      )}
    </>
  );
}
