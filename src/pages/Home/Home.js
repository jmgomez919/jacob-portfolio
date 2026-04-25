import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  pageVariants, fadeUp, staggerContainer,
  slideInLeft, slideInRight, viewportOnce,
} from '../../utils/animations';
import './Home.css';

const highlights = [
  { img: '/images/movies-beige-on-blue.jpg',    label: 'Film',      count: '8+',   desc: 'Productions'  },
  { img: '/images/marketing-beige-on-blue.jpg', label: 'Marketing', count: '150+', desc: 'Curated Posts' },
  { img: '/images/camera-beige-on-blue.jpg',    label: 'Events',    count: '5',    desc: 'Photographed'  },
  { img: '/images/internet-beige-on-blue.jpg',  label: 'Websites',  count: '3',    desc: 'Published'     },
];

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

      {/* ── Stats strip ── */}
      <motion.section
        className="home__stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
      >
        {highlights.map(({ img, label, count, desc }, i) => (
          <motion.div
            key={label}
            className="home__stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <img src={img} alt="" className="home__stat-icon" aria-hidden="true" />
            <div>
              <strong className="home__stat-count">{count}</strong>
              <span className="home__stat-label">{label} {desc}</span>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* ── Welcome ── */}
      <section className="home__welcome container">
        <motion.div
          className="home__welcome-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="section-heading">Welcome</h2>
          <p>
            I am a graduate of the University of Central Florida, holding a Bachelor's degree
            in Digital Media, with several years of experience in photography, videography,
            graphic design, and other creative disciplines. From an early age, I developed a
            passion for drawing across a variety of mediums, which naturally evolved into a
            broader interest in visual storytelling. I enjoy capturing and documenting moments
            through photography, preserving experiences that can be reflected on for years to
            come. With an adventurous mindset, I'm always seeking new challenges and
            opportunities to grow creatively and professionally.
          </p>
          <Link to="/about" className="btn btn--primary home__welcome-btn">Learn More About Me</Link>
        </motion.div>

        <motion.div
          className="home__welcome-visual"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src="/images/profile.jpeg"
            alt="Jacob Gomez"
            className="home__profile-img"
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
