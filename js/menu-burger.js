// ==============================
// menu-burger.js — Menu burger mobile : ouverture/fermeture + accessibilité clavier
// ==============================

// Sélection des éléments
const menuLateral = document.querySelector('.menu-burger');
const caseMenu = document.getElementById('check-icon');
const html = document.documentElement;

// La checkbox #check-icon est la source de vérité de l'état du menu.
// Le clic souris sur le label coche déjà la checkbox, et au clavier le focus
// va sur la checkbox : un seul handler `change` couvre donc souris ET clavier.
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

    // État initial
    caseMenu.setAttribute('aria-expanded', 'false');

    // Source de vérité : l'événement `change` de la checkbox (souris + clavier)
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

        // Fermer avec Échap
        if (e.key === 'Escape') {
            fermerMenu();
            return;
        }

        // Piéger Tab / Shift+Tab dans le panneau ouvert
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
