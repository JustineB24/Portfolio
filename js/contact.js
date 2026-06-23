// ==============================
// contact.js — Formulaire de contact : validation + ouverture mailto
// ==============================

(function () {
    // Formulaire de contact
    const formulaireContact = document.getElementById('contact-form');
    if (!formulaireContact) return;

    formulaireContact.addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const sujet = document.getElementById('sujet').value.trim();
        const message = document.getElementById('message').value.trim();

        // Suppression de l'ancien message d'erreur s'il existe
        const ancienneErreur = document.querySelector('.erreur-formulaire');
        if (ancienneErreur) ancienneErreur.remove();

        // Validation des champs
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const erreurs = [];

        if (!nom) erreurs.push('Le nom est requis.');
        if (!email) {
            erreurs.push('L\'email est requis.');
        } else if (!regexEmail.test(email)) {
            erreurs.push('L\'email n\'est pas valide.');
        }
        if (!sujet) erreurs.push('Le sujet est requis.');
        if (!message) erreurs.push('Le message est requis.');

        if (erreurs.length > 0) {
            const divErreur = document.createElement('div');
            divErreur.classList.add('erreur-formulaire');
            divErreur.setAttribute('role', 'alert');
            divErreur.textContent = erreurs.join(' ');
            formulaireContact.insertBefore(divErreur, formulaireContact.firstChild);
            return;
        }

        window.location.href = 'mailto:blin.justine.sio@gmail.com'
            + '?subject=' + encodeURIComponent(sujet)
            + '&body=' + encodeURIComponent('De : ' + nom + ' (' + email + ')\n\n' + message);
    });
})();
