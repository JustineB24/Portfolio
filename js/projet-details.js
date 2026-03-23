// Récupérer l'ID du projet depuis l'URL (lettres, chiffres et tirets uniquement)
const urlParams = new URLSearchParams(window.location.search);
const rawId = urlParams.get("id");
const projetId = rawId && /^[a-z0-9-]+$/.test(rawId) ? rawId : null;

// Base de données des projets
const projets = {
    "yabt": {
        title: "YABT — Yet Another Blind Test",
        date: "2025 — en cours",
        images: [
            "../assets/projets/yabt/Logo.png",
            "../assets/projets/yabt/Mascotte.png",
            "../assets/projets/yabt/Nuancier.png"
        ],
        description: "Projet de groupe réalisé à 4 durant l'année de Bachelor Développement & IA. YABT est une application web de blind test et quiz musical multijoueur en temps réel. Les joueurs créent ou rejoignent des parties via un code ou un QR code, et s'affrontent sur des extraits musicaux provenant de l'API Deezer. L'application propose plusieurs modes de jeu (Classique, Speedrun, Battle Royale, Jackpot, Combo Breaker), un système de comptes avec progression par niveaux, des avatars déblocables, ainsi qu'un créateur de QCM personnalisés. L'identité visuelle (logo, mascotte animée, icônes néon) a été entièrement conçue par l'équipe. Le projet suit une méthodologie Agile et sera présenté devant un jury en fin d'année.",
        technologies: ["React", "Node.js", "Socket.io", "MySQL", "Docker", "Figma", "GitHub"],
        enCours: true
    },
    "gecko": {
        title: "Gecko — Plateforme de gestion interne",
        date: "Septembre 2025 — aujourd'hui",
        images: [],
        description: "Application web métier développée en alternance chez Litesoft pour un client du secteur de l'édition et de la distribution. Cette plateforme intranet, sur laquelle je travaille à temps plein depuis mon arrivée, centralise la gestion commerciale, la facturation, le suivi des activités et la logistique. Je travaille en mode ticketing via Asana et j'ai repris un projet legacy existant que je modernise progressivement : refactoring de fichiers monolithiques (6000+ lignes) en classes dédiées, mise en place de l'autoload PSR-4 sur l'ensemble du projet (336 fichiers), passage aux standards de nommage PSR-1/4/12, et remplacement systématique des pratiques obsolètes (jointures SQL implicites, paramètres ambigus, comparaisons lâches). Parmi les développements majeurs : refonte complète du système de filtres avancés sur tous les tableaux de l'application (recherche par colonne, filtres favoris, opérateurs multiples), migration des tableaux du mode server-side vers client-side, ajout de fonctionnalités métier (traductions multi-langue, import Excel, gestion de stock, prévisualisation d'articles), audits de sécurité (prévention XSS, échappement systématique), et optimisations SQL (élimination de requêtes N+1, insertions batch). Pour améliorer ma productivité, j'utilise Claude Code au quotidien comme assistant technique : j'ai mis en place un fichier de conventions servant de référence complète du projet, des commandes personnalisées pour lancer des audits techniques automatisés (sécurité, performance, qualité) et générer des récapitulatifs de modifications, ainsi qu'un plan de résolution organisé pour prioriser la dette technique. Le projet repose sur une architecture MVC en PHP 8.3 avec PostgreSQL, un frontend en JavaScript, jQuery, Bootstrap et DataTables, du temps réel via Node.js et Socket.IO, et un pipeline CI/CD sur GitLab.",
        technologies: ["PHP", "JavaScript", "CSS", "PostgreSQL", "jQuery", "Bootstrap", "DataTables", "Node.js", "Socket.io", "GitLab"],
        enCours: true
    },
    "grimoire-recettes": {
        title: "Le Grimoire des Recettes",
        date: "2025 — en cours",
        images: ["../assets/projets/grimoire_recettes/Maquette.png"],
        description: "Projet personnel réalisé dans le but de tester les capacités des intelligences artificielles en développement. Le point de départ : une simple idée de carnet de recettes numérique et une maquette rapide dessinée sur tablette. Le cahier des charges a été rédigé avec Gemini (Google), puis l'intégralité du code a été générée par Claude Code (Anthropic). Le résultat est une application web complète (PWA — installable comme une appli sur téléphone et utilisable hors ligne) avec recherche en temps réel, calculateur de portions, timer intégré, mode sombre et liste de courses — le tout en HTML, CSS et JavaScript vanilla, sans aucune ligne de code écrite manuellement.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/JustineB24/site-de-cuisine",
        enCours: true
    },
    "panada-food": {
        title: "Panada Food",
        date: "12/11/2024 — 20/12/2024",
        images: [
            "../assets/projets/panada_food/Accueil.png",
            "../assets/projets/panada_food/Menu.png",
            "../assets/projets/panada_food/Contact.png",
            "../assets/projets/panada_food/Mentions_legales.png",
            "../assets/projets/panada_food/Ecran_chargement.png"
        ],
        description: "Développement d'un site web pour le restaurant Panada Food sur une durée de 6 semaines en deuxième année de BTS SIO, en collaboration avec une collègue.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://panadafood.ovh"
    },
    "pendu": {
        title: "Pendu",
        date: "Mars 2025",
        images: ["../assets/projets/pendu/Menu.jpg",
            "../assets/projets/pendu/Jeu.jpg",
            "../assets/projets/pendu/Mots.jpg",
            "../assets/projets/pendu/Scores.jpg"
        ],
        description: "Application mobile développée avec MAUI et XAML, recréant le célèbre jeu du pendu. L'utilisateur doit deviner un mot choisi aléatoirement, en proposant des lettres une par une. Chaque mauvaise réponse révèle progressivement une image du pendu. Le menu principal permet de jouer, de gérer la liste des mots à deviner, de consulter les meilleurs scores ou de quitter l'application. Les mots et les scores sont stockés localement, permettant une gestion dynamique des parties et une personnalisation du jeu. L'interface est responsive et s'adapte parfaitement aux différents formats mobiles.",
        technologies: ["XAML", "MAUI"]
    },
    "france-mobilier": {
        title: "France Mobilier",
        date: "Février 2025",
        images: ["../assets/projets/france_mobilier/Accueil.png",
            "../assets/projets/france_mobilier/Meuble.png",
            "../assets/projets/france_mobilier/Magasins.png",
            "../assets/projets/france_mobilier/Admin.png",
            "../assets/projets/france_mobilier/AjoutProduit.png",
            "../assets/projets/france_mobilier/AjoutMagasin.png"
        ],
        description: "Site e-commerce développé pour la société France Mobilier, spécialisée dans le mobilier d'intérieur. Conçu selon l'architecture MVC, il propose une page d'accueil présentant l'entreprise, un module de recherche de meubles par catégorie, ainsi qu'une page listant l'ensemble des magasins physiques. Le projet utilise une base de données pour gérer dynamiquement les meubles et les points de vente. Un panneau d'administration est également prévu pour permettre la modification des produits et des magasins. L'interface est pensée pour être claire et facilement maintenable.",
        technologies: ["HTML", "CSS", "PHP", "C#", "MYSQL"]
    },
    "sio-shop": {
        title: "Sio Shop",
        date: "Janvier 2025",
        images: [
            "../assets/projets/sio_shop/Connexion.png",
            "../assets/projets/sio_shop/Menu.png",
            "../assets/projets/sio_shop/PasAdmin.png",
            "../assets/projets/sio_shop/GestionClients.png",
            "../assets/projets/sio_shop/RechercheClient.png",
            "../assets/projets/sio_shop/Client.png",
            "../assets/projets/sio_shop/NouveauClient.png",
            "../assets/projets/sio_shop/GestionProduits.png",
            "../assets/projets/sio_shop/RechercheProduit.png",
            "../assets/projets/sio_shop/Produit.png",
            "../assets/projets/sio_shop/NouveauProduit.png",
            "../assets/projets/sio_shop/SaisirVente.png",
            "../assets/projets/sio_shop/Facture.png",
            "../assets/projets/sio_shop/GestionEmployes.png",
            "../assets/projets/sio_shop/Employe.png",
            "../assets/projets/sio_shop/AjoutEmploye.png"
        ],
        description: "Application de gestion commerciale développée sous Windows Forms pour une concession automobile. Ce projet propose une interface permettant aux employés de gérer les clients, les véhicules en stock et les ventes. L'application intègre une authentification sécurisée, une liaison directe avec une base de données SQL, ainsi qu'un module de création de factures au format PDF. Les utilisateurs peuvent rechercher, ajouter et modifier clients et produits, saisir des ventes avec calcul automatique du prix TTC, et suivre l'évolution des stocks en temps réel. La structure suit les principes de la programmation orientée objet, en assurant une navigation fluide et professionnelle entre les différentes fonctionnalités.",
        technologies: ["WinForms", "C#", "MYSQL"]
    },
    "speedcubing": {
        title: "Speedcubing",
        date: "Novembre — Décembre 2024",
        images: [
            "../assets/projets/speedcubing/Accueil.png",
            "../assets/projets/speedcubing/Chrono.png",
            "../assets/projets/speedcubing/Technique_3x3.png",
            "../assets/projets/speedcubing/Def_Speedcubing.png",
            "../assets/projets/speedcubing/Connexion.png"
        ],
        description: "Projet développé pour l'Association Française de SpeedCubing. Ce site permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "MYSQL"]
    },
    "meteo": {
        title: "Application météo",
        date: "Septembre 2024",
        images: ["../assets/projets/meteo/Meteo.png"],
        description: "Application web développée pour afficher en temps réel les conditions météorologiques d'une ville choisie par l'utilisateur. En utilisant l'API OpenWeather, ce projet permet de consulter la température actuelle, l'humidité ainsi qu'une description du temps (ensoleillé, nuageux, etc.). L'interface propose une zone de recherche, un affichage centralisé des données principales, et un design épuré avec fond personnalisé. Le JavaScript assure la récupération dynamique des données météo et la mise à jour instantanée de l'affichage après chaque recherche.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "generateur-mdp": {
        title: "Générateur de mots de passe",
        date: "Septembre — Octobre 2024",
        images: ["../assets/projets/generateur_mdp/Generateur_mdp.png"],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "mairie-cauffry": {
        title: "Mairie de Cauffry",
        date: "27/05/2024 — 21/06/2024",
        images: ["../assets/projets/mairie_de_cauffry/Accueil.png"],
        description: "Réalisation d'un site web pour la commune de Cauffry dans le cadre d'un stage de 4 semaines en première année de BTS SIO, avec Adico (Association pour le développement et l'innovation numérique des collectivités).",
        technologies: ["HTML", "CSS"],
        link: "https://mairiecauffry.fr/"
    }
};

// Vérifier si l'ID existe et mettre à jour la page
if (!projetId || !projets[projetId]) {
    const main = document.querySelector("main");
    main.textContent = "";
    const p = document.createElement("p");
    p.classList.add('projet-introuvable');
    p.textContent = "Projet introuvable. ";
    const a = document.createElement("a");
    a.href = "projets.html";
    a.textContent = "Retour aux projets";
    p.appendChild(a);
    main.appendChild(p);
} else {
    // Couleurs du hero par projet
    const heroColors = {
        "pendu": ["#b71c1c", "#7f0000"],
        "france-mobilier": ["#e91e63", "#880e4f"],
        "sio-shop": ["#607d8b", "#37474f"],
        "speedcubing": ["#e64a19", "#bf360c"],
        "meteo": ["#4a148c", "#2a0054"],
        "generateur-mdp": ["#e991bd", "#bb6090"],
        "mairie-cauffry": ["#1a5276", "#e6a817"],
        "panada-food": ["#ff6600", "#cc4400"],
        "yabt": ["#FDC800", "#E95F3F", "#E3312D", "#CF07FF", "#0409AA"],
        "gecko": ["#4e73df", "#2e59d9"],
        "grimoire-recettes": ["#c2703e", "#6b7c3e"]
    };

    const hero = document.getElementById("projet-hero");
    if (heroColors[projetId]) {
        const colors = heroColors[projetId];
        if (colors.length > 2) {
            hero.style.background = "linear-gradient(135deg, " + colors.join(", ") + ")";
        } else {
            hero.style.setProperty("--hero-color", colors[0]);
            hero.style.setProperty("--hero-color-dark", colors[1]);
        }
    }

    document.getElementById("projet-title").textContent = projets[projetId].title;
    document.title = "Portfolio | " + projets[projetId].title;

    // Date du projet
    if (projets[projetId].date) {
        const dateEl = document.createElement("span");
        dateEl.classList.add("projet-date");
        dateEl.textContent = projets[projetId].date;
        document.getElementById("projet-title").after(dateEl);
    }

    // Badge "En cours de développement"
    if (projets[projetId].enCours) {
        const badge = document.createElement("span");
        badge.classList.add("badge-en-cours");
        badge.textContent = "En cours de développement";
        // Insérer après la date si elle existe, sinon après le titre
        const afterEl = hero.querySelector(".projet-date") || document.getElementById("projet-title");
        afterEl.after(badge);
    }

    // Mise à jour des meta OG dynamiquement
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Portfolio | ' + projets[projetId].title);
    if (ogDesc) ogDesc.setAttribute('content', projets[projetId].description.substring(0, 200));
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    document.getElementById("projet-description").textContent = projets[projetId].description;


    // Descriptions des technologies pour les tooltips
    const techDescriptions = {
        "HTML": "Structure et balisage des pages web",
        "CSS": "Mise en forme et design visuel",
        "JavaScript": "Interactivité et logique côté client",
        "PHP": "Logique serveur et back-end",
        "C#": "Applications Windows et web .NET",
        "MYSQL": "Base de données relationnelle",
        "XAML": "Interface déclarative .NET",
        "MAUI": "Framework mobile multiplateforme",
        "WinForms": "Interface graphique Windows",
        "jQuery": "Bibliothèque JavaScript",
        "Bootstrap": "Framework CSS responsive",
        "DataTables": "Plugin de tableaux interactifs",
        "PostgreSQL": "Base de données avancée",
        "React": "Bibliothèque front-end",
        "Node.js": "JavaScript côté serveur",
        "Socket.io": "Communication temps réel (WebSockets)",
        "Docker": "Conteneurisation et environnements de développement",
        "Figma": "Conception d'interfaces et prototypage",
        "Git": "Gestion de versions et travail collaboratif",
        "GitHub": "Hébergement et collaboration",
        "GitLab": "Plateforme DevOps et CI/CD"
    };

    const techList = document.getElementById("projet-technologies");

    // Vider la liste avant d'ajouter les nouvelles technologies
    techList.innerHTML = "";

    projets[projetId].technologies.forEach(tech => {
        let li = document.createElement("li");

        // Exceptions pour les noms de fichiers SVG
        let nomFichier = tech.toLowerCase();
        const nomsSpeciaux = {
            "c#": "c-sharp",
            "node.js": "nodejs",
            "socket.io": "socket-io"
        };
        if (nomsSpeciaux[nomFichier]) {
            nomFichier = nomsSpeciaux[nomFichier];
        }

        // Classe de couleur par technologie
        const tagClasses = {
            "html": "tag-html", "css": "tag-css", "javascript": "tag-js",
            "php": "tag-php", "c#": "tag-csharp", "mysql": "tag-mysql",
            "xaml": "tag-xaml", "maui": "tag-maui", "winforms": "tag-winforms",
            "jquery": "tag-jquery", "bootstrap": "tag-bootstrap", "datatables": "tag-datatables",
            "react": "tag-react", "node.js": "tag-nodejs",
            "socket.io": "tag-socketio", "postgresql": "tag-postgresql",
            "docker": "tag-docker", "figma": "tag-figma", "git": "tag-git",
            "github": "tag-github", "gitlab": "tag-gitlab"
        };
        const tagClass = tagClasses[tech.toLowerCase()];
        if (tagClass) li.classList.add(tagClass);

        // Création du logo
        const extensionsSpeciales = { "datatables": "png" };
        const ext = extensionsSpeciales[nomFichier] || "svg";
        let logo = document.createElement("img");
        logo.src = `../assets/competences/${nomFichier}.${ext}`;
        logo.alt = String(tech);
        logo.width = 80;
        logo.height = 80;
        logo.classList.add("tech-logo");

        // Tooltip (lookup insensible à la casse)
        const cleCorrespondante = Object.keys(techDescriptions).find(k => k.toLowerCase() === tech.toLowerCase());
        const desc = cleCorrespondante ? techDescriptions[cleCorrespondante] : undefined;
        if (desc) {
            li.setAttribute("data-tooltip", desc);
        }

        // Ajout du logo et du texte
        li.appendChild(logo);
        li.append(` ${tech}`);

        techList.appendChild(li);
    });

    // Ajouter les images dans le div "projet-images"
    const imagesContainer = document.getElementById("projet-images");
    imagesContainer.innerHTML = "";

    const images = projets[projetId].images;

    // Masquer la section aperçu s'il n'y a pas d'images
    const titreApercu = document.querySelector(".projet-img");
    if (images.length === 0) {
        if (titreApercu) titreApercu.setAttribute("hidden", "");
        imagesContainer.setAttribute("hidden", "");
    } else if (images.length === 1) {
        // Image unique : affichage dans un wrapper identique au carrousel
        const wrapper = document.createElement("div");
        wrapper.classList.add("projet-image-wrapper");
        const picture = document.createElement("picture");
        const source = document.createElement("source");
        source.srcset = images[0].replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
        source.type = "image/webp";
        const img = document.createElement("img");
        img.src = images[0];
        img.alt = projets[projetId].title + " — capture 1";
        img.classList.add("projet-image");
        img.loading = "lazy";
        img.width = 1200;
        img.height = 800;
        picture.appendChild(source);
        picture.appendChild(img);
        wrapper.appendChild(picture);
        imagesContainer.appendChild(wrapper);
    } else {
        // Carrousel
        const carrousel = document.createElement("div");
        carrousel.classList.add("carrousel");

        // Bouton précédent
        const btnPrev = document.createElement("button");
        btnPrev.classList.add("carrousel-btn", "carrousel-prev");
        btnPrev.setAttribute("aria-label", "Image précédente");
        btnPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';

        // Track
        const track = document.createElement("div");
        track.classList.add("carrousel-track");

        images.forEach((imgSrc, index) => {
            const picture = document.createElement("picture");
            const source = document.createElement("source");
            source.srcset = imgSrc.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
            source.type = "image/webp";
            const img = document.createElement("img");
            img.src = String(imgSrc);
            img.alt = projets[projetId].title + " — capture " + (index + 1);
            img.classList.add("carrousel-slide");
            img.loading = "lazy";
            img.width = 1200;
            img.height = 800;
            if (index === 0) img.classList.add("active");
            picture.appendChild(source);
            picture.appendChild(img);
            track.appendChild(picture);
        });

        // Bouton suivant
        const btnNext = document.createElement("button");
        btnNext.classList.add("carrousel-btn", "carrousel-next");
        btnNext.setAttribute("aria-label", "Image suivante");
        btnNext.innerHTML = '<i class="fas fa-chevron-right"></i>';

        // Dots
        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("carrousel-dots");

        images.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.classList.add("carrousel-dot");
            if (index === 0) dot.classList.add("active");
            dot.setAttribute("aria-label", "Image " + (index + 1));
            dotsContainer.appendChild(dot);
        });

        // Compteur
        const counter = document.createElement("div");
        counter.classList.add("carrousel-counter");
        counter.textContent = "1 / " + images.length;

        carrousel.appendChild(btnPrev);
        carrousel.appendChild(track);
        carrousel.appendChild(btnNext);
        carrousel.appendChild(dotsContainer);
        carrousel.appendChild(counter);
        imagesContainer.appendChild(carrousel);

        // Logique du carrousel
        let diapoCourante = 0;
        const slides = track.querySelectorAll(".carrousel-slide");
        const dots = dotsContainer.querySelectorAll(".carrousel-dot");

        function allerASlide(index) {
            slides[diapoCourante].classList.remove("active");
            dots[diapoCourante].classList.remove("active");
            diapoCourante = (index + slides.length) % slides.length;
            slides[diapoCourante].classList.add("active");
            dots[diapoCourante].classList.add("active");
            counter.textContent = (diapoCourante + 1) + " / " + slides.length;
        }

        function slideSuivant() {
            allerASlide(diapoCourante + 1);
        }

        function slidePrecedent() {
            allerASlide(diapoCourante - 1);
        }

        btnNext.addEventListener("click", function () {
            slideSuivant();
            clearInterval(intervalleLectureAuto);
            intervalleLectureAuto = setInterval(slideSuivant, 4000);
        });
        btnPrev.addEventListener("click", function () {
            slidePrecedent();
            clearInterval(intervalleLectureAuto);
            intervalleLectureAuto = setInterval(slideSuivant, 4000);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => allerASlide(index));
        });

        // Clic sur image → modale plein écran avec navigation
        let indexModale = 0;
        let dernierFocusAvantModale = null;

        function ouvrirModale(index) {
            dernierFocusAvantModale = document.activeElement;
            indexModale = index;

            const modale = document.createElement("div");
            modale.classList.add("carrousel-modale");
            modale.setAttribute("role", "dialog");
            modale.setAttribute("aria-modal", "true");
            modale.setAttribute("aria-label", "Image en plein écran");

            // Bouton précédent
            const btnPrevModale = document.createElement("button");
            btnPrevModale.classList.add("carrousel-btn", "carrousel-prev");
            btnPrevModale.setAttribute("aria-label", "Image précédente");
            btnPrevModale.innerHTML = '<i class="fas fa-chevron-left"></i>';

            // Image
            const pictureModale = document.createElement("picture");
            const sourceModale = document.createElement("source");
            sourceModale.srcset = slides[indexModale].src.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
            sourceModale.type = "image/webp";
            const imgModale = document.createElement("img");
            imgModale.src = slides[indexModale].src;
            imgModale.alt = slides[indexModale].alt;
            pictureModale.appendChild(sourceModale);
            pictureModale.appendChild(imgModale);

            // Bouton suivant
            const btnNextModale = document.createElement("button");
            btnNextModale.classList.add("carrousel-btn", "carrousel-next");
            btnNextModale.setAttribute("aria-label", "Image suivante");
            btnNextModale.innerHTML = '<i class="fas fa-chevron-right"></i>';

            // Compteur
            const compteurModale = document.createElement("div");
            compteurModale.classList.add("carrousel-modale-counter");
            compteurModale.textContent = (indexModale + 1) + " / " + slides.length;

            // Bouton fermer
            const btnFermerModale = document.createElement("button");
            btnFermerModale.classList.add("carrousel-modale-fermer");
            btnFermerModale.setAttribute("aria-label", "Fermer");
            btnFermerModale.textContent = "\u2715";

            modale.appendChild(btnPrevModale);
            modale.appendChild(pictureModale);
            modale.appendChild(btnNextModale);
            modale.appendChild(compteurModale);
            modale.appendChild(btnFermerModale);
            document.body.appendChild(modale);

            modale.offsetHeight;
            modale.classList.add("active");
            modale.setAttribute("tabindex", "-1");
            btnFermerModale.focus();

            function mettreAJourImage() {
                imgModale.src = slides[indexModale].src;
                imgModale.alt = slides[indexModale].alt;
                sourceModale.srcset = slides[indexModale].src.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
                compteurModale.textContent = (indexModale + 1) + " / " + slides.length;
            }

            function imageSuivante(e) {
                e.stopPropagation();
                indexModale = (indexModale + 1) % slides.length;
                mettreAJourImage();
            }

            function imagePrecedente(e) {
                e.stopPropagation();
                indexModale = (indexModale - 1 + slides.length) % slides.length;
                mettreAJourImage();
            }

            function fermerModale() {
                modale.classList.remove("active");
                document.removeEventListener("keydown", gestionnaireClavier);
                modale.addEventListener("transitionend", () => modale.remove(), {once: true});
                if (dernierFocusAvantModale) dernierFocusAvantModale.focus();
            }

            function gestionnaireClavier(e) {
                if (e.key === "Escape") {
                    fermerModale();
                } else if (e.key === "ArrowRight") {
                    indexModale = (indexModale + 1) % slides.length;
                    mettreAJourImage();
                } else if (e.key === "ArrowLeft") {
                    indexModale = (indexModale - 1 + slides.length) % slides.length;
                    mettreAJourImage();
                } else if (e.key === "Tab") {
                    const elementsFocusables = modale.querySelectorAll('button');
                    const premier = elementsFocusables[0];
                    const dernier = elementsFocusables[elementsFocusables.length - 1];
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

            btnPrevModale.addEventListener("click", imagePrecedente);
            btnNextModale.addEventListener("click", imageSuivante);
            btnFermerModale.addEventListener("click", function (e) {
                e.stopPropagation();
                fermerModale();
            });
            modale.addEventListener("click", function (e) {
                if (e.target === modale) fermerModale();
            });
            document.addEventListener("keydown", gestionnaireClavier);
        }

        slides.forEach((slide, index) => {
            slide.setAttribute("tabindex", "0");
            slide.setAttribute("role", "button");
            slide.setAttribute("aria-label", "Agrandir l'image " + (index + 1));
            slide.addEventListener("click", () => ouvrirModale(index));
            slide.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    ouvrirModale(index);
                }
            });
        });

        // Navigation clavier (flag pour éviter un querySelector à chaque frappe)
        let modaleOuverte = false;
        const observateurModale = new MutationObserver(function () {
            modaleOuverte = !!document.querySelector(".carrousel-modale");
        });
        observateurModale.observe(document.body, { childList: true });

        document.addEventListener("keydown", (e) => {
            if (modaleOuverte) return;
            if (e.key === "ArrowRight") slideSuivant();
            if (e.key === "ArrowLeft") slidePrecedent();
        });

        // Auto-play avec pause au hover
        let intervalleLectureAuto = setInterval(slideSuivant, 4000);

        carrousel.addEventListener("mouseenter", function () {
            clearInterval(intervalleLectureAuto);
        });

        carrousel.addEventListener("mouseleave", function () {
            intervalleLectureAuto = setInterval(slideSuivant, 4000);
        });

    }

    const projetLinkContainer = document.getElementById("projet-link");

    // Efface tout contenu précédent dans le conteneur du lien
    projetLinkContainer.innerHTML = "";

    // Vérifier si un lien existe pour ce projet
    if (projets[projetId].link) {
        const linkElement = document.createElement("a");
        linkElement.href = projets[projetId].link;
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";

        const isGithub = projets[projetId].link.includes("github.com");
        const icon = document.createElement("i");
        icon.classList.add(isGithub ? "fab" : "fas", isGithub ? "fa-github" : "fa-external-link-alt");
        icon.setAttribute("aria-hidden", "true");
        linkElement.appendChild(icon);
        linkElement.append(isGithub ? " Voir sur GitHub" : " Voir le projet en ligne");

        projetLinkContainer.appendChild(linkElement);

        // Rendre le conteneur visible UNIQUEMENT s'il y a un lien
        projetLinkContainer.removeAttribute('hidden');
    } else {
        // S'assurer que le conteneur est masqué s'il n'y a pas de lien
        projetLinkContainer.setAttribute('hidden', '');
    }
}