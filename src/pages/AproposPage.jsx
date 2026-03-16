import { Link } from 'react-router-dom'
import { INFOS, AVIS } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './AproposPage.module.css'

function R({ className, children, delay=0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className||''}`}>{children}</div>
}

export default function AproposPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="section-label">Notre histoire</p>
          <h1>À <span>Propos</span></h1>
          <p>Découvrez qui nous sommes et ce qui nous anime.</p>
        </div>
      </div>

      {/* Présentation */}
      <section className="section">
        <div className="container">
          <div className={s.mainGrid}>
            <R>
              <div className={`${s.mainImg} img-placeholder`}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                <span className={s.imgHint}>Photo du garage à ajouter</span>
              </div>
            </R>
            <R delay={120} className={s.mainContent}>
              <p className="section-label">Garage indépendant toutes marques</p>
              <h2 className="section-title">Mon Auto <em style={{fontStyle:'italic',fontWeight:400,color:'var(--muted)'}}>Aquitaine</em></h2>
              <div className={s.paras}>
                <p>Ouvert en 2025 à {INFOS.ville} dans les Landes, Mon Auto Aquitaine est un garage indépendant toutes marques fondé avec une conviction simple : le service auto de qualité doit être accessible à tous, à des tarifs honnêtes.</p>
                <p>Libre de tout contrat constructeur, nous pouvons intervenir sur toutes les marques et tous les modèles. Chaque client est pris en charge personnellement, avec écoute et transparence.</p>
                <p>Notre mission : assurer l'entretien et la réparation de votre véhicule dans les meilleures conditions, avec des pièces de qualité et un savoir-faire reconnu.</p>
              </div>
              <div className={s.stats}>
                {[['2025','Année d\'ouverture'],['40','Département Landes'],['8','Services proposés'],['100%','Indépendant']].map(([n,l])=>(
                  <div key={l} className={s.stat}>
                    <div className={s.statNum}>{n}</div>
                    <div className={s.statLabel}>{l}</div>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className={`section ${s.valeursSection}`}>
        <div className="container">
          <R className="section-header" style={{marginBottom:40}}>
            <p className="section-label">Ce qui nous définit</p>
            <h2 className="section-title">Nos <em style={{fontStyle:'normal',fontWeight:300,color:'var(--muted)'}}>Valeurs</em></h2>
          </R>
          <div className={s.valeursGrid}>
            {[
              {num:'01', titre:'Indépendance', desc:"Aucun lien constructeur. On travaille sur toutes les marques, on choisit les meilleures pièces, on vous conseille sans conflit d'intérêt."},
              {num:'02', titre:'Transparence',  desc:"Devis clair avant chaque intervention. Aucune surprise à la facturation. On vous explique ce qu'on fait et pourquoi."},
              {num:'03', titre:'Proximité',     desc:"Un seul interlocuteur, une relation directe. On prend le temps de vous écouter et de comprendre vos besoins."},
              {num:'04', titre:'Qualité',       desc:"Pièces d'origine ou équivalentes, main d'œuvre soignée. On ne bâcle pas le travail, quelle que soit l'urgence."},
            ].map((v,i)=>(
              <R key={v.num} className={s.valeurCard} delay={i*80}>
                <div className={s.valeurNum}>{v.num}</div>
                <h3 className={s.valeurTitre}>{v.titre}</h3>
                <p className={s.valeurDesc}>{v.desc}</p>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="section">
        <div className="container">
          <div className={s.infoGrid}>
            <R>
              <p className="section-label">Nous trouver</p>
              <h2 className="section-title" style={{marginBottom:28}}>Infos <em style={{fontStyle:'normal',fontWeight:300,color:'var(--muted)'}}>Pratiques</em></h2>
              {[
                {icon:'map',  label:'Adresse',    val:<>{INFOS.adresse}<br/>{INFOS.cp} {INFOS.ville}</>},
                {icon:'tel',  label:'Téléphone',  val:<a href={`tel:${INFOS.telHref}`}>{INFOS.tel}</a>},
                {icon:'mail', label:'Email',      val:<a href={`mailto:${INFOS.email}`}>{INFOS.email}</a>},
              ].map(item=>(
                <div key={item.label} className={s.infoItem}>
                  <div className={s.infoIcon}>
                    {item.icon==='map'  && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                    {item.icon==='tel'  && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>}
                    {item.icon==='mail' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                  </div>
                  <div>
                    <div className={s.infoLabel}>{item.label}</div>
                    <div className={s.infoVal}>{item.val}</div>
                  </div>
                </div>
              ))}
              <div className={s.horaires}>
                <div className={s.infoLabel} style={{marginBottom:10}}>Horaires</div>
                {INFOS.horaires.map(h=>(
                  <div key={h.jours} className={`${s.horaireRow} ${!h.ouvert?s.ferme:''}`}>
                    <span>{h.jours}</span><span>{h.heures}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{marginTop:24}}>Nous contacter →</Link>
            </R>
            <R delay={120}>
              <div className={s.mapWrap}>
                <iframe src={INFOS.mapsEmbed} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Carte garage" />
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className={`section ${s.avisSection}`}>
        <div className="container">
          <R style={{marginBottom:40}}>
            <p className="section-label">Ce qu'ils disent</p>
            <h2 className="section-title" style={{color:'white'}}>Avis <em style={{fontStyle:'normal',fontWeight:300,color:'rgba(255,255,255,0.4)'}}>Clients</em></h2>
          </R>
          <div className={s.avisGrid}>
            {AVIS.map((a,i)=>(
              <R key={a.nom} className={s.avisCard} delay={i*80}>
                <div className={s.avisStars}>★★★★★</div>
                <p className={s.avisText}>"{a.texte}"</p>
                <div className={s.avisAuthor}>
                  <div className={s.avisAvatar}>{a.initiale}</div>
                  <div>
                    <div className={s.avisName}>{a.nom}</div>
                    <div className={s.avisDate}>{a.date}</div>
                  </div>
                </div>
              </R>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:36}}>
            <a href={INFOS.reseaux.google} target="_blank" rel="noreferrer" className="btn btn-outline" style={{color:'white',borderColor:'rgba(255,255,255,0.3)'}}>Voir tous nos avis Google →</a>
          </div>
        </div>
      </section>
    </>
  )
}
