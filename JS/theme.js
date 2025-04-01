// Sélectionne les éléments nécessaires
const toggleSwitch = document.querySelector('.theme-switch__checkbox'); // Le checkbox input
const body = document.body; // Le corps du document
const darkModeClass = 'dark-theme'; // Classe CSS pour le mode sombre

// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
        body.classList.add(darkModeClass); // Active le mode sombre
    } else {
        body.classList.remove(darkModeClass); // Désactive le mode sombre
    }
}

// Sauvegarde le mode actuel dans localStorage
function saveDarkModePreference(isDarkMode) {
    localStorage.setItem('dark-mode', isDarkMode); // Sauvegarde 'true' ou 'false'
}

// Applique le thème lors du chargement de la page
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true'; // Récupère la préférence
    toggleDarkMode(isDarkMode); // Applique le mode
    toggleSwitch.checked = isDarkMode; // Synchronise l'état du checkbox
}

// Gestionnaire d'événement pour le basculement
toggleSwitch.addEventListener('change', (event) => {
    const isDarkMode = event.target.checked; // Vérifie si le checkbox est activé
    toggleDarkMode(isDarkMode); // Applique le mode correspondant
    saveDarkModePreference(isDarkMode); // Sauvegarde la préférence
});

// Charge les préférences au démarrage
loadDarkModePreference();
