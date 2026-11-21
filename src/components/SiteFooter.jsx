/*
  footer-columns — the directory under the page's one close.
  The close is the contact split above; this footer is the links + legal.
*/
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, RESUME_NAME } from '../data/siteLinks';
import BrandLogo from './BrandLogo';

export default function SiteFooter() {
  return (
    <footer className="closing" id="footer" aria-label="Site footer">
      <div className="wrap">
        {/* The directory: the page's one close is the contact split above */}
        <div className="closing__links">
          <div className="grid">
            <div className="span-5 stack-5">
              <BrandLogo href="#top" />
              <p className="footer__lede">
                Fullstack web developer. Laravel, React, Next.js.
              </p>
            </div>
            <div className="span-3 start-7 footer__col">
              <h3>Work</h3>
              <ul>
                <li><a href="#work">Projects</a></li>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>About</h3>
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
          </div>
        </div>
      </div>
    </footer>
  );
}

