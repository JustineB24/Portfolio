(function () {
    // Skeleton loading pour l'iframe PDF
    const iframePdf = document.querySelector('.pdf-skeleton iframe');
    if (iframePdf) {
        iframePdf.addEventListener('load', function () {
            this.parentElement.classList.add('loaded');
        });
    }
})();
