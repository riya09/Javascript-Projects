window.addEventListener('scroll',function(){
  let scrolly =  document.documentElement.scrollTop;//y-coordinate of the scroll position
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;/*amount the document can be scrolled,(scrollHeight is the height of total html document and clientHeight is the height of viewport)*/

  let progress = (scrolly/height)*100;
  document.querySelector('.scroll-line').style.width=progress+'%';
})
