window.addEventListener('DOMContentLoaded', ()=>{
  const decorArrow = document.querySelectorAll('.benefits-item__decor-two');

  decorArrow.forEach(item => {
    const pos = window.pageYOffset +  item.getBoundingClientRect().top;
    window.addEventListener('scroll', function(){
    if(window.pageYOffset  + 300 > pos){
      item.classList.add('anim-decor');
    }
  })
  })
  
})