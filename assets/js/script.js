var splide = new Splide('.splide', {
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


function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text2.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      }
    }
  }
  check();