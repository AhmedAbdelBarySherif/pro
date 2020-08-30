$(document).ready(function() {


  // Reusable function for Activating elements
  function activated(element) {
    $(element).each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
  }
  
  activated('.product__info_size_chart_line');
  activated('.product__info_color li');
  activated('.product__info_size li');
  activated('.product__cards .slide > ul li');

  // Product Slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true,
    dots: false,
    focusOnSelect: true
  });

  // ZOOM
  $('.ex1').zoom();

  $('.slick-prev.slick-arrow').html(`<i class="fas fa-chevron-right"></i>`);
  $('.slick-next.slick-arrow').html(`<i class="fas fa-chevron-left"></i>`);

  // Card product slider
  $('.product__cards').slick({
    autoplay: true,
    autoplaySpeed: 1000000,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });

});


