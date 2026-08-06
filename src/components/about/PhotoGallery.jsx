import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const base = import.meta.env.BASE_URL;

function ParallaxImg({ src, alt, caption, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl border border-white/10 group ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-xs font-semibold text-white tracking-wide">
          {caption || alt}
        </span>
      </div>
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <div className="space-y-6">
      <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-2">
        Highlights &amp; Activities
      </p>
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-on-surface mb-6">
        Hackathons, Speaking &amp; Research
      </h3>

      {/* Strictly bounded gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left side large photo */}
        <div className="h-[380px] sm:h-[460px] md:h-[540px] lg:h-[580px] min-h-0 overflow-hidden rounded-2xl">
          <ParallaxImg
            src={`${base}images/me/hackathon.webp`}
            alt="Hackathon"
            caption="National Cyber Security Challenge Hackathon"
            className="w-full h-full"
          />
        </div>

        {/* Right side sub-grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-[380px] sm:h-[460px] md:h-[540px] lg:h-[580px] min-h-0">
          <div className="col-span-2 row-span-1 min-h-0 overflow-hidden rounded-2xl">
            <ParallaxImg
              src={`${base}images/me/hack4gov.webp`}
              alt="Hack4Gov CTF"
              caption="DICT Hack4Gov Competition"
              className="w-full h-full"
            />
          </div>
          <div className="col-span-1 row-span-1 min-h-0 overflow-hidden rounded-2xl">
            <ParallaxImg
              src={`${base}images/me/resource_speaker.webp`}
              alt="Resource Speaker"
              caption="Resource Speaker at Scratch Seminar"
              className="w-full h-full"
            />
          </div>
          <div className="col-span-1 row-span-1 min-h-0 overflow-hidden rounded-2xl">
            <ParallaxImg
              src={`${base}images/me/student_research.jpg`}
              alt="Student Research"
              caption="Student Research & Defense"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
