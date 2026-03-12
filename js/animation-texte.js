class TexteRotatif {
    constructor(el, aRotationner, periode, reducedMotion) {
        this.aRotationner = aRotationner;
        this.el = el;
        this.numBoucle = 0;
        this.periode = parseInt(periode, 10) || 2000;
        this.txt = '';
        this.enSuppression = false;
        this.tickEnCours = false;
        this.enveloppe = document.createElement('span');
        this.enveloppe.className = 'wrap';
        this.enveloppe.setAttribute('aria-hidden', 'true');
        this.el.textContent = '';
        this.el.appendChild(this.enveloppe);

        // Texte complet accessible aux lecteurs d'écran
        const srTexte = document.createElement('span');
        srTexte.className = 'sr-only';
        srTexte.textContent = this.aRotationner.join(', ');
        this.el.appendChild(srTexte);

        // Si reduced-motion, afficher le premier texte sans animation
        if (reducedMotion) {
            this.enveloppe.textContent = this.aRotationner[0];
            return;
        }

        this.tick();
    }

    tick() {
        // Empêcher les appels multiples simultanés
        if (this.tickEnCours) return;
        this.tickEnCours = true;

        let i = this.numBoucle % this.aRotationner.length;
        let texteComplet = this.aRotationner[i];

        this.txt = this.enSuppression ? texteComplet.substring(0, this.txt.length - 1) : texteComplet.substring(0, this.txt.length + 1);
        this.enveloppe.textContent = this.txt;

        let delta = this.enSuppression ? 75 : 150;

        if (!this.enSuppression && this.txt === texteComplet) {
            delta = this.periode;
            this.enSuppression = true;
        } else if (this.enSuppression && this.txt === '') {
            this.enSuppression = false;
            this.numBoucle++;
            delta = 500;
        }

        const self = this;
        setTimeout(function () {
            self.tickEnCours = false;
            if (document.hidden) {
                document.addEventListener('visibilitychange', function () { self.tick(); }, {once: true});
            } else {
                self.tick();
            }
        }, delta);
    }
}

window.addEventListener('load', function () {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let elements = document.getElementsByClassName('txt-rotate');
    for (let el of elements) {
        let aRotationner = el.getAttribute('data-rotate');
        let periode = el.getAttribute('data-period');
        if (aRotationner) {
            try {
                new TexteRotatif(el, JSON.parse(aRotationner), periode, reducedMotion);
            } catch (e) {
                console.error('Erreur parsing data-rotate :', e);
            }
        }
    }
});
