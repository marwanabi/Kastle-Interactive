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

  const slider = $('.slider');

  function onSliderAfterChange(event, slick, currentSlide) {
    $(event.target).data('current-slide', currentSlide);
  }

  function onSliderWheel(e) {
    var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data('current-slide') || 0;

    if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
    ) {
      return;
    }

    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick('slickPrev');
    } else {
      $currentSlider.slick('slickNext');
    }
  }

  slider.each(function(index, element) {
    var $element = $(element);
    // set the length of children in each loop
    // but the better way for performance is to set this data attribute on the div.slider in the markup
    $element.data('slider-length', $element.children().length);
  })
  .slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true
  })
  .on('afterChange', onSliderAfterChange)
  .on('wheel', onSliderWheel);

  $(document).scroll(function() {
    checkOffset();
  });
});
