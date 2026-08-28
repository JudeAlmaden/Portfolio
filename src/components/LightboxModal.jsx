import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({
  project,
  currentIndex,
  initialTab = 'details',
  onClose,
  onSelectIndex,
  onNext,
  onPrev,
}) {
  const [activeTab, setActiveTab] = useState(initialTab || 'details');

  if (!project) return null;

  const hasGallery = project.gallery && project.gallery.length > 0;
  const hasHighlights = project.highlights && project.highlights.length > 0;
  const hasProblem = Boolean(project.problem);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 lg:p-16 select-none overflow-y-auto"
      >
        {/* ─── Top Minimalist Header ─────────────────────────────────── */}
        <header className="flex items-center justify-between gap-4 sm:gap-6 pb-4 md:pb-6 border-b border-white/10 max-w-4xl mx-auto w-full flex-shrink-0">
          <div className="min-w-0 flex-1">
            <h2 className="text-white font-heading font-semibold text-lg sm:text-2xl md:text-3xl tracking-tight truncate">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            {/* Clean Text Tabs */}
            {hasHighlights && hasGallery && (
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm whitespace-nowrap">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`transition-colors cursor-pointer py-1 whitespace-nowrap ${
                    activeTab === 'details'
                      ? 'text-primary font-medium border-b-2 border-primary'
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`transition-colors cursor-pointer py-1 whitespace-nowrap ${
                    activeTab === 'gallery'
                      ? 'text-primary font-medium border-b-2 border-primary'
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  Gallery ({project.gallery.length})
                </button>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors text-base sm:text-lg p-1.5 cursor-pointer flex-shrink-0"
              title="Close (Esc)"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </header>

        {/* ─── Main Content Canvas (No Boxes, Pure Typography) ──────── */}
        <main className="flex-1 max-w-4xl mx-auto w-full my-auto py-8 md:py-12 flex flex-col justify-center">
          {/* TAB 1: Pure Minimalist Case Study */}
          {activeTab === 'details' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-8 md:space-y-10"
            >
              {/* Problem */}
              {hasProblem && (
                <div className="space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-primary/80">
                    The Problem
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* Solution / Overview */}
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                  {hasProblem ? 'The Solution' : 'Overview'}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Key Highlights */}
              {hasHighlights && (
                <div className="space-y-3 pt-2">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                    Key Highlights
                  </p>
                  <ul className="space-y-3">
                    {project.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm sm:text-base text-white/75 leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-primary select-none mt-0.5">―</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies (Plain Clean Separator, No Pills) */}
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                  Technologies
                </p>
                <p className="text-sm sm:text-base text-white/70 font-mono tracking-wide">
                  {project.tags.join('  ·  ')}
                </p>
              </div>

              {/* Minimalist Action Links */}
              {(project.live || project.github) && (
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors font-medium inline-flex items-center gap-1.5"
                    >
                      Live Demo <i className="fas fa-arrow-up-right-from-square text-[10px]" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <i className="fab fa-github text-sm" /> View Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: Minimalist Gallery View */}
          {activeTab === 'gallery' && hasGallery && (
            <div className="relative w-full flex-1 flex items-center justify-center my-auto min-h-[45vh] md:min-h-[60vh]">
              {project.gallery.length > 1 && (
                <button
                  onClick={onPrev}
                  className="absolute left-0 z-20 text-white/40 hover:text-white transition-colors p-3 cursor-pointer text-xl"
                  title="Previous"
                >
                  <i className="fas fa-chevron-left" />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex items-center justify-center max-w-full max-h-full"
                >
                  <img
                    src={project.gallery[currentIndex]}
                    alt={`${project.title} slide ${currentIndex + 1}`}
                    className="max-h-[62vh] md:max-h-[70vh] w-auto max-w-[85vw] object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {project.gallery.length > 1 && (
                <button
                  onClick={onNext}
                  className="absolute right-0 z-20 text-white/40 hover:text-white transition-colors p-3 cursor-pointer text-xl"
                  title="Next"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              )}
            </div>
          )}
        </main>

        {/* ─── Gallery Dot / Thumbnail Indicators ────────────────────── */}
        {activeTab === 'gallery' && hasGallery && project.gallery.length > 1 && (
          <footer className="flex items-center justify-center gap-2 pt-4 flex-shrink-0">
            {project.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'w-1.5 bg-white/20 hover:bg-white/50'
                }`}
                title={`Go to image ${idx + 1}`}
              />
            ))}
          </footer>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
