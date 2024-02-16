document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".happy-clients");

  splideElements.forEach(function (element) {
      let splide = new Splide(element, {
          type: 'loop',
          drag: 'free',
          gap: '30px',
          perPage: 8,
          autoStart: true,
          pagination: false,
          arrows: false,
          autoScroll: {
              speed: 1,
          },
          breakpoints: {
              640: {
                  perPage: 2,
                  gap: '.7rem',
                  height: '6rem',
              },
              480: {
                  perPage: 1,
                  gap: '.7rem',
                  height: '6rem',
              },
          },
      });

      // Mount Splide with Extensions
      splide.mount(window.splide.Extensions);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".car-slide");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      perPage: 3,
      perMove: 1,
      gap: '1.5rem',
      breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            height: '6rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '6rem',
        },
    },
    });

    splide.mount();
  });
});