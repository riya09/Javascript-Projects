const tabs = document.querySelectorAll('.tabs');
const tabContents = document.querySelectorAll('.tab-content')

tabs.forEach((tab,index) => {
  console.log(tabContents[index]);
  tab.addEventListener('click',function(){
      for(let i=0;i<tabs.length;i++){
        tabs[i].className='tabs';
        tabContents[i].className = 'tab-content';
      }
      tabContents[index].classList.add('curr-content');
      tab.classList.add('curr-tab');
  })
})
