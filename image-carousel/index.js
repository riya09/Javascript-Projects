const image = document.querySelectorAll('.images'),
      prev=document.querySelector('#prev'),
      next=document.querySelector('#next'),
      images = ['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg',
    'images/05.jpg'];
let cnt=0;

//button events

prev.addEventListener('click',function(){
    showImage(cnt-1);
})
next.addEventListener('click',function(){
   showImage(cnt+1);
})
function showImage(n){
  image[cnt].className="images";
  cnt = (n+images.length)%images.length;
  image[cnt].className = "images show";
}
