import { useRef, useEffect, useState } from 'react';
import DotGrid from './DotGrid';

/**
 * SectionMagnet — tracks the mouse across the entire section and pulls
 * each wrapped button toward the cursor with a spring-like force.
 * The pull strength scales with proximity (strongest at center, tapers off).
 */
function SectionMagnet({ sectionRef, children, strength = 0.22 }) {
  const innerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const activeRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.1);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.1);
      setOffset({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onMouseMove = (e) => {
      const sectionRect = section.getBoundingClientRect();
      const btnRect = inner.getBoundingClientRect();

      // Mouse relative to section
      const mx = e.clientX - sectionRect.left;
      const my = e.clientY - sectionRect.top;

      // Button center relative to section
      const bx = btnRect.left + btnRect.width / 2 - sectionRect.left;
      const by = btnRect.top + btnRect.height / 2 - sectionRect.top;

      // Vector from button center → mouse
      const dx = mx - bx;
      const dy = my - by;

      // Distance from mouse to button center (max pull based on section diagonal)
      const sectionDiag = Math.sqrt(sectionRect.width ** 2 + sectionRect.height ** 2);
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Pull falls off with distance: strong when close, gentle from far
      const falloff = Math.max(0, 1 - dist / (sectionDiag * 0.7));
      const pull = falloff * falloff; // quadratic falloff for natural feel

      targetRef.current = {
        x: dx * strength * pull,
        y: dy * strength * pull,
      };
    };

    const onMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);

    return () => {
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [sectionRef, strength]);

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div
        ref={innerRef}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Contact({ onCopyEmail }) {
  const sectionRef = useRef(null);

  const handleEmailClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const email = 'Judealmaden2045@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        onCopyEmail('Email copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          onCopyEmail('Email copied to clipboard!');
        } catch (e) {
          console.error('Fallback failed: ', e);
        }
        document.body.removeChild(textarea);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen relative px-6 overflow-hidden bg-gradient-to-b from-white to-violet-50 flex flex-col items-center justify-center py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-200/30 rounded-full blur-3xl -z-10" />

      {/* Interactive DotGrid background */}
      <DotGrid
        dotColor="rgba(139, 92, 246, 0.25)"
        glowColor="rgba(139, 92, 246, 0.1)"
        dotSize={1.5}
        gap={24}
        cursorRadius={140}
      />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-4 reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">
            Let's Work Together
          </h2>
          <p className="text-slate-600 text-lg">
            I'm open to entry-level roles and freelance projects. <br />
            Based in Candelaria, Quezon Province.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 reveal-up">
          <SectionMagnet sectionRef={sectionRef} strength={0.28}>
            <a
              href="mailto:Judealmaden2045@gmail.com"
              onClick={handleEmailClick}
              className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border-2 border-violet-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-colors w-full md:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <i className="fas fa-envelope text-primary text-xl" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Email Me</p>
                <p className="text-slate-800 font-medium">Judealmaden2045@gmail.com</p>
              </div>
            </a>
          </SectionMagnet>

          <SectionMagnet sectionRef={sectionRef} strength={0.28}>
            <a
              href="tel:+639671559154"
              className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border-2 border-violet-100 hover:border-secondary hover:shadow-xl hover:shadow-secondary/10 transition-colors w-full md:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all">
                <i className="fas fa-phone text-secondary text-xl" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Call Me</p>
                <p className="text-slate-800 font-medium">+63 09671559154</p>
              </div>
            </a>
          </SectionMagnet>
        </div>
      </div>
    </section>
  );
}
