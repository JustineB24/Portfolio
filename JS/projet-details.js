// Récupérer l'ID du projet depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const projetId = urlParams.get("id");

// Base de données des projets
const projets = {
    "1": {
        title: "Développement mobile",
        image: "../Projets/dev-mobile.png",
        description: "Application mobile développée avec Flutter pour la gestion des tâches."
    },
    "2": {
        title: "France Mobilier",
        image: "../Projets/france-mobilier.png",
        description: "Site e-commerce pour une entreprise de mobilier."
    },
    "3": {
        title: "Sio Shop",
        image: "../Projets/Sio_Shop/Menu_SioShop.png",
        description: "Marketplace en ligne développée en PHP et MySQL."
    },
    "4": {
        title: "Speedcubing",
        image: "../Projets/Speedcubing/Accueil_Speedcubing.png",
        description: "Site web pour la communauté de speedcubing, incluant des tutoriels et un chronomètre en JS."
    },
    "5": {
        title: "Application météo",
        image: "../Projets/Meteo/Meteo.png",
        description: "Application météo utilisant l'API OpenWeather pour afficher les prévisions."
    },
    "6": {
        title: "Générateur de mots de passe",
        image: "../Projets/Generateur_mdp/Generateur_mdp.png",
        description: "Outil permettant de générer des mots de passe sécurisés aléatoires."
    },
    "7": {
        title: "Rétro Gaming",
        image: "../Projets/retro-gaming.png",
        description: "Projet Windows Forms pour émuler des jeux rétro en C#."
    },
    "8": {
        title: "Gestion du personnel",
        image: "../Projets/gestion-personnel.png",
        description: "Application de gestion des employés avec interface CRUD en PHP/MySQL."
    },
    "9": {
        title: "Site Lafleur",
        image: "../Projets/Site_Lafleur/Accueil_Lafleur.png",
        description: "Refonte du site Lafleur avec HTML, CSS et JavaScript."
    }
};

// Vérifier si l'ID existe
if (projets[projetId]) {
    document.getElementById("projet-title").innerText = projets[projetId].title;
    document.getElementById("projet-image").src = projets[projetId].image;
    document.getElementById("projet-description").innerText = projets[projetId].description;
} else {
    document.querySelector(".projet-details").innerHTML = "<h2>Projet introuvable</h2>";
}