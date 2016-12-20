$(function() {
  // $(".mobile-menu-btn").on('click', function() {
  //   $("body").toggleClass('js-navbar-open');
  // });
  //
  // var num = $('.container').offset().top + $('.container').height();
  //
  // $(window).bind('scroll', function () {
  //   if ($(window).scrollTop() > num) {
  //     $('.main-nav').addClass('fixed');
  //   } else {
  //     $('.main-nav').removeClass('fixed');
  //   }
  // });
    function isScrolledTo(elem) {
      var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top; //num of pixels above the elem
      var elemBottom = elemTop + $(elem).height();
      return ((elemTop <= docViewTop));
    }
    var catcher = 0;
    var sticky = $('.main-nav');
    $(window).scroll(function() {
        if(isScrolledTo(sticky)) {
            sticky.css('position','fixed');
            sticky.css('top','0px');
        }
	       var stopHeight = catcher;
	        if ( stopHeight > sticky.offset().top) {
            sticky.css('position','static');
            sticky.css('top', 0);
        }
    });

});
