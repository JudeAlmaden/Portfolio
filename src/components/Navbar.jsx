import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'nav-scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-2xl text-slate-800 tracking-tight hover:text-primary transition-colors"
        >
          Jude<span className="text-primary">Almaden</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors text-slate-600"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors text-slate-600"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors text-slate-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-violet-600 transition-all duration-300 shadow-lg shadow-violet-500/25"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-800"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        <a
          href="#about"
          onClick={handleLinkClick}
          className="text-2xl font-heading font-semibold text-slate-800 hover:text-primary transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={handleLinkClick}
          className="text-2xl font-heading font-semibold text-slate-800 hover:text-primary transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={handleLinkClick}
          className="text-2xl font-heading font-semibold text-slate-800 hover:text-primary transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="text-2xl font-heading font-semibold text-primary hover:text-violet-600 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
