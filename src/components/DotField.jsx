import { useEffect, useRef } from 'react';

const DotField = ({
  dotColor = 'rgba(139, 92, 246, 0.15)', // violet-500 with opacity
  glowColor = 'rgba(139, 92, 246, 0.08)',
  dotSize = 1.5,
  gap = 24,
  cursorRadius = 150,
  bulgeStrength = 10,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      // Support high DPI screens
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const container = canvas.parentElement;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;

      // Draw active glow under the mouse
      if (mouse.x > -500) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, cursorRadius
        );
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, cursorRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originalX = i * gap;
          const originalY = j * gap;

          let targetX = originalX;
          let targetY = originalY;

          // Bulge physics
          if (mouse.x > -500) {
            const dx = originalX - mouse.x;
            const dy = originalY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < cursorRadius && dist > 0) {
              const force = (cursorRadius - dist) / cursorRadius;
              const bulge = force * bulgeStrength;
              targetX += (dx / dist) * bulge;
              targetY += (dy / dist) * bulge;
            }
          }

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          ctx.arc(targetX, targetY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotColor, glowColor, dotSize, gap, cursorRadius, bulgeStrength]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none -z-10 ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default DotField;
