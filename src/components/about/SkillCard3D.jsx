import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

export default function SkillCard3D({ skill }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors duration-300 shadow-lg cursor-default"
    >
      <div style={{ transform: 'translateZ(20px)' }} className="flex flex-col items-center">
        <i className={`${skill.icon} text-3xl md:text-4xl mb-3 transition-transform duration-300 group-hover:scale-110`} />
        <span className="text-xs font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
