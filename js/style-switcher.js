const styleSwithcer = document.querySelector('.style-swithcher-toggler');
styleSwithcer.addEventListener('click', ()=>{
 document.querySelector('.style-switcher').classList.toggle('open');
})
window.addEventListener('scroll', ()=>{
    if( document.querySelector('.style-switcher').classList.toggle('open')){
        document.querySelector('.style-switcher').classList.remove('open'); //
    }
})

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
   
  alternateStyle.forEach((style)=>{
    style.setAttribute('disabled','true');
    if(color===style.getAttribute('title')){
      style.removeAttribute('disabled'); //
    }
  })
}

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', ()=>{
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark'); //
});
window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})