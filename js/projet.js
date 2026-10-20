// ==============================
// projet.js
// Page Projets : filtrage des cartes par contexte et par techno
// ==============================

// La navigation vers la fiche détail ne passe pas par ici : le titre de chaque
// carte est un vrai lien, étendu à toute la carte par le `::after` de
// `.card-lien`. On y gagne l'ouverture dans un nouvel onglet, le clic du milieu,
// la copie de l'adresse et l'aperçu de l'URL au survol, qu'un `div` en
// `role="link"` ne peut pas offrir. Ce fichier ne fait donc que du filtrage.

// Deux axes indépendants, combinés par ET : le contexte de réalisation
// (`data-type` sur la carte) et la technologie (`data-tech`, liste séparée par
// des virgules). Une seule valeur active par axe, `tous` remettant l'axe au
// neutre. Une rangée unique mélangeant les deux laissait croire à un choix
// exclusif : on ne pouvait pas demander « React » **et** « Bachelor ».
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

// Combiner deux axes rend le résultat vide possible, ce qu'un filtre unique ne
// permettait jamais : sans message, la grille se viderait sans explication.
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
        // Rendre la main au clavier : le bouton disparaît après le clic
        const premier = document.querySelector('.filtre-btn[data-axe="contexte"]');
        if (premier) premier.focus();
    });
}
