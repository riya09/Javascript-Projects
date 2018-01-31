let images = document.querySelectorAll('.col img'),
    content = document.querySelector('.content img'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');
    

images.forEach(k => k.addEventListener('click',function(){
    content.src=this.src;
    modal.classList.add('show-modal');
}))

close.addEventListener('click',function(){
    modal.classList.remove('show-modal');
})
