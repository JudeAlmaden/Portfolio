import { useState, useEffect } from 'react';

/*
  tasteskill nav-split: name centred, links left, main action right.
  Fixed, opaque, 72px tall, 1px hairline below. No blur, no transparency, no shrink.
*/
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-locked', open);
    return () => {
      document.body.classList.remove('nav-locked');
    };
  }, [open]);

  return (
    <header className={`nav nav--split${open ? ' is-open' : ''}`}>
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item"><a className="nav__link" href="#work" onClick={() => setOpen(false)}>Work</a></div>
          <div className="nav__item"><a className="nav__link" href="#about" onClick={() => setOpen(false)}>About</a></div>
          <div className="nav__item"><a className="nav__link" href="#stack" onClick={() => setOpen(false)}>Stack</a></div>
          <div className="nav__item"><a className="nav__link" href="#contact" onClick={() => setOpen(false)}>Contact</a></div>
        </nav>
        <a className="nav__logo" href="#top" onClick={() => setOpen(false)}>
          <span className="mark" data-mark="stack" aria-hidden="true"></span>
          Jude Almaden
        </a>
        <div className="nav__actions">
          <a className="btn btn--primary" href="#contact" onClick={() => setOpen(false)}>Hire me</a>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
