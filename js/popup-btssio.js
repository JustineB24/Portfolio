// Gestion de la popup BTS SIO
(function () {
    const timelineItems = document.querySelectorAll('.timeline-item[data-popup]');
    const btssioPopup = document.getElementById('btssioPopup');
    if (!btssioPopup) return;

    const popupClose = btssioPopup.querySelector('.popup-close');
    let dernierFocusAvantPopup = null;

    function ouvrirPopup() {
        dernierFocusAvantPopup = document.activeElement;
        btssioPopup.classList.add('active');
        popupClose.focus();
    }

    function fermerPopup() {
        btssioPopup.classList.remove('active');
        if (dernierFocusAvantPopup) {
            dernierFocusAvantPopup.focus();
        }
    }

    timelineItems.forEach(function (item) {
        item.style.cursor = 'pointer';

        function ouvrir() {
            const popupType = item.getAttribute('data-popup');
            if (popupType === 'btssio') {
                ouvrirPopup();
            }
        }

        item.addEventListener('click', function (e) {
            e.preventDefault();
            ouvrir();
        });
        item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                ouvrir();
            }
        });
    });

    // Fermer la popup au clic sur le bouton fermeture
    popupClose.addEventListener('click', fermerPopup);

    // Fermer la popup en cliquant en dehors
    btssioPopup.addEventListener('click', function (e) {
        if (e.target === btssioPopup) {
            fermerPopup();
        }
    });

    // Fermer la popup avec Échap + piège de focus
    document.addEventListener('keydown', function (e) {
        if (!btssioPopup.classList.contains('active')) return;

        if (e.key === 'Escape') {
            fermerPopup();
            return;
        }

        if (e.key === 'Tab') {
            const focusables = btssioPopup.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
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
