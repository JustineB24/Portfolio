// ==============================
// Easter eggs du portfolio
// ==============================

(function () {
    // Empêcher les easter eggs de se chevaucher
    let easterEggActif = false;

    // Charger les styles easter eggs depuis un fichier CSS externe
    const globalCssLink = document.querySelector('link[href*="global.css"]');
    const basePath = globalCssLink ? globalCssLink.getAttribute('href').replace('css/global.css', '') : '';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = basePath + 'css/easter-egg.css';
    document.head.appendChild(link);

    // ==============================
    // Utilitaires
    // ==============================

    function estDansChamp() {
        const el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
    }

    function afficherModale(titre, contenu, onFermer) {
        const modale = document.createElement('div');
        modale.classList.add('ee-modale');

        const contenuDiv = document.createElement('div');
        contenuDiv.classList.add('ee-modale-contenu');

        const h2 = document.createElement('h2');
        h2.textContent = titre;
        contenuDiv.appendChild(h2);

        const p = document.createElement('p');
        p.innerHTML = contenu; // Contenu statique uniquement (pas de données utilisateur)
        contenuDiv.appendChild(p);

        const fermerBtn = document.createElement('button');
        fermerBtn.classList.add('ee-fermer');
        fermerBtn.textContent = 'Fermer';
        contenuDiv.appendChild(fermerBtn);

        modale.appendChild(contenuDiv);
        document.body.appendChild(modale);
        modale.offsetHeight;
        modale.classList.add('visible');

        function fermer() {
            modale.classList.remove('visible');
            modale.addEventListener('transitionend', function () {
                modale.remove();
                easterEggActif = false;
                if (onFermer) onFermer();
            }, { once: true });
        }

        modale.querySelector('.ee-fermer').addEventListener('click', fermer);
        modale.addEventListener('click', function (e) {
            if (e.target === modale) fermer();
        });
        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') {
                fermer();
                document.removeEventListener('keydown', handler);
            }
        });
    }

    // ==============================
    // Détection de mots tapés au clavier
    // ==============================

    let motsTapes = '';
    const motsCles = {
        'disco': lancerDisco,
        'terminal': lancerTerminal,
        'gravity': lancerGravity,
        'arrr': lancerPirate,
        'snake': lancerSnake,
        'rainbow': lancerRainbow,
        'matrix': lancerMatrixStandalone,
        'roll': lancerBarrelRoll,
        '90s': lancer90s,
        'a11y': lancerA11y
    };

    document.addEventListener('keydown', function (e) {
        if (estDansChamp()) return;

        // Konami Code
        if (e.key === konamiSequence[konamiPosition]) {
            konamiPosition++;
            if (konamiPosition === konamiSequence.length) {
                konamiPosition = 0;
                if (!easterEggActif) lancerKonami();
            }
        } else if (konamiSequence.indexOf(e.key) !== -1) {
            konamiPosition = (e.key === konamiSequence[0]) ? 1 : 0;
        }

        // Mots-clés
        if (e.key.length === 1) {
            motsTapes += e.key.toLowerCase();
            if (motsTapes.length > 20) {
                motsTapes = motsTapes.slice(-20);
            }
            for (const mot in motsCles) {
                if (motsTapes.endsWith(mot) && !easterEggActif) {
                    motsTapes = '';
                    motsCles[mot]();
                    break;
                }
            }
        }
    });

    // ==============================
    // Konami Code
    // ==============================

    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiPosition = 0;

    function lancerConfettis() {
        const couleurs = ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff', '#44ffff', '#ff8800', '#960000'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('ee-confetti');
            const taille = Math.random() * 8 + 6;
            const duree = Math.random() * 2 + 2;
            const delai = Math.random() * 1.5;
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.width = taille + 'px';
            confetti.style.height = taille + 'px';
            confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.animationDuration = duree + 's';
            confetti.style.animationDelay = delai + 's';
            document.body.appendChild(confetti);
            (function (el, t) {
                setTimeout(function () { el.remove(); }, t);
            })(confetti, (duree + delai) * 1000 + 500);
        }
    }

    function lancerMatrix() {
        const canvas = document.createElement('canvas');
        canvas.classList.add('ee-matrix-canvas');
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const colonnes = Math.floor(canvas.width / 16);
        const gouttes = [];
        for (let i = 0; i < colonnes; i++) {
            gouttes[i] = Math.floor(Math.random() * -canvas.height / 16);
        }
        const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF';
        let running = true;
        function dessiner() {
            if (!running) return;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0f0';
            ctx.font = '14px monospace';
            for (let j = 0; j < gouttes.length; j++) {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], j * 16, gouttes[j] * 16);
                if (gouttes[j] * 16 > canvas.height && Math.random() > 0.975) gouttes[j] = 0;
                gouttes[j]++;
            }
            requestAnimationFrame(dessiner);
        }
        dessiner();
        return { canvas: canvas, stop: function() { running = false; } };
    }

    function lancerKonami() {
        easterEggActif = true;
        lancerConfettis();
        document.body.classList.add('ee-flip');
        let matrixResult;
        setTimeout(function () {
            matrixResult = lancerMatrix();
        }, 500);
        setTimeout(function () {
            afficherModale(
                'GG !',
                'Tu as trouvé le secret !<br>Le fameux <span class="ee-code">\u2191 \u2191 \u2193 \u2193 \u2190 \u2192 \u2190 \u2192 B A</span><br>Merci d\'avoir exploré mon portfolio.',
                function () {
                    document.body.classList.remove('ee-flip');
                    if (matrixResult) {
                        matrixResult.stop();
                        matrixResult.canvas.remove();
                    }
                    document.querySelectorAll('.ee-confetti').forEach(function (c) { c.remove(); });
                }
            );
        }, 2500);
    }

    // ==============================
    // Mode disco
    // ==============================

    function lancerDisco() {
        easterEggActif = true;
        document.body.classList.add('ee-disco');
        setTimeout(function () {
            document.body.classList.remove('ee-disco');
            easterEggActif = false;
        }, 5000);
    }

    // ==============================
    // Mode terminal
    // ==============================

    function lancerTerminal() {
        easterEggActif = true;
        document.body.classList.add('ee-terminal');
        setTimeout(function () {
            document.body.classList.remove('ee-terminal');
            easterEggActif = false;
        }, 6000);
    }

    // ==============================
    // Retour vers le futur (clic sur le copyright)
    // ==============================

    document.addEventListener('click', function (e) {
        const yearEl = document.getElementById('year');
        if (!yearEl || e.target !== yearEl || easterEggActif) return;
        easterEggActif = true;
        const anneeActuelle = new Date().getFullYear();
        let annee = anneeActuelle;
        const interval = setInterval(function () {
            annee--;
            yearEl.textContent = String(annee);
            if (annee <= 1990) {
                clearInterval(interval);
                setTimeout(function () {
                    const interval2 = setInterval(function () {
                        annee++;
                        yearEl.textContent = String(annee);
                        if (annee >= anneeActuelle) {
                            clearInterval(interval2);
                            yearEl.textContent = String(anneeActuelle);
                            afficherModale(
                                'Retour vers le futur !',
                                'Voyage temporel terminé.<br>Bienvenue en ' + anneeActuelle + ' !'
                            );
                        }
                    }, 30);
                }, 500);
            }
        }, 30);
    });

    // ==============================
    // Gravité inversée
    // ==============================

    function lancerGravity() {
        easterEggActif = true;
        document.body.classList.add('ee-gravity');
        setTimeout(function () {
            document.body.classList.remove('ee-gravity');
            easterEggActif = false;
        }, 2500);
    }

    // ==============================
    // Mode pirate
    // ==============================

    function lancerPirate() {
        easterEggActif = true;
        const drapeau = document.createElement('div');
        drapeau.classList.add('ee-pirate-flag');
        drapeau.textContent = '\u2620\uFE0F';
        document.body.appendChild(drapeau);
        setTimeout(function () { drapeau.remove(); }, 3000);

        const traductions = {
            'Accueil': 'Port d\'attache',
            'Projets': 'Butins',
            'Compétences': 'Talents de flibustier',
            'Contact': 'Envoyer un pigeon',
            'Documents': 'Cartes au trésor',
            'À propos': 'Le capitaine',
            'Veille Technologique': 'Vigie du navire'
        };
        const originaux = [];
        const onglets = document.querySelectorAll('.onglet, .onglet-burger');
        onglets.forEach(function (el) {
            originaux.push({ el: el, texte: el.textContent });
            const txt = el.textContent.trim();
            if (traductions[txt]) el.textContent = traductions[txt];
        });
        setTimeout(function () {
            originaux.forEach(function (o) { o.el.textContent = o.texte; });
            easterEggActif = false;
        }, 5000);
    }

    // ==============================
    // Snake
    // ==============================

    function lancerSnake() {
        easterEggActif = true;
        const overlay = document.createElement('div');
        overlay.classList.add('ee-snake-overlay');

        const scoreEl = document.createElement('div');
        scoreEl.classList.add('ee-snake-score');
        scoreEl.textContent = 'Score : 0';

        const canvas = document.createElement('canvas');
        const TAILLE = Math.min(400, window.innerWidth - 40);
        canvas.width = TAILLE;
        canvas.height = TAILLE;

        const info = document.createElement('div');
        info.classList.add('ee-snake-info');
        info.textContent = 'Flèches pour jouer \u2022 Echap pour quitter';

        overlay.appendChild(scoreEl);
        overlay.appendChild(canvas);
        overlay.appendChild(info);
        document.body.appendChild(overlay);

        const ctx = canvas.getContext('2d');
        const GRILLE = 20;
        const CELLULE = TAILLE / GRILLE;
        const serpent = [{ x: 10, y: 10 }];
        let direction = { x: 1, y: 0 };
        let prochDirection = { x: 1, y: 0 };
        let pomme = placerPomme();
        let score = 0;
        let gameOver = false;

        function placerPomme() {
            let pos;
            do {
                pos = {
                    x: Math.floor(Math.random() * GRILLE),
                    y: Math.floor(Math.random() * GRILLE)
                };
            } while (serpent.some(function (s) { return s.x === pos.x && s.y === pos.y; }));
            return pos;
        }

        function dessiner() {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, TAILLE, TAILLE);

            // Pomme
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(pomme.x * CELLULE, pomme.y * CELLULE, CELLULE - 1, CELLULE - 1);

            // Serpent
            serpent.forEach(function (s, i) {
                ctx.fillStyle = i === 0 ? '#00ff00' : '#00cc00';
                ctx.fillRect(s.x * CELLULE, s.y * CELLULE, CELLULE - 1, CELLULE - 1);
            });

            if (gameOver) {
                ctx.fillStyle = 'rgba(0,0,0,0.7)';
                ctx.fillRect(0, 0, TAILLE, TAILLE);
                ctx.fillStyle = '#ff0000';
                ctx.font = 'bold 30px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('GAME OVER', TAILLE / 2, TAILLE / 2);
                ctx.fillStyle = '#fff';
                ctx.font = '16px monospace';
                ctx.fillText('Score : ' + score, TAILLE / 2, TAILLE / 2 + 30);
            }
        }

        function update() {
            if (gameOver) return;
            direction = prochDirection;
            const tete = {
                x: serpent[0].x + direction.x,
                y: serpent[0].y + direction.y
            };

            // Collision mur ou soi-même
            if (tete.x < 0 || tete.x >= GRILLE || tete.y < 0 || tete.y >= GRILLE ||
                serpent.some(function (s) { return s.x === tete.x && s.y === tete.y; })) {
                gameOver = true;
                dessiner();
                setTimeout(function () {
                    overlay.remove();
                    easterEggActif = false;
                }, 2000);
                return;
            }

            serpent.unshift(tete);

            if (tete.x === pomme.x && tete.y === pomme.y) {
                score++;
                scoreEl.textContent = 'Score : ' + score;
                pomme = placerPomme();
            } else {
                serpent.pop();
            }

            dessiner();
        }

        dessiner();
        const gameInterval = setInterval(update, 180);

        function handleKey(e) {
            if (e.key === 'Escape') {
                clearInterval(gameInterval);
                overlay.remove();
                easterEggActif = false;
                document.removeEventListener('keydown', handleKey);
                return;
            }
            if (e.key === 'ArrowUp' && direction.y !== 1) prochDirection = { x: 0, y: -1 };
            else if (e.key === 'ArrowDown' && direction.y !== -1) prochDirection = { x: 0, y: 1 };
            else if (e.key === 'ArrowLeft' && direction.x !== 1) prochDirection = { x: -1, y: 0 };
            else if (e.key === 'ArrowRight' && direction.x !== -1) prochDirection = { x: 1, y: 0 };
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) !== -1) {
                e.preventDefault();
            }
        }

        document.addEventListener('keydown', handleKey);
    }

    // ==============================
    // Matrix standalone
    // ==============================

    function lancerMatrixStandalone() {
        easterEggActif = true;
        const result = lancerMatrix();
        setTimeout(function () {
            result.stop();
            result.canvas.remove();
            easterEggActif = false;
        }, 8000);
    }

    // ==============================
    // Barrel Roll
    // ==============================

    function lancerBarrelRoll() {
        easterEggActif = true;
        document.body.classList.add('ee-barrel-roll');
        setTimeout(function () {
            document.body.classList.remove('ee-barrel-roll');
            easterEggActif = false;
        }, 1500);
    }

    // ==============================
    // Mode 90's
    // ==============================

    function lancer90s() {
        easterEggActif = true;
        document.body.classList.add('ee-90s');
        const marquee = document.createElement('div');
        marquee.classList.add('ee-90s-marquee');
        marquee.textContent = '~ * ~ Bienvenue sur mon super site ~ * ~ Livre d\'or ~ * ~ Compteur de visiteurs : 999 999 ~ * ~';
        document.body.appendChild(marquee);
        setTimeout(function () {
            document.body.classList.remove('ee-90s');
            marquee.remove();
            easterEggActif = false;
        }, 8000);
    }

    // ==============================
    // Mode ULTRA-accessible (a11y)
    // ==============================

    function lancerA11y() {
        easterEggActif = true;
        document.body.classList.add('ee-a11y');
        afficherModale(
            'Mode ULTRA-accessible activé !',
            'Tout est GROS, tout est VISIBLE, tout est CONTRASTÉ.<br>L\'accessibilité, c\'est important !',
            function () {
                document.body.classList.remove('ee-a11y');
            }
        );
    }

    // ==============================
    // Easter egg mobile : secouer le telephone
    // ==============================

    let dernierX = null, dernierY = null, dernierZ = null;
    let secousseCount = 0;
    let dernierSecousse = 0;
    const SEUIL_SECOUSSE = 25;

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function (e) {
            if (easterEggActif) return;
            const acc = e.accelerationIncludingGravity;
            if (!acc || acc.x === null) return;

            if (dernierX !== null) {
                const deltaX = Math.abs(acc.x - dernierX);
                const deltaY = Math.abs(acc.y - dernierY);
                const deltaZ = Math.abs(acc.z - dernierZ);

                if (deltaX + deltaY + deltaZ > SEUIL_SECOUSSE) {
                    const maintenant = Date.now();
                    if (maintenant - dernierSecousse > 300) {
                        secousseCount++;
                        dernierSecousse = maintenant;
                    }
                    if (secousseCount >= 3) {
                        secousseCount = 0;
                        // Lancer un easter egg aleatoire parmi les visuels
                        const eesMobiles = [lancerDisco, lancerGravity, lancerBarrelRoll, lancerRainbow];
                        const ee = eesMobiles[Math.floor(Math.random() * eesMobiles.length)];
                        ee();
                    }
                }
            }

            dernierX = acc.x;
            dernierY = acc.y;
            dernierZ = acc.z;
        });

        // Reset du compteur si pas de secousse pendant 1s
        setInterval(function () {
            if (Date.now() - dernierSecousse > 1000) {
                secousseCount = 0;
            }
        }, 1000);
    }

    // ==============================
    // Thème arc-en-ciel
    // ==============================

    function lancerRainbow() {
        easterEggActif = true;
        const couleurs = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0088ff', '#8800ff'];
        let index = 0;
        const interval = setInterval(function () {
            document.documentElement.style.setProperty('--primary-color', couleurs[index % couleurs.length]);
            index++;
        }, 300);
        setTimeout(function () {
            clearInterval(interval);
            document.documentElement.style.setProperty('--primary-color', '#960000');
            easterEggActif = false;
        }, 10000);
    }

    // ==============================
    // Message console
    // ==============================

    console.log('%c' +
        '\n' +
        '     ██╗██████╗ \n' +
        '     ██║██╔══██╗\n' +
        '     ██║██████╔╝\n' +
        '██   ██║██╔══██╗\n' +
        '╚█████╔╝██████╔╝\n' +
        ' ╚════╝ ╚═════╝ \n',
        'color: #960000; font-size: 14px; font-family: monospace;'
    );
    console.log(
        '%cHey, curieux(se) ! Tu cherches les secrets du code ? 👀\n' +
        '%cEssaie le Konami Code... ou tape "snake" 🐍',
        'color: #960000; font-size: 16px; font-weight: bold;',
        'color: #666; font-size: 12px;'
    );

})();
