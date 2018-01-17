const holes=document.querySelectorAll('.hole'),
      moles=document.querySelectorAll('.mole'),
      scoreBoard=document.querySelector('.score');
let lastHole,timeUp=false,score=0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function randomHole(holes){
    const ind = getRandom(0,holes.length);
    const hole = holes[ind];
    if(hole==lastHole){
        return randomHole(holes);
    }
    lastHole=hole;
    return hole;
}

function peep(){
    const time = 1000;
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp)peep();
    },time);
}

function bonk(e){
    if(!e.isTrusted)return;
    score++;
    this.parentNode.classList.remove('.up');
    scoreBoard.textContent = score;
}
peep();
moles.forEach(mole => mole.addEventListener('click',bonk));
      