import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

export default function CertificationsGrid({ certs }) {
  return (
    <div className="space-y-8">
      <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
        Certifications &amp; Achievements
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6, borderColor: 'rgba(208,188,255,0.4)', scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/8 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <i className={`${cert.icon} text-primary text-sm`} />
              </div>
              <span className="text-[10px] font-mono text-outline border border-white/10 px-2 py-0.5 rounded-full">
                {cert.year}
              </span>
            </div>

            <h4 className="text-[14px] font-bold text-on-surface font-heading leading-snug mb-1">
              {cert.title}
            </h4>
            <p className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold mb-3">
              {cert.provider}
            </p>
            <p className="text-[12px] text-on-surface-variant leading-relaxed">
              {cert.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
