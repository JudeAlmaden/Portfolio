import { useRef } from 'react';
import { motion, useTransform, useInView } from 'framer-motion';

const SCATTER_CONFIGS = [
  { x: -160, y: -70,  rotate: -14, scale: 0.8 },
  { x: 0,    y: -130, rotate: 3,   scale: 0.75 },
  { x: 160,  y: -70,  rotate: 14,  scale: 0.8 },
  { x: -180, y: 70,   rotate: -18, scale: 0.75 },
  { x: 180,  y: 70,   rotate: 18,  scale: 0.75 },
];

export default function ArchiveCard({ project, onOpenGallery, index, className = '', scrollYProgress }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const config = SCATTER_CONFIGS[index % SCATTER_CONFIGS.length];

  const scatterX      = useTransform(scrollYProgress, [0.22, 0.52], [0, config.x]);
  const scatterY      = useTransform(scrollYProgress, [0.22, 0.52], [0, config.y]);
  const scatterRotate = useTransform(scrollYProgress, [0.22, 0.52], [0, config.rotate]);
  const scatterScale  = useTransform(scrollYProgress, [0.22, 0.52], [1, config.scale]);
  const scatterOpacity = useTransform(scrollYProgress, [0.22, 0.52], [1, 0]);

  return (
    <motion.div
      style={{ x: scatterX, y: scatterY, rotate: scatterRotate, scale: scatterScale, opacity: scatterOpacity }}
      className={className}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-primary/40 transition-all duration-500"
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden h-44">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101415]/80 via-transparent to-transparent" />

          {/* Hover overlay buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.gallery && project.gallery.length > 1 && (
              <button
                onClick={() => onOpenGallery(project)}
                className="px-3 py-2 rounded-lg bg-black/60 backdrop-blur border border-white/20 text-white text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1.5 hover:bg-black/80 transition-all cursor-pointer"
              >
                <i className="fas fa-images text-xs" />
                Images
              </button>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-primary/80 backdrop-blur border border-primary text-white text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1.5 hover:bg-primary transition-all cursor-pointer"
              >
                Visit
                <i className="fas fa-arrow-up-right-from-square text-[9px]" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-black/60 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer"
              >
                <i className="fab fa-github text-sm" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 md:p-5">
          <h4 className="text-white font-heading font-bold text-base md:text-lg mb-1.5 leading-tight">
            {project.title}
          </h4>
          <p className="text-white/45 text-[12px] leading-relaxed mb-3 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] uppercase tracking-[0.06em] px-2 py-0.5 rounded border border-white/10 text-white/40 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
