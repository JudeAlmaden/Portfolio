import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function TimelineLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.3'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-[11px] md:left-[15px] top-[26px] bottom-[32px] w-px pointer-events-none z-0">
      <div className="absolute inset-0 w-px bg-white/10" />
      <motion.div
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-primary via-primary/60 to-primary/20 origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

export default function TimelineSection({ items, inView }) {
  return (
    <div className="pt-8">
      <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-8">
        Experience &amp; Education
      </p>

      <div className="relative space-y-6">
        <TimelineLine />

        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative pl-10 md:pl-12"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: i * 0.18 + 0.1 }}
          >
            {/* Sonar pulse ring + Dot */}
            <div className="absolute left-[5px] md:left-[9px] top-7 -translate-y-1/2 flex items-center justify-center z-10">
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                className="absolute w-4 h-4 rounded-full bg-primary/40 pointer-events-none"
              />
              <motion.div
                className="w-3 h-3 rounded-full border-2 border-primary bg-surface"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: i * 0.18 + 0.05, duration: 0.4, ease: 'backOut' }}
              />
            </div>

            {/* Glassmorphic Card */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/8 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm shadow-xl">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-on-surface leading-tight">
                  {item.org}
                </h3>
                <span className="text-[11px] font-mono text-primary font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {item.period}
                </span>
              </div>

              <p className="text-[13px] font-semibold text-white/70 uppercase tracking-wide mb-2">
                {item.role}
              </p>

              <div className="flex items-center gap-2 mb-3">
                <i className={`${item.icon} text-[11px] text-primary`} />
                <span className="text-[10px] uppercase tracking-widest text-outline font-semibold">
                  {item.tag}
                </span>
              </div>

              <p className="text-[13px] text-on-surface-variant leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
