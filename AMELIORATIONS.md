# Améliorations et fonctionnalités proposées

Liste des améliorations et nouvelles fonctionnalités envisageables pour le portfolio.
Classées par priorité et effort estimé.

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

### ✅ 2. Refonte page d'accueil (hero + cards + bouton CV)

- **Hero plein écran** (`min-height: 100vh`) avec gradient radial rouge subtil, logo centré agrandi (`12rem`) avec
  animation scale-in + drop-shadow
- **Texte rotatif** repositionné en dessous du logo (flex column), apparition fade-up
- **Flèche animée** "Explorer" en bas du hero (ancre `#contenu`, bounce infini sur le chevron)
- **Cards** : bordure rouge supprimée → fond `var(--card-background)`, `border-radius: 1rem`, hover `translateY(-6px)` +
  ombre portée, icônes thématiques Font Awesome (`fa-user`, `fa-code`)
- **Stagger au scroll** : `.card-accueil` ajouté au sélecteur de `scroll-animations.js`, `transition-delay` échelonné
- **Bouton CV** : style aligné sur `.btn-download` de la page documents (border-radius 8px, font-weight 600, effet
  `::before` gradient glissant au hover, icône `fa-file-arrow-down`)

### ✅ 3. Page Projets (vitrine principale)

- **Cards avec screenshot** : thumbnail (webp + fallback) en haut de chaque card via `<picture>`, zoom léger au hover
- **Titre + description courte + tags technos** dans un `.card-body` sous l'image
- **Couleurs en accent** : `border-left: 4px solid var(--card-accent)` au lieu du fond entier coloré
- **Hover** : `translateY(-6px)` + ombre portée au lieu de `scale(0.98)`
- **Grille CSS** : `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` remplace le flex avec gap 5rem
- **Stagger au scroll** : `.projet-container .card` ajouté au sélecteur de `scroll-animations.js`
- **Filtres** : conservés tels quels, la transition `opacity + scale` existante reste en place

### ✅ 4. Page Compétences

- **Labels texte** ajoutés sous chaque icône (`<span class="competence-label">`)
- **Grille CSS** : `grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))` remplace le flex avec gap 5rem
- **Glow au hover seulement** : `box-shadow` et `border` permanents supprimés, remplacés par une variable
  `--comp-color` et un hover avec `border-color + box-shadow + translateY(-4px)`
- **Scale sur l'icône** au hover : `transform: scale(1.1)`

### ✅ 5. Page À propos

- **Section profil** : bordure rouge supprimée → fond `var(--card-background)`, `border-radius: 12px`, padding aéré,
  `max-width: 800px` centré
- **Bouton CV** : style aligné sur `.btn-download` (fond plein `--primary-color`, border-radius 8px, effet `::before`
  gradient glissant au hover)
- **Timeline "Aujourd'hui"** : classe `.timeline-current` sur l'élément actif avec point pulsant (
  `animation: pulse-dot`)
- **Animations au scroll** : `.timeline-item` était déjà dans le sélecteur `scroll-animations.js`

### ✅ 6. Éléments globaux partagés

- **Scroll-reveal** étendu : `.projet-container .card` ajouté au sélecteur de `scroll-animations.js`
- **Scrollbar personnalisée** : `::-webkit-scrollbar` + `scrollbar-color` (Firefox) dans `global.css`, couleur
  `--primary-color` sur fond `--card-background`
- **Lien actif** : détection via `window.location.pathname` dans `structure-globale.js`, classe `.active` ajoutée
  automatiquement à l'onglet correspondant (soulignement permanent desktop, couleur rouge burger)

### ✅ 7. Page Contact

- **Inputs animés** : labels flottants qui remontent au focus (input avant label en HTML, CSS
  `:not(:placeholder-shown)`)
- **Bouton envoyer** : style `.btn-download` avec effet `::before` gradient glissant, icône `fa-paper-plane`
- **Icônes contact** : agrandies dans des cercles (`2.5rem`), hover avec fond `--primary-color` + scale

### ✅ 8. Page Projet-détails

- **Hero par projet** : bannière gradient colorée par projet (couleurs via `--hero-color` CSS custom properties),
  titre blanc + text-shadow, tags technos en pills semi-transparentes
- **Bouton retour** : icône Font Awesome `fa-arrow-left` + texte "Retour", remplace l'image flèche
- **Tags technologies** : `<li>` transformés en pills arrondies (`border-radius: 2rem`) avec icône + nom
- **Carrousel** : compteur "1 / N" ajouté sous les dots

### ✅ 9. Page 404

- **Illustration CSS** : écran stylisé avec lignes de "code" et point d'exclamation pulsant
- **Gradient** : radial gradient rouge subtil en arrière-plan
- **Humour** : "On dirait que cette page a été compilée avec des erreurs..."
- **Animation glitch** sur le "404" + bouton harmonisé avec `fa-home`

### ✅ 10. Scrollbar personnalisée

- Inclus dans l'amélioration 6 (éléments globaux partagés)

### ✅ 11. Lien actif dans la navigation

- Inclus dans l'amélioration 6 (éléments globaux partagés)

### ✅ 12. Smooth scroll + ancres

- `scroll-behavior: smooth` sur `html`
- Désactivé si `prefers-reduced-motion: reduce`

### ✅ 13. Sélection de texte stylisée

- `::selection` et `::-moz-selection` avec fond `var(--primary-color)` et texte blanc

### ✅ 14. Skip-link (accessibilité)

- Lien "Aller au contenu" masqué, visible au focus clavier, pointe vers `#main`

### ✅ 15. Header glassmorphism + shrink au scroll

- Header avec `backdrop-filter: blur(10px)` et fond semi-transparent
- Classe `.header-scrolled` ajoutée au-delà de 50px de scroll (hauteur réduite, logo/titre plus petits)

### ✅ 16. Typographie fluide (clamp)

- `h1` à `h4` en `clamp()` pour un redimensionnement fluide sans breakpoints fixes
- Suppression des règles de taille dupliquées dans les media queries

### ✅ 18. Soulignement animé des liens

- `background-image: linear-gradient(var(--primary-color)...)` avec `background-size: 0% → 100%` au hover
- Appliqué aux liens dans le contenu principal (hors boutons et navigation)

### ✅ 19. Transitions douces entre thèmes

- `transition: background-color 0.3s, color 0.3s, border-color 0.3s` sur 14 sélecteurs enfants (cards, document-card,
  etc.)

### ✅ 20. Texture grain subtile

- `body::before` avec SVG `<feTurbulence>` en data URI, `opacity: 0.03`, `pointer-events: none`

### ✅ 21. Dark mode — lueurs et ombres

- `.dark-theme .btn-download` etc. avec `box-shadow: 0 0 15px rgba(150, 0, 0, 0.4)`
- `.dark-theme h1, h2` avec `text-shadow` rouge subtil

### ✅ 22. Bordures gradient animées (cards)

- `conic-gradient` sur `::before` / `::after` des `.card-accueil` et `.document-card`
- Rotation infinie `@keyframes spin` sur le pseudo-élément

### ✅ 23. Curseur personnalisé

- SVG data URI avec cercle rouge sur les éléments interactifs
- Protégé par `@media (hover: hover)` (desktop uniquement)

### ✅ 24. Séparateurs SVG (vagues)

- Classe `.wave-separator` avec SVG vague entre sections sur la page d'accueil

### ✅ 25. Fil d'Ariane (breadcrumbs)

- `genererBreadcrumbs(chemin)` dans `structure-globale.js`
- Navigation contextuelle sous le header

### ✅ 26. Compteurs animés (accueil)

- Section `.compteurs` avec 4 indicateurs (Projets, Certifications, Stages, Langages)
- Animation IntersectionObserver + requestAnimationFrame avec courbe ease-out

### ✅ 27. Copier l'email (contact)

- Bouton `.btn-copier-email` ajouté dynamiquement via `interactions.js`
- Utilise `navigator.clipboard.writeText()` avec tooltip de confirmation

### ✅ 29. Sitemap XML + robots.txt

> `robots.txt` et `sitemap.xml` sont déjà en place à la racine du projet.

### ✅ 30. JSON-LD (données structurées)

- Schema `Person` ajouté sur `index.html` (name, jobTitle, url, sameAs)

### ✅ 31. Détection automatique du thème système

- `prefers-color-scheme: dark` vérifié si aucune préférence dans `localStorage`
- Script inline mis à jour sur toutes les pages + `theme.js` adapté

### ✅ 32. Meta theme-color dynamique

- `meta[name="theme-color"]` mis à jour par `toggleDarkMode()` : `#1a0000` (dark) / `#a90000` (light)

### ✅ 33. Loading screen

- `<div class="loader">` avec logo animé ajouté sur toutes les pages
- Masqué après chargement dans `structure-globale.js`

### ✅ 34. Transitions de page

- Animation `pageIn` (fade-in + translateY) au chargement
- Classe `page-exit` avec `pageOut` avant navigation (délai 250ms)

### ✅ 35. Effet parallaxe

- `background-attachment: fixed` sur `.hero` et `.page-header`
- Protégé par `@media (hover: hover)` (desktop uniquement)

### ✅ 36. Cards compétences avec flip 3D

- Structure front/back avec `perspective: 600px` et `transform-style: preserve-3d`
- Face arrière avec description courte sur fond `var(--primary-color)`

### ✅ 37. Tooltips technos (projet-détails)

- Attribut `data-tooltip` avec description ajouté sur chaque badge techno
- Tooltip CSS pur au hover via `[data-tooltip]::after`

### ✅ 38. Carrousel auto-play

- `setInterval(slideSuivant, 4000)` avec pause au survol et reprise au mouseleave

### ✅ 39. Tilt 3D sur les cartes projets

- `rotateX/rotateY ±5deg` basé sur la position du curseur
- Protégé par `@media (hover: hover)` et `prefers-reduced-motion`

### ✅ 40. Boutons magnétiques

- Translation de 15% du décalage curseur sur les boutons principaux
- Protégé par `@media (hover: hover)`

### ✅ 41. Micro-interactions icônes

- `scale(1.2) rotate(5deg)` sur les icônes `.document-header i` au hover

### ✅ 42. Reveal lettre par lettre (titres h1)

- Chaque caractère wrappé dans `<span>` avec `animationDelay` échelonné (0.03s)

### ✅ 43. Temps de lecture (veille)

- Calcul automatique (~200 mots/min) affiché en haut de la page veille

### ✅ 44. Sommaire (veille)

- `<nav class="sommaire">` avec liste ordonnée de liens vers les 13 sections

### ✅ 45. Aperçu au survol (timeline)

- Preview card suivant le curseur sur les liens projet de la timeline

### ✅ 46. Skeleton PDF (documents)

- Classe `.pdf-skeleton` avec animation de chargement pendant le chargement de l'iframe

### ✅ 47. Container queries

- `container-type: inline-size` sur `.projet-container` et `.card-container`
- `@container (max-width: 400px)` pour adaptation fine

### ✅ 48. Styles d'impression

- `@media print` masquant header, footer, loader et éléments interactifs

### ✅ 49. Easter egg accessibilité (a11y)

- Mot-clé `a11y` dans la console easter egg
- Active un mode haute visibilité avec contours, gros texte et liens soulignés

### ✅ 50. Accessibilité — prefers-reduced-motion

- `@media (prefers-reduced-motion: reduce)` : animations, transitions et scroll-behavior désactivés

---

## ❌ Refusés / retirés

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
