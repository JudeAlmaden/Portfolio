import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({ project, currentIndex, onClose, onSelectIndex, onNext, onPrev }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between z-10">
          <div>
            <h4 className="text-white font-bold font-heading text-lg md:text-xl">
              {project.title}
            </h4>
            <p className="text-xs text-white/50">
              Image {currentIndex + 1} of {project.gallery.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
            title="Close (Esc)"
          >
            <i className="fas fa-times text-lg" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {project.gallery.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-black/50 text-white/80 border border-white/15 hover:bg-black/80 hover:text-white transition-all flex items-center justify-center cursor-pointer"
            >
              <i className="fas fa-chevron-left text-lg" />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={project.gallery[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </AnimatePresence>

          {project.gallery.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-black/50 text-white/80 border border-white/15 hover:bg-black/80 hover:text-white transition-all flex items-center justify-center cursor-pointer"
            >
              <i className="fas fa-chevron-right text-lg" />
            </button>
          )}
        </div>

        {/* Thumbnail strip */}
        {project.gallery.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {project.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-16 h-10 md:w-20 md:h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                  idx === currentIndex
                    ? 'border-primary scale-105'
                    : 'border-white/20 opacity-40 hover:opacity-80'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
