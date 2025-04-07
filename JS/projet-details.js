// Récupérer l'ID du projet depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const projetId = urlParams.get("id");

// Base de données des projets
const projets = {
    "1": {
        title: "Pendu",
        images: ["../Projets/Pendu/Accueil.png"],
        description: "Application mobile développée en MAUI.",
        technologies: ["XAML", "MAUI"]
    },
    "2": {
        title: "France Mobilier",
        images: ["../Projets/france-mobilier.png"],
        description: "Site e-commerce pour une entreprise de mobilier.",
        technologies: ["MVC", "PHP", "C#", "BDD"]
    },
    "3": {
        title: "Rétro Gaming",
        images: ["../Projets/retro-gaming.png"],
        description: "Projet Windows Forms pour émuler des jeux rétro en C#.",
        technologies: ["Windows Forms", "C#", "BDD"]
    },
    "4": {
        title: "Sio Shop",
        images: [
            "../Projets/Sio_Shop/Menu.png",
            "../Projets/Sio_Shop/Connexion.png",
            "../Projets/Sio_Shop/Clients.png",
            "../Projets/Sio_Shop/AjoutClient.png",
            "../Projets/Sio_Shop/Produits.png",
            "../Projets/Sio_Shop/AjoutProduit.png",
            "../Projets/Sio_Shop/RechercheProduit.png",
            "../Projets/Sio_Shop/SaisirVente.png"
        ],
        description: "Marketplace en ligne développée en PHP et MySQL.",
        technologies: ["PHP", "MySQL"]
    },
    "5": {
        title: "Speedcubing",
        images: [
            "../Projets/Speedcubing/Accueil.png",
            "../Projets/Speedcubing/Chrono.png",
            "../Projets/Speedcubing/Technique_3x3.png",
            "../Projets/Speedcubing/Def_Speedcubing.png",
            "../Projets/Speedcubing/Connexion.png"
        ],
        description: "Projet développé pour l'Association Française de SpeedCubing. Ce site permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "BDD"]
    },
    "6": {
        title: "Pong",
        images: ["../Projets/Pong/Pong.png"],
        description: "Reproduction du jeu Pong en Windows Forms.",
        technologies: ["Windows Forms", "C#"]
    },
    "7": {
        title: "Application météo",
        images: ["../Projets/Meteo/Meteo.png"],
        description: "Application météo utilisant l'API OpenWeather pour afficher les prévisions.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "8": {
        title: "Générateur de mots de passe",
        images: ["../Projets/Generateur_mdp/Generateur_mdp.png"],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "9": {
        title: "Site Lafleur",
        images: [
            "../Projets/Site_Lafleur/Accueil.png",
            "../Projets/Site_Lafleur/Bulbes.png",
            "../Projets/Site_Lafleur/Rosiers.png",
            "../Projets/Site_Lafleur/Plantes.png"
        ],
        description: "Site vitrine développé pour la société Lafleur, spécialisée dans la vente de graines et de bulbes de fleurs. Le projet propose une présentation détaillée des produits, une mise en page soignée respectant l'identité visuelle de l'entreprise, ainsi qu'une navigation fluide entre différentes catégories (bulbes, rosiers, plantes à massif) pour faciliter l'accès aux informations essentielles.",
        technologies: ["HTML", "CSS"]
    },
    "10": {
        title: "Mairie de Cauffry",
        images: ["../Projets/Mairie_de_cauffry/Accueil.png"],
        description: "Description du projet",
        technologies: ["HTML", "CSS"]
    },
    "11": {
        title: "Panada Food",
        images: [
            "../Projets/Panada_Food/Accueil.png",
            "../Projets/Panada_Food/Menu.png",
            "../Projets/Panada_Food/Contact.png",
            "../Projets/Panada_Food/Mentions_legales.png",
            "../Projets/Panada_Food/Ecran_chargement.png"
        ],
        description: "Description du projet",
        technologies: ["HTML", "CSS"]
    }
};

// Vérifier si l'ID existe et mettre à jour la page
if (projets[projetId]) {
    document.getElementById("projet-title").innerText = projets[projetId].title;
    document.getElementById("projet-description").innerText = projets[projetId].description;

    // Récupérer l'élément UL
    const techList = document.getElementById("projet-technologies");

    // Vider la liste avant d'ajouter les nouvelles technologies
    techList.innerHTML = "";

    // Ajouter chaque technologie en tant que LI dans la liste
    projets[projetId].technologies.forEach(tech => {
        let li = document.createElement("li");
        li.innerText = tech;
        techList.appendChild(li);
    });

    // Ajouter les images dans le div "projet-images"
    const imagesContainer = document.getElementById("projet-images");
    imagesContainer.innerHTML = ""; // Nettoyer au cas où

    projets[projetId].images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = projets[projetId].title;
        img.classList.add("projet-image"); // Tu peux styliser cette classe en CSS
        imagesContainer.appendChild(img);
    });
}
