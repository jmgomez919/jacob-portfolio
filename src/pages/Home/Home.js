import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  pageVariants, fadeUp, staggerContainer,
  slideInLeft, slideInRight, viewportOnce,
} from '../../utils/animations';
import './Home.css';

const services = [
  { icon: '🎬', title: 'Film & Posters',  desc: 'Movie poster design and BTS photography for student and indie productions.' },
  { icon: '🎨', title: 'Graphic Design',  desc: 'Logos, brand identities, and print materials since 2015.' },
  { icon: '📷', title: 'Photography',     desc: 'Portraits, events, and behind-the-scenes production coverage.' },
  { icon: '📣', title: 'Marketing',       desc: 'Social media content creation and campaign management for Volunteer UCF.' },
  { icon: '📱', title: 'App Concepts',    desc: 'UX/UI design and prototyping in Figma for mobile applications.' },
  { icon: '🌐', title: 'Web Design',      desc: 'WordPress and HTML/CSS sites for clients and personal projects.' },
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
            {services.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                className="home__service-card"
                variants={fadeUp}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
              >
                <span className="home__service-icon">{icon}</span>
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
