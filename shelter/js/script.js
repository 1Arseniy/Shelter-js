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
           body.classList.toggle('active')
           popapBackground.classList.toggle('active')
          })
      })
      
  /*    popapClick.forEach(function(click) {
      click.addEventListener('click', function() {
       popapBackground.forEach(function(pop){
          pop.classList.toggle('active')
       })
        popapBackground.classList.toggle('active')
      })
    }) */
        modaleButton.addEventListener('click', function(){
          if (modaleWindow.classList.contains('active')) {
             modaleWindow.classList.remove('active');
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
          modaleWindow.classList.remove('active');
       }
 
       if (body.classList.contains('active')) {
           body.classList.remove('active');
       }

       if (popapBackground.classList.contains('active')) {
          popapBackground.classList.remove('active');
       }
    })
