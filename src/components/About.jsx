import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import ScrollFloat from './ScrollFloat';

const skillsList = [
  { name: "Laravel",    icon: "devicon-laravel-original colored" },
  { name: "Vue.js",     icon: "devicon-vuejs-plain colored" },
  { name: "PHP",        icon: "devicon-php-plain colored" },
  { name: "React",      icon: "devicon-react-original colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TailwindCSS",icon: "devicon-tailwindcss-original colored" },
  { name: "MySQL",      icon: "devicon-mysql-original colored" },
  { name: "Node.js",    icon: "devicon-nodejs-plain colored" },
];

const compactExperience = [
  {
    org: "Open iT",
    role: "Software Development Intern",
    period: "2026",
    badge: "Internship",
    color: "emerald",
    desc: "Collaborated in professional engineering teams on real-world projects."
  },
  {
    org: "St. Anne College Lucena",
    role: "Bachelor of Science in IT",
    period: "2022 – Present",
    badge: "Dean's Lister",
    color: "violet",
    desc: "Maintained a high GPA of 94% with multi-semester academic achievements."
  },
  {
    org: "Tayabas Western Academy",
    role: "Senior High School",
    period: "2020 – 2022",
    badge: "Graduated with Honors",
    color: "fuchsia",
    desc: "Academic focus on Science, Technology, Engineering, and Mathematics."
  }
];

const certifications = [
  {
    title: "Scratch in Action: Speaker",
    year: "2025",
    icon: "fas fa-microphone",
    provider: "Scratch Foundation",
    desc: "Presented as a speaker at Scratch in Action, sharing interactive programming practices and creative learning experiences with international educators."
  },
  {
    title: "Internet of Things Conference",
    year: "2025",
    icon: "fas fa-wifi",
    provider: "St. Anne's College",
    desc: "Active participant in seminars and hands-on workshops covering IoT protocols, sensory integration, and edge-computing applications."
  },
  {
    title: "Hack4Gov CTF",
    year: "2025",
    icon: "fas fa-shield-alt",
    provider: "DICT",
    desc: "Competed in cyber security challenges, performing penetration testing, vulnerability identification, and incident response under time constraints."
  },
  {
    title: "Sensor Guided Robotics Workshop",
    year: "2023",
    icon: "fas fa-robot",
    provider: "Robotics Academy",
    desc: "Intensive training in sensor instrumentation, pathway programming, and hardware-software closed-loop testing for autonomous devices."
  },
  {
    title: "NCIII – Visual Graphics Design",
    year: "2023",
    icon: "fas fa-palette",
    provider: "TESDA",
    desc: "Certified National Certificate III holder in Visual Graphics Design, demonstrating proficiency in vector design, illustration, layout, and brand assets."
  }
];

export default function About() {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const mediaRef = useRef(null);
  const certsRef = useRef(null);

  const [expandedCert, setExpandedCert] = useState(null);
  const certBodyRefs = useRef([]);

  function toggleCert(index) {
    const isOpen = expandedCert === index;

    // Collapse currently open row
    if (expandedCert !== null && certBodyRefs.current[expandedCert]) {
      const el = certBodyRefs.current[expandedCert];
      animate(el, {
        height: [el.scrollHeight, 0],
        opacity: [1, 0],
        duration: 320,
        ease: 'outExpo',
        onComplete: () => { el.style.height = '0px'; },
      });
    }

    if (isOpen) {
      setExpandedCert(null);
      return;
    }

    setExpandedCert(index);
    // Expand row after state update
    requestAnimationFrame(() => {
      const el = certBodyRefs.current[index];
      if (!el) return;
      el.style.height = '0px';
      el.style.opacity = '0';
      const targetH = el.scrollHeight;
      animate(el, {
        height: [0, targetH],
        opacity: [0, 1],
        duration: 400,
        ease: 'outExpo',
        onComplete: () => { el.style.height = 'auto'; },
      });
    });
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          runEntrance();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function runEntrance() {
    // eyebrow & title
    animate('#about-eyebrow', {
      opacity: [0, 1], translateY: [20, 0],
      duration: 600, ease: 'outExpo',
    });

    // intro text
    animate(introRef.current?.querySelectorAll('.intro-line'), {
      opacity: [0, 1], translateY: [25, 0],
      delay: stagger(100, { start: 150 }),
      duration: 650, ease: 'outExpo',
    });

    // skill pills
    animate(skillsRef.current?.querySelectorAll('.skill-pill'), {
      opacity: [0, 1], scale: [0.8, 1],
      delay: stagger(60, { start: 250 }),
      duration: 500, ease: 'outBack',
    });

    // experience cards
    animate(expRef.current?.querySelectorAll('.exp-card'), {
      opacity: [0, 1], translateX: [35, 0],
      delay: stagger(120, { start: 300 }),
      duration: 700, ease: 'outExpo',
    });

    // media cards
    animate(mediaRef.current?.querySelectorAll('.media-card-wrap'), {
      opacity: [0, 1], translateY: [40, 0], scale: [0.95, 1],
      delay: stagger(120, { start: 400 }),
      duration: 750, ease: 'outBack',
    });

    // cert grid cards
    animate(certsRef.current?.querySelectorAll('.cert-card-grid'), {
      opacity: [0, 1], translateY: [30, 0],
      delay: stagger(100, { start: 500 }),
      duration: 700, ease: 'outExpo',
    });
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-4 bg-slate-50/40 overflow-hidden dot-grid"
    >
      {/* Visual Anchors: Radiant glow spheres */}
      <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-violet-200/25 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto space-y-16">

        {/* ── Section Title ── */}
        <div className="text-center">
          <p
            id="about-eyebrow"
            className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3"
            style={{ opacity: 0 }}
          >
            Profile
          </p>
          <h2
            className="font-heading font-black leading-none tracking-tight text-slate-900"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            <ScrollFloat animationDuration={0.7} stagger={0.03} scrollStart={0.1}>
              About &amp; Experience
            </ScrollFloat>
          </h2>
        </div>

        {/* ── [ About + Skills & Experience Grid ] ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Intro & Skill Pills */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 p-6 md:p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-100/50">
            <div ref={introRef} className="space-y-4">
              <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 font-heading">
                A Little About Me
              </h3>
              <p className="intro-line text-slate-700 text-lg md:text-xl font-medium leading-relaxed font-heading" style={{ opacity: 0 }}>
                IT student and web developer focused on <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">Laravel</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-bold">Vue</span>, and real-world systems.
              </p>
              <p className="intro-line text-slate-500 text-sm md:text-base leading-relaxed" style={{ opacity: 0 }}>
                Experienced in internships, hackathons, and building scalable academic projects. I seek opportunities where I can apply my skills in web development, IT systems, and problem-solving to create meaningful impact.
              </p>
            </div>

            {/* Skill Pills */}
            <div ref={skillsRef} className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 font-heading">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-pill flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow hover:border-violet-200 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    style={{ opacity: 0 }}
                  >
                    <i className={`${skill.icon} text-sm`} />
                    <span className="text-xs font-bold text-slate-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Compact Experience Cards */}
          <div ref={expRef} className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 font-heading px-2">
              Experience &amp; Education
            </h3>

            <div className="space-y-4">
              {compactExperience.map((exp, i) => (
                <div
                  key={i}
                  className="exp-card p-5 rounded-[20px] bg-white/70 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all duration-300"
                  style={{ opacity: 0 }}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base font-heading">
                        {exp.org}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── [ Featured Achievements: Modern Asymmetrical Grid ] ── */}
        <div className="space-y-6 pt-6">
          <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 font-heading">
            Featured Achievements
          </h3>

          <div
            ref={mediaRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
          >
            {/* Main Featured Hero Card */}
            <div className="media-card-wrap md:col-span-7 group relative rounded-[24px] overflow-hidden aspect-[16/10] md:aspect-auto md:h-full min-h-[300px] shadow-lg border border-slate-100" style={{ opacity: 0 }}>
              <img
                src="/images/me/Hackathon.webp"
                alt="Hackathon event representation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300 mb-1">
                  Highlight Event
                </span>
                <h4 className="text-white font-extrabold text-lg md:text-xl font-heading">
                  National CTF Cyber Security Challenge
                </h4>
                <p className="text-slate-300 text-xs mt-1 max-w-md">
                  Collaborating under pressure to solve advanced security tasks, building resilient networks, and performing vulnerability assessment.
                </p>
              </div>
            </div>

            {/* Right Stacked Column (2 small images) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Speaker card */}
              <div className="media-card-wrap group relative rounded-[24px] overflow-hidden aspect-[16/10] md:aspect-auto md:h-1/2 min-h-[140px] shadow-md border border-slate-100" style={{ opacity: 0 }}>
                <img
                  src="/images/me/Resource_Speaker2.webp"
                  alt="Resource Speaker Event"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-4">
                  <h5 className="text-white font-bold text-sm font-heading">Resource Speaker</h5>
                  <p className="text-slate-300 text-[10px] mt-0.5">Scratch in Action international seminar.</p>
                </div>
              </div>

              {/* Research card */}
              <div className="media-card-wrap group relative rounded-[24px] overflow-hidden aspect-[16/10] md:aspect-auto md:h-1/2 min-h-[140px] shadow-md border border-slate-100" style={{ opacity: 0 }}>
                <img
                  src="/images/me/Student Research.jpg"
                  alt="Student Research Presentation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-4">
                  <h5 className="text-white font-bold text-sm font-heading">Student Research</h5>
                  <p className="text-slate-300 text-[10px] mt-0.5">Advancing ideas in hardware-software designs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── [ Compact Certifications Accordion / 2-Column Grid ] ── */}
        <div className="space-y-6 pt-10 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 font-heading">
                Certifications &amp; Achievements
              </h3>
              <p className="text-xs text-slate-400 mt-1">Click a credential card to review extra details.</p>
            </div>
          </div>

          {/* 2-Column Compact Grid */}
          <div
            ref={certsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {certifications.map((cert, index) => {
              const isOpen = expandedCert === index;
              return (
                <div
                  key={index}
                  className="cert-card-grid p-5 rounded-[22px] bg-white/70 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 flex flex-col justify-between"
                  style={{ opacity: 0 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      {/* Left: Icon and Name */}
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isOpen ? 'bg-primary text-white' : 'bg-violet-50 text-primary'} transition-all`}>
                          <i className={`${cert.icon} text-xs`} />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-800 text-sm font-heading leading-tight line-clamp-1">
                            {cert.title}
                          </h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                            {cert.provider}
                          </p>
                        </div>
                      </div>

                      {/* Right: Year */}
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full shrink-0">
                        {cert.year}
                      </span>
                    </div>

                    {/* Expandable Box */}
                    <div
                      ref={el => certBodyRefs.current[index] = el}
                      style={{ height: 0, overflow: 'hidden', opacity: 0 }}
                    >
                      <p className="text-slate-500 text-xs leading-relaxed pt-2 border-t border-slate-50">
                        {cert.desc}
                      </p>
                    </div>
                  </div>

                  {/* Toggle button */}
                  <div className="flex justify-end pt-3 mt-1">
                    <button
                      onClick={() => toggleCert(index)}
                      className="text-[11px] font-bold tracking-wide uppercase text-primary hover:text-indigo-600 transition-colors flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>{isOpen ? 'Show Less' : 'Details'}</span>
                      <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-[9px]`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
