import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  pageVariants, fadeUp, staggerContainer,
  slideInLeft, viewportOnce,
} from '../../utils/animations';
import './Home.css';

// position: CSS object-position  e.g. '75% center', 'right top', '50% 30%'
// scale:    zoom multiplier       e.g. 1 = normal, 1.2 = 20% zoom in
// caption:  { title, text } shown bottom-right of the hero for this slide
const slideshowImages = [
  { src: '/images/home-slide-1.png', position: '90% center', scale: 1, caption: { title: 'Artemis II', text: 'Through timely circumstances, these launch photos I captured were sent and viewed by the Artemis astronauts en route to the Moon.' } },
  { src: '/images/home-slide-2.png', position: '90% center', scale: 1, caption: { title: 'Artemis II', text: 'Through timely circumstances, these launch photos I captured were sent and viewed by the Artemis astronauts en route to the Moon.' } },
  { src: '/images/home-slide-3.png', position: '90% center', scale: 1, caption: { title: 'Volunteer UCF', text: 'A large component to the increase in viewership and exposure to VUCF\'s mission was prominently highlighting volunteerism in action.' } },
  { src: '/images/home-slide-4.png', position: '90% center', scale: 1, caption: { title: 'Volunteer UCF', text: 'A large component to the increase in viewership and exposure to VUCF\'s mission was prominently highlighting volunteerism in action.' } },
  { src: '/images/home-slide-5.png', position: '90% center', scale: 1, caption: { title: 'Freedom250 in Nashville', text: 'Photos I took at a Nashville conference commemorating America250 were used by UCF YAF on their social media and promotional pieces.' } },
  { src: '/images/home-slide-6.png', position: '90% center', scale: 1, caption: { title: 'Freedom250 in Nashville', text: 'Photos I took at a Nashville conference commemorating America250 were used by UCF YAF on their social media and promotional pieces.' } },
  { src: '/images/home-slide-7.png', position: '90% center', scale: 1, caption: { title: 'UCF Club Activities', text: 'I played an integral part in increasing the media presence of UCF\'s Turning Point Chapter through my documentation of multiple meetings throughout the 2025-26 school year.' } },
  { src: '/images/home-slide-8.png', position: '90% center', scale: 1, caption: { title: 'UCF Club Activities', text: 'I played an integral part in increasing the media presence of UCF\'s Turning Point Chapter through my documentation of multiple meetings throughout the 2025-26 school year.' } },
];

function HeroSlideshow({ images, current }) {
  return (
    <div className="hero-slideshow" aria-hidden="true">
      {images.map(({ src, position, scale }, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`hero-slide${i === current ? ' hero-slide--active' : ''}`}
          style={{ objectPosition: position, transform: `scale(${scale})` }}
        />
      ))}
    </div>
  );
}

const services = [
  { img: '/images/what-i-do/graphic-design.png',   title: 'Graphic Design',    desc: 'Logos, brand identities, and print materials crafted since 2015.' },
  { img: '/images/what-i-do/photography.png',       title: 'Photography',       desc: 'Portraits, events, and behind-the-scenes production coverage.' },
  { img: '/images/what-i-do/photo-journalism.png',  title: 'Photo-Journalism',  desc: 'Documenting real moments and stories through compelling visual narratives.' },
  { img: '/images/what-i-do/web-design.png',        title: 'Web Design',        desc: 'WordPress and React sites built for clients and personal projects.' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(i => (i + 1) % slideshowImages.length), 8000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = panelOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [panelOpen]);

  const prevSlide = () => setCurrent(i => (i - 1 + slideshowImages.length) % slideshowImages.length);
  const nextSlide = () => setCurrent(i => (i + 1) % slideshowImages.length);

  return (
    <motion.div className="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="home__hero">
        <div className="hero-background">
          <HeroSlideshow images={slideshowImages} current={current} />
          <img src="/images/hero-overlay.png" alt="" className="hero-overlay" aria-hidden="true" />
        </div>

        <motion.div
          className="home__hero-content"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          <p className="home__hero-eyebrow">Digital Portfolio</p>
          <h1 className="home__hero-title">
            Jacob<br />
            <span className="home__hero-title--blue">Gomez</span>
          </h1>
          <p className="home__hero-tagline">
            Making content that is <em>seen</em>
          </p>

          <p className="home__hero-sub">
            I create media that holds a high standard of quality and consistency while capturing attention and connecting with a broad audience. 
            My background spans graphic design and photography across coursework, internships, and client work. That experience has shaped a skill set focused on 
            producing content that’s both visually compelling and built to be seen. Wherever my work shows up, I bring the same commitment to getting it right.

          </p>
          <div className="home__hero-cta">
            <Link to="/projects" className="btn btn--primary">View My Work</Link>
            <Link to="/contact"  className="btn btn--outline">Get in Touch</Link>
            <Link to="/about"    className="btn btn--outline home__hero-cta-full">Learn More About Me</Link>
          </div>
        </motion.div>

        {/* Prime Photos tab — mobile only */}
        <button
          className="hero-prime-tab"
          onClick={() => setPanelOpen(true)}
          aria-label="View Prime Photos slideshow"
        >
          <span>Prime Photos</span>
        </button>

      </section>

      {/* Prime Photos slide-in panel — mobile only */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div
              className="hero-prime-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setPanelOpen(false)}
            />
            <motion.div
              className="hero-prime-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              <button className="hero-prime-panel__close" onClick={() => setPanelOpen(false)} aria-label="Close">✕</button>

              <div className="hero-prime-panel__stage">
                <img
                  src={slideshowImages[current].src}
                  alt=""
                  className="hero-prime-panel__img"
                  style={{ objectPosition: slideshowImages[current].position }}
                />
                <button className="hero-prime-panel__nav hero-prime-panel__prev" onClick={prevSlide} aria-label="Previous">‹</button>
                <button className="hero-prime-panel__nav hero-prime-panel__next" onClick={nextSlide} aria-label="Next">›</button>
              </div>

              <div className="hero-prime-panel__counter">
                {current + 1} / {slideshowImages.length}
              </div>

              {slideshowImages[current].caption && (
                <div className="hero-prime-panel__caption">
                  <p className="hero-prime-panel__caption-title">{slideshowImages[current].caption.title}</p>
                  <p className="hero-prime-panel__caption-text">{slideshowImages[current].caption.text}</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── What I Do ── */}
      <section className="home__services">
        <div className="home__services-inner">
          <motion.h2
            className="section-heading section-heading--center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            What I Do
          </motion.h2>

          <motion.div
            className="home__services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {services.map(({ img, title, desc }) => (
              <motion.div
                key={title}
                className="home__service-card"
                variants={fadeUp}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
              >
                <div className="home__service-img-wrap">
                  <img src={img} alt={title} className="home__service-img" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="home__services-cta"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Link to="/projects" className="btn btn--primary">Browse All Projects</Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
