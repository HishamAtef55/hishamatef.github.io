// /////////////////////////////////  typing animation ///////////////
let typed = new Typed(".typing",{
    strings:["","Front End developer","Back End developer","full stack developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/////////////////////////////////   Aside    ///////////////////////////////////////
const nav = document.querySelectorAll(".navlist");
const allSection = document.querySelectorAll('.section');
nav.forEach((el)=>{
   
    el.addEventListener("click",function(){
        // removeBackSection();
        addBackSection(el);
        nav.forEach((el)=>{
           
            el.classList.remove("active")
        });
      this.classList.add("active");
      showSection(this);
      if(window.innerWidth<1200){
        asideSectionTogglebtn();
      }
    });
    
});

function addBackSection(el){
    allSection.forEach((sec)=>{
        if(el.getAttribute('href').split('#')[1]==sec.getAttribute('id')){
            sec.classList.add("back-section");
        }else{
            sec.classList.remove("back-section");
        }
    })

}
function showSection(el) {
    const target  = el.getAttribute('href').split('#')[1];
  
    
    allSection.forEach((sec)=>{
       if(sec.getAttribute('id')===target){
        allSection.forEach((sec)=>{
            sec.classList.remove("active");
          
             
          
        })
     
         sec.classList.add("active");
       }
       
    })
 
   
}

const navTogglebtn  = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglebtn.addEventListener('click',asideSectionTogglebtn)
function asideSectionTogglebtn(){
        aside.classList.toggle('open');
        navTogglebtn.classList.toggle('open');
        allSection.forEach((sec)=>{
            sec.classList.toggle('open');
        })
}


const hireMe = document.querySelector('.hire-me');
hireMe.addEventListener('click',()=>{
    const sectionIndex = hireMe.getAttribute('data-section-index');
    console.log(sectionIndex)

   showSection(hireMe);
   updateNav(hireMe);
   addBackSection(hireMe)
})  

function updateNav(el){
    
    const target  = el.getAttribute('href').split('#')[1];
    const navList = document.querySelectorAll(".navlist");
    navList.forEach((nav)=>{
        if(nav.getAttribute('href').split('#')[1]==target){
            navList.forEach((nav)=>{
                nav.classList.remove("active")
            })
            nav.classList.add("active")
        }
     
    });
    
}