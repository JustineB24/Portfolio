document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();

    window.location.href = 'mailto:blin.justine.sio@gmail.com'
        + '?subject=' + encodeURIComponent(sujet)
        + '&body=' + encodeURIComponent('De : ' + nom + ' (' + email + ')\n\n' + message);
});
