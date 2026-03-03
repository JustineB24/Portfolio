document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const projetId = card.getAttribute('data-id');
        window.location.href = `projet-details.html?id=${projetId}`;
    });
});