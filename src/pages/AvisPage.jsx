import { AVIS, INFOS } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './AvisPage.module.css'

function R({ className, children, delay=0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className||''}`}>{children}</div>
}

export default function AvisPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="section-label">Ce qu'ils disent</p>
          <h1>Avis <span>Clients</span></h1>
          <p>Les témoignages de nos clients sur Google.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <R className={s.banner}>
            <div className={s.bannerNote}>5.0</div>
            <div className={s.bannerDivider} />
            <div>
              <div className={s.bannerStars}>★★★★★</div>
              <p className={s.bannerLabel}>Note Google</p>
              <a href={INFOS.reseaux.google} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" style={{marginTop:10}}>
                Voir sur Google Maps →
              </a>
            </div>
          </R>

          <div className={s.grid}>
            {AVIS.map((a, i) => (
              <R key={a.nom} className={s.card} delay={i * 70}>
                <div className={s.cardTop}>
                  <div className={s.avatar}>{a.initiale}</div>
                  <div>
                    <div className={s.name}>{a.nom}</div>
                    <div className={s.date}>{a.date}</div>
                  </div>
                  <div className={s.stars}>★★★★★</div>
                </div>
                <p className={s.text}>"{a.texte}"</p>
              </R>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
