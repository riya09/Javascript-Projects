const names = document.querySelectorAll('.names');
const input = document.querySelector('#item-search');

input.addEventListener('keyup',function(){
  let search=(input.value).toUpperCase();
  for(let i=0;i<names.length;i++){
    if((names[i].innerHTML).toUpperCase().indexOf(search) > -1){
      names[i].style.display="";
    }
    else{
      names[i].style.display='none';
    }
  }
})
