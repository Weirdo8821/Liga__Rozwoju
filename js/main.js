$(function () {


   $('.team-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
         {
            breakpoint: 1106,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
   });

   $('.btn__menu').on('click', function () {
      $('.menu__list').slideToggle();
   });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};