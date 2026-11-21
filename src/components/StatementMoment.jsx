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
      data-moment="word-highlight"
      aria-labelledby={`${id}-h`}
    >
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'safe center', minHeight: '100%', gap: 'var(--s-8)' }}>
        <div>
          <p className="t-label" style={{ color: 'var(--inv-muted, var(--muted))', marginBottom: 'var(--s-4)', letterSpacing: '0.08em' }}>
            HOW I BUILD
          </p>
          <p className="moment-statement mo-wh__text" id={`${id}-h`}>
            <strong>{statement.filter((s) => s.accent).map((s) => s.text).join(' ')}</strong>
            {statement.filter((s) => !s.accent).map((s) => ` ${s.text}`).join('')}
          </p>
          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-body)', color: 'var(--inv-muted, var(--muted))', maxWidth: '54ch', lineHeight: 1.65 }}>
            I'd rather ship software that runs a real office than a demo that impresses for a week.
          </p>
        </div>

        {/* 4 pillars: ownership, constraint, production, AI */}
        <div className="grid" style={{ paddingTop: 'var(--s-6)', borderTop: '1px solid var(--line)' }}>
          <div className="span-3">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              I own the whole build
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              Schema, API, interface, deploy. I stay until the last piece is wired.
            </p>
          </div>
          <div className="span-3">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              I build for the constraint
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              Budget, stack and the people who have to run it set the design. I ship the version that fits, then improve it.
            </p>
          </div>
          <div className="span-3">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              I build for production
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              Roles, permissions and audit trails from the first schema — and it has to hold when the whole office logs in at once.
            </p>
          </div>
          <div className="span-3">
            <p style={{ fontWeight: 500, color: 'var(--inv-ink, var(--ink))', fontSize: 'var(--t-body)' }}>
              AI is a tool, not the author
            </p>
            <p style={{ fontSize: 'var(--t-small)', color: 'var(--inv-muted, var(--muted))', marginTop: 'var(--s-2)', lineHeight: 1.6 }}>
              Agents scaffold and test; the architecture, the review and the final call are mine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
