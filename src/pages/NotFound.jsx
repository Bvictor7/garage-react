import { Link } from 'react-router-dom'
import s from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={s.wrap}>
      <div className={s.code}>404</div>
      <h1 className={s.title}>Page introuvable</h1>
      <p className={s.sub}>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn-primary btn-lg">← Retour à l'accueil</Link>
    </div>
  )
}
