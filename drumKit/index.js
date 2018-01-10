var pressed={
    49:false,
    50:false,
    51:false,
    52:false,
    53:false,
    54:false,
    55:false,
    56:false,
    57:false,
}
function playSound(e){
    //get the data-key attribute which is same as the keycode of the key defined
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;//return if other keys are pressed
    if(!pressed[key.dataset.key]){//keydown fired only once
        audio.currentTime=0;
        audio.play();
        pressed[key.dataset.key]=true;
        key.classList.add('playing');//show transform effect
    }
}
//transition is removed to change back the style
function removeTransition(e){
    if(e.propertyName!=='transform')return;
    this.classList.remove('playing');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));//check transition for each key pressed
window.addEventListener('keydown',playSound);//onkeydown playsound once
window.addEventListener('keyup',function(e){
    pressed[e.keyCode]=false;
    //console.log(pressed[this.dataset.key]);
});
//click events for each key
keys.forEach(k => k.addEventListener('click',function(){
    var g=this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${g}"]`);
    console.log(audio);
    audio.currentTime=0;
    audio.play();
    this.classList.add('playing');
}));
