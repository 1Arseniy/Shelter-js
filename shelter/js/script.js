      document.getElementById('header-burger').addEventListener('click', function() {
         document.querySelector('.header-burger').classList.toggle('open')
         document.querySelector('.header-nav').classList.toggle('open')
         document.querySelector('.header').classList.toggle('open')
         document.querySelector('.header-background').classList.toggle('open')
         document.querySelector('.body').classList.toggle('open')
    })