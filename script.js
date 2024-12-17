

document.addEventListener('DOMContentLoaded', () => {
    const insightLink = document.querySelector('.insight');
    const slideDiv = document.querySelector('.slide');
    let isVisible = false;

    
    insightLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        isVisible = !isVisible;
        slideDiv.style.display = isVisible ? 'block' : 'none';
    });

    
    document.addEventListener('click', (e) => {
        if (!insightLink.contains(e.target) && !slideDiv.contains(e.target)) {
            slideDiv.style.display = 'none';
            isVisible = false;
        }
    });
});









var one=document.querySelector(".one");
var two=document.querySelector(".two");
var three=document.querySelector(".three");
var four=document.querySelector(".four");

gsap.from(".one",{
    opacity:0,
    duration:1,
    x:200,
    scale:0,
    scrollTrigger:{
        trigger:".one",
        scroller:"body",
        markers:true,
        start:"top 80%",
        
    }
})

gsap.from(".two",{
    opacity:0,
    duration:1,
    x:100,
    scale:0,
    scrollTrigger:{
        trigger:".one",
        scroller:"body",
        markers:true,
        start:"top 80%",
        
    }
})



gsap.from(".three",{
    opacity:0,
    duration:1,
    x:-100,
    scale:0,
    scrollTrigger:{
        trigger:".one",
        scroller:"body",
        markers:true,
        start:"top 80%",
        
    }
})


gsap.from(".four",{
    opacity:0,
    duration:1,
    scale:0,
    x:-200,
    scrollTrigger:{
        trigger:".one",
        scroller:"body",
        markers:true,
        start:"top 80%",
        
    }
})


gsap.utils.toArray('.btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    
    gsap.fromTo(button.querySelector('.arrr'), 
      { x: '-100%' },  
      { x: '0%', duration: 0.4, ease: 'power2.out',opacity:1 }
    );

   
    gsap.to(button, { scale: 1.1, duration: 0.2, ease: 'power2.out' });
  });

  button.addEventListener('mouseleave', () => {
   
    gsap.to(button.querySelector('.arrr'), { x: '-100%', duration: 0.4, ease: 'power2.in',opacity:0 });

   
    gsap.to(button, { scale: 1, duration: 0.2, ease: 'power2.in' });
  });
});







    var menu=document.querySelector(".abc");

    var cross=document.querySelector(".cross-icon");


    var cross_t=gsap.timeline()
    cross_t.to(".cross-icon",{
       rotate:90,
       duration:0.2,
       delay:0

     })
     cross_t.pause();


     var t1 = gsap.timeline()

     t1.to(".navbar-inphone",{
        x:"-80vw",
        duration:0.25,
        delay:0.1
     })


     t1.from(".navbar-inphone .navbar-nav .inter",{
        x:"70%",
        duration:0.25,
        stagger:0.2,
        opacity:0

     })

     t1.from(".navbar-inphone .cross",{
        opacity:0
     })

     t1.pause();

     
    

    cross.addEventListener("click",(e)=>{
        cross_t.play();
       t1.reverse();
    })

    
      
    

     
     
     
    menu.addEventListener("click",(e)=>{
        t1.play();
        cross_t.reverse();
    })

