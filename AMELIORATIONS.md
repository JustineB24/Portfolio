# Améliorations et fonctionnalités proposées

Liste des améliorations et nouvelles fonctionnalités envisageables pour le portfolio.
Classées par priorité et effort estimé.

**Légende** : ❌ = Refusé / retiré

---

## Améliorations frontend

### 1. Typographie (impact immédiat sur tout le site)

- **Actuellement** : `font-family: sans-serif` partout (police par défaut du navigateur).
- **Proposition** : Utiliser **Raleway** (déjà dans les conventions mais jamais chargée).
    - Titres (`h1`, `h2`, `h3`) : Raleway **700/800**, uppercase avec `letter-spacing: 2px`
    - Corps de texte : Raleway **400** pour la lecture courante
    - Un seul `@import` Google Fonts dans `global.css` et c'est réglé pour toutes les pages
- **Effort** : Faible | **Impact** : Tout le site change

### 2. Page d'accueil (première impression)

- **Actuellement** : Logo rond + texte rotatif côte à côte, puis 2 cards avec bordure rouge. Plat, pas d'accroche.
- **Propositions** :
    - **Hero plein écran** (100vh) avec un gradient sombre, le logo centré en plus grand, le texte rotatif en dessous,
      et une flèche animée qui invite à scroller
    - **Cards d'accueil** : retirer les bordures rouges, utiliser des cards avec fond `--card-background`, une icône
      thématique, un hover avec translation + ombre. Ajouter un effet de stagger au scroll
    - **Bouton CV** : même style que les `.btn` de la page documents pour la cohérence
- **Effort** : Moyen | **Impact** : Première impression

### 3. Page Projets (vitrine principale)

- **Actuellement** : Rectangles de couleur unie avec juste un titre blanc dedans. On ne voit rien du projet avant de
  cliquer.
- **Propositions** :
    - **Cards avec screenshot** : Ajouter une image/capture d'écran en haut de chaque card, titre + courte description +
      tags des technos utilisées en bas
    - **Hover** : léger zoom sur l'image + ombre portée au lieu du scale(0.98) actuel
    - **Garder les couleurs** comme accent (bordure ou tag) plutôt que comme fond entier
    - **Filtres** : les boutons de filtre actuels sont bien, juste ajouter une transition animée quand les cards
      apparaissent/disparaissent
- **Effort** : Moyen | **Impact** : Page la plus visitée

### 4. Page Compétences

- **Actuellement** : Galerie de certifs (OK) + petits carrés d'icônes avec glow coloré sans label texte.
- **Propositions** :
    - **Ajouter le nom** sous chaque icône (HTML, CSS, JavaScript...) — actuellement il faut deviner à partir du `alt`
    - **Regrouper en grid propre** avec `grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))` au lieu du flex
      avec gap 5rem
    - **Remplacer le glow permanent** par un glow au hover seulement — actuellement les box-shadows colorées sont
      toujours visibles, c'est chargé
    - **Barre de niveau** optionnelle sous chaque techno (débutant -> avancé)
- **Effort** : Faible | **Impact** : Clarté

### 5. Page À propos

- **Actuellement** : Paragraphe avec bordure rouge, bouton CV, timeline double colonne. Correct mais basique.
- **Propositions** :
    - **Section profil** : remplacer le paragraphe bordé par une mise en page plus aérée sans la bordure
    - **Timeline** : ajouter des animations au scroll (les points apparaissent un par un), et un indicateur visuel pour
      l'élément actuel ("Aujourd'hui")
    - **Harmoniser** le bouton CV avec le style `.btn` global
- **Effort** : Moyen | **Impact** : Polish

### 6. Éléments globaux partagés

- **Scroll-reveal** : mettre le JS de l'`IntersectionObserver` dans le fichier partagé `scroll-animations.js` et ajouter
  des `.scroll-reveal` sur toutes les pages
- **Cards** : créer un style de card de base dans `global.css` (border-radius 14px, ombre douce, hover avec translateY)
  réutilisable partout
- **Transitions** : harmoniser les durées (0.3s partout)
- **Footer / Header** : déjà bien, pas besoin d'y toucher
- **Effort** : Faible | **Impact** : Dynamisme et cohérence

### 7. Page Contact

- **Actuellement** : Formulaire fonctionnel + sidebar avec infos. Correct mais le formulaire est basique.
- **Propositions** :
    - **Inputs animés** : labels qui remontent au focus (style Material Design) au lieu de labels statiques au-dessus
    - **Bouton envoyer** : ajouter un effet de remplissage au hover (comme les `.btn` de documents) au lieu d'un simple
      changement de couleur
    - **Feedback visuel** : animation de confirmation après clic sur envoyer (coche animée ou message de succès)
    - **Sidebar contact** : ajouter des icônes plus grandes avec un hover coloré sur chaque lien
- **Effort** : Faible | **Impact** : Finition

### 8. Page Projet-détails

- **Actuellement** : Titre + bouton retour (flèche image), blocs présentation/technologies côte à côte, carrousel
  d'images. Fonctionnel mais l'en-tête est brut.
- **Propositions** :
    - **Hero par projet** : bannière en haut avec la couleur du projet en dégradé, titre + tags technos intégrés
      dedans (comme le hero de la page documents)
    - **Bouton retour** : remplacer l'image flèche par un vrai bouton stylé avec icône Font Awesome
    - **Tags technologies** : les `<li>` actuels sont des blocs avec bordure — les transformer en petits badges
      colorés (pill-shaped)
    - **Carrousel** : ajouter un compteur "1/5" et une barre de progression entre les dots
- **Effort** : Moyen | **Impact** : Chaque page projet gagne en qualité

### 9. Page 404

- **Actuellement** : Titre "404" géant + texte + bouton retour. Très minimaliste.
- **Propositions** :
    - **Illustration ou animation CSS** : un petit dessin/animation (écran cassé, astronaute perdu, etc.) pour rendre la
      page mémorable
    - **Fond** : ajouter un léger motif ou gradient au lieu du fond blanc/noir nu
    - **Message** : ajouter une touche d'humour ("On dirait que cette page a été compilée avec des erreurs...")
- **Effort** : Faible | **Impact** : Détail fun, montre la personnalité

### 10. Scrollbar personnalisée

- **Proposition** : Styliser la scrollbar pour qu'elle suive le thème du site (fine, couleur `--primary-color`, fond
  `--card-background`)
- **Solution** : `::-webkit-scrollbar` + `scrollbar-color` pour Firefox
- **Effort** : Très faible | **Impact** : Cohérence visuelle subtile

### 11. Lien actif dans la navigation

- **Actuellement** : Aucun indicateur visuel pour savoir sur quelle page on se trouve dans le menu
- **Proposition** : Ajouter une classe `.active` sur l'onglet correspondant à la page courante (soulignement permanent
  ou couleur différente)
- **Solution** : Détection via `window.location.pathname` dans `structure-globale.js`
- **Effort** : Très faible | **Impact** : UX / orientation utilisateur

### 12. Transitions entre pages

- **Proposition** : Ajouter un léger fade-out au clic sur un lien et fade-in à l'arrivée sur la nouvelle page
- **Solution** : CSS `opacity` sur `<main>` + petit script JS avec `beforeunload` / `DOMContentLoaded`
- **Effort** : Faible | **Impact** : Fluidité perçue, effet professionnel

### 13. Couleur de sélection de texte

- **Actuellement** : Sélection par défaut du navigateur (bleu)
- **Proposition** : Styliser `::selection` avec le rouge primaire + texte blanc pour que même la sélection de texte soit
  aux couleurs du site
- **Solution** : `::selection { background: var(--primary-color); color: white; }` dans `global.css`
- **Effort** : Très faible | **Impact** : Détail qui fait la différence

### 14. Smooth scroll global

- **Actuellement** : Le scroll est instantané (saut sec quand on clique un ancre ou le bouton retour en haut)
- **Proposition** : `html { scroll-behavior: smooth; }` dans `global.css`
- **Effort** : Très faible | **Impact** : Fluidité

### 15. Lien "Skip to content" (accessibilité)

- **Actuellement** : Un utilisateur clavier doit Tab à travers tout le header/menu avant d'atteindre le contenu
- **Proposition** : Ajouter un lien caché "Aller au contenu" qui apparaît au focus clavier, positionné avant le header
- **Solution** : Un `<a href="#main" class="skip-link">` stylé avec `.skip-link:focus { position: fixed; top: 0; ... }`
- **Effort** : Très faible | **Impact** : Accessibilité (bonus pour les audits)

### 16. Page Veille — sommaire cliquable

- **Actuellement** : Page longue avec beaucoup de contenu, il faut scroller pour trouver une section
- **Proposition** : Ajouter un sommaire/table des matières en haut de page avec des ancres vers chaque section
- **Solution** : Liste de liens `<a href="#section-1">` + `id` sur chaque `<h2>`. Combiné avec le smooth scroll (point
  14)
- **Effort** : Faible | **Impact** : Navigation facilitée sur la page la plus longue

### 17. Favicon multi-format

- **Actuellement** : Un seul `<link rel="icon" type="image/png">` — certains navigateurs/appareils ne l'affichent pas
  bien
- **Proposition** : Générer un vrai set de favicons (16x16, 32x32, apple-touch-icon 180x180) à partir du logo existant
- **Solution** : Utiliser un générateur en ligne (realfavicongenerator.net) puis ajouter les balises dans
  `genererHead()`
- **Effort** : Faible | **Impact** : Aspect pro dans les onglets / favoris / écrans d'accueil mobile

### 18. Skeleton loading pour l'iframe PDF

- **Actuellement** : L'iframe du tableau de synthèse met du temps à charger et affiche un rectangle vide en attendant
- **Proposition** : Ajouter un placeholder animé (skeleton loading) avec un effet de pulsation grise qui disparaît une
  fois le PDF chargé
- **Solution** : Pseudo-élément `::before` avec `animation: pulse` sur `.pdf-container`, masqué via JS quand l'iframe
  émet `load`
- **Effort** : Faible | **Impact** : Perception de rapidité

### 19. Thème sombre — transition plus fluide

- **Actuellement** : `transition: background-color 0.3s, color 0.3s` sur `body` seulement. Les cards et éléments enfants
  changent de couleur instantanément
- **Proposition** : Ajouter `transition: background-color 0.3s, color 0.3s, border-color 0.3s` sur les éléments
  principaux (`.document-card`, `.card-accueil`, `.specialite-card`, `.contact-infos`, etc.)
- **Effort** : Faible | **Impact** : Le toggle jour/nuit devient visuellement satisfaisant

### 20. Print stylesheet (impression du CV / tableau de synthèse)

- **Proposition** : Ajouter un `@media print` qui masque header, footer, menu burger, bouton retour en haut, et optimise
  la mise en page pour l'impression
- **Solution** : Quelques règles dans `global.css` :
  `@media print { header, footer, .btn-retour-haut, .icon-menu { display: none; } main { margin: 0; } }`
- **Effort** : Très faible | **Impact** : Utile si un recruteur veut imprimer une page

### 21. Effet 3D tilt sur les cartes projets

- **Proposition** : Ajouter un effet de perspective 3D au survol des cartes projets (la carte s'incline légèrement dans
  la direction de la souris)
- **Solution** : JS léger qui écoute `mousemove` sur chaque `.card` et applique un
  `transform: perspective(800px) rotateX() rotateY()` dynamique
- **Effort** : Faible | **Impact** : Effet "wow" immédiat, très interactif

### 22. Tailles de police fluides avec clamp()

- **Actuellement** : Tailles de police fixes avec des breakpoints pour les réduire (`font-size: 3rem` puis `2.5rem` en
  tablette, `2rem` en mobile, etc.)
- **Proposition** : Remplacer par `clamp()` pour une adaptation continue sans breakpoints — ex :
  `font-size: clamp(1.8rem, 4vw, 3rem)`
- **Avantage** : Supprime des dizaines de lignes de media queries, la typo s'adapte parfaitement à toutes les tailles d'
  écran
- **Effort** : Faible | **Impact** : Responsive plus fluide, CSS plus propre

### 23. Détection automatique du thème système

- **Actuellement** : Le thème par défaut est clair, l'utilisateur doit cliquer pour passer en sombre
- **Proposition** : Détecter `prefers-color-scheme: dark` du système et appliquer automatiquement le thème sombre si
  l'utilisateur n'a pas encore fait de choix
- **Solution** : Dans `theme.js`, vérifier si `localStorage` a une préférence sauvegardée. Sinon, utiliser
  `window.matchMedia('(prefers-color-scheme: dark)').matches`
- **Effort** : Très faible | **Impact** : UX respectueuse des préférences utilisateur

### 24. Micro-interactions sur les icônes

- **Proposition** : Ajouter des animations subtiles au hover sur les icônes (bounce sur les icônes Font Awesome des
  headers, rotation légère sur les logos technos, scale sur les boutons réseaux sociaux)
- **Exemples** :
    - `.document-header i:hover { animation: bounce 0.4s; }`
    - `.card-competence:hover img { transform: rotate(5deg) scale(1.1); }`
- **Effort** : Très faible | **Impact** : Le site semble vivant et réactif

### 25. Animated underline sur les liens texte

- **Actuellement** : Les liens dans le texte n'ont pas de `text-decoration` (retiré globalement) — on ne voit pas
  toujours que c'est cliquable
- **Proposition** : Ajouter un underline animé qui se dessine de gauche à droite au hover (comme les onglets du menu,
  mais pour tous les liens dans le contenu)
- **Solution** :
  `a { background-image: linear-gradient(var(--primary-color), var(--primary-color)); background-size: 0% 2px; background-position: bottom left; background-repeat: no-repeat; transition: background-size 0.3s; }` +
  `a:hover { background-size: 100% 2px; }`
- **Effort** : Très faible | **Impact** : Lisibilité + interaction élégante

### 26. Header avec dégradé animé ou effet glassmorphism

- **Actuellement** : Header `background-color: #960000` uni
- **Propositions** (au choix) :
    - **Dégradé animé** :
      `background: linear-gradient(-45deg, #960000, #6b0000, #d30000, #960000); background-size: 300% 300%; animation: gradientShift 8s ease infinite;` —
      effet subtil de mouvement de couleur
    - **Glassmorphism** : `background: rgba(150, 0, 0, 0.85); backdrop-filter: blur(10px);` — le header devient
      semi-transparent et floute le contenu derrière
- **Effort** : Très faible | **Impact** : Le header passe de basique à marquant

### 27. Compteurs animés sur la page d'accueil

- **Proposition** : Ajouter une section avec des chiffres clés qui s'incrémentent à l'apparition au scroll (ex : "8
  projets", "15 certifications", "2 stages", "7 langages")
- **Solution** : `IntersectionObserver` + JS qui anime un compteur de 0 à la valeur cible avec `requestAnimationFrame`
- **Effort** : Faible | **Impact** : Crédibilité + dynamisme visuel

### 28. Open Graph images personnalisées par page

- **Actuellement** : Toutes les pages partagent la même image OG (le logo)
- **Proposition** : Créer une image de preview unique par page (titre + fond coloré + logo). Quand quelqu'un partage un
  lien sur LinkedIn/Slack, l'aperçu sera distinct et reconnaissable
- **Solution** : Créer 7-8 images 1200x630px (une par page) et mettre à jour les `<meta property="og:image">`
  correspondants
- **Effort** : Moyen | **Impact** : Visibilité sur les réseaux sociaux

### ~~29. Sitemap XML + robots.txt~~ (DEJA FAIT)

> `robots.txt` et `sitemap.xml` sont déjà en place à la racine du projet.

### 30. Données structurées JSON-LD

- **Proposition** : Ajouter un `<script type="application/ld+json">` sur la page d'accueil avec les informations de type
  `Person` (nom, métier, liens sociaux, portfolio URL)
- **Avantage** : Google peut afficher un "knowledge panel" enrichi dans les résultats de recherche
- **Effort** : Très faible | **Impact** : SEO avancé, aspect professionnel dans les résultats Google

### 31. Header qui rétrécit au scroll (shrink header)

- **Actuellement** : Header fixe à `height: 100px` en permanence, prend beaucoup de place
- **Proposition** : Réduire la hauteur du header à ~60px quand l'utilisateur a scrollé vers le bas (le logo et le texte
  rétrécissent proportionnellement)
- **Solution** : JS avec `window.scrollY > 50` qui ajoute une classe `.header-scrolled` + transitions CSS sur `height`,
  `padding`, `font-size`
- **Effort** : Faible | **Impact** : Plus d'espace pour le contenu + effet moderne

### 32. Boutons magnétiques (magnetic hover)

- **Proposition** : Les boutons principaux (CTA, télécharger CV, etc.) s'attirent légèrement vers le curseur quand la
  souris s'approche, comme un aimant
- **Solution** : JS qui calcule la distance entre le curseur et le centre du bouton, puis applique un léger `translate`
  proportionnel
- **Effort** : Faible | **Impact** : Interaction mémorable et ludique

### 33. Card flip sur les compétences

- **Proposition** : Les cartes compétences ont deux faces : recto (icône du langage) et verso (nom + courte description
  ou niveau). Au hover, la carte pivote en 3D
- **Solution** : Structure HTML avec `.card-front` / `.card-back` + CSS `transform: rotateY(180deg)` avec
  `backface-visibility: hidden`
- **Effort** : Faible | **Impact** : Interactivité + information supplémentaire

### 34. Séparateurs de sections animés (wave / curve)

- **Actuellement** : Les sections sont séparées par du vide ou des `<hr>` simples
- **Proposition** : Ajouter des SVG de vagues ou courbes entre les sections principales (comme le clip-path de la page
  documents mais en SVG pour plus de contrôle)
- **Solution** : SVG inline `<svg viewBox="0 0 1440 100">` avec un `<path>` en forme de vague, coloré avec
  `fill: var(--card-background)`
- **Effort** : Faible | **Impact** : Transitions visuelles fluides entre les blocs

### 35. Effet parallaxe léger sur certaines sections

- **Proposition** : Ajouter un effet de parallaxe subtil sur les sections hero (le fond se déplace moins vite que le
  contenu au scroll)
- **Solution** : CSS pur avec `background-attachment: fixed` (déjà utilisé sur la page veille) ou JS léger avec
  `transform: translateY(scrollY * 0.3)`
- **Attention** : Désactiver sur mobile (performances) avec `@media (hover: hover)`
- **Effort** : Faible | **Impact** : Profondeur visuelle

### 36. Texte qui se révèle lettre par lettre sur les titres

- **Actuellement** : Les titres apparaissent d'un bloc (fadeIn ou instantané)
- **Proposition** : Sur les pages clés (accueil, projets), le titre principal se révèle lettre par lettre ou mot par mot
  avec un stagger
- **Solution** : JS qui wrappe chaque lettre dans un `<span>` + CSS `opacity: 0` avec `animation-delay` incrémenté par
  lettre
- **Effort** : Faible | **Impact** : Entrée cinématique, très mémorable

### 37. Bouton "Copier l'email" sur la page contact

- **Actuellement** : L'email est un simple lien `mailto:`
- **Proposition** : Ajouter un petit bouton icône à côté de l'adresse email qui copie l'email dans le presse-papier avec
  un feedback visuel ("Copié !")
- **Solution** : `navigator.clipboard.writeText()` + tooltip temporaire qui apparaît 2 secondes
- **Effort** : Très faible | **Impact** : Pratique, évite d'ouvrir le client mail juste pour copier

### 38. Glow amplifié en mode sombre

- **Actuellement** : Le mode sombre change les couleurs mais les éléments restent visuellement identiques
- **Proposition** : En mode sombre, accentuer les effets lumineux : box-shadow rouge sur les boutons primaires, léger
  glow sur les titres, bordures avec lueur. Ça exploite le fait que les effets de lumière ressortent mieux sur fond noir
- **Solution** : `.dark-theme .btn-download { box-shadow: 0 0 15px rgba(150, 0, 0, 0.5); }` etc.
- **Effort** : Faible | **Impact** : Le mode sombre devient une vraie expérience, pas juste un négatif

### 39. Texture de grain/noise en arrière-plan

- **Proposition** : Ajouter une texture de grain très subtile sur le background global (comme les sites design
  modernes). Donne de la matière au lieu d'un aplat blanc/noir nu
- **Solution** : Petit SVG de noise en `background-image` avec faible opacité :
  `background-image: url("data:image/svg+xml,...")` ou image PNG 200x200 en repeat
- **Effort** : Très faible | **Impact** : Atmosphère et caractère

### 40. Hover preview sur les liens projets dans la timeline

- **Actuellement** : La timeline de la page À propos contient des liens vers les projets, mais on ne voit rien avant de
  cliquer
- **Proposition** : Au hover sur un lien projet dans la timeline, afficher une petite preview card (mini screenshot +
  titre) qui suit le curseur ou apparaît à côté
- **Solution** : `<div class="hover-preview">` caché par défaut, positionné en `position: fixed` au `mousemove`, rendu
  visible au hover sur les liens avec `data-preview`
- **Effort** : Moyen | **Impact** : Navigation exploratoire, effet impressionnant

### Ordre recommandé

| Priorité | Changement                               | Effort      | Impact                |
|----------|------------------------------------------|-------------|-----------------------|
| 1        | Typo Raleway dans global.css             | Faible      | Tout le site change   |
| 2        | Refonte accueil (hero + cards)           | Moyen       | Première impression   |
| 3        | Cards projets avec images/tags           | Moyen       | Page la plus visitée  |
| 4        | Cards compétences + labels               | Faible      | Clarté                |
| 5        | Etendre scroll-reveal a toutes les pages | Faible      | Dynamisme             |
| 6        | À propos (profil + timeline)             | Moyen       | Polish                |
| 7        | Lien actif dans la navigation            | Très faible | UX                    |
| 8        | Scrollbar personnalisée                  | Très faible | Cohérence             |
| 9        | Couleur de sélection + smooth scroll     | Très faible | Micro-détails         |
| 10       | Détection auto thème système             | Très faible | UX                    |
| 11       | Page Contact (inputs + bouton)           | Faible      | Finition              |
| 12       | Page Projet-détails (hero + badges)      | Moyen       | Qualité par projet    |
| 13       | Transitions entre pages                  | Faible      | Fluidité              |
| 14       | Page 404 (illustration + humour)         | Faible      | Personnalité          |
| 15       | Skip to content + print stylesheet       | Très faible | Accessibilité         |
| 16       | Veille — sommaire cliquable              | Faible      | Navigation            |
| 17       | Thème sombre — transitions fluides       | Faible      | Polish                |
| 18       | Favicon multi-format                     | Faible      | Pro                   |
| 19       | Skeleton loading PDF                     | Faible      | Perception rapidité   |
| 20       | Tailles fluides clamp()                  | Faible      | CSS propre            |
| 21       | Micro-interactions icônes                | Très faible | Vivacité              |
| 22       | Animated underline liens                 | Très faible | Lisibilité            |
| 23       | Header dégradé ou glassmorphism          | Très faible | Marquant              |
| 24       | Effet 3D tilt cartes projets             | Faible      | Wow                   |
| 25       | Compteurs animés accueil                 | Faible      | Crédibilité           |
| ~~26~~   | ~~Sitemap + robots.txt~~                 | DEJA FAIT   |                       |
| 27       | JSON-LD données structurées              | Très faible | SEO avancé            |
| 28       | Open Graph images par page               | Moyen       | Réseaux sociaux       |
| 29       | Header shrink au scroll                  | Faible      | Espace + moderne      |
| 30       | Boutons magnétiques                      | Faible      | Mémorable             |
| 31       | Card flip compétences                    | Faible      | Interactivité         |
| 32       | Séparateurs wave/curve                   | Faible      | Transitions visuelles |
| 33       | Texte révélé lettre par lettre           | Faible      | Cinématique           |
| 34       | Glow amplifié en mode sombre             | Faible      | Expérience dark mode  |
| 35       | Grain/noise en arrière-plan              | Très faible | Atmosphère            |
| 36       | Copier email (contact)                   | Très faible | Pratique              |
| 37       | Parallaxe léger                          | Faible      | Profondeur            |
| 38       | Hover preview projets (timeline)         | Moyen       | Impressionnant        |
| 39       | Curseur personnalisé                     | Très faible | Détail design         |
| 40       | Breadcrumbs sur sous-pages               | Très faible | Orientation           |
| 41       | Temps de lecture (veille)                | Très faible | Info utile            |
| 42       | Tooltip sur badges technos               | Faible      | Info contextuelle     |
| 43       | Loading screen au premier chargement     | Faible      | Première impression   |
| 44       | CSS container queries                    | Faible      | Responsive moderne    |
| 45       | Bordures gradient animées                | Très faible | Visuel                |
| 46       | Theme-color dynamique (meta)             | Très faible | Cohérence mobile      |
| 47       | Easter egg : mode daltonien              | Faible      | Accessibilité fun     |
| 48       | Carrousel auto-play (projet-details)     | Très faible | Dynamisme             |

### 41. Curseur personnalisé sur les éléments interactifs

- **Proposition** : Remplacer le curseur par défaut par un petit cercle rouge personnalisé sur les zones interactives (
  cartes, boutons). Le cercle grossit au hover sur les éléments cliquables
- **Solution** : CSS `cursor: none` sur les éléments + un `<div>` rond en `position: fixed` qui suit le `mousemove`. Ou
  plus simple : `cursor: url('data:image/svg+xml,...'), pointer` avec un SVG custom
- **Attention** : Désactiver sur mobile/tactile (`@media (hover: hover)`)
- **Effort** : Très faible (version CSS) à Faible (version JS) | **Impact** : Signature visuelle unique

### 42. Breadcrumbs sur les sous-pages

- **Actuellement** : Pas de fil d'Ariane, on ne sait pas toujours où on se situe dans le site
- **Proposition** : Ajouter un breadcrumb discret sous le header : `Accueil > Projets > Sio Shop`
- **Solution** : Généré dans `structure-globale.js` en se basant sur l'URL courante. Style : petite police, séparateur
  `/` ou `>`, lien sur les éléments parents
- **Effort** : Très faible | **Impact** : Orientation utilisateur, bonus SEO (Google affiche les breadcrumbs)

### 43. Temps de lecture estimé sur la page Veille

- **Actuellement** : La page veille est longue mais on ne sait pas à quoi s'attendre
- **Proposition** : Afficher "Temps de lecture : ~X min" sous le titre, calculé automatiquement (~200 mots/min)
- **Solution** : JS qui compte les mots dans `<main>` et divise par 200
- **Effort** : Très faible | **Impact** : L'utilisateur sait s'il a le temps de lire

### 44. Tooltips sur les badges technologies (projet-details)

- **Actuellement** : Les badges technos dans les détails projet montrent juste le nom + l'icône
- **Proposition** : Au hover, afficher un tooltip avec une courte description ("PHP — Langage back-end pour la logique
  serveur") ou le rôle dans le projet ("Utilisé pour le front-end")
- **Solution** : Attribut `data-tooltip` + pseudo-élément `::after` en CSS pur, ou petit JS pour positionner
- **Effort** : Faible | **Impact** : Information contextuelle pour les non-techniques

### 45. Loading screen au premier chargement

- **Proposition** : Écran de chargement branded (logo + animation) qui s'affiche brièvement (~0.5s) au premier
  chargement, puis fade out pour révéler la page
- **Solution** : `<div class="loader">` en haut du body, masqué via JS au `DOMContentLoaded`. Logo qui pulse ou barre de
  chargement
- **Attention** : Ne doit PAS ralentir le site. Durée max 0.8s, skip si le contenu est déjà prêt
- **Effort** : Faible | **Impact** : Transition propre, effet app native

### 46. CSS Container Queries pour les cards

- **Actuellement** : Les cards s'adaptent via des media queries sur la largeur du viewport
- **Proposition** : Utiliser `@container` pour que les cards s'adaptent en fonction de leur propre conteneur (pas du
  viewport). Plus flexible, notamment pour les cards dans différents contextes (grille 2 colonnes vs 1 colonne)
- **Solution** : `container-type: inline-size` sur le parent + `@container (max-width: 300px) { ... }` sur les cards
- **Effort** : Faible | **Impact** : Responsive plus intelligent, code CSS moderne

### 47. Bordures gradient animées sur les cards au hover

- **Proposition** : Au hover sur les cards principales, la bordure se transforme en dégradé animé (rouge → rouge foncé →
  rouge qui tourne)
- **Solution** : Technique du `background: conic-gradient(...)` sur un pseudo-élément `::before` avec
  `animation: rotate`. Le contenu de la card couvre le gradient sauf les bords
- **Effort** : Très faible | **Impact** : Effet visuel premium

### 48. Meta theme-color dynamique selon le thème

- **Actuellement** : `<meta name="theme-color" content="#a90000">` est statique (toujours rouge)
- **Proposition** : En mode sombre, la barre d'adresse du navigateur mobile devrait devenir noire/sombre au lieu de
  rester rouge
- **Solution** : Dans `theme.js`, mettre à jour `document.querySelector('meta[name="theme-color"]').content` quand le
  thème change (ex : `#1a0000` en dark, `#a90000` en light)
- **Effort** : Très faible | **Impact** : Cohérence visuelle sur mobile

### 49. Easter egg : mode daltonien / accessibilité amusante

- **Proposition** : Taper "a11y" au clavier active temporairement un mode haute accessibilité exagéré : tout passe en
  très gros, contrastes maximaux, focus visible géant, et un message humoristique "Mode ULTRA-accessible activé !"
- **Solution** : Ajouter dans `easter-egg.js` un nouveau mot-clé "a11y" qui applique une classe temporaire avec
  `font-size: 200%`, `outline: 5px solid red` partout, etc.
- **Effort** : Faible | **Impact** : Humour + sensibilisation à l'accessibilité

### 50. Carrousel auto-play avec pause au hover (projet-details)

- **Actuellement** : Le carrousel d'images des projets est manuel (clic sur les flèches/dots)
- **Proposition** : Ajouter un auto-play qui fait défiler les images toutes les 4 secondes, avec pause automatique quand
  la souris est dessus ou quand l'utilisateur interagit
- **Solution** : `setInterval` dans `projet-details.js` + `clearInterval` au `mouseenter` / clic sur les boutons
- **Effort** : Très faible | **Impact** : Les images sont vues même sans interaction

---

## Priorité basse (nice-to-have)

### Multilingue (FR/EN)

- **Effort** : Élevé
- **Solution** : Ajouter un toggle FR/EN dans le header. Stocker la préférence dans localStorage. Dupliquer le contenu
  texte en anglais (via un objet JS de traductions ou des fichiers HTML séparés).
- **Gain** : Accessibilité pour les recruteurs internationaux.

### Blog / Articles techniques

- **Effort** : Élevé
- **Solution** : Ajouter une section blog avec des articles techniques (tutoriels, retours d'expérience). Chaque article
  serait un fichier HTML dans un dossier `blog/`.
- **Gain** : Démontre l'expertise, améliore le SEO.

---

## Refusés / retirés

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