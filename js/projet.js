// Navigation vers les détails du projet
document.querySelectorAll('.card').forEach(card => {
    function naviguer() {
        const projetId = card.getAttribute('data-id');
        window.location.href = `projet-details.html?id=${projetId}`;
    }

    card.addEventListener('click', naviguer);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            naviguer();
        }
    });
});

// Filtrage des projets
const filtreBtns = document.querySelectorAll('.filtre-btn');
const cards = document.querySelectorAll('.card');

filtreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Mettre à jour le bouton actif
        filtreBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filtre = btn.getAttribute('data-filtre');

        cards.forEach(card => {
            const type = card.getAttribute('data-type');
            const techs = card.getAttribute('data-tech');

            let visible;

            if (filtre === 'tous') {
                visible = true;
            } else if (filtre === 'bts' || filtre === 'stage') {
                visible = type === filtre;
            } else {
                visible = techs.split(',').includes(filtre);
            }

            if (visible) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
