// Sélection des éléments
const sideMenu = document.querySelector('.menu-burger');
const iconMenu = document.querySelector('.icon-menu');
const html = document.documentElement; // Utilisation de <html> pour appliquer le défilement

// Gestion du clic sur l'icône menu (ouvrir/fermer le menu)
iconMenu.addEventListener('click', function () {
    sideMenu.classList.toggle('open'); // Basculer l'état du menu
    html.style.overflow = sideMenu.classList.contains('open') ? 'hidden' : ''; // Gérer le défilement
});