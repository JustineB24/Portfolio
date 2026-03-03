# 🕵️ Audit du Code - Portfolio Justine BLIN

Ce document recense les points d'amélioration concernant la performance, la sécurité, les normes de code et la nomenclature (nommage) des fichiers et variables.

---

## 1. 📂 Structure et Nomenclature (Nommage)

### Dossiers et Fichiers

**Constat actuel :** Mélange de majuscules/minuscules (`HTML`, `CSS`, `Images`) et de styles de nommage (`menuBurger.js` en camelCase, `portfolio_style.css` en snake_case).
**Problème :** Les serveurs Linux (utilisés par la plupart des hébergeurs web) sont sensibles à la casse. `Images/logo.png` n'est pas la même chose que `images/logo.png`.

**✅ Recommandations (Standard Web : Kebab-case et minuscules) :**

| Statut | Type | Nom Actuel / Vu | Nom Recommandé | Pourquoi ? |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | **Dossier** | `HTML/` | `pages/` | Plus explicite, tout en minuscules. |
| [x] | **Dossier** | `css/` | `css/` | **Corrigé** (vu dans l'analyse). |
| [x] | **Dossier** | `js/` | `js/` | **Corrigé** (vu dans l'analyse). |
| [ ] | **Dossier** | `Images/` | `assets/` | `assets` est plus pro. |
| [ ] | **Fichier** | `layout.js` | `structure-globale.js` | Français, décrit qu'il gère le header/footer. |
| [ ] | **Fichier** | `menuBurger.js` | `menu-burger.js` | Kebab-case pour les fichiers. |
| [x] | **Fichier** | `style.css` | `style.css` | **Corrigé** (Renommé). |
| [x] | **Fichier** | `competences.css` | `competences.css` | **Valide** (Kebab-case). |
| [x] | **Fichier** | `projet-details.js` | `projet-details.js` | **Valide** (Kebab-case). |

### Variables et Fonctions JavaScript

**Norme recommandée :**

* **Variables et Fonctions :** `camelCase` (ex: `maVariable`, `calculerPrix`).
* **Classes :** `PascalCase` (ex: `RotationTexte`).
* **Constantes globales :** `UPPER_SNAKE_CASE` (ex: `MAX_ITEMS`).

| Statut | Fichier | Nom Actuel | Nouveau Nom Suggéré |
| :---: | :--- | :--- | :--- |
| [ ] | `layout.js` | `basePath` | `cheminRelatif` |
| [ ] | `layout.js` | `generateHeader` | `genererEntete` |
| [x] | `certifications.js` | `ouvrirModale` | `ouvrirModale` |
| [ ] | `certifications.js` | `images` (var global) | `toutesLesCertifications` |
| [ ] | `projet-details.js` | `projetId` | `idProjet` |

---

## 2. 🧹 Qualité du Code (Clean Code)

### JavaScript

1. [ ] **Supprimer `var` :** Dans `certifications.js`, les `var` sont toujours présents (ex: `var images`, `var currentIndex`).
    * Utilisez `const` pour ce qui ne change pas.
    * Utilisez `let` pour ce qui change (compteurs, index).
    * *Pourquoi ?* `var` a une portée de fonction qui peut causer des bugs, `let/const` ont une portée de bloc (plus sûr).

2. [ ] **Séparation HTML / JS :**
    * **Problème :** Dans `competences.html`, vous avez `onclick="openModal(this)"`.
    * **Solution :** Ajoutez des écouteurs d'événements (`addEventListener`) directement dans le fichier JS. Cela garde le HTML propre.

3. [x] **Commentaires :**
    * Vos commentaires sont présents, c'est très bien. Essayez de commenter le "Pourquoi" plutôt que le "Comment" (le code explique déjà le comment).

### CSS

1. [ ] **Variables CSS :** Dans `competences.css`, les couleurs comme `#960000` ou `#f16529` sont en dur.
    * *Conseil :* Définissez `:root { --couleur-primaire: #960000; }` dans votre fichier CSS global et utilisez `var(--couleur-primaire)` partout.

---

## 3. 🚀 Performance

1. [ ] **Format des images :**
    * Actuellement : `.png` et `.jpg`.
    * Recommandation : Convertir en **WebP**. Ce format est beaucoup plus léger (30% à 50% de gain) pour une qualité identique.

2. [ ] **Chargement des scripts :**
    * L'injection du Header/Footer via JS (`layout.js`) est pratique pour le développement sans serveur, mais elle retarde légèrement l'affichage du menu (le navigateur doit télécharger le JS, l'exécuter, puis créer le HTML).
    * *Amélioration :* Ajoutez l'attribut `defer` à vos scripts dans le `<head>` ou placez-les juste avant la fermeture du `</body>` (ce que vous faites déjà en partie via `genererFooter`, c'est bien).

3. [ ] **Lazy Loading :**
    * Vous utilisez `loading="lazy"` sur les images de certifications. **C'est parfait !** Continuez ainsi.

---

## 4. 🔒 Sécurité

1. [ ] **Liens externes (`target="_blank"`) :**
    * Quand vous ouvrez un lien dans un nouvel onglet (LinkedIn, GitHub), ajoutez toujours `rel="noopener noreferrer"`.
    * **Lieu :** `projet-details.js` (ligne 147 : `linkElement.target = "_blank";`).
    * *Correction :* Ajouter `linkElement.rel = "noopener noreferrer";`.

2. [x] **Injection HTML (`innerHTML`) :**
    * Dans `projet-details.js` et `layout.js`, vous utilisez `innerHTML` ou `insertAdjacentHTML`.
    * *Analyse :* Vous utilisez correctement `innerText` pour le titre et la description. L'usage de `innerHTML` pour vider les listes (`techList.innerHTML = ""`) est sûr.
    * *Note :* Continuez à privilégier `innerText` ou `textContent` pour le texte.

---

## 5. 📝 Exemple de Refactorisation (Avant / Après)

### Exemple sur `certifications.js`

**Avant (Actuel) :**

```javascript
var images = document.querySelectorAll(".gallery .certif");
var currentIndex = 0;

function openModal(img) {
    // ... code ...
}
// HTML : <img onclick="openModal(this)">
```

**Après (Recommandé) :**

```javascript
// Utilisation de const
const toutesLesCertifications = document.querySelectorAll(".gallery .certif");
let indexActuel = 0; // Utilisation de let car ça change

// Fonction fléchée (syntaxe moderne)
const ouvrirModale = (imageSource) => {
    const modale = document.getElementById("zoom-modal");
    // ... logique ...
};

// Ajout des événements en JS (plus propre)
toutesLesCertifications.forEach((image, index) => {
    image.addEventListener('click', () => {
        indexActuel = index;
        ouvrirModale(image.src);
    });
});
```

---

## ✅ Plan d'action suggéré

* [x] **Renommer** les dossiers en minuscules (`html` -> `pages`, `css`, `js`, `img`).
* [x] **Renommer** `_style.css` en `style.css`.
* [ ] **Nettoyer** le JavaScript : remplacer les `var` par `const/let`.
* [ ] **Sécuriser** les liens externes avec `rel="noopener noreferrer"`.
* [ ] **Optimiser** les images en WebP.
