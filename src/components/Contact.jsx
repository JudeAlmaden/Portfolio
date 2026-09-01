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
    <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
      {/* Section Header */}
      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-on-surface">
          Let's Work Together
        </h2>
        <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          I'm open to junior level roles, freelancing, and web projects.{' '}
          <br className="hidden md:inline" />
          Based in Candelaria, Quezon Province.
        </p>
      </div>

      {/* Magnetic Mouse-Chasing Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Email Button Card */}
        <MagneticCard
          onClick={handleEmailClick}
          strength={0.4}
          className="w-full md:w-auto"
        >
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl glass-card border border-primary/30 group-hover:border-primary transition-colors duration-300">
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 text-primary">
              <i className={`fas ${copied ? 'fa-check text-green-400' : 'fa-envelope'} text-sm`} />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <p className="text-[9px] text-outline uppercase tracking-widest font-semibold">
                  Email Me
                </p>
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      className="text-[9px] font-bold text-green-400 uppercase tracking-wider"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-on-surface font-medium text-xs md:text-sm">
                Judealmaden2045@gmail.com
              </p>
            </div>
          </div>
        </MagneticCard>

        {/* Call Button Card */}
        <MagneticCard
          href="tel:+639671559154"
          strength={0.4}
          className="w-full md:w-auto"
        >
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl glass-card border border-primary/30 group-hover:border-primary transition-colors duration-300">
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 text-primary">
              <i className="fas fa-phone text-sm" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-outline uppercase tracking-widest font-semibold">
                Call Me
              </p>
              <p className="text-on-surface font-medium text-xs md:text-sm">
                +63 09671559154
              </p>
            </div>
          </div>
        </MagneticCard>
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
