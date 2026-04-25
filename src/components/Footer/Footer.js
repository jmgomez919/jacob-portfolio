import './Footer.css';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: '📸' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: '💼' },
  { label: 'Email', href: 'mailto:j.mgomez919@gmail.com', icon: '✉️' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            src="/images/logo-light.png"
            alt="JG919 logo"
            className="footer__logo-img"
          />
          <p className="footer__tagline">Jacob Gomez — Digital Portfolio</p>
        </div>

        <nav className="footer__social" aria-label="Social links">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="footer__social-link"
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
            >
              <span aria-hidden="true">{icon}</span> {label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          &copy; {year} Jacob Gomez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
