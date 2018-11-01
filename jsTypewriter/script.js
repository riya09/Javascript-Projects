class TypeWritingEffect {
    constructor(txtContainer, words, interval = 3000) {
        this.txtContainer = txtContainer;
        this.words = words;
        this.interval = parseInt(interval);
        this.txt = '';
        this.wordIndex = 0;
        this.wordRemove = false;
        this.type();
    }
    type() {
        const currInd = this.wordIndex % this.words.length,
            fulltxt = this.words[currInd];
        let speed = 300;
        if (this.wordRemove) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtContainer.innerHTML = `<span class="txt">${this.txt}</span>`;
        if (!this.wordRemove && this.txt === fulltxt) {
            this.wordRemove = true;
            speed = this.interval;
        } else if (this.wordRemove && this.txt === '') {
            this.wordIndex++;
            this.wordRemove = false;
        }
        console.log(this.txt);
        setTimeout(() => this.type(), speed);
    }
}
//call function when page has been loaded
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtContainer = document.querySelector('.txt-container'),
        words = JSON.parse(txtContainer.getAttribute('data-words')),
        interval = txtContainer.getAttribute('data-wait');
    new TypeWritingEffect(txtContainer, words, interval);
}
