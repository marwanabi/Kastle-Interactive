function checkOffset() {
  if ($('#side-menu').offset().top + $('#side-menu').height() >= $('#main-footer').offset().top - 100) $('#side-menu').css('opacity', '0');
  if ($(document).scrollTop() + window.innerHeight < $('#main-footer').offset().top) $('#side-menu').css('opacity', '1');
}

function scrollID() {
  $('.menu-item').on('click', function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 216
    }, 0);
    return false;
  });
}

$(document).ready(function() {
  scrollID();

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    customPaging: function(slick,index) {
        return '<a>' + (index + 1) + '</a>';
    }
  });

  $(document).scroll(function() {
    checkOffset();
  });
  $('#capacity-limits .slider').on('afterChange', function() {
    $('#capacity-limits .slick-dots').attr('data-swipe', $('#capacity-limits .slick-active').index());
    });



    $('#health-and-safety-screening .slider').on('afterChange', function() {
    $('#health-and-safety-screening .slick-dots').attr('data-swipe', $('#health-and-safety-screening .slick-active').index());
    });
    $('#sanitizing-surfaces .slider').on('afterChange', function() {
    $('#sanitizing-surfaces .slick-dots').attr('data-swipe', $('#sanitizing-surfaces .slick-active').index());
    });
    $('#improving-air-quality .slider').on('afterChange', function() {
    $('#improving-air-quality .slick-dots').attr('data-swipe', $('#improving-air-quality .slick-active').index());
    });
    $('#transparent-communication .slider').on('afterChange', function() {
    $('#transparent-communication .slick-dots').attr('data-swipe', $('#transparent-communication .slick-active').index());
    });
});
