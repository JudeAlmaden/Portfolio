/*
  tasteskill nav-split: name centred, links left, main action right.
  Fixed, opaque, 72px tall, 1px hairline below. No blur, no transparency, no shrink.
*/
export default function Navbar() {
  return (
    <header className="nav nav--split">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item"><a className="nav__link" href="#work">Work</a></div>
          <div className="nav__item"><a className="nav__link" href="#about">About</a></div>
          <div className="nav__item"><a className="nav__link" href="#stack">Stack</a></div>
          <div className="nav__item"><a className="nav__link" href="#contact">Contact</a></div>
        </nav>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="stack" aria-hidden="true"></span>
          Jude Almaden
        </a>
        <div className="nav__actions">
          <a className="btn btn--primary" href="#contact">Hire me</a>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded="false"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
