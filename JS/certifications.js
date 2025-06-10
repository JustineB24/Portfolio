// Stocker toutes les images dans un tableau
var images = document.querySelectorAll(".gallery .certif");

// Variable pour savoir sur quelle image on est
var currentIndex = 0;

// Ouvre la modale avec l'image
function openModal(img) {
    var modal = document.getElementById("zoom-modal");
    var modalImg = document.getElementById("zoom-modal-img");

    // Afficher la modale avec transition
    modal.classList.add("visible");

    // Ajouter la classe no-scroll pour désactiver le défilement du body
    document.body.style.overflow = 'hidden'; // Désactive le défilement

    // Mettre l'image dans la modale
    modalImg.src = img.src;
    currentIndex = Array.from(images).indexOf(img); // Mettez à jour l'index actuel
}

// Ferme la modale
function closeModal() {
    var modal = document.getElementById("zoom-modal");
    modal.classList.remove("visible");

    // Réactiver le défilement du body
    document.body.style.overflow = 'auto'; // Réactive le défilement
}

// Passer à l'image suivante
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Boucle circulaire
    var modalImg = document.getElementById("zoom-modal-img");
    modalImg.src = images[currentIndex].src;
}

// Passer à l'image précédente
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Boucle circulaire
    var modalImg = document.getElementById("zoom-modal-img");
    modalImg.src = images[currentIndex].src;
}

// Événements de navigation
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

// Fermeture en cliquant sur l'arrière-plan (hors image)
document.getElementById("zoom-modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeModal();
    }
});

// Fermeture avec la croix
document.querySelector(".close").addEventListener("click", closeModal);

// Zoom avant et arrière avec double-clic
document.getElementById("zoom-modal-img").addEventListener("wheel", function (event) {
    var modalImg = document.getElementById("zoom-modal-img");
    var scale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;

    // Modifier le facteur de zoom en fonction du sens de la molette
    if (event.deltaY < 0) {
        scale *= 1.1; // Zoom avant
    } else {
        scale *= 0.9; // Zoom arrière
    }

    // Appliquer le zoom avec une limite
    modalImg.style.transform = `scale(${Math.min(Math.max(scale, 1), 2)})`; // Limiter à un zoom entre 1x et 2x
});

// Déplacement de l'image avec le glisser-déposer
var isDragging = false;
var startX, startY;
var initialX, initialY;

var modalImg = document.getElementById("zoom-modal-img");

// Quand l'utilisateur clique sur l'image (mousedown)
modalImg.addEventListener("mousedown", function (event) {
    event.preventDefault(); // Empêche la sélection du texte

    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;

    // Sauvegarder la position initiale de l'image
    var transform = modalImg.style.transform.replace("scale(", "").replace(")", "").split(", ");
    initialX = transform[0] ? parseInt(transform[0].replace('px', '')) : 0;
    initialY = transform[1] ? parseInt(transform[1].replace('px', '')) : 0;

    modalImg.classList.add("grabbing");
});

// Quand l'utilisateur déplace la souris (mousemove)
modalImg.addEventListener("mousemove", function (event) {
    if (isDragging) {
        // Calculer les déplacements
        var deltaX = event.clientX - startX;
        var deltaY = event.clientY - startY;

        // Déplacer l'image
        var newX = initialX + deltaX;
        var newY = initialY + deltaY;

        modalImg.style.transform = `scale(1.5) translate(${newX}px, ${newY}px)`;
    }
});

// Quand l'utilisateur relâche le bouton de la souris (mouseup)
modalImg.addEventListener("mouseup", function () {
    isDragging = false;
    modalImg.classList.remove("grabbing");
});

// Quand l'utilisateur quitte la zone de l'image (mouseleave)
modalImg.addEventListener("mouseleave", function () {
    isDragging = false;
    modalImg.classList.remove("grabbing");
});
