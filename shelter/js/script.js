 const headerBurger = document.getElementsByClassName('header-burger')[0];
 const headerNav = document.getElementsByClassName('header-nav')[0,1,2,3];

//  document.headerBurger.style.color = 'blue';
 
//  headerBurger.style.right = '320px';
 
 headerBurger.addEventListener('click', function() {

    const headerBurgerRight = window.getComputedStyle(headerNav).right;
    
    if (headerBurgerRight.right === '0px') {
        return headerBurgerRight.right = '320px';
    }  else  {
        return headerBurgerRight.right = '0px';
    }
});


