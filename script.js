document.addEventListener("DOMContentLoaded", onDOMReady);

function onDOMReady() {
    stickyNavbarOnScroll()
    scrollUpButtonShowHide()
    slideUp()
    initActionWithMenu()
}

function stickyNavbarOnScroll() {
    window.addEventListener('scroll', onWindowScroll)

    let navbar = document.querySelector('.navbar');

    function onWindowScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky")
        }
    }
}

function scrollUpButtonShowHide() {
    window.addEventListener('scroll', onScrollBtn)

    let scrollUpBtn = document.querySelector('.scroll-up-btn');

    function onScrollBtn() {
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show")
        }
    }
}

function slideUp() {
    let scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.addEventListener('click', function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function checkMenu(inputs, menu) {
    inputs.checked = true;
    toggleMenu(inputs, menu);
}

function uncheckMenu(inputs, menu) {
    inputs.checked = false;
    toggleMenu(inputs, menu);
}

function initActionWithMenu() {
    let menu = document.querySelector('.menu');
    let inputs = document.querySelector('.check-menu');
    menu.addEventListener('click', () => uncheckMenu(inputs, menu));
    inputs.addEventListener('click', () => toggleMenu(inputs, menu));
    addEventForLinkMenu();
}

function toggleMenu(inputs, menu) {
    if (inputs.checked) {
        menu.classList.add("active");
    } else {
        menu.classList.remove("active")
    }
}

function shineLinks(event) {
    let el = event.currentTarget
    let arrEl = document.querySelector('.menu').getElementsByTagName('a');
    for (let i = 0; i < arrEl.length; i++) {
        arrEl[i].classList.remove('active');
    }
    el.classList.add('active');
}

function addEventForLinkMenu() {
    let el = document.querySelector('.menu').getElementsByTagName('a');
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener('click', (e) => shineLinks(e))
    }
}
