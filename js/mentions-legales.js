// ==============================
// mentions-legales.js
// Sommaire collant : surlignage de la rubrique en cours
// ==============================

// Version allégée du scroll-spy de veille.js : rien à déplier ici, et les ancres
// restent de vrais liens `#id` qui marchent sans ce script.

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

    // -120px pour le header fixe, -70% pour ignorer ce qui est loin sous le pli
    const observer = new IntersectionObserver(function (entrees) {
        if (choixClic || enBasDePage()) return;
        entrees.forEach(function (entree) {
            if (entree.isIntersecting) activer(entree.target.id);
        });
    }, {rootMargin: '-120px 0px -70% 0px', threshold: 0});

    cibles.forEach(function (cible) {
        observer.observe(cible);
    });

    // Les dernières rubriques, trop courtes, n'atteignent jamais la bande observée
    function enBasDePage() {
        return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    }

    // Après un clic dans le sommaire, le clic fait foi jusqu'à la fin du défilement
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
