import { motion } from 'framer-motion';
import { pageVariants, fadeUp, viewportOnce } from '../../utils/animations';
import './Contact.css';

export default function Contact() {
  return (
    <motion.div className="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Page header ── */}
      <section className="contact__header">
        <motion.div
          className="contact__header-inner"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="contact__title">Contact</h1>
        </motion.div>
      </section>

      {/* ── Contact info ── */}
      <section className="contact__body container">
        <motion.div
          className="contact__card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="contact__intro">
            I'm always open to new opportunities, collaborations, and creative projects.
            <br />
            The best way to reach me is by email — I'd love to hear from you.
          </p>

          <div className="contact__details">
            <a href="tel:4079230535" className="contact__detail">
              <span className="contact__detail-label">Phone</span>
              <span className="contact__detail-value contact__detail-value--phone">407-923-0535</span>
            </a>
            <a href="mailto:j.mgomez919@gmail.com" className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <span className="contact__detail-value contact__detail-value--email">j.mgomez919@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}
