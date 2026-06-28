import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  pageVariants, fadeUp, staggerContainer, cardItem, viewportOnce,
} from '../../utils/animations';
import './Projects.css';

/* ── Data ─────────────────────────────────────────────────────────── */

const filmPosters = [
  {
    id: 'binos',
    title: "Bino's",
    year: 2025,
    role: 'BTS / Graphic Design',
    director: 'Written & Directed by Mandy White',
    description:
      'Created using Photoshop for a hand-drawn aesthetic, with Blender used to render lighting effects so all characters and scenery were properly illuminated.',
    tools: ['Photoshop', 'Blender'],
    img: '/images/poster-binos.png',
  },
  {
    id: 'chimera',
    title: 'Chimera',
    year: 2025,
    role: 'BTS / Graphic Design',
    director: 'Written & Directed by Mandy White',
    description:
      'Used a gradient tool in Photoshop to add a stylized effect to the film credits and craft a personalized movie rating.',
    tools: ['Photoshop'],
    img: '/images/poster-chimera.png',
  },
  {
    id: 'television-tension',
    title: 'Television Tension',
    year: 2024,
    role: 'Graphic Design',
    director: 'Starring Troy Thomas & Caelan Mandigo',
    description:
      'Using Blender, arranged a stack of CRT-TV models and rendered screenshots from the film to create an image that reflects the tone of the story.',
    tools: ['Blender'],
    img: '/images/poster-television-tension.jpg',
  },
  {
    id: 'call-me-up',
    title: 'Call Me Up (Thru Tha Grapevine)',
    year: 2026,
    role: 'Graphic Design',
    director: 'Directed by Mandy White',
    description:
      'Used Adobe Illustrator to individually trace each cast member\'s silhouette — arms, faces, clothing, jewelry, and hair — to achieve the blocky, pop-style aesthetic the director envisioned for her music video.',
    tools: ['Illustrator'],
    img: '/images/poster-call-me-up.jpg',
  },
];

const instagramPosts = [
  { id: 1, href: 'https://www.instagram.com/p/DV1BS49jt5W/', label: 'Spring Into Service 2026'        },
  { id: 2, href: 'https://www.instagram.com/p/DQsA9dXkRzq/', label: 'Committee Member Introductions'  },
  { id: 3, href: 'https://www.instagram.com/p/DV4e1ymjgAl/', label: 'Volunteer with SALT Outreach'    },
  { id: 4, href: 'https://www.instagram.com/p/DRnN6QIjReP/', label: 'Dinner Knight Serving Families'  },
  { id: 5, href: 'https://www.instagram.com/p/DP2MSK7jUZr/', label: 'Puppy Play 2025'                 },
  { id: 6, href: 'https://www.instagram.com/p/DN3ocgvXBxU/', label: 'Pegasus Palooza 2025'            },
];


const photoCollections = [
  {
    id: 'binos-bts',
    title: "Binos — BTS",
    year: 2025,
    desc: "Behind-the-scenes photography capturing candid moments of cast and crew during the Bino's short film production.",
    preview: [
      '/images/photography/binos-bts-8.jpg',
      '/images/photography/binos-bts-11.jpg',
      '/images/photography/binos-bts-14.jpg',
      '/images/photography/binos-bts-18.jpg',
    ],
    photos: [
      '/images/photography/binos-bts-5.jpg',  // start
      '/images/photography/binos-bts-2.jpg',
      '/images/photography/binos-bts-3.jpg',
      '/images/photography/binos-bts-4.jpg',
      '/images/photography/binos-bts-6.jpg',
      '/images/photography/binos-bts-7.jpg',
      '/images/photography/binos-bts-8.jpg',
      '/images/photography/binos-bts-9.jpg',
      '/images/photography/binos-bts-10.jpg',
      '/images/photography/binos-bts-11.jpg',
      '/images/photography/binos-bts-12.jpg',
      '/images/photography/binos-bts-13.jpg',
      '/images/photography/binos-bts-14.jpg',
      '/images/photography/binos-bts-15.jpg',
      '/images/photography/binos-bts-16.jpg',
      '/images/photography/binos-bts-17.jpg',
      '/images/photography/binos-bts-18.jpg',
      '/images/photography/binos-bts-19.jpg',
      '/images/photography/binos-bts-1.jpg',  // end
    ],
  },
  {
    id: 'bat-mitzvah',
    title: 'Bat Mitzvah 2025',
    year: 2025,
    desc: 'Event photography documenting the celebration, ceremony, and memorable moments throughout the evening.',
    preview: [
      '/images/photography/bat-mitzvah-1.jpg',
      '/images/photography/bat-mitzvah-3.jpg',
      '/images/photography/bat-mitzvah-9.jpg',
      '/images/photography/bat-mitzvah-8.jpg',
    ],
    photos: [
      '/images/photography/bat-mitzvah-1.jpg',
      '/images/photography/bat-mitzvah-2.jpg',
      '/images/photography/bat-mitzvah-3.jpg',
      '/images/photography/bat-mitzvah-4.jpg',
      '/images/photography/bat-mitzvah-5.jpg',
      '/images/photography/bat-mitzvah-6.jpg',
      '/images/photography/bat-mitzvah-7.jpg',
      '/images/photography/bat-mitzvah-8.jpg',
      '/images/photography/bat-mitzvah-9.jpg',
      '/images/photography/bat-mitzvah-10.jpg',
      '/images/photography/bat-mitzvah-11.jpg',
      '/images/photography/bat-mitzvah-12.jpg',
      '/images/photography/bat-mitzvah-13.jpg',
      '/images/photography/bat-mitzvah-14.jpg',
      '/images/photography/bat-mitzvah-15.jpg',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Sessions',
    year: 2025,
    desc: 'Portrait and lifestyle photography sessions, including individual and pet portrait shoots at outdoor and urban locations.',
    preview: [
      '/images/photography/professional-11.jpg',
      '/images/photography/professional-10.jpg',
      '/images/photography/professional-13.jpg',
      '/images/photography/professional-1.jpg',
    ],
    photos: [
      '/images/photography/professional-11.jpg',  // start
      '/images/photography/professional-1.jpg',
      '/images/photography/professional-2.jpg',
      '/images/photography/professional-3.jpg',
      '/images/photography/professional-4.jpg',
      '/images/photography/professional-5.jpg',
      '/images/photography/professional-6.jpg',
      '/images/photography/professional-7.jpg',
      '/images/photography/professional-8.jpg',
      '/images/photography/professional-9.jpg',
      '/images/photography/professional-10.jpg',
      '/images/photography/professional-12.jpg',
      '/images/photography/professional-13.jpg',
      '/images/photography/professional-14.jpg',
      '/images/photography/professional-15.jpg',
      '/images/photography/professional-16.jpg',  // end
    ],
  },
  {
    id: 'vucf-events',
    title: 'VUCF Large Scale Events',
    year: 2025,
    desc: 'Photography coverage of large-scale Volunteer UCF events, documenting volunteers, impact, and community engagement across Central Florida.',
    preview: [
      '/images/photography/vucf-events-3.jpg',
      '/images/photography/vucf-events-5.jpg',
      '/images/photography/vucf-events-12.jpg',
      '/images/photography/vucf-events-24.jpg',
    ],
    photos: [
      '/images/photography/vucf-events-1.jpg',
      '/images/photography/vucf-events-2.jpg',
      '/images/photography/vucf-events-3.jpg',
      '/images/photography/vucf-events-4.jpg',
      '/images/photography/vucf-events-5.jpg',
      '/images/photography/vucf-events-6.jpg',
      '/images/photography/vucf-events-7.jpg',
      '/images/photography/vucf-events-8.jpg',
      '/images/photography/vucf-events-9.jpg',
      '/images/photography/vucf-events-10.jpg',
      '/images/photography/vucf-events-11.jpg',
      '/images/photography/vucf-events-12.jpg',
      '/images/photography/vucf-events-13.jpg',
      '/images/photography/vucf-events-14.jpg',
      '/images/photography/vucf-events-15.jpg',
      '/images/photography/vucf-events-16.jpg',
      '/images/photography/vucf-events-17.jpg',
      '/images/photography/vucf-events-18.jpg',
      '/images/photography/vucf-events-19.jpg',
      '/images/photography/vucf-events-20.jpg',
      '/images/photography/vucf-events-21.jpg',
      '/images/photography/vucf-events-22.jpg',
      '/images/photography/vucf-events-23.jpg',
      '/images/photography/vucf-events-24.jpg',
      '/images/photography/vucf-events-25.jpg',
      '/images/photography/vucf-events-26.jpg',
      '/images/photography/vucf-events-27.jpg',
      '/images/photography/vucf-events-28.jpg',
      '/images/photography/vucf-events-29.jpg',
      '/images/photography/vucf-events-30.jpg',
    ],
  },
];

/* ── Sub-components ───────────────────────────────────────────────── */

function PosterCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const count = filmPosters.length;

  const go = (next) => {
    if (next === idx) return;
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };
  const prev = () => go((idx - 1 + count) % count);
  const next = () => go((idx + 1) % count);

  const slideVariants = {
    enter: d => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center:    { x: 0, opacity: 1 },
    exit:  d => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <motion.div
      className="poster-carousel"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="poster-carousel__stage">
        <button className="poster-carousel__arrow" onClick={prev} aria-label="Previous poster">‹</button>

        <div className="poster-carousel__viewport">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className="poster-carousel__slide"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <PosterCard poster={filmPosters[idx]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="poster-carousel__arrow" onClick={next} aria-label="Next poster">›</button>
      </div>

      <div className="poster-carousel__dots">
        {filmPosters.map((_, i) => (
          <button
            key={i}
            className={`poster-dot${i === idx ? ' poster-dot--active' : ''}`}
            onClick={() => go(i)}
            aria-label={filmPosters[i].title}
          />
        ))}
      </div>
    </motion.div>
  );
}

function PosterCard({ poster }) {
  return (
    <motion.article
      className="poster-card"
      variants={cardItem}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
    >
      <div className="poster-card__img-wrap">
        <img
          src={poster.img}
          alt={`${poster.title} movie poster`}
          className="poster-card__img"
        />
      </div>

      <div className="poster-card__body">
        <div className="poster-card__row">
          <span className="poster-card__year">{poster.year}</span>
          <span className="poster-card__role-badge">{poster.role}</span>
        </div>
        <h3 className="poster-card__title">{poster.title}</h3>
        <p className="poster-card__desc">{poster.description}</p>
        <ul className="poster-card__tools">
          {poster.tools.map(t => <li key={t} className="poster-card__tool">{t}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}

function IGEmbed({ post }) {
  return (
    <div className="ig-embed-wrap">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={post.href}
        data-instgrm-version="14"
        data-instgrm-captioned
      >
        <a href={post.href} target="_blank" rel="noopener noreferrer">
          {post.label}
        </a>
      </blockquote>
    </div>
  );
}

function UCFCard({ expanded, onToggle }) {
  useEffect(() => {
    if (!expanded) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [expanded]);

  return (
    <div className="ucf-card">
      <button
        className="ucf-card__btn"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls="ucf-posts"
      >
        <div className="ucf-card__brand">
          <div className="ucf-card__avatar" aria-hidden="true">
            <img src="/images/volunteerucf_logo.jpg" alt="Volunteer UCF" className="ucf-card__avatar-img" />
          </div>
          <div className="ucf-card__brand-copy">
            <h3 className="ucf-card__name">Volunteer UCF</h3>
            <p className="ucf-card__meta">
              Marketing Director &amp; Graphic Design &nbsp;·&nbsp; 2025–2026
            </p>
            <p className="ucf-card__desc-text">
              Creating event recaps and promotional graphics that capture the impact of
              volunteer work across Central Florida, as well as a broader reach across the United States.
            </p>
          </div>
        </div>

        <div className="ucf-card__right">
          <p className="ucf-card__handle">@volunteerucf</p>
          <div className="ucf-card__pill">
            <span>{expanded ? 'Close Posts' : 'View Instagram Posts'}</span>
            <motion.span
              className="ucf-card__chevron"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              ▼
            </motion.span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id="ucf-posts"
            key="ucf-posts"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="ucf-posts-inner">
              <p className="ucf-posts-label">Recent Posts — @volunteerucf</p>
              <div className="ucf-posts-grid">
                {instagramPosts.map(post => (
                  <IGEmbed key={post.id} post={post} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


function PhotoCard({ collection, onClick }) {
  return (
    <motion.article
      className="photo-card"
      variants={cardItem}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      onClick={onClick}
    >
      <div className="photo-card__grid">
        {(collection.preview || collection.photos).slice(0, 4).map((src, i) => (
          <div key={i} className="photo-cell">
            {src && <img src={src} alt="" className="photo-cell__img" />}
          </div>
        ))}
        <div className="photo-card__overlay">
          <span className="photo-card__overlay-label">View Gallery</span>
        </div>
      </div>
      <div className="photo-card__body">
        <span className="photo-card__year">{collection.year}</span>
        <h3 className="photo-card__title">{collection.title}</h3>
        <p className="photo-card__desc">{collection.desc}</p>
      </div>
    </motion.article>
  );
}

function Lightbox({ collection, onClose }) {
  const [index, setIndex] = useState(0);
  const photos = collection.photos;
  const total  = photos.length;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowLeft')  setIndex(i => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex(i => Math.min(total - 1, i + 1));
      if (e.key === 'Escape')     onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total, onClose]);

  const current = photos[index];

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-window"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="lightbox-header">
          <div>
            <h3 className="lightbox-title">{collection.title}</h3>
            <span className="lightbox-counter">{index + 1} / {total}</span>
          </div>
          <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Stage */}
        <div className="lightbox-stage">
          <button
            className="lightbox-arrow lightbox-arrow--prev"
            onClick={() => setIndex(i => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label="Previous"
          >‹</button>

          <div className="lightbox-img-wrap">
            <AnimatePresence mode="wait">
              {current ? (
                <motion.img
                  key={index}
                  src={current}
                  alt={`${collection.title} — photo ${index + 1}`}
                  className="lightbox-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                />
              ) : (
                <motion.div
                  key={index}
                  className="lightbox-placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <span className="lightbox-placeholder-icon">📷</span>
                  <p>Image Coming Soon</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="lightbox-arrow lightbox-arrow--next"
            onClick={() => setIndex(i => Math.min(total - 1, i + 1))}
            disabled={index === total - 1}
            aria-label="Next"
          >›</button>
        </div>

        {/* Thumbnail strip */}
        <div className="lightbox-thumbs">
          {photos.map((src, i) => (
            <button
              key={i}
              className={`lightbox-thumb${i === index ? ' lightbox-thumb--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Photo ${i + 1}`}
            >
              {src
                ? <img src={src} alt="" />
                : <span className="lightbox-thumb-empty">+</span>
              }
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */

export default function Projects() {
  const [ucfExpanded, setUcfExpanded] = useState(false);
  const [lightbox, setLightbox]       = useState(null);

  return (
    <>
    <motion.div
      className="projects"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Page Header ── */}
      <section className="projects__header">
        <motion.div
          className="projects__header-inner"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="projects__eyebrow">My Work</p>
          <h1 className="projects__title">Projects</h1>
          <p className="projects__subtitle">
            Film poster design, social media marketing, and photography — a curated selection of work.
          </p>
        </motion.div>
      </section>

      {/* ── Film Posters ── */}
      <section className="proj-section">
        <div className="proj-section__inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Film Posters
          </motion.h2>

          <PosterCarousel />
        </div>
      </section>

      {/* ── Social Media Management ── */}
      <section className="proj-section proj-section--alt">
        <div className="proj-section__inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Social Media Management
          </motion.h2>

          <motion.div
            className="ucf-combined-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="viewership-stat">
              <h3 className="viewership-stat__title">
                Increased Median Viewership by <strong><u>84.4%</u></strong>
              </h3>
              <p className="viewership-stat__body">
                As Marketing Director for Volunteer UCF, I led with a photo-first philosophy by favoring authentic, action-oriented
                images of volunteers and events over graphic-heavy cover slides. I employed specific art styles that reflected each 
                event and allowed each post to stand out from eachother. By utilizing strategic profile tags and UCF-specific hashtags,
                  each post felt more personal and reached a wider audience organically.
                Across my tenure from Fall 2025 through Spring 2026, median viewership nearly doubled as well as a 
                  noticeable increase in audience engagement and overall exposure, spreading the word of VUCF's mission.
              </p>
              <img
                src="/images/vucf-viewership-graph.png"
                alt="Bar and trendline chart showing @volunteerucf viewership count from July 2024 to May 2026, with a visible upward trend beginning when Jacob joined in Fall 2025"
                className="viewership-stat__graph"
              />
            </div>

            <UCFCard
              expanded={ucfExpanded}
              onToggle={() => setUcfExpanded(e => !e)}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Websites ── */}
      <section className="proj-section proj-section--alt">
        <div className="proj-section__inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Websites
          </motion.h2>

          <motion.div
            className="websites-wip"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <img src="/images/websites-wip.jpg" alt="Websites work in progress" className="websites-wip__img" />
            <span className="websites-wip__label">Work in Progress</span>
          </motion.div>
        </div>
      </section>

      {/* ── Photography ── */}
      <section className="proj-section">
        <div className="proj-section__inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Photography
          </motion.h2>

          <motion.div
            className="photo-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {photoCollections.map(col => (
              <PhotoCard key={col.id} collection={col} onClick={() => setLightbox(col)} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>

    <AnimatePresence>
      {lightbox && (
        <Lightbox key="lightbox" collection={lightbox} onClose={() => setLightbox(null)} />
      )}
    </AnimatePresence>
    </>
  );
}
