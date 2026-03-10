/* global pdfjsLib */
const url = '../tableau_de_synthese_blin_justine.pdf';

if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.getDocument(url).promise.then(pdf => {
        return pdf.getPage(1);
    }).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({scale});

        const canvas = document.getElementById('pdfViewer');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {canvasContext: context, viewport: viewport};
        page.render(renderContext);
    }).catch(err => {
        console.error('Erreur lors du chargement du PDF :', err);
    });
}
