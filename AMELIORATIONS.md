# Améliorations et fonctionnalités proposées

Liste des améliorations et nouvelles fonctionnalités envisageables pour le portfolio.
Classées par priorité et effort estimé.

**Légende** : ❌ = amélioration refusée pour le moment

---

## Priorité basse (nice-to-have)

### 1. Multilingue (FR/EN)

- **Effort** : Élevé
- **Solution** : Ajouter un toggle FR/EN dans le header. Stocker la préférence dans localStorage. Dupliquer le contenu
  texte en anglais (via un objet JS de traductions ou des fichiers HTML séparés).
- **Gain** : Accessibilité pour les recruteurs internationaux.

### 2. Blog / Articles techniques

- **Effort** : Élevé
- **Solution** : Ajouter une section blog avec des articles techniques (tutoriels, retours d'expérience). Chaque article
  serait un fichier HTML dans un dossier `blog/`.
- **Gain** : Démontre l'expertise, améliore le SEO.

### 3. Easter egg / Page cachée

- **Effort** : Faible
- **Solution** : Ajouter un easter egg déclenché par une combinaison de touches (ex : Konami Code) ou un élément
  cliquable caché. Pourrait afficher une animation, un message humoristique ou une mini page "about the making of".
- **Gain** : Touche personnelle et fun.

---

## Refusées pour le moment

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

---

## Résumé par effort

| Effort | Améliorations     |
|--------|-------------------|
| Faible | Easter egg        |
| Élevé  | Multilingue, Blog |
