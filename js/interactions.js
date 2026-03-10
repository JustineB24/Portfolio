// ==============================
// Compteurs animés (page d'accueil)
// ==============================

(function () {
    const compteurs = document.querySelectorAll('.compteur');
    if (!compteurs.length) return;

    function animerCompteur(el) {
        const nombre = el.querySelector('.compteur-nombre');
        const target = parseInt(el.dataset.target, 10);
        const duree = 1500;
        const debut = performance.now();

        function update(now) {
            const progress = Math.min((now - debut) / duree, 1);
            // Ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            nombre.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animerCompteur(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    compteurs.forEach(function (c) { observer.observe(c); });
})();

// ==============================
// Effet 3D tilt sur les cartes projets
// ==============================

(function () {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const cards = document.querySelectorAll('.projet-container .card');
    if (!cards.length) return;

    cards.forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;
            card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });
})();

// ==============================
// Boutons magnétiques
// ==============================

(function () {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const btns = document.querySelectorAll('.btn-download, .btn-cv, .btn-cv-outline, .btn-envoyer, .btn-accueil');

    btns.forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = 'translate(' + x * 0.15 + 'px, ' + y * 0.15 + 'px) translateY(-2px)';
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.transform = '';
        });
    });
})();

// ==============================
// Micro-interactions sur les icônes
// ==============================

(function () {
    // Bounce sur les icônes des headers de documents
    const headerIcons = document.querySelectorAll('.document-header i');
    headerIcons.forEach(function (icon) {
        icon.style.transition = 'transform 0.3s';
        icon.parentElement.addEventListener('mouseenter', function () {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        icon.parentElement.addEventListener('mouseleave', function () {
            icon.style.transform = '';
        });
    });

    // Scale sur les boutons réseaux sociaux
    const reseaux = document.querySelectorAll('.btn-reseaux');
    reseaux.forEach(function (btn) {
        btn.style.transition = 'width 0.4s, border-radius 0.4s, transform 0.3s';
    });
})();

// ==============================
// Copier email (page contact)
// ==============================

(function () {
    const emailLink = document.querySelector('.contact-infos a[href^="mailto:"]');
    if (!emailLink) return;

    const email = emailLink.href.replace('mailto:', '');
    const btn = document.createElement('button');
    btn.classList.add('btn-copier-email');
    btn.setAttribute('aria-label', 'Copier l\'adresse email');
    btn.innerHTML = '<i class="fas fa-copy"></i><span class="tooltip-copie">Copié !</span>';

    emailLink.parentElement.appendChild(btn);

    btn.addEventListener('click', function () {
        navigator.clipboard.writeText(email).then(function () {
            const tooltip = btn.querySelector('.tooltip-copie');
            tooltip.classList.add('visible');
            setTimeout(function () {
                tooltip.classList.remove('visible');
            }, 2000);
        });
    });
})();

// ==============================
// Temps de lecture (page veille)
// ==============================

(function () {
    const main = document.querySelector('main');
    const h1 = main ? main.querySelector('h1') : null;
    if (!h1 || !document.querySelector('.timeline-group')) return; // Only on veille page

    const texte = main.textContent || '';
    const mots = texte.trim().split(/\s+/).length;
    const minutes = Math.ceil(mots / 200);

    const tempsEl = document.createElement('div');
    tempsEl.classList.add('temps-lecture');
    tempsEl.innerHTML = '<i class="fas fa-clock"></i> Temps de lecture : ~' + minutes + ' min';
    h1.insertAdjacentElement('afterend', tempsEl);
})();

// ==============================
// Hover preview sur liens projets (timeline à propos)
// ==============================

(function () {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const projetLinks = document.querySelectorAll('a.timeline-link[href*="projet-details"]');
    if (!projetLinks.length) return;

    const projetImages = {
        'panada-food': '../projets/Panada_Food/Accueil.webp',
        'mairie-cauffry': '../projets/Mairie_de_cauffry/Accueil.webp'
    };

    const preview = document.createElement('div');
    preview.style.cssText = 'position:fixed;z-index:9999;pointer-events:none;opacity:0;transition:opacity 0.2s;background:var(--card-background);border-radius:8px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.3);width:200px;height:130px;';
    document.body.appendChild(preview);

    const previewImg = document.createElement('img');
    previewImg.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    preview.appendChild(previewImg);

    projetLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        const id = href.split('id=')[1];
        if (!id || !projetImages[id]) return;

        link.addEventListener('mouseenter', function () {
            previewImg.src = projetImages[id];
            preview.style.opacity = '1';
        });

        link.addEventListener('mousemove', function (e) {
            preview.style.left = (e.clientX + 15) + 'px';
            preview.style.top = (e.clientY + 15) + 'px';
        });

        link.addEventListener('mouseleave', function () {
            preview.style.opacity = '0';
        });
    });
})();

// ==============================
// Texte révélé lettre par lettre (titres h1)
// ==============================

(function () {
    // Seulement sur les pages avec un h1 visible (pas le sr-only de l'accueil)
    const h1 = document.querySelector('main > h1');
    if (!h1 || h1.classList.contains('sr-only')) return;

    const texte = h1.textContent;
    h1.textContent = '';
    h1.style.opacity = '1';

    for (let i = 0; i < texte.length; i++) {
        const span = document.createElement('span');
        span.textContent = texte[i];
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.animation = 'fadeInUp 0.4s ease forwards';
        span.style.animationDelay = (i * 0.03) + 's';
        if (texte[i] === ' ') span.style.width = '0.3em';
        h1.appendChild(span);
    }
})();
