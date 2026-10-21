// ==============================
// projet-details.js
// Détails d'un projet : données, carrousel, modale
// ==============================

// ID du projet dans l'URL, limité aux lettres, chiffres et tirets
const urlParams = new URLSearchParams(window.location.search);
const rawId = urlParams.get("id");
const projetId = rawId && /^[a-z0-9-]+$/.test(rawId) ? rawId : null;

// Une image est un chemin ou un {src, legende}. La légende sert aussi d'alt,
// sans elle chaque image s'annonçait « capture 3 ».
function normaliserImage(image) {
    return typeof image === "string" ? {src: image, legende: ""} : image;
}

const projets = {
    "yabt": {
        titre: "YABT (Yet Another Blind Test)",
        date: "Depuis février 2026",
        images: [
            {src: "../assets/projets/yabt/Capture_liste_parties.jpg", legende: "Liste des parties publiques et privées, vue en invité"},
            {src: "../assets/projets/yabt/Capture_salon.jpg", legende: "Le salon d'attente, avec le QR code pour rejoindre"},
            {src: "../assets/projets/yabt/Capture_partie.jpg", legende: "Une partie en cours, réponse en train d'être tapée"},
            {src: "../assets/projets/yabt/Capture_resultats.jpg", legende: "Le podium de fin de partie"},
            {src: "../assets/projets/yabt/Capture_creation.jpg", legende: "Création d'un blind test, avec la recherche Deezer"},
            {src: "../assets/projets/yabt/Capture_compte.jpg", legende: "La page compte et l'historique des parties"},
            {src: "../assets/projets/yabt/Maquette_accueil.png", legende: "Maquette de l'accueil"},
            {src: "../assets/projets/yabt/Maquette_creation.png", legende: "Maquette de la création d'un blind test"},
            {src: "../assets/projets/yabt/Maquette_lobby.png", legende: "Maquette du salon d'attente"},
            {src: "../assets/projets/yabt/Maquette_en_partie.png", legende: "Maquette d'une partie en cours"},
            {src: "../assets/projets/yabt/Maquette_resultats.png", legende: "Maquette des résultats"},
            {src: "../assets/projets/yabt/Maquette_profil.png", legende: "Maquette du profil"},
            {src: "../assets/projets/yabt/Logo.png", legende: "Logo, réalisé par un camarade en webdesign"},
            {src: "../assets/projets/yabt/Nuancier.png", legende: "Nuancier de l'identité visuelle"}
        ],
        description: "Projet fil rouge du Bachelor Chef de projet développement et data, mené à quatre depuis février 2026. YABT est une application web de blind test musical multijoueur en temps réel. Les joueurs créent ou rejoignent une partie par un code ou un QR code, discutent dans le salon et s'affrontent sur des extraits musicaux issus de l'API Deezer. La version 1 livrée propose le mode Classique, des comptes avec avatar et l'historique des parties. Les quatre autres modes (Speedrun, Battle Royale, Jackpot, Combo Breaker) sont annoncés dans l'interface comme à venir. Le mode quiz et la création de blind tests sont développés et testés, mais restent fermés tant que le moteur de jeu ne sait pas les dérouler : l'équipe a préféré ne pas ouvrir une fonctionnalité qui mène à une impasse. L'identité visuelle est un travail à plusieurs mains : le logo a été réalisé par un camarade en webdesign, et les icônes néon ont été générées par IA. Le projet suit une méthode Agile, Scrum et Kanban sur Jira.",
        technologies: ["React", "Tailwind CSS", "Node.js", "Socket.io", "MySQL", "Docker", "Figma", "GitHub"],
        liens: [
            {libelle: "API Deezer", url: "https://developers.deezer.com/api"}
        ],
        statut: "V1 livrée",
        etudeDeCas: {
            contexte: "L'idée vient d'abord d'une passion pour la musique : c'est ce qui a orienté le choix du sujet parmi tous ceux possibles en Bachelor. Le constat a suivi. Les blind tests entre amis se font souvent sur des applications payantes, limitées en fonctionnalités ou sans vrai mode multijoueur en temps réel. On voulait une alternative gratuite, complète et jouable directement dans le navigateur.",
            reflexion: "On a commencé par le cahier des charges, les user stories et les maquettes Figma, puis on s'est réparti les rôles. Le socle technique (dépôts, Docker, base de données) a été posé dès le début. Au départ, je m'occupais de la création de contenu : l'API des quiz et des blind tests, un proxy vers Deezer et les écrans de création, avec la recherche de morceaux en direct. Mon rôle s'est ensuite étendu à la chaîne musicale, à la sécurité, aux tests et à l'installation du projet. C'est aussi avec ce projet que j'ai appris Figma.",
            defis: [
                "Construire la playlist d'une partie. J'ai écrit un mélange de Fisher-Yates pour que chaque ordre ait autant de chances de sortir, et regroupé les différentes versions d'un même titre.",
                "Les tests que j'ai écrits sur le moteur de jeu, que je n'avais pas développé, ont trouvé cinq vrais bugs, corrigés dans la foulée.",
                "Fermer plusieurs failles, dont une qui permettait de lire n'importe quel fichier du serveur en passant par le service des extraits audio.",
                "L'intégration continue sur GitHub Actions, à partir du squelette d'un camarade. Un job consommait presque tout le quota mensuel parce qu'une connexion à la base n'était jamais fermée.",
                "S'organiser à quatre avec Git et Jira, et accepter de réduire la version 1 pour livrer quelque chose qui marche."
            ],
            resultat: "La version 1 est livrée et une partie se joue de bout en bout depuis fin juin 2026. Elle s'appuie sur 534 tests automatisés, côté serveur comme côté interface, et j'ai largement contribué à cette suite aux côtés de l'équipe. Le projet n'a pas été mis en production et continue. Il reste à brancher les blind tests créés sur le moteur de jeu, à rouvrir le quiz, puis à ajouter les autres modes. Les six premiers visuels sont des captures de l'application, les suivants les maquettes. Le projet a été soutenu devant le jury du titre professionnel Concepteur développeur d'applications."
        }
    },
    "gecko": {
        titre: "Gecko",
        date: "Depuis septembre 2025",
        images: [
            {src: "../assets/projets/gecko/Page_article.png", legende: "Tableau des articles avec le moteur de filtres (données masquées)"},
            {src: "../assets/projets/gecko/Page_article_recherche.png", legende: "Filtres combinés par colonne, résultats en direct"},
            {src: "../assets/projets/gecko/Filtres_favoris.png", legende: "Gestion des filtres favoris"},
            {src: "../assets/projets/gecko/Stocks_Paris_preparation.png", legende: "Préparation des envois, dans le module de Paris"}
        ],
        description: "Application web métier d'un client du secteur de l'édition et de la distribution, développée par l'équipe de Litesoft où je suis en alternance. C'est un intranet utilisé chaque jour par des dizaines de personnes sur plusieurs sites, du catalogue à la facturation en passant par les stocks et l'expédition. Je travaille par tickets, que le chef de projet me transmet après avoir vu le besoin avec le client. Il en est passé plus de cinquante en un an, souvent du script SQL jusqu'à l'interface. Je fusionne moi-même sur l'environnement de test et j'applique les scripts de migration de la base en préproduction et en production. Le reste du temps, je modernise l'existant. J'utilise Claude Code au quotidien dans PhpStorm, en relisant chaque proposition. Côté technique, c'est du PHP 8.3 en MVC avec PostgreSQL, une interface en JavaScript, jQuery et DataTables stylée avec Tailwind CSS, Node.js et Socket.IO pour le temps réel, et un déploiement GitLab sur quatre environnements.",
        technologies: ["PHP", "JavaScript", "PostgreSQL", "jQuery", "Tailwind CSS", "DataTables", "Node.js", "Socket.io", "GitLab", "MAMP"],
        liens: [
            {libelle: "Litesoft", url: "https://www.litesoft.fr/"},
            {libelle: "Claude Code", url: "https://claude.com/product/claude-code"}
        ],
        statut: "En production",
        etudeDeCas: {
            contexte: "Gecko est l'ERP interne d'un éditeur-distributeur de livres. L'équipe Litesoft le développe depuis 2021 et il couvre toute la chaîne, du catalogue à l'expédition. Je l'ai rejoint en septembre 2025 pour mon alternance, donc sur un gros projet déjà en production et toujours très actif.",
            reflexion: "Sur une application de cette taille, il faut d'abord apprendre à s'y repérer. Un ticket touche souvent toute la chaîne, du contrôleur PHP à l'interface en passant par la requête SQL. J'essaie de moderniser par petites étapes, sans jamais tout basculer d'un coup sur une application que des gens utilisent tous les jours.",
            defis: [
                "J'ai repris le filtre par colonne qui existait déjà dans Gecko pour en faire un moteur commun à tous les tableaux, avec des opérateurs adaptés au type de donnée et des filtres favoris. C'est le plus gros chantier de mon année, et toutes les équipes s'en servent chaque jour.",
                "La migration de l'interface vers Tailwind CSS, écran par écran, jusqu'au retrait complet de Bootstrap en juin 2026. J'ai aussi remplacé jQuery UI par Flatpickr, SortableJS et Floating UI. Avant et après chaque changement, je rejoue près d'une centaine de tests navigateur.",
                "Le passage à Composer et à l'autoload PSR-4 sur plus de 400 fichiers, puis la sortie des imports de deux contrôleurs devenus énormes vers des classes dédiées.",
                "Des optimisations de performance et de sécurité, page par page. À l'ouverture d'une facture, on est passé de 201 requêtes à une seule.",
                "Le module de stocks du site de Paris, six écrans livrés par lots à partir d'une maquette du client.",
                "Près de la moitié du fichier d'intégration continue, dont un système qui évite de déployer un site sans CSS ou un JavaScript resté en cache.",
                "Une page modèle que l'équipe reprend pour démarrer une nouvelle interface, avec une liste filtrable et son formulaire. Elle fonctionne sans base de données grâce à un jeu de démonstration."
            ],
            resultat: "Un an d'alternance sur un ERP en production, avec un moteur de filtres utilisé par toutes les équipes, une interface entièrement passée à Tailwind CSS, un module de stocks pour Paris et une page modèle reprise par l'équipe. J'y ai surtout appris à travailler en autonomie dans une grosse base de code sans rien casser."
        }
    },
    "flouflix": {
        titre: "Flouflix",
        date: "Juillet 2026",
        images: [
            {src: "../assets/projets/flouflix/Liste.png", legende: "La liste, titre géant et texte qui clignote"},
            {src: "../assets/projets/flouflix/Liste_favoris.jpg", legende: "Les favoris annoncés « en bas de la page », juste au-dessus du bouton"},
            {src: "../assets/projets/flouflix/Liste_cartes.jpg", legende: "Une carte de série : trois clics sur l'affiche pour l'ouvrir"},
            {src: "../assets/projets/flouflix/Detail_popup.jpg", legende: "Le pop-up de tutoriel, deux boutons qui disent presque la même chose"},
            {src: "../assets/projets/flouflix/Detail.jpg", legende: "Le détail d'une série, avec son bouton favori à presser huit fois"},
            {src: "../assets/projets/flouflix/Favoris.jpg", legende: "Un favori, signalé en rouge vif"}
        ],
        description: "Application mobile de recherche de films et de séries, construite à deux en deux jours pendant le Bachelor. La contrainte était inversée : produire volontairement l'interface la plus laide et la moins utilisable possible. L'exercice avait deux objectifs, découvrir React Native et Expo, et pousser les mauvaises pratiques d'ergonomie assez loin pour comprendre pourquoi ce sont de mauvaises pratiques. Sous la couche ratée, l'application fonctionne vraiment. Trois écrans, liste, détail et favoris, avec recherche et filtres construits sur les données de l'API TVmaze. Les favoris sont gérés en CRUD, leur état partagé entre les écrans par un contexte React.",
        liens: [
            {libelle: "Dépôt GitHub", url: "https://github.com/JustineB24/flouflix"},
            {libelle: "API TVmaze", url: "https://www.tvmaze.com/api"}
        ],
        technologies: ["React Native", "Expo", "JavaScript"],
    },
    "limite-limite": {
        titre: "API Limite Limite",
        date: "Septembre 2026",
        images: [{src: "../assets/projets/limite_limite/Reponse_API.png", legende: "Une question et une réponse tirées au hasard par l'API"}],
        description: "Exercice de Bachelor réalisé en binôme, dont le sujet était la chaîne d'intégration et de déploiement continus plus que l'application elle-même. L'application est volontairement petite : une API PHP 8.2 qui renvoie en JSON une association tirée au hasard entre une carte question à trou et une carte réponse, sur le principe du jeu Limite Limite. Le code suit une architecture MVC légère, et le contrôleur reçoit sa connexion à la base par injection de dépendances, ce qui permet de le tester avec un mock sans base réelle. L'environnement tient dans Docker Compose, un service PHP et un service MySQL 8 initialisé par un script SQL. À chaque push ou pull request sur les branches develop et prod, GitHub Actions audite les dépendances avec Composer, vérifie le respect du standard PSR-12 avec PHP_CodeSniffer et lance les tests PHPUnit. À la fin de cette intégration, un second workflow déploie le code par SSH sur un VPS, dans un environnement de développement puis de production. Le travail suit le même circuit : développement sur develop, puis passage en production par pull request.",
        technologies: ["PHP", "MySQL", "Docker", "GitHub"],
        liens: [
            {libelle: "Dépôt GitHub", url: "https://github.com/JustineB24/limite-limite"}
        ],
    },
    "keep-eat": {
        titre: "Keep Eat",
        date: "Septembre et octobre 2025",
        images: [
            {src: "../assets/projets/keep_eat/Splash.jpg", legende: "L'écran de lancement et la mascotte"},
            {src: "../assets/projets/keep_eat/Accueil.jpg", legende: "L'accueil, recettes classées par envie"},
            {src: "../assets/projets/keep_eat/Detail_recette.jpg", legende: "Le détail d'une recette"},
            {src: "../assets/projets/keep_eat/Instructions.jpg", legende: "Les étapes de la recette, une par une"},
            {src: "../assets/projets/keep_eat/Frigo.jpg", legende: "Le frigo, pour dire ce qu'on a sous la main"},
            {src: "../assets/projets/keep_eat/Communaute.jpg", legende: "Les photos de la communauté"},
            {src: "../assets/projets/keep_eat/Publication.jpg", legende: "Une recette refaite et publiée par un utilisateur"},
            {src: "../assets/projets/keep_eat/Parametres.jpg", legende: "Les allergies à exclure des recettes"},
            {src: "../assets/projets/keep_eat/Zoning_accueil.png", legende: "Le zoning de l'accueil, première étape"},
            {src: "../assets/projets/keep_eat/Wireframe_accueil.png", legende: "Le wireframe de l'accueil"},
            {src: "../assets/projets/keep_eat/User_stories.jpg", legende: "Les user stories et les catégories du frigo"},
            {src: "../assets/projets/keep_eat/Parcours.jpg", legende: "Le parcours utilisateur pour trouver une recette"}
        ],
        description: "Défi de conception UX/UI mené en équipe de trois au début du Bachelor. Il fallait imaginer et maquetter sur Figma une application mobile qui propose des recettes à partir de ce qu'on a déjà dans son frigo, pour moins gaspiller. On est partis d'une carte des fonctionnalités, de user stories et d'un parcours utilisateur, puis on est passés par le zoning et les wireframes avant les maquettes finales, avec un petit design system de couleurs, de typographies et de composants. Le projet a aussi son identité, une mascotte pomme de terre et l'histoire de Marc, un ancien cuisinier écœuré par le gaspillage. C'était un exercice de conception, sans code. Sur les maquettes, la photo de profil d'un camarade a été remplacée par la mascotte.",
        technologies: ["Figma"],
    },
    "grimoire-recettes": {
        titre: "Le Grimoire des Recettes",
        date: "Depuis 2025",
        images: [
            {src: "../assets/projets/grimoire_recettes/Accueil.jpg", legende: "L'accueil, avec la bannière de saison"},
            {src: "../assets/projets/grimoire_recettes/Fiche_recette.png", legende: "Une fiche recette avec ses ingrédients à cocher"},
            {src: "../assets/projets/grimoire_recettes/Planificateur.png", legende: "Planificateur des repas de la semaine"},
            {src: "../assets/projets/grimoire_recettes/Placards.png", legende: "« Qu'est-ce que j'ai dans mes placards ? » et recettes réalisables"},
            {src: "../assets/projets/grimoire_recettes/Liste_de_courses.png", legende: "Liste de courses générée à partir de trois recettes"},
            {src: "../assets/projets/grimoire_recettes/Fiche_sombre.png", legende: "Fiche recette en thème sombre"},
            {src: "../assets/projets/grimoire_recettes/Maquette.png", legende: "Maquette de départ, dessinée sur tablette"}
        ],
        description: "Projet personnel réalisé dans le but de tester les capacités des intelligences artificielles en développement. Le point de départ : une simple idée de carnet de recettes numérique et une maquette rapide dessinée sur tablette, la dernière image de la galerie. Le cahier des charges a été rédigé avec Gemini (Google), puis l'intégralité du code a été générée par Claude Code (Anthropic). Le résultat est une application web complète (PWA installable comme une appli sur téléphone et utilisable hors ligne) avec recherche en temps réel, calculateur de portions, timer intégré, mode sombre et liste de courses, le tout en HTML, CSS et JavaScript vanilla, sans aucune ligne de code écrite manuellement.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liens: [
            {libelle: "Gemini", url: "https://gemini.google.com/"},
            {libelle: "Claude Code", url: "https://claude.com/product/claude-code"}
        ],
        enCours: true,
    },
    "panada-food": {
        titre: "Panada Food",
        date: "Du 12/11/2024 au 20/12/2024",
        images: [
            {src: "../assets/projets/panada_food/Accueil.jpg", legende: "Page d'accueil"},
            {src: "../assets/projets/panada_food/Menu.jpg", legende: "La carte du restaurant"},
            {src: "../assets/projets/panada_food/Contact.jpg", legende: "Page contact"},
            {src: "../assets/projets/panada_food/Mentions_legales.jpg", legende: "Mentions légales et crédits photographiques"},
            {src: "../assets/projets/panada_food/Ecran_chargement.jpg", legende: "Écran de chargement"},
            {src: "../assets/projets/panada_food/Palette.png", legende: "La palette de couleurs du site, montée sur Coolors"}
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
        images: [{src: "../assets/projets/pendu/Menu.jpg", legende: "Menu principal"},
            {src: "../assets/projets/pendu/Jeu.jpg", legende: "Partie en cours : proposer une lettre"},
            {src: "../assets/projets/pendu/Mots.jpg", legende: "Gestion de la liste des mots"},
            {src: "../assets/projets/pendu/Scores.jpg", legende: "Tableau des scores"}
        ],
        description: "Application mobile développée avec MAUI et XAML, recréant le célèbre jeu du pendu. L'utilisateur doit deviner un mot choisi aléatoirement, en proposant des lettres une par une. Chaque mauvaise réponse révèle progressivement une image du pendu. Le menu principal permet de jouer, de gérer la liste des mots à deviner, de consulter les meilleurs scores ou de quitter l'application. Les mots et les scores sont stockés localement, permettant une gestion dynamique des parties et une personnalisation du jeu. L'interface est responsive et s'adapte parfaitement aux différents formats mobiles.",
        technologies: ["C#", "XAML", "MAUI"]
    },
    "france-mobilier": {
        titre: "France Mobilier",
        date: "Février 2025",
        images: [{src: "../assets/projets/france_mobilier/Accueil.png", legende: "Page d'accueil"},
            {src: "../assets/projets/france_mobilier/Meuble.jpg", legende: "Le catalogue filtré sur les meubles TV"},
            {src: "../assets/projets/france_mobilier/Magasins.png", legende: "Liste des magasins"},
            {src: "../assets/projets/france_mobilier/Admin.png", legende: "Espace d'administration"},
            {src: "../assets/projets/france_mobilier/AjoutProduit.png", legende: "Ajout d'un produit"},
            {src: "../assets/projets/france_mobilier/AjoutMagasin.png", legende: "Ajout d'un magasin"}
        ],
        description: "Site e-commerce développé pour France Mobilier, une société de mobilier d'intérieur fictive servant de support à un sujet de BTS. Conçu selon l'architecture MVC, il propose une page d'accueil présentant l'entreprise, un module de recherche de meubles par catégorie, ainsi qu'une page listant l'ensemble des magasins physiques. Le projet utilise une base de données pour gérer dynamiquement les meubles et les points de vente. Un panneau d'administration est également prévu pour permettre la modification des produits et des magasins. L'interface est pensée pour être claire et facilement maintenable.",
        technologies: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"]
    },
    "sio-shop": {
        titre: "Sio Shop",
        date: "Janvier 2025",
        images: [
            {src: "../assets/projets/sio_shop/Connexion.png", legende: "Connexion"},
            {src: "../assets/projets/sio_shop/Menu.png", legende: "Menu administrateur"},
            {src: "../assets/projets/sio_shop/PasAdmin.png", legende: "Menu d'un employé, sans la gestion des employés"},
            {src: "../assets/projets/sio_shop/GestionClients.png", legende: "Liste des clients"},
            {src: "../assets/projets/sio_shop/RechercheClient.png", legende: "Recherche d'un client par nom"},
            {src: "../assets/projets/sio_shop/Client.png", legende: "Fiche client et historique d'achats"},
            {src: "../assets/projets/sio_shop/NouveauClient.png", legende: "Création d'un client"},
            {src: "../assets/projets/sio_shop/GestionProduits.png", legende: "Liste des produits"},
            {src: "../assets/projets/sio_shop/RechercheProduit.png", legende: "Produits filtrés par marque"},
            {src: "../assets/projets/sio_shop/Produit.png", legende: "Fiche produit"},
            {src: "../assets/projets/sio_shop/NouveauProduit.png", legende: "Création d'un produit"},
            {src: "../assets/projets/sio_shop/SaisirVente.png", legende: "Saisie d'une vente avec le calcul de la TVA"},
            {src: "../assets/projets/sio_shop/Facture.png", legende: "Facture générée en PDF"},
            {src: "../assets/projets/sio_shop/GestionEmployes.png", legende: "Liste des employés"},
            {src: "../assets/projets/sio_shop/Employe.png", legende: "Fiche employé"},
            {src: "../assets/projets/sio_shop/AjoutEmploye.png", legende: "Création d'un employé"}
        ],
        description: "Application de gestion commerciale développée sous Windows Forms pour une concession automobile fictive, sujet d'un projet de BTS. Ce projet propose une interface permettant aux employés de gérer les clients, les véhicules en stock et les ventes. L'application intègre une authentification sécurisée, une liaison directe avec une base de données SQL, ainsi qu'un module de création de factures au format PDF. Les utilisateurs peuvent rechercher, ajouter et modifier clients et produits, saisir des ventes avec calcul automatique du prix TTC, et suivre l'évolution des stocks en temps réel. La structure suit les principes de la programmation orientée objet, en assurant une navigation fluide et professionnelle entre les différentes fonctionnalités.",
        technologies: ["WinForms", "C#", "MySQL", "XAMPP"]
    },
    "speedcubing": {
        titre: "Speedcubing",
        date: "Novembre et décembre 2024",
        images: [
            {src: "../assets/projets/speedcubing/Accueil.jpg", legende: "Accueil et actualités"},
            {src: "../assets/projets/speedcubing/Chrono.jpg", legende: "Chronomètre"},
            {src: "../assets/projets/speedcubing/Technique_3x3.jpg", legende: "Méthode de résolution du 3x3"},
            {src: "../assets/projets/speedcubing/Def_Speedcubing.jpg", legende: "Présentation du speedcubing"},
            {src: "../assets/projets/speedcubing/Connexion.jpg", legende: "Connexion"}
        ],
        description: "Site sur le thème d'une association de speedcubing, réalisé comme projet de BTS. Il permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "MySQL", "XAMPP"]
    },
    "meteo": {
        titre: "Application météo",
        date: "Septembre et octobre 2024",
        images: [{src: "../assets/projets/meteo/Meteo.jpg", legende: "Météo en temps réel d'une ville, ici Amiens"}],
        description: "Application web développée pour afficher en temps réel les conditions météorologiques d'une ville choisie par l'utilisateur. En utilisant l'API OpenWeather, ce projet permet de consulter la température actuelle, l'humidité ainsi qu'une description du temps (ensoleillé, nuageux, etc.). L'interface propose une zone de recherche, un affichage centralisé des données principales, et un design épuré avec fond personnalisé. Le JavaScript assure la récupération dynamique des données météo et la mise à jour instantanée de l'affichage après chaque recherche.",
        liens: [
            {libelle: "API OpenWeather", url: "https://openweathermap.org/api"}
        ],
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "generateur-mdp": {
        titre: "Générateur de mots de passe",
        date: "Septembre 2024",
        images: [{src: "../assets/projets/generateur_mdp/Generateur_mdp.png", legende: "Longueur réglable et copie en un clic"}],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "mairie-cauffry": {
        titre: "Mairie de Cauffry",
        date: "Du 27/05/2024 au 21/06/2024",
        images: [
            {src: "../assets/projets/mairie_de_cauffry/Visuel_site.jpg", legende: "Bandeau d'accueil du nouveau site de la commune"},
            {src: "../assets/projets/mairie_de_cauffry/Accueil.jpg", legende: "Page d'accueil du site en ligne"},
            {src: "../assets/projets/mairie_de_cauffry/Adico_collectivite.png", legende: "Le recueil des besoins sur la plateforme de l'Adico"},
            {src: "../assets/projets/mairie_de_cauffry/Adico_arborescence.png", legende: "Arborescence des rubriques, sur la plateforme de l'Adico"},
            {src: "../assets/projets/mairie_de_cauffry/Adicloud.jpg", legende: "Les documents rangés sur Adicloud"},
            {src: "../assets/projets/mairie_de_cauffry/Prototypes_logo_1.png", legende: "Prototypes de logo réalisés sur Canva, autour du bâtiment et de la commune"},
            {src: "../assets/projets/mairie_de_cauffry/Prototypes_logo_2.png", legende: "Six autres pistes de logo sur Canva, du trait à l'aplat de couleur"}
        ],
        description: "Stage de 4 semaines en première année de BTS SIO, à la mairie de Cauffry, pour le nouveau site de la commune. Le site lui-même est un produit de l'Adico (Association pour le développement et l'innovation numérique des collectivités), le prestataire de la commune, bâti sur leur plateforme mutualisée : je n'en ai pas écrit le code. Mon travail portait sur le contenu et la structure. L'ancien site étant devenu indisponible, j'ai récupéré ses pages via la Wayback Machine, rempli le recueil de besoins, conçu l'arborescence des rubriques, puis préparé les documents et les ai déposés sur Adicloud en les structurant pour qu'ils s'affichent correctement. En parallèle, j'ai sauvegardé les mails de la maire vers un disque dur externe et proposé à la commune des prototypes de logo réalisés sur Canva.",
        technologies: ["Canva"],
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
    const heroColors = {
        "pendu": ["#b71c1c", "#7f0000"],
        "france-mobilier": ["#e91e63", "#880e4f"],
        "sio-shop": ["#607d8b", "#37474f"],
        "speedcubing": ["#e64a19", "#bf360c"],
        "meteo": ["#4a148c", "#2a0054"],
        // Rose assombri pour que le titre du bandeau passe le seuil de 3:1
        "generateur-mdp": ["#e062a1", "#a8487b"],
        "mairie-cauffry": ["#1a5276", "#e6a817"],
        "panada-food": ["#ff6600", "#cc4400"],
        "yabt": ["#FDC800", "#E95F3F", "#E3312D", "#CF07FF", "#0409AA"],
        "gecko": ["#4c7c13", "#4e73df"],   // local -> prod, vert assombri pour le contraste
        "grimoire-recettes": ["#c2703e", "#6b7c3e"],
        // Rouge et vert de l'app, assombris pour que le titre clair reste lisible
        "flouflix": ["#e80000", "#008700"],
        // Pas de marque : l'indigo du logo PHP, langage de l'API, vers un bleu nuit
        "limite-limite": ["#4f5b93", "#2c3361"],
        // Le vert anti-gaspi et l'orange cuisine de la maquette, assombris pour le titre clair
        "keep-eat": ["#4f7d3e", "#9a5c17"]
    };

    const hero = document.getElementById("projet-hero");
    const detailsWrap = document.querySelector(".projet-details");
    if (heroColors[projetId]) {
        const colors = heroColors[projetId];
        // Dégradé aux couleurs du projet, sans voile (il ternissait le jaune de YABT).
        // Les petits textes tiennent leur contraste de leur pastille sombre, côté CSS.
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

    if (titreProjet && projets[projetId].date) {
        const dateEl = document.createElement("span");
        dateEl.classList.add("projet-date");
        dateEl.textContent = projets[projetId].date;
        titreProjet.after(dateEl);
    }

    // `statut` remplace « En cours de développement » quand ce libellé tromperait,
    // Gecko par exemple est en production.
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

    // Meta sociales (Open Graph + Twitter Cards)
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

    // Première capture comme image de partage. LinkedIn et Facebook ne lisent pas
    // le JS et garderont la carte générique du <head>.
    const premiereImage = (projets[projetId].images || []).map(normaliserImage).map(image => image.src)[0];
    if (premiereImage) {
        // Les balises Open Graph exigent une URL absolue
        const imageAbsolue = new URL(premiereImage, window.location.href).href;
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
        const twitterImage = document.querySelector('meta[name="twitter:image"], meta[property="twitter:image"]');
        if (ogImage) ogImage.setAttribute('content', imageAbsolue);
        if (twitterImage) twitterImage.setAttribute('content', imageAbsolue);
        if (ogImageAlt) ogImageAlt.setAttribute('content', 'Aperçu du projet ' + projets[projetId].titre);

        // Les dimensions du <head> sont celles de la carte 1200x630, pas de la capture
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
        "Canva": "Création graphique",
        "Git": "Gestion de versions et travail collaboratif",
        "GitHub": "Hébergement et collaboration",
        "GitLab": "Plateforme DevOps et CI/CD"
    };

    const techList = document.getElementById("projet-technologies");
    if (techList) techList.innerHTML = "";

    const technologies = projets[projetId].technologies || [];

    // Sans techno à déclarer, la barre méta disparaît plutôt que d'afficher
    // l'étiquette « Technologies » au-dessus d'une liste vide.
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
            "canva": "tag-canva",
            "git": "tag-git",
            "github": "tag-github",
            "gitlab": "tag-gitlab"
        };
        const tagClass = tagClasses[tech.toLowerCase()];
        if (tagClass) li.classList.add(tagClass);

        const extensionsSpeciales = {"datatables": "png"};
        const ext = extensionsSpeciales[nomFichier] || "svg";
        let logo = document.createElement("img");
        logo.src = `../assets/competences/${nomFichier}.${ext}`;
        // alt vide : le nom est écrit juste à côté, sinon le lecteur d'écran le dit deux fois
        logo.alt = "";
        logo.width = 80;
        logo.height = 80;
        logo.classList.add("tech-logo");

        // Tooltip (lookup insensible à la casse)
        const cleCorrespondante = Object.keys(techDescriptions).find(k => k.toLowerCase() === tech.toLowerCase());
        const desc = cleCorrespondante ? techDescriptions[cleCorrespondante] : undefined;
        if (desc) {
            li.setAttribute("data-tooltip", desc);
            // Focusable pour ouvrir le tooltip au clavier, description lue via aria-label
            li.setAttribute("tabindex", "0");
            li.setAttribute("aria-label", tech + " : " + desc);
        }

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

    const imagesContainer = document.getElementById("projet-images");
    const images = (projets[projetId].images || []).map(normaliserImage);
    const texteAlternatif = (image, index) => image.legende || (projets[projetId].titre + ", image " + (index + 1));

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
        source.srcset = images[0].src.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
        source.type = "image/webp";
        const img = document.createElement("img");
        img.src = images[0].src;
        img.alt = texteAlternatif(images[0], 0);
        img.classList.add("projet-image");
        img.loading = "lazy";
        img.width = 1200;
        img.height = 800;
        picture.appendChild(source);
        picture.appendChild(img);
        wrapper.appendChild(picture);
        imagesContainer.appendChild(wrapper);
        if (images[0].legende) {
            const legende = document.createElement("p");
            legende.classList.add("carrousel-legende", "projet-legende-seule");
            legende.textContent = images[0].legende;
            imagesContainer.appendChild(legende);
        }
    } else {
        imagesContainer.innerHTML = "";
        // Carrousel
        const carrousel = document.createElement("div");
        carrousel.classList.add("carrousel");
        // Conteneur focusable + sémantique de groupe pour les lecteurs d'écran
        carrousel.setAttribute("role", "group");
        carrousel.setAttribute("aria-label", "Galerie d'images du projet");
        carrousel.setAttribute("tabindex", "0");

        const btnPrev = document.createElement("button");
        btnPrev.classList.add("carrousel-btn", "carrousel-prev");
        btnPrev.setAttribute("aria-label", "Image précédente");
        btnPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';

        const track = document.createElement("div");
        track.classList.add("carrousel-track");

        images.forEach((image, index) => {
            // Vrai bouton pour Entrée/Espace. Styles inline pour garder l'empilement
            // des slides sans toucher au CSS.
            const boutonSlide = document.createElement("button");
            boutonSlide.type = "button";
            boutonSlide.classList.add("carrousel-slide-btn");
            boutonSlide.setAttribute("aria-label", "Agrandir : " + texteAlternatif(image, index));
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
            // Slides empilées : sans `visibility`, les boutons invisibles restaient cliquables
            // et la modale s'ouvrait sur la dernière image au lieu de celle affichée.
            boutonSlide.style.visibility = index === 0 ? "visible" : "hidden";

            const picture = document.createElement("picture");
            const source = document.createElement("source");
            source.srcset = image.src.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
            source.type = "image/webp";
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = texteAlternatif(image, index);
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

        const btnNext = document.createElement("button");
        btnNext.classList.add("carrousel-btn", "carrousel-next");
        btnNext.setAttribute("aria-label", "Image suivante");
        btnNext.innerHTML = '<i class="fas fa-chevron-right"></i>';

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("carrousel-dots");

        images.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.classList.add("carrousel-dot");
            if (index === 0) dot.classList.add("active");
            dot.setAttribute("aria-label", "Image " + (index + 1));
            dotsContainer.appendChild(dot);
        });

        const counter = document.createElement("div");
        counter.classList.add("carrousel-counter");
        counter.setAttribute("aria-live", "polite");
        counter.setAttribute("aria-atomic", "true");

        // Numéro et légende dans la même région, annoncés ensemble à chaque changement
        function remplirCompteur(cible, index) {
            cible.textContent = "";
            const numero = document.createElement("span");
            numero.classList.add("carrousel-numero");
            numero.textContent = (index + 1) + " / " + images.length;
            cible.appendChild(numero);
            if (images[index].legende) {
                const legende = document.createElement("span");
                legende.classList.add("carrousel-legende");
                legende.textContent = images[index].legende;
                cible.appendChild(legende);
            }
        }

        remplirCompteur(counter, 0);

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
            if (ancienBouton) {
                ancienBouton.style.position = "absolute";
                ancienBouton.style.visibility = "hidden";
            }
            diapoCourante = (index + slides.length) % slides.length;
            slides[diapoCourante].classList.add("active");
            dots[diapoCourante].classList.add("active");
            const nouveauBouton = boutonDeSlide(slides[diapoCourante]);
            if (nouveauBouton) {
                nouveauBouton.style.position = "relative";
                nouveauBouton.style.visibility = "visible";
            }
            remplirCompteur(counter, diapoCourante);
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

            const btnPrevModale = document.createElement("button");
            btnPrevModale.classList.add("carrousel-btn", "carrousel-prev");
            btnPrevModale.setAttribute("aria-label", "Image précédente");
            btnPrevModale.innerHTML = '<i class="fas fa-chevron-left"></i>';

            const pictureModale = document.createElement("picture");
            const sourceModale = document.createElement("source");
            sourceModale.srcset = slides[indexModale].src.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
            sourceModale.type = "image/webp";
            const imgModale = document.createElement("img");
            imgModale.src = slides[indexModale].src;
            imgModale.alt = slides[indexModale].alt;
            pictureModale.appendChild(sourceModale);
            pictureModale.appendChild(imgModale);

            const btnNextModale = document.createElement("button");
            btnNextModale.classList.add("carrousel-btn", "carrousel-next");
            btnNextModale.setAttribute("aria-label", "Image suivante");
            btnNextModale.innerHTML = '<i class="fas fa-chevron-right"></i>';

            const compteurModale = document.createElement("div");
            compteurModale.classList.add("carrousel-modale-counter");
            compteurModale.setAttribute("aria-live", "polite");
            compteurModale.setAttribute("aria-atomic", "true");
            remplirCompteur(compteurModale, indexModale);

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
                remplirCompteur(compteurModale, indexModale);
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

        // Vrai <button> autour de l'image : Entrée et Espace marchent sans rien ajouter
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

        // Auto-play avec pause au survol. Toujours un seul timer à la fois,
        // sinon ils s'empilent et le défilement accélère.
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

    if (projetLinkContainer) projetLinkContainer.innerHTML = "";

    if (projetLinkContainer) {
        // `liens` porte tous les liens externes, chacun avec son libellé : un second
        // « Voir le projet en ligne » ne dirait pas où il mène.
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