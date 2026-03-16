import { INFOS } from '../data'
import s from './Legal.module.css'

export default function Confidentialite() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Politique de <span>Confidentialité</span></h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className={s.content}>
            <h2>Collecte des données</h2>
            <p>Les données personnelles collectées via notre formulaire de contact (nom, prénom, email, téléphone) sont utilisées uniquement pour vous répondre à votre demande. Elles ne sont jamais cédées à des tiers.</p>
            <h2>Cookies</h2>
            <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilisé sans votre consentement.</p>
            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à : <strong>{INFOS.email}</strong></p>
            <h2>Contact DPO</h2>
            <p>Pour toute question relative à la protection de vos données, vous pouvez nous contacter à :<br/>
            {INFOS.adresse}, {INFOS.cp} {INFOS.ville}<br/>
            {INFOS.email}</p>
          </div>
        </div>
      </section>
    </>
  )
}
