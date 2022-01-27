function checkOffset() {
  if ($('#side-menu').offset().top + $('#side-menu').height() >= $('#main-footer').offset().top - 100) $('#side-menu').css('opacity', '0');
  if ($(document).scrollTop() + window.innerHeight < $('#main-footer').offset().top) $('#side-menu').css('opacity', '1');
}

function scrollID() {
  var lastId,
   topMenu = $("#menu-center"),
   topMenuHeight = topMenu.outerHeight()+1,
   menuItems = topMenu.find("a"),
   scrollItems = menuItems.map(function(){
     var item = $($(this).attr("href"));
      if (item.length) { return item; }
   });

  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
      scrollTop: $(this.hash).offset().top - 216
    }, 0);
    e.preventDefault();
  });

  $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }
  });
}

$(document).ready(function() {
  scrollID();

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    variableWidth: false ,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev">' + '<img src="assets/images/arrow.svg"' + '/></button>',
    nextArrow: '<button type="button" class="slick-next">' + '<img src="assets/images/arrow.svg"' + '/></button>',
    customPaging: function(slick,index) {
        return '<a>' + (index + 1) + '</a>';
    }
  });

  $(document).scroll(function() {
    checkOffset();
    var top_offset = $(window).scrollTop();
      if (top_offset < 230) {
        $('ul').removeClass('active');
      } else {
        $('ul').addClass('active');
      }
  });

});
