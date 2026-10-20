# 💼 Portfolio de Justine BLIN

Portfolio de développeuse web, back et front : mes projets, mes compétences et mon parcours.
Site statique écrit à la main en HTML, CSS et JavaScript vanilla, sans framework ni outil de build.

🔗 **[Voir le site en ligne](https://justineb24.github.io/Portfolio/)**

---

## 📋 Sommaire

- [À propos](#-à-propos)
- [Projets présentés](#-projets-présentés)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Lancer en local](#-lancer-en-local)
- [Structure du projet](#-structure-du-projet)
- [Contact](#-contact)

---

## 👋 À propos

Développeuse web en alternance chez [Litesoft](https://www.litesoft.fr/), je fais évoluer au quotidien un ERP en
production, du contrôleur PHP à l'interface. J'aime moderniser et fiabiliser l'existant autant que créer de
nouvelles applications.

**Parcours :**

| 🎓 Formation                                              | 📅 Période  |
|-----------------------------------------------------------|-------------|
| Mastère Expert IT, applications intelligentes et Big Data | 2026 – 2028 |
| Bachelor Chef de projet développement et data             | 2025 – 2026 |
| BTS SIO, option SLAM                                      | 2023 – 2025 |
| Baccalauréat général (Maths, NSI)                         | 2020 – 2023 |

---

## 🗂 Projets présentés

Douze projets, chacun avec sa fiche détaillée (contexte, réflexion, défis, résultat) :

| Projet                               | En bref                                                |
|--------------------------------------|--------------------------------------------------------|
| 🦎 **Gecko**                         | ERP en production chez Litesoft, que je fais évoluer   |
| 🎵 **YABT — Yet Another Blind Test** | Blind test musical multijoueur en temps réel, à quatre |
| 🍔 **Panada Food**                   | Site vitrine d'un restaurant, réalisé en stage de BTS  |
| 📖 **Le Grimoire des Recettes**      | Carnet de recettes familial, PWA en réseau local       |
| 🎬 **Flouflix**                      | Films et séries en React Native : la pire UI possible  |
| 🪑 **France Mobilier**               | E-commerce MVC pour une société de mobilier fictive    |
| 🛒 **Sio Shop**                      | Gestion commerciale d'une concession fictive, en C#    |
| 🏛 **Mairie de Cauffry**             | Contenu et arborescence du site de la commune          |
| 🧊 **Speedcubing**                   | Chronomètre et classement en ligne de Rubik's Cube     |
| 🌦 **Application météo**             | Météo en temps réel via l'API OpenWeather              |
| 🔐 **Générateur de mots de passe**   | Mots de passe sécurisés, critères au choix             |
| 🔤 **Pendu**                         | Jeu du pendu sur mobile, scores et mots gérés          |

---

## ✨ Fonctionnalités

| Fonctionnalité                   | Description                                                  |
|----------------------------------|--------------------------------------------------------------|
| 📱 **Design responsive**         | Adapté à tous les appareils (mobile, tablette, desktop)      |
| 🌙 **Mode sombre / clair**       | Thème persistant via `localStorage`                          |
| ♿ **Accessibilité**             | Lien d'évitement, navigation au clavier, attributs ARIA      |
| 🔍 **SEO**                       | Sitemap XML, robots.txt, carte de partage par page, JSON-LD  |
| 🗂 **Fiches projet dynamiques**  | Une seule page `projet-details.html?id=…` pour les 12 fiches |
| 📜 **Timeline interactive**      | Parcours scolaire et professionnel                           |
| 🏅 **Galerie de certifications** | Modale plein écran, navigation aux flèches et au clavier     |
| 🎬 **Animations**                | Texte rotatif, compteurs animés, révélation au défilement    |
| 🔒 **Zéro appel tiers**          | Polices et icônes auto-hébergées (RGPD, fonctionne hors CDN) |
| 🥚 **Easter eggs**               | Surprises cachées à découvrir (Konami code et autres…)       |

---

## 🛠 Technologies

| Technologie            | Utilisation                                          |
|------------------------|------------------------------------------------------|
| **HTML5**              | Structure sémantique, accessibilité                  |
| **CSS3**               | Variables (thème), Flexbox, Grid, animations         |
| **JavaScript vanilla** | Interactivité, header/footer partagés, fiches projet |
| **Font Awesome 6.7.2** | Icônes, auto-hébergées                               |
| **Inter + Raleway**    | Typographie, auto-hébergée                           |
| **GitHub Pages**       | Hébergement                                          |

---

## 🚀 Lancer en local

Aucune dépendance, aucun build :

```bash
git clone https://github.com/JustineB24/Portfolio.git
cd Portfolio
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

---

## 📁 Structure du projet

```
Portfolio/
├── index.html                  # Accueil
├── 404.html                    # Page d'erreur
├── robots.txt · sitemap.xml    # Référencement
├── pages/
│   ├── apropos.html
│   ├── competences.html
│   ├── projets.html
│   ├── projet-details.html     # Fiche d'un projet, chargée via ?id=
│   ├── veille.html
│   ├── formation.html
│   ├── contact.html
│   └── mentions-legales.html
├── css/                        # Une feuille par page + global.css + theme.css
├── js/                         # Un script par fonctionnalité
└── assets/
    ├── competences/            # Logos des technos
    ├── projets/                # Captures des projets
    ├── certifications/
    ├── bts/                    # Documents BTS
    ├── og/                     # Cartes de partage + générateur
    ├── veille/
    └── fonts/                  # Polices et icônes auto-hébergées
```

---

## 📞 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/justine-blin-a88600292)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JustineB24)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:blin.justine.sio@gmail.com)
