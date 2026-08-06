import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS, TECH_CATEGORIES, TIMELINE, CERTS } from '../data/aboutData';
import SkillCard3D from './about/SkillCard3D';
import TimelineSection from './about/TimelineSection';
import PhotoGallery from './about/PhotoGallery';
import CertificationsGrid from './about/CertificationsGrid';

/* ─── Animation helpers ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

function Reveal({ children, variants = fadeUp, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function About() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative bg-surface overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-primary-hover/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 space-y-24 md:space-y-32">

        {/* ── Section Title & Bio ── */}
        <div className="space-y-12">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold mb-4"
            >
              Profile
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-on-surface leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              About &amp;<br />Experience.
            </motion.h2>
          </motion.div>

          <Reveal variants={fadeUp}>
            <p className="text-[20px] md:text-[26px] font-medium text-on-surface leading-[1.5] max-w-3xl">
              IT graduate and web developer specializing in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover font-bold">Laravel</span>{' '}
              paired with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover font-bold">React</span>{' '}
              or{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover font-bold">Vue</span>{' '}
              — leveraging modern AI tooling to build fast, scalable, and intelligent applications.
            </p>
            <p className="text-[14px] md:text-[16px] text-on-surface-variant leading-relaxed max-w-2xl mt-4">
              From enterprise internships to national CTF hackathons, I combine AI-driven workflows with fullstack engineering to transform complex ideas into reliable digital solutions.
            </p>
          </Reveal>

          {/* Interactive Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4, borderColor: 'rgba(208,188,255,0.4)' }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 backdrop-blur-sm flex items-center gap-4 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-lg">
                  <i className={stat.icon} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline font-semibold">{stat.label}</p>
                  <h4 className="text-base font-bold font-heading text-white">{stat.value}</h4>
                  <p className="text-xs text-primary font-medium">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Technical Arsenal ── */}
        <div id="skills" className="space-y-10 scroll-mt-24">
          <Reveal>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
                  Technical Arsenal
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-on-surface mt-1">
                  Tech Stack &amp; Expertise
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            {TECH_CATEGORIES.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-outline font-semibold">
                  {cat.category}
                </p>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                  variants={staggerContainer(0.06)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  {cat.skills.map((skill) => (
                    <SkillCard3D key={skill.name} skill={skill} />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Photo Gallery ── */}
        <PhotoGallery />

        {/* ── Experience Timeline ── */}
        <div ref={timelineRef}>
          <TimelineSection items={TIMELINE} inView={timelineInView} />
        </div>

        {/* ── Certifications ── */}
        <CertificationsGrid certs={CERTS} />

      </div>
    </section>
  );
}
