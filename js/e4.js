const url = '../Tableau_de_synthèse_blin_justine.pdf';

pdfjsLib.getDocument(url).promise.then(pdf => {
    pdf.getPage(1).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = document.getElementById('pdfViewer');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = { canvasContext: context, viewport: viewport };
        page.render(renderContext);
    });
});
