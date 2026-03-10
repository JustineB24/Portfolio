(function () {
// Stocker toutes les images dans un tableau
    const images = document.querySelectorAll(".gallery .certif");

// Variable pour savoir sur quelle image on est
    let indexActuel = 0;

    let dernierFocusAvantModale = null;

// Récupère le srcset WebP depuis le <picture> parent, ou le src original
    function obtenirSrcWebp(img) {
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
        const imgModale = document.getElementById("zoom-modal-img");

        dernierFocusAvantModale = document.activeElement;
        modal.classList.add("visible");
        document.documentElement.classList.add('overflow-hidden');

        imgModale.src = obtenirSrcWebp(img);
        imgModale.alt = img.alt;
        indexActuel = Array.from(images).indexOf(img);

        // Donner le focus au bouton fermer
        const boutonFermer = modal.querySelector(".close");
        if (boutonFermer) boutonFermer.focus();
    }

// Ferme la modale
    function fermerModale() {
        const modal = document.getElementById("zoom-modal");
        modal.classList.remove("visible");
        reinitialiserTransformation();
        document.documentElement.classList.remove('overflow-hidden');

        if (dernierFocusAvantModale) {
            dernierFocusAvantModale.focus();
        }
    }

// Passer à l'image suivante
    function imageSuivante() {
        indexActuel = (indexActuel + 1) % images.length;
        var imgModaleNav = document.getElementById("zoom-modal-img");
        imgModaleNav.src = obtenirSrcWebp(images[indexActuel]);
        imgModaleNav.alt = images[indexActuel].alt;
        reinitialiserTransformation();
    }

// Passer à l'image précédente
    function imagePrecedente() {
        indexActuel = (indexActuel - 1 + images.length) % images.length;
        var imgModaleNav = document.getElementById("zoom-modal-img");
        imgModaleNav.src = obtenirSrcWebp(images[indexActuel]);
        imgModaleNav.alt = images[indexActuel].alt;
        reinitialiserTransformation();
    }

// Événements de navigation
    document.getElementById("next").addEventListener("click", imageSuivante);
    document.getElementById("prev").addEventListener("click", imagePrecedente);

// Fermeture en cliquant sur l'arrière-plan (hors image)
    document.getElementById("zoom-modal").addEventListener("click", function (event) {
        if (event.target === this) {
            fermerModale();
        }
    });

// Fermeture avec la croix
    document.querySelector(".close").addEventListener("click", fermerModale);

// Navigation clavier et focus trap dans la modale
    document.addEventListener("keydown", function (e) {
        const modal = document.getElementById("zoom-modal");
        if (!modal.classList.contains("visible")) return;

        if (e.key === "Escape") {
            fermerModale();
        } else if (e.key === "ArrowRight") {
            imageSuivante();
        } else if (e.key === "ArrowLeft") {
            imagePrecedente();
        } else if (e.key === "Tab") {
            const focusables = modal.querySelectorAll('button, [role="button"], [tabindex]:not([tabindex="-1"])');
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
    let echelleCourante = 1;
    let translationX = 0;
    let translationY = 0;
    let enGlissement = false;
    let debutX, debutY;
    let initialX, initialY;
    let idRaf = null;

    const imgModale = document.getElementById("zoom-modal-img");

// Applique la transformation (appelé via requestAnimationFrame)
    function appliquerTransformation() {
        imgModale.style.transform = `scale(${echelleCourante}) translate(${translationX}px, ${translationY}px)`;
        idRaf = null;
    }

    function demanderMiseAJourTransformation() {
        if (!idRaf) {
            idRaf = requestAnimationFrame(appliquerTransformation);
        }
    }

// Réinitialiser le zoom et la position quand on change d'image
    function reinitialiserTransformation() {
        echelleCourante = 1;
        translationX = 0;
        translationY = 0;
        imgModale.style.transform = '';
    }

// Zoom avec la molette
    imgModale.addEventListener("wheel", function (event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            echelleCourante *= 1.1;
        } else {
            echelleCourante *= 0.9;
        }
        echelleCourante = Math.min(Math.max(echelleCourante, 1), 2);

        // Réinitialiser la position si on revient au zoom 1
        if (echelleCourante === 1) {
            translationX = 0;
            translationY = 0;
        }

        demanderMiseAJourTransformation();
    }, {passive: false});

// Début du glisser-déposer
    imgModale.addEventListener("mousedown", function (event) {
        event.preventDefault();
        enGlissement = true;
        debutX = event.clientX;
        debutY = event.clientY;
        initialX = translationX;
        initialY = translationY;
        imgModale.classList.add("grabbing");
    });

// Déplacement de l'image (throttlé via requestAnimationFrame)
    imgModale.addEventListener("mousemove", function (event) {
        if (!enGlissement) return;
        translationX = initialX + (event.clientX - debutX);
        translationY = initialY + (event.clientY - debutY);
        demanderMiseAJourTransformation();
    });

// Fin du glisser-déposer
    imgModale.addEventListener("mouseup", function () {
        enGlissement = false;
        imgModale.classList.remove("grabbing");
    });

    imgModale.addEventListener("mouseleave", function () {
        enGlissement = false;
        imgModale.classList.remove("grabbing");
    });
})();
