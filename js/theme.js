// ==============================
// theme.js
// Thème sombre/clair : toggle + persistance localStorage
// ==============================

const boutonBascule = document.querySelector('.theme-switch__checkbox');
const body = document.body;
const classeModeObscur = 'dark-theme';

if (boutonBascule) {
    function basculerModeSombre(estModeSombre) {
        if (estModeSombre) {
            document.documentElement.classList.add(classeModeObscur);
            body.classList.add(classeModeObscur);
        } else {
            document.documentElement.classList.remove(classeModeObscur);
            body.classList.remove(classeModeObscur);
        }
        // Couleur de la barre du navigateur sur mobile
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = estModeSombre ? '#1a0000' : '#a90000';
        }
    }

    function sauvegarderPreference(estModeSombre) {
        try {
            localStorage.setItem('dark-mode', estModeSombre);
        } catch (e) { /* Navigation privée ou stockage plein */
        }
    }

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

        // Sans choix enregistré, on suit le thème du système
        if (!aPreference && window.matchMedia) {
            estModeSombre = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        basculerModeSombre(estModeSombre);
        boutonBascule.checked = estModeSombre;
    }

    boutonBascule.addEventListener('change', (event) => {
        const estModeSombre = event.target.checked;
        basculerModeSombre(estModeSombre);
        sauvegarderPreference(estModeSombre);
    });

    chargerPreference();
}