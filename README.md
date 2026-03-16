# EDEN Business Center – Site vitrine

Site vitrine premium développé pour **EDEN Business Center**, une entreprise spécialisée dans la **fabrication et la vente de tricots de qualité** au Burundi.

Le projet comprend :

- un **frontend React + Vite + Tailwind CSS**
- un **backend PHP simple** pour le formulaire de contact
- un **déploiement sur o2switch / cPanel**
- une **galerie d’images**
- un **formulaire de contact fonctionnel**
- une structure orientée **site vitrine professionnel**

---

## Aperçu du projet

Le site permet de présenter :

- l’activité de l’entreprise
- les produits
- la galerie photo
- les informations de contact
- les demandes de devis ou de renseignements via formulaire

---

## Stack technique

### Frontend
- React
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React

### Backend
- PHP natif
- API simple via `contact.php`

### Hébergement
- o2switch
- cPanel
- Apache + `.htaccess`

---

## Domaine et email utilisés

### Domaine principal
`https://eden-businesscenter.org`

### Email de contact
`contact@eden-businesscenter.org`

---

## Structure du projet

```text
eden-frontend/
├── public/
│   ├── favicon.svg
│   ├── logo-eden.png
│   ├── LogoEdenBlc.png
│   └── images/
│       ├── tricot1.jpg
│       ├── tricot2.jpg
│       ├── tricot3.jpg
│       └── galerie/
│           ├── tricot1.jpg
│           ├── tricot2.jpg
│           ├── tricot3.jpg
│           ├── processus1.jpg
│           ├── processus2.jpg
│           ├── modele1.jpg
│           ├── modele2.jpg
│           └── modele3.jpg
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OptimizedImage.jsx
│   │   ├── Seo.jsx
│   │   └── WhatsAppFloat.jsx
│   │
│   ├── pages/
│   │   ├── Accueil.jsx
│   │   ├── APropos.jsx
│   │   ├── Contact.jsx
│   │   ├── Galerie.jsx
│   │   └── Produits.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
