// ==============================
// mentions-legales.js — Sommaire collant : surlignage de la rubrique en cours
// ==============================

// Version réduite du scroll-spy de `veille.js` : ici le sommaire ne déplie rien
// et ne déplace aucun nœud, il ne fait que suivre la lecture. Les ancres elles-
// mêmes sont de vrais liens `#id`, donc la page reste navigable sans ce script.

(function () {
    const sommaire = document.querySelector('.ml-sommaire');
    if (!sommaire || !('IntersectionObserver' in window)) return;

    const liens = Array.from(sommaire.querySelectorAll('a[href^="#"]'));
    const parId = {};
    liens.forEach(function (lien) {
        parId[lien.getAttribute('href').slice(1)] = lien;
    });

    const cibles = liens
        .map(function (lien) {
            return document.getElementById(lien.getAttribute('href').slice(1));
        })
        .filter(Boolean);

    // `-120px` en haut correspond au header fixe, comme le `scroll-margin-top`
    // global ; `-70%` en bas empêche qu'une rubrique déjà loin sous le pli soit
    // considérée comme celle qu'on lit.
    function activer(id) {
        liens.forEach(function (lien) {
            lien.classList.remove('active');
            lien.removeAttribute('aria-current');
        });
        const lien = parId[id];
        if (lien) {
            lien.classList.add('active');
            lien.setAttribute('aria-current', 'true');
        }
    }

    const observer = new IntersectionObserver(function (entrees) {
        if (choixClic || enBasDePage()) return;
        entrees.forEach(function (entree) {
            if (entree.isIntersecting) activer(entree.target.id);
        });
    }, {rootMargin: '-120px 0px -70% 0px', threshold: 0});

    cibles.forEach(function (cible) {
        observer.observe(cible);
    });

    // Les dernières rubriques sont trop courtes pour remonter jusqu'à la bande
    // observée : la page bute en bas avant. Sans ce relais, cliquer sur la
    // dernière entrée du sommaire laissait l'avant-dernière surlignée.
    function enBasDePage() {
        return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    }

    // Le bas de page ne dit pas laquelle des dernières rubriques on a demandée :
    // après un clic dans le sommaire, c'est le clic qui fait foi, jusqu'à ce
    // que le défilement qu'il a provoqué s'arrête.
    let choixClic = null;
    let minuterie = null;

    liens.forEach(function (lien) {
        lien.addEventListener('click', function () {
            choixClic = lien.getAttribute('href').slice(1);
            activer(choixClic);
            // Si la rubrique est déjà à l'écran, aucun défilement ne libère le verrou
            clearTimeout(minuterie);
            minuterie = setTimeout(function () { choixClic = null; }, 150);
        });
    });

    window.addEventListener('scroll', function () {
        clearTimeout(minuterie);
        if (choixClic) {
            minuterie = setTimeout(function () { choixClic = null; }, 150);
            return;
        }
        if (enBasDePage() && cibles.length) activer(cibles[cibles.length - 1].id);
    }, {passive: true});
})();
