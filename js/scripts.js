
$(function() {

  $('.search-hover').click(function() {
    $('.search').fadeIn();
  });

  $('.search-icon-x').click(function() {
    $('.search').fadeOut(500);
  });



  var num = 200;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('.nav-bar-wrapper').addClass('fixed');
    } else {
      $('.nav-bar-wrapper').removeClass('fixed');
    }
  });
});
