export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative px-6 overflow-hidden"
    >
      {/* Blurred background image for entire section */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/me/Hackathon.webp"
          alt=""
          className="w-full h-full object-cover blur-2xl scale-110 opacity-50"
        />
        {/* White overlay to maintain readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/90"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8 reveal-left">
          <div className="space-y-4">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 leading-tight">
              Justine Jude <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
                Almaden
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              A Final-year Information Technology student and Web Developer. I build efficient, reliable
              systems and solve technical problems with code.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-violet-600 transition-all shadow-lg shadow-violet-500/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-white border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 text-slate-500 pt-4">
            <a
              href="https://github.com/JudeAlmaden"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-2xl"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/justine-jude-almaden-09b0a438b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-2xl"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:Judealmaden2045@gmail.com"
              className="hover:text-primary transition-colors text-2xl"
              aria-label="Email Address"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Main image */}
        <div className="order-1 lg:order-2 flex justify-center reveal-right">
          <div className="relative w-full max-w-md">
            {/* Decorative glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-400/20 rounded-3xl blur-2xl"></div>
            
            {/* Main sharp image */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-violet-500/20 animate-float">
              <img
                src="/images/me/Hackathon.webp"
                alt="Justine Jude Almaden"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-primary transition-colors animate-bounce z-10"
        aria-label="Scroll to About section"
      >
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}
