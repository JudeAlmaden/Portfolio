/*
  About section — 1 screen.
  Follows layout-v4: text left (span-6), visual right (span-6 start-7).
  No scroll-reveal, no Framer Motion.
*/
export default function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section" id="about" style={{ '--h': 1 }} aria-labelledby="about-h">
      <div className="wrap grid grid--middle">
        {/* Left: bio text and credentials */}
        <div className="span-6">
          <div className="section-head">
            <h2 id="about-h">IT graduate, Magna Cum Laude</h2>
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-body)', color: 'var(--ink)', lineHeight: 1.7, maxWidth: '52ch' }}>
            Bachelor of Science in Information Technology from St. Anne College Lucena, 94% cumulative GPA.
            Software Development Intern at Open iT — collaborated on enterprise QA tooling in a professional engineering team.
          </p>
          <p style={{ marginTop: 'var(--s-4)', fontSize: 'var(--t-body)', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '52ch' }}>
            Outside the day job: ran a Scratch Foundation session for senior high students at our school, played on the school's team at Hack4Gov CTF, and hold TESDA NC III in Visual Graphic Design.
            I build in Laravel and React by default; I reach for Next.js when the project calls for it.
          </p>

          {/* Three credential stats */}
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--s-5)', marginTop: 'var(--s-7)' }}>
            {[
              { label: 'GPA', value: '94%', sub: 'Magna Cum Laude' },
              { label: 'Applications', value: '11+', sub: 'built' },
              { label: 'Internship', value: 'Open iT', sub: 'Lucena, 2026' },
            ].map((s) => (
              <div key={s.label}>
                <dt className="t-label" style={{ color: 'var(--muted)' }}>{s.label}</dt>
                {/* a count stays at the stat size; a name (Open iT) sets one step smaller so it holds one line */}
                <dd
                  style={{
                    fontSize: /\d/.test(s.value) ? 'var(--t-stat)' : 'var(--t-h3)',
                    fontWeight: 'var(--display-weight)',
                    color: 'var(--ink)',
                    marginTop: 2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.value}
                </dd>
                <dd className="t-label" style={{ color: 'var(--muted)', marginTop: 2 }}>{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: photograph ending on the right line (x 1360) */}
        <div className="span-6 start-7">
          <a className="m-zoom frame frame--photo frame--portrait" href="#contact" aria-label="Hire Jude Almaden" style={{ borderRadius: 'var(--r-lg)' }}>
            <img
              className="frame__img"
              src={`${base}images/me/hackathon.webp`}
              alt="Jude Almaden competing at the Hack4Gov CTF with his school team"
              loading="lazy"
              width="600"
              height="750"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
