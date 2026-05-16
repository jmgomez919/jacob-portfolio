import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  pageVariants, fadeUp, staggerContainer,
  slideInLeft, slideInRight, viewportOnce,
} from '../../utils/animations';
import './Home.css';

const services = [
  { img: '/images/what-i-do/graphic-design.png',   title: 'Graphic Design',    desc: 'Logos, brand identities, and print materials crafted since 2015.' },
  { img: '/images/what-i-do/photography.png',       title: 'Photography',       desc: 'Portraits, events, and behind-the-scenes production coverage.' },
  { img: '/images/what-i-do/photo-journalism.png',  title: 'Photo-Journalism',  desc: 'Documenting real moments and stories through compelling visual narratives.' },
  { img: '/images/what-i-do/web-design.png',        title: 'Web Design',        desc: 'WordPress and React sites built for clients and personal projects.' },
];

export default function Home() {
  return (
    <motion.div className="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <section className="home__hero">
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
            With dedication, I strive to create media that not only reflects a high standard
            of quality and consistency, but also captures attention and resonates with a wide
            and diverse audience. Through years of experience in graphic design, internships,
            and photography, I've developed a skill set focused on producing content that is
            both visually compelling and widely seen. Wherever my work is presented, I am
            committed to delivering impactful results that represent nothing short of my best effort!
          </p>
          <div className="home__hero-cta">
            <Link to="/projects" className="btn btn--primary">View My Work</Link>
            <Link to="/contact"  className="btn btn--outline">Get in Touch</Link>
            <Link to="/about"    className="btn btn--outline home__hero-cta-full">Learn More About Me</Link>
          </div>
        </motion.div>

        <motion.div
          className="home__hero-badge"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/images/logo-dark.png"
            alt="JG919 logo"
            className="home__hero-logo"
          />
        </motion.div>
      </section>

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
