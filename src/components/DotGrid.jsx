import { useEffect, useRef } from 'react';

const DotGrid = ({
  dotColor = 'rgba(139, 92, 246, 0.2)',
  glowColor = 'rgba(139, 92, 246, 0.12)',
  dotSize = 1.5,
  gap = 24,
  cursorRadius = 120,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef(null);
  const dotsRef = useRef([]);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const buildDots = (w, h) => {
      const dots = [];
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({ x: i * gap, y: j * gap });
        }
      }
      dotsRef.current = dots;
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() ?? { width: 0, height: 0 };
      const dpr = window.devicePixelRatio || 1;
      const w = rect.width;
      const h = rect.height;
      sizeRef.current = { width: w, height: h };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      buildDots(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const parent = canvas.parentElement;
    parent?.addEventListener('mousemove', handleMouseMove);
    parent?.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Glow under cursor
      if (mx > -1000) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, cursorRadius);
        g.addColorStop(0, glowColor);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mx, my, cursorRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      dotsRef.current.forEach(({ x, y }) => {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = 0.2;
        let radius = dotSize;

        if (dist < cursorRadius) {
          const t = 1 - dist / cursorRadius; // 0–1, 1 = centre
          alpha = 0.2 + t * 0.8;
          radius = dotSize + t * dotSize * 1.2;
        }

        ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      parent?.removeEventListener('mousemove', handleMouseMove);
      parent?.removeEventListener('mouseleave', handleMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [dotColor, glowColor, dotSize, gap, cursorRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default DotGrid;
