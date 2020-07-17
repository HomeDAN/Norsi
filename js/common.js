/**
 * Function to call main screen slider
 */

(function(){
    var swiper = new Swiper('.swiper-container', {
        cssMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
        });
})()

/**
 * Menu toggler
 */

const menuBtn = document.querySelector('.nav__menu-button'),
      closeBtn = document.querySelector('.nav__close-button')

menuBtn.addEventListener('click', ()=>{
    document.querySelector('.nav__menu').classList.add('nav__menu_active')
})

closeBtn.addEventListener('click', ()=>{
    document.querySelector('.nav__menu').classList.remove('nav__menu_active')
})

/**
 * Submenu toggler
 */

document.querySelectorAll(".menu__icon").forEach(i=>i.addEventListener('click', ()=>{
    if(i.classList.contains('menu__icon_active')){
        i.nextElementSibling.setAttribute("class", "submenu")
        i.setAttribute("class", "menu__icon")
    } else {
        i.nextElementSibling.classList.add('submenu_active')
        i.classList.add('menu__icon_active')
    }
}))
