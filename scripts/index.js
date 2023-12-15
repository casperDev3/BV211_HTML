

// start point
document.addEventListener("DOMContentLoaded", (e) => {
    // init 
    const BURGER_BTN = document.querySelector(".header__burger");
    const BURGER_VIEW = document.querySelector(".header__burger_view");
    const HEADER = document.querySelector("header");
    // tabs elements
    const TAB_NAV_BTNS = document.querySelectorAll(".tab__nav_item");
    const TAB_CONTENT_VIEWS = document.querySelectorAll(".tab__nav_content");

    BURGER_BTN.addEventListener("click", (e) => {
        BURGER_BTN.classList.toggle('active');
        BURGER_VIEW.classList.toggle('active');
        HEADER.classList.toggle('active-burger')
    })
    // tabs events
    TAB_NAV_BTNS.forEach((e) => {
        e.addEventListener("click", (e) => {
            const NAV_ID = e.target.dataset.nav;
            // turn off status in all elements
            TAB_NAV_BTNS.forEach((e)=>{
                e.classList.remove("clicked")
            })
            TAB_CONTENT_VIEWS.forEach((e) => {
                e.classList.add("d-none")
            })
            // turn on status on current element
            e.target.classList.add("clicked")
            TAB_CONTENT_VIEWS.forEach((e) => {
                if (e.dataset.content == NAV_ID) {
                    e.classList.remove("d-none")
                }
            })
        })
    })

    // sliders
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        effect: "coverflow",
        zoom: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})