   //   import pets from './pets.json';
   //     console.log(pets);
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

      // const pet = 
      // {
      //   "name": "Katrine",
      //   "img": "./pictures/katrine.png",
      //   "type": "Cat",
      //   "breed": "British Shorthair",
      //   "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      //   "age": "6 months",
      //   "inoculations": ["panleukopenia"],
      //   "diseases": ["none"],
      //   "parasites": ["none"]
      // }; 

      
      function showPopup(el) {
         console.log(el)
        document.getElementById('name').innerText = 'gbhbhbh';
      //   document.getElementById('image').src = pet.img;
      //   document.getElementById('type').innerText = pet.type;
      //   document.getElementById('breed').innerText = pet.breed;
      //   document.getElementById('description').innerText = pet.description;
      //   document.getElementById('age').innerText = pet.age;
      //   document.getElementById('inoculations').innerText = pet.inoculations.join(', ');
      //   document.getElementById('diseases').innerText = pet.diseases.join(', ');
      //   document.getElementById('parasites').innerText = pet.parasites.join(', ');
      }
      /*  const reversJSON =  JSON.stringify(pet);
       console.log(reversJSON); */
      

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
      
       const mainBlock = document.querySelectorAll('.main-block');
       const modaleWindow = document.querySelector('.popap-body');
       const modaleButton = document.querySelector('.modale-button');
       const popapBackground = document.querySelector('.popap-background');
   

        mainBlock.forEach(function(el) {
          el.addEventListener('click', function() {
           modaleWindow.classList.toggle('active')
           setTimeout(() => modaleWindow.classList.toggle('opacity'),0);
           body.classList.toggle('active')
           popapBackground.classList.toggle('active')
           showPopup(el);
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
 
    const buttonLeft = document.querySelectorAll('.button-left');
    const buttonRight = document.querySelectorAll('.button-right');
    const carousel = document.querySelector('.carousel');
    let index = 0;

    buttonRight.forEach((el) => {
       el.addEventListener('click', () => {
       index++;
       carousel.classList.add('active')
       carousel.style.transform = `translateX(-${index * 100}%)`;
     })
    })
       
     buttonLeft.forEach((el) => {
     el.addEventListener('click', () => {
       index--;
       carousel.classList.add('active')
       carousel.style.transform = `translateX(-${index * 100}%)`;
     })
    })
     
 
 