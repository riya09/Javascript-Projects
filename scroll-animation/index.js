const text_hidden = document.querySelectorAll('.hidden');
let windowH = window.innerHeight;
window.addEventListener('scroll',function(){
  for(let i=0;i<text_hidden.length;i++){
    text_hiddenPos = text_hidden[i].getBoundingClientRect().top;
    console.log(text_hiddenPos);
    if(text_hiddenPos<windowH){
      text_hidden[i].className = text_hidden[i].className.replace("hidden","show");
    }
  }
})
