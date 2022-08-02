// Mobile menu
const mobileButtonElement = document.getElementById('btn-menu');
mobileButtonElement.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobile-menu');

    if(!mobileButtonElement.classList.contains('open')) {
        mobileButtonElement.classList.add('open');
        mobileMenu.classList.add('open');
        document.getElementsByTagName('body')[0].classList.add('fixed');
    } else {
        mobileButtonElement.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.getElementsByTagName('body')[0].classList.remove('fixed');
    }
})


// Back to top
let backToTop = document.getElementById("back-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
        document.getElementsByTagName('header')[0].classList.add('fixed');
        document.getElementsByTagName('body')[0].classList.add('padding-add');
        backToTop.style.display = "block";
    } else {
        document.getElementsByTagName('header')[0].classList.remove('fixed');
        document.getElementsByTagName('body')[0].classList.remove('padding-add');
        backToTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}