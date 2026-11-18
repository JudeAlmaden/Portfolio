/*
  word-highlight dealt moment — the kit's own moment (assets/moments/word-highlight): every word
  rests at half ink and turns to ink as the statement crosses the screen; a <strong> word turns to
  the accent. The moment scans [data-moment="word-highlight"] itself, so this component only supplies
  the markup: no scroll handler of its own, so nothing fights the kit's scrub.
  Ground-inverse (dark band), one screen (--h: 1).
*/
export default function StatementMoment({ id, statement }) {
  return (
    <section
      className="section ground-inverse"
      id={id}
      style={{ '--h': 1 }}
      data-moment="word-highlight"
      aria-labelledby={`${id}-h`}
    >
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 'var(--s-8)' }}>
        <div>
          <p className="t-label" style={{ color: 'var(--inv-muted, var(--muted))', marginBottom: 'var(--s-4)', letterSpacing: '0.08em' }}>
            HOW I BUILD
          </p>
          <p className="moment-statement mo-wh__text" id={`${id}-h`}>
            <strong>{statement.filter((s) => s.accent).map((s) => s.text).join(' ')}</strong>
            {statement.filter((s) => !s.accent).map((s) => ` ${s.text}`).join('')}
          </p>
          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-body)', color: 'var(--inv-muted, var(--muted))', maxWidth: '54ch', lineHeight: 1.65 }}>
            An OMR grader that grades exams from a phone camera, a queue portal running in college
            offices, and a four-stage voucher approval system for an accounting department.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid" style={{ paddingTop: 'var(--s-6)', borderTop: '1px solid var(--line)' }}>
          <div className="span-4">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              End to end
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              Database, backend, interface, deploy. Eleven projects, most built solo.
            </p>
          </div>
          <div className="span-4">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              Used by real offices
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              The queue portal runs in college offices. The voucher system handles disbursements in an accounting department.
            </p>
          </div>
          <div className="span-4">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              No hardware, no budget
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              EasyAssess grades bubble sheets off a phone camera, because the alternative was buying scanners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
