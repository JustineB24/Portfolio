// Sélection des éléments
const menuLateral = document.querySelector('.menu-burger');
const iconeMenu = document.querySelector('.icon-menu');
const html = document.documentElement;

// Gestion du clic sur l'icône menu (ouvrir/fermer le menu)
if (iconeMenu && menuLateral) {
    iconeMenu.addEventListener('click', function () {
        menuLateral.classList.toggle('open');
        html.classList.toggle('overflow-hidden', menuLateral.classList.contains('open'));
    });
}
