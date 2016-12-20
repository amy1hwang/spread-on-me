
$(function() {
  // $(".mobile-menu-btn").on('click', function() {
  //   $("body").toggleClass('js-navbar-open');
  // });

  var num = 200;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('.nav-bar-wrapper').addClass('fixed');
    } else {
      $('.nav-bar-wrapper').removeClass('fixed');
    }
  });
});
