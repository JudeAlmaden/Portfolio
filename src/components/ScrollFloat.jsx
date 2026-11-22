import { useEffect, useRef, useState } from 'react';
import './ScrollFloat.css';

export default function ScrollFloat({
  children,
  animationDuration = 0.6,
  ease = 'cubic-bezier(0.23, 1, 0.32, 1)',
  scrollStart = 0.2,
  stagger = 0.04,
  className = '',
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: scrollStart }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scrollStart]);

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <span ref={containerRef} className={`scroll-float-container ${className}`} aria-label={text}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="scroll-float-word">
          {word.split('').map((char) => {
            const delay = charIndex++ * stagger;
            return (
              <span
                key={delay}
                className={`scroll-float-char ${isVisible ? 'visible' : ''}`}
                style={{
                  transitionDuration: `${animationDuration}s`,
                  transitionTimingFunction: ease,
                  transitionDelay: `${delay}s`,
                }}
                aria-hidden="true"
              >
                {char}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span className="scroll-float-char scroll-float-space" aria-hidden="true">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </span>
  );
}
