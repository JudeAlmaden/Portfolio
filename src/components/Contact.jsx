import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import DotGrid from './DotGrid';

/**
 * MagneticCard
 * Uses Framer Motion spring physics to pull the card toward the user's mouse cursor
 * with dynamic 3D tilt and smooth spring damping.
 */
function MagneticCard({ children, onClick, href, className, strength = 0.35 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw motion values for relative mouse offset
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springConfig = { stiffness: 150, damping: 15, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // 3D Tilt transformation based on displacement
  const rotateX = useTransform(springY, [-50, 50], [12, -12]);
  const rotateY = useTransform(springX, [-50, 50], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply magnetic pull force
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className={`block ${className ?? ''}`}
    >
      <Tag
        href={href}
        onClick={onClick}
        target={href?.startsWith('http') || href?.startsWith('mailto') ? '_blank' : undefined}
        rel={href?.startsWith('http') || href?.startsWith('mailto') ? 'noopener noreferrer' : undefined}
        style={{
          x: springX,
          y: springY,
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        className="relative block w-full group cursor-pointer"
      >
        {/* Animated aura glow backdrop */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0.15,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-[3px] bg-gradient-to-r from-primary via-primary-hover to-primary blur-xl -z-10 rounded-2xl"
        />

        {children}
      </Tag>
    </motion.div>
  );
}

export function ContactContent({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'Judealmaden2045@gmail.com';

    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        if (onCopyEmail) onCopyEmail('Email copied to clipboard!');
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
          if (onCopyEmail) onCopyEmail('Email copied to clipboard!');
          setTimeout(() => setCopied(false), 2500);
        } catch (e) {
          console.error('Fallback failed: ', e);
        }
        document.body.removeChild(textarea);
      });
  };

  return (
    <div className="max-w-2xl mx-auto text-center space-y-10 relative z-10">
      {/* Section Header */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-on-surface">
          Hire me
        </h2>
        <p className="text-on-surface-variant text-base max-w-xl mx-auto">
          Available for contract and full-time roles. I reply within a day.
        </p>
      </div>

      {/* Availability Details Grid */}
      <div className="space-y-3 text-left max-w-md mx-auto">
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <span className="text-outline text-sm">Availability</span>
          <span className="text-on-surface text-sm font-medium">Contract & Full-time</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <span className="text-outline text-sm">Location</span>
          <span className="text-on-surface text-sm font-medium">Quezon Province</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <span className="text-outline text-sm">Specialization</span>
          <span className="text-on-surface text-sm font-medium">Web / Mobile Applications</span>
        </div>
      </div>

      {/* Email Button */}
      <div className="pt-4">
        <MagneticCard
          href="mailto:Judealmaden2045@gmail.com"
          strength={0.3}
          className="w-full"
        >
          <div className="px-8 py-4 rounded-2xl bg-white/95 hover:bg-white transition-all duration-300 shadow-lg">
            <span className="text-[#0f1419] font-semibold text-base flex items-center justify-center gap-2">
              Email Jude
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </MagneticCard>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 pt-2">
        <a 
          href="https://www.linkedin.com/in/justine-jude-almaden-b3a82b257/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-outline hover:text-primary text-sm font-medium transition-colors underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/JudeAlmaden" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-outline hover:text-primary text-sm font-medium transition-colors underline underline-offset-4"
        >
          GitHub
        </a>
        <button
          onClick={handleEmailClick}
          className="text-outline hover:text-primary text-sm font-medium transition-colors underline underline-offset-4"
        >
          {copied ? 'Copied!' : 'Copy email address'}
        </button>
      </div>
    </div>
  );
}

export default function Contact({ onCopyEmail }) {
  return (
    <section
      id="contact"
      className="min-h-screen relative px-6 overflow-hidden bg-surface flex flex-col items-center justify-center py-28"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <DotGrid
        dotColor="rgba(208, 188, 255, 0.25)"
        glowColor="rgba(208, 188, 255, 0.12)"
        dotSize={1.5}
        gap={24}
        cursorRadius={160}
      />
      <ContactContent onCopyEmail={onCopyEmail} />
    </section>
  );
}
