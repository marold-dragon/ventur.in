/**
* Swiper Slider
*/



import Swiper from 'swiper/bundle';

export default (() => {

    const swiper = new Swiper('.feature-swiper', {
        speed: 800,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        allowTouchMove: false,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2.2,
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})()


new Swiper('.testimonials-swiper', {
    speed: 800,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    allowTouchMove: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})