// ==============================
// Easter eggs du portfolio
// ==============================

(function () {
    // Empêcher les easter eggs de se chevaucher
    let easterEggActif = false;

    // Injecter les styles une seule fois
    const style = document.createElement('style');
    style.textContent = `
        .ee-confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            top: -10px;
            z-index: 10001;
            pointer-events: none;
            animation: ee-confetti-fall linear forwards;
        }
        @keyframes ee-confetti-fall {
            to { top: 110vh; transform: rotate(720deg); }
        }
        .ee-matrix-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            pointer-events: none;
            opacity: 0.85;
        }
        .ee-flip {
            animation: ee-flip-anim 3s ease-in-out;
        }
        @keyframes ee-flip-anim {
            0% { transform: perspective(1000px) rotateX(0deg); }
            50% { transform: perspective(1000px) rotateX(180deg); }
            100% { transform: perspective(1000px) rotateX(360deg); }
        }
        .ee-modale {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            z-index: 10002;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.5s;
            cursor: pointer;
        }
        .ee-modale.visible { opacity: 1; }
        .ee-modale-contenu {
            text-align: center;
            color: white;
            font-family: sans-serif;
            animation: ee-modale-pop 0.5s ease-out;
        }
        @keyframes ee-modale-pop {
            from { transform: scale(0.3); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .ee-modale-contenu h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #ff4444;
        }
        .ee-modale-contenu p {
            font-size: 1.3rem;
            color: #ccc;
            line-height: 2;
        }
        .ee-modale-contenu .ee-code {
            font-family: monospace;
            background: #333;
            padding: 0.3rem 0.8rem;
            border-radius: 5px;
            color: #0f0;
            font-size: 1rem;
        }
        .ee-modale-contenu .ee-fermer {
            display: inline-block;
            margin-top: 2rem;
            padding: 0.7rem 2rem;
            border: 2px solid #ff4444;
            border-radius: 25px;
            color: #ff4444;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s, color 0.3s;
        }
        .ee-modale-contenu .ee-fermer:hover {
            background: #ff4444;
            color: white;
        }
        .ee-disco {
            animation: ee-disco-bg 0.3s infinite;
        }
        @keyframes ee-disco-bg {
            0% { background-color: #ff0000; }
            16% { background-color: #ff8800; }
            33% { background-color: #ffff00; }
            50% { background-color: #00ff00; }
            66% { background-color: #0088ff; }
            83% { background-color: #8800ff; }
            100% { background-color: #ff0000; }
        }
        .ee-disco * {
            animation: ee-disco-bounce 0.5s ease-in-out infinite alternate;
        }
        @keyframes ee-disco-bounce {
            to { transform: translateY(-3px); }
        }
        .ee-terminal {
            background: #0a0a0a !important;
            color: #00ff00 !important;
            font-family: 'Courier New', monospace !important;
        }
        .ee-terminal * {
            color: #00ff00 !important;
            font-family: 'Courier New', monospace !important;
            border-color: #00ff00 !important;
        }
        .ee-terminal header {
            background: #0a0a0a !important;
            border-bottom: 1px solid #00ff00;
        }
        .ee-terminal img { opacity: 0.3; filter: grayscale(1) brightness(0.5); }
        .ee-terminal a { color: #00cc00 !important; }
        .ee-terminal::after {
            content: '> _';
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            color: #00ff00;
            font-size: 2rem;
            font-family: monospace;
            animation: ee-cursor-blink 0.7s infinite;
            z-index: 9999;
        }
        @keyframes ee-cursor-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        .ee-gravity {
            animation: ee-gravity-up 2s ease-in-out;
        }
        @keyframes ee-gravity-up {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-100vh) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
        .ee-rainbow {
            animation: ee-rainbow-color 0.5s linear infinite;
        }
        .ee-rainbow * {
            animation: ee-rainbow-color 0.5s linear infinite;
        }
        @keyframes ee-rainbow-color {
            0% { --primary-color: #ff0000; }
            16% { --primary-color: #ff8800; }
            33% { --primary-color: #ffff00; }
            50% { --primary-color: #00ff00; }
            66% { --primary-color: #0088ff; }
            83% { --primary-color: #8800ff; }
            100% { --primary-color: #ff0000; }
        }
        .ee-snake-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.92);
            z-index: 10002;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .ee-snake-overlay canvas {
            border: 2px solid #0f0;
            background: #000;
        }
        .ee-snake-overlay .ee-snake-score {
            color: #0f0;
            font-family: monospace;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        .ee-snake-overlay .ee-snake-info {
            color: #666;
            font-family: monospace;
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }
        .ee-pirate-flag {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 8rem;
            z-index: 10001;
            pointer-events: none;
            animation: ee-pirate-pop 0.5s ease-out, ee-pirate-fade 3s ease-in forwards;
        }
        @keyframes ee-pirate-pop {
            from { transform: translate(-50%, -50%) scale(0); }
            to { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes ee-pirate-fade {
            0%, 70% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // ==============================
    // Utilitaires
    // ==============================

    function estDansChamp() {
        var el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
    }

    function afficherModale(titre, contenu, onFermer) {
        var modale = document.createElement('div');
        modale.classList.add('ee-modale');
        modale.innerHTML =
            '<div class="ee-modale-contenu">' +
                '<h2>' + titre + '</h2>' +
                '<p>' + contenu + '</p>' +
                '<span class="ee-fermer">Fermer</span>' +
            '</div>';
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

    var motsTapes = '';
    var motsCles = {
        'disco': lancerDisco,
        'terminal': lancerTerminal,
        'gravity': lancerGravity,
        'arrr': lancerPirate,
        'snake': lancerSnake,
        'rainbow': lancerRainbow
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
            for (var mot in motsCles) {
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

    var konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    var konamiPosition = 0;

    function lancerConfettis() {
        var couleurs = ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff', '#44ffff', '#ff8800', '#960000'];
        for (var i = 0; i < 100; i++) {
            var confetti = document.createElement('div');
            confetti.classList.add('ee-confetti');
            var taille = Math.random() * 8 + 6;
            var duree = Math.random() * 2 + 2;
            var delai = Math.random() * 1.5;
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
        var canvas = document.createElement('canvas');
        canvas.classList.add('ee-matrix-canvas');
        document.body.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var colonnes = Math.floor(canvas.width / 16);
        var gouttes = [];
        for (var i = 0; i < colonnes; i++) {
            gouttes[i] = Math.floor(Math.random() * -canvas.height / 16);
        }
        var chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF';
        var animId;
        function dessiner() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0f0';
            ctx.font = '14px monospace';
            for (var j = 0; j < gouttes.length; j++) {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], j * 16, gouttes[j] * 16);
                if (gouttes[j] * 16 > canvas.height && Math.random() > 0.975) gouttes[j] = 0;
                gouttes[j]++;
            }
            animId = requestAnimationFrame(dessiner);
        }
        dessiner();
        return { canvas: canvas, animId: animId };
    }

    function lancerKonami() {
        easterEggActif = true;
        lancerConfettis();
        document.body.classList.add('ee-flip');
        var matrixCanvas, matrixAnimId;
        setTimeout(function () {
            var result = lancerMatrix();
            matrixCanvas = result.canvas;
            matrixAnimId = result.animId;
        }, 500);
        setTimeout(function () {
            afficherModale(
                'GG !',
                'Tu as trouvé le secret !<br>Le fameux <span class="ee-code">\u2191 \u2191 \u2193 \u2193 \u2190 \u2192 \u2190 \u2192 B A</span><br>Merci d\'avoir exploré mon portfolio.',
                function () {
                    document.body.classList.remove('ee-flip');
                    if (matrixCanvas) matrixCanvas.remove();
                    if (matrixAnimId) cancelAnimationFrame(matrixAnimId);
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
        var yearEl = document.getElementById('year');
        if (!yearEl || e.target !== yearEl || easterEggActif) return;
        easterEggActif = true;
        var anneeActuelle = new Date().getFullYear();
        var annee = anneeActuelle;
        var interval = setInterval(function () {
            annee--;
            yearEl.textContent = annee;
            if (annee <= 1990) {
                clearInterval(interval);
                setTimeout(function () {
                    var interval2 = setInterval(function () {
                        annee++;
                        yearEl.textContent = annee;
                        if (annee >= anneeActuelle) {
                            clearInterval(interval2);
                            yearEl.textContent = anneeActuelle;
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
        var drapeau = document.createElement('div');
        drapeau.classList.add('ee-pirate-flag');
        drapeau.textContent = '\u2620\uFE0F';
        document.body.appendChild(drapeau);
        setTimeout(function () { drapeau.remove(); }, 3000);

        var traductions = {
            'Accueil': 'Port d\'attache',
            'Projets': 'Butins',
            'Compétences': 'Talents de flibustier',
            'Contact': 'Envoyer un pigeon',
            'Documents': 'Cartes au trésor',
            'À propos': 'Le capitaine',
            'Veille Technologique': 'Vigie du navire'
        };
        var originaux = [];
        var onglets = document.querySelectorAll('.onglet, .onglet-burger');
        onglets.forEach(function (el) {
            originaux.push({ el: el, texte: el.textContent });
            var txt = el.textContent.trim();
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
        var overlay = document.createElement('div');
        overlay.classList.add('ee-snake-overlay');

        var scoreEl = document.createElement('div');
        scoreEl.classList.add('ee-snake-score');
        scoreEl.textContent = 'Score : 0';

        var canvas = document.createElement('canvas');
        var TAILLE = Math.min(400, window.innerWidth - 40);
        canvas.width = TAILLE;
        canvas.height = TAILLE;

        var info = document.createElement('div');
        info.classList.add('ee-snake-info');
        info.textContent = 'Flèches pour jouer \u2022 Echap pour quitter';

        overlay.appendChild(scoreEl);
        overlay.appendChild(canvas);
        overlay.appendChild(info);
        document.body.appendChild(overlay);

        var ctx = canvas.getContext('2d');
        var GRILLE = 20;
        var CELLULE = TAILLE / GRILLE;
        var serpent = [{ x: 10, y: 10 }];
        var direction = { x: 1, y: 0 };
        var prochDirection = { x: 1, y: 0 };
        var pomme = placerPomme();
        var score = 0;
        var gameOver = false;

        function placerPomme() {
            var pos;
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
            var tete = {
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
        var gameInterval = setInterval(update, 180);

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
    // Thème arc-en-ciel
    // ==============================

    function lancerRainbow() {
        easterEggActif = true;
        var couleurs = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0088ff', '#8800ff'];
        var index = 0;
        var interval = setInterval(function () {
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
