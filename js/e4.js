/* global pdfjsLib */
const urlPdf = '../tableau_de_synthese_blin_justine.pdf';

if (typeof pdfjsLib !== 'undefined') {
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
        page.render(contexteRendu);
    }).catch(err => {
        console.error('Erreur lors du chargement du PDF :', err);
    });
}
