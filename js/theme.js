// Sélectionne les éléments nécessaires
const boutonBascule = document.querySelector('.theme-switch__checkbox');
const body = document.body;
const classeModeObscur = 'dark-theme';

if (boutonBascule) {
    // Fonction pour activer/désactiver le mode sombre
    function basculerModeSombre(estModeSombre) {
        if (estModeSombre) {
            document.documentElement.classList.add(classeModeObscur);
            body.classList.add(classeModeObscur);
        } else {
            document.documentElement.classList.remove(classeModeObscur);
            body.classList.remove(classeModeObscur);
        }
        // Meta theme-color dynamique selon le thème
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = estModeSombre ? '#1a0000' : '#a90000';
        }
    }

    // Sauvegarde le mode actuel dans localStorage
    function sauvegarderPreference(estModeSombre) {
        try {
            localStorage.setItem('dark-mode', estModeSombre);
        } catch (e) { /* Navigation privée ou stockage plein */
        }
    }

    // Applique le thème lors du chargement de la page
    function chargerPreference() {
        let estModeSombre = false;
        let aPreference = false;
        try {
            const stocke = localStorage.getItem('dark-mode');
            if (stocke !== null) {
                aPreference = true;
                estModeSombre = stocke === 'true';
            }
        } catch (e) { /* Navigation privée */
        }

        // Détection automatique du thème système si aucune préférence sauvegardée
        if (!aPreference && window.matchMedia) {
            estModeSombre = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        basculerModeSombre(estModeSombre);
        boutonBascule.checked = estModeSombre;
    }

    // Gestionnaire d'événement pour le basculement
    boutonBascule.addEventListener('change', (event) => {
        const estModeSombre = event.target.checked;
        basculerModeSombre(estModeSombre);
        sauvegarderPreference(estModeSombre);
    });

    // Charge les préférences au démarrage
    chargerPreference();
}