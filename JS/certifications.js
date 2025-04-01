// Sélection des éléments nécessaires
const images = document.querySelectorAll('.certif'); // Images cliquables
const modal = document.getElementById('image-modal'); // Modale
const modalImg = document.getElementById('modal-img'); // Image dans la modale
const closeButton = document.querySelector('.close-btn'); // Bouton de fermeture
const leftButton = document.querySelector('.left-btn'); // Flèche gauche
const rightButton = document.querySelector('.right-btn'); // Flèche droite

// Indice de l'image actuellement affichée
let currentImageIndex = 0;

// Fonction pour afficher la modale avec l'image cliquée
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index; // Mettre à jour l'indice de l'image
        modal.classList.remove('hidden'); // Affiche la modale
        modalImg.src = image.src;
        modalImg.alt = image.alt; // Pour l'accessibilité
        modal.classList.add('visible'); // Affiche la modale
    });
});

// Fermeture de la modale en cliquant à l'extérieur
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden'); // Cache la modale
        modal.classList.remove('visible'); // Supprime la classe visible
    }
});

// Ajout de la fermeture avec le bouton "X"
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});

// Changer d'image (flèche gauche)
leftButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    modalImg.src = images[currentImageIndex].src;
    modalImg.alt = images[currentImageIndex].alt; // Mettre à jour l'attribut alt
});

// Changer d'image (flèche droite)
rightButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    modalImg.src = images[currentImageIndex].src;
    modalImg.alt = images[currentImageIndex].alt; // Mettre à jour l'attribut alt
});
