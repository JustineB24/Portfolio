// ==============================
// menu-burger.js
// Menu burger mobile : ouverture/fermeture + accessibilité clavier
// ==============================

const menuLateral = document.querySelector('.menu-burger');
const caseMenu = document.getElementById('check-icon');
const html = document.documentElement;

// La checkbox est la source de vérité : le clic sur le label la coche déjà
// et au clavier le focus est sur elle, donc un seul `change` suffit.
if (menuLateral && caseMenu) {
    // Élément à qui rendre le focus à la fermeture
    let dernierFocus = null;

    function liensMenu() {
        return Array.from(menuLateral.querySelectorAll('a[href]'));
    }

    function appliquerEtat(estOuvert) {
        menuLateral.classList.toggle('open', estOuvert);
        html.classList.toggle('overflow-hidden', estOuvert);
        caseMenu.setAttribute('aria-expanded', String(estOuvert));
        caseMenu.setAttribute('aria-label',
            estOuvert ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');

        if (estOuvert) {
            dernierFocus = caseMenu;
            const liens = liensMenu();
            if (liens.length > 0) {
                liens[0].focus();
            }
        } else if (dernierFocus) {
            dernierFocus.focus();
            dernierFocus = null;
        }
    }

    caseMenu.setAttribute('aria-expanded', 'false');

    caseMenu.addEventListener('change', function () {
        appliquerEtat(caseMenu.checked);
    });

    function fermerMenu() {
        if (caseMenu.checked) {
            caseMenu.checked = false;
            appliquerEtat(false);
        }
    }

    document.addEventListener('keydown', function (e) {
        if (!menuLateral.classList.contains('open')) return;

        if (e.key === 'Escape') {
            fermerMenu();
            return;
        }

        // Tab reste piégé dans le panneau ouvert
        if (e.key === 'Tab') {
            const liens = liensMenu();
            if (liens.length === 0) return;
            const premier = liens[0];
            const dernier = liens[liens.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === premier || !menuLateral.contains(document.activeElement)) {
                    e.preventDefault();
                    dernier.focus();
                }
            } else {
                if (document.activeElement === dernier || !menuLateral.contains(document.activeElement)) {
                    e.preventDefault();
                    premier.focus();
                }
            }
        }
    });
}
