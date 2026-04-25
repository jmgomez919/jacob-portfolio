import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact'  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
        <img
          src="/images/logo-light.png"
          alt="JG919 logo"
          className="navbar__logo-img"
        />
        <span className="navbar__name">@JAKUB_919</span>
      </NavLink>

      <button
        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
