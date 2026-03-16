import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VEHICULES, SERVICES, AVIS, ACTUALITES, PARTENAIRES, INFOS, MARQUES, CATEGORIES } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Home.module.css'

function R({ className, children, delay = 0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className || ''}`}>{children}</div>
}

/* ── HERO ── */
function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroBg} />
      <div className={s.heroOverlay} />
      <div className={`container ${s.heroContent}`}>
        <p className={s.heroPre}>Garage Toutes Marques — Saint-Pierre-du-Mont</p>
        <h1 className={s.heroTitle}>
          Bienvenue au<br />
          <span>Garage Mon Auto Aquitaine</span>
        </h1>
        <p className={s.heroSub}>
          Entretien, réparation et services auto de qualité dans les Landes.<br />
          Votre garage de confiance, indépendant toutes marques.
        </p>
        <Link to="/services" className={`btn btn-primary btn-lg ${s.heroCta}`}>
          Découvrir
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        </Link>
      </div>
      <div className={s.heroCitroen}>
        <div className={s.heroCitroenImg}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h5l2 3v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
      </div>
    </section>
  )
}

/* ── SEARCH BAR ── */
function SearchBar() {
  const [marque, setMarque] = useState('')
  const [modele, setModele] = useState('')
  const [categorie, setCategorie] = useState('')

  return (
    <div className={s.searchWrap}>
      <div className={`container ${s.searchInner}`}>
        <div className={s.searchFields}>
          <select className={s.searchSelect} value={marque} onChange={e => setMarque(e.target.value)}>
            <option value="">Marque</option>
            {MARQUES.slice(1).map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <input className={s.searchInput} placeholder="Modèle" value={modele} onChange={e => setModele(e.target.value)} />
          <select className={s.searchSelect} value={categorie} onChange={e => setCategorie(e.target.value)}>
            <option value="">Catégorie</option>
            {CATEGORIES.slice(1).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button className={`btn btn-primary ${s.searchBtn}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Rechercher
          </button>
          <Link to="/vehicules" className={`btn btn-outline ${s.searchEstimer}`}>
            Je vends mon véhicule →
          </Link>
        </div>
        <div className={s.searchFilters}>
          {['Petits prix','Bons kilométrages','Hybrides & Électriques','Récents','Voir tous les véhicules →'].map(f => (
            <Link to="/vehicules" key={f} className={s.searchFilter}>{f}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── VEHICULES CAROUSEL ── */
function Vehicules() {
  const [start, setStart] = useState(0)
  const visible = 4

  const prev = () => setStart(s => Math.max(0, s - 1))
  const next = () => setStart(s => Math.min(VEHICULES.length - visible, s + 1))

  return (
    <section className={`section ${s.vehicules}`}>
      <div className="container">
        <R className={s.vehiculesHeader}>
          <h2 className={`section-title ${s.vehiculesTitle}`}>
            Découvrez notre stock de véhicules à {INFOS.ville}
          </h2>
          <p className="section-sub">
            Vous souhaitez <strong>acheter</strong> une voiture ? Nous avons peut-être sur notre parc le véhicule qu'il vous faut !
          </p>
        </R>

        <div className={s.carousel}>
          <button className={`${s.carouselArrow} ${s.carouselPrev}`} onClick={prev} disabled={start === 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className={s.carouselTrack}>
            {VEHICULES.slice(start, start + visible).map((v, i) => (
              <R key={v.id} className={s.vCard} delay={i * 80}>
                <div className={`${s.vImg} img-placeholder`}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h5l2 3v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  <span>Photo à ajouter</span>
                </div>
                <div className={s.vBody}>
                  <div className={s.vMarque}>{v.marque} <span className={s.vBadge}>VO</span></div>
                  <div className={s.vModele}>{v.modele}</div>
                  <div className={s.vGarantie}>{v.garantie}</div>
                  <div className={s.vMeta}>
                    <span className={s.vMetaItem}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {v.annee}
                    </span>
                    <span className={s.vMetaItem}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                      {v.km.toLocaleString('fr-FR')} km
                    </span>
                    <span className={s.vMetaItem}>{v.carburant}</span>
                    <span className={s.vMetaItem}>{v.boite}</span>
                  </div>
                  <div className={s.vPrix}>
                    <div className={s.vPrixMain}>
                      <span className={s.vPrixNum}>{v.prix.toLocaleString('fr-FR')} €</span>
                      <span className={s.vPrixTtc}>ttc</span>
                    </div>
                    <div className={s.vPrixMens}>dès <strong>{v.mensualite} € / mois</strong></div>
                  </div>
                </div>
              </R>
            ))}
          </div>

          <button className={`${s.carouselArrow} ${s.carouselNext}`} onClick={next} disabled={start >= VEHICULES.length - visible}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className={s.vehiculesCta}>
          <Link to="/vehicules" className="btn btn-outline">
            Découvrir le stock complet →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES ── */
function Services() {
  const displayed = SERVICES.slice(0, 4)
  return (
    <section className={`section ${s.services}`}>
      <div className="container">
        <R className={s.servicesHeader}>
          <p style={{fontSize:13,color:'var(--muted)',fontStyle:'italic',marginBottom:8}}>Entretien, réparation, mécanique...</p>
          <h2 className="section-title">Découvrez les services que nous proposons au Garage <strong>MON AUTO AQUITAINE</strong> !</h2>
        </R>
        <div className={s.servicesGrid}>
          {displayed.map((sv, i) => (
            <R key={sv.id} className={s.sCard} delay={i * 100}>
              <div className={`${s.sImg} img-placeholder`}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                  <SvgIcon name={sv.icon} />
                </svg>
              </div>
              <div className={s.sName}>{sv.nom.toUpperCase()}</div>
            </R>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:32}}>
          <Link to="/services" className="btn btn-outline">
            Voir tous nos services →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── APROPOS ── */
function Apropos() {
  return (
    <section className={`section ${s.apropos}`}>
      <div className="container">
        <div className={s.aproposGrid}>
          <R className={s.aproposLeft}>
            <p className="section-label">À PROPOS</p>
            <h2 className={s.aproposTitle}>
              Découvrez <em>qui nous sommes</em>
            </h2>
            <div className={s.aproposTexte}>
              <p><strong>Réparateur indépendant agréé</strong></p>
              <p>Fort de notre passion pour l'automobile, nous vous accompagnons dans l'achat, la vente et la reprise de votre voiture. Profitez d'un service rapide, professionnel et parfaitement adapté à vos besoins. Découvrez dès maintenant toutes nos offres et solutions personnalisées !</p>
              <p>Nous proposons l'entretien de tous les types de véhicules légers, peu importe la marque. Nous pouvons faire la révision et l'entretien de vos véhicules.</p>
              <p>Notre atelier est équipé des dernières technologies et prend en charge le diagnostic, l'entretien et la réparation de votre véhicule.</p>
              <p>Nous offrons un <strong>service de dépannage 24h/24 et 7 jours sur 7</strong>. Nous proposons le prêt d'un véhicule de courtoisie en attendant que le vôtre soit prêt.</p>
              <p>Le garage <strong>Mon Auto Aquitaine</strong> vous donne des conseils personnalisés et vous assure une qualité bien par ça au meilleur prix. N'hésitez pas à nous contacter pour découvrir notre gamme et adapter le modèle de votre choix pour tous vos besoins de déplacements.</p>
            </div>
            <div className={s.aproposBtns}>
              <Link to="/contact" className="btn btn-primary btn-sm">Contactez nous</Link>
              <Link to="/avis" className="btn btn-outline btn-sm">Voir nos avis →</Link>
            </div>
          </R>

          <R className={s.aproposRight} delay={150}>
            <div className={`${s.aproposImg} img-placeholder`}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              <span style={{fontSize:11,color:'rgba(255,255,255,0.3)',textTransform:'uppercase',letterSpacing:2}}>Photo du garage</span>
            </div>
            {/* Avis Google */}
            <div className={s.avisBox}>
              <div className={s.avisStars}>★★★★★</div>
              <p className={s.avisText}>
                "{AVIS[0].texte}"
              </p>
              <div className={s.avisAuthor}>
                <div className={s.avisAvatar}>{AVIS[0].initiale}</div>
                <div>
                  <div className={s.avisName}>{AVIS[0].nom}</div>
                  <div className={s.avisDate}>{AVIS[0].date}</div>
                </div>
              </div>
            </div>
          </R>
        </div>
      </div>
    </section>
  )
}

/* ── ACTUALITES ── */
function Actualites() {
  const [start, setStart] = useState(0)

  return (
    <section className={`section ${s.actus}`}>
      <div className="container">
        <R className={s.actusHeader}>
          <p className="section-label">ACTUALITÉS</p>
          <h2 className="section-title">Retrouvez nos dernières <em>actualités</em> du moment !</h2>
        </R>
        <div className={s.actusCarousel}>
          <button className={`${s.actusArrow} ${s.actusLeft}`} onClick={() => setStart(s => Math.max(0, s - 1))} disabled={start === 0}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className={s.actusGrid}>
            {ACTUALITES.slice(start, start + 3).map((a, i) => (
              <R key={a.id} className={s.actuCard} delay={i * 100}>
                <div className={`${s.actuImg} img-placeholder`}>
                  <span style={{fontSize:11,color:'rgba(255,255,255,0.25)',textTransform:'uppercase',letterSpacing:2,textAlign:'center',padding:'0 16px'}}>Photo article</span>
                </div>
                <div className={s.actuBody}>
                  <div className={s.actuMeta}>
                    <span className={s.actuTag}>{a.tag}</span>
                    <span className={s.actuDate}>{a.date}</span>
                  </div>
                  <h3 className={s.actuTitre}>{a.titre}</h3>
                  <p className={s.actuExtrait}>{a.extrait}</p>
                  <Link to={`/actualites/${a.slug}`} className={s.actuLink}>→</Link>
                </div>
              </R>
            ))}
          </div>
          <button className={`${s.actusArrow} ${s.actusRight}`} onClick={() => setStart(s => Math.min(ACTUALITES.length - 3, s + 1))} disabled={start >= ACTUALITES.length - 3}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
        <div style={{textAlign:'center',marginTop:32}}>
          <Link to="/actualites" className="btn btn-outline">Voir toute l'actualité →</Link>
        </div>
      </div>
    </section>
  )
}

/* ── PARTENAIRES ── */
function Partenaires() {
  return (
    <section className={s.partenaires}>
      <div className="container">
        <R>
          <p className={s.partenairesPre}>
            Nous sommes heureux de vous présenter notre nouveau site internet.<br />
            À l'occasion pour toutes commande, de la semaine bénéficier des frais de mise à la route offert.
          </p>
        </R>
        <div className={s.partenairesGrid}>
          {PARTENAIRES.map(p => (
            <R key={p.nom} className={s.partenaireCard} style={{background: p.bg}}>
              <div className={s.partenaireNom} style={{color: p.color}}>{p.nom}</div>
              <div className={s.partenaireLabel} style={{color: p.color === '#fff' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'}}>{p.label.toUpperCase()}</div>
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA BAND ── */
function CtaBand() {
  return (
    <section className={s.ctaBand}>
      <div className="container">
        <R className={s.ctaBandInner}>
          <h2 className={s.ctaBandTitle}>VOUS SOUHAITEZ AVOIR PLUS DE RENSEIGNEMENTS ?</h2>
          <p className={s.ctaBandSub}>Contactez notre équipe au {INFOS.tel}</p>
          <Link to="/contact" className="btn btn-white btn-lg">Formulaire de contact</Link>
        </R>
      </div>
    </section>
  )
}

/* ── HOME ── */
export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Vehicules />
      <Services />
      <Apropos />
      <Actualites />
      <Partenaires />
      <CtaBand />
    </>
  )
}

function SvgIcon({ name }) {
  const paths = {
    shield:  <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
    wrench:  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>,
    package: <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></>,
    circle:  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></>,
    scan:    <><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><line x1="3" y1="12" x2="21" y2="12"/></>,
    wind:    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>,
    truck:   <><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h5l2 3v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    car:     <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-4 12H9m3 0v-8m0 0h8a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2z"/>,
  }
  return paths[name] || null
}
