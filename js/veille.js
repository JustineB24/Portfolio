// ==============================
// veille.js — Page veille : sommaire collant, scroll-spy, sections repliables
// ==============================

(function () {
    const main = document.getElementById('main');
    if (!main) return;

    const sommaire = main.querySelector('.sommaire');
    const intro = main.querySelector('.veille-intro');
    const introDroite = main.querySelector('.veille-intro-droite');
    if (!sommaire || !intro || !introDroite) return;

    // ----- 1. Construire le layout deux colonnes -----
    const layout = document.createElement('div');
    layout.className = 'veille-layout';

    const aside = document.createElement('aside');
    aside.className = 'veille-toc';
    aside.appendChild(sommaire);

    const article = document.createElement('div');
    article.className = 'veille-article';

    // Aplatir l'intro pour que "Définition" devienne une section normale :
    // titre (h2#definition) → logo → description, afin que le groupement par h2
    // place le logo + le texte dans le corps de la première section.
    const introLogo = introDroite.querySelector('.veille-intro-logo');
    const introTitre = introDroite.querySelector('#definition');
    const introDesc = introDroite.querySelector('.veille-intro-desc');
    if (introTitre) article.appendChild(introTitre);
    if (introLogo) article.appendChild(introLogo);
    if (introDesc) article.appendChild(introDesc);

    // Déplacer tout ce qui suit l'ancienne intro dans l'article
    let node = intro.nextElementSibling;
    while (node) {
        const suivant = node.nextElementSibling;
        article.appendChild(node);
        node = suivant;
    }
    intro.remove();

    layout.appendChild(aside);
    layout.appendChild(article);
    main.appendChild(layout);

    // ----- 2. Grouper le contenu en sections repliables (par h2) -----
    function setExpanded(section, ouvert) {
        const btn = section.querySelector('.veille-section-toggle');
        section.classList.toggle('is-collapsed', !ouvert);
        if (btn) btn.setAttribute('aria-expanded', String(ouvert));
    }

    const enfants = Array.from(article.children);
    let bodyCourant = null;

    enfants.forEach(function (el) {
        if (el.tagName === 'H2') {
            const id = el.id || ('sec-' + Math.random().toString(36).slice(2));
            const bodyId = 'body-' + id;

            const section = document.createElement('section');
            section.className = 'veille-section';

            // Le texte du titre devient un bouton de bascule (accessibilité accordéon)
            const btn = document.createElement('button');
            btn.className = 'veille-section-toggle';
            btn.type = 'button';
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('aria-controls', bodyId);
            while (el.firstChild) btn.appendChild(el.firstChild);
            const chevron = document.createElement('i');
            chevron.className = 'fas fa-chevron-down veille-section-chevron';
            chevron.setAttribute('aria-hidden', 'true');
            btn.appendChild(chevron);
            el.appendChild(btn);
            el.classList.add('veille-section-title');

            bodyCourant = document.createElement('div');
            bodyCourant.className = 'veille-section-body';
            bodyCourant.id = bodyId;

            section.appendChild(el);          // h2 conserve son id (ancres + scroll-spy)
            section.appendChild(bodyCourant);
            article.appendChild(section);     // ordre préservé (on itère sur un snapshot)

            btn.addEventListener('click', function () {
                const ouvert = btn.getAttribute('aria-expanded') === 'true';
                setExpanded(section, !ouvert);
            });
        } else if (bodyCourant) {
            bodyCourant.appendChild(el);
        } else {
            article.appendChild(el); // contenu éventuel avant le 1er h2
        }
    });

    // ----- 3. Liens du sommaire : déplier la cible puis y défiler -----
    const liens = Array.from(sommaire.querySelectorAll('a[href^="#"]'));

    liens.forEach(function (lien) {
        lien.addEventListener('click', function (e) {
            const id = lien.getAttribute('href').slice(1);
            const cible = document.getElementById(id);
            if (!cible) return;
            e.preventDefault();
            const section = cible.closest('.veille-section');
            if (section) setExpanded(section, true);
            cible.scrollIntoView({behavior: 'smooth', block: 'start'});
            history.replaceState(null, '', '#' + id);
        });
    });

    // ----- 4. Scroll-spy : surligner la section en cours -----
    const parId = {};
    liens.forEach(function (l) {
        parId[l.getAttribute('href').slice(1)] = l;
    });
    const cibles = liens
        .map(function (l) {
            return document.getElementById(l.getAttribute('href').slice(1));
        })
        .filter(Boolean);

    // Garder l'entrée active visible dans le sommaire (défilement interne, sans bouger la page)
    function garderVisibleDansSommaire(lien) {
        const cRect = sommaire.getBoundingClientRect();
        const lRect = lien.getBoundingClientRect();
        if (lRect.top < cRect.top) {
            sommaire.scrollTop -= (cRect.top - lRect.top) + 8;
        } else if (lRect.bottom > cRect.bottom) {
            sommaire.scrollTop += (lRect.bottom - cRect.bottom) + 8;
        }
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                liens.forEach(function (l) {
                    l.classList.remove('active');
                    l.removeAttribute('aria-current');
                });
                const lien = parId[entry.target.id];
                if (lien) {
                    lien.classList.add('active');
                    lien.setAttribute('aria-current', 'true');
                    garderVisibleDansSommaire(lien);
                }
            });
        }, {rootMargin: '-120px 0px -70% 0px', threshold: 0});

        cibles.forEach(function (c) {
            observer.observe(c);
        });
    }
})();
