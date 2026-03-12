// ==============================
// Compteurs animés (page d'accueil)
// ==============================

(function () {
    const compteurs = document.querySelectorAll('.compteur');
    if (!compteurs.length) return;

    function animerCompteur(el) {
        const nombre = el.querySelector('.compteur-nombre');
        const objectif = parseInt(el.dataset.target, 10);
        const duree = 1500;
        const debut = performance.now();

        function mettreAJour(now) {
            const progression = Math.min((now - debut) / duree, 1);
            // Ease-out
            const courbe = 1 - Math.pow(1 - progression, 3);
            nombre.textContent = Math.round(objectif * courbe);
            if (progression < 1) requestAnimationFrame(mettreAJour);
        }

        requestAnimationFrame(mettreAJour);
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animerCompteur(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});

    compteurs.forEach(function (c) {
        observer.observe(c);
    });
})();


// ==============================
// Boutons magnétiques
// ==============================

(function () {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const boutons = document.querySelectorAll('.btn-download, .btn-cv, .btn-envoyer, .btn-accueil');

    boutons.forEach(function (bouton) {
        bouton.addEventListener('mousemove', function (e) {
            const rect = bouton.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            bouton.style.transform = 'translate(' + x * 0.15 + 'px, ' + y * 0.15 + 'px) translateY(-2px)';
        });

        bouton.addEventListener('mouseleave', function () {
            bouton.style.transform = '';
        });
    });
})();

// ==============================
// Micro-interactions sur les icônes
// ==============================

(function () {
    // Bounce sur les icônes des headers de documents
    const iconesEntete = document.querySelectorAll('.document-header i');
    iconesEntete.forEach(function (icon) {
        icon.classList.add('header-icon-transition');
        icon.parentElement.addEventListener('mouseenter', function () {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        icon.parentElement.addEventListener('mouseleave', function () {
            icon.style.transform = '';
        });
    });

    // Scale sur les boutons réseaux sociaux
    const reseaux = document.querySelectorAll('.btn-reseaux');
    // La transition est définie dans global.css sur .btn-reseaux
})();

// ==============================
// Copier email (page contact)
// ==============================

(function () {
    const lienEmail = document.querySelector('.contact-infos a[href^="mailto:"]');
    if (!lienEmail) return;

    const email = lienEmail.href.replace('mailto:', '');
    const bouton = document.createElement('button');
    bouton.classList.add('btn-copier-email');
    bouton.setAttribute('aria-label', 'Copier l\'adresse email');
    bouton.innerHTML = '<i class="fas fa-copy"></i><span class="tooltip-copie">Copié !</span>';

    lienEmail.parentElement.appendChild(bouton);

    bouton.addEventListener('click', function () {
        navigator.clipboard.writeText(email).then(function () {
            const infobulle = bouton.querySelector('.tooltip-copie');
            infobulle.classList.add('visible');
            setTimeout(function () {
                infobulle.classList.remove('visible');
            }, 2000);
        }).catch(function (erreur) {
            console.warn('Impossible de copier l\'email :', erreur);
            alert('Impossible de copier l\'email. Vous pouvez le copier manuellement : ' + email);
        });
    });
})();

// ==============================
// Temps de lecture (page veille)
// ==============================

(function () {
    const main = document.querySelector('main');
    const h1 = main ? main.querySelector('h1') : null;
    if (!h1 || !document.querySelector('.timeline-group')) return; // Seulement sur la page veille

    const texte = main.textContent || '';
    const mots = texte.trim().split(/\s+/).length;
    const minutes = Math.ceil(mots / 200);

    const eleTemps = document.createElement('div');
    eleTemps.classList.add('temps-lecture');
    eleTemps.innerHTML = '<i class="fas fa-clock"></i> Temps de lecture : ~' + minutes + ' min';
    h1.insertAdjacentElement('afterend', eleTemps);
})();


// ==============================
// Texte révélé lettre par lettre (titres h1)
// ==============================

(function () {
    // Seulement sur les pages avec un h1 visible (pas le sr-only de l'accueil)
    const h1 = document.querySelector('main h1');
    if (!h1 || h1.classList.contains('sr-only')) return;

    // Préserver l'icône si présente
    const icone = h1.querySelector('i');

    // Récupérer uniquement le texte (sans l'icône)
    let texte = '';
    h1.childNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
            texte += node.textContent;
        }
    });
    texte = texte.trim();

    // Vider le h1 et remettre l'icône
    h1.textContent = '';
    if (icone) {
        h1.appendChild(icone);
        h1.appendChild(document.createTextNode(' '));
    }

    for (let i = 0; i < texte.length; i++) {
        const span = document.createElement('span');
        span.textContent = texte[i];
        span.classList.add('letter-reveal');
        span.style.animationDelay = (i * 0.03) + 's';
        if (texte[i] === ' ') span.classList.add('letter-space');
        h1.appendChild(span);
    }
})();
