class TexteRotatif {
    constructor(el, aRotationner, periode) {
        this.aRotationner = aRotationner;
        this.el = el;
        this.numBoucle = 0;
        this.periode = parseInt(periode, 10) || 2000;
        this.txt = '';
        this.enSuppression = false;
        this.enveloppe = document.createElement('span');
        this.enveloppe.className = 'wrap';
        this.el.textContent = '';
        this.el.appendChild(this.enveloppe);
        this.tick();
    }

    tick() {
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

        setTimeout(() => {
            if (document.hidden) {
                document.addEventListener('visibilitychange', () => this.tick(), {once: true});
            } else {
                this.tick();
            }
        }, delta);
    }
}

window.addEventListener('load', function () {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let el of elements) {
        let aRotationner = el.getAttribute('data-rotate');
        let periode = el.getAttribute('data-period');
        if (aRotationner) {
            try {
                new TexteRotatif(el, JSON.parse(aRotationner), periode);
            } catch (e) {
                console.error('Erreur parsing data-rotate :', e);
            }
        }
    }
});
