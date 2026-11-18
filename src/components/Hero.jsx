/*
  tasteskill hero-photo — full-bleed photograph layer, words in a solid box on the calm side.
  data-enter fires the motion layer's one-time entrance on load.
  Photograph: public/images/me/resource_speaker.webp (real — facilitating a Scratch session).
  Stand-in note: this is the client's own photograph; no replacement needed.
*/
export default function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section
      className="hero hero--photo"
      data-enter
      data-calm="right"
      aria-labelledby="hero-h"
    >
      {/* Full-bleed photograph — the client's own (Scratch Foundation speaker event) */}
      <img
        className="hero__bg"
        src={`${base}images/me/resource_speaker.webp`}
        alt="Jude Almaden facilitating a Scratch Foundation session for senior high students"
        style={{ '--ly-pos': '30% 50%', '--ly-pos-phone': '50% 20%' }}
        fetchPriority="high"
        width="1440"
        height="900"
      />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            <h1 id="hero-h">Junior fullstack developer for hire</h1>
            <p className="hero__lead">
              IT graduate, Magna Cum Laude. Eleven projects shipped end to end — a phone-camera OMR grader,
              a live queue portal, a four-stage voucher approval system. Laravel, React, MySQL.
              Looking for a junior developer role.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#work">
                See the work
                <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                  <path className="m-arrow__stem" d="M1 6h8" />
                  <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                </svg>
              </a>
              <a className="btn btn--secondary" href="#contact">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
