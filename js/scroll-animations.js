// ==============================
// scroll-animations.js — Animations au scroll (IntersectionObserver) + bouton retour en haut
// ==============================

(function () {
    // ==============================
    // Animations au scroll (IntersectionObserver)
    // ==============================

    // NodeList extraite une seule fois et partagée entre les deux branches
    const elementsAAnimer = document.querySelectorAll(
        '.scroll-reveal, .timeline-item, .card-competence, .innovations, .comparatif, .card-container, .profil, .btn-cv, .projet-container .card, .qui-suis-je, .carte-apercu, .bandeau-competences'
    );

    // Respecter prefers-reduced-motion : rendre les éléments visibles sans animation
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elementsAAnimer.forEach(function (el) {
            el.classList.add('scroll-reveal', 'visible');
        });
        // Ne pas initialiser l'observer, passer directement au bouton retour en haut
    } else {

        // L'observer gère l'état initial : il se déclenche dès l'observation pour
        // les éléments déjà visibles au chargement, inutile d'appeler
        // getBoundingClientRect() en boucle.
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

    } // fin du else (prefers-reduced-motion)

    // ==============================
    // Bouton "Retour en haut"
    // ==============================

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
