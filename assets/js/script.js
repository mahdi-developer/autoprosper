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

document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".date-slider");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            perPage: 1,
            perMove: 1,
            gap: '1.5rem',
        });

        splide.mount();
    });
});


//Funnels Code
let gd = document.getElementById('myDiv');
let data = [{
    type: 'funnelarea',
    scalegroup: "first",
    values: [100, 80, 60, 25, 15],
    textinfo: "value+text",
    text: ['New', 'Contacted', 'APPT. Scheduled', 'Visits', 'Sold'],
    textfont: {
        family: '"Plus Jakarta Sans", sans-serif',
        size: 14,
        color: 'white',
        weight: 'bold'
    },
    marker: {
        colors: ["FF3363", "FFE664", "00FFA2", "219FFF", "17BD8D"],
        line: {
            color: ["ffffff", "ffffff", "ffffff", "ffffff", "ffffff", "ffffff"]
        }
    },
    domain: {
        x: [, 1],
        y: [0.55, 1]
    }
}];

var layout = {
    margin: {
        l: 0,
        r: 0,
        t: 0,
        b: 0
    }, // Set all margins to zero
    width: 276,
    height: 264,
    funnelmode: "stack",
    showlegend: false
};

Plotly.newPlot('myDiv', data, layout);

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true,        // default
    scroll: true
  }
  )
  wow.init();
