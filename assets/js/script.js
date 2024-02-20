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


//Funnels Code
// var gd = document.getElementById('myFunnel');
// var data = [{type: 'funnelarea', scalegroup: "first", values: [500, 450, 340, 230, 220, 110],
//     textinfo: "value", title: {position: "top left",},
//     domain: {x: [0, 0.5], y: [0, 0.5]}}];

// var layout = {width: 600,shapes: [
//             {x0: 0, x1: 0, y0: 0, y1: 0}]}

// Plotly.newPlot('myFunnel', data, layout);