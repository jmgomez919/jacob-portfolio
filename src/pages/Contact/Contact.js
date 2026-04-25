import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  pageVariants, fadeUp, staggerContainer,
  slideInLeft, slideInRight, viewportOnce,
} from '../../utils/animations';
import './Contact.css';

const contactDetails = [
  { icon: '✉️', label: 'Email',      value: 'j.mgomez919@gmail.com',        href: 'mailto:j.mgomez919@gmail.com' },
  { icon: '📍', label: 'Location',   value: 'Orlando, FL',                  href: null },
  { icon: '🎓', label: 'University', value: 'University of Central Florida', href: null },
];

const socialLinks = [
  { img: '/images/instagram-beige-on-blue.jpg', platform: 'Instagram',      handle: '@yourhandle',               href: 'https://www.instagram.com/' },
  { img: '/images/linkedin-beige-on-blue.jpg',  platform: 'LinkedIn',       handle: 'Jacob Gomez',               href: 'https://www.linkedin.com/' },
  { img: '/images/internet-beige-on-blue.jpg',  platform: 'Portfolio Site', handle: 'capacityinfrastructure.com', href: 'https://capacityinfrastructure.com/' },
];

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange  = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit  = e => { e.preventDefault(); setSubmitted(true); };
  const handleReset   = () => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); };

  return (
    <motion.div className="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Header ── */}
      <section className="contact__header">
        <motion.div
          className="contact__header-inner"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="contact__eyebrow">Let's Connect</p>
          <h1 className="contact__title">Contact</h1>
        </motion.div>
      </section>

      <section className="contact__body">
        <div className="contact__body-inner">

          {/* ── Info column ── */}
          <motion.div
            className="contact__info"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="contact__info-heading">Get In Touch</h2>
            <p className="contact__info-text">
              I'm always open to new opportunities, collaborations, and creative challenges.
              Whether you have a project in mind or just want to connect, feel free to reach
              out — I'd love to hear from you.
            </p>

            <motion.div
              className="contact__details"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {contactDetails.map(({ icon, label, value, href }) => (
                <motion.div key={label} className="contact__detail" variants={fadeUp}>
                  <span className="contact__detail-icon">{icon}</span>
                  <div>
                    <p className="contact__detail-label">{label}</p>
                    {href
                      ? <a href={href} className="contact__detail-value contact__detail-link">{value}</a>
                      : <p className="contact__detail-value">{value}</p>
                    }
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="contact__social">
              <h3 className="contact__social-heading">Find Me Online</h3>
              {socialLinks.map(({ img, platform, handle, href }) => (
                <motion.a
                  key={platform}
                  href={href}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                  <img src={img} alt="" className="contact__social-icon" aria-hidden="true" />
                  <div>
                    <p className="contact__social-platform">{platform}</p>
                    <p className="contact__social-handle">{handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            className="contact__form-wrap"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {submitted ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
              >
                <motion.span
                  className="contact__success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 280, damping: 18 }}
                >
                  ✓
                </motion.span>
                <h2>Message Sent!</h2>
                <p>Thanks for reaching out, {form.name}. I'll get back to you soon.</p>
                <button className="btn btn--outline contact__reset-btn" onClick={handleReset}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h2 className="contact__form-heading">Send a Message</h2>

                <div className="contact__field-row">
                  <div className="contact__field">
                    <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
                    <input id="name" name="name" type="text" value={form.name}
                      onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                    <input id="email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                  <input id="subject" name="subject" type="text" value={form.subject}
                    onChange={handleChange} placeholder="What's this about?" required />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea id="message" name="message" value={form.message}
                    onChange={handleChange} placeholder="Tell me about your project or inquiry..."
                    rows={6} required />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn--primary contact__submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                  Send Message →
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
