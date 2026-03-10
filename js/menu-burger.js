// Sélection des éléments
const menuLateral = document.querySelector('.menu-burger');
const iconeMenu = document.querySelector('.icon-menu');
const html = document.documentElement;

// Gestion du clic sur l'icône menu (ouvrir/fermer le menu)
if (iconeMenu && menuLateral) {
    function basculerMenu() {
        const estOuvert = menuLateral.classList.toggle('open');
        html.classList.toggle('overflow-hidden', estOuvert);
        iconeMenu.setAttribute('aria-expanded', String(estOuvert));
    }

    iconeMenu.setAttribute('aria-expanded', 'false');

    iconeMenu.addEventListener('click', basculerMenu);

    // Fermer le menu avec Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('open')) {
            basculerMenu();
            iconeMenu.focus();
        }
    });
}
