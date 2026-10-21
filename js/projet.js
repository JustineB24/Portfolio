// ==============================
// projet.js
// Page Projets : filtrage des cartes par contexte et par techno
// ==============================

// Pas de navigation ici : le titre de chaque carte est un vrai lien étendu par `::after`,
// plutôt qu'un div role=link, pour garder le clic du milieu et le nouvel onglet.

// Deux axes combinés par ET : contexte (`data-type`) et techno (`data-tech`).
// Une valeur active par axe, `tous` remet l'axe au neutre.
const filtreBtns = document.querySelectorAll('.filtre-btn');
const cartes = document.querySelectorAll('.card');
const messageVide = document.getElementById('filtre-vide');
const btnReset = document.getElementById('filtre-reset');

// Valeur active par axe, et le libellé lu sur le bouton pour le message d'échec
const etat = {
    contexte: {valeur: 'tous', libelle: ''},
    techno: {valeur: 'tous', libelle: ''}
};

function appliquerFiltres() {
    let visibles = 0;

    cartes.forEach(carte => {
        const type = carte.getAttribute('data-type');
        const techs = carte.getAttribute('data-tech');

        const okContexte = etat.contexte.valeur === 'tous' || type === etat.contexte.valeur;
        const okTechno = etat.techno.valeur === 'tous'
            || (techs ? techs.split(',').includes(etat.techno.valeur) : false);

        if (okContexte && okTechno) {
            carte.classList.remove('hidden');
            visibles++;
        } else {
            carte.classList.add('hidden');
        }
    });

    majMessage(visibles);
}

// Avec deux axes, un résultat vide devient possible, il faut l'expliquer
function majMessage(visibles) {
    if (!messageVide) return;

    if (visibles > 0) {
        messageVide.textContent = '';
        if (btnReset) btnReset.hidden = etat.contexte.valeur === 'tous' && etat.techno.valeur === 'tous';
        return;
    }

    const criteres = [etat.contexte.libelle, etat.techno.libelle].filter(Boolean);
    messageVide.textContent = criteres.length === 2
        ? `Aucun projet ne combine « ${criteres[0]} » et « ${criteres[1]} ».`
        : `Aucun projet en « ${criteres[0]} ».`;
    if (btnReset) btnReset.hidden = false;
}

filtreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const axe = btn.getAttribute('data-axe');
        if (!etat[axe]) return;

        // L'état actif ne se déplace que dans l'axe du bouton cliqué
        document.querySelectorAll(`.filtre-btn[data-axe="${axe}"]`).forEach(b => {
            const actif = b === btn;
            b.classList.toggle('active', actif);
            b.setAttribute('aria-pressed', actif ? 'true' : 'false');
        });

        const filtre = btn.getAttribute('data-filtre');
        etat[axe] = {
            valeur: filtre,
            libelle: filtre === 'tous' ? '' : btn.textContent.trim()
        };

        appliquerFiltres();
    });
});

if (btnReset) {
    btnReset.addEventListener('click', () => {
        document.querySelectorAll('.filtre-btn[data-filtre="tous"]').forEach(b => b.click());
        // Le bouton disparaît après le clic, le focus doit aller ailleurs
        const premier = document.querySelector('.filtre-btn[data-axe="contexte"]');
        if (premier) premier.focus();
    });
}
