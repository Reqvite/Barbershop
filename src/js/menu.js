const mobileMenuBtnRef = document.querySelector('.mobile-menu-btn');
const mobileMenuRef = document.querySelector('.navbar-mobile'); 
const crossRef = document.querySelector('.icon-cross');


const openMenu = () => {
      mobileMenuRef.classList.toggle('is-active');
    crossRef.classList.toggle('visible'); 
    mobileMenuBtnRef.classList.toggle('is-active')
    if (mobileMenuRef.classList.contains('is-active')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'visible'; 
    }
} 

mobileMenuBtnRef.addEventListener('click', openMenu);


const anchors = document.querySelectorAll('a[href*="#"]')


    smoothScroll() 
function smoothScroll() {
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        mobileMenuRef.classList.remove('is-active');
        mobileMenuBtnRef.classList.remove('is-active')
        crossRef.classList.remove('visible');
        document.querySelector('body').style.overflow = 'visible'; 
        const blockID = anchor.getAttribute('href').substring(1)
    
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
}

