import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 overflow-hidden border-t border-violet-100 bg-white">
      {/* Subtle ambient top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left space-y-1">
          <h4 className="text-base font-bold font-heading text-slate-900 tracking-wide">
            Justine Jude D. Almaden
          </h4>
          <p className="text-xs text-slate-400 font-normal">
            Building interactive &amp; optimized web systems.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
          {['#hero', '#about', '#skills', '#projects', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="hover:text-primary transition-colors duration-300 capitalize"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/JudeAlmaden"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-violet-100 bg-violet-50 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 hover:bg-violet-100 transition-all duration-300 hover:scale-110"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/justine-jude-almaden-09b0a438b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-violet-100 bg-violet-50 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 hover:bg-violet-100 transition-all duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-7 pt-5 border-t border-violet-50 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Justine Jude D. Almaden. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <i className="fas fa-heart text-rose-400 text-[10px] animate-pulse mx-1" /> in React
        </p>
      </div>
    </footer>
  );
}
