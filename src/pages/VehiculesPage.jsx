import { useState } from 'react'
import { VEHICULES, MARQUES, CATEGORIES } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './VehiculesPage.module.css'

function R({ className, children, delay=0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className||''}`}>{children}</div>
}

export default function VehiculesPage() {
  const [marque, setMarque] = useState('')
  const [categorie, setCategorie] = useState('')
  const filtered = VEHICULES.filter(v =>
    (!marque || v.marque === marque) &&
    (!categorie || true)
  )

  return (
    <>
      <div className="page-banner"><div className="container">
        <p className="section-label">Notre stock</p>
        <h1>Nos <span>Véhicules</span></h1>
        <p>Retrouvez tous nos véhicules d'occasion disponibles à Saint-Pierre-du-Mont.</p>
      </div></div>

      <section className="section"><div className="container">
        <div className={s.filters}>
          <select value={marque} onChange={e=>setMarque(e.target.value)} className={s.select}>
            {MARQUES.map(m=><option key={m} value={m===MARQUES[0]?'':m}>{m}</option>)}
          </select>
          <select value={categorie} onChange={e=>setCategorie(e.target.value)} className={s.select}>
            {CATEGORIES.map(c=><option key={c} value={c===CATEGORIES[0]?'':c}>{c}</option>)}
          </select>
          <span className={s.count}>{filtered.length} véhicule{filtered.length>1?'s':''} trouvé{filtered.length>1?'s':''}</span>
        </div>

        <div className={s.grid}>
          {filtered.map((v,i) => (
            <R key={v.id} className={s.card} delay={i*60}>
              <div className={`${s.img} img-placeholder`}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h5l2 3v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                <span>Photo à ajouter</span>
              </div>
              <div className={s.body}>
                <div className={s.marque}>{v.marque} <span className={s.badge}>VO</span></div>
                <div className={s.modele}>{v.modele}</div>
                <div className={s.garantie}>{v.garantie}</div>
                <div className={s.meta}>
                  <span>{v.annee}</span>
                  <span>{v.km.toLocaleString('fr-FR')} km</span>
                  <span>{v.carburant}</span>
                  <span>{v.boite}</span>
                </div>
                <div className={s.prix}>
                  <span className={s.prixNum}>{v.prix.toLocaleString('fr-FR')} € <small>ttc</small></span>
                  <span className={s.prixMens}>dès <strong>{v.mensualite} €/mois</strong></span>
                </div>
                <button className="btn btn-primary btn-sm" style={{width:'100%',justifyContent:'center',marginTop:12}}>Voir le véhicule</button>
              </div>
            </R>
          ))}
        </div>
      </div></section>
    </>
  )
}
