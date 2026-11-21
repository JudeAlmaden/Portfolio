import { useState, useEffect, useRef } from 'react';
import BrandLogo from './BrandLogo';
import { EMAIL, RESUME_URL, RESUME_NAME } from '../data/siteLinks';

/*
  tasteskill nav-split: name centred, links left, main action right.
  Fixed, opaque, 72px tall, 1px hairline below. No blur, no transparency, no shrink.
  Scroll-spy: IntersectionObserver marks the visible section with aria-current="page".
*/

const NAV_LINKS = [
  { href: '#work',    label: 'Work' },
  { href: '#about',   label: 'About' },
  { href: '#stack',   label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen]   = useState(false);
  const [active, setActive] = useState('');
  const obsRef = useRef(null);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle('nav-locked', open);
    return () => { document.body.classList.remove('nav-locked'); };
  }, [open]);

  /* scroll-spy: mark the section whose midpoint is closest to the viewport centre */
  useEffect(() => {
    const sections = NAV_LINKS
      .map(l => document.querySelector(l.href))
      .filter(Boolean);

    obsRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      /* the "active zone" is the middle 20 % of the viewport */
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach(s => obsRef.current.observe(s));
    return () => obsRef.current?.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav nav--split${open ? ' is-open' : ''}`}>
      <div className="wrap nav__bar">

        {/* left — page links */}
        <nav className="nav__links" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <div className="nav__item" key={href}>
              <a
                className="nav__link"
                href={href}
                aria-current={active === href ? 'page' : undefined}
                onClick={close}
              >
                {label}
              </a>
            </div>
          ))}

          {/* résumé only when the PDF exists */}
          {RESUME_URL && (
            <div className="nav__item">
              <a
                className="nav__link"
                href={RESUME_URL}
                download={RESUME_NAME}
                onClick={close}
              >
                Résumé
              </a>
            </div>
          )}
        </nav>

        {/* centre — logo */}
        <BrandLogo onClick={close} />

        {/* right — CTA + hamburger */}
        <div className="nav__actions">
          <a
            className="btn btn--primary"
            href={`mailto:${EMAIL}`}
            onClick={close}
          >
            Get in touch
          </a>

          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(prev => !prev)}
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

      </div>
    </header>
  );
}
