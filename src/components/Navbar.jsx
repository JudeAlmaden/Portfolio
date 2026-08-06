import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  const handleLinkClick = (section) => {
    setActiveSection(section);
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-2xl text-on-surface tracking-tight hover:text-primary transition-colors"
        >
          <span className="text-primary">PORTFOLIO</span>
        </a>

        {/* Desktop Menu - Glassmorphic with active indicators */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            onClick={() => handleLinkClick('about')}
            className="relative text-sm font-medium text-on-surface hover:text-primary transition-colors group py-2"
          >
            About
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-opacity ${activeSection === 'about' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
          </a>
          <a
            href="#skills"
            onClick={() => handleLinkClick('skills')}
            className="relative text-sm font-medium text-on-surface hover:text-primary transition-colors group py-2"
          >
            Skills
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-opacity ${activeSection === 'skills' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
          </a>
          <a
            href="#projects"
            onClick={() => handleLinkClick('projects')}
            className="relative text-sm font-medium text-on-surface hover:text-primary transition-colors group py-2"
          >
            Projects
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-opacity ${activeSection === 'projects' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-medium uppercase tracking-[0.05em] hover:bg-primary-hover transition-all duration-300 violet-glow-hover"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-on-surface focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu - Dark Glassmorphic */}
      <div
        className={`fixed inset-0 bg-surface-container/95 backdrop-blur-xl z-40 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-outline hover:text-primary"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        <a
          href="#about"
          onClick={() => handleLinkClick('about')}
          className="text-2xl font-heading font-semibold text-on-surface hover:text-primary transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => handleLinkClick('skills')}
          className="text-2xl font-heading font-semibold text-on-surface hover:text-primary transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => handleLinkClick('projects')}
          className="text-2xl font-heading font-semibold text-on-surface hover:text-primary transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick('contact')}
          className="text-2xl font-heading font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
