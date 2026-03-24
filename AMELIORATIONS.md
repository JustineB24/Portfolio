# Améliorations, fonctionnalités et easter eggs

Liste complète des améliorations, fonctionnalités et easter eggs du portfolio.

**Légende** : ✅ = En place | ❌ = Refusé / retiré

---

## Améliorations à faire

_Aucune amélioration en attente._

---

## ✅ Améliorations en place

### ✅ 1. Typographie Raleway (global)

- **`@import` Google Fonts** (Raleway 400/600/700/800) ajouté dans `css/global.css`
- **`font-family: 'Raleway', sans-serif`** appliqué sur `html, body` (fallback `sans-serif` conservé)
- **Titres `h1`, `h2`, `h3`** : `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: 2px`
- **`h4`** : `font-weight: 700`
- `font-family: sans-serif` redondant supprimé de `.titre-nom`

### ✅ 2. Refonte page d'accueil

- **Hero plein écran** (`min-height: 100vh`) avec gradient radial rouge subtil, logo centré agrandi (`12rem`) avec
  animation scale-in + drop-shadow
- **Texte rotatif** repositionné en dessous du logo (flex column), apparition fade-up
- **Flèche animée** "Explorer" en bas du hero (ancre `#contenu`, bounce infini sur le chevron)
- **Compteurs animés** : 4 mini-cards carrées (150×150px) avec icônes (Projets, Certifications, Outils, Langages), liens
  cliquables vers les pages dédiées, animation IntersectionObserver + requestAnimationFrame
- **Section "Qui suis-je"** : texte de présentation centré + boutons CV et "En savoir plus" empilés
- **Aperçu projets** : grille de 4 cartes avec contour coloré par projet (même couleurs que la page projets),
  trait séparateur coloré sous le titre, tags en pills avec fond `--background-color`
- **Bandeau compétences** : marquee infini avec 27 logos SVG (dupliqués pour boucle), masque gradient sur les bords
- **Bouton CV** : style partagé dans `global.css` (border-radius 8px, font-weight 600, effet `::before` gradient
  glissant)

### ✅ 3. Page Projets (vitrine principale)

- **Cards avec contour coloré** : `border: 2px solid var(--card-accent)` avec couleur unique par projet (8 couleurs)
- **Trait séparateur** sous le titre de chaque card, de la même couleur que le contour
- **Tags technologies** en pills arrondies (`border-radius: 2rem`) avec fond `--background-color` et contour
  `--text-color`
- **Titre + description courte + tags technos** dans un `.card-body`
- **Hover** : `translateY(-6px)` + ombre portée
- **Grille CSS** : `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`
- **Filtres** : conservés avec transition `opacity + scale`
- **Descriptions stages** : précision "première année de BTS SIO" (Mairie) et "deuxième année de BTS SIO" (Panada Food)

### ✅ 4. Page Compétences

- **Cards flip 3D** : structure front/back avec `perspective: 600px` et `transform-style: preserve-3d`
- **Face avant** : contour coloré permanent + glow (couleur de la marque), intensifié au hover
- **Face arrière** : gradient/couleur exacte du logo de chaque techno (pas de rouge générique)
    - Gradients multi-couleurs pour les logos multi-tons (MySQL, GitLab, Figma, Python, PhpStorm, etc.)
    - Texte blanc avec `text-shadow` pour lisibilité, texte noir sur fond jaune (JavaScript)
- **27 compétences** réparties en Langages (12) et Outils (15), classées par catégorie logique
- **Labels texte** sous chaque icône
- **Grille CSS** : `grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))`

### ✅ 5. Page À propos

- **Section profil** : fond `var(--card-background)`, `border-radius: 12px`, padding aéré, `max-width: 800px` centré
- **Bouton CV** : style partagé depuis `global.css`
- **Timeline "Aujourd'hui"** : classe `.timeline-current` avec point pulsant (`animation: pulse-dot`)

### ✅ 6. Éléments globaux partagés

- **Scroll-reveal** : animations au scroll via IntersectionObserver sur les sections principales
- **Scrollbar personnalisée** : `::-webkit-scrollbar` + `scrollbar-color` (Firefox), couleur `--primary-color`
- **Lien actif** : détection via `window.location.pathname`, classe `.active` ajoutée automatiquement
- **Titres h1/h2** : `border-bottom` uni `var(--primary-color)` (plus de gradient qui disparaît)
- **Icônes Font Awesome** sur tous les titres h1/h2 de toutes les pages pour la cohérence

### ✅ 7. Page Contact

- **Inputs animés** : labels flottants au focus
- **Bouton envoyer** : style avec effet `::before` gradient glissant, icône `fa-paper-plane`
- **Icônes contact** : dans des cercles, hover avec fond `--primary-color` + scale
- **Bouton copier email** : `navigator.clipboard.writeText()` avec tooltip de confirmation

### ✅ 8. Page Projet-détails

- **Hero par projet** : bannière gradient colorée par projet, titre blanc + text-shadow, tags technos en pills
- **Bouton retour** : icône `fa-arrow-left` + texte "Retour"
- **Tags technologies** : pills arrondies avec icône SVG + nom + tooltip description
- **Carrousel** : compteur "1 / N", auto-play avec pause au hover, modale plein écran avec navigation
- **Image unique** : `object-fit: cover` + `object-position: top` pour recadrer les captures trop hautes
- **Descriptions stages** : précision de l'année de BTS SIO

### ✅ 9. Page 404

- **Illustration CSS** : écran stylisé avec lignes de "code" et point d'exclamation pulsant
- **Gradient** : radial gradient rouge subtil en arrière-plan
- **Humour** : "On dirait que cette page a été compilée avec des erreurs..."
- **Animation glitch** sur le "404" + bouton harmonisé avec `fa-home`

### ✅ 10. Page Veille technologique

- **Bandeau meta** : temps de lecture (calculé automatiquement ~200 mots/min) + période (2024-2025) en pills côte à côte
- **Sommaire** : numéros dans des pastilles rondes avec contour rouge, remplissage au hover, texte en gras au hover
- **Section "Qu'est-ce que c'est"** intégrée à côté du sommaire (logo + titre + description)
- **Titres h2** : `border-bottom` gradient rouge → noir (spécifique à la page veille)
- **Innovations** : cartes en ligne avec bordure rouge à gauche, titre en rouge, date en uppercase, description
- **Image évolution** : pleine largeur (`max-width: 100%`)
- **Tableau comparatif** : espacement caption/tableau corrigé
- **Liens sources** : plus de double underline au hover

### ✅ 11. Mentions légales

- Sections : Propriété intellectuelle, Données personnelles (RGPD), Cookies, Crédits photographiques
- Mise en page : `max-width: 700px` centré

### ✅ 12. Smooth scroll + ancres

- `scroll-behavior: smooth` sur `html`
- Désactivé si `prefers-reduced-motion: reduce`

### ✅ 13. Sélection de texte stylisée

- `::selection` avec fond `var(--primary-color)` et texte blanc

### ✅ 14. Skip-link (accessibilité)

- Lien "Aller au contenu" masqué, visible au focus clavier, pointe vers `#main`

### ✅ 15. Header glassmorphism

- Header avec `backdrop-filter: blur(10px)` et fond semi-transparent
- Header fixe sans shrink au scroll (comportement retiré pour éviter les bugs de layout)

### ✅ 16. Typographie fluide (clamp)

- `h1` à `h4` en `clamp()` pour un redimensionnement fluide sans breakpoints fixes

### ✅ 17. Soulignement animé des liens

- `background-image: linear-gradient(var(--primary-color)...)` avec `background-size: 0% → 100%` au hover
- Appliqué aux liens dans le contenu principal (hors boutons, navigation et sommaire)

### ✅ 18. Transitions douces entre thèmes

- `transition: background-color 0.3s, color 0.3s, border-color 0.3s` sur les éléments principaux

### ✅ 19. Texture grain subtile

- `body::before` avec SVG `<feTurbulence>` en data URI, `opacity: 0.03`, `pointer-events: none`

### ✅ 20. Dark mode — lueurs et ombres

- Box-shadow rouge subtil sur les boutons en dark mode
- Text-shadow rouge subtil sur les titres en dark mode

### ✅ 21. Curseur personnalisé

- SVG data URI avec cercle rouge sur les éléments interactifs
- Protégé par `@media (hover: hover)` (desktop uniquement)

### ✅ 22. Compteurs animés (accueil)

- Section `.compteurs` avec 4 indicateurs (Projets, Certifications, Outils, Langages)
- Animation IntersectionObserver + requestAnimationFrame avec courbe ease-out
- **Micro-interactions au hover** : scale bounce élastique sur le chiffre (×1.15) et rotation de l'icône (-10°)
  avec `cubic-bezier(0.34, 1.56, 0.64, 1)`

### ✅ 23. Détection automatique du thème système

- `prefers-color-scheme: dark` vérifié si aucune préférence dans `localStorage`

### ✅ 24. Meta theme-color dynamique

- `meta[name="theme-color"]` mis à jour par `toggleDarkMode()` : `#1a0000` (dark) / `#a90000` (light)

### ✅ 25. Loading screen

- `<div class="loader">` avec logo animé, masqué après chargement

### ✅ 26. Transitions de page

- Animation `pageIn` (fade-in + translateY) au chargement
- Classe `page-exit` avec `pageOut` avant navigation (délai 250ms)

### ✅ 27. Container queries

- `container-type: inline-size` sur `.projet-container` et `.card-container`
- `@container (max-width: 400px)` pour adaptation fine

### ✅ 28. Styles d'impression

- `@media print` masquant header, footer, loader et éléments interactifs

### ✅ 29. Accessibilité — prefers-reduced-motion

- `@media (prefers-reduced-motion: reduce)` : animations, transitions et scroll-behavior désactivés

### ✅ 30. Boutons magnétiques

- Translation de 15% du décalage curseur sur les boutons principaux
- Protégé par `@media (hover: hover)`

### ✅ 31. Reveal lettre par lettre (titres h1)

- Chaque caractère wrappé dans `<span>` avec `animationDelay` échelonné (0.03s)

### ✅ 32. Tooltips technos (projet-détails)

- Attribut `data-tooltip` avec description sur chaque badge techno
- Tooltip CSS pur au hover

### ✅ 33. Carrousel auto-play

- `setInterval(slideSuivant, 4000)` avec pause au survol et reprise au mouseleave

### ✅ 34. JSON-LD (données structurées)

- Schema `Person` ajouté sur `index.html` (name, jobTitle, url, sameAs)

### ✅ 35. Sitemap XML + robots.txt

- `robots.txt` et `sitemap.xml` en place à la racine

### ✅ 36. Remplacement var → let/const

- Tous les fichiers JS modernisés avec `let`/`const` au lieu de `var`

### ✅ 37. SVG renommés et organisés

- Tous les fichiers SVG renommés en noms courts (`asana.svg`, `figma.svg`, etc.)
- Ordre logique : front-end → back-end → BDD → IDE → serveurs → versioning → design → gestion projet

---

## ✅ Easter eggs actifs

### Konami Code

- **Déclencheur** : Taper ↑ ↑ ↓ ↓ ← → ← → B A au clavier
- **Effet** : Glitch visuel (hue-rotate + tremblement) suivi d'une notification "Achievement Unlocked" style arcade avec
  trophée animé, barre de progression et disparition automatique après 4 secondes

### Mode disco

- **Déclencheur** : Taper "disco" au clavier
- **Effet** : Le fond du site change de couleur en boucle, les éléments rebondissent (5 secondes)

### Mode terminal

- **Déclencheur** : Taper "terminal" au clavier
- **Effet** : Fond noir, texte vert monospace, curseur clignotant (6 secondes)

### Big Bang temporel

- **Déclencheur** : Cliquer sur l'année dans le footer
- **Effet** : L'année recule jusqu'à 0 avec accélération + tremblement, explosion de particules (flash + 30 symboles projetés), emoji 💥, puis remontée rapide vers l'année actuelle avec modale "Big Bang temporel !"

### Snake

- **Déclencheur** : Taper "snake" au clavier
- **Effet** : Un jeu de Snake jouable en overlay (flèches pour jouer, Échap pour quitter)

### Thème arc-en-ciel

- **Déclencheur** : Taper "rainbow" au clavier
- **Effet** : La couleur principale du site alterne entre toutes les couleurs de l'arc-en-ciel (10 secondes)

### Message console

- **Déclencheur** : Ouvrir la console développeur (F12)
- **Effet** : ASCII art "JB" et message secret avec indices

### Matrix

- **Déclencheur** : Taper "matrix" au clavier
- **Effet** : Pluie de caractères verts style Matrix en plein écran (8 secondes)

### Barrel Roll

- **Déclencheur** : Taper "roll" au clavier
- **Effet** : Le site entier fait une rotation 360° fluide (1.5 secondes)

### Mode 90's

- **Déclencheur** : Taper "90s" au clavier
- **Effet** : Le site prend un look rétro GeoCities : Comic Sans, couleurs criardes, header arc-en-ciel, texte défilant
  en bas de page (8 secondes)

### Secouer le téléphone (mobile)

- **Déclencheur** : Secouer le téléphone 3 fois
- **Effet** : Lance un easter egg visuel aléatoire parmi disco, gravité, barrel roll ou rainbow

### Mode présentation

- **Déclencheur** : Taper "present" au clavier
- **Effet** : Transforme les sections de la page courante en slides plein écran avec fond sombre. Navigation par
  flèches gauche/droite, Espace, dots cliquables, Home/End. Barre de progression en haut, compteur de slides,
  bouton Échap pour quitter

### Fonction `easterEggs()` dans la console

- **Déclencheur** : Taper `easterEggs()` dans la console
- **Effet** : Affiche un tableau listant tous les easter eggs avec leur déclencheur et description

---

## ❌ Refusés / retirés

### ❌ Barre de progression au scroll

- **Solution** : Barre fine en haut de la page, sous le header, indiquant la position de lecture.
- **Gain** : Repère visuel pour les longues pages.
- **Raison du refus** : Jugé inutile.

### ❌ Gravité inversée (easter egg)

- **Solution** : Taper "gravity" au clavier pour faire s'envoler la page puis retomber.
- **Gain** : Effet visuel surprenant.
- **Raison du retrait** : Pas assez intéressant.

### ❌ Mode pirate (easter egg)

- **Solution** : Taper "arrr" au clavier pour transformer les onglets du menu en termes pirates.
- **Gain** : Easter egg humoristique.
- **Raison du retrait** : Pas assez intéressant.

### ❌ Fil d'Ariane (breadcrumbs)

- **Solution** : Navigation secondaire affichant le chemin (Accueil > Page courante).
- **Gain** : Repère de navigation supplémentaire.
- **Raison du retrait** : Jugé inutile, le site est assez simple pour s'en passer.

### ❌ Header shrink au scroll

- **Solution** : Réduire la hauteur du header au scroll avec une transition.
- **Gain** : Plus d'espace de lecture en scrollant.
- **Raison du retrait** : Causait des bugs de layout, retiré au profit d'un header fixe simple.

### ❌ Séparateurs SVG (vagues)

- **Solution** : Formes SVG ondulées entre les sections de la page d'accueil.
- **Gain** : Transitions visuelles fluides entre sections.
- **Raison du retrait** : Remplacé par la nouvelle mise en page de l'accueil (compteurs + qui suis-je + aperçu projets).

### ❌ Aperçu au survol (timeline)

- **Solution** : Preview card suivant le curseur sur les liens projet de la timeline.
- **Gain** : Aperçu rapide sans quitter la page.
- **Raison du retrait** : Jugé superflu.

### ❌ Bordures gradient animées (cards accueil)

- **Solution** : Bordures avec gradient animé rotatif sur les cards de la page d'accueil.
- **Gain** : Effet visuel dynamique.
- **Raison du retrait** : Remplacé par les cartes avec contour coloré statique par projet.

### ❌ Mode ultra-accessible (a11y)

- **Solution** : Easter egg activé en tapant "a11y", rendant le site en gros texte avec contours rouges.
- **Gain** : Clin d'œil humoristique à l'accessibilité.
- **Raison du retrait** : Pouvait bloquer les autres easter eggs si la modale ne se fermait pas correctement.

### ❌ Indicateur de progression de lecture

- **Solution** : Barre de progression en haut de la page qui se remplit au scroll.
- **Gain** : Repère visuel pour les longues pages.
- **Raison du refus** : Jugé inutile.

### ❌ Self-hosting de Font Awesome

- **Solution** : Télécharger les icônes utilisées et les héberger localement.
- **Gain** : Suppression de la dépendance au CDN, chargement plus rapide.
- **Raison du refus** : Trop d'effort pour un gain minime, le CDN avec preconnect suffit.

### ❌ Minification des CSS et JS

- **Solution** : Générer des versions `.min.css` / `.min.js`.
- **Gain** : Réduction du poids des fichiers et du temps de chargement.
- **Raison du refus** : Fichiers déjà légers, gain négligeable sur un site statique de cette taille.

### ❌ Témoignages / Recommandations

- **Solution** : Ajouter une section avec des citations de professeurs, tuteurs de stage ou collègues. Format simple
  avec photo, nom, rôle et citation.
- **Gain** : Crédibilité et preuve sociale.
- **Raison du refus** : Pas de témoignages disponibles pour le moment.

### ❌ Mode hors-ligne avec Service Worker

- **Solution** : Implémenter un Service Worker qui met en cache les pages et assets. Le site resterait consultable sans
  connexion internet.
- **Gain** : Portfolio consultable en avion, dans le métro, etc.
- **Raison du refus** : Effort élevé pour un usage rare, non prioritaire.

### ❌ PWA (Progressive Web App)

- **Solution** : Ajouter un `manifest.json` avec icônes, nom et couleurs. Combiné avec le Service Worker, le site
  pourrait être "installé" sur mobile comme une app.
- **Gain** : Expérience native sur mobile.
- **Raison du refus** : Dépend du Service Worker (également refusé), effort non justifié.

### ❌ Animation de particules sur la page d'accueil

- **Solution** : Ajouter un canvas en arrière-plan de la section hero avec des particules animées (points connectés,
  étoiles, etc.) via un script léger.
- **Gain** : Effet visuel impactant.
- **Raison du refus** : Effet vu et revu, manque d'originalité.

### ❌ Statistiques GitHub en temps réel

- **Solution** : Utiliser l'API GitHub publique pour afficher dynamiquement le nombre de repos, de commits, les langages
  les plus utilisés, etc.
- **Gain** : Contenu dynamique et à jour.
- **Raison du refus** : Trop peu de contenu GitHub pour que ce soit pertinent.

### ❌ Multilingue (FR/EN)

- **Solution** : Proposer une version anglaise du portfolio avec un sélecteur de langue.
- **Gain** : Accessibilité internationale.
- **Raison du refus** : Pas d'utilité pour le moment, niveau d'anglais insuffisant pour un contenu professionnel
  crédible.

### ❌ Blog / Articles techniques

- **Solution** : Ajouter une section blog avec des articles techniques sur le développement, les projets, etc.
- **Gain** : Démontrer une expertise, améliorer le SEO.
- **Raison du refus** : Demande du contenu à rédiger régulièrement, pas le temps de l'alimenter pour le moment.

### ❌ Favicon multi-format

- **Solution** : Générer des favicons en `.ico`, `.svg`, Apple Touch Icon et les déclarer dans le `<head>`.
- **Gain** : Icône adaptée à tous les navigateurs et appareils.
- **Raison du refus** : Nécessite la génération d'images dans plusieurs formats, non réalisable sans outil dédié.

### ❌ Open Graph images par page

- **Solution** : Créer des images OG spécifiques à chaque page (1200×630px) au lieu d'une image unique.
- **Gain** : Meilleur aperçu lors du partage sur les réseaux sociaux.
- **Raison du refus** : Nécessite la création graphique d'images dédiées, non réalisable sans outil dédié.

### ❌ Morse sur le logo

- **Solution** : Cliquer sur "Justine BLIN" dans le header pour faire clignoter le texte en morse.
- **Gain** : Easter egg discret et original.
- **Raison du retrait** : Jugé trop subtil.

### ❌ Logo cliquable secret

- **Solution** : Cliquer 7 fois rapidement sur "Justine BLIN" pour déclencher un effet arc-en-ciel rotatif.
- **Gain** : Easter egg fun.
- **Raison du retrait** : Remplacé par d'autres easter eggs.

### ❌ Pluie d'emojis

- **Solution** : Double-cliquer sur un titre h1 pour faire tomber 60 emojis du haut de l'écran.
- **Gain** : Effet surprise amusant.
- **Raison du retrait** : Jugé superflu.

### ❌ Jeu du dino (page 404)

- **Solution** : Jeu du dinosaure jouable sur la page 404 (Espace/clic pour sauter, éviter les cactus).
- **Gain** : Expérience ludique sur une page d'erreur.
- **Raison du retrait** : Effort élevé pour une page rarement visitée.

### ❌ Section "En cours d'apprentissage"

- **Solution** : Ajouter une zone sur la page compétences pour les technos en cours d'exploration, avec un style
  différent (opacité réduite, badge "Learning").
- **Gain** : Montrer la progression et la curiosité.
- **Raison du refus** : On ne maîtrise jamais une techno à 100%, la distinction n'a pas de sens. Demanderait des mises
  à jour fréquentes.

### ❌ Filtres par niveau de compétence

- **Solution** : Ajouter des filtres débutant/intermédiaire/avancé sur la page compétences.
- **Gain** : Donner plus de contexte sur le niveau réel.
- **Raison du refus** : On ne maîtrise jamais une techno à 100%, catégoriser par niveau n'est pas pertinent.

### ❌ Page "Mon setup / Outils"

- **Solution** : Page dédiée à l'environnement de travail (IDE, extensions, configuration, bureau).
- **Gain** : Contenu apprécié par les recruteurs techniques.
- **Raison du refus** : Setup différent entre l'école, le boulot et chez soi, et variable selon les projets.

### ❌ Veille technologique enrichie

- **Solution** : Ajouter 2-3 autres sujets de veille en plus de l'article Raspberry Pi.
- **Gain** : Page moins vide, plus de contenu.
- **Raison du refus** : Pas d'idées de sujets supplémentaires, la veille était une obligation BTS SIO.
