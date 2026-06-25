// ==============================
// contact.js — Formulaire de contact : validation + ouverture mailto
// ==============================

(function () {
    // Formulaire de contact
    const formulaireContact = document.getElementById('contact-form');
    if (!formulaireContact) return;

    const champs = {
        nom: document.getElementById('nom'),
        email: document.getElementById('email'),
        sujet: document.getElementById('sujet'),
        message: document.getElementById('message')
    };

    formulaireContact.addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = champs.nom.value.trim();
        const email = champs.email.value.trim();
        const sujet = champs.sujet.value.trim();
        const message = champs.message.value.trim();

        // Réinitialise l'état d'erreur (message + attributs ARIA des champs)
        const ancienneErreur = document.querySelector('.erreur-formulaire');
        if (ancienneErreur) ancienneErreur.remove();
        Object.values(champs).forEach(function (c) {
            c.removeAttribute('aria-invalid');
            c.removeAttribute('aria-describedby');
        });

        // Validation des champs
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const erreurs = [];
        const champsInvalides = [];

        if (!nom) {
            erreurs.push('Le nom est requis.');
            champsInvalides.push(champs.nom);
        }
        if (!email) {
            erreurs.push('L\'email est requis.');
            champsInvalides.push(champs.email);
        } else if (!regexEmail.test(email)) {
            erreurs.push('L\'email n\'est pas valide.');
            champsInvalides.push(champs.email);
        }
        if (!sujet) {
            erreurs.push('Le sujet est requis.');
            champsInvalides.push(champs.sujet);
        }
        if (!message) {
            erreurs.push('Le message est requis.');
            champsInvalides.push(champs.message);
        }

        if (erreurs.length > 0) {
            const divErreur = document.createElement('div');
            divErreur.classList.add('erreur-formulaire');
            divErreur.id = 'erreur-formulaire';
            divErreur.setAttribute('role', 'alert');
            divErreur.textContent = erreurs.join(' ');
            formulaireContact.insertBefore(divErreur, formulaireContact.firstChild);

            // Marque les champs fautifs, les relie au message et focus le premier
            champsInvalides.forEach(function (c) {
                c.setAttribute('aria-invalid', 'true');
                c.setAttribute('aria-describedby', 'erreur-formulaire');
            });
            champsInvalides[0].focus();
            return;
        }

        window.location.href = 'mailto:blin.justine.sio@gmail.com'
            + '?subject=' + encodeURIComponent(sujet)
            + '&body=' + encodeURIComponent('De : ' + nom + ' (' + email + ')\n\n' + message);
    });
})();
