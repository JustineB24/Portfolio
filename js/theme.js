// Sélectionne les éléments nécessaires
const toggleSwitch = document.querySelector('.theme-switch__checkbox');
const body = document.body;
const darkModeClass = 'dark-theme';

if (toggleSwitch) {
    // Fonction pour activer/désactiver le mode sombre
    function toggleDarkMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.add(darkModeClass);
        } else {
            body.classList.remove(darkModeClass);
        }
    }

    // Sauvegarde le mode actuel dans localStorage
    function saveDarkModePreference(isDarkMode) {
        try {
            localStorage.setItem('dark-mode', isDarkMode);
        } catch (e) { /* Navigation privée ou stockage plein */ }
    }

    // Applique le thème lors du chargement de la page
    function loadDarkModePreference() {
        let isDarkMode = false;
        try {
            isDarkMode = localStorage.getItem('dark-mode') === 'true';
        } catch (e) { /* Navigation privée */ }
        toggleDarkMode(isDarkMode);
        toggleSwitch.checked = isDarkMode;
    }

    // Gestionnaire d'événement pour le basculement
    toggleSwitch.addEventListener('change', (event) => {
        const isDarkMode = event.target.checked;
        toggleDarkMode(isDarkMode);
        saveDarkModePreference(isDarkMode);
    });

    // Charge les préférences au démarrage
    loadDarkModePreference();
}
