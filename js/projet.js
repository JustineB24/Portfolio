// ==============================
// projet.js — Cartes projet : navigation vers la page détail
// ==============================

// Navigation vers les détails du projet
document.querySelectorAll('.card').forEach(carte => {
    carte.setAttribute('tabindex', '0');
    carte.setAttribute('role', 'link');

    function naviguer() {
        const projetId = carte.getAttribute('data-id');
        window.location.href = `projet-details.html?id=${projetId}`;
    }

    carte.addEventListener('click', naviguer);
    carte.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            naviguer();
        }
    });
});

// Filtrage des projets
const filtreBtns = document.querySelectorAll('.filtre-btn');
const cartes = document.querySelectorAll('.card');

filtreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Mettre à jour le bouton actif
        filtreBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filtre = btn.getAttribute('data-filtre');

        cartes.forEach(carte => {
            const type = carte.getAttribute('data-type');
            const techs = carte.getAttribute('data-tech');

            let visible;

            if (filtre === 'tous') {
                visible = true;
            } else if (filtre === 'bts' || filtre === 'stage' || filtre === 'bachelor' || filtre === 'entreprise') {
                visible = type === filtre;
            } else {
                visible = techs ? techs.split(',').includes(filtre) : false;
            }

            if (visible) {
                carte.classList.remove('hidden');
            } else {
                carte.classList.add('hidden');
            }
        });
    });
});
