class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.wrap = document.createElement('span');
        this.wrap.className = 'wrap';
        this.el.textContent = '';
        this.el.appendChild(this.wrap);
        this.tick();
    }

    tick() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
        this.wrap.textContent = this.txt;

        let delta = this.isDeleting ? 75 : 150;

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
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
        let toRotate = el.getAttribute('data-rotate');
        let period = el.getAttribute('data-period');
        if (toRotate) {
            try {
                new TxtRotate(el, JSON.parse(toRotate), period);
            } catch (e) {
                console.error('Erreur parsing data-rotate :', e);
            }
        }
    }
});