const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    spaceBetween: 0,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
  
  // spaceBetween: -0,
  // centeredSlides: true,
  // slidesPerView: "3",
    
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

console.log(Swiper);