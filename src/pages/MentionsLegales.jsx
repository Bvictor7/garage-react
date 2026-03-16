import { INFOS } from '../data'
import s from './Legal.module.css'

export default function MentionsLegales() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Mentions <span>Légales</span></h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className={s.content}>
            <h2>Éditeur du site</h2>
            <p><strong>{INFOS.nom}</strong><br/>
            {INFOS.adresse}<br/>
            {INFOS.cp} {INFOS.ville}<br/>
            Tél : {INFOS.tel}<br/>
            Email : {INFOS.email}</p>
            <h2>Hébergement</h2>
            <p>Ce site est hébergé par un prestataire d'hébergement web. Les coordonnées de l'hébergeur sont disponibles sur demande.</p>
            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de {INFOS.nom}, sauf mentions contraires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p>
            <h2>Responsabilité</h2>
            <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème aussi précisément que possible.</p>
            <h2>Données personnelles</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : {INFOS.email}</p>
          </div>
        </div>
      </section>
    </>
  )
}
