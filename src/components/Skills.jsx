import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

const skills = [
  { name: "PHP",         icon: "devicon-php-plain colored",         color: "#777BB4", bg: "rgba(119,123,180,0.08)", shadow: "rgba(119,123,180,0.2)" },
  { name: "Laravel",     icon: "devicon-laravel-original colored",   color: "#FF2D20", bg: "rgba(255,45,32,0.08)",   shadow: "rgba(255,45,32,0.2)"   },
  { name: "Vue.js",      icon: "devicon-vuejs-plain colored",        color: "#4FC08D", bg: "rgba(79,192,141,0.08)",  shadow: "rgba(79,192,141,0.2)"  },
  { name: "React",       icon: "devicon-react-original colored",     color: "#61DAFB", bg: "rgba(97,218,251,0.08)",  shadow: "rgba(97,218,251,0.2)"  },
  { name: "JavaScript",  icon: "devicon-javascript-plain colored",   color: "#F7DF1E", bg: "rgba(247,223,30,0.08)",  shadow: "rgba(247,223,30,0.2)"  },
  { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored",color: "#38BDF8", bg: "rgba(56,189,248,0.08)", shadow: "rgba(56,189,248,0.2)"  },
  { name: "MySQL",       icon: "devicon-mysql-original colored",     color: "#4479A1", bg: "rgba(68,121,161,0.08)",  shadow: "rgba(68,121,161,0.2)"  },
  { name: "Node.js",     icon: "devicon-nodejs-plain colored",       color: "#339933", bg: "rgba(51,153,51,0.08)",   shadow: "rgba(51,153,51,0.2)"   },
  { name: "Python",      icon: "devicon-python-plain colored",       color: "#3776AB", bg: "rgba(55,118,171,0.08)",  shadow: "rgba(55,118,171,0.2)"  },
  { name: "Java",        icon: "devicon-java-plain colored",         color: "#5382A1", bg: "rgba(83,130,161,0.08)",  shadow: "rgba(83,130,161,0.2)"  },
  { name: "C++",         icon: "devicon-cplusplus-plain colored",    color: "#00599C", bg: "rgba(0,89,156,0.08)",    shadow: "rgba(0,89,156,0.2)"    },
  { name: "Git",         icon: "devicon-git-plain colored",          color: "#F05032", bg: "rgba(240,80,50,0.08)",   shadow: "rgba(240,80,50,0.2)"   },
];

/* ─── Reusable hook: run anime.js once when ref enters viewport ─── */
function useAnimeOnEnter(ref, animateFn, threshold = 0.15) {
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          animateFn();
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []); // run once on mount only
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /* ── section header ── */
  const headerRef = useRef(null);
  useAnimeOnEnter(headerRef, () => {
    animate(headerRef.current, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      ease: 'outExpo',
    });
  });

  /* ── skills grid ── */
  const skillsGridRef = useRef(null);
  useAnimeOnEnter(skillsGridRef, () => {
    animate(skillsGridRef.current?.querySelectorAll('.skill-card'), {
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.85, 1],
      delay: stagger(55, { grid: [4, 3], from: 'center' }),
      duration: 650,
      ease: 'outBack',
    });
  }, 0.1);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50/50 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[120px] bg-violet-200/40" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[150px] bg-indigo-200/30" />
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-16">

        {/* ── Section Header ── */}
        <div ref={headerRef} className="skills-header text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-primary to-indigo-600">
            Tech Stack &amp; Expertise
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Technologies and tools I work with along my software development journey.
          </p>
        </div>

        {/* ── Tech Stack Grid ── */}
        <div
          ref={skillsGridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="skill-card relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 transition-all duration-300 cursor-default animate-hidden"
                style={{
                  borderColor: isHovered ? skill.color : '#f1f5f9',
                  backgroundColor: isHovered ? skill.bg : '#ffffff',
                  boxShadow: isHovered
                    ? `0 10px 25px -5px ${skill.shadow}, 0 8px 10px -6px ${skill.shadow}`
                    : '0 1px 3px rgba(0,0,0,0.02)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  animate(`.skill-icon-${index}`, {
                    rotate: [0, -8, 8, 0],
                    duration: 400,
                    ease: 'inOutSine',
                  });
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <i
                  className={`skill-icon-${index} ${skill.icon} text-4xl mb-4 transition-all duration-300`}
                  style={{
                    filter: isHovered ? `drop-shadow(0 4px 8px ${skill.shadow})` : 'none',
                  }}
                />
                <span
                  className="text-sm font-bold transition-colors duration-300"
                  style={{ color: isHovered ? '#0f172a' : '#475569' }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
