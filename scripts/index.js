

// start point
document.addEventListener("DOMContentLoaded", (e) => {
    const BURGER_BTN = document.querySelector(".header__burger");
    const BURGER_VIEW = document.querySelector(".header__burger_view");
    const HEADER = document.querySelector("header");
    BURGER_BTN.addEventListener("click", (e) => {
        BURGER_BTN.classList.toggle('active');
        BURGER_VIEW.classList.toggle('active');
        HEADER.classList.toggle('active-burger')
    })
})