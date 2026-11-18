/*
  Track record & Credentials section — 1 screen.
  Balanced two-column split: Experience left, Certifications right.
  No empty side, no scroll-reveal, no violet.
*/
import { TIMELINE, CERTS } from '../data/aboutData';

export default function Timeline() {
  return (
    <section className="section" id="experience" style={{ '--h': 1 }} aria-labelledby="experience-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="experience-h">Experience & credentials</h2>
          <p style={{ marginTop: 'var(--s-3)', fontSize: 'var(--t-body)', color: 'var(--muted)', maxWidth: '54ch' }}>
            Internship at Open iT, Magna Cum Laude honors, and the certificates behind them.
          </p>
        </div>

        <div className="grid" style={{ marginTop: 'var(--s-6)', alignItems: 'start' }}>
          {/* Left: Experience & Education Timeline */}
          <div className="span-6">
            <p className="t-label" style={{ color: 'var(--muted)', marginBottom: 'var(--s-4)' }}>
              Work & Education
            </p>
            <ol className="timeline" style={{ gap: 'var(--s-5)' }} aria-label="Career and education timeline">
              {TIMELINE.map((item, i) => (
                <li key={i} className="timeline-item">
                  <div className="timeline-line" aria-hidden="true">
                    <div className="timeline-dot" />
                    <div className="timeline-rail" />
                  </div>
                  <div>
                    <p className="timeline-tag" style={{ marginBottom: 2 }}>{item.tag}</p>
                    <p className="timeline-role" style={{ fontSize: 'var(--t-body)', fontWeight: 500 }}>{item.role}</p>
                    <p className="timeline-org" style={{ fontSize: 'var(--t-small)' }}>{item.org} · {item.period}</p>
                    <p className="timeline-desc" style={{ fontSize: 'var(--t-small)', marginTop: 4, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Certifications & Recognition */}
          <div className="span-6 start-7">
            <p className="t-label" style={{ color: 'var(--muted)', marginBottom: 'var(--s-4)' }}>
              Certificates & seminars
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
              {CERTS.map((cert, i) => (
                <article
                  key={i}
                  className="cert-item"
                  style={{ padding: 'var(--s-3) var(--s-4)', borderRadius: 'var(--r-md)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--s-2)' }}>
                    <p className="cert-title" style={{ fontSize: 'var(--t-small)', fontWeight: 600, margin: 0, color: 'var(--ink)' }}>
                      {cert.title}
                    </p>
                    <span className="cert-year" style={{ fontSize: 'var(--t-small)', color: 'var(--muted)', flexShrink: 0 }}>
                      {cert.year}
                    </span>
                  </div>
                  <p className="cert-provider" style={{ fontSize: 'var(--t-small)', color: 'var(--accent)', marginTop: 2, margin: 0 }}>
                    {cert.provider ? `${cert.provider} — ` : ''}<span style={{ color: 'var(--muted)', fontWeight: 400 }}>{cert.desc}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const TimelineSection = Timeline;
export const CertsSection = () => null;
