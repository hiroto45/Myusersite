'use strict';

{
  const menu = document.querySelector(' .menu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  const slideMenu = document.querySelector('.slideMenu');
  const mask= document.querySelector('.mask');

  menu.addEventListener('click' , () =>{
     bar1.classList.toggle('active');
     bar2.classList.toggle('active');
     bar3.classList.toggle('active');
     mask.classList.toggle('active')
     slideMenu.classList.toggle('active')
  } )


  //carousel
    const images = document.querySelectorAll('.slideImg li');
    const ul = document.querySelector('.slideImg');
    let currentIndex = 0;

    function slide (){
      setTimeout(() =>{
        const slideWidth = images[currentIndex].getBoundingClientRect().width;
        currentIndex++;
        if(currentIndex > images.length -1){
          currentIndex = 0;
        }
        images.forEach(image =>{
           image.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`
        })
        slide();
      },3000);
    }
  slide()
    
  //監視API
  const targets = document.querySelectorAll('.target');
  

    function callback (entries,obs){
      entries.forEach(entry =>{
        if(!entry.isIntersecting){
          return;
        }
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      })
    }
  
    const options = {
      threshold: 0.2,
    }
  
    const observer = new IntersectionObserver(callback,options);
  
    targets.forEach(target =>{
       observer.observe(target);
    })
 
    



  

}