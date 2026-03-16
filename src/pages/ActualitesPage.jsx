import { Link } from 'react-router-dom'
import { ACTUALITES } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './ActualitesPage.module.css'

function R({ className, children, delay=0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className||''}`}>{children}</div>
}

export default function ActualitesPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="section-label">Blog & Actualités</p>
          <h1>Nos <span>Actualités</span></h1>
          <p>Conseils, promotions et nouveautés du garage.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={s.grid}>
            {ACTUALITES.map((a, i) => (
              <R key={a.id} className={s.card} delay={i * 80}>
                <div className={`${s.img} img-placeholder`}>
                  <span className={s.imgHint}>Photo article</span>
                </div>
                <div className={s.body}>
                  <div className={s.meta}>
                    <span className={s.tag}>{a.tag}</span>
                    <span className={s.date}>{a.date}</span>
                  </div>
                  <h2 className={s.titre}>{a.titre}</h2>
                  <p className={s.extrait}>{a.extrait}</p>
                  <Link to={`/actualites/${a.slug}`} className="btn btn-outline btn-sm">
                    Lire la suite →
                  </Link>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
