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
    role: 'BTS / Graphic Design',
    director: 'Written & Directed by Mandy White',
    description:
      'Created using Photoshop for a hand-drawn aesthetic. Blender was used to render lighting effects so all characters and scenery were properly illuminated.',
    tools: ['Photoshop', 'Blender'],
    img: '/images/poster-binos.jpg',
  },
  {
    id: 'chimera',
    title: 'Chimera',
    role: 'BTS / Graphic Design',
    director: 'Written & Directed by Mandy White',
    description:
      'Used Photoshop to apply a stylized gradient color palette to the film credit components over a raw photo, creating a marketing aesthetic that reflects the tone of the short film.',
    tools: ['Photoshop'],
    img: '/images/poster-chimera.jpg',
  },
  {
    id: 'television-tension',
    title: 'Television Tension',
    role: 'Graphic Design',
    director: 'Starring Troy Thomas & Caelan Mandigo',
    description:
      'Using Blender, arranged a stack of vintage CRT-TV models and rendered film screenshots onto their screens, layering the frames into a single composition that visually echoes the story\'s theme of scattered, overlapping perspectives.',
    tools: ['Blender'],
    img: '/images/poster-television-tension.jpg',
  },
  {
    id: 'call-me-up',
    title: 'Call Me Up (Thru Tha Grapevine)',
    role: 'Graphic Design',
    director: 'Directed by Mandy White',
    description:
      'Starting with a raw cast photo, used Adobe Illustrator to individually trace each cast member\'s silhouette — arms, faces, clothing, jewelry, and hair — to achieve the blocky, pop-style aesthetic the director envisioned for her music video.',
    tools: ['Illustrator'],
    img: '/images/poster-call-me-up.jpg',
  },
];

const logos = [
  {
    id: 'highground',
    title: 'HighGround Commercial Investments',
    tools: ['Photoshop'],
    img: '/images/logo-highground.png',
  },
  {
    id: 'mandywhitefilmz',
    title: 'Mandy.W.Filmz',
    tools: ['Blender', 'Premiere Pro'],
    img: '/images/logo-mandywhitefilmz.png',
  },
];

const animations = [
  {
    id: 'mandywhitefilmz',
    title: 'Mandy.W.Filmz',
    tools: ['Blender', 'Premiere Pro'],
    video: '/videos/mandywhitefilmz-animation.mp4',
  },
  {
    id: 'highground',
    title: 'HIGHGROUND',
    tools: ['Premiere Pro', 'After Effects'],
    video: '/videos/highground-animation.mp4',
  },
];

const instagramPosts = [
  { id: 1, href: 'https://www.instagram.com/p/DVmGUZkDqSr/', label: 'Yoga Fest'                 },
  { id: 2, href: 'https://www.instagram.com/p/DVjQ5WkDhYF/', label: 'Perch Pavillion'            },
  { id: 3, href: 'https://www.instagram.com/p/DUCDHLqjeiL/', label: 'ACEing Autism'              },
  { id: 4, href: 'https://www.instagram.com/p/DPg9Vg1jXE_/', label: 'Adopt-A-Road'                },
  { id: 5, href: 'https://www.instagram.com/p/DSGeUBBDeqJ/', label: 'Protecting The Environment' },
  { id: 6, href: 'https://www.instagram.com/p/DP3zKeLjvCG/', label: 'Trunk Or Treat'              },
  { id: 7, href: 'https://www.instagram.com/p/DQZU3jSjjJu/', label: 'Knights Give Back 2025'       },
  { id: 8, href: 'https://www.instagram.com/p/DQsA9dXkRzq/', label: 'VUCF Committee Members'      },
];


const photoCollections = [
  {
    id: 'america-250',
    title: "AMERICA'S 250TH ANNIVERSARY",
    year: 2026,
    cover: '/images/photography/america-250-1.jpg',
    desc: 'On-the-ground photo-journalism from America\'s 250th Anniversary celebrations in New York City and Washington D.C. — documenting the pride, the crowds, and a reflection on two and a half centuries of American democracy.',
    photos: [
      '/images/photography/america-250-1.jpg',
      '/images/photography/america-250-2.jpg',
      '/images/photography/america-250-3.jpg',
      '/images/photography/america-250-4.jpg',
      '/images/photography/america-250-5.jpg',
      '/images/photography/america-250-6.jpg',
      '/images/photography/america-250-7.jpg',
      '/images/photography/america-250-8.jpg',
      '/images/photography/america-250-9.jpg',
    ],
    article: {
      title: '— PRIDE AND ADMIRATION —',
      date: 'July 4, 2026 — New York City & Washington D.C.',
      paragraphs: [
        '250 years ago, the founders of this nation made a collective decision, in the shadow of imperial oppression, to govern themselves and thus become the masters of their own destiny. A shared dream to forge a sanctuary for those escaping religious and political persecution. From their ambition began one of the greatest time-tested sociopolitical experiments in human history.',
        'The freedom of speech and expression of one’s ideas has been the cornerstone of our country for a quarter-millennia. That freedom has been tested in its expanse and limits in the quest to achieve a free and prosperous society. As a country that has grown more diverse than any other in the cultures and traditions of her citizens and immigrants, one value has remained paramount: to practice our beliefs in the spirit of peace, while preserving the freedoms of the individual. This singular value has been our most noble ambition.',
        'In the two and a half centuries of this grand experiment, the growth, exchange, and abundance of ideologies has left a lasting impact on the development of our country. While the ideas of progress have profoundly shaped our country and made us stronger and more united, it is the ideas that divide us that have truly tested our ways of life. Although there are beliefs that are repudiated and challenged by our free society, it is their silence that has proven to breed more volatility than the ideas themselves.',
        'Daryl Davis, an activist who has reformed several hundred KKK members through the power of dialogue, once said “When two enemies are talking, they’re not fighting. It’s when the talking ceases that the ground becomes fertile for violence”. While these ideas of hatred are rightfully condemned, their legal right to exist in discussion is what makes the United States a truly free country. Their protection and existence in debate is what drives intellect, exposes their moral bankruptcy, and therefore lessens their potential for violence, for we fear what we don\'t understand.',
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
      title: '—FEARLESS and TRIUMPHANT—',
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

function PosterCarousel({ onSelect }) {
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
              <PosterCard poster={poster} onClick={() => onSelect(poster)} />
            </div>
          ))}
        </div>

        <button className="poster-carousel__arrow" onClick={() => scroll(1)} aria-label="Next">›</button>
      </div>
    </motion.div>
  );
}

function PosterCard({ poster, onClick }) {
  return (
    <motion.article
      className="poster-card"
      variants={cardItem}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      onClick={onClick}
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

function LogoCard({ logo, onClick }) {
  return (
    <motion.article
      className="logo-card"
      variants={cardItem}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      onClick={onClick}
    >
      <div className="logo-card__img-wrap">
        <img
          src={logo.img}
          alt={`${logo.title} logo`}
          className="logo-card__img"
        />
      </div>

      <div className="logo-card__body">
        <h3 className="logo-card__title">{logo.title}</h3>
        <ul className="logo-card__tools">
          {logo.tools.map(t => <li key={t} className="logo-card__tool">{t}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}

function AnimationCard({ animation, onClick }) {
  return (
    <motion.article
      className="logo-card"
      variants={cardItem}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      onClick={onClick}
    >
      <div className="logo-card__img-wrap logo-card__img-wrap--video">
        <video
          className="logo-card__img"
          src={animation.video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="logo-card__body">
        <h3 className="logo-card__title">{animation.title}</h3>
        <ul className="logo-card__tools">
          {animation.tools.map(t => <li key={t} className="logo-card__tool">{t}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}

/* ── Expanded project overlay (posters, logos, animations) ─────────── */

function ProjectOverlay({ item, onClose }) {
  const { type, data } = item;
  const zoomable = type !== 'animation';
  const [zoomed, setZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%');
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(null);
  const dragRef = useRef({ startX: 0, startY: 0, startPanX: 0, startPanY: 0, moved: false });
  const mediaRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Trackpad two-finger panning — attached natively so preventDefault
  // reliably stops the modal from scrolling instead of the image panning.
  useEffect(() => {
    const el = mediaRef.current;
    if (!el || !zoomed) return;
    const onWheel = (e) => {
      e.preventDefault();
      setPan(p => ({ x: p.x - e.deltaX, y: p.y - e.deltaY }));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomed]);

  const handleMediaLoad = (e) => {
    const el = e.target;
    const w = el.naturalWidth || el.videoWidth;
    const h = el.naturalHeight || el.videoHeight;
    if (w && h) setAspectRatio(`${w} / ${h}`);
  };

  const handleMediaClick = (e) => {
    if (!zoomable) return;
    if (dragRef.current.moved) { dragRef.current.moved = false; return; }
    if (!zoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin(`${x}% ${y}%`);
    }
    setPan({ x: 0, y: 0 });
    setZoomed(z => !z);
  };

  const handlePointerDown = (e) => {
    if (!zoomable || !zoomed) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, startPanX: pan.x, startPanY: pan.y, moved: false };
    setDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragRef.current.moved = true;
    setPan({ x: dragRef.current.startPanX + dx, y: dragRef.current.startPanY + dy });
  };

  const handlePointerUp = (e) => {
    if (!dragging) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  return (
    <motion.div
      className="project-overlay-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="project-overlay-window"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="project-overlay-close" onClick={onClose} aria-label="Close">✕</button>

        <div
          className={`project-overlay-media${type === 'logo' ? ' project-overlay-media--logo' : ''}`}
          style={aspectRatio ? { aspectRatio } : undefined}
        >
          {type === 'animation' ? (
            <video
              className="project-overlay-media__el"
              src={data.video}
              autoPlay
              loop
              muted
              playsInline
              controls
              onLoadedMetadata={handleMediaLoad}
            />
          ) : (
            <img
              ref={mediaRef}
              className={`project-overlay-media__el project-overlay-media__el--zoomable${zoomed ? ' project-overlay-media__el--zoomed' : ''}${dragging ? ' project-overlay-media__el--dragging' : ''}`}
              src={data.img}
              alt={data.title}
              draggable={false}
              onLoad={handleMediaLoad}
              onClick={handleMediaClick}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={zoomed ? {
                transformOrigin: zoomOrigin,
                transform: `translate(${pan.x}px, ${pan.y}px) scale(2)`,
              } : undefined}
            />
          )}
        </div>

        <div className="project-overlay-body">
          {data.role && (
            <div className="project-overlay-row">
              <span className="project-overlay-role-badge">{data.role}</span>
            </div>
          )}
          <h3 className="project-overlay-title">{data.title}</h3>
          {data.director && <p className="project-overlay-director">{data.director}</p>}
          {data.description && <p className="project-overlay-desc">{data.description}</p>}
          {data.tools && (
            <ul className="project-overlay-tools">
              {data.tools.map(t => <li key={t} className="project-overlay-tool">{t}</li>)}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
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
              Marketing Director &amp; Graphic Design &nbsp;·&nbsp; 2025 - 2026 Acaemic Year
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
  const [overlayItem, setOverlayItem] = useState(null);

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
            Graphic designs, social media marketing, photography, and photojournalism — a curated selection of my work.
          </p>
        </motion.div>
      </section>

      {/* ── Graphic Design Projects ── */}
      <section className="proj-section proj-section--posters">
        <div className="proj-section__inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Graphic Design Projects
          </motion.h2>

          <motion.h3
            className="section-subheading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Film Posters
          </motion.h3>

          <PosterCarousel onSelect={(poster) => setOverlayItem({ type: 'poster', data: poster })} />

          <motion.h3
            className="section-subheading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Logos
          </motion.h3>

          <motion.div
            className="logo-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {logos.map(logo => (
              <LogoCard key={logo.id} logo={logo} onClick={() => setOverlayItem({ type: 'logo', data: logo })} />
            ))}
          </motion.div>

          <motion.h3
            className="section-subheading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Animations
          </motion.h3>

          <motion.div
            className="logo-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {animations.map(animation => (
              <AnimationCard key={animation.id} animation={animation} onClick={() => setOverlayItem({ type: 'animation', data: animation })} />
            ))}
          </motion.div>
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
                Across my tenure from Fall 2025 through Spring 2026, median viewership nearly doubled and the organization saw a noticeable increase in audience engagement and overall exposure, spreading the word of VUCF's mission.
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

    <AnimatePresence>
      {overlayItem && (
        <ProjectOverlay key="project-overlay" item={overlayItem} onClose={() => setOverlayItem(null)} />
      )}
    </AnimatePresence>
    </>
  );
}
