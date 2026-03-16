import { Link } from 'react-router-dom'
import { SERVICES } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './ServicesPage.module.css'

function R({ className, children, delay=0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className||''}`}>{children}</div>
}

const ICONS = {
  shield:  <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
  wrench:  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>,
  package: <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></>,
  circle:  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></>,
  scan:    <><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><line x1="3" y1="12" x2="21" y2="12"/></>,
  wind:    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>,
  truck:   <><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h5l2 3v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
  car:     <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-4 12H9m3 0v-8m0 0h8a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2z"/>,
}

export default function ServicesPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="section-label">Ce qu'on fait</p>
          <h1>Nos <span>Services</span></h1>
          <p>Toutes les prestations auto disponibles chez Mon Auto Aquitaine.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={s.grid}>
            {SERVICES.map((sv, i) => (
              <R key={sv.id} className={s.card} delay={i * 70}>
                <div className={`${s.img} img-placeholder`}>
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
                    {ICONS[sv.icon]}
                  </svg>
                  <span className={s.imgLabel}>Photo à ajouter</span>
                </div>
                <div className={s.body}>
                  <div className={s.iconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {ICONS[sv.icon]}
                    </svg>
                  </div>
                  <h3 className={s.name}>{sv.nom}</h3>
                  <p className={s.desc}>{sv.desc}</p>
                  <p className={s.detail}>{sv.detail}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className="container">
          <R className={s.ctaInner}>
            <h2 className={s.ctaTitle}>Besoin d'un devis ou d'un renseignement ?</h2>
            <p className={s.ctaSub}>Contactez-nous, on vous répond rapidement et sans engagement.</p>
            <Link to="/contact" className="btn btn-white btn-lg">Nous contacter →</Link>
          </R>
        </div>
      </section>
    </>
  )
}
