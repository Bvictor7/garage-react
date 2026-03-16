import { useParams, Link } from 'react-router-dom'
import { ACTUALITES } from '../data'
import s from './ArticlePage.module.css'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = ACTUALITES.find(a => a.slug === slug)

  if (!article) return (
    <div style={{paddingTop:120,textAlign:'center',minHeight:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:16}}>
      <h2 style={{fontFamily:'var(--font-title)',fontSize:32,fontWeight:800,textTransform:'uppercase'}}>Article introuvable</h2>
      <Link to="/actualites" className="btn btn-primary">← Retour aux actualités</Link>
    </div>
  )

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="section-label">{article.tag}</p>
          <h1>{article.titre}</h1>
          <p>{article.date}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={s.layout}>
            <article className={s.article}>
              <div className={`${s.img} img-placeholder`}>
                <span style={{fontSize:11,color:'rgba(255,255,255,0.3)',textTransform:'uppercase',letterSpacing:2}}>Photo article</span>
              </div>
              <div className={s.content}>
                <div className={s.meta}>
                  <span className={s.tag}>{article.tag}</span>
                  <span className={s.date}>{article.date}</span>
                </div>
                <h1 className={s.titre}>{article.titre}</h1>
                <p className={s.extrait}>{article.extrait}</p>
                <div className={s.body}>
                  {article.contenu.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </article>

            <aside className={s.aside}>
              <div className={s.asideBox}>
                <h3 className={s.asideTitle}>Autres actualités</h3>
                {ACTUALITES.filter(a => a.slug !== slug).map(a => (
                  <Link to={`/actualites/${a.slug}`} key={a.id} className={s.asideItem}>
                    <span className={s.asideItemTag}>{a.tag}</span>
                    <span className={s.asideItemTitre}>{a.titre}</span>
                    <span className={s.asideItemDate}>{a.date}</span>
                  </Link>
                ))}
              </div>
              <div className={s.asideBox}>
                <h3 className={s.asideTitle}>Nous contacter</h3>
                <p style={{fontSize:14,color:'#666',marginBottom:16}}>Une question ? On vous répond rapidement.</p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{width:'100%',justifyContent:'center'}}>Formulaire de contact</Link>
              </div>
            </aside>
          </div>

          <div style={{marginTop:32}}>
            <Link to="/actualites" className="btn btn-outline">← Retour aux actualités</Link>
          </div>
        </div>
      </section>
    </>
  )
}
