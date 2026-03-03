class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = this.isDeleting ? 75 : 150;

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

window.onload = function () {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let el of elements) {
        let toRotate = el.getAttribute('data-rotate');
        let period = el.getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(el, JSON.parse(toRotate), period);
        }
    }
};