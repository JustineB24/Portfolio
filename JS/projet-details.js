// Récupérer l'ID du projet depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const projetId = urlParams.get("id");

// Base de données des projets
const projets = {
    "1": {
        title: "Pendu",
        images: ["../Projets/Pendu/Menu.jpg",
            "../Projets/Pendu/Jeu.jpg",
            "../Projets/Pendu/Mots.jpg",
            "../Projets/Pendu/Scores.jpg"
        ],
        description: "Application mobile développée avec MAUI et XAML, recréant le célèbre jeu du pendu. L'utilisateur doit deviner un mot choisi aléatoirement, en proposant des lettres une par une. Chaque mauvaise réponse révèle progressivement une image du pendu. Le menu principal permet de jouer, de gérer la liste des mots à deviner, de consulter les meilleurs scores ou de quitter l'application. Les mots et les scores sont stockés localement, permettant une gestion dynamique des parties et une personnalisation du jeu. L'interface est responsive et s'adapte parfaitement aux différents formats mobiles.",
        technologies: ["XAML", "MAUI"]
    },
    "2": {
        title: "France Mobilier",
        images: ["../Projets/France_mobilier/Accueil.png",
            "../Projets/France_mobilier/Meuble.png",
            "../Projets/France_mobilier/Magasins.png",
            "../Projets/France_mobilier/Admin.png",
            "../Projets/France_mobilier/AjoutProduit.png",
            "../Projets/France_mobilier/AjoutMagasin.png"
        ],
        description: "Site e-commerce développé pour la société France Mobilier, spécialisée dans le mobilier d'intérieur. Conçu selon l'architecture MVC, il propose une page d'accueil présentant l'entreprise, un module de recherche de meubles par catégorie, ainsi qu'une page listant l'ensemble des magasins physiques. Le projet utilise une base de données pour gérer dynamiquement les meubles et les points de vente. Un panneau d'administration est également prévu pour permettre la modification des produits et des magasins. L'interface est pensée pour être claire et facilement maintenable.",
        technologies: ["HTML", "CSS", "PHP", "C#", "MYSQL"]
    },
    "3": {
        title: "Sio Shop",
        images: [
            "../Projets/Sio_Shop/Connexion.png",
            "../Projets/Sio_Shop/Menu.png",
            "../Projets/Sio_Shop/PasAdmin.png",
            "../Projets/Sio_Shop/GestionClients.png",
            "../Projets/Sio_Shop/RechercheClient.png",
            "../Projets/Sio_Shop/Client.png",
            "../Projets/Sio_Shop/NouveauClient.png",
            "../Projets/Sio_Shop/GestionProduits.png",
            "../Projets/Sio_Shop/RechercheProduit.png",
            "../Projets/Sio_Shop/Produit.png",
            "../Projets/Sio_Shop/NouveauProduit.png",
            "../Projets/Sio_Shop/SaisirVente.png",
            "../Projets/Sio_Shop/Facture.png",
            "../Projets/Sio_Shop/GestionEmployes.png",
            "../Projets/Sio_Shop/Employe.png",
            "../Projets/Sio_Shop/AjoutEmploye.png"
        ],
        description: "Application de gestion commerciale développée sous Windows Forms pour une concession automobile. Ce projet propose une interface permettant aux employés de gérer les clients, les véhicules en stock et les ventes. L'application intègre une authentification sécurisée, une liaison directe avec une base de données SQL, ainsi qu'un module de création de factures au format PDF. Les utilisateurs peuvent rechercher, ajouter et modifier clients et produits, saisir des ventes avec calcul automatique du prix TTC, et suivre l'évolution des stocks en temps réel. La structure suit les principes de la programmation orientée objet, en assurant une navigation fluide et professionnelle entre les différentes fonctionnalités.",
        technologies: ["WinForms", "C#", "MYSQL"]
    },
    "4": {
        title: "Speedcubing",
        images: [
            "../Projets/Speedcubing/Accueil.png",
            "../Projets/Speedcubing/Chrono.png",
            "../Projets/Speedcubing/Technique_3x3.png",
            "../Projets/Speedcubing/Def_Speedcubing.png",
            "../Projets/Speedcubing/Connexion.png"
        ],
        description: "Projet développé pour l'Association Française de SpeedCubing. Ce site permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "MYSQL"]
    },
    "5": {
        title: "Application météo",
        images: ["../Projets/Meteo/Meteo.png"],
        description: "Application web développée pour afficher en temps réel les conditions météorologiques d'une ville choisie par l'utilisateur. En utilisant l'API OpenWeather, ce projet permet de consulter la température actuelle, l'humidité ainsi qu'une description du temps (ensoleillé, nuageux, etc.). L'interface propose une zone de recherche, un affichage centralisé des données principales, et un design épuré avec fond personnalisé. Le JavaScript assure la récupération dynamique des données météo et la mise à jour instantanée de l'affichage après chaque recherche.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "6": {
        title: "Générateur de mots de passe",
        images: ["../Projets/Generateur_mdp/Generateur_mdp.png"],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "7": {
        title: "Mairie de Cauffry",
        images: ["../Projets/Mairie_de_cauffry/Accueil.png"],
        description: "Réalisation d'un site web pour la commune de Cauffry dans le cadre d'un stage de 4 semaines avec Adico (Association pour le développement et l'innovation numérique des collectivités).",
        technologies: ["HTML", "CSS"],
        link: "https://mairiecauffry.fr/"
    },
    "8": {
        title: "Panada Food",
        images: [
            "../Projets/Panada_Food/Accueil.png",
            "../Projets/Panada_Food/Menu.png",
            "../Projets/Panada_Food/Contact.png",
            "../Projets/Panada_Food/Mentions_legales.png",
            "../Projets/Panada_Food/Ecran_chargement.png"
        ],
        description: "Développement d'un site web pour le restaurant Panada Food sur une durée de 6 semaines, en collaboration avec une collègue.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://panadafood.ovh"
    }
};

// Vérifier si l'ID existe et mettre à jour la page
if (projets[projetId]) {
    document.getElementById("projet-title").innerText = projets[projetId].title;
    document.getElementById("projet-description").innerText = projets[projetId].description;

    const techList = document.getElementById("projet-technologies");

    // Vider la liste avant d'ajouter les nouvelles technologies
    techList.innerHTML = "";

    projets[projetId].technologies.forEach(tech => {
        let li = document.createElement("li");

        // Exception pour C#
        let fileName = tech.toLowerCase();
        if (fileName === "c#") {
            fileName = "c-sharp";
        }

        // Création du logo
        let logo = document.createElement("img");
        logo.src = `../Images/SVG/${fileName}.svg`;
        logo.alt = tech;
        logo.classList.add("tech-logo"); // Pour styliser le logo

        // Ajout du logo et du texte
        li.appendChild(logo);
        li.append(` ${tech}`);

        techList.appendChild(li);
    });

    // Ajouter les images dans le div "projet-images"
    const imagesContainer = document.getElementById("projet-images");
    imagesContainer.innerHTML = ""; // Nettoyer au cas où

    projets[projetId].images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = projets[projetId].title;
        img.classList.add("projet-image"); // Pour ton style CSS
        imagesContainer.appendChild(img);
    });

    const projetLinkContainer = document.getElementById("projet-link");

    // Efface tout contenu précédent dans le conteneur du lien
    projetLinkContainer.innerHTML = "";

    // Vérifier si un lien existe pour ce projet
    if (projets[projetId].link) {
        const linkElement = document.createElement("a");
        linkElement.href = projets[projetId].link;
        linkElement.target = "_blank";
        linkElement.innerText = "Voir le projet en ligne";

        projetLinkContainer.appendChild(linkElement);

        // Rendre le conteneur visible UNIQUEMENT s'il y a un lien
        projetLinkContainer.style.display = 'block';
    } else {
        // S'assurer que le conteneur est masqué s'il n'y a pas de lien
        projetLinkContainer.style.display = 'none';
    }
}
