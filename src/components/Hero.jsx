import { useEffect, useRef } from 'react';

export default function Hero() {
  const nameRef = useRef(null);

  useEffect(() => {
    // Animated gradient text on hover
    const handleMouseMove = (e) => {
      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        nameRef.current.style.setProperty('--mouse-x', `${x}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative px-5 md:px-16 overflow-hidden bg-background"
    >
      {/* Subtle animated violet orbs - "void and glow" aesthetic */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-primary-hover/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Dark dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-30"></div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Single Column Centered Layout */}
        <div className="space-y-12 text-center reveal-up">

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-[40px] md:text-[64px] font-heading font-bold leading-[1.2] md:leading-[1.1] tracking-tight animate-[fadeIn_0.8s_ease-out]">
              <span className="text-on-surface">Fullstack </span>
              <br />
              <span
                ref={nameRef}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-hover to-primary hover:from-primary-hover hover:via-primary hover:to-primary-hover transition-all duration-700"
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: 'var(--mouse-x, 0%) 0%'
                }}
              >
                Web Developer
              </span>
            </h1>

            <p className="text-[16px] md:text-[18px] font-sans font-normal leading-[1.6] text-on-surface-variant max-w-[600px] mx-auto animate-[fadeIn_1s_ease-out]">
              You bring the vision. I build the solution.
              From intuitive user interfaces to scalable backend systems, I create fast, reliable, and modern web applications that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-[fadeIn_1.2s_ease-out]">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-lg bg-primary text-on-primary font-sans font-medium text-[14px] uppercase tracking-[0.05em] hover:bg-primary-hover transition-all duration-300 violet-glow-hover flex items-center gap-2"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-transparent border border-primary text-primary font-sans font-medium text-[14px] uppercase tracking-[0.05em] hover:bg-primary/10 hover:border-primary-hover transition-all duration-300 violet-glow-hover"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 group"
        aria-label="Scroll to About section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-outline uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-outline rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </a>
    </section>
  );
}