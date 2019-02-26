$(document).ready(function () {

  $('.skitter-large').skitter({
    fullscreen: true,
    dots: true,
    with_animations: ["fade"],
    thumbs: false,
    numbers_align: "center",
    theme: "square",
    enable_navigation_keys: "true",
    navigation: "true",
    label_animation: "slideUp"
  });

  $("#light").lightSlider({
    item: 1,
    speed: 500,
    pauseOnHover: true,
    auto: true,
    pager: false,
    responsive: [{
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });

  $("#light-slider").lightSlider({
    item: 1,
    speed: 700,
    pauseOnHover: true,
    auto: true,
    responsive: [{
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });

  $("#slider").lightSlider({
    item: 4,
    speed: 700,
    pauseOnHover: true,
    auto: true,
    pager: false,
    loop: true,
    responsive: [{
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });




  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });


});