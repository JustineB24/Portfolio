// ==============================
// scroll-animations.js
// Animations au scroll (IntersectionObserver) + bouton retour en haut
// ==============================

(function () {
    // ----- Révélation au défilement -----

    const elementsAAnimer = document.querySelectorAll(
        '.scroll-reveal, .timeline-item, .card-competence, .innovations, .comparatif, .card-container, .profil, .btn-cv, .projet-container .card, .qui-suis-je, .carte-apercu, .bandeau-competences'
    );

    // Sans animation (reduced-motion ou vieux navigateur), tout est visible d'emblée
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elementsAAnimer.forEach(function (el) {
            el.classList.add('scroll-reveal', 'visible');
        });
    } else {

        // Pas besoin de tester la position au chargement : l'observer se déclenche
        // tout de suite pour les éléments déjà visibles.
        elementsAAnimer.forEach(el => {
            el.classList.add('scroll-reveal');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        elementsAAnimer.forEach(el => {
            observer.observe(el);
        });

    }

    // ----- Bouton retour en haut -----

    const btnRetourHaut = document.createElement('button');
    btnRetourHaut.classList.add('btn-retour-haut');
    btnRetourHaut.setAttribute('aria-label', 'Retour en haut de la page');
    btnRetourHaut.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(btnRetourHaut);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnRetourHaut.classList.add('visible');
        } else {
            btnRetourHaut.classList.remove('visible');
        }
    }, {passive: true});

    btnRetourHaut.addEventListener('click', () => {
        const mvtReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({top: 0, behavior: mvtReduit ? 'auto' : 'smooth'});
    });
})();
