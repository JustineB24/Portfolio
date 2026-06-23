// ==============================
// projet-details.js — Détails d'un projet : données, carrousel, modale
// ==============================

// Récupérer l'ID du projet depuis l'URL (lettres, chiffres et tirets uniquement)
const urlParams = new URLSearchParams(window.location.search);
const rawId = urlParams.get("id");
const projetId = rawId && /^[a-z0-9-]+$/.test(rawId) ? rawId : null;

// Base de données des projets
const projets = {
    "yabt": {
        title: "YABT — Yet Another Blind Test",
        date: "Novembre 2025 — en cours",
        images: [
            "../assets/projets/yabt/Logo.png",
            "../assets/projets/yabt/Mascotte.png",
            "../assets/projets/yabt/Nuancier.png"
        ],
        description: "Projet de groupe réalisé à 4 durant l'année de Bachelor Développement & IA. YABT est une application web de blind test et quiz musical multijoueur en temps réel. Les joueurs créent ou rejoignent des parties via un code ou un QR code, et s'affrontent sur des extraits musicaux provenant de l'API Deezer. L'application propose plusieurs modes de jeu (Classique, Speedrun, Battle Royale, Jackpot, Combo Breaker), un système de comptes avec progression par niveaux, des avatars déblocables, ainsi qu'un créateur de QCM personnalisés. L'identité visuelle (logo, mascotte animée, icônes néon) a été entièrement conçue par l'équipe. Le projet suit une méthodologie Agile et sera présenté devant un jury en fin d'année.",
        technologies: ["React", "Node.js", "Socket.io", "MySQL", "Docker", "Figma", "GitHub"],
        link: "https://github.com/OujidKarim/YABT_main",
        enCours: true,
        etudeDeCas: {
            contexte: "Les blind tests entre amis se font souvent sur des applications payantes, limitées en fonctionnalités ou sans vrai mode multijoueur en temps réel. On voulait créer une alternative gratuite, fun et complète, jouable directement dans le navigateur.",
            reflexion: "Avant d'écrire la moindre ligne de code, on a passé plusieurs semaines à structurer le projet comme un vrai projet professionnel : cahier des charges, maquettes Figma complètes (wireframes, design system, prototypes interactifs), choix des technologies, répartition des rôles et méthodologie Agile. C'est grâce à ce projet que j'ai appris à utiliser Figma et à concevoir une identité visuelle cohérente (logo, mascotte, nuancier, icônes néon).",
            defis: [
                "Structurer un projet ambitieux de zéro — cahier des charges, maquettes, architecture technique — avant même de coder",
                "Apprendre Figma en partant de rien pour concevoir des maquettes professionnelles et un design system complet",
                "Se coordonner à 4 avec Git et une méthodologie Agile, en se répartissant les rôles clairement",
                "Faire des choix techniques adaptés (React, Socket.io, Docker) en anticipant les contraintes du temps réel multijoueur"
            ],
            resultat: "Projet encore en phase de conception et de maquettage. L'identité visuelle est finalisée (logo, mascotte, nuancier) et les maquettes Figma sont complètes. Le projet sera présenté devant un jury en fin d'année de Bachelor."
        }
    },
    "gecko": {
        title: "Gecko — Plateforme de gestion interne",
        date: "Septembre 2025 — aujourd'hui",
        images: [],
        description: "Application web métier développée en alternance chez Litesoft pour un client du secteur de l'édition et de la distribution. Cette plateforme intranet, sur laquelle je travaille à temps plein depuis mon arrivée, centralise la gestion commerciale, la facturation, le suivi des activités et la logistique. Je travaille en mode ticketing via Asana et j'ai repris un projet legacy existant que je modernise progressivement : refactoring de fichiers monolithiques en classes dédiées, mise en place de l'autoload PSR-4 sur l'ensemble du projet, passage aux standards de nommage PSR-1/4/12, et remplacement systématique des pratiques obsolètes (jointures SQL implicites, paramètres ambigus, comparaisons lâches). Parmi les développements majeurs : refonte complète du système de filtres avancés sur tous les tableaux de l'application (recherche par colonne, filtres favoris, opérateurs multiples), migration des tableaux du mode server-side vers client-side, ajout de fonctionnalités métier (traductions multi-langue, import Excel, gestion de stock, prévisualisation d'articles), audits de sécurité (prévention XSS, échappement systématique), et optimisations SQL (élimination de requêtes N+1, insertions batch). Pour améliorer ma productivité, j'utilise Claude Code au quotidien comme assistant technique : j'ai mis en place un fichier de conventions servant de référence complète du projet, des commandes personnalisées pour lancer des audits techniques automatisés (sécurité, performance, qualité) et générer des récapitulatifs de modifications, ainsi qu'un plan de résolution organisé pour prioriser la dette technique. Le projet repose sur une architecture MVC en PHP 8.3 avec PostgreSQL, un frontend en JavaScript, jQuery, Bootstrap et DataTables, du temps réel via Node.js et Socket.IO, et un pipeline CI/CD sur GitLab.",
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
        description: "Développement d'un site web vitrine pour le restaurant Panada Food sur une durée de 6 semaines en deuxième année de BTS SIO, en binôme avec une collègue. Le restaurant venait d'ouvrir et ne possédait aucune présence en ligne. On s'est déplacées sur place pour récolter les informations et comprendre les attentes du gérant, puis on a conçu et développé le site de A à Z. Le site inclut une page d'accueil, le menu du restaurant, un formulaire de contact et les mentions légales conformes au RGPD. Il a été mis en ligne via un hébergement OVH.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://panadafood.ovh",
        etudeDeCas: {
            contexte: "Panada Food est un restaurant de restauration rapide à Amiens qui venait d'ouvrir et ne possédait pas encore de site web. En binôme avec une collègue, on s'est proposées pour leur en créer un durant notre stage de 6 semaines en deuxième année de BTS SIO.",
            reflexion: "Le restaurant n'ayant aucune présence en ligne, il fallait partir de zéro : se déplacer sur place pour récolter les informations (menu, photos, attentes du gérant), concevoir le design, développer le site, gérer la conformité RGPD et les mentions légales, puis mettre en ligne via un hébergement OVH.",
            defis: [
                "Travailler en grande autonomie — le maître de stage n'était présent que de 11h à 14h et les délais de réponse étaient longs",
                "Se coordonner en binôme, en partie en télétravail, pour se répartir les tâches efficacement",
                "Partir de zéro sans maquette ni cahier des charges fourni — il a fallu aller chercher les informations directement auprès du gérant",
                "Assurer la conformité légale du site : mentions légales, crédits photographiques, respect du RGPD"
            ],
            resultat: "Site vitrine livré dans les temps et mis en ligne sur panadafood.ovh. Ce stage a renforcé notre autonomie, notre esprit d'équipe et nos compétences en programmation dans un contexte professionnel réel."
        }
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
        technologies: ["HTML", "CSS", "PHP", "C#", "MySQL"]
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
        technologies: ["WinForms", "C#", "MySQL"]
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
        technologies: ["PHP", "CSS", "JavaScript", "MySQL"]
    },
    "meteo": {
        title: "Application météo",
        date: "Septembre — Octobre 2024",
        images: ["../assets/projets/meteo/Meteo.png"],
        description: "Application web développée pour afficher en temps réel les conditions météorologiques d'une ville choisie par l'utilisateur. En utilisant l'API OpenWeather, ce projet permet de consulter la température actuelle, l'humidité ainsi qu'une description du temps (ensoleillé, nuageux, etc.). L'interface propose une zone de recherche, un affichage centralisé des données principales, et un design épuré avec fond personnalisé. Le JavaScript assure la récupération dynamique des données météo et la mise à jour instantanée de l'affichage après chaque recherche.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "generateur-mdp": {
        title: "Générateur de mots de passe",
        date: "Septembre 2024",
        images: ["../assets/projets/generateur_mdp/Generateur_mdp.png"],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "mairie-cauffry": {
        title: "Mairie de Cauffry",
        date: "27/05/2024 — 21/06/2024",
        images: [
            "../assets/projets/mairie_de_cauffry/Accueil.png",
            "../assets/projets/mairie_de_cauffry/Adico_collectivite.png",
            "../assets/projets/mairie_de_cauffry/Adico_arborescence.png",
            "../assets/projets/mairie_de_cauffry/Adicloud.png",
            "../assets/projets/mairie_de_cauffry/Visuel_site.png"
        ],
        description: "Réalisation d'un site web pour la commune de Cauffry dans le cadre du stage de 4 semaines de première année de BTS SIO, en partenariat avec l'Adico (Association pour le développement et l'innovation numérique des collectivités). L'ancien site étant devenu indisponible, j'ai récupéré son contenu via la Wayback Machine, rempli le recueil de besoins Adico, conçu l'arborescence et alimenté les pages via Adicloud. En parallèle, j'ai aussi géré la sauvegarde des mails de la maire vers un disque dur externe et proposé des prototypes de logo pour la commune.",
        technologies: ["HTML", "CSS"],
        link: "https://mairiecauffry.fr/",
        etudeDeCas: {
            contexte: "Le site web de la mairie de Cauffry était devenu indisponible peu avant le début du stage. La commune avait besoin d'un nouveau site, développé en partenariat avec l'Adico, une plateforme mutualisée de services numériques pour les collectivités territoriales.",
            reflexion: "L'ancien site étant hors ligne, il fallait retrouver son contenu pour ne pas repartir de zéro. J'ai utilisé la Wayback Machine pour récupérer les pages de l'ancien site, en vérifiant que les informations étaient encore à jour avant de les réinjecter. Le travail s'est ensuite organisé autour de l'outil Adico : création du recueil de besoins, définition de l'arborescence, puis envoi des dossiers sur Adicloud pour alimenter les pages.",
            defis: [
                "Récupérer le contenu d'un site totalement disparu grâce à la Wayback Machine",
                "Corriger une erreur dans l'arborescence Adico — le dossier « Services aux administrés » était manquant, ce qui a nécessité un appel au support",
                "Gérer en parallèle d'autres missions : sauvegarde des mails Gmail de la maire vers un disque dur avec Mbox Viewer, et propositions de prototypes de logo",
                "Respecter un délai serré de 4 semaines pour livrer le site complet"
            ],
            resultat: "Site livré dans les temps et mis en ligne. Ce stage m'a appris à travailler avec un prestataire externe (Adico), à gérer la pression des délais en contexte professionnel, et m'a fait découvrir le fonctionnement d'une collectivité territoriale de l'intérieur."
        }
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
    if (hero && heroColors[projetId]) {
        const colors = heroColors[projetId];
        if (colors.length > 2) {
            hero.style.background = "linear-gradient(135deg, " + colors.join(", ") + ")";
        } else {
            hero.style.setProperty("--hero-color", colors[0]);
            hero.style.setProperty("--hero-color-dark", colors[1]);
        }
    }

    const titreProjet = document.getElementById("projet-title");
    if (titreProjet) titreProjet.textContent = projets[projetId].title;
    document.title = "Portfolio | " + projets[projetId].title;

    // Date du projet
    if (titreProjet && projets[projetId].date) {
        const dateEl = document.createElement("span");
        dateEl.classList.add("projet-date");
        dateEl.textContent = projets[projetId].date;
        titreProjet.after(dateEl);
    }

    // Badge "En cours de développement"
    if (projets[projetId].enCours) {
        // Insérer après la date si elle existe, sinon après le titre
        const afterEl = (hero && hero.querySelector(".projet-date")) || titreProjet;
        if (afterEl) {
            const badge = document.createElement("span");
            badge.classList.add("badge-en-cours");
            badge.textContent = "En cours de développement";
            afterEl.after(badge);
        }
    }

    // Mise à jour des meta sociales dynamiquement (Open Graph + Twitter Cards)
    const metaTitre = 'Portfolio | ' + projets[projetId].title;
    const metaDesc = projets[projetId].description.substring(0, 200);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', metaTitre);
    if (ogDesc) ogDesc.setAttribute('content', metaDesc);
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // Twitter accepte aussi bien property="twitter:*" que name="twitter:*"
    const twitterTitle = document.querySelector('meta[name="twitter:title"], meta[property="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"], meta[property="twitter:description"]');
    if (twitterTitle) twitterTitle.setAttribute('content', metaTitre);
    if (twitterDesc) twitterDesc.setAttribute('content', metaDesc);

    const descriptionEl = document.getElementById("projet-description");
    if (descriptionEl) descriptionEl.textContent = projets[projetId].description;


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
    if (techList) techList.innerHTML = "";

    const technologies = projets[projetId].technologies || [];
    if (techList) technologies.forEach(tech => {
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
        const extensionsSpeciales = {"datatables": "png"};
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
            // Accessibilité : focusable au clavier (déclenche le tooltip CSS via :focus)
            // et description exposée aux lecteurs d'écran via aria-label.
            li.setAttribute("tabindex", "0");
            li.setAttribute("aria-label", tech + " — " + desc);
        }

        // Ajout du logo et du texte
        li.appendChild(logo);
        li.append(` ${tech}`);

        techList.appendChild(li);
    });

    // Étude de cas (si disponible)
    if (projets[projetId].etudeDeCas) {
        const etude = projets[projetId].etudeDeCas;
        const sectionEtude = document.createElement("div");
        sectionEtude.classList.add("etude-de-cas");

        const titreEtude = document.createElement("h2");
        titreEtude.classList.add("title-blocs");
        titreEtude.innerHTML = '<i class="fas fa-lightbulb" aria-hidden="true"></i> Étude de cas';
        sectionEtude.appendChild(titreEtude);

        const etapes = [
            {icone: "fa-crosshairs", titre: "Le contexte", contenu: etude.contexte},
            {icone: "fa-brain", titre: "La réflexion", contenu: etude.reflexion},
            {icone: "fa-mountain", titre: "Les défis rencontrés", contenu: etude.defis},
            {icone: "fa-flag-checkered", titre: "Le résultat", contenu: etude.resultat}
        ];

        const timeline = document.createElement("div");
        timeline.classList.add("etude-timeline");

        etapes.forEach(function (etape) {
            const bloc = document.createElement("div");
            bloc.classList.add("etude-etape");

            const iconeDiv = document.createElement("div");
            iconeDiv.classList.add("etude-etape-icone");
            iconeDiv.innerHTML = '<i class="fas ' + etape.icone + '"></i>';
            bloc.appendChild(iconeDiv);

            const contenuDiv = document.createElement("div");
            contenuDiv.classList.add("etude-etape-contenu");

            const h3 = document.createElement("h3");
            h3.textContent = etape.titre;
            contenuDiv.appendChild(h3);

            if (Array.isArray(etape.contenu)) {
                const ul = document.createElement("ul");
                etape.contenu.forEach(function (item) {
                    const li = document.createElement("li");
                    li.textContent = item;
                    ul.appendChild(li);
                });
                contenuDiv.appendChild(ul);
            } else {
                const p = document.createElement("p");
                p.textContent = etape.contenu;
                contenuDiv.appendChild(p);
            }

            bloc.appendChild(contenuDiv);
            timeline.appendChild(bloc);
        });

        sectionEtude.appendChild(timeline);

        // Insérer avant la section images
        const projetDetails = document.querySelector(".projet-details");
        const titreApercu2 = document.querySelector(".projet-img");
        if (projetDetails) projetDetails.insertBefore(sectionEtude, titreApercu2);
    }

    // Ajouter les images dans le div "projet-images"
    const imagesContainer = document.getElementById("projet-images");
    const images = projets[projetId].images || [];

    // Masquer la section aperçu s'il n'y a pas d'images
    const titreApercu = document.querySelector(".projet-img");
    if (!imagesContainer) {
        // Pas de conteneur d'images : on saute tout le rendu d'images
    } else if (images.length === 0) {
        imagesContainer.innerHTML = "";
        if (titreApercu) titreApercu.setAttribute("hidden", "");
        imagesContainer.setAttribute("hidden", "");
    } else if (images.length === 1) {
        imagesContainer.innerHTML = "";
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
        imagesContainer.innerHTML = "";
        // Carrousel
        const carrousel = document.createElement("div");
        carrousel.classList.add("carrousel");
        // Conteneur focusable + sémantique de groupe pour les lecteurs d'écran
        carrousel.setAttribute("role", "group");
        carrousel.setAttribute("aria-label", "Galerie d'images du projet");
        carrousel.setAttribute("tabindex", "0");

        // Bouton précédent
        const btnPrev = document.createElement("button");
        btnPrev.classList.add("carrousel-btn", "carrousel-prev");
        btnPrev.setAttribute("aria-label", "Image précédente");
        btnPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';

        // Track
        const track = document.createElement("div");
        track.classList.add("carrousel-track");

        images.forEach((imgSrc, index) => {
            // Bouton réel rendant l'image cliquable (navigation clavier native Entrée/Espace).
            // Styles inline pour reprendre, sans toucher au CSS, le positionnement que
            // `.carrousel-track picture` appliquait auparavant (empilement des slides).
            const boutonSlide = document.createElement("button");
            boutonSlide.type = "button";
            boutonSlide.classList.add("carrousel-slide-btn");
            boutonSlide.setAttribute("aria-label", "Agrandir : " + projets[projetId].title + " — image " + (index + 1));
            boutonSlide.style.position = index === 0 ? "relative" : "absolute";
            boutonSlide.style.top = "0";
            boutonSlide.style.left = "0";
            boutonSlide.style.width = "100%";
            boutonSlide.style.height = "100%";
            boutonSlide.style.padding = "0";
            boutonSlide.style.border = "none";
            boutonSlide.style.background = "none";
            boutonSlide.style.cursor = "pointer";
            boutonSlide.style.display = "block";

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
            boutonSlide.appendChild(picture);
            track.appendChild(boutonSlide);
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
        counter.setAttribute("aria-live", "polite");
        counter.setAttribute("aria-atomic", "true");
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

        function boutonDeSlide(slide) {
            return slide.closest(".carrousel-slide-btn");
        }

        function allerASlide(index) {
            slides[diapoCourante].classList.remove("active");
            dots[diapoCourante].classList.remove("active");
            const ancienBouton = boutonDeSlide(slides[diapoCourante]);
            if (ancienBouton) ancienBouton.style.position = "absolute";
            diapoCourante = (index + slides.length) % slides.length;
            slides[diapoCourante].classList.add("active");
            dots[diapoCourante].classList.add("active");
            const nouveauBouton = boutonDeSlide(slides[diapoCourante]);
            if (nouveauBouton) nouveauBouton.style.position = "relative";
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
        // Flag indiquant si la modale plein écran est ouverte (remplace l'ancien MutationObserver)
        let modaleOuverte = false;

        function ouvrirModale(index) {
            dernierFocusAvantModale = document.activeElement;
            indexModale = index;
            modaleOuverte = true;

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
            compteurModale.setAttribute("aria-live", "polite");
            compteurModale.setAttribute("aria-atomic", "true");
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
                modaleOuverte = false;
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

        // L'image cliquable est enveloppée dans un vrai <button> :
        // la navigation clavier (Entrée/Espace) est gérée nativement.
        const boutonsSlide = track.querySelectorAll(".carrousel-slide-btn");
        boutonsSlide.forEach((bouton, index) => {
            bouton.addEventListener("click", () => ouvrirModale(index));
        });

        // Navigation clavier des flèches : restreinte au focus dans le carrousel
        document.addEventListener("keydown", (e) => {
            if (modaleOuverte) return;
            if (!carrousel.contains(document.activeElement)) return;
            if (e.key === "ArrowRight") {
                slideSuivant();
                clearInterval(intervalleLectureAuto);
                intervalleLectureAuto = setInterval(slideSuivant, 4000);
            }
            if (e.key === "ArrowLeft") {
                slidePrecedent();
                clearInterval(intervalleLectureAuto);
                intervalleLectureAuto = setInterval(slideSuivant, 4000);
            }
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
    if (projetLinkContainer) projetLinkContainer.innerHTML = "";

    // Vérifier si un lien existe pour ce projet
    if (projetLinkContainer && projets[projetId].link) {
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
    } else if (projetLinkContainer) {
        // S'assurer que le conteneur est masqué s'il n'y a pas de lien
        projetLinkContainer.setAttribute('hidden', '');
    }
}