let images = document.querySelectorAll('.col img'),
    content = document.querySelector('.content img'),
    modal = document.querySelector('.modal');
    

images.forEach(k => k.addEventListener('click',function(){
    content.src=this.src;
    modal.classList.add('show-modal');
}))
