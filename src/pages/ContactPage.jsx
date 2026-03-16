import { useState } from 'react'
import { INFOS } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './ContactPage.module.css'

function R({ className, children, delay=0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className||''}`}>{children}</div>
}

export default function ContactPage() {
  const [form, setForm] = useState({prenom:'',nom:'',tel:'',email:'',sujet:'',message:''})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = e => setForm(f=>({...f,[e.target.name]:e.target.value}))

  const submit = e => {
    e.preventDefault()
    const errs = {}
    Object.entries(form).forEach(([k,v])=>{ if(!v.trim()) errs[k]=true })
    if(form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email=true
    setErrors(errs)
    if(Object.keys(errs).length) return
    setLoading(true)
    setTimeout(()=>{ setLoading(false); setSent(true) }, 1200)
  }

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="section-label">On est là</p>
          <h1>Nous <span>Contacter</span></h1>
          <p>Un devis, une question, un rendez-vous — on vous répond rapidement.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={s.grid}>

            {/* Infos */}
            <R className={s.infos}>
              {[
                {icon:'map',  label:'Adresse',  val:<>{INFOS.adresse}<br/>{INFOS.cp} {INFOS.ville}</>},
                {icon:'tel',  label:'Téléphone',val:<a href={`tel:${INFOS.telHref}`}>{INFOS.tel}</a>},
                {icon:'mail', label:'Email',    val:<a href={`mailto:${INFOS.email}`}>{INFOS.email}</a>},
              ].map(item=>(
                <div key={item.label} className={s.infoItem}>
                  <div className={s.infoIcon}>
                    {item.icon==='map' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                    {item.icon==='tel' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>}
                    {item.icon==='mail' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                  </div>
                  <div>
                    <div className={s.infoLabel}>{item.label}</div>
                    <div className={s.infoVal}>{item.val}</div>
                  </div>
                </div>
              ))}

              <div className={s.horaires}>
                <div className={s.horaireTitle}>Horaires d'ouverture</div>
                {INFOS.horaires.map(h=>(
                  <div key={h.jours} className={`${s.horaireRow} ${!h.ouvert?s.ferme:''}`}>
                    <span>{h.jours}</span><span>{h.heures}</span>
                  </div>
                ))}
              </div>

              <div className={s.mapWrap}>
                <iframe src={INFOS.mapsEmbed} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Carte" />
              </div>
            </R>

            {/* Form */}
            <R delay={120} className={s.formWrap}>
              <h3 className={s.formTitle}>Envoyez-nous un message</h3>
              {sent ? (
                <div className={s.success}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <h4>Message envoyé !</h4>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label>Prénom *</label>
                      <input name="prenom" value={form.prenom} onChange={set} placeholder="Jean" className={errors.prenom?s.err:''} />
                    </div>
                    <div className={s.field}>
                      <label>Nom *</label>
                      <input name="nom" value={form.nom} onChange={set} placeholder="Dupont" className={errors.nom?s.err:''} />
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label>Téléphone *</label>
                      <input name="tel" type="tel" value={form.tel} onChange={set} placeholder="06 00 00 00 00" className={errors.tel?s.err:''} />
                    </div>
                    <div className={s.field}>
                      <label>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={set} placeholder="jean@email.com" className={errors.email?s.err:''} />
                    </div>
                  </div>
                  <div className={s.field}>
                    <label>Sujet *</label>
                    <select name="sujet" value={form.sujet} onChange={set} className={errors.sujet?s.err:''}>
                      <option value="">-- Sélectionnez --</option>
                      <option>Demande de devis</option>
                      <option>Prise de rendez-vous</option>
                      <option>Renseignement service</option>
                      <option>Dépannage urgent</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={set} placeholder="Décrivez votre demande..." rows={5} className={errors.message?s.err:''} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%',justifyContent:'center'}} disabled={loading}>
                    {loading ? 'Envoi en cours...' : (
                      <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Envoyer le message</>
                    )}
                  </button>
                </form>
              )}
            </R>
          </div>
        </div>
      </section>
    </>
  )
}
