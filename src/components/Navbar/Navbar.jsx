import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { INFOS } from '../../data'
import s from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navItems = [
    { to: '/',           label: 'Accueil' },
    { to: '/vehicules',  label: 'Véhicules', dropdown: true },
    { to: '/services',   label: 'Nos services', dropdown: true },
    { to: '/a-propos',   label: 'À propos', dropdown: true },
  ]

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>

        {/* Logo */}
        <Link to="/" className={s.logo}>
          <div className={s.logoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" rx="1"/>
              <path d="M16 8h5l2 3v3h-7z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <div className={s.logoText}>
            <span className={s.logoMain}>Mon Auto</span>
            <span className={s.logoSub}>Aquitaine</span>
          </div>
        </Link>

        {/* Nav links */}
        <div className={s.links}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
              end={item.to === '/'}
            >
              {item.label}
              {item.dropdown && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className={s.actions}>
          <Link to="/vehicules" className={`btn btn-accent btn-sm ${s.ctaBtn}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Estimer mon véhicule
          </Link>
          <a href={`tel:${INFOS.telHref}`} className={s.phone}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            {INFOS.tel}
          </a>
          <button className={s.hamburger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className={menuOpen ? s.open : ''} /><span className={menuOpen ? s.open : ''} /><span className={menuOpen ? s.open : ''} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${s.mobileMenu} ${menuOpen ? s.mobileOpen : ''}`}>
        {navItems.map(item => (
          <Link key={item.to} to={item.to} className={s.mobileLink} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link to="/contact" className={s.mobileLink} onClick={() => setMenuOpen(false)}>Contact</Link>
        <a href={`tel:${INFOS.telHref}`} className={`${s.mobileLink} ${s.mobileTel}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          {INFOS.tel}
        </a>
      </div>
    </nav>
  )
}
