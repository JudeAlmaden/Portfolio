/*
  Contact section — 1 screen. Text left / Photo right split.
  Follows layout-v4: text left, visual right, top-aligned.
  mailto on .example (stand-in; client to supply real address before launch).
  No invented review, quote or figure.
*/
export default function Contact({ onCopyEmail }) {
  const email = 'jude@judealmaden.example';

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      onCopyEmail?.('Email address copied');
    } catch {
      onCopyEmail?.('Copy the address manually');
    }
  };

  const base = import.meta.env.BASE_URL;

  return (
    <section className="section ground-inverse" id="contact" style={{ '--h': 1 }} aria-labelledby="contact-h">
      <div className="wrap grid grid--middle">

        {/* Left — text and actions */}
        <div className="span-6">
          <div className="section-head">
            <h2 id="contact-h">Hire me</h2>
            <p style={{ marginTop: 'var(--s-4)', fontSize: 'var(--t-body)', color: 'var(--inv-muted, var(--muted))', maxWidth: '44ch', lineHeight: 1.65 }}>
              Available for contract and full-time roles. I reply within a day.
            </p>
          </div>

          <div className="btn-row" style={{ gap: 'var(--s-5)', marginTop: 'var(--s-8)' }}>
            <a
              className="btn btn--primary btn--xl"
              href={`mailto:${email}`}
              onClick={handleCopy}
            >
              Email Jude
              <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                <path className="m-arrow__stem" d="M1 6h8" />
                <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
              </svg>
            </a>

            <a
              className="btn btn--secondary"
              href="https://github.com/JudeAlmaden"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right — real photograph ending on the right line (x 1360) */}
        <div className="span-6 start-7">
          <div className="frame frame--photo frame--portrait" style={{ borderRadius: 'var(--r-lg)', overflow: 'clip' }}>
            <img
              className="frame__img"
              src={`${base}images/me/student_research.jpg`}
              alt="Jude presenting student research"
              loading="lazy"
              width="600"
              height="750"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
