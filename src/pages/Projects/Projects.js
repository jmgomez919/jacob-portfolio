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
    photos: [
      '/images/photography/binos-1.jpg',
      '/images/photography/binos-2.jpg',
      '/images/photography/binos-3.jpg',
      '/images/photography/binos-4.jpg',
    ],
  },
  {
    id: 'bat-mitzvah',
    title: 'Bat Mitzvah 2025',
    year: 2025,
    desc: 'Event photography documenting the celebration, ceremony, and memorable moments throughout the evening.',
    photos: [
      '/images/photography/bat-mitzvah-1.jpg',
      '/images/photography/bat-mitzvah-2.jpg',
      '/images/photography/bat-mitzvah-3.jpg',
      '/images/photography/bat-mitzvah-4.jpg',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Sessions',
    year: 2025,
    desc: 'Portrait and lifestyle photography sessions, including individual and pet portrait shoots at outdoor and urban locations.',
    photos: [
      '/images/photography/professional-1.jpg',
      '/images/photography/professional-2.jpg',
      '/images/photography/professional-3.jpg',
      '/images/photography/professional-4.jpg',
    ],
  },
  {
    id: 'vucf-events',
    title: 'VUCF Large Scale Events',
    year: 2025,
    desc: 'Photography coverage of large-scale Volunteer UCF events, documenting volunteers, impact, and community engagement across Central Florida.',
    photos: [
      '/images/photography/vucf-events-1.jpg',
      '/images/photography/vucf-events-2.jpg',
      '/images/photography/vucf-events-3.jpg',
      '/images/photography/vucf-events-4.jpg',
    ],
  },
];

/* ── Sub-components ───────────────────────────────────────────────── */

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
            <span>📣</span>
          </div>
          <div className="ucf-card__brand-copy">
            <h3 className="ucf-card__name">Volunteer UCF</h3>
            <p className="ucf-card__meta">
              Marketing Director &amp; Graphic Design &nbsp;·&nbsp; 2025–Present
            </p>
            <p className="ucf-card__desc-text">
              Creating event recaps and promotional graphics that capture the impact of
              volunteer work across Central Florida.
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

function PhotoCard({ collection }) {
  return (
    <motion.article
      className="photo-card"
      variants={cardItem}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
    >
      <div className="photo-card__grid">
        {collection.photos.map((src, i) => (
          <div key={i} className="photo-cell">
            <img src={src} alt="" className="photo-cell__img" />
          </div>
        ))}
      </div>
      <div className="photo-card__body">
        <span className="photo-card__year">{collection.year}</span>
        <h3 className="photo-card__title">{collection.title}</h3>
        <p className="photo-card__desc">{collection.desc}</p>
      </div>
    </motion.article>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */

export default function Projects() {
  const [ucfExpanded, setUcfExpanded] = useState(false);

  return (
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

          <motion.div
            className="poster-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {filmPosters.map(poster => (
              <PosterCard key={poster.id} poster={poster} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Volunteer UCF ── */}
      <section className="proj-section proj-section--alt">
        <div className="proj-section__inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Volunteer UCF
          </motion.h2>

          <UCFCard
            expanded={ucfExpanded}
            onToggle={() => setUcfExpanded(e => !e)}
          />
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
              <PhotoCard key={col.id} collection={col} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
