let mobileMenu = document.querySelector('.header .mobile-menu');
let burgerBtn = document.querySelector('.header .burger-btn');
let closeMenu = document.querySelector('.header .close-menu');


burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('showMenu')

});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('showMenu')

});