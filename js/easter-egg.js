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
        modale.setAttribute('role', 'dialog');
        modale.setAttribute('aria-modal', 'true');

        const contenuDiv = document.createElement('div');
        contenuDiv.classList.add('ee-modale-contenu');

        const h2 = document.createElement('h2');
        h2.textContent = titre;
        contenuDiv.appendChild(h2);

        const p = document.createElement('p');
        // Insertion sécurisée : découpage sur <br> puis textContent
        const parties = contenu.split(/<br\s*\/?>/i);
        parties.forEach(function (partie, i) {
            p.appendChild(document.createTextNode(partie));
            if (i < parties.length - 1) p.appendChild(document.createElement('br'));
        });
        contenuDiv.appendChild(p);

        const fermerBtn = document.createElement('button');
        fermerBtn.classList.add('ee-fermer');
        fermerBtn.textContent = 'Fermer';
        contenuDiv.appendChild(fermerBtn);

        modale.appendChild(contenuDiv);
        document.body.appendChild(modale);
        modale.offsetHeight;
        modale.classList.add('visible');

        // Donner le focus au bouton fermer
        fermerBtn.focus();

        function fermer() {
            modale.classList.remove('visible');
            document.removeEventListener('keydown', gestionnaireClavier);
            modale.addEventListener('transitionend', function () {
                modale.remove();
                easterEggActif = false;
                if (onFermer) onFermer();
            }, { once: true });
        }

        // Piège de focus : Tab cycle entre les éléments focusables de la modale
        function gestionnaireClavier(e) {
            if (e.key === 'Escape') {
                fermer();
                return;
            }
            if (e.key === 'Tab') {
                const focusables = modale.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
                if (focusables.length === 0) return;
                const premier = focusables[0];
                const dernier = focusables[focusables.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === premier) {
                        e.preventDefault();
                        dernier.focus();
                    }
                } else {
                    if (document.activeElement === dernier) {
                        e.preventDefault();
                        premier.focus();
                    }
                }
            }
        }

        modale.querySelector('.ee-fermer').addEventListener('click', fermer);
        modale.addEventListener('click', function (e) {
            if (e.target === modale) fermer();
        });
        document.addEventListener('keydown', gestionnaireClavier);
    }

    // ==============================
    // Détection de mots tapés au clavier
    // ==============================

    let motsTapes = '';
    const motsCles = {
        'disco': lancerDisco,
        'terminal': lancerTerminal,
        'snake': lancerSnake,
        'rainbow': lancerRainbow,
        'matrix': lancerMatrixStandalone,
        'roll': lancerBarrelRoll,
        '90s': lancer90s
    };

    const sequenceKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let positionKonami = 0;

    document.addEventListener('keydown', function (e) {
        if (estDansChamp()) return;

        // Konami Code
        if (e.key === sequenceKonami[positionKonami]) {
            positionKonami++;
            if (positionKonami === sequenceKonami.length) {
                positionKonami = 0;
                if (!easterEggActif) lancerKonami();
            }
        } else if (sequenceKonami.indexOf(e.key) !== -1) {
            positionKonami = (e.key === sequenceKonami[0]) ? 1 : 0;
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

    function lancerConfettis() {
        const couleurs = ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff', '#44ffff', '#ff8800', '#960000'];
        const fragment = document.createDocumentFragment();
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
            fragment.appendChild(confetti);
            (function (el, t) {
                setTimeout(function () { el.remove(); }, t);
            })(confetti, (duree + delai) * 1000 + 500);
        }
        document.body.appendChild(fragment);
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
        const caracteres = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF';
        let enCours = true;
        function dessiner() {
            if (!enCours) return;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0f0';
            ctx.font = '14px monospace';
            for (let j = 0; j < gouttes.length; j++) {
                ctx.fillText(caracteres[Math.floor(Math.random() * caracteres.length)], j * 16, gouttes[j] * 16);
                if (gouttes[j] * 16 > canvas.height && Math.random() > 0.975) gouttes[j] = 0;
                gouttes[j]++;
            }
            requestAnimationFrame(dessiner);
        }
        dessiner();
        return { canvas: canvas, stop: function() { enCours = false; } };
    }

    function lancerKonami() {
        easterEggActif = true;

        // Phase 1 : Glitch sur la page
        document.body.classList.add('ee-glitch');

        // Phase 2 : Notification "Achievement Unlocked"
        setTimeout(function () {
            document.body.classList.remove('ee-glitch');

            const notif = document.createElement('div');
            notif.classList.add('ee-achievement');

            const icone = document.createElement('div');
            icone.classList.add('ee-achievement-icone');
            icone.textContent = '\uD83C\uDFC6';

            const textes = document.createElement('div');
            textes.classList.add('ee-achievement-textes');

            const titre = document.createElement('div');
            titre.classList.add('ee-achievement-titre');
            titre.textContent = 'Achievement Unlocked';

            const desc = document.createElement('div');
            desc.classList.add('ee-achievement-desc');
            desc.textContent = '\u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192 B A — Pas mal, tu connais tes classiques !';

            textes.appendChild(titre);
            textes.appendChild(desc);
            notif.appendChild(icone);
            notif.appendChild(textes);
            document.body.appendChild(notif);

            // Forcer le reflow pour déclencher la transition
            notif.offsetHeight;
            notif.classList.add('visible');

            // Barre de progression
            const barre = document.createElement('div');
            barre.classList.add('ee-achievement-barre');
            notif.appendChild(barre);
            setTimeout(function () { barre.classList.add('active'); }, 50);

            // Disparition après 4s
            setTimeout(function () {
                notif.classList.remove('visible');
                notif.addEventListener('transitionend', function () {
                    notif.remove();
                    easterEggActif = false;
                }, { once: true });
            }, 4000);
        }, 800);
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

        // Phase 1 : Descente de l'année actuelle → 0 avec accélération
        let vitesse = 40;
        function descendre() {
            const pas = Math.max(1, Math.floor(annee / 100));
            annee -= pas;
            if (annee < 0) annee = 0;
            yearEl.textContent = String(annee);

            // Accélération progressive
            if (annee > 1500) vitesse = 35;
            else if (annee > 500) vitesse = 25;
            else if (annee > 100) vitesse = 20;
            else vitesse = 40;

            // Tremblement du texte à l'approche de 0
            if (annee <= 100) {
                const intensite = (1 - annee / 100) * 4;
                yearEl.style.transform = 'translateX(' + (Math.random() * intensite * 2 - intensite) + 'px)';
                yearEl.style.color = '#' + Math.floor(Math.random() * 0x660000 + 0x990000).toString(16);
            }

            if (annee <= 0) {
                yearEl.textContent = '0';
                yearEl.style.transform = '';
                yearEl.style.color = '';
                lancerExplosion(yearEl);
            } else {
                setTimeout(descendre, vitesse);
            }
        }
        descendre();

        // Phase 2 : Explosion de particules
        function lancerExplosion(el) {
            const rect = el.getBoundingClientRect();
            const centreX = rect.left + rect.width / 2;
            const centreY = rect.top + rect.height / 2;

            // Flash blanc
            const flash = document.createElement('div');
            flash.classList.add('ee-explosion-flash');
            document.body.appendChild(flash);
            setTimeout(function () { flash.remove(); }, 400);

            // Particules
            const nbParticules = 30;
            const symboles = ['0', '1', '∞', '⏳', '⚡', '✦', '◆', '●'];
            const fragmentParticules = document.createDocumentFragment();
            for (let i = 0; i < nbParticules; i++) {
                const p = document.createElement('div');
                p.classList.add('ee-explosion-particule');
                p.textContent = symboles[Math.floor(Math.random() * symboles.length)];
                const angle = (Math.PI * 2 * i) / nbParticules + (Math.random() - 0.5) * 0.5;
                const distance = 80 + Math.random() * 200;
                const dx = Math.cos(angle) * distance;
                const dy = Math.sin(angle) * distance;
                p.style.left = centreX + 'px';
                p.style.top = centreY + 'px';
                p.style.setProperty('--dx', dx + 'px');
                p.style.setProperty('--dy', dy + 'px');
                p.style.animationDuration = (0.6 + Math.random() * 0.6) + 's';
                fragmentParticules.appendChild(p);
                setTimeout(function () { p.remove(); }, 1200);
            }
            document.body.appendChild(fragmentParticules);

            // Phase 3 : Pause puis remontée rapide vers l'année actuelle
            yearEl.textContent = '💥';
            setTimeout(function () {
                let a = 0;
                const interval2 = setInterval(function () {
                    const pas = Math.max(1, Math.floor((anneeActuelle - a) / 50));
                    a += pas;
                    if (a >= anneeActuelle) {
                        a = anneeActuelle;
                        clearInterval(interval2);
                        yearEl.textContent = String(anneeActuelle);
                        afficherModale(
                            'Big Bang temporel !',
                            'Vous avez remonté jusqu\'à l\'an 0 et provoqué une explosion spatio-temporelle.<br>Heureusement, le continuum espace-temps a été restauré. Bienvenue en ' + anneeActuelle + ' !'
                        );
                    }
                    yearEl.textContent = String(a);
                }, 20);
            }, 1200);
        }
    });

    // ==============================
    // ==============================
    // Snake
    // ==============================

    function lancerSnake() {
        easterEggActif = true;
        const surcouche = document.createElement('div');
        surcouche.classList.add('ee-snake-overlay');

        const leScore = document.createElement('div');
        leScore.classList.add('ee-snake-score');
        leScore.textContent = 'Score : 0';

        surcouche.setAttribute('role', 'dialog');
        surcouche.setAttribute('aria-modal', 'true');
        surcouche.setAttribute('aria-label', 'Jeu Snake');

        const canvas = document.createElement('canvas');
        const TAILLE = Math.min(400, window.innerWidth - 40);
        canvas.width = TAILLE;
        canvas.height = TAILLE;
        canvas.setAttribute('aria-label', 'Zone de jeu Snake');

        const info = document.createElement('div');
        info.classList.add('ee-snake-info');
        info.textContent = 'Flèches pour jouer \u2022 Echap pour quitter';

        surcouche.appendChild(leScore);
        surcouche.appendChild(canvas);
        surcouche.appendChild(info);
        document.body.appendChild(surcouche);

        const ctx = canvas.getContext('2d');
        const GRILLE = 20;
        const CELLULE = TAILLE / GRILLE;
        const serpent = [{ x: 10, y: 10 }];
        let direction = { x: 1, y: 0 };
        let prochDirection = { x: 1, y: 0 };
        let pomme = placerPomme();
        let score = 0;
        let finDuJeu = false;

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

            if (finDuJeu) {
                ctx.fillStyle = 'rgba(0,0,0,0.7)';
                ctx.fillRect(0, 0, TAILLE, TAILLE);
                ctx.fillStyle = '#ff0000';
                ctx.font = 'bold 30px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('JEU TERMINÉ', TAILLE / 2, TAILLE / 2);
                ctx.fillStyle = '#fff';
                ctx.font = '16px monospace';
                ctx.fillText('Score : ' + score, TAILLE / 2, TAILLE / 2 + 30);
            }
        }

        function update() {
            if (finDuJeu) return;
            direction = prochDirection;
            const tete = {
                x: serpent[0].x + direction.x,
                y: serpent[0].y + direction.y
            };

            // Collision mur ou soi-même
            if (tete.x < 0 || tete.x >= GRILLE || tete.y < 0 || tete.y >= GRILLE ||
                serpent.some(function (s) { return s.x === tete.x && s.y === tete.y; })) {
                finDuJeu = true;
                dessiner();
                setTimeout(function () {
                    surcouche.remove();
                    easterEggActif = false;
                }, 2000);
                return;
            }

            serpent.unshift(tete);

            if (tete.x === pomme.x && tete.y === pomme.y) {
                score++;
                leScore.textContent = 'Score : ' + score;
                pomme = placerPomme();
            } else {
                serpent.pop();
            }

            dessiner();
        }

        dessiner();
        const intervalleJeu = setInterval(update, 180);

        function gestionnaireClavier(e) {
            if (e.key === 'Escape') {
                clearInterval(intervalleJeu);
                surcouche.remove();
                easterEggActif = false;
                document.removeEventListener('keydown', gestionnaireClavier);
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

        document.addEventListener('keydown', gestionnaireClavier);
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
        const defilement = document.createElement('div');
        defilement.classList.add('ee-90s-marquee');
        defilement.textContent = '~ * ~ Bienvenue sur mon super site ~ * ~ Livre d\'or ~ * ~ Compteur de visiteurs : 999 999 ~ * ~';
        document.body.appendChild(defilement);
        setTimeout(function () {
            document.body.classList.remove('ee-90s');
            defilement.remove();
            easterEggActif = false;
        }, 8000);
    }


    // ==============================
    // Easter egg mobile : secouer le telephone
    // ==============================

    let dernierX = null, dernierY = null, dernierZ = null;
    let compteurSecousses = 0;
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
                        compteurSecousses++;
                        dernierSecousse = maintenant;
                    }
                    if (compteurSecousses >= 3) {
                        compteurSecousses = 0;
                        // Lancer un easter egg aleatoire parmi les visuels
                        const eesMobiles = [lancerDisco, lancerBarrelRoll, lancerRainbow];
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
                compteurSecousses = 0;
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
        '%cTape %ceasterEggs()%c dans la console pour voir la liste complète !',
        'color: #960000; font-size: 16px; font-weight: bold;',
        'color: #666; font-size: 12px;',
        'color: #960000; font-size: 12px; font-weight: bold; background: #f0f0f0; padding: 2px 6px; border-radius: 3px;',
        'color: #666; font-size: 12px;'
    );

    // Fonction globale pour lister les easter eggs depuis la console
    window.easterEggs = function () {
        const liste = [
            { declencheur: '⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ B A', nom: 'Konami Code', description: 'Glitch + Achievement Unlocked — le classique des classiques.' },
            { declencheur: 'Taper "disco"', nom: 'Mode Disco', description: 'La page se transforme en piste de danse pendant 5 secondes.' },
            { declencheur: 'Taper "terminal"', nom: 'Mode Terminal', description: 'Le site prend un look de terminal rétro pendant 6 secondes.' },
            { declencheur: 'Taper "snake"', nom: 'Snake', description: 'Un jeu de Snake jouable ! Flèches pour diriger, Echap pour quitter.' },
            { declencheur: 'Taper "rainbow"', nom: 'Arc-en-ciel', description: 'La couleur primaire du site défile en arc-en-ciel pendant 10 secondes.' },
            { declencheur: 'Taper "matrix"', nom: 'Matrix', description: 'Pluie de caractères verts style Matrix pendant 8 secondes.' },
            { declencheur: 'Taper "roll"', nom: 'Barrel Roll', description: 'La page fait un tonneau à 360° !' },
            { declencheur: 'Taper "90s"', nom: 'Mode 90\'s', description: 'Le site revient dans les années 90 avec un bandeau défilant.' },
            { declencheur: 'Cliquer sur l\'année du copyright', nom: 'Big Bang temporel', description: 'L\'année recule jusqu\'à 0 avec accélération, explosion de particules, puis retour au présent.' },
            { declencheur: 'Secouer le téléphone (mobile)', nom: 'Shake', description: 'Déclenche un easter egg visuel aléatoire sur mobile.' }
        ];

        console.log('%c🥚 Easter eggs du portfolio — Liste complète\n', 'color: #960000; font-size: 18px; font-weight: bold;');
        console.table(liste.map(function (ee) {
            return { 'Declencheur': ee.declencheur, 'Nom': ee.nom, 'Description': ee.description };
        }));
        console.log('%cBonne chasse ! 🎯', 'color: #960000; font-size: 14px; font-style: italic;');
    };

})();
