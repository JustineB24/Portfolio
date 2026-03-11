// Sélection des éléments
const menuLateral = document.querySelector('.menu-burger');
const iconeMenu = document.querySelector('.icon-menu');
const caseMenu = document.getElementById('check-icon');
const html = document.documentElement;

// Gestion du clic sur l'icône menu (ouvrir/fermer le menu)
if (iconeMenu && menuLateral && caseMenu) {
    function basculerMenu() {
        const estOuvert = menuLateral.classList.toggle('open');
        html.classList.toggle('overflow-hidden', estOuvert);
        iconeMenu.setAttribute('aria-expanded', String(estOuvert));
        // Synchroniser le checkbox pour l'animation des barres
        caseMenu.checked = estOuvert;
    }

    iconeMenu.setAttribute('aria-expanded', 'false');

    iconeMenu.addEventListener('click', function (e) {
        e.preventDefault();
        basculerMenu();
    });

    // Fermer le menu avec Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('open')) {
            basculerMenu();
            iconeMenu.focus();
        }
    });
}
