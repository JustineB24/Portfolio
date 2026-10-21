// ==============================
// certifications.js
// Galerie de certifications : modale + navigation clavier
// ==============================

(function () {
    const images = document.querySelectorAll(".gallery .certif");
    let indexActuel = 0;
    let dernierFocusAvantModale = null;

    images.forEach(function (img) {
        const nom = img.alt || 'cette certification';
        img.setAttribute('aria-label', 'Ouvrir ' + nom);
    });

    const modal = document.getElementById("zoom-modal");
    const imgModale = document.getElementById("zoom-modal-img");
    const dotsContainer = document.getElementById("zoom-dots");
    const counter = document.getElementById("zoom-counter");

    // Galerie vide ou modale absente : rien à initialiser
    if (!images.length || !modal || !imgModale || !dotsContainer || !counter) {
        return;
    }

    // Points de navigation
    images.forEach(function (_, i) {
        const dot = document.createElement("button");
        dot.classList.add("carrousel-dot");
        dot.setAttribute("aria-label", "Image " + (i + 1));
        dot.addEventListener("click", function () {
            allerAImage(i);
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".carrousel-dot");

    // Le <picture> parent fournit la version WebP, sinon on garde le src
    function obtenirSrcWebp(img) {
        const picture = img.closest("picture");
        if (picture) {
            const source = picture.querySelector('source[type="image/webp"]');
            if (source) return source.srcset;
        }
        return img.src;
    }

    function mettreAJourIndicateurs() {
        dots.forEach(function (dot, i) {
            dot.classList.toggle("active", i === indexActuel);
        });
        counter.textContent = (indexActuel + 1) + " / " + images.length;
    }

    function majAriaLabelModale() {
        const nom = images[indexActuel].alt;
        modal.setAttribute("aria-label", nom ? "Image agrandie : " + nom : "Image agrandie");
    }

    function allerAImage(index) {
        indexActuel = (index + images.length) % images.length;
        imgModale.src = obtenirSrcWebp(images[indexActuel]);
        imgModale.alt = images[indexActuel].alt;
        majAriaLabelModale();
        mettreAJourIndicateurs();
    }

    function ouvrirModale(img) {
        dernierFocusAvantModale = document.activeElement;
        indexActuel = Array.from(images).indexOf(img);
        imgModale.src = obtenirSrcWebp(img);
        imgModale.alt = img.alt;
        majAriaLabelModale();
        modal.classList.add("visible");
        document.documentElement.classList.add("overflow-hidden");
        mettreAJourIndicateurs();

        const boutonFermer = document.getElementById("zoom-close");
        if (boutonFermer) boutonFermer.focus();
    }

    function fermerModale() {
        modal.classList.remove("visible");
        document.documentElement.classList.remove("overflow-hidden");
        if (dernierFocusAvantModale) {
            dernierFocusAvantModale.focus();
        }
    }

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

    const boutonSuivant = document.getElementById("zoom-next");
    const boutonPrecedent = document.getElementById("zoom-prev");
    if (boutonSuivant) {
        boutonSuivant.addEventListener("click", function () {
            allerAImage(indexActuel + 1);
        });
    }
    if (boutonPrecedent) {
        boutonPrecedent.addEventListener("click", function () {
            allerAImage(indexActuel - 1);
        });
    }

    const btnFermer = document.getElementById("zoom-close");
    if (btnFermer) btnFermer.addEventListener("click", fermerModale);
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            fermerModale();
        }
    });

    // Clavier : flèches, Échap, et Tab qui reste piégé dans la modale
    document.addEventListener("keydown", function (e) {
        if (!modal.classList.contains("visible")) return;

        if (e.key === "Escape") {
            fermerModale();
        } else if (e.key === "ArrowRight") {
            allerAImage(indexActuel + 1);
        } else if (e.key === "ArrowLeft") {
            allerAImage(indexActuel - 1);
        } else if (e.key === "Tab") {
            const focusables = modal.querySelectorAll('button');
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
})();
