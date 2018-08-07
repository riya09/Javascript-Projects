let word = document.querySelector(".word"),
    ptimer = document.querySelector(".timer"),
    startGame = document.querySelectorAll(".button"),
    intro = document.querySelector(".intro"),
    mainGame = document.querySelector(".main-game"),
    endGame = document.querySelector(".end"),
    gameScore = document.querySelectorAll('.score'),
    getInput = document.querySelector(".input"),
    currIndex = 0, //initial array index
    timer,
    score = 0,
    timenow = 5;

getWord = w => (word.innerHTML = w); //shows a word from array in paragraph

//check if the input is correct
getInput.addEventListener("input", function () {
    if (getInput.value == words[currIndex]) {
        if (currIndex >= words.length - 1) currIndex = 0;
        else currIndex++; //move to next word if correct
        getInput.value = ""; //clear the placeholder
        getWord(words[currIndex]);
        timenow = 5;
        score += 5;
        gameScore[0].innerHTML = 'Score:' + score;
    }
});

//reset score,time,timer
resetNumber = () => {
    score = 0;
    timenow = 5;
    getWord(words[currIndex]);
    gameScore[0].innerHTML = 'Score: ' + score;
    getInput.value = "";
    setTimer();
    timer = setInterval(setTimer, 990);
}
//manage timer function
setTimer = () => {
    ptimer.innerHTML = timenow;
    if (timenow == 0) {
        clearInterval(timer);
        mainGame.classList.add('hidden'); //hide main stage when game over
        endGame.classList.remove('hidden');
        gameScore[1].innerHTML = 'You scored ' + score;
        endGame.classList.add('visible');
    }
    timenow--;
}

//start or reset game
for (let i = 0; i < startGame.length; i++) {
    startGame[i].addEventListener("click", function () {
        shuffle(words);
        resetNumber();
        intro.classList.add("hidden");
        mainGame.classList.remove("hidden");
        endGame.classList.add('hidden');
        getInput.focus();
    });
}

//shuffle array
shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i); //creates a random number between 0 and i
        let tmp = a[j]; //temporary variable for swapping two elements
        a[j] = a[i];
        a[i] = tmp;
    }
}
let words = [
    'winebibber','usufruct','unparagoned','accoutrements', 'accessories','acumen', 'quickness','anomalistic', 'deviation', 'departure','phenomenal','auspicious', 'favorable', 
    'prosperous','bellwether','trendsetter','callipygian',
    'circumlocution','evasion','concupiscent','conviviality',
    'ebullient', 'zestfully', 'enthusiastic',
    'equanimity','excogitate','gasconading','idiosyncratic', 
    'luminescent','magnanimous','osculator','parsimonious',
    'penultimate','perfidiousness','discernment','remunerative' ,'saxicolous'
]