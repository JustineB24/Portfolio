(function () {
    const elements = document.querySelectorAll('.doc-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1, rootMargin: '0px 0px -40px 0px'});

    elements.forEach(function (el) {
        observer.observe(el);
    });

    // Skeleton loading pour l'iframe PDF
    const iframePdf = document.querySelector('.pdf-skeleton iframe');
    if (iframePdf) {
        iframePdf.addEventListener('load', function () {
            this.parentElement.classList.add('loaded');
        });
    }
})();
