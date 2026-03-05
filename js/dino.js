// Jeu du dinosaure sur la page 404
(function () {
    var canvas = document.getElementById('dino-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var scoreEl = document.getElementById('dino-score');

    // Adapter la taille du canvas au mobile
    if (window.innerWidth < 750) {
        canvas.width = window.innerWidth - 40;
    }

    var W = canvas.width;
    var H = canvas.height;
    var SOL = H - 30;

    // Couleurs selon le theme
    function getCouleur() {
        return document.documentElement.classList.contains('dark-theme') ? '#ffffff' : '#333333';
    }

    function getCouleurFond() {
        return document.documentElement.classList.contains('dark-theme') ? '#000000' : '#ffffff';
    }

    // Dino
    var dino = {
        x: 50,
        y: SOL,
        w: 30,
        h: 35,
        vy: 0,
        enSaut: false
    };

    var GRAVITE = 0.6;
    var FORCE_SAUT = -12;

    // Obstacles
    var obstacles = [];
    var obstacleTimer = 0;
    var INTERVALLE_MIN = 60;
    var INTERVALLE_MAX = 120;
    var prochainObstacle = 80;

    // Etat du jeu
    var score = 0;
    var vitesse = 4;
    var enCours = false;
    var gameOver = false;
    var meilleurScore = 0;
    var frameCount = 0;

    // Nuages decoratifs
    var nuages = [
        { x: 200, y: 30 },
        { x: 450, y: 50 },
        { x: 650, y: 25 }
    ];

    function sauter() {
        if (!enCours && !gameOver) {
            enCours = true;
            gameOver = false;
            score = 0;
            vitesse = 4;
            obstacles = [];
            obstacleTimer = 0;
            prochainObstacle = 80;
            dino.y = SOL;
            dino.vy = 0;
            dino.enSaut = false;
            boucle();
        }
        if (gameOver) {
            gameOver = false;
            enCours = true;
            score = 0;
            vitesse = 4;
            obstacles = [];
            obstacleTimer = 0;
            prochainObstacle = 80;
            dino.y = SOL;
            dino.vy = 0;
            dino.enSaut = false;
            boucle();
            return;
        }
        if (!dino.enSaut) {
            dino.vy = FORCE_SAUT;
            dino.enSaut = true;
        }
    }

    // Controles
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space' || e.key === 'ArrowUp') {
            // Seulement si on est sur la page 404
            if (!document.getElementById('dino-canvas')) return;
            e.preventDefault();
            sauter();
        }
    });

    canvas.addEventListener('click', sauter);

    // Dessin du dino (forme simplifiee)
    function dessinerDino() {
        var c = getCouleur();
        ctx.fillStyle = c;

        // Corps
        ctx.fillRect(dino.x, dino.y - dino.h, dino.w, dino.h);

        // Tete
        ctx.fillRect(dino.x + 15, dino.y - dino.h - 12, 18, 15);

        // Oeil
        ctx.fillStyle = getCouleurFond();
        ctx.fillRect(dino.x + 26, dino.y - dino.h - 9, 4, 4);

        // Pattes (alternent en marchant)
        ctx.fillStyle = c;
        if (dino.enSaut) {
            ctx.fillRect(dino.x + 5, dino.y, 6, 8);
            ctx.fillRect(dino.x + 18, dino.y, 6, 8);
        } else {
            if (Math.floor(frameCount / 8) % 2 === 0) {
                ctx.fillRect(dino.x + 5, dino.y, 6, 10);
                ctx.fillRect(dino.x + 18, dino.y - 3, 6, 7);
            } else {
                ctx.fillRect(dino.x + 5, dino.y - 3, 6, 7);
                ctx.fillRect(dino.x + 18, dino.y, 6, 10);
            }
        }

        // Queue
        ctx.fillRect(dino.x - 8, dino.y - dino.h + 5, 10, 6);
    }

    // Dessin d'un cactus
    function dessinerCactus(obs) {
        ctx.fillStyle = getCouleur();

        if (obs.type === 'petit') {
            ctx.fillRect(obs.x, SOL - 25, 10, 25);
            ctx.fillRect(obs.x - 5, SOL - 20, 8, 6);
            ctx.fillRect(obs.x + 7, SOL - 18, 8, 6);
        } else if (obs.type === 'grand') {
            ctx.fillRect(obs.x, SOL - 40, 12, 40);
            ctx.fillRect(obs.x - 7, SOL - 30, 10, 6);
            ctx.fillRect(obs.x + 9, SOL - 35, 10, 6);
        } else {
            // Double cactus
            ctx.fillRect(obs.x, SOL - 30, 10, 30);
            ctx.fillRect(obs.x + 18, SOL - 35, 10, 35);
            ctx.fillRect(obs.x + 6, SOL - 22, 16, 6);
        }
    }

    function update() {
        frameCount++;

        // Dino - physique
        dino.vy += GRAVITE;
        dino.y += dino.vy;
        if (dino.y >= SOL) {
            dino.y = SOL;
            dino.vy = 0;
            dino.enSaut = false;
        }

        // Obstacles
        obstacleTimer++;
        if (obstacleTimer >= prochainObstacle) {
            var types = ['petit', 'grand', 'double'];
            var type = types[Math.floor(Math.random() * types.length)];
            var largeur = type === 'double' ? 28 : (type === 'grand' ? 12 : 10);
            var hauteur = type === 'double' ? 35 : (type === 'grand' ? 40 : 25);
            obstacles.push({
                x: W + 10,
                w: largeur,
                h: hauteur,
                type: type
            });
            obstacleTimer = 0;
            prochainObstacle = INTERVALLE_MIN + Math.floor(Math.random() * (INTERVALLE_MAX - INTERVALLE_MIN));
        }

        for (var i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].x -= vitesse;

            // Collision
            var obs = obstacles[i];
            var dinoGauche = dino.x;
            var dinoDroite = dino.x + dino.w;
            var dinoHaut = dino.y - dino.h;
            var dinoBas = dino.y;
            var obsGauche = obs.x - (obs.type === 'petit' ? 5 : (obs.type === 'double' ? 0 : 7));
            var obsDroite = obs.x + obs.w;
            var obsHaut = SOL - obs.h;

            if (dinoDroite > obsGauche && dinoGauche < obsDroite && dinoBas > obsHaut) {
                gameOver = true;
                enCours = false;
                if (score > meilleurScore) meilleurScore = score;
                return;
            }

            // Supprimer les obstacles hors ecran
            if (obstacles[i].x + obstacles[i].w < -20) {
                obstacles.splice(i, 1);
            }
        }

        // Score et acceleration
        score++;
        if (score % 200 === 0) {
            vitesse += 0.3;
        }
        scoreEl.textContent = score;
    }

    function dessiner() {
        // Fond
        ctx.fillStyle = getCouleurFond();
        ctx.fillRect(0, 0, W, H);

        var c = getCouleur();

        // Nuages
        ctx.fillStyle = c;
        ctx.globalAlpha = 0.15;
        nuages.forEach(function (nuage) {
            ctx.beginPath();
            ctx.arc(nuage.x, nuage.y, 15, 0, Math.PI * 2);
            ctx.arc(nuage.x + 18, nuage.y - 3, 12, 0, Math.PI * 2);
            ctx.arc(nuage.x + 32, nuage.y, 15, 0, Math.PI * 2);
            ctx.fill();
            nuage.x -= vitesse * 0.3;
            if (nuage.x < -50) nuage.x = W + 50;
        });
        ctx.globalAlpha = 1;

        // Sol
        ctx.strokeStyle = c;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, SOL + 10);
        ctx.lineTo(W, SOL + 10);
        ctx.stroke();

        // Sol texture
        ctx.globalAlpha = 0.3;
        for (var i = 0; i < W; i += 20) {
            var offset = (frameCount * vitesse + i) % W;
            ctx.fillStyle = c;
            ctx.fillRect(W - offset, SOL + 13, Math.random() * 8 + 2, 1);
        }
        ctx.globalAlpha = 1;

        // Obstacles
        obstacles.forEach(dessinerCactus);

        // Dino
        dessinerDino();

        // Game over
        if (gameOver) {
            ctx.fillStyle = c;
            ctx.font = 'bold 24px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', W / 2, H / 2 - 10);
            ctx.font = '14px sans-serif';
            ctx.fillText('Score : ' + score + (meilleurScore > 0 ? '  |  Record : ' + meilleurScore : ''), W / 2, H / 2 + 15);
            ctx.fillText('Espace ou clic pour rejouer', W / 2, H / 2 + 40);
            ctx.textAlign = 'start';
        }
    }

    function boucle() {
        if (!enCours) {
            dessiner();
            return;
        }
        update();
        dessiner();
        requestAnimationFrame(boucle);
    }

    // Ecran initial
    function dessinerEcranInitial() {
        ctx.fillStyle = getCouleurFond();
        ctx.fillRect(0, 0, W, H);

        var c = getCouleur();

        // Sol
        ctx.strokeStyle = c;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, SOL + 10);
        ctx.lineTo(W, SOL + 10);
        ctx.stroke();

        // Dino immobile
        ctx.fillStyle = c;
        ctx.fillRect(dino.x, dino.y - dino.h, dino.w, dino.h);
        ctx.fillRect(dino.x + 15, dino.y - dino.h - 12, 18, 15);
        ctx.fillStyle = getCouleurFond();
        ctx.fillRect(dino.x + 26, dino.y - dino.h - 9, 4, 4);
        ctx.fillStyle = c;
        ctx.fillRect(dino.x + 5, dino.y, 6, 10);
        ctx.fillRect(dino.x + 18, dino.y, 6, 10);
        ctx.fillRect(dino.x - 8, dino.y - dino.h + 5, 10, 6);
    }

    dessinerEcranInitial();
})();
