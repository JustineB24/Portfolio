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
        titre: "YABT — Yet Another Blind Test",
        date: "Février 2026 — en cours",
        images: [
            "../assets/projets/yabt/Capture_liste_parties.jpg",
            "../assets/projets/yabt/Capture_salon.jpg",
            "../assets/projets/yabt/Capture_partie.jpg",
            "../assets/projets/yabt/Capture_resultats.jpg",
            "../assets/projets/yabt/Capture_creation.jpg",
            "../assets/projets/yabt/Capture_compte.jpg",
            "../assets/projets/yabt/Maquette_accueil.png",
            "../assets/projets/yabt/Maquette_creation.png",
            "../assets/projets/yabt/Maquette_lobby.png",
            "../assets/projets/yabt/Maquette_en_partie.png",
            "../assets/projets/yabt/Maquette_resultats.png",
            "../assets/projets/yabt/Maquette_profil.png",
            "../assets/projets/yabt/Logo.png",
            "../assets/projets/yabt/Mascotte.jpg",
            "../assets/projets/yabt/Nuancier.png"
        ],
        description: "Projet fil rouge du Bachelor Chef de projet développement et data, mené à quatre depuis février 2026. YABT est une application web de blind test musical multijoueur en temps réel. Les joueurs créent ou rejoignent une partie par un code ou un QR code, discutent dans le salon et s'affrontent sur des extraits musicaux issus de l'API Deezer. La version 1 livrée propose le mode Classique, des comptes avec avatar et l'historique des parties ; les quatre autres modes (Speedrun, Battle Royale, Jackpot, Combo Breaker) sont annoncés dans l'interface comme à venir. Le mode quiz et la création de blind tests sont développés et testés, mais restent fermés tant que le moteur de jeu ne sait pas les dérouler : l'équipe a préféré ne pas ouvrir une fonctionnalité qui mène à une impasse. L'identité visuelle est un travail à plusieurs mains : le logo a été réalisé par un camarade en webdesign, les icônes néon ont été générées par IA, et j'ai dessiné la mascotte animée sur Inkscape. Le projet suit une méthode Agile, Scrum et Kanban sur Jira.",
        technologies: ["React", "Tailwind CSS", "Node.js", "Socket.io", "MySQL", "Docker", "Figma", "GitHub"],
        liens: [
            {libelle: "API Deezer", url: "https://developers.deezer.com/api"}
        ],
        statut: "V1 livrée",
        etudeDeCas: {
            contexte: "L'idée vient d'abord d'une passion pour la musique : c'est ce qui a orienté le choix du sujet parmi tous ceux possibles en Bachelor. Le constat a suivi. Les blind tests entre amis se font souvent sur des applications payantes, limitées en fonctionnalités ou sans vrai mode multijoueur en temps réel. On voulait une alternative gratuite, complète et jouable directement dans le navigateur.",
            reflexion: "On a d'abord structuré le projet comme un projet professionnel : cahier des charges, vingt-cinq user stories, zoning, wireframes, maquettes Figma et design system, choix des technologies et répartition des rôles. Le socle technique, dépôts, Docker et base de données, a été posé dès le cadrage. Mon périmètre de départ était la création de contenu : les routes, contrôleurs et modèles des quiz et des blind tests, un proxy Deezer qui ne renvoie au navigateur que les champs utiles, et les écrans de création avec recherche en direct et écoute d'un extrait. Il s'est ensuite élargi à la chaîne musicale, à la sécurité, aux tests et à l'installation reproductible. C'est aussi avec ce projet que j'ai appris Figma.",
            defis: [
                "Construire la playlist d'une partie : un mélange de Fisher-Yates pour que chaque ordre ait la même chance de sortir, le regroupement des versions d'un même titre et la détection de l'artiste dominant",
                "Couvrir de tests un moteur de jeu que je n'avais pas écrit : ils ont mis au jour cinq défauts réels, corrigés dans la foulée",
                "Fermer une lecture de fichier arbitraire sur le service des extraits audio, une élévation de privilège à l'inscription, et poser le contrôle d'accès sur les routes de compte",
                "Compléter la chaîne d'intégration continue posée par un camarade (audit, lint, tests et build sur GitHub Actions à chaque push et pull request), et corriger un job qui consommait 1 975 des 2 000 minutes mensuelles en attendant une connexion jamais fermée",
                "Se coordonner à quatre avec Git et une méthode Agile, et accepter de resserrer la version 1 pour livrer quelque chose de solide"
            ],
            resultat: "La version 1 est livrée et jouable de bout en bout, la première partie complète ayant été jouée fin juin 2026. Elle s'appuie sur une suite de 534 tests automatisés, tous au vert : 391 côté serveur avec Jest et Supertest, 143 côté interface avec Vitest et Testing Library. Le projet n'a pas été mis en production et se poursuit : raccorder les blind tests créés au moteur de jeu, rouvrir le quiz, puis ajouter les modes restants et les niveaux. Les maquettes Figma couvrent une quarantaine d'écrans, chacun en version bureau et téléphone. Les six premiers visuels sont des captures de l'application, les suivants les maquettes. Le projet a été soutenu devant le jury du titre professionnel Concepteur développeur d'applications."
        }
    },
    "gecko": {
        titre: "Gecko",
        date: "Septembre 2025 — aujourd'hui",
        images: [
            "../assets/projets/gecko/Page_article.png",
            "../assets/projets/gecko/Page_article_recherche.png",
            "../assets/projets/gecko/Filtres_favoris.png",
            "../assets/projets/gecko/Stocks_Paris_preparation.png"
        ],
        description: "Application web métier d'un client du secteur de l'édition et de la distribution, développée par l'équipe de Litesoft où je suis en alternance. C'est un intranet utilisé chaque jour par des dizaines de personnes sur plusieurs sites : catalogue, CRM, facturation, fabrication, stocks et expédition. Je travaille par tickets, transmis par le chef de projet qui recueille le besoin auprès du client et valide les livraisons en test : plus de cinquante sur douze mois, souvent sur toute la chaîne, du script SQL à l'interface. Je fusionne moi-même sur l'environnement de test et j'applique les scripts de migration de base en préproduction et en production. Le reste va à la modernisation de l'existant plutôt qu'à l'empilement : imports sortis des contrôleurs en classes dédiées, Composer et autoload PSR-4 sur tout le projet, interface passée entièrement à Tailwind CSS. J'utilise Claude Code au quotidien, intégré à PhpStorm, chaque proposition étant relue. Le socle est une architecture MVC en PHP 8.3 avec PostgreSQL, un frontend en JavaScript, jQuery et DataTables stylé avec Tailwind CSS, du temps réel via Node.js et Socket.IO, et une chaîne de déploiement GitLab sur quatre environnements : développement, test, préproduction et production.",
        technologies: ["PHP", "JavaScript", "PostgreSQL", "jQuery", "Tailwind CSS", "DataTables", "Node.js", "Socket.io", "GitLab", "MAMP"],
        liens: [
            {libelle: "Litesoft", url: "https://www.litesoft.fr/"},
            {libelle: "Claude Code", url: "https://claude.com/product/claude-code"}
        ],
        statut: "En production",
        etudeDeCas: {
            contexte: "Gecko est l'ERP interne d'un éditeur-distributeur de livres, utilisé chaque jour par des dizaines de personnes réparties sur plusieurs sites. Développé par l'équipe Litesoft depuis 2021, il couvre toute la chaîne : catalogue, CRM, facturation, fabrication, stock et expédition. Je l'ai rejoint en septembre 2025 dans le cadre de mon alternance. L'enjeu n'est donc pas de partir d'une page blanche, mais de m'intégrer efficacement dans un gros projet existant et toujours très actif, et d'y contribuer en full-stack.",
            reflexion: "Intervenir sur une application de cette taille, c'est d'abord savoir naviguer dans l'existant. Je travaille par tickets, en touchant souvent toute la chaîne (contrôleur PHP, classe métier, requête SQL, interface). Mon fil conducteur : moderniser et fiabiliser l'existant plutôt que d'empiler du code, sans jamais de bascule brutale sur une application en production, en passant par la standardisation (Composer, autoload PSR-4), la sécurité et la performance.",
            defis: [
                "Reprendre, fiabiliser et étendre le filtre par colonne qui existait déjà dans Gecko, jusqu'à un moteur commun à tous les tableaux : opérateurs adaptés au type de donnée (texte, nombre, date, EAN) et filtres favoris sauvegardables. C'est le plus gros chantier de l'année, une centaine de fichiers d'octobre 2025 à janvier 2026, et la fonctionnalité est utilisée tous les jours par toutes les équipes.",
                "Mener la migration de l'interface vers Tailwind CSS écran par écran, jusqu'au retrait complet de Bootstrap en juin 2026, en préservant le comportement de 70 à 80 tableaux de données. Dans la foulée, retirer jQuery UI : Flatpickr pour les dates, SortableJS pour le glisser-déposer, Floating UI pour les info-bulles et des moteurs maison pour les fenêtres déplaçables. Près d'une centaine de pages sont couvertes par des tests navigateur, rejoués avant et après chaque changement.",
                "Faire passer le projet à Composer et à l'autoload PSR-4 (plus de 400 fichiers), puis sortir les imports de deux contrôleurs surchargés : plus de 4 000 lignes déplacées vers une classe mère et une vingtaine de classes spécialisées.",
                "Auditer et optimiser une quarantaine de pages : élimination de requêtes N+1, l'ouverture d'une facture passant de 201 requêtes à une seule, requêtes préparées et échappement XSS systématique.",
                "Développer le module de stocks du site de Paris : six écrans, de la réception à l'écart d'inventaire, livrés par lots à partir d'une maquette fournie par le client.",
                "Écrire près de la moitié du fichier d'intégration continue, avec un versionnement des assets par empreinte de contenu qui empêche trois pannes de déploiement : un site sans CSS, un JavaScript périmé servi par le cache et un asset introuvable en silence.",
                "Concevoir une « page modèle » : un template CRUD réutilisable (liste avec filtres + formulaire Nouveau / Modifier / Supprimer) qui sert de référence d'architecture à l'équipe pour démarrer rapidement une nouvelle interface, documenté pas à pas et fonctionnel sans base de données grâce à un jeu de données de démonstration."
            ],
            resultat: "Au fil de mon alternance, j'ai contribué en continu à un ERP en production : plus de cinquante tickets livrés, un moteur de filtres utilisé par toutes les équipes, une interface entièrement passée à Tailwind CSS, une base de code assainie (PSR-4, imports en classes), un module de stocks pour le site de Paris, une chaîne d'intégration continue plus sûre et une page modèle servant de référence à l'équipe. J'y apprends surtout à être autonome dans une grande base de code d'équipe, avec une vraie exigence de non-régression, de sécurité et de performance."
        }
    },
    "flouflix": {
        titre: "Flouflix",
        date: "Juillet 2026",
        images: [],
        description: "Application mobile de recherche de films et de séries, construite à deux en deux jours pendant le Bachelor. La contrainte était inversée : produire volontairement l'interface la plus laide et la moins utilisable possible. L'exercice avait deux objectifs, découvrir React Native et Expo, et pousser les mauvaises pratiques d'ergonomie assez loin pour comprendre pourquoi ce sont de mauvaises pratiques. Sous la couche ratée, l'application fonctionne vraiment. Trois écrans, liste, détail et favoris, avec recherche et filtres construits sur les données de l'API TVmaze. Les favoris sont gérés en CRUD, leur état partagé entre les écrans par un contexte React.",
        liens: [
            {libelle: "API TVmaze", url: "https://www.tvmaze.com/api"}
        ],
        technologies: ["React Native", "Expo", "JavaScript"],
    },
    "limite-limite": {
        titre: "Limite Limite — API",
        date: "Septembre 2026",
        images: ["../assets/projets/limite_limite/Reponse_API.png"],
        description: "Exercice de Bachelor réalisé en binôme, dont le sujet était la chaîne d'intégration et de déploiement continus plus que l'application elle-même. L'application est volontairement petite : une API PHP 8.2 qui renvoie en JSON une association tirée au hasard entre une carte question à trou et une carte réponse, sur le principe du jeu Limite Limite. Le code suit une architecture MVC légère, et le contrôleur reçoit sa connexion à la base par injection de dépendances, ce qui permet de le tester avec un mock sans base réelle. L'environnement tient dans Docker Compose, un service PHP et un service MySQL 8 initialisé par un script SQL. À chaque push ou pull request sur les branches develop et prod, GitHub Actions audite les dépendances avec Composer, vérifie le respect du standard PSR-12 avec PHP_CodeSniffer et lance les tests PHPUnit. À la fin de cette intégration, un second workflow déploie le code par SSH sur un VPS, dans un environnement de développement puis de production. Le travail suit le même circuit : développement sur develop, puis passage en production par pull request.",
        technologies: ["PHP", "MySQL", "Docker", "GitHub"],
        liens: [
            {libelle: "Dépôt GitHub", url: "https://github.com/JustineB24/limite-limite"}
        ],
    },
    "grimoire-recettes": {
        titre: "Le Grimoire des Recettes",
        date: "2025 — en cours",
        images: ["../assets/projets/grimoire_recettes/Maquette.png"],
        description: "Projet personnel réalisé dans le but de tester les capacités des intelligences artificielles en développement. Le point de départ : une simple idée de carnet de recettes numérique et une maquette rapide dessinée sur tablette. Le cahier des charges a été rédigé avec Gemini (Google), puis l'intégralité du code a été générée par Claude Code (Anthropic). Le résultat est une application web complète (PWA installable comme une appli sur téléphone et utilisable hors ligne) avec recherche en temps réel, calculateur de portions, timer intégré, mode sombre et liste de courses, le tout en HTML, CSS et JavaScript vanilla, sans aucune ligne de code écrite manuellement.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liens: [
            {libelle: "Gemini", url: "https://gemini.google.com/"},
            {libelle: "Claude Code", url: "https://claude.com/product/claude-code"}
        ],
        enCours: true,
    },
    "panada-food": {
        titre: "Panada Food",
        date: "12/11/2024 — 20/12/2024",
        images: [
            "../assets/projets/panada_food/Accueil.jpg",
            "../assets/projets/panada_food/Menu.jpg",
            "../assets/projets/panada_food/Contact.jpg",
            "../assets/projets/panada_food/Mentions_legales.jpg",
            "../assets/projets/panada_food/Ecran_chargement.jpg"
        ],
        description: "Développement d'un site web vitrine pour le restaurant Panada Food sur une durée de 6 semaines en deuxième année de BTS SIO, en binôme avec une collègue. Le restaurant venait d'ouvrir et ne possédait aucune présence en ligne. On s'est déplacées sur place pour récolter les informations et comprendre les attentes du gérant, puis on a conçu et développé le site de A à Z. Le site inclut une page d'accueil, le menu du restaurant, un formulaire de contact et les mentions légales conformes au RGPD. Il a été mis en ligne via un hébergement OVH. Le gérant souhaitait aussi pouvoir prendre les commandes en ligne : on a commencé une seconde version en PHP avec une base MySQL, où le menu, les boissons et les sauces devenaient des tables et où un panier apparaissait. Elle n'a pas abouti, faute de temps sur six semaines, et n'a jamais été mise en ligne.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liens: [
            {libelle: "Voir le projet en ligne", url: "https://panadafood.ovh"},
            {libelle: "Dépôt GitHub", url: "https://github.com/JustineB24/panada-food"},
            {libelle: "Hébergeur OVH", url: "https://www.ovhcloud.com/fr/"}
        ],
        etudeDeCas: {
            contexte: "Ni maquette ni cahier des charges au départ, et un maître de stage présent de 11h à 14h avec de longs délais de réponse. Les informations comme les décisions ont donc dû être cherchées auprès du gérant, puis assumées sans validation immédiate.",
            reflexion: "Six semaines ne suffisaient pas pour finir le site vitrine et mener à bout la version PHP avec commande en ligne. On a tranché pour le site : un site complet valait mieux qu'une vitrine bâclée doublée d'un prototype à moitié fait, même si ça laissait la demande du gérant en suspens.",
            defis: [
                "Se coordonner en binôme, en partie en télétravail, pour se répartir les tâches efficacement",
                "Assurer la conformité légale du site : mentions légales, crédits photographiques, respect du RGPD"
            ],
            resultat: "Livré dans les délais, et le compromis a tenu : le restaurant a eu un site complet plutôt que deux choses inachevées. C'est le premier projet où j'ai eu à décider seule de ce qu'on ne ferait pas."
        }
    },
    "pendu": {
        titre: "Pendu",
        date: "Mars 2025",
        images: ["../assets/projets/pendu/Menu.jpg",
            "../assets/projets/pendu/Jeu.jpg",
            "../assets/projets/pendu/Mots.jpg",
            "../assets/projets/pendu/Scores.jpg"
        ],
        description: "Application mobile développée avec MAUI et XAML, recréant le célèbre jeu du pendu. L'utilisateur doit deviner un mot choisi aléatoirement, en proposant des lettres une par une. Chaque mauvaise réponse révèle progressivement une image du pendu. Le menu principal permet de jouer, de gérer la liste des mots à deviner, de consulter les meilleurs scores ou de quitter l'application. Les mots et les scores sont stockés localement, permettant une gestion dynamique des parties et une personnalisation du jeu. L'interface est responsive et s'adapte parfaitement aux différents formats mobiles.",
        technologies: ["C#", "XAML", "MAUI"]
    },
    "france-mobilier": {
        titre: "France Mobilier",
        date: "Février 2025",
        images: ["../assets/projets/france_mobilier/Accueil.png",
            "../assets/projets/france_mobilier/Meuble.jpg",
            "../assets/projets/france_mobilier/Magasins.png",
            "../assets/projets/france_mobilier/Admin.png",
            "../assets/projets/france_mobilier/AjoutProduit.png",
            "../assets/projets/france_mobilier/AjoutMagasin.png"
        ],
        description: "Site e-commerce développé pour France Mobilier, une société de mobilier d'intérieur fictive servant de support à un sujet de BTS. Conçu selon l'architecture MVC, il propose une page d'accueil présentant l'entreprise, un module de recherche de meubles par catégorie, ainsi qu'une page listant l'ensemble des magasins physiques. Le projet utilise une base de données pour gérer dynamiquement les meubles et les points de vente. Un panneau d'administration est également prévu pour permettre la modification des produits et des magasins. L'interface est pensée pour être claire et facilement maintenable.",
        technologies: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"]
    },
    "sio-shop": {
        titre: "Sio Shop",
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
        description: "Application de gestion commerciale développée sous Windows Forms pour une concession automobile fictive, sujet d'un projet de BTS. Ce projet propose une interface permettant aux employés de gérer les clients, les véhicules en stock et les ventes. L'application intègre une authentification sécurisée, une liaison directe avec une base de données SQL, ainsi qu'un module de création de factures au format PDF. Les utilisateurs peuvent rechercher, ajouter et modifier clients et produits, saisir des ventes avec calcul automatique du prix TTC, et suivre l'évolution des stocks en temps réel. La structure suit les principes de la programmation orientée objet, en assurant une navigation fluide et professionnelle entre les différentes fonctionnalités.",
        technologies: ["WinForms", "C#", "MySQL", "XAMPP"]
    },
    "speedcubing": {
        titre: "Speedcubing",
        date: "Novembre — Décembre 2024",
        images: [
            "../assets/projets/speedcubing/Accueil.jpg",
            "../assets/projets/speedcubing/Chrono.jpg",
            "../assets/projets/speedcubing/Technique_3x3.jpg",
            "../assets/projets/speedcubing/Def_Speedcubing.jpg",
            "../assets/projets/speedcubing/Connexion.jpg"
        ],
        description: "Site sur le thème d'une association de speedcubing, sujet d'un projet de BTS, sans commande réelle derrière. Il permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "MySQL", "XAMPP"]
    },
    "meteo": {
        titre: "Application météo",
        date: "Septembre — Octobre 2024",
        images: ["../assets/projets/meteo/Meteo.jpg"],
        description: "Application web développée pour afficher en temps réel les conditions météorologiques d'une ville choisie par l'utilisateur. En utilisant l'API OpenWeather, ce projet permet de consulter la température actuelle, l'humidité ainsi qu'une description du temps (ensoleillé, nuageux, etc.). L'interface propose une zone de recherche, un affichage centralisé des données principales, et un design épuré avec fond personnalisé. Le JavaScript assure la récupération dynamique des données météo et la mise à jour instantanée de l'affichage après chaque recherche.",
        liens: [
            {libelle: "API OpenWeather", url: "https://openweathermap.org/api"}
        ],
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "generateur-mdp": {
        titre: "Générateur de mots de passe",
        date: "Septembre 2024",
        images: ["../assets/projets/generateur_mdp/Generateur_mdp.png"],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "mairie-cauffry": {
        titre: "Mairie de Cauffry",
        date: "27/05/2024 — 21/06/2024",
        images: [
            "../assets/projets/mairie_de_cauffry/Visuel_site.jpg",
            "../assets/projets/mairie_de_cauffry/Accueil.jpg",
            "../assets/projets/mairie_de_cauffry/Adico_collectivite.png",
            "../assets/projets/mairie_de_cauffry/Adico_arborescence.png",
            "../assets/projets/mairie_de_cauffry/Adicloud.jpg"
        ],
        description: "Stage de 4 semaines en première année de BTS SIO, à la mairie de Cauffry, pour le nouveau site de la commune. Le site lui-même est un produit de l'Adico (Association pour le développement et l'innovation numérique des collectivités), le prestataire de la commune, bâti sur leur plateforme mutualisée : je n'en ai pas écrit le code. Mon travail portait sur le contenu et la structure. L'ancien site étant devenu indisponible, j'ai récupéré ses pages via la Wayback Machine, rempli le recueil de besoins, conçu l'arborescence des rubriques, puis préparé les documents et les ai déposés sur Adicloud en les structurant pour qu'ils s'affichent correctement. En parallèle, j'ai sauvegardé les mails de la maire vers un disque dur externe et proposé des prototypes de logo pour la commune.",
        technologies: [],
        liens: [
            {libelle: "Voir le projet en ligne", url: "https://mairiecauffry.fr/"},
            {libelle: "Site de l'Adico", url: "https://www.adico.fr/"}
        ],
        etudeDeCas: {
            contexte: "Le site n'était pas à écrire mais à remplir : la plateforme et le gabarit venaient du prestataire. Tout l'enjeu tenait donc au contenu, à l'arborescence, et à un délai de quatre semaines pour que toutes les rubriques soient prêtes.",
            reflexion: "Récupérer les pages archivées ne suffisait pas. Une mairie change d'horaires, d'élus et de tarifs, donc chaque information reprise de l'ancien site devait être revérifiée avant d'être réinjectée. C'est ce tri, et non la récupération, qui a pris le plus de temps.",
            defis: [
                "Corriger une erreur dans l'arborescence Adico : le dossier « Services aux administrés » était manquant, ce qui a nécessité un appel au support",
                "Gérer en parallèle d'autres missions : sauvegarde des mails Gmail de la maire vers un disque dur avec Mbox Viewer, et propositions de prototypes de logo",
                "Tenir un délai de 4 semaines pour que le contenu de toutes les rubriques soit prêt"
            ],
            resultat: "Mis en ligne dans les délais, avec son contenu et son arborescence. C'est un stage de découverte, pas un projet de développement : ce que j'en retiens tient au métier plus qu'au code. Travailler avec un prestataire externe et son outil, tenir un délai de quatre semaines en contexte professionnel, et voir fonctionner une collectivité territoriale de l'intérieur."
        }
    }
};

// Vérifier si l'ID existe et mettre à jour la page
if (!projetId || !projets[projetId]) {
    const main = document.querySelector("main");
    if (main) {
        main.textContent = "";
        const p = document.createElement("p");
        p.classList.add('projet-introuvable');
        p.textContent = "Projet introuvable. ";
        const a = document.createElement("a");
        a.href = "projets.html";
        a.textContent = "Retour aux projets";
        p.appendChild(a);
        main.appendChild(p);
    }
} else {
    // Couleurs du hero par projet
    const heroColors = {
        "pendu": ["#b71c1c", "#7f0000"],
        "france-mobilier": ["#e91e63", "#880e4f"],
        "sio-shop": ["#607d8b", "#37474f"],
        "speedcubing": ["#e64a19", "#bf360c"],
        "meteo": ["#4a148c", "#2a0054"],
        // Assombri de 15 % à teinte et saturation constantes : au rose d'origine,
        // le titre du bandeau n'atteignait que 2,87:1 pour un seuil de 3:1, le pire
        // point du dégradé tombant à 2,18:1. C'était le dernier échec WCAG du site.
        // Couleur décorative d'un exercice de BTS, pas une marque : rien à trahir.
        "generateur-mdp": ["#e062a1", "#a8487b"],
        "mairie-cauffry": ["#1a5276", "#e6a817"],
        "panada-food": ["#ff6600", "#cc4400"],
        "yabt": ["#FDC800", "#E95F3F", "#E3312D", "#CF07FF", "#0409AA"],
        "gecko": ["#4c7c13", "#4e73df"],   // local -> prod (vert assombri pour le contraste)
        "grimoire-recettes": ["#c2703e", "#6b7c3e"],
        // Les deux couleurs de l'app (#FF0000 et #00FF00), assombries à teinte et
        // saturation constantes : brutes, elles donnent 3,8:1 et 1,3:1 avec le titre
        // clair du hero, contre 4,5:1 ici.
        "flouflix": ["#e80000", "#008700"],
        // Pas de marque : l'indigo du logo PHP, langage de l'API, vers un bleu nuit
        "limite-limite": ["#4f5b93", "#2c3361"]
    };

    const hero = document.getElementById("projet-hero");
    const detailsWrap = document.querySelector(".projet-details");
    if (heroColors[projetId]) {
        const colors = heroColors[projetId];
        // Dégradé posé tel quel, sans voile, et avec toutes les couleurs quand la
        // marque en compte plusieurs. Un voile calculé avait été mis en
        // place le 07/08 pour régler 14 échecs de contraste (jusqu'à 2,38:1),
        // puis retiré à la demande de Justine : il assombrissait les couleurs de
        // projet, notamment le jaune de YABT qui virait à l'ocre.
        //
        // Les chiffres sont ici et non dans `audit/`, qui est gitignoré et
        // disparaîtrait à tout nouveau clone. Un voile uniforme demanderait 44 %
        // de noir pour couvrir le pire cas ; dosé le long du dégradé en 13
        // points, il tomberait à 45 % côté jaune de YABT et 0 % côté bleu nuit,
        // et cinq projets sur douze n'auraient besoin de rien. Le contraste des
        // petits textes est aujourd'hui assuré autrement, par la pastille sombre
        // à 45 % posée sous chacun d'eux (voir `projet-details.css`).
        if (hero) {
            hero.style.background = "linear-gradient(135deg, " + colors.join(", ") + ")";
        }
        // Couleur du projet propagée à toute la page (eyebrows, spine, filets…)
        if (detailsWrap) {
            detailsWrap.style.setProperty("--hero-color", colors[0]);
            detailsWrap.style.setProperty("--hero-color-dark", colors[colors.length > 1 ? 1 : 0]);
        }
    }

    const titreProjet = document.getElementById("projet-title");
    if (titreProjet) titreProjet.textContent = projets[projetId].titre;
    document.title = "Portfolio | " + projets[projetId].titre;

    // Date du projet
    if (titreProjet && projets[projetId].date) {
        const dateEl = document.createElement("span");
        dateEl.classList.add("projet-date");
        dateEl.textContent = projets[projetId].date;
        titreProjet.after(dateEl);
    }

    // Badge de statut. `statut` porte le libellé quand il n'est pas « en cours de
    // développement » : Gecko est un ERP en production depuis 2021, l'annoncer en
    // cours de développement laissait croire à un projet encore en chantier.
    const statut = projets[projetId].statut || (projets[projetId].enCours ? "En cours de développement" : null);
    if (statut) {
        // Insérer après la date si elle existe, sinon après le titre
        const afterEl = (hero && hero.querySelector(".projet-date")) || titreProjet;
        if (afterEl) {
            const badge = document.createElement("span");
            badge.classList.add("badge-statut");
            badge.textContent = statut;
            afterEl.after(badge);
        }
    }

    // Mise à jour des meta sociales dynamiquement (Open Graph + Twitter Cards)
    const metaTitre = 'Portfolio | ' + projets[projetId].titre;
    const metaDesc = projets[projetId].description.substring(0, 200);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', metaTitre);
    if (ogDesc) ogDesc.setAttribute('content', metaDesc);
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // Canonical propre à chaque projet (inclut le ?id=)
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', window.location.href);

    // Twitter accepte aussi bien property="twitter:*" que name="twitter:*"
    const twitterTitle = document.querySelector('meta[name="twitter:title"], meta[property="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"], meta[property="twitter:description"]');
    if (twitterTitle) twitterTitle.setAttribute('content', metaTitre);
    if (twitterDesc) twitterDesc.setAttribute('content', metaDesc);

    // Image de partage : la première capture du projet quand il y en a une,
    // sinon on garde la carte générique déclarée en dur dans le <head>.
    // Attention : LinkedIn et Facebook ne lisent pas le HTML modifié par JS et
    // resteront sur la carte générique. Cette mise à jour ne sert qu'aux
    // consommateurs qui exécutent le JS (Google, aperçus internes).
    const premiereImage = (projets[projetId].images || [])[0];
    if (premiereImage) {
        // Les balises Open Graph exigent une URL absolue
        const imageAbsolue = new URL(premiereImage, window.location.href).href;
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
        const twitterImage = document.querySelector('meta[name="twitter:image"], meta[property="twitter:image"]');
        if (ogImage) ogImage.setAttribute('content', imageAbsolue);
        if (twitterImage) twitterImage.setAttribute('content', imageAbsolue);
        if (ogImageAlt) ogImageAlt.setAttribute('content', 'Aperçu du projet ' + projets[projetId].titre);

        // Les dimensions déclarées dans le <head> valent pour la carte 1200x630,
        // pas pour la capture : on les retire plutôt que d'annoncer un faux format.
        document.querySelectorAll('meta[property="og:image:width"], meta[property="og:image:height"]')
            .forEach(function (m) {
                m.remove();
            });
    }

    const descriptionEl = document.getElementById("projet-description");
    if (descriptionEl) descriptionEl.textContent = projets[projetId].description;

    // Données structurées du projet (JSON-LD CreativeWork) pour le SEO
    const donneesProjet = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": projets[projetId].titre,
        "description": projets[projetId].description.substring(0, 300),
        "author": {"@type": "Person", "name": "Justine BLIN"},
        "keywords": (projets[projetId].technologies || []).join(", "),
        "inLanguage": "fr",
        "url": window.location.href
    };
    const scriptLd = document.createElement("script");
    scriptLd.type = "application/ld+json";
    scriptLd.textContent = JSON.stringify(donneesProjet);
    document.head.appendChild(scriptLd);


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
        "Tailwind CSS": "Framework CSS utilitaire",
        "DataTables": "Plugin de tableaux interactifs",
        "PostgreSQL": "Base de données avancée",
        "React": "Bibliothèque front-end",
        "React Native": "Applications mobiles en React",
        "Expo": "Chaîne d'outils pour React Native",
        "Node.js": "JavaScript côté serveur",
        "Socket.io": "Communication temps réel (WebSockets)",
        "Docker": "Conteneurisation et environnements de développement",
        "XAMPP": "Serveur de développement local (Apache, MySQL, PHP)",
        "MAMP": "Serveur de développement local sur macOS",
        "Figma": "Conception d'interfaces et prototypage",
        "Git": "Gestion de versions et travail collaboratif",
        "GitHub": "Hébergement et collaboration",
        "GitLab": "Plateforme DevOps et CI/CD"
    };

    const techList = document.getElementById("projet-technologies");

    // Vider la liste avant d'ajouter les nouvelles technologies
    if (techList) techList.innerHTML = "";

    const technologies = projets[projetId].technologies || [];

    // Un projet peut n'avoir aucune technologie à déclarer : c'est le cas de la
    // Mairie de Cauffry, où le travail a porté sur le contenu et non sur le
    // code. Sans ça, l'étiquette « Technologies » resterait seule au-dessus
    // d'une liste vide, avec le filet de séparation de la barre méta.
    const barreMeta = techList ? techList.closest(".projet-meta") : null;
    if (barreMeta) barreMeta.hidden = technologies.length === 0;

    if (techList) technologies.forEach(tech => {
        let li = document.createElement("li");

        // Exceptions pour les noms de fichiers SVG
        let nomFichier = tech.toLowerCase();
        const nomsSpeciaux = {
            "c#": "c-sharp",
            "node.js": "nodejs",
            "socket.io": "socket-io",
            "tailwind css": "tailwind", "react native": "react", "expo": "expo"
        };
        if (nomsSpeciaux[nomFichier]) {
            nomFichier = nomsSpeciaux[nomFichier];
        }

        // Classe de couleur par technologie
        const tagClasses = {
            "html": "tag-html",
            "css": "tag-css",
            "javascript": "tag-js",
            "php": "tag-php",
            "c#": "tag-csharp",
            "mysql": "tag-mysql",
            "xaml": "tag-xaml",
            "maui": "tag-maui",
            "winforms": "tag-winforms",
            "jquery": "tag-jquery",
            "bootstrap": "tag-bootstrap",
            "tailwind css": "tag-tailwind",
            "datatables": "tag-datatables",
            "react": "tag-react",
            "node.js": "tag-nodejs",
            "socket.io": "tag-socketio",
            "postgresql": "tag-postgresql",
            "docker": "tag-docker",
            "xampp": "tag-xampp",
            "mamp": "tag-mamp",
            "react native": "tag-react-native",
            "expo": "tag-expo",
            "figma": "tag-figma",
            "git": "tag-git",
            "github": "tag-github",
            "gitlab": "tag-gitlab"
        };
        const tagClass = tagClasses[tech.toLowerCase()];
        if (tagClass) li.classList.add(tagClass);

        // Création du logo
        const extensionsSpeciales = {"datatables": "png"};
        const ext = extensionsSpeciales[nomFichier] || "svg";
        let logo = document.createElement("img");
        logo.src = `../assets/competences/${nomFichier}.${ext}`;
        // `alt` vide, volontairement : le nom de la techno est déjà écrit en toutes
        // lettres juste à côté, dans le même <li>. Un `alt` le répétait, et un
        // lecteur d'écran annonçait « React React ». Une image purement décorative
        // se retire de l'arbre d'accessibilité avec un alt vide.
        logo.alt = "";
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

        // Insérer avant la section Aperçu (dans la colonne de lecture)
        const apercu = document.getElementById("projet-apercu");
        if (apercu && apercu.parentNode) {
            apercu.parentNode.insertBefore(sectionEtude, apercu);
        }
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
        img.alt = projets[projetId].titre + " — capture 1";
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
            boutonSlide.setAttribute("aria-label", "Agrandir : " + projets[projetId].titre + " — image " + (index + 1));
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
            img.alt = projets[projetId].titre + " — capture " + (index + 1);
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
            relancerAuto();
        });
        btnPrev.addEventListener("click", function () {
            slidePrecedent();
            relancerAuto();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                allerASlide(index);
                relancerAuto();
            });
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
                relancerAuto();
            }
            if (e.key === "ArrowLeft") {
                slidePrecedent();
                relancerAuto();
            }
        });

        // Auto-play (4 s) avec pause au survol — un SEUL timer à la fois.
        // arreterAuto/relancerAuto nettoient toujours l'intervalle existant avant
        // d'en créer un nouveau, pour éviter l'empilement de timers (accélération).
        let intervalleLectureAuto = null;

        function arreterAuto() {
            clearInterval(intervalleLectureAuto);
            intervalleLectureAuto = null;
        }

        function relancerAuto() {
            arreterAuto();
            intervalleLectureAuto = setInterval(slideSuivant, 4000);
        }

        relancerAuto(); // démarrage de l'auto-play

        carrousel.addEventListener("mouseenter", arreterAuto);
        carrousel.addEventListener("mouseleave", relancerAuto);

    }

    const projetLinkContainer = document.getElementById("projet-link");

    // Efface tout contenu précédent dans le conteneur du lien
    if (projetLinkContainer) projetLinkContainer.innerHTML = "";

    if (projetLinkContainer) {
        // Un seul champ `liens` porte tous les liens externes d'un projet : son propre
        // site, et ceux d'un prestataire ou d'un partenaire. Il a remplacé un champ
        // `link` qui ne tenait que le premier : garder les deux donnait `link` et
        // `liens`, à une lettre d'écart et de sens différents.
        // Chaque entrée porte son libellé, parce qu'un second « Voir le projet en
        // ligne » ne dirait pas où il mène. Seule l'icône est déduite de l'adresse.
        if (Array.isArray(projets[projetId].liens)) {
            projets[projetId].liens.forEach(function (lien) {
                const estGithub = lien.url.includes("github.com");

                const a = document.createElement("a");
                a.href = lien.url;
                a.target = "_blank";
                a.rel = "noopener noreferrer";

                const icone = document.createElement("i");
                icone.classList.add(estGithub ? "fab" : "fas", estGithub ? "fa-github" : "fa-external-link-alt");
                icone.setAttribute("aria-hidden", "true");
                a.appendChild(icone);
                a.append(" " + lien.libelle);

                projetLinkContainer.appendChild(a);
            });
        }

        // Visible seulement s'il y a effectivement quelque chose dedans
        if (projetLinkContainer.children.length > 0) {
            projetLinkContainer.removeAttribute('hidden');
        } else {
            projetLinkContainer.setAttribute('hidden', '');
        }
    }
}