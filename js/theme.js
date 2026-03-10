// Sélectionne les éléments nécessaires
const toggleSwitch = document.querySelector('.theme-switch__checkbox');
const body = document.body;
const darkModeClass = 'dark-theme';

if (toggleSwitch) {
    // Fonction pour activer/désactiver le mode sombre
    function toggleDarkMode(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.classList.add(darkModeClass);
            body.classList.add(darkModeClass);
        } else {
            document.documentElement.classList.remove(darkModeClass);
            body.classList.remove(darkModeClass);
        }
        // Meta theme-color dynamique selon le thème
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = isDarkMode ? '#1a0000' : '#a90000';
        }
    }

    // Sauvegarde le mode actuel dans localStorage
    function saveDarkModePreference(isDarkMode) {
        try {
            localStorage.setItem('dark-mode', isDarkMode);
        } catch (e) { /* Navigation privée ou stockage plein */
        }
    }

    // Applique le thème lors du chargement de la page
    function loadDarkModePreference() {
        let isDarkMode = false;
        let hasPreference = false;
        try {
            const stored = localStorage.getItem('dark-mode');
            if (stored !== null) {
                hasPreference = true;
                isDarkMode = stored === 'true';
            }
        } catch (e) { /* Navigation privée */
        }

        // Détection automatique du thème système si aucune préférence sauvegardée
        if (!hasPreference && window.matchMedia) {
            isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

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
