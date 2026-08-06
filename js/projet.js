// ==============================
// projet.js — Cartes projet : navigation vers la page détail
// ==============================

// La navigation ne passe plus par JavaScript : le titre de chaque carte est un
// vrai lien, étendu à toute la carte par le `::after` de `.card-lien`. On y gagne
// l'ouverture dans un nouvel onglet, le clic du milieu, la copie de l'adresse et
// l'aperçu de l'URL au survol, qu'un `div` en `role="link"` ne peut pas offrir.

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
            } else if (filtre === 'bts' || filtre === 'stage' || filtre === 'bachelor' || filtre === 'entreprise' || filtre === 'perso') {
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
