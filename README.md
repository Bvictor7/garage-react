# Garage Mon Auto Aquitaine

Site vitrine React + Vite + React Router — garage toutes marques à Saint-Pierre-du-Mont (40).

## Stack
- **React 18** + **Vite 5**
- **React Router v6** (SPA, pas de rechargement)
- **CSS Modules** (styles scoped par composant)
- Zéro dépendance UI externe

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Build production

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── main.jsx                  # point d'entrée
├── App.jsx                   # routes
├── data/index.js             # tout le contenu (modifier ici)
├── styles/global.css         # variables CSS + styles globaux
├── hooks/useReveal.js        # animation scroll
├── components/
│   ├── Navbar/               # navbar fixe + menu mobile
│   ├── Footer/               # footer 4 colonnes
│   └── FloatingPhone.jsx     # bouton téléphone flottant
└── pages/
    ├── Home.jsx              # accueil (hero, véhicules, services, à propos, actus, partenaires)
    ├── VehiculesPage.jsx     # catalogue véhicules avec filtres
    ├── ServicesPage.jsx      # grille des 8 services
    ├── AproposPage.jsx       # présentation, valeurs, carte, avis
    ├── ContactPage.jsx       # formulaire + horaires + map
    ├── ActualitesPage.jsx    # liste des articles
    ├── ArticlePage.jsx       # article individuel (via slug)
    ├── AvisPage.jsx          # tous les avis clients
    ├── MentionsLegales.jsx
    ├── Confidentialite.jsx
    └── NotFound.jsx          # page 404
```

## Routes disponibles

| Route                    | Page                  |
|--------------------------|-----------------------|
| `/`                      | Accueil               |
| `/vehicules`             | Catalogue véhicules   |
| `/services`              | Nos services          |
| `/a-propos`              | À propos              |
| `/contact`               | Contact               |
| `/actualites`            | Actualités            |
| `/actualites/:slug`      | Article               |
| `/avis`                  | Avis clients          |
| `/mentions-legales`      | Mentions légales      |
| `/confidentialite`       | Confidentialité       |

## Personnaliser le contenu

Tout le contenu (infos garage, services, véhicules, avis, actualités) est centralisé dans **`src/data/index.js`**.  
Modifier ce seul fichier suffit à mettre à jour tout le site.

## Ajouter les photos

Placer les images dans `public/images/` et les référencer dans le code :
- `public/images/hero.jpg` → fond du hero
- `public/images/garage.jpg` → photo section À propos
- `public/images/services/` → photos des services
- `public/images/actus/` → photos des articles

## Déploiement

### Netlify / Vercel
1. Connecter le repo GitHub
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Ajouter un fichier `public/_redirects` avec : `/* /index.html 200`

### Hébergement classique (OVH, Ionos...)
1. `npm run build`
2. Uploader le dossier `dist/` via FTP
3. Configurer le .htaccess pour le routing SPA :
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Mise en ligne GitHub

```bash
echo "# Garage Mon Auto Aquitaine" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TON_USER/TON_REPO.git
git push -u origin main
```
