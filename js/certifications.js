(function () {
// Stocker toutes les images dans un tableau
    const images = document.querySelectorAll(".gallery .certif");

// Variable pour savoir sur quelle image on est
    let currentIndex = 0;

    let dernierFocusAvantModale = null;

// Récupère le srcset WebP depuis le <picture> parent, ou le src original
    function getWebpSrc(img) {
        const picture = img.closest("picture");
        if (picture) {
            const source = picture.querySelector('source[type="image/webp"]');
            if (source) return source.srcset;
        }
        return img.src;
    }

// Attacher les listeners sur chaque image (remplace les onclick inline)
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            ouvrirModale(img);
        });
        img.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                ouvrirModale(img);
            }
        });
    });

// Ouvre la modale avec l'image
    function ouvrirModale(img) {
        const modal = document.getElementById("zoom-modal");
        const modalImg = document.getElementById("zoom-modal-img");

        dernierFocusAvantModale = document.activeElement;
        modal.classList.add("visible");
        document.documentElement.classList.add('overflow-hidden');

        modalImg.src = getWebpSrc(img);
        currentIndex = Array.from(images).indexOf(img);

        // Donner le focus au bouton fermer
        const closeBtn = modal.querySelector(".close");
        if (closeBtn) closeBtn.focus();
    }

// Ferme la modale
    function closeModal() {
        const modal = document.getElementById("zoom-modal");
        modal.classList.remove("visible");
        resetTransform();
        document.documentElement.classList.remove('overflow-hidden');

        if (dernierFocusAvantModale) {
            dernierFocusAvantModale.focus();
        }
    }

// Passer à l'image suivante
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("zoom-modal-img").src = getWebpSrc(images[currentIndex]);
        resetTransform();
    }

// Passer à l'image précédente
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById("zoom-modal-img").src = getWebpSrc(images[currentIndex]);
        resetTransform();
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

// Navigation clavier et focus trap dans la modale
    document.addEventListener("keydown", function (e) {
        const modal = document.getElementById("zoom-modal");
        if (!modal.classList.contains("visible")) return;

        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "ArrowLeft") {
            prevImage();
        } else if (e.key === "Tab") {
            const focusables = modal.querySelectorAll('[role="button"], [tabindex]:not([tabindex="-1"])');
            const premier = focusables[0];
            const dernier = focusables[focusables.length - 1];

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
    });

// État du zoom et du déplacement
    let currentScale = 1;
    let currentTranslateX = 0;
    let currentTranslateY = 0;
    let isDragging = false;
    let startX, startY;
    let initialX, initialY;
    let rafId = null;

    const modalImg = document.getElementById("zoom-modal-img");

// Applique la transformation (appelé via requestAnimationFrame)
    function applyTransform() {
        modalImg.style.transform = `scale(${currentScale}) translate(${currentTranslateX}px, ${currentTranslateY}px)`;
        rafId = null;
    }

    function requestTransformUpdate() {
        if (!rafId) {
            rafId = requestAnimationFrame(applyTransform);
        }
    }

// Réinitialiser le zoom et la position quand on change d'image
    function resetTransform() {
        currentScale = 1;
        currentTranslateX = 0;
        currentTranslateY = 0;
        modalImg.style.transform = '';
    }

// Zoom avec la molette
    modalImg.addEventListener("wheel", function (event) {
        if (event.deltaY < 0) {
            currentScale *= 1.1;
        } else {
            currentScale *= 0.9;
        }
        currentScale = Math.min(Math.max(currentScale, 1), 2);

        // Réinitialiser la position si on revient au zoom 1
        if (currentScale === 1) {
            currentTranslateX = 0;
            currentTranslateY = 0;
        }

        requestTransformUpdate();
    });

// Début du glisser-déposer
    modalImg.addEventListener("mousedown", function (event) {
        event.preventDefault();
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        initialX = currentTranslateX;
        initialY = currentTranslateY;
        modalImg.classList.add("grabbing");
    });

// Déplacement de l'image (throttlé via requestAnimationFrame)
    modalImg.addEventListener("mousemove", function (event) {
        if (!isDragging) return;
        currentTranslateX = initialX + (event.clientX - startX);
        currentTranslateY = initialY + (event.clientY - startY);
        requestTransformUpdate();
    });

// Fin du glisser-déposer
    modalImg.addEventListener("mouseup", function () {
        isDragging = false;
        modalImg.classList.remove("grabbing");
    });

    modalImg.addEventListener("mouseleave", function () {
        isDragging = false;
        modalImg.classList.remove("grabbing");
    });
})();
