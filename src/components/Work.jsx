import { useEffect, useRef, useState } from 'react';
import { ARCHIVE, FEATURED } from '../data/projectsData';

/* One project card — kit .card filled to the grid cell, so a row is one height.
   The screenshot zooms 1.03 inside its frame on hover via the motion layer. */
function ProjectCard({ project, onOpen }) {
  const href = project.live || project.github;

  return (
    <article className="card project-card">
      <div className="frame frame--photo project-card__media">
        <img
          className="frame__img"
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          loading="lazy"
          width="600"
          height="375"
        />
      </div>

      <div className="project-card__body">
        <p className="t-label project-card__tags">{project.tags.slice(0, 3).join(' · ')}</p>

        <h3 className="project-card__title">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <p className="project-card__text">{project.description}</p>

        <div className="project-card__foot">
          {project.live && (
            <a
              className="project-card__link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site ↗
            </a>
          )}
          <button
            type="button"
            className="project-card__details"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
          >
            Details →
          </button>
        </div>
      </div>
    </article>
  );
}

/* An archive row — the earlier projects, listed rather than carded. Opens the same dialog. */
function ArchiveRow({ project, onOpen }) {
  const href = project.github || project.live;

  return (
    <li className="archive__row">
      <div className="archive__main">
        <a className="archive__title" href={href} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
        <p className="t-label archive__tags">{project.tags.join(' · ')}</p>
        <p className="archive__text">{project.description}</p>
      </div>
      <button
        type="button"
        className="archive__details"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
      >
        Details →
      </button>
    </li>
  );
}

/* Project detail dialog: gallery with thumbnails, the problem, what was built, and the links.
   Escape and a click on the backdrop close it; the page behind does not scroll while it is open. */
function ProjectModal({ project, onClose }) {
  const [active, setActive] = useState(0);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery?.length ? project.gallery : [project.thumbnail];

  return (
    <div className="project-modal" onClick={onClose}>
      <div
        className="project-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal__bar">
          <p className="t-label">{project.tags.join(' · ')}</p>
          <button
            ref={closeRef}
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <h2 className="project-modal__title" id="project-modal-title">{project.title}</h2>

        <div className="project-modal__media">
          <img src={gallery[active]} alt={`${project.title} screenshot ${active + 1}`} />
        </div>

        {gallery.length > 1 && (
          <div className="project-modal__thumbs">
            {gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`project-modal__thumb${index === active ? ' is-active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`Show screenshot ${index + 1}`}
                aria-current={index === active}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {project.problem && (
          <div className="project-modal__section">
            <h3 className="project-modal__label">The problem</h3>
            <p>{project.problem}</p>
          </div>
        )}

        {project.highlights?.length > 0 && (
          <div className="project-modal__section">
            <h3 className="project-modal__label">What I built</h3>
            <ul className="project-modal__list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-modal__actions">
          {project.live && (
            <a className="btn btn--primary" href={project.live} target="_blank" rel="noopener noreferrer">
              View live site
              <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                <path className="m-arrow__stem" d="M1 6h8" />
                <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
              </svg>
            </a>
          )}
          <a className="btn btn--secondary" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

/* Work section — 2 screens, three-column project grid, no scroll-reveal */
export default function Work() {
  const [open, setOpen] = useState(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section className={`section${expanded ? ' is-expanded' : ''}`} id="work" style={{ '--h': 2 }} aria-labelledby="work-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-h">Featured work</h2>
            <p>
              Six projects from the last four years — OMR scanning, AI tutors, queue management,
              enterprise accounting. Each one is in production or was deployed for a real institution.
            </p>
          </div>

          <div className="grid" style={{ marginTop: 'var(--s-8)', rowGap: 'var(--s-7)' }}>
            {FEATURED.map((project) => (
              <div key={project.id} className="span-4">
                <ProjectCard project={project} onOpen={setOpen} />
              </div>
            ))}
          </div>

          <div className="work-more-row">
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'Show fewer projects' : `View all ${FEATURED.length} projects`}
            </button>
          </div>

          {/* the remaining builds — listed as an archive so all eleven projects are reachable */}
          <div className="archive">
            <div className="archive__head">
              <h3>Archive</h3>
              <p>The five earlier builds — school tools, learning projects, and an internship dashboard.</p>
            </div>
            <ul className="archive__list">
              {ARCHIVE.map((project) => (
                <ArchiveRow key={project.id} project={project} onOpen={setOpen} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* keyed by project: opening another project starts the gallery at its first shot */}
      <ProjectModal key={open?.id ?? 'none'} project={open} onClose={() => setOpen(null)} />
    </>
  );
}
