// Récupérer l'ID du projet depuis l'URL (n'accepte que des chiffres)
const urlParams = new URLSearchParams(window.location.search);
const rawId = urlParams.get("id");
const projetId = rawId && /^\d+$/.test(rawId) ? rawId : null;

// Base de données des projets
const projets = {
    "1": {
        title: "Pendu",
        images: ["../projets/Pendu/Menu.jpg",
            "../projets/Pendu/Jeu.jpg",
            "../projets/Pendu/Mots.jpg",
            "../projets/Pendu/Scores.jpg"
        ],
        description: "Application mobile développée avec MAUI et XAML, recréant le célèbre jeu du pendu. L'utilisateur doit deviner un mot choisi aléatoirement, en proposant des lettres une par une. Chaque mauvaise réponse révèle progressivement une image du pendu. Le menu principal permet de jouer, de gérer la liste des mots à deviner, de consulter les meilleurs scores ou de quitter l'application. Les mots et les scores sont stockés localement, permettant une gestion dynamique des parties et une personnalisation du jeu. L'interface est responsive et s'adapte parfaitement aux différents formats mobiles.",
        technologies: ["XAML", "MAUI"]
    },
    "2": {
        title: "France Mobilier",
        images: ["../projets/France_mobilier/Accueil.png",
            "../projets/France_mobilier/Meuble.png",
            "../projets/France_mobilier/Magasins.png",
            "../projets/France_mobilier/Admin.png",
            "../projets/France_mobilier/AjoutProduit.png",
            "../projets/France_mobilier/AjoutMagasin.png"
        ],
        description: "Site e-commerce développé pour la société France Mobilier, spécialisée dans le mobilier d'intérieur. Conçu selon l'architecture MVC, il propose une page d'accueil présentant l'entreprise, un module de recherche de meubles par catégorie, ainsi qu'une page listant l'ensemble des magasins physiques. Le projet utilise une base de données pour gérer dynamiquement les meubles et les points de vente. Un panneau d'administration est également prévu pour permettre la modification des produits et des magasins. L'interface est pensée pour être claire et facilement maintenable.",
        technologies: ["HTML", "CSS", "PHP", "C#", "MYSQL"]
    },
    "3": {
        title: "Sio Shop",
        images: [
            "../projets/Sio_Shop/Connexion.png",
            "../projets/Sio_Shop/Menu.png",
            "../projets/Sio_Shop/PasAdmin.png",
            "../projets/Sio_Shop/GestionClients.png",
            "../projets/Sio_Shop/RechercheClient.png",
            "../projets/Sio_Shop/Client.png",
            "../projets/Sio_Shop/NouveauClient.png",
            "../projets/Sio_Shop/GestionProduits.png",
            "../projets/Sio_Shop/RechercheProduit.png",
            "../projets/Sio_Shop/Produit.png",
            "../projets/Sio_Shop/NouveauProduit.png",
            "../projets/Sio_Shop/SaisirVente.png",
            "../projets/Sio_Shop/Facture.png",
            "../projets/Sio_Shop/GestionEmployes.png",
            "../projets/Sio_Shop/Employe.png",
            "../projets/Sio_Shop/AjoutEmploye.png"
        ],
        description: "Application de gestion commerciale développée sous Windows Forms pour une concession automobile. Ce projet propose une interface permettant aux employés de gérer les clients, les véhicules en stock et les ventes. L'application intègre une authentification sécurisée, une liaison directe avec une base de données SQL, ainsi qu'un module de création de factures au format PDF. Les utilisateurs peuvent rechercher, ajouter et modifier clients et produits, saisir des ventes avec calcul automatique du prix TTC, et suivre l'évolution des stocks en temps réel. La structure suit les principes de la programmation orientée objet, en assurant une navigation fluide et professionnelle entre les différentes fonctionnalités.",
        technologies: ["WinForms", "C#", "MYSQL"]
    },
    "4": {
        title: "Speedcubing",
        images: [
            "../projets/Speedcubing/Accueil.png",
            "../projets/Speedcubing/Chrono.png",
            "../projets/Speedcubing/Technique_3x3.png",
            "../projets/Speedcubing/Def_Speedcubing.png",
            "../projets/Speedcubing/Connexion.png"
        ],
        description: "Projet développé pour l'Association Française de SpeedCubing. Ce site permet aux passionnés de Rubik's Cube de s'entraîner en ligne, d'enregistrer leurs temps et de comparer leurs performances avec celles des autres. Il intègre un chronomètre interactif, une base de données des meilleurs temps et une section dédiée à la résolution d'un Rubik's Cube 3x3.",
        technologies: ["PHP", "CSS", "JavaScript", "MYSQL"]
    },
    "5": {
        title: "Application météo",
        images: ["../projets/Meteo/Meteo.png"],
        description: "Application web développée pour afficher en temps réel les conditions météorologiques d'une ville choisie par l'utilisateur. En utilisant l'API OpenWeather, ce projet permet de consulter la température actuelle, l'humidité ainsi qu'une description du temps (ensoleillé, nuageux, etc.). L'interface propose une zone de recherche, un affichage centralisé des données principales, et un design épuré avec fond personnalisé. Le JavaScript assure la récupération dynamique des données météo et la mise à jour instantanée de l'affichage après chaque recherche.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "6": {
        title: "Générateur de mots de passe",
        images: ["../projets/Generateur_mdp/Generateur_mdp.png"],
        description: "Outil conçu pour aider les utilisateurs à générer des mots de passe sécurisés en quelques clics. Ce générateur permet de créer des mots de passe aléatoires respectant des critères de sécurité stricts : majuscules, minuscules, chiffres et caractères spéciaux. Il intègre une interface interactive, incluant un slider pour définir la longueur du mot de passe (de 8 à 16 caractères), ainsi que des boutons pour copier rapidement le résultat.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    "7": {
        title: "Mairie de Cauffry",
        images: ["../projets/Mairie_de_cauffry/Accueil.png"],
        description: "Réalisation d'un site web pour la commune de Cauffry dans le cadre d'un stage de 4 semaines avec Adico (Association pour le développement et l'innovation numérique des collectivités).",
        technologies: ["HTML", "CSS"],
        link: "https://mairiecauffry.fr/"
    },
    "8": {
        title: "Panada Food",
        images: [
            "../projets/Panada_Food/Accueil.png",
            "../projets/Panada_Food/Menu.png",
            "../projets/Panada_Food/Contact.png",
            "../projets/Panada_Food/Mentions_legales.png",
            "../projets/Panada_Food/Ecran_chargement.png"
        ],
        description: "Développement d'un site web pour le restaurant Panada Food sur une durée de 6 semaines, en collaboration avec une collègue.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://panadafood.ovh"
    }
};

// Vérifier si l'ID existe et mettre à jour la page
if (!projetId || !projets[projetId]) {
    document.querySelector("main").innerHTML =
        '<p style="text-align:center;margin-top:5rem;font-size:1.2rem;color:var(--text-color)">Projet introuvable. <a href="projets.html">Retour aux projets</a></p>';
} else if (projets[projetId]) {
    document.getElementById("projet-title").innerText = projets[projetId].title;
    document.title = "Portfolio | " + projets[projetId].title;
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
        logo.src = `../assets/SVG/${fileName}.svg`;
        logo.alt = tech;
        logo.width = 80;
        logo.height = 80;
        logo.classList.add("tech-logo");

        // Ajout du logo et du texte
        li.appendChild(logo);
        li.append(` ${tech}`);

        techList.appendChild(li);
    });

    // Ajouter les images dans le div "projet-images"
    const imagesContainer = document.getElementById("projet-images");
    imagesContainer.innerHTML = "";

    const images = projets[projetId].images;

    if (images.length === 1) {
        // Image unique : affichage simple
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
        imagesContainer.appendChild(picture);
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
            img.src = imgSrc;
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

        carrousel.appendChild(btnPrev);
        carrousel.appendChild(track);
        carrousel.appendChild(btnNext);
        carrousel.appendChild(dotsContainer);
        imagesContainer.appendChild(carrousel);

        // Logique du carrousel
        let currentSlide = 0;
        const slides = track.querySelectorAll(".carrousel-slide");
        const dots = dotsContainer.querySelectorAll(".carrousel-dot");

        function allerASlide(index) {
            slides[currentSlide].classList.remove("active");
            dots[currentSlide].classList.remove("active");
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");
        }

        function slideSuivant() {
            allerASlide(currentSlide + 1);
        }

        function slidePrecedent() {
            allerASlide(currentSlide - 1);
        }

        btnNext.addEventListener("click", slideSuivant);
        btnPrev.addEventListener("click", slidePrecedent);

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => allerASlide(index));
        });

        // Clic sur image → modale plein écran
        slides.forEach(slide => {
            slide.addEventListener("click", () => {
                const modale = document.createElement("div");
                modale.classList.add("carrousel-modale");

                const pictureModale = document.createElement("picture");
                const sourceModale = document.createElement("source");
                sourceModale.srcset = slide.src.replace(/\.(png|jpg|jpeg|PNG|JPG)$/i, ".webp");
                sourceModale.type = "image/webp";
                const imgModale = document.createElement("img");
                imgModale.src = slide.src;
                imgModale.alt = slide.alt;
                pictureModale.appendChild(sourceModale);
                pictureModale.appendChild(imgModale);

                modale.appendChild(pictureModale);
                document.body.appendChild(modale);

                // Forcer le reflow pour déclencher la transition
                modale.offsetHeight;
                modale.classList.add("active");

                function fermerModale() {
                    modale.classList.remove("active");
                    modale.addEventListener("transitionend", () => modale.remove(), { once: true });
                }

                modale.addEventListener("click", fermerModale);

                document.addEventListener("keydown", function escHandler(e) {
                    if (e.key === "Escape") {
                        fermerModale();
                        document.removeEventListener("keydown", escHandler);
                    }
                });
            });
        });

        // Navigation clavier
        document.addEventListener("keydown", (e) => {
            if (document.querySelector(".carrousel-modale")) return;
            if (e.key === "ArrowRight") slideSuivant();
            if (e.key === "ArrowLeft") slidePrecedent();
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
        linkElement.innerText = "Voir le projet en ligne";

        projetLinkContainer.appendChild(linkElement);

        // Rendre le conteneur visible UNIQUEMENT s'il y a un lien
        projetLinkContainer.style.display = 'block';
    } else {
        // S'assurer que le conteneur est masqué s'il n'y a pas de lien
        projetLinkContainer.style.display = 'none';
    }
}