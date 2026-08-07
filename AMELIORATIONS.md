# Améliorations, fonctionnalités et easter eggs

Liste complète des améliorations, fonctionnalités et easter eggs du portfolio.

**Légende** : ✅ = En place | ❌ = Refusé / retiré

---

## Améliorations à faire

_Aucune amélioration en attente._

---

## ✅ Améliorations en place

### ✅ 1. Typographie Inter + Raleway (global)

- **Inter** pour le corps de texte, **Raleway** pour les titres et la navbar, via les variables `--font-corps` et
  `--font-titre` (plus de `@import` Google Fonts)
- **Polices self-hébergées** (woff2 latin + latin-ext) dans `assets/fonts/google/` avec un `fonts.css` local — aucun
  appel à Google Fonts (conformité RGPD)
- **Titres `h1`, `h2`, `h3`** : `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: 2px`
- **`h4`** : `font-weight: 700`

### ✅ 2. Refonte page d'accueil

- **Hero plein écran** (`min-height: 100vh`) avec gradient radial rouge subtil, logo centré agrandi (`12rem`) avec
  animation scale-in + drop-shadow
- **Texte rotatif** repositionné en dessous du logo (flex column), apparition fade-up
- **Flèche animée** "Explorer" en bas du hero (ancre `#contenu`, bounce infini sur le chevron)
- **Compteurs animés** : 4 mini-cards carrées (150×150px) avec icônes (Projets, Certifications, Outils, Langages), liens
  cliquables vers les pages dédiées, animation IntersectionObserver + requestAnimationFrame
- **Section "Qui suis-je"** : texte de présentation centré + boutons CV et "En savoir plus" empilés
- **Aperçu projets** : grille de 4 cartes avec contour coloré par projet (même couleurs que la page projets), trait
  séparateur coloré sous le titre, tags en pills avec fond `--background-color`
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

_Refaite entièrement le 06/08/2026. Les cartes retournables 3D décrites ici auparavant ont été supprimées :
leur description n'était atteignable ni au tactile ni au clavier, aucune carte ne contenant d'élément
focusable, donc 32 descriptions étaient invisibles sur téléphone._

- **Trois blocs** : Technologies, Outils, Certifications, séparés par des `<hr>` pointillés
- **22 technologies en 4 familles** : langages, frameworks et bibliothèques, bases de données,
  environnements et conteneurs. Classement par famille technique et non par usage réel
- **14 outils à part** : un éditeur ou un client d'API ne se compare pas à un langage
- **Rien n'est caché** : le nom et la description sont du texte visible, en permanence
- **Accent de marque** : filet gauche de 3px coloré par `--tech-filet`. Les couleurs ont migré le 07/08 dans
  `css/technos.css`, source unique partagée avec les pastilles des projets (voir l'entrée 51)
- **15 certifications en liste unique**, groupées par organisme du plus au moins reconnu, puis par date.
  Pas de mise en avant ni de section « autres parcours » : l'ordre porte seul la hiérarchie
- **Métadonnées complètes** pour chaque certification : organisme, intitulé, date, détail (centre, score,
  durée, identifiant) et lien de vérification quand il existe
- **En-tête de section centré** (eyebrow, titre, intro), **contenu aligné à gauche** sur le bord des cartes
- **Échelle de titres** : `h1` 48px, `h2` 25,6px, `h3` 19,2px, nom de techno 16px
- **Modale** : la vignette garde la classe `.certif`, contrat sur lequel `certifications.js` s'appuie

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

- **Restructuration complète** via un nouveau `js/veille.js`
- **Sommaire latéral collant** (sticky) pleine hauteur à gauche, avec **scroll-spy** : le lien de la section courante
  est surligné (état actif rouge, cercles numérotés) et la liste défile pour le suivre
- **Sections repliables** (accordéon, dépliées par défaut, titres alignés à gauche avec chevron) ; "Qu'est-ce que c'est"
  est devenue la 1re section repliable (logo inclus)
- **Colonne de lecture** : paragraphes alignés à gauche, `max-width: 720px`, `line-height: 1.7` (au lieu de centrés
  pleine largeur)
- **Correction technique** : `overflow-x: hidden` déplacé de `body` vers `html` (réparait le sticky)
- **Corrections factuelles** : tableau Concurrents (ODROID série H en x86, Banana Pi certains modèles 10G, Jetson
  jusqu'à 67 TOPS ex. Orin Nano), GASPACS (université d'État de l'Utah, Raspberry Pi Zero), phrase Sony reformulée, lien
  "Satellite" → cubesatsim.org (AMSAT)
- **Titres h2** : `border-bottom` gradient rouge → noir (spécifique à la page veille)
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


### ✅ 26. Transitions de page

- Animation `pageIn` (fade-in + translateY) au chargement
- Classe `page-exit` avec `pageOut` avant navigation (délai 250ms)

### ✅ 27. Container queries

- `container-type: inline-size` sur `.projet-container` et `.card-container`
- `@container (max-width: 400px)` pour adaptation fine

### ✅ 28. Styles d'impression

- `@media print` masquant header, footer et éléments interactifs

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

### ✅ 38. Polices self-hébergées (RGPD)

- **Inter + Raleway** téléchargées en local (woff2 latin + latin-ext) dans `assets/fonts/google/` avec un `fonts.css`
  local — plus aucun appel à Google Fonts
- **Font Awesome 6.7.2** (version stable) self-hébergé dans `assets/fonts/fa/` (`css/all.min.css` + webfonts
  solid/brands) — plus de CDN cdnjs, plus de `preconnect`, plus de version beta3
- `structure-globale.js` charge les CSS locaux ; conformité RGPD (aucune requête tierce)

### ✅ 39. Thème adouci (couleurs cassées)

- Plus de blanc/noir purs : clair fond `#fafafa` / texte `#1a1a1a` / card `#e8eaf1` (gris légèrement froid) ; sombre
  fond `#121212` / texte `#e6e6e6` / card `#23242b`
- **`--text-muted`** (`#595959` clair / `#9e9e9e` sombre, conforme WCAG AA) pour les textes secondaires
- **`--header-text-color`** (`#fafafa`) : le texte du header rouge (titre, onglets, burger, icônes réseaux) ne s'inverse
  jamais entre les thèmes
- Variables `--font-titre` (Raleway) et `--font-corps` (Inter)
- Bug `theme.js` corrigé (`const body = document.body`) ; `.dark-theme` posé sur `<html>` ET `<body>`

### ✅ 40. Accessibilité renforcée

- `--text-muted` (WCAG AA) remplace les `opacity` 0.55/0.6 sur les textes secondaires (labels contact, note champs
  obligatoires, "session 2025")
- Cartes projets : `role="button"` → `role="link"` (navigation)
- `aria-hidden` ajouté sur l'icône flèche retour de projet-details
- Texte du header non inversé (lisibilité garantie dans les deux thèmes)

### ✅ 41. Page Documents / BTS — aperçu image

- L'aperçu PDF (iframe pdf.js) a été remplacé par une **image statique cliquable**
  (`assets/bts/apercu-tableau-synthese.png`) qui ouvre le PDF
- Carte description et aperçu **fusionnés** en une seule carte 2 colonnes
- `js/documents.js` supprimé ; styles `.pdf-skeleton` / `.pdf-container` et keyframe `skeleton-shimmer` retirés de
  `global.css` (pdf.js n'est plus utilisé)

### ✅ 42. Profil / accueil intemporels

- Profil de la page À propos, bloc "Qui suis-je" de l'accueil (enrichi), meta description + og:description et JSON-LD
  rendus intemporels (plus de mention d'une formation précise) — plus besoin de les modifier à chaque changement
  d'études

### ✅ 43. Page Projets — tri et dates

- Projets réordonnés du plus récent au plus ancien
- Dates corrigées (Générateur de mots de passe = "Septembre 2024", Application météo = "Septembre — Octobre 2024",
  YABT = "Novembre 2025 — en cours")
- YABT affiché en entier "Yet Another Blind Test" sur les cartes ; "un stage" → "le/du stage"

### ✅ 44. Marquee accueil — pause + nom au survol

- Le bandeau des technos se met en pause au survol et affiche le nom de la techno sous le logo (`interactions.js` +
  `.techno-item`)

---

### ✅ 45. Composants partagés extraits (06/08/2026)

Cinq motifs qui étaient recopiés de feuille en feuille, remontés dans `global.css` après mesure. Les
duplications sont chiffrées dans les messages de commit correspondants.

- **Boutons** : socle `.btn` + variantes `.btn-primaire`, `.btn-secondaire`, `.btn-neutre`. Le même bouton
  était écrit 7 fois dans 6 feuilles sous 7 noms, pour 388 lignes et 62 règles, ramenées à 32
- **Liens de contenu** : un seul traitement pour tout le site, rouge sans soulignement au repos, souligné au
  survol **et au focus clavier**. Il y avait 4 traitements différents, et tout lien non prévu retombait sur
  le bleu du navigateur
- **Échelle de texte** : `--texte-xs` à `--texte-xl`, cinq échelons de 0,05rem qui remplacent 13 valeurs
  distinctes sous 1rem réparties sur 84 usages
- **Survol des cartes** : `--carte-levee` et `--transition-carte`. Sept cartes montaient de 6, 5 ou 3px sur
  des durées de 0,3 à 0,4s, moitié avec la courbe du site et moitié sans
- **Jeton `--radius-pill`** : huit badges se partageaient `2rem` et `100px` pour la même intention
- **Séparateurs `<hr>` et contenu masqué aux voyants** : trois copies chacun, réunies

_Écarté après mesure : un composant `.carte`. Sur les 21 blocs à fond de carte, aucune déclaration n'est
commune aux 21 et `padding` compte 16 valeurs pour 16 blocs. Le seul point commun réel est déjà un jeton._

### ✅ 46. Douzième projet : Flouflix (06/08/2026)

- Application mobile React Native / Expo Go sur l'API TVmaze, faite à deux en deux jours
- **La consigne était de produire volontairement la pire interface possible** : le titre de la fiche l'assume,
  « concevoir la pire interface possible ». C'était la condition pour la publier
- Résout le dernier écart entre les technologies annoncées et les projets montrés : React Native et Expo
  étaient listés sans aucun projet

### ✅ 47. Fiches projet remises d'aplomb (06/08/2026)

Quatre corrections d'écarts entre ce qu'une fiche annonçait et ce que le projet contenait, dans les deux sens.

- **Mairie de Cauffry** sur-annonçait : « site réalisé » avec HTML et CSS déclarés, alors que le site est un
  WordPress de l'Adico et que le travail a porté sur le contenu. La fiche dit maintenant « je n'en ai pas
  écrit le code »
- **France Mobilier** déclarait C# : 41 fichiers PHP, aucun fichier C#, retiré
- **Panada Food** : la version PHP avec base de données trouvée dans le dossier de stage est un prototype de
  commande en ligne jamais abouti, pas le site livré. Technologies laissées à HTML, CSS, JavaScript, et le
  prototype raconté comme une piste non terminée
- **Python** : la description promettait « scripts et automatisation » sans rien pour l'appuyer. Elle devient
  « algorithmique, en cours de mathématiques », ce que montrent les 600 lignes écrites en première année

### ✅ 48. Images de partage par page (05/08/2026, corrigé le 07/08)

Longtemps classé « non réalisable sans outil dédié ». Il l'était : `assets/og/generateur.html` est une page qui
compose la carte en HTML, capturée ensuite en 1200x630. Dix cartes, une par page.

- Un dictionnaire `CARTES` porte eyebrow, titre, accroche et icône de chaque page, et son en-tête rappelle qu'une
  image ne suit pas les modifications des pages : corriger le dictionnaire **puis** régénérer
- **Par projet, c'est impossible en statique** : les douze projets partagent un seul `projet-details.html`, et
  LinkedIn ne lit pas le HTML modifié par JavaScript. Le JS pose quand même la première capture en `og:image`,
  utile aux robots qui exécutent le JS
- Le 07/08, la carte de Compétences a été régénérée : elle annonçait « où le voir en projet » alors que les liens
  de preuve avaient été retirés de la page la veille

### ✅ 49. Fiches projet : Gecko n'est plus « en cours de développement » (07/08/2026)

- C'est un ERP **en production depuis 2021**, utilisé par 350 personnes. Le badge dit « En production »
- La description est rééquilibrée : le support était noyé dans une liste de développements, il passe devant
- Un champ `statut` porte le libellé quand il diffère ; `enCours` reste pour YABT et le Grimoire
- La classe `.badge-en-cours` devient `.badge-statut`, le nom devenant faux dès qu'un badge dit autre chose
- **YABT** : le contexte s'ouvre désormais sur la passion pour la musique, qui explique le choix du sujet

### ✅ 50. Bandeaux des fiches projet : 14 échecs de contraste fermés (07/08/2026)

Le texte du bandeau est clair et fixe, la couleur du dégradé vient du projet : quand elle est claire, ça casse.
Jusqu'à **2,38:1** sur le bouton « Retour ».

- Un voile calculé sur tout le bandeau a d'abord été posé, puis **retiré** : il assombrissait les couleurs de
  projet, le jaune de YABT virant à l'ocre
- Le fond sombre est finalement posé **sous les petits textes seulement**, à 45 %, ce qui laisse le dégradé
  strictement intact. 13 échecs sur 14 réglés
- Le dernier, le titre du Générateur de MDP à 2,87:1, a demandé d'assombrir la couleur du projet de 15 %.
  Couleur décorative d'un exercice de BTS, pas une marque
- `opacity: 0.92` retiré de la date : griser du texte par l'opacité abaisse le contraste

### ✅ 51. `technos.css`, source unique des couleurs de technos (07/08/2026)

Trois feuilles déclaraient chacune leur version de la même palette, et elles avaient divergé sur **neuf technos**.

- Une techno = la couleur de son **logo**, mesurée en comptant les pixels du SVG après rendu. Cinq déclarations
  divergeaient de leur propre logo (HTML, CSS, Bootstrap, Git, GitLab)
- Trois jetons par techno et par thème, parce que la même couleur sert à des usages de seuils différents :
  `--tech-brut` (fond de pastille à 15 %), `--tech-libelle` (texte, 4,5:1) et `--tech-filet` (filet de 3px, 3:1)
- Le fond teinté est ce qui sauve les marques pâles : le jaune JavaScript est à 1,13:1 en texte sur une carte
  claire, mais reste parfaitement identifiable en fond à 15 %
- **20 filets sur 36 passaient sous 3:1** dans un thème avant ce calcul

### ✅ 52. Menu burger refait (07/08/2026)

- Le panneau prenait `--button-background-color`, qui **s'inverse à contre-courant du thème** : noir en thème
  clair, blanc en thème sombre. C'était la cause du pire échec de contraste du site, l'onglet de la page courante
  à **1,90:1**. Il suit maintenant `--background-color`, ce qui supprime l'anomalie au lieu de la documenter
- Libellés alignés à gauche : sept libellés centrés de longueurs différentes n'ont aucun bord commun
- **Chevron « › » sur la page courante**, repris du logo ‹JB/›, plus `aria-current="page"` : la page courante ne
  doit pas être signalée par la seule couleur (WCAG 1.4.1)
- Le tiers bas, qui restait vide, reçoit le CV, seule chose que les sept liens ne donnent pas
- Header resserré : le burger ne maigrissait pas avec le reste au palier ≤360px et chevauchait le logo

### ✅ 53. Derniers échecs WCAG et cibles tactiles (07/08/2026)

- **Badge de statut des cartes** : son texte était un `color-mix` à 50 % qui ne garantissait aucun seuil. Dix
  cartes sur onze passaient par chance. Ramené à 35 %, le dosage le plus fort qui tienne pour n'importe quel accent
- **Puces de carrousel** : 12x12px avec 8px d'écart, soit 20px utiles contre 24 exigés. La puce visible descend
  dans un `::before`, le bouton devient la cible. `flex-wrap` indispensable, seize puces de 24px dépassant la
  largeur d'un téléphone
- Deux défauts trouvés en corrigeant : l'**indicateur d'image courante** était à 2:1 environ dans les deux
  galeries, et la **galerie de certifications avait ses propres puces**, que Lighthouse ne voyait pas puisque la
  modale est fermée pendant l'audit
- `alt` **redondant** sur les logos techno, `src=""` de la modale de zoom, et le logo de la veille qui était à la
  fois élément LCP et en `loading="lazy"`
- **Nettoyage des modales d'easter egg** : il ne passait que par `transitionend`. Si l'évènement ne se déclenchait
  pas, la modale restait à l'écran et le verrou bloquait tous les autres easter eggs pour le reste de la visite

### ✅ 54. JSON-LD enrichi (07/08/2026)

L'accueil ne déclarait qu'un `Person` à six propriétés ; tout le reste du site n'existait que sous forme de texte à
interpréter. Il en compte quatorze.

- `knowsAbout` : les 22 technologies et 14 outils de la page Compétences
- `hasCredential` : le BTS SIO puis les 15 attestations, chacune rattachée à son organisme
- `alumniOf`, `worksFor`, `address`, `knowsLanguage`
- **Généré depuis les pages elles-mêmes**, pas ressaisi : une liste recopiée aurait divergé au premier ajout
- 4,7 ko une fois compressé, le JSON-LD étant très répétitif

## ✅ Easter eggs actifs

### Konami Code

- **Déclencheur** : Taper ↑ ↑ ↓ ↓ ← → ← → B A au clavier
- **Effet** : Glitch visuel (hue-rotate + tremblement) suivi d'une notification "Achievement Unlocked" style arcade avec
  trophée animé, barre de progression et disparition automatique après 4 secondes

### Mode terminal

- **Déclencheur** : Taper "terminal" au clavier
- **Effet** : Fond noir, texte vert monospace, curseur clignotant (6 secondes)

### Big Bang temporel

- **Déclencheur** : Cliquer sur l'année dans le footer
- **Effet** : L'année recule jusqu'à 0 avec accélération + tremblement, explosion de particules (flash + 30 symboles
  projetés), emoji 💥, puis remontée rapide vers l'année actuelle avec modale "Big Bang temporel !"

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

### Mode 90's

- **Déclencheur** : Taper "90s" au clavier
- **Effet** : Le site prend un look rétro GeoCities : Comic Sans, couleurs criardes, header arc-en-ciel, texte défilant
  en bas de page (8 secondes)

### Secouer le téléphone (mobile)

- **Déclencheur** : Secouer le téléphone 3 fois (uniquement sur appareils tactiles, `pointer: coarse`)
- **Effet** : Lance l'easter egg arc-en-ciel (rainbow)

### Fonction `easterEggs()` dans la console

- **Déclencheur** : Taper `easterEggs()` dans la console
- **Effet** : Affiche un tableau listant tous les easter eggs avec leur déclencheur et description

---

## ❌ Refusés / retirés

### ❌ Mode disco (easter egg)

- **Solution** : Taper "disco" au clavier pour faire changer le fond de couleur en boucle et faire rebondir les
  éléments.
- **Gain** : Effet visuel fun.
- **Raison du retrait** : Risque d'épilepsie (flashs colorés rapides) et pas esthétique.

### ❌ Barrel Roll (easter egg)

- **Solution** : Taper "roll" au clavier pour faire pivoter le site de 360°.
- **Gain** : Clin d'œil à l'easter egg Google.
- **Raison du retrait** : Jugé superflu.

### ❌ Mode présentation (easter egg)

- **Solution** : Taper "present" au clavier pour transformer les sections en slides plein écran navigables.
- **Gain** : Mode démonstration du portfolio.
- **Raison du retrait** : Jugé superflu.

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
- **Raison du refus** : On ne maîtrise jamais une techno à 100%, la distinction n'a pas de sens. Demanderait des mises à
  jour fréquentes.

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
