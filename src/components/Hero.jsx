import { useEffect, useRef } from 'react';

export default function Hero() {
  const base = import.meta.env.BASE_URL;
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
      className="min-h-screen flex items-center justify-center pt-20 relative px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/30"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8 reveal-left">
          <div className="space-y-6">
            <div>
              <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 animate-[fadeIn_0.8s_ease-out]">
                Sup, I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-heading leading-none animate-[slideUp_0.8s_ease-out]">
                <span className="text-slate-900">Justine Jude</span>
                <br />
                <span 
                  ref={nameRef}
                  className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-violet-600 transition-all duration-500"
                  style={{
                    backgroundSize: '200% 100%',
                    backgroundPosition: 'var(--mouse-x, 0%) 0%'
                  }}
                >
                  Almaden
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                </span>
              </h1>
            </div>

            <p className="text-xl text-slate-600 max-w-xl leading-relaxed animate-[fadeIn_1s_ease-out]">
              A Fresh Graduate of <span className="font-semibold text-slate-800">Information Technology</span> student and{' '}
              <span className="font-semibold text-slate-800">Full-stack Developer</span>. 
              I craft efficient, reliable systems and turn complex problems into elegant code.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4 animate-[fadeIn_1.2s_ease-out]">
              <div>
                <div className="text-3xl font-black text-slate-900">10+</div>
                <div className="text-sm text-slate-500 font-medium">Projects Built</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl font-black text-slate-900">3+</div>
                <div className="text-sm text-slate-500 font-medium">Years Coding</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <div className="text-3xl font-black text-slate-900">5+</div>
                <div className="text-sm text-slate-500 font-medium">Technologies</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 animate-[fadeIn_1.4s_ease-out]">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              View My Work
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6 animate-[fadeIn_1.6s_ease-out]">
            <a
              href="https://github.com/JudeAlmaden"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/justine-jude-almaden-09b0a438b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:Judealmaden2045@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-violet-600 text-slate-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="Email Address"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* Image Section with floating cards */}
        <div className="order-1 lg:order-2 flex justify-center reveal-right relative">
          <div className="relative w-full max-w-lg">
            {/* Main image with enhanced styling */}
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src={`${base}images/me/Hackathon.webp`}
                  alt="Justine Jude Almaden"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-white shadow-xl border border-slate-100 animate-[float_3s_ease-in-out_infinite] flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-800">Open to work</span>
              </div>

              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-xl text-white animate-[float_3s_ease-in-out_infinite_1s] flex items-center gap-2">
                <i className="fas fa-code text-lg"></i>
                <span className="text-sm font-bold">Full-stack Dev</span>
              </div>
            </div>
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
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </a>
    </section>
  );
}