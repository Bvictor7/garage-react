import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES, AVIS, ACTUALITES, PARTENAIRES, INFOS } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Home.module.css'

function R({ className, children, delay = 0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className || ''}`}>{children}</div>
}

function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroBg} />
      <div className={s.heroOverlay} />
      <div className={`container ${s.heroContent}`}>
        <p className={s.heroPre}>Garage Multi-marques — {INFOS.ville}</p>
        <h1 className={s.heroTitle}>
          Bienvenue au<br />
          <span>Garage Mon Auto Aquitaine</span>
        </h1>
        <p className={s.heroSub}>
          Entretien, réparation et diagnostic auto de qualité dans les Landes.<br />
          Votre garage de confiance, indépendant toutes marques.
        </p>
        <Link to="/contact" className={`btn btn-primary btn-lg ${s.heroCta}`}>
          Prendre rendez-vous
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        </Link>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className={`section ${s.services}`}>
      <div className="container">
        <R className={s.servicesHeader}>
          <h2 className="section-title">Nos services <strong>MÉCANIQUE</strong></h2>
          <p className="section-sub">Entretien, réparation, diagnostic... nous prenons soin de votre véhicule.</p>
        </R>
        <div className={s.servicesGrid}>
          {SERVICES.slice(0, 4).map((sv, i) => (
            <R key={sv.id} className={s.sCard} delay={i * 100}>
               <div className={s.sImg}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <SvgIcon name={sv.icon} />
                </svg>
              </div>
              <div className={s.sName}>{sv.nom.toUpperCase()}</div>
            </R>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:32}}>
          <Link to="/services" className="btn btn-outline">Voir tous nos services →</Link>
        </div>
      </div>
    </section>
  )
}

function Apropos() {
  return (
    <section className={`section ${s.apropos}`}>
      <div className="container">
        <div className={s.aproposGrid}>
          <R className={s.aproposLeft}>
            <p className="section-label">À PROPOS</p>
            <h2 className={s.aproposTitle}>Découvrez <em>qui nous sommes</em></h2>
            <div className={s.aproposTexte}>
              <p><strong>Réparateur indépendant agréé</strong></p>
              <p>Situé à {INFOS.ville}, notre atelier est équipé des dernières technologies pour prendre en charge le diagnostic et l'entretien de votre véhicule.</p>
              <p>Nous offrons un service de dépannage et le prêt d'un véhicule de courtoisie.</p>
            </div>
            <div className={s.aproposBtns}>
              <Link to="/contact" className="btn btn-primary btn-sm">Contactez nous</Link>
            </div>
          </R>
          <R className={s.aproposRight} delay={150}>
            <div className={s.aproposImg}>
              <img src="/images/hero.png" alt="Garage" className={s.imgFull} />
            </div>
            <div className={s.avisBox}>
              <div className={s.avisStars}>★★★★★</div>
              <p className={s.avisText}>"{AVIS[0].texte}"</p>
              <div className={s.avisAuthor}>
                <div className={s.avisAvatar}>{AVIS[0].initiale}</div>
                <div><div className={s.avisName}>{AVIS[0].nom}</div></div>
              </div>
            </div>
          </R>
        </div>
      </div>
    </section>
  )
}

function Actualites() {
  return (
    <section className={`section ${s.actus}`}>
      <div className="container">
        <h2 className="section-title">Actualités</h2>
        <div className={s.actusGrid}>
          {ACTUALITES.slice(0, 3).map((a, i) => (
            <R key={a.id} className={s.actuCard} delay={i * 100}>
              <div className={s.actuBody}>
                <span className={s.actuTag}>{a.tag}</span>
                <h3 className={s.actuTitre}>{a.titre}</h3>
                <p className={s.actuExtrait}>{a.extrait}</p>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section className={s.ctaBand}>
      <div className="container">
        <div className={s.ctaBandInner}>
          <h2 className={s.ctaBandTitle}>BESOIN D'UN DEVIS ?</h2>
          <p className={s.ctaBandSub}>Appelez-nous au {INFOS.tel}</p>
          <Link to="/contact" className="btn btn-white btn-lg">Contact</Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Apropos />
      <Actualites />
      <CtaBand />
    </>
  )
}

function SvgIcon({ name }) {
  const paths = {
    wrench: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
    wind: <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>,
    car: <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-4 12H9m3 0v-8m0 0h8a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2z"/>,
  }
  return paths[name] || null
}