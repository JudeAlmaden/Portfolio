/*
  tasteskill hero-photo — photograph on the left, words in a solid box on the calm side.
  data-enter fires the motion layer's one-time entrance on load.
  Photograph: public/images/me/hero.jpg (the client's own desk photo), drawn as the hero's left
  column by index.css so the whole seated figure stays in frame beside the words.
*/
import { EMAIL } from '../data/siteLinks';

export default function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section
      className="hero hero--photo"
      data-enter
      data-calm="right"
      aria-labelledby="hero-h"
    >
      {/* Photograph — the client's own, the whole figure at the desk */}
      <img
        className="hero__bg"
        src={`${base}images/me/hero.jpg`}
        alt="Jude Almaden seated at his desk in front of two monitors"
        style={{ '--ly-pos': '50% 50%', '--ly-pos-phone': '50% 25%' }}
        fetchPriority="high"
        width="1448"
        height="1086"
      />
      {/* dark overlay: dims the photograph so the picture sits back behind the words */}
      <div className="hero__scrim" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            <h1 id="hero-h">Junior fullstack developer</h1>
            <p className="hero__lead">
              I build thoughtful web applications that turn ideas into practical tools — from assessment platforms and queueing systems to custom business workflows. I enjoy working across the entire process, from shaping an idea to bringing it to life.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#work">
                See the work
                <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                  <path className="m-arrow__stem" d="M1 6h8" />
                  <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                </svg>
              </a>
              <a className="btn btn--secondary" href={`mailto:${EMAIL}`}>Email Jude</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
