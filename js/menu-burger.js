// Sélection des éléments
const sideMenu = document.querySelector('.menu-burger');
const iconMenu = document.querySelector('.icon-menu');
const html = document.documentElement;

// Gestion du clic sur l'icône menu (ouvrir/fermer le menu)
if (iconMenu && sideMenu) {
    iconMenu.addEventListener('click', function () {
        sideMenu.classList.toggle('open');
        html.style.overflow = sideMenu.classList.contains('open') ? 'hidden' : '';
    });
}
