import { Link } from 'react-router-dom'
import { INFOS, SERVICES } from '../../data'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>

        {/* Logo + desc */}
        <div className={s.brand}>
          <div className={s.logo}>
            <div className={s.logoIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h5l2 3v3h-7z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div>
              <div className={s.logoMain}>Mon Auto Aquitaine</div>
              <div className={s.logoSub}>Garage Toutes Marques</div>
            </div>
          </div>
          <p className={s.brandDesc}>
            Garage indépendant toutes marques à {INFOS.ville}.<br />
            Entretien, réparation et services auto de qualité dans les Landes (40).
          </p>
          <div className={s.social}>
            <a href={INFOS.reseaux.facebook} target="_blank" rel="noreferrer" className={s.socialBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href={INFOS.reseaux.instagram} target="_blank" rel="noreferrer" className={s.socialBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href={INFOS.reseaux.google} target="_blank" rel="noreferrer" className={s.socialBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className={s.col}>
          <h4 className={s.colTitle}>Nos Services</h4>
          <ul>
            {SERVICES.map(sv => (
              <li key={sv.id}><Link to="/services">{sv.nom}</Link></li>
            ))}
          </ul>
        </div>

        {/* Horaires */}
        <div className={s.col}>
          <h4 className={s.colTitle}>Nos Horaires</h4>
          <ul className={s.horaires}>
            {INFOS.horaires.map(h => (
              <li key={h.jours} className={!h.ouvert ? s.ferme : ''}>
                <span className={s.jour}>{h.jours}</span>
                <span className={s.heures}>{h.heures}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={s.col}>
          <h4 className={s.colTitle}>Nous Contacter</h4>
          <div className={s.contactItems}>
            <div className={s.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{INFOS.adresse}<br />{INFOS.cp} {INFOS.ville}</span>
            </div>
            <div className={s.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href={`tel:${INFOS.telHref}`}>{INFOS.tel}</a>
            </div>
            <div className={s.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href={`mailto:${INFOS.email}`}>{INFOS.email}</a>
            </div>
          </div>
          <Link to="/contact" className={`btn btn-accent btn-sm ${s.contactBtn}`}>
            Formulaire de contact
          </Link>
        </div>
      </div>

      <div className={s.bottom}>
        <div className="container">
          <span>© 2026 {INFOS.nom} · Tous droits réservés · Fait par <strong>JAN TECH</strong></span>
          <span>
            <Link to="/mentions-legales">Mentions légales</Link>
            {' · '}
            <Link to="/confidentialite">Politique de confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
