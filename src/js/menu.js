const mobileMenuBtnRef = document.querySelector('.mobile-menu-btn');
const mobileMenuRef = document.querySelector('.navbar-mobile');
const crossRef = document.querySelector('.icon-cross');

function openMenu() {
    mobileMenuRef.classList.toggle('is-active');
    crossRef.classList.toggle('visible');
    if (mobileMenuRef.classList.contains('is-active')) {
       document.querySelector('body').style.overflow = 'hidden';  
    } else {
        document.querySelector('body').style.overflow = 'visible'; 
    }
} 

mobileMenuBtnRef.addEventListener('click', openMenu);

