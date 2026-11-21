/*
  Contact section — Centered close.
  "Email Jude" is a real mailto: it opens the mail client. Copying the address is its own button.
  No invented review, quote or figure.
*/
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL, RESUME_NAME } from '../data/siteLinks';

export default function Contact({ onCopyEmail }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      onCopyEmail?.('Email address copied');
    } catch {
      onCopyEmail?.('Copy the address manually');
    }
  };

  return (
    <section className="section ground-inverse contact-centered-section" id="contact" aria-labelledby="contact-h">
      {/* Subtle architectural background pattern & ambient glow */}
      <div className="contact-bg-pattern" aria-hidden="true" />

      <div className="wrap">
        <div className="contact-card">
          <div className="section-head">
            <h2 id="contact-h">Hire me</h2>
            <p className="contact-lead">
              Available for contract and full-time roles. I reply within a day.
            </p>
          </div>

          <ul className="rows rows--spec contact-specs">
            <li>
              <span className="rows__name">Availability</span>
              <span className="rows__value">Contract &amp; Full-time</span>
            </li>
            <li>
              <span className="rows__name">Location</span>
              <span className="rows__value">Quezon Province</span>
            </li>
            <li>
              <span className="rows__name">Specialization</span>
              <span className="rows__value">Web / Mobile Applications</span>
            </li>
          </ul>

          <div className="btn-row contact-actions">
            <a
              className="btn btn--primary btn--xl"
              href={`mailto:${EMAIL}`}
            >
              Email Jude
              <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                <path className="m-arrow__stem" d="M1 6h8" />
                <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
              </svg>
            </a>
          </div>

          <div className="contact-footer">
            <div className="contact-links p-0">
              {RESUME_URL && (
                <a href={RESUME_URL} download={RESUME_NAME}>
                  Résumé
                </a>
              )}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
              <button type="button" className="contact-copy self-start !mt-0" onClick={handleCopy}>
                Copy email address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
