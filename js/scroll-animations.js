(function () {
    // ==============================
    // Animations au scroll (IntersectionObserver)
    // ==============================

    // Respecter prefers-reduced-motion : rendre les éléments visibles sans animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll(
            '.scroll-reveal, .timeline-item, .card-competence, .innovations, .comparatif, .card-container, .profil, .btn-cv, .projet-container .card, .qui-suis-je, .carte-apercu, .bandeau-competences'
        ).forEach(function (el) {
            el.classList.add('scroll-reveal', 'visible');
        });
        // Ne pas initialiser l'observer, passer directement au bouton retour en haut
    } else {

    const elementsAAnimer = document.querySelectorAll(
        '.scroll-reveal, .timeline-item, .card-competence, .innovations, .comparatif, .card-container, .profil, .btn-cv, .projet-container .card, .qui-suis-je, .carte-apercu, .bandeau-competences'
    );

    elementsAAnimer.forEach(el => {
        // Ne pas animer les éléments déjà visibles au chargement (au-dessus du fold)
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('scroll-reveal', 'visible');
        } else {
            el.classList.add('scroll-reveal');
        }
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
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
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
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
})();
