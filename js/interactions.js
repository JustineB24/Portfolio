// ==============================
// interactions.js — Compteurs animés, temps de lecture, marquee de l'accueil
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
// Temps de lecture (page veille)
// ==============================

(function () {
    const main = document.querySelector('main');
    const h1 = main ? main.querySelector('h1') : null;
    if (!h1 || !document.querySelector('.timeline-group')) return; // Seulement sur la page veille

    const texte = main.textContent || '';
    const mots = texte.trim().split(/\s+/).length;
    const minutes = Math.ceil(mots / 200);

    const meta = document.querySelector('.veille-meta');
    if (!meta) return;
    const eleTemps = document.createElement('span');
    eleTemps.innerHTML = '<i class="fas fa-clock"></i> ~' + minutes + ' min de lecture';
    meta.prepend(eleTemps);
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
    }

    // Conteneur unique pour le texte animé : évite que le `gap` flex du h1
    // ne s'applique entre chaque mot (l'espacement des mots est géré par .letter-space)
    const conteneurTitre = document.createElement('span');
    conteneurTitre.classList.add('titre-anime');
    h1.appendChild(conteneurTitre);

    const mots = texte.split(' ');
    let index = 0;
    mots.forEach((mot, m) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word-wrap');
        for (let i = 0; i < mot.length; i++) {
            const span = document.createElement('span');
            span.textContent = mot[i];
            span.classList.add('letter-reveal');
            span.style.animationDelay = (index * 0.03) + 's';
            wordSpan.appendChild(span);
            index++;
        }
        conteneurTitre.appendChild(wordSpan);
        if (m < mots.length - 1) {
            const space = document.createElement('span');
            space.textContent = ' ';
            space.classList.add('letter-reveal', 'letter-space');
            space.style.animationDelay = (index * 0.03) + 's';
            conteneurTitre.appendChild(space);
            index++;
        }
    });
})();

// ==============================
// Marquee compétences : pause (hors viewport + survol) + nom au survol
// ==============================

(function () {
    const marquee = document.querySelector('.marquee');
    const marqueeTrack = document.querySelector('.marquee-track');
    if (!marqueeTrack) return;

    // Envelopper chaque logo pour afficher son nom (alt) au survol
    marqueeTrack.querySelectorAll('img').forEach(function (img) {
        const item = document.createElement('span');
        item.className = 'techno-item';
        item.dataset.nom = img.getAttribute('alt') || '';
        if (img.getAttribute('aria-hidden') === 'true') {
            item.setAttribute('aria-hidden', 'true');
        }
        img.parentNode.insertBefore(item, img);
        item.appendChild(img);
    });

    let visible = true;
    let survol = false;

    function majAnimation() {
        // Le défilement tourne uniquement s'il est visible ET non survolé
        marqueeTrack.style.animationPlayState = (visible && !survol) ? 'running' : 'paused';
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            visible = entry.isIntersecting;
            majAnimation();
        });
    });
    observer.observe(marqueeTrack);

    if (marquee) {
        marquee.addEventListener('mouseenter', function () {
            survol = true;
            majAnimation();
        });
        marquee.addEventListener('mouseleave', function () {
            survol = false;
            majAnimation();
        });
    }
})();
