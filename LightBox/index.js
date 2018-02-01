let images = document.querySelectorAll('.col img'),
    content = document.querySelector('.content img'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    indexTmp;
    

/*images.forEach(k => k.addEventListener('click',function(){
    content.src=this.src;
    modal.classList.add('show-modal');
}))*/
Array.from(images).forEach(function(elem,index,arr){
    elem.addEventListener('click',function(){
        content.src=elem.src;
        modal.classList.add('show-modal');
        indexTmp=index;
        console.log(indexTmp);
    })
})

close.addEventListener('click',function(){
    modal.classList.remove('show-modal');
})

next.addEventListener('click',function(){
    if(indexTmp>=images.length-1){
        indexTmp=0;
    }
    else{
        indexTmp++;
    }
    content.src = images[indexTmp].src;
})

prev.addEventListener('click',function(){
    if(indexTmp<=0){
        indexTmp=images.length-1;
    }
    else{
        indexTmp--;
    }
    content.src = images[indexTmp].src;
})
