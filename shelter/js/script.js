     /*   import pets from './pets.json' assert { type: 'json'};
       console.log(pets); */
 /* 
       fetch('')
       .then(response => {
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           return response.json();
       })
       .then(pets => {
           console.log(pets[2]);
       })
       .catch(error => console.error('Error loading pets:', error)); */

      const pet = 
      {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      }; 

      const reversJSON =  JSON.stringify(pet);
      console.log(reversJSON);

      const headerBurger = document.querySelector('.header-burger');
      const headerNav =  document.querySelector('.header-nav');
      const headerBackground =  document.querySelector('.header-background');
      const body =  document.querySelector('.body');

     headerBurger.addEventListener('click', function() {
         headerBurger.classList.toggle('open')
         headerNav.classList.toggle('open')
         headerBackground.classList.toggle('open')
         body.classList.toggle('open')
    })

    headerBackground.addEventListener('click', function() {
      if (headerNav.classList.contains('open')) {
         headerNav.classList.remove('open');
      }

      if (headerBurger.classList.contains('open')) {
         headerBurger.classList.remove('open');
      }
      
      if (headerBackground.classList.contains('open')) {
         headerBackground.classList.remove('open');
      }

      if (body.classList.contains('open')) {
       body.classList.remove('open');
      }
    })

    const headerNavRevers = document.querySelector('.header-nav-revers');
    const headerNavA = document.querySelectorAll('.header-nav-a');

      function removeClass() {
      if (headerNav.classList.contains('open'))
          headerNav.classList.remove('open');
  
      if (headerBurger.classList.contains('open'))
          headerBurger.classList.remove('open');
  
      if (headerBackground.classList.contains('open'))
          headerBackground.classList.remove('open');
  
      if (body.classList.contains('open'))
          body.classList.remove('open');
     }
    
      headerNavA.forEach(el => {
        el.addEventListener('click', removeClass)
      })

   headerNavRevers.addEventListener('click', function(){
        if (headerBurger.classList.contains('open')) {
             headerBurger.classList.remove('open');
        }
        if (headerNav.classList.contains('open')) {
             headerNav.classList.remove('open');
        }

        if (headerBackground.classList.contains('open')) {
             headerBackground.classList.remove('open');
        }

        if (body.classList.contains('open')) {
             body.classList.remove('open');
        }
      })
      
       const popapClick = document.querySelectorAll('.main-block');
       const modaleWindow = document.querySelector('.popap-body');
       const modaleButton = document.querySelector('.modale-button');
       const popapBackground = document.querySelector('.popap-background');
   
        popapClick.forEach(function(popap) {
          popap.addEventListener('click', function() {
           modaleWindow.classList.toggle('active')
           setTimeout(() => modaleWindow.classList.toggle('opacity'),0);
           body.classList.toggle('active')
           popapBackground.classList.toggle('active')
          })
      })
      
        modaleButton.addEventListener('click', function(){
           if (modaleWindow.classList.contains('active')) {
               modaleWindow.classList.remove('opacity');
              setTimeout(() => modaleWindow.classList.remove('active'),500);
            }
            
            if (body.classList.contains('active')) {
               body.classList.remove('active');
            }  
            if (popapBackground.classList.contains('active')) {
               popapBackground.classList.remove('active');
            }
         })
         
       popapBackground.addEventListener('click', function(){
       if (modaleWindow.classList.contains('active')) {
          modaleWindow.classList.remove('opacity');
          setTimeout(() => modaleWindow.classList.remove('active'), 500);
       }
 
       if (body.classList.contains('active')) {
           body.classList.remove('active');
       }

       if (popapBackground.classList.contains('active')) {
          popapBackground.classList.remove('active');
       }
    })
 
    const buttonLeft = document.querySelector('.button-left');
    const buttonRight = document.querySelector('.button-right');
    const carousel = document.querySelector('.carousel')

 /*    const removeEvent = () => {
      carousel.classList.add('active');
      setTimeout(() => carousel.classList.remove('active'), 2000);
       buttonLeft.removeEventListener('click', removeEvent);
    }
    
    buttonLeft.addEventListener('click', removeEvent);
   
    carousel.addEventListener('animationend', () => {
       carousel.classList.remove('active');
    }) */

    buttonRight.addEventListener('click', () => {
      carousel.classList.add('active')
    })
    
  /*   buttonRight.addEventListener('click', () => {
      carousel.classList.add('active')
      setTimeout(() => carousel.classList.remove('active'), 1000);
    }) */
    

 