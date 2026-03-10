/* global pdfjsLib */
const urlPdf = '../tableau_de_synthese_blin_justine.pdf';

if (typeof pdfjsLib === 'undefined') {
    const canvas = document.getElementById('pdfViewer');
    if (canvas) {
        const msg = document.createElement('p');
        msg.textContent = 'Impossible de charger le viewer PDF.';
        msg.style.textAlign = 'center';
        canvas.parentNode.replaceChild(msg, canvas);
    }
} else {
    pdfjsLib.getDocument(urlPdf).promise.then(pdf => {
        return pdf.getPage(1);
    }).then(page => {
        const echelle = 1.5;
        const vuePdf = page.getViewport({scale: echelle});

        const canvas = document.getElementById('pdfViewer');
        const contexte = canvas.getContext('2d');
        canvas.width = vuePdf.width;
        canvas.height = vuePdf.height;

        const contexteRendu = {canvasContext: contexte, viewport: vuePdf};
        page.render(contexteRendu).promise.catch(function (err) {
            console.error('Erreur rendu PDF :', err);
        });
    }).catch(err => {
        console.error('Erreur lors du chargement du PDF :', err);
    });
}
