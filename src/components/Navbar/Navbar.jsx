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
    { to: '/', label: 'Accueil' },
    { to: '/services', label: 'Nos services' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>
        <Link to="/" className={s.logo}>
          <div className={s.logoText}>
            <span className={s.logoMain}>Mon Auto</span>
            <span className={s.logoSub}>Aquitaine</span>
          </div>
        </Link>
        <div className={s.links}>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className={s.actions}>
          <Link to="/contact" className="btn btn-accent btn-sm">Prendre RDV</Link>
          <a href={`tel:${INFOS.telHref}`} className={s.phone}>{INFOS.tel}</a>
        </div>
      </div>
    </nav>
  )
}