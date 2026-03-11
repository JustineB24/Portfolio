(function () {
    // Scroll reveal des éléments
    var elementsReveal = document.querySelectorAll('.scroll-reveal');
    if (elementsReveal.length) {
        var observateur = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observateur.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1, rootMargin: '0px 0px -40px 0px'});

        elementsReveal.forEach(function (el) {
            observateur.observe(el);
        });
    }

    // Formulaire de contact
    var formulaireContact = document.getElementById('contact-form');
    if (!formulaireContact) return;

    formulaireContact.addEventListener('submit', function (e) {
        e.preventDefault();

        var nom = document.getElementById('nom').value.trim();
        var email = document.getElementById('email').value.trim();
        var sujet = document.getElementById('sujet').value.trim();
        var message = document.getElementById('message').value.trim();

        // Suppression de l'ancien message d'erreur s'il existe
        var ancienneErreur = document.querySelector('.erreur-formulaire');
        if (ancienneErreur) ancienneErreur.remove();

        // Validation des champs
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var erreurs = [];

        if (!nom) erreurs.push('Le nom est requis.');
        if (!email) {
            erreurs.push('L\'email est requis.');
        } else if (!regexEmail.test(email)) {
            erreurs.push('L\'email n\'est pas valide.');
        }
        if (!sujet) erreurs.push('Le sujet est requis.');
        if (!message) erreurs.push('Le message est requis.');

        if (erreurs.length > 0) {
            var divErreur = document.createElement('div');
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
