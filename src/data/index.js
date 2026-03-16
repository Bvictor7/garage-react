export const INFOS = {
  nom: 'Mon Auto Aquitaine',
  slogan: 'Garage Toutes Marques — Entretien & Réparation',
  adresse: '302 Av des Corps Franc Pommies',
  ville: 'Saint-Pierre-du-Mont',
  cp: '40280',
  tel: '09 56 55 51 44',
  telHref: '0956555144',
  email: 'monautoaquitaine@gmail.com',
  horaires: [
    { jours: 'Lundi',    heures: '9h00–12h00 / 14h00–18h00', ouvert: true },
    { jours: 'Mardi',    heures: '9h00–12h00 / 14h00–18h00', ouvert: true },
    { jours: 'Mercredi', heures: '9h00–12h00 / 14h00–18h00', ouvert: true },
    { jours: 'Jeudi',    heures: '9h00–12h00 / 14h00–18h00', ouvert: true },
    { jours: 'Vendredi', heures: '9h00–12h00 / 14h00–18h00', ouvert: true },
    { jours: 'Samedi',   heures: '9h00–12h00 / 14h00–18h00', ouvert: true },
    { jours: 'Dimanche', heures: 'Fermé',                     ouvert: false },
  ],
  reseaux: {
    facebook:  'https://www.facebook.com/p/Mon-Auto-Aquitaine-61582290135353/',
    instagram: 'https://www.instagram.com/auto.aquitaine/',
    google:    'https://share.google/GEudcOe55GGX8BVHi',
  },
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.0!2d-0.5073!3d43.8873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUzJzE0LjMiTiAwwrAzMCc0Ni4zIlc!5e0!3m2!1sfr!2sfr!4v1'
}

export const SERVICES = [
  { id:1, slug:'revision',   nom:'Révision & Entretien',       icon:'shield',    img:null, desc:"Vidange, filtres, bougies, courroies — toutes marques.",         detail:"Toutes les opérations de révision : vidange moteur, filtres, bougies, courroie de distribution. Nous veillons à ce que votre véhicule reste en parfait état de marche quelle que soit la marque." },
  { id:2, slug:'reparation', nom:'Réparation Toutes Marques',  icon:'wrench',    img:null, desc:"Diagnostic et réparation mécanique, toutes marques.",            detail:"Du diagnostic électronique à la réparation mécanique complète. Embrayage, freins, suspension, boîte de vitesses — nous intervenons sur tous types de pannes." },
  { id:3, slug:'pieces',     nom:'Vente de Pièces Détachées',  icon:'package',   img:null, desc:"Pièces d'origine et compatibles pour votre véhicule.",          detail:"Large stock de pièces d'origine et compatibles toutes marques. Commande rapide si la pièce n'est pas disponible immédiatement." },
  { id:4, slug:'pneus',      nom:'Vente de Pneumatiques',      icon:'circle',    img:null, desc:"Pneus été, hiver, toutes saisons. Montage & équilibrage.",       detail:"Large gamme de pneumatiques pour tous les budgets. Montage et équilibrage inclus. Conseils adaptés à votre usage." },
  { id:5, slug:'pare-brise', nom:'Remplacement Pare-Brise',    icon:'scan',      img:null, desc:"Remplacement rapide, prise en charge assurance possible.",      detail:"Remplacement rapide de tous vitrages. Accompagnement pour la prise en charge assurance." },
  { id:6, slug:'clim',       nom:'Climatisation',              icon:'wind',      img:null, desc:"Recharge, réparation et désinfection de climatisation.",        detail:"Recharge au gaz R134a ou R1234yf, détection de fuites, remplacement de composants, désinfection du circuit." },
  { id:7, slug:'depannage',  nom:'Dépannage & Remorquage',     icon:'truck',     img:null, desc:"Intervention rapide. Véhicule de courtoisie disponible.",       detail:"Intervention rapide en cas de panne. Remorquage jusqu'au garage. Véhicule de courtoisie le temps de la réparation." },
  { id:8, slug:'location',   nom:'Location de Véhicule',       icon:'car',       img:null, desc:"Véhicule de remplacement pendant la durée de réparation.",      detail:"Véhicule de prêt disponible pour ne pas vous retrouver sans transport. Sur réservation." },
]

export const VEHICULES = [
  { id:1, marque:'Citroën',  modele:'C3 Feel',        annee:2021, km:32000,  prix:12900, mensualite:235, carburant:'Essence', boite:'Manuelle',   couleur:'Blanc',  garantie:'Garantie Spoticar Premium 12 mois', img:null },
  { id:2, marque:'Peugeot',  modele:'208 Active',     annee:2020, km:41000,  prix:11400, mensualite:208, carburant:'Diesel',  boite:'Manuelle',   couleur:'Gris',   garantie:'Garantie Spoticar Essentiel 6 mois', img:null },
  { id:3, marque:'Renault',  modele:'Clio TCe 90',    annee:2022, km:18000,  prix:15900, mensualite:290, carburant:'Essence', boite:'Manuelle',   couleur:'Rouge',  garantie:'Garantie Spoticar Premium 12 mois', img:null },
  { id:4, marque:'Dacia',    modele:'Sandero Stepway',annee:2021, km:27000,  prix:13500, mensualite:247, carburant:'GPL',     boite:'Manuelle',   couleur:'Beige',  garantie:'Garantie Spoticar Essentiel 6 mois', img:null },
  { id:5, marque:'Citroën',  modele:'C5 Aircross',    annee:2020, km:55000,  prix:19900, mensualite:363, carburant:'Diesel',  boite:'Automatique',couleur:'Bleu',   garantie:'Garantie Spoticar Premium 12 mois', img:null },
  { id:6, marque:'Volkswagen',modele:'Golf 1.5 TSI',  annee:2021, km:38000,  prix:22500, mensualite:410, carburant:'Essence', boite:'Automatique',couleur:'Noir',   garantie:'Garantie Spoticar Premium 12 mois', img:null },
]

export const MARQUES = ['Toutes marques','Citroën','Peugeot','Renault','Dacia','Volkswagen','Ford','Toyota']
export const CATEGORIES = ['Toutes catégories','Citadine','Berline','SUV','Break','Utilitaire']

export const AVIS = [
  { initiale:'M', nom:'Marie L.',     date:'Il y a 2 semaines', note:5, texte:"Super garage, très professionnel et à l'écoute. Les délais ont été respectés et les prix sont honnêtes. Je recommande vivement !" },
  { initiale:'T', nom:'Thomas B.',    date:'Il y a 1 mois',     note:5, texte:"Excellent accueil, travail soigné. Mon véhicule rendu dans les délais, tout expliqué clairement. À recommander sans hésitation." },
  { initiale:'S', nom:'Sophie D.',    date:'Il y a 3 semaines', note:5, texte:"Prise en charge rapide, réparation efficace. Un garage de proximité comme on n'en trouve plus souvent !" },
  { initiale:'L', nom:'Laurent M.',   date:'Il y a 2 mois',     note:5, texte:"Très bon garage, Mohamed est disponible et de bon conseil. Prix corrects et travail rapide. Je n'irai plus ailleurs." },
  { initiale:'C', nom:'Christine V.', date:'Il y a 1 mois',     note:5, texte:"Révision faite rapidement avec un bon rapport qualité/prix. L'accueil est chaleureux, on sent les gens passionnés." },
  { initiale:'R', nom:'Romain P.',    date:'Il y a 3 mois',     note:5, texte:"Pneus changés en moins d'une heure, tarifs très compétitifs. Je reviendrai sans hésiter !" },
]

export const ACTUALITES = [
  { id:1, slug:'offre-revision-printemps', tag:'Promotion', titre:'Offre spéciale révision printemps', extrait:'Profitez de notre offre à prix réduit pour préparer votre véhicule à la belle saison.', contenu:["Avec l'arrivée du printemps, c'est le moment idéal pour faire le point sur l'état de votre véhicule après l'hiver.","Notre offre inclut : vidange moteur, vérification des niveaux, contrôle des freins et de la batterie.","Offre valable jusqu'à fin avril 2026. Appelez-nous pour prendre rendez-vous."], date:'15/03/2026', img:null },
  { id:2, slug:'garage-site-internet',     tag:'Site internet', titre:'Garage Mon Auto Aquitaine dévoile son nouveau site', extrait:'Nous sommes heureux de vous présenter notre nouveau site internet. Découvrez toutes nos offres en ligne.', contenu:["Nous avons le plaisir de vous annoncer la mise en ligne de notre nouveau site internet, plus moderne et plus pratique.","Retrouvez tous nos services, nos véhicules en stock et nos coordonnées facilement.","N'hésitez pas à nous contacter via le formulaire en ligne pour toute demande."], date:'10/03/2026', img:null },
  { id:3, slug:'ds3-performance',          tag:'Site internet', titre:'DS 3 1.2 130 AUTO PERFORMANCE LINE +', extrait:'Superbe DS3 essence 130 ch boîte auto 8 vitesses Performance Line. Prix : 26 900 €.', contenu:["Nouvelle arrivée dans notre stock : la DS 3 Crossback en version Performance Line +.","Motorisation essence 130 ch, boîte automatique 8 vitesses, finition haut de gamme.","Contactez-nous pour une essai ou pour plus d'informations."], date:'22/01/2026', img:null },
]

export const PARTENAIRES = [
  { nom:'Dangel', label:'Négociant automobile',  bg:'#e8e8e8', color:'#222' },
  { nom:'VO 3000', label:'Négociant automobile',  bg:'#1a1a1a', color:'#fff' },
  { nom:'Dispro', label:'Fournisseur officiel',   bg:'#003087', color:'#fff' },
  { nom:'Ucar',   label:'Location de voiture',    bg:'#FFD700', color:'#222' },
]
