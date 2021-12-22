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
  });
  $(document).scroll(function() {
    checkOffset();
  });
});
