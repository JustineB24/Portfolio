// Récupérer l'ID du projet depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const projetId = urlParams.get("id");

// Base de données des projets
const projets = {
    "1": {
        title: "Pendu",
        image: "../Projets/dev-mobile.png",
        description: "Application mobile développée en MAUI.",
        technologies: ["XAML", "MAUI"]
    },
    "2": {
        title: "France Mobilier",
        image: "../Projets/france-mobilier.png",
        description: "Site e-commerce pour une entreprise de mobilier.",
        technologies: ["MVC", "PHP", "C#", "BDD"]
    },
    "3": {
        title: "Rétro Gaming",
        image: "../Projets/retro-gaming.png",
        description: "Projet Windows Forms pour émuler des jeux rétro en C#.",
        technologies: ["Windows Forms", "C#", "BDD"]
    },
    "4": {
        title: "Sio Shop",
        image: "../Projets/Sio_Shop/Menu_SioShop.png",
        description: "Marketplace en ligne développée en PHP et MySQL.",
        technologies: ["PHP", "MySQL"]
    },
    "5": {
        title: "Speedcubing",
        image: "../Projets/Speedcubing/Accueil_Speedcubing.png",
        description: "Projet développé pour l'Association Française de SpeedCubing. Ce site permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "BDD"]
    },
    "6": {
        title: "Pong",
        image: "../Projets/pong.png",
        description: "Reproduction du jeu Pong en Windows Forms.",
        technologies: ["Windows Forms", "C#"]
    },
    "7": {
        title: "Application météo",
        image: "../Projets/Meteo/Meteo.png",
        description: "Application météo utilisant l'API OpenWeather pour afficher les prévisions.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "8": {
        title: "Générateur de mots de passe",
        image: "../Projets/Generateur_mdp/Generateur_mdp.png",
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "9": {
        title: "Site Lafleur",
        image: "../Projets/Site_Lafleur/Accueil_Lafleur.png",
        description: "Site vitrine développé pour la société Lafleur, spécialisée dans la vente de graines et de bulbes de fleurs. Le projet propose une présentation détaillée des produits, une mise en page soignée respectant l'identité visuelle de l'entreprise, ainsi qu'une navigation fluide entre différentes catégories (bulbes, rosiers, plantes à massif) pour faciliter l'accès aux informations essentielles.",
        technologies: ["HTML", "CSS"]
    },
    "10": {
        title: "Mairie de Cauffry",
        image: "../Projets/Site_Lafleur/Accueil_Lafleur.png",
        description: "Site vitrine développé pour la société Lafleur, spécialisée dans la vente de graines et de bulbes de fleurs. Le projet propose une présentation détaillée des produits, une mise en page soignée respectant l'identité visuelle de l'entreprise, ainsi qu'une navigation fluide entre différentes catégories (bulbes, rosiers, plantes à massif) pour faciliter l'accès aux informations essentielles.",
        technologies: ["HTML", "CSS"]
    },
    "11": {
        title: "Panada Food",
        image: "../Projets/Site_Lafleur/Accueil_Lafleur.png",
        description: "Site vitrine développé pour la société Lafleur, spécialisée dans la vente de graines et de bulbes de fleurs. Le projet propose une présentation détaillée des produits, une mise en page soignée respectant l'identité visuelle de l'entreprise, ainsi qu'une navigation fluide entre différentes catégories (bulbes, rosiers, plantes à massif) pour faciliter l'accès aux informations essentielles.",
        technologies: ["HTML", "CSS"]
    }
};

// Vérifier si l'ID existe et mettre à jour la page
if (projets[projetId]) {
    document.getElementById("projet-title").innerText = projets[projetId].title;
    document.getElementById("projet-image").src = projets[projetId].image;
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
} else {
    document.querySelector(".projet-details").innerHTML = "<h2>Projet introuvable</h2>";
}
