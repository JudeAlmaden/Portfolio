/*
  footer-columns — tasteskill close-type + footer-columns.
  One footer.closing section: row 1 the close, row 2 the links + legal.
*/
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, RESUME_NAME } from '../data/siteLinks';

export default function SiteFooter() {
  return (
    <footer className="closing" id="footer" aria-label="Site footer">
      <div className="wrap">
        {/* Row 1: close-type */}
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2>Start a project</h2>
          </div>
          <a
            className="btn btn--primary btn--xl"
            href="#contact"
          >
            Hire me
            <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
              <path className="m-arrow__stem" d="M1 6h8" />
              <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
            </svg>
          </a>
        </div>

        {/* Row 2: columns footer */}
        <div className="closing__links">
          <div className="grid">
            <div className="span-5 stack-5">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="stack" aria-hidden="true"></span>
                Jude Almaden
              </a>
              <p className="footer__lede">
                Fullstack web developer. Laravel, React, Next.js.
              </p>
            </div>
            <div className="span-3 start-7 footer__col">
              <h4>Work</h4>
              <ul>
                <li><a href="#work">Projects</a></li>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h4>About</h4>
              <ul>
                <li><a href="#about">Profile</a></li>
                <li><a href="#stack">Stack</a></li>
                <li><a href="#experience">Experience</a></li>
                {RESUME_URL && (
                  <li><a href={RESUME_URL} download={RESUME_NAME}>Résumé</a></li>
                )}
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>© 2026 Justine Jude D. Almaden</span>
            <a href="#contact">Contact</a>
            <span>Photographs: the client's own</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

