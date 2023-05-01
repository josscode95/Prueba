window.addEventListener('load', function(){
    /* ANIMATIONS INTRO */ 
    setTimeout(() => {
        var texto_1 = document.getElementById("text__top--1");
        texto_1.style.opacity = '1';
        texto_1.style.transition = 'opacity 1s ease-in';
    }, 300);
   setTimeout(() => {
        var texto_2 = document.getElementById('text__top--2');
        texto_2.style.opacity = '1';
        texto_2.style.transition = 'opacity .5s ease-in';
    }, 500);
    setTimeout(() => {
        var tachado = document.getElementById('text__top--tachado');
        tachado.style.opacity = '1';
        tachado.style.transition = 'opacity .1s ease-out';
    }, 1000);
    setTimeout(() => {
        var texto_3 = document.getElementById('text__top--3');
        texto_3.style.opacity = '1';
        texto_3.style.transition = 'opacity .7s ease-in-out';
    }, 1200);
    setTimeout(() => {
        var desktop__image = document.getElementById('desktop__image--item');
        desktop__image.style.transform = 'translateX(0)';
        desktop__image.style.transition = 'transform 1.2s ease';
    }, 500);
    /* ANIMATIONS INTRO -- END */ 
});

// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
