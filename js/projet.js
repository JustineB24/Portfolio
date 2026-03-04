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
