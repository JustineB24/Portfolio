// ==============================
// animation-texte.js — Animation du texte tournant (page d'accueil)
// ==============================

class TexteRotatif {
    constructor(el, aRotationner, periode, reducedMotion) {
        this.aRotationner = aRotationner;
        this.el = el;
        this.numBoucle = 0;
        this.periode = parseInt(periode, 10) || 2000;
        this.txt = '';
        this.enSuppression = false;
        this.tickEnCours = false;
        this.planifie = false;        // un tick est-il déjà planifié ?
        this.dansViewport = true;     // l'élément est-il visible à l'écran ?
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

        this.observerViewport();
        this.tick();
    }

    // Suspend la rotation quand le hero sort du viewport, la reprend au retour.
    // Un seul observer/listener par instance : aucun empilement de listeners.
    observerViewport() {
        if (!('IntersectionObserver' in window)) return;
        const self = this;
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                self.dansViewport = entry.isIntersecting;
                // Reprendre uniquement si on redevient visible et qu'aucun tick
                // n'est déjà planifié (évite les ticks en double).
                if (self.dansViewport && !self.planifie && !document.hidden) {
                    self.tick();
                }
            });
        });
        observer.observe(this.el);
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
        this.planifie = true;
        setTimeout(function () {
            self.tickEnCours = false;
            self.planifie = false;
            if (document.hidden) {
                // Onglet caché : reprendre au retour de visibilité (une seule fois)
                document.addEventListener('visibilitychange', function () {
                    self.tick();
                }, {once: true});
            } else if (!self.dansViewport) {
                // Hero hors viewport : la reprise est gérée par l'IntersectionObserver
                return;
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
