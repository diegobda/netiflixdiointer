var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 10,
    loop: true,
    coverflowEffect: {
      rotate: 2,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
        
    },
    
  });