/*
  Stack section — 1 screen, tech categories with real devicon coloured icons.
  No scroll-reveal. Cards aligned to kit grid columns (span-2 each = 6 per row).
*/
import { TECH_CATEGORIES } from '../data/aboutData';

export default function Stack() {
  return (
    <section className="section ground-surface" id="stack" style={{ '--h': 1 }} aria-labelledby="stack-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="stack-h">Stack and tools</h2>
          <p style={{ marginTop: 'var(--s-3)', fontSize: 'var(--t-body)', color: 'var(--muted)', maxWidth: '48ch' }}>
            What I reach for first. All used in shipped projects.
          </p>
        </div>

        <div style={{ marginTop: 'var(--s-6)', display: 'flex', flexDirection: 'column', gap: 'var(--s-5)' }}>
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <p className="t-label" style={{ color: 'var(--muted)', marginBottom: 'var(--s-2)' }}>
                {cat.category}
              </p>
              {/* kit .grid + .span-2 = each card uses 2 of 12 columns → 6 per row, edge-aligned */}
              <div className="grid">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="span-2 stack-item m-nolift" role="listitem">
                    <i className={skill.icon} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

