import { useState, useEffect, useRef } from 'react';
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
    id: 'inauguration',
    title: '2025 INAUGURATION',
    year: 2025,
    cover: '/images/photography/inauguration-1.jpg',
    desc: 'On-the-ground photo-journalism from the 2025 Presidential Inauguration in Washington D.C. — documenting the atmosphere, the crowds, and the historic transfer of power on January 20th.',
    photos: [
      '/images/photography/inauguration-1.jpg',
      '/images/photography/inauguration-2.jpg',
      '/images/photography/inauguration-3.jpg',
      '/images/photography/inauguration-4.jpg',
      '/images/photography/inauguration-5.jpg',
      '/images/photography/inauguration-6.jpg',
      '/images/photography/inauguration-7.jpg',
      '/images/photography/inauguration-8.jpg',
    ],
    article: {
      title: '—GRATITUDE AND REVERENCE—',
      date: 'January 20, 2025 — Washington D.C.',
      paragraphs: [
        'It may have been empty, but the world was still watching. It may have been quiet, but I could feel the energy in the air. Despite single-digit temperatures varying speeds of wind gusts, there was still a moderate presence of Trump supporters as well as secret service activity. A largely peaceful and homogeneous group was present as there appeared to be little to no opposition to the peaceful transfer of power.',
        'Of the several hundred tourists and locals in the surrounding areas witnessing the ceremonies, I only spotted three vocal protesters around the Washington Monument, which was surprising for one of the largest concentrations of liberal voters in the country. It was at the base of said monument that I watched the swearing-in speeches on a livestream on someone else\'s phone. I didn\'t stick around for much longer as every minute spent out in the open, the sharp winds pierced through more of my double layered clothing.',
        'To quickly summarize the last 48 hours, it was a truly eye-opening experience to witness significant moments in history as they unfolded. Traditions that have spanned nearly a quarter of a millennium still represent and instill the best aspects and values of our country: the freedom of expression, freedom of the press, and a democratic process of government however imperfect it may be.',
        'To be a part of a moment in history and witnessing these events in person made me feel a sense of pride and gratitude. A tremendous amount of appreciation for the circumstances of our nation\'s history — from our darkest hours to our highest moments. Although there are plenty of imperfections within the operations of this country waiting to be smoothed out, moments like these give me a feeling of hope to know that the story isn\'t over.',
        'Whether it be in this presidency or the next one, somewhere in the near future, more people across this beautiful country and across the spectrum can take more closely-to-heart values and beliefs that resonate in a personal favorite quote of mine written by Evelyn Beatrice Hall — "I disapprove of what you say, but I will defend to the death your right to say it."',
      ],
    },
  },
  {
    id: 'artemis-2',
    title: 'ARTEMIS II LAUNCH',
    year: 2026,
    cover: '/images/photography/artemis-1.jpg',
    desc: 'On-the-ground photo-journalism from the Artemis II launch at Kennedy Space Center — documenting the crowd, the fire of liftoff, and humanity\'s return to the Moon.',
    photos: [
      '/images/photography/artemis-1.jpg',
      '/images/photography/artemis-2.jpg',
      '/images/photography/artemis-3.jpg',
      '/images/photography/artemis-4.jpg',
      '/images/photography/artemis-5.jpg',
      '/images/photography/artemis-6.jpg',
    ],
    article: {
      title: '—AWE-INSPIRING AND WONDER—',
      date: 'April 1, 2026 — Titusville, FL',
      paragraphs: [
        'Over 117,000,000,000 people have lived on Earth throughout human history. Up to this moment, 24 have ever journeyed beyond the comfort and safety of our home. Today, four more humans — driven by interest and courage — started a journey to venture on a mission afforded to very few, an opportunity to further solidify an evolutionary step in human history: the ability to grow beyond our planet.',
        'Gene Cernan of Apollo 17 called his mission "the end of the beginning" and challenged the next generation to carry the torch of human exploration out into the solar system. 53 years and 3 months later, the roaring flame of Artemis 2 climbed high into a deep blue sky to the cheer and elation of millions of people crowding the Florida coastline. Even as this program works to carry the legacy of Apollo, the vision of Artemis aims to be more ambitious and industrious than ever before.',
        'Some things never change. Today\'s critics still lament such programs and efforts just the same as yesterday\'s pioneering research. There will always be the naysayers who say "we never have" or "we never could" that fail to appreciate the how\'s, when\'s, what\'s, who\'s, and where\'s that helped to make today possible, but the most timely critics are those who challenge the why. The work of thousands of men and women are not in the pursuit of a select few, but towards the betterment of all mankind which — in the right minds and hands — is a goal that we must always strive for.',
        'We are the next generation. We stand on the shoulders of those who came before us, but who will the next generation from us look back to? Tomorrow\'s giants are only as strong as our youth\'s education today, which in the age of internet and digital livelihoods has been challenged like never before. It is imperative that today\'s youth has the resources to learn and grow stronger, with an emphasis on STEM education. Only through such efforts can we ensure the next generation can boldly go where no one has gone before.',
      ],
    },
  },
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
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.firstElementChild;
    const step = item ? item.offsetWidth + 24 : 280;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
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
        <button className="poster-carousel__arrow" onClick={() => scroll(-1)} aria-label="Previous">‹</button>

        <div className="poster-carousel__track" ref={trackRef}>
          {filmPosters.map(poster => (
            <div key={poster.id} className="poster-carousel__item">
              <PosterCard poster={poster} />
            </div>
          ))}
        </div>

        <button className="poster-carousel__arrow" onClick={() => scroll(1)} aria-label="Next">›</button>
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
              Marketing Director &amp; Graphic Design &nbsp;·&nbsp; Aug 2025 – May 2026
            </p>
            <p className="ucf-card__desc-text">
              Created event recaps and promotional graphics that captured the impact of
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


function PhotoCard({ collection, onClick }) {
  const isEditorial = !!collection.cover;
  return (
    <motion.article
      className={`photo-card${isEditorial ? ' photo-card--editorial' : ''}`}
      variants={cardItem}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      onClick={onClick}
    >
      <div className="photo-card__grid">
        {isEditorial ? (
          <div className="photo-cell photo-cell--cover">
            <img src={collection.cover} alt="" className="photo-cell__img" />
          </div>
        ) : (
          (collection.preview || collection.photos).slice(0, 4).map((src, i) => (
            <div key={i} className="photo-cell">
              {src && <img src={src} alt="" className="photo-cell__img" />}
            </div>
          ))
        )}
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
  const photos  = collection.photos;
  const total   = photos.length;
  const article = collection.article;

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
        className={`lightbox-window${article ? ' lightbox-window--editorial' : ''}`}
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
          {/* Photo area */}
          <div className="lightbox-photo-area">
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

          {/* Article panel (editorial collections only) */}
          {article && (
            <div className="lightbox-article-panel">
              <p className="lightbox-article-panel__title">{article.title}</p>
              <p className="lightbox-article-panel__date">{article.date}</p>
              <div className="lightbox-article-panel__body">
                {article.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          )}
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
          <h1 className="projects__title">Projects</h1>
          <p className="projects__subtitle">
            Film poster designs, social media marketing, photography, and journalism — a curated selection of my work.
          </p>
        </motion.div>
      </section>

      {/* ── Film Posters ── */}
      <section className="proj-section proj-section--posters">
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
            <UCFCard
              expanded={ucfExpanded}
              onToggle={() => setUcfExpanded(e => !e)}
            />

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
