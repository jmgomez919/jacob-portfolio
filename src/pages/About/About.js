import { motion } from 'framer-motion';
import skills from '../../data/skills';
import {
  pageVariants, fadeUp, staggerContainer,
  slideInLeft, slideInRight, scaleIn, viewportOnce,
} from '../../utils/animations';
import './About.css';

const interests = [
  { icon: '🎥', label: 'Filmmaking'   },
  { icon: '🎨', label: 'Illustration' },
  { icon: '📸', label: 'Photography'  },
  { icon: '🖥️', label: 'Web Dev'     },
  { icon: '🎭', label: 'Storytelling' },
  { icon: '🌎', label: 'Travel'       },
];

export default function About() {
  return (
    <motion.div className="about" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Page header ── */}
      <section className="about__header">
        <motion.div
          className="about__header-inner"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="about__eyebrow">Get to Know Me</p>
          <h1 className="about__title">About Me</h1>
        </motion.div>
      </section>

      {/* ── Bio ── */}
      <section className="about__bio container">
        <motion.div
          className="about__bio-photo"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src="/images/profile.jpeg"
            alt="Jacob Gomez"
            className="about__profile-img"
          />
        </motion.div>

        <motion.div
          className="about__bio-text"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="about__bio-name">Jacob M. Gomez</h2>
          <p className="about__bio-role">Digital Designer · Photographer · Film Collaborator</p>

          <p>
            I was born in New Jersey in 2000 and relocated to Florida in 2007, where I've
            continued to grow both personally and creatively. I have a strong interest in
            traveling, film analysis, video games, space exploration, and documenting
            meaningful moments with my family — I'm also the oldest of four siblings.
          </p>
          <p>
            I earned two Associate degrees in Digital Cinema and Television Production from
            Seminole State College in 2022, and later graduated from the University of Central
            Florida in 2026 with a Bachelor's degree in Digital Media, specializing in Web
            Development. During my time at UCF, I served as the Marketing Director for
            VolunteerUCF from August 2025 to May 2026, leading creative initiatives for one
            of the university's largest student organizations.
          </p>
          <p>
            I am driven by a desire to take on challenging projects that push me beyond my
            comfort zone, allowing me to continuously expand my skills and perspective. I
            value collaboration, enjoy helping others, and take pride in creating work that
            makes a meaningful and lasting impact.
          </p>

          <div className="about__quick-facts">
            {[
              { label: 'Education', value: 'University of Central Florida', href: null },
              { label: 'Location',  value: 'Orlando, FL',                  href: null },
              { label: 'Email',     value: 'j.mgomez919@gmail.com',        href: 'mailto:j.mgomez919@gmail.com' },
            ].map(({ label, value, href }) => (
              <div key={label} className="about__fact">
                <span className="about__fact-label">{label}</span>
                {href
                  ? <a href={href} className="about__fact-value about__fact-link">{value}</a>
                  : <span className="about__fact-value">{value}</span>
                }
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Skills ── */}
      <section className="about__skills">
        <div className="about__skills-inner">
          <motion.h2
            className="section-heading section-heading--center about__skills-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Skills &amp; Tools
          </motion.h2>

          <motion.div
            className="about__skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {skills.map(({ category, items }) => (
              <motion.div key={category} className="about__skill-group" variants={fadeUp}>
                <h3 className="about__skill-category">{category}</h3>
                <ul className="about__skill-list">
                  {items.map(item => (
                    <li key={item} className="about__skill-item">
                      <span className="about__skill-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Interests ── */}
      <section className="about__interests container">
        <motion.h2
          className="section-heading section-heading--center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Interests
        </motion.h2>

        <motion.div
          className="about__interests-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {interests.map(({ icon, label }) => (
            <motion.div
              key={label}
              className="about__interest"
              variants={scaleIn}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
            >
              <span>{icon}</span>
              <p>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </motion.div>
  );
}
